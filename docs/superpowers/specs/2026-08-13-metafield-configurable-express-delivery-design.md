# Metafield-Configurable Express Delivery Design

## Objective

Make the Express Delivery surcharge configurable per sellable Shopify product while preserving the existing pincode and warehouse delivery-date calculation. Standard Delivery is the PDP default. Express charging remains an all-or-nothing cart decision, and a qualifying Express cart is charged once using the highest configured charge among its main product lines.

## Shopify data model

Create the following Shopify product metafield definition:

- Name: `Express delivery charge`
- Namespace and key: `custom.express_delivery_charge`
- Type: `product_reference`
- Cardinality: one product

Merchants select one of the charge products, such as ₹50, ₹100, ₹150 through ₹500, on each sellable product. The theme resolves the referenced product's `selected_or_first_available_variant` and uses that variant's Shopify ID, price, title, and image.

If the metafield is blank, invalid, references an unavailable product, or has no available variant, the theme falls back to the existing ₹50 Express Delivery charge variant `53547247698227`.

## PDP behavior

The delivery selector remains hidden until the existing six-digit pincode inventory request succeeds and `setMinDeliveryDate()` returns the product's total TAT.

After the date calculation succeeds:

1. Standard Delivery is enabled and selected by default.
2. Express Delivery is enabled only when total TAT is at most two days.
3. The Express date is the earliest date produced by the existing date calculation.
4. The Standard date is the Express date plus two days, retaining the existing Sunday-delivery rule.
5. Selecting either mode updates the hidden `Delivery date` value used at Add to Cart.

The Standard message is generated from the calculated Standard day offset:

`It will be delivered within X–Y days or earlier.`

Here, `X` is the number of calendar days from the current storefront date to the calculated Standard date and `Y = X + 1`. For example, a calculated Standard offset of four days displays `It will be delivered within 4–5 days or earlier.` Values below zero are clamped to zero.

The Express option displays the actual price of the configured charge variant. Products using the fallback display the fallback variant's actual Shopify price. Price text must not be derived from the metafield product title.

## Line-item contract

When a main product is added to the cart, its private line-item properties include:

- `_delivery_mode`: `standard` or `express`
- `_express_eligible`: `1` or `0`
- `_express_date`: `DD-MM-YYYY`
- `_standard_date`: `DD-MM-YYYY`
- `_express_charge_variant_id`: configured or fallback Shopify variant ID
- `_express_charge_price_paise`: configured or fallback variant price in paise
- `Delivery date`: the date corresponding to the selected mode

The charge ID and price are a storefront snapshot used to select the desired charge product. Shopify remains the source of truth for the price actually charged when the charge variant is added to the cart.

Charge lines carry `_is_express_charge: 1` and do not render as ordinary cart products. Existing gift-card and sleeve lines associated with a main product remain auxiliary lines and do not independently select a delivery mode or surcharge.

## Cart enforcement

Enforcement runs after cart mutations and on page load. It is idempotent and converges the cart to one of two states.

### All-Express state

The cart qualifies only when every main product line has `_delivery_mode: express` and `_express_eligible: 1`.

The enforcer:

1. Resolves each main line's configured charge, applying the ₹50 fallback to missing or invalid legacy values.
2. Chooses the charge with the highest price snapshot.
3. Removes any obsolete or duplicate Express charge lines.
4. Adds exactly one unit of the selected highest-priced charge variant.
5. Preserves every main line's Express `Delivery date`.
6. Displays the latest `_express_date` across main lines as the cart-level promise.

If two configured charges have the same highest price, the enforcer selects the numerically smallest variant ID to make the result deterministic.

### Standard fallback state

If any main product is Standard, Express-ineligible, or lacks a valid Express selection, the entire cart becomes Standard.

The enforcer:

1. Removes all Express charge lines.
2. Changes every main product's `_delivery_mode` to `standard`.
3. Replaces every main product's `Delivery date` with its `_standard_date` when that date is valid.
4. Preserves all unrelated line-item properties while changing the line.
5. Displays the latest Standard date across main product lines as the cart-level promise.

Auxiliary gift-card and sleeve lines are preserved and excluded from the all-Express qualification check. A legacy standalone product line that cannot be identified as auxiliary is treated as a main product and forces Standard fallback.

## Main and auxiliary line classification

A non-charge line is a main delivery line when it has any delivery contract property (`_delivery_mode`, `_express_date`, `_standard_date`, `Delivery date`, or `Pincode`).

An associated gift-card or sleeve line is auxiliary when it has `Product title` but none of the delivery contract properties. Auxiliary lines do not affect Express qualification. Any non-charge line that matches neither rule is conservatively classified as a main line and forces Standard fallback.

## Error handling

- Blank, malformed, unavailable, or missing metafield references use variant `53547247698227`.
- Missing or invalid line-item charge metadata uses the same fallback.
- A failed cart mutation does not report a successful mode or fee change. It logs a prefixed storefront warning and leaves the enforcer eligible to retry on the next cart event.
- A failed optional price-hydration request hides an unverified PDP price label rather than displaying ₹0. The actual cart charge continues to use Shopify's variant price.
- Cart mutations are serialized so rapid add, remove, and quantity events cannot create duplicate charge lines or drop the final enforcement pass.

## Admin setup

Before release:

1. Create the `custom.express_delivery_charge` product-reference metafield definition in Shopify Admin.
2. Confirm each charge product has one available storefront-published variant with the intended price.
3. Assign charge products to the relevant sellable products.
4. Confirm fallback variant `53547247698227` is available and priced at ₹50.

Products may be migrated gradually because an empty metafield uses the fallback.

## Testing

Automated Node tests will cover:

- Liquid reads `custom.express_delivery_charge` and emits the referenced variant details.
- Missing metafield configuration emits the ₹50 fallback.
- Standard is selected after a successful eligible pincode response.
- Standard copy uses `X–(X+1)` and clamps negative offsets.
- Express is disabled for TAT greater than two.
- Add to Cart includes the delivery-mode, dates, charge variant, and charge price properties.
- A single Express product adds its configured charge once.
- Multiple Express products add only the highest-priced configured charge.
- Equal highest prices resolve deterministically.
- Obsolete and duplicate charge lines are removed.
- A mixed cart removes charges, changes all main lines to Standard, and updates their `Delivery date` properties without dropping unrelated properties.
- Associated gift-card and sleeve lines do not force Standard fallback.
- Unclassified legacy lines do force Standard fallback.
- Repeated enforcement is idempotent.

Manual theme-preview verification will cover one eligible and one ineligible pincode, a missing metafield, two different configured fees, a mixed Standard/Express cart, cart drawer rendering, cart-page rendering, and checkout subtotal inclusion.

## Out of scope

- Creating metafield definitions through an app or deployment script.
- Replacing the charge product with a native Shopify shipping rate.
- Server-side protection against Storefront API or cart-property manipulation.
- A cart UI for switching an existing line from Standard back to Express.
- Per-quantity Express charging; the selected charge is added once per qualifying cart.
