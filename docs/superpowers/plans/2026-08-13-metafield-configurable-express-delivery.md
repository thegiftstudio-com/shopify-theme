# Metafield-Configurable Express Delivery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Configure each PDP's Express charge through a product-reference metafield, default the PDP to Standard, charge the highest configured Express fee once, and normalize mixed carts and delivery dates to Standard.

**Architecture:** Liquid resolves `product.metafields.custom.express_delivery_charge.value` and emits a per-product charge snapshot. A small CommonJS/browser-compatible utility asset owns deterministic date, line-classification, and charge-selection rules. The global Express enforcer consumes those utilities, serializes cart mutations, and uses Shopify cart endpoints for the actual charge line and delivery-property updates.

**Tech Stack:** Shopify Liquid, browser JavaScript/jQuery, Shopify Ajax Cart API, Node.js built-in test runner.

## Global Constraints

- The metafield is `custom.express_delivery_charge` with Shopify type `product_reference` and one selected product.
- Fallback charge variant is `53547247698227` and expected fallback price is ₹50.
- Standard is selected by default after successful pincode/TAT calculation.
- Standard copy is `It will be delivered within X–Y days or earlier.` where `Y = X + 1`.
- A cart qualifies for Express only when every main delivery line is Express-selected and eligible.
- A qualifying cart gets exactly one charge line: the highest configured fee.
- A non-qualifying cart removes all charge lines and changes all main delivery lines and their `Delivery date` properties to Standard.
- Auxiliary gift-card and sleeve lines do not participate in delivery qualification.

---

### Task 1: Pure Express delivery rules

**Files:**
- Create: `assets/express-delivery-utils.js`
- Create: `tests/express-delivery-utils.test.js`

**Interfaces:**
- Produces: `ExpressDeliveryUtils.standardWindow(standardDate, today)` returning `{ start, end }`.
- Produces: `ExpressDeliveryUtils.classifyLine(item)` returning `charge`, `main`, or `auxiliary`.
- Produces: `ExpressDeliveryUtils.normalizeCharge(item, fallback)` returning `{ variantId, pricePaise }`.
- Produces: `ExpressDeliveryUtils.chooseHighestCharge(mainLines, fallback)` returning the deterministic highest charge.
- Produces: `ExpressDeliveryUtils.cartQualifiesForExpress(mainLines)` returning a boolean.

- [ ] **Step 1: Write failing unit tests**

Cover the 4–5 day range, negative offset clamping, charge/main/auxiliary classification, fallback metadata, highest-price selection, numeric variant-ID tie breaking, and all-or-nothing qualification.

- [ ] **Step 2: Verify the tests fail**

Run: `node --test tests/express-delivery-utils.test.js`

Expected: FAIL because `assets/express-delivery-utils.js` does not exist.

- [ ] **Step 3: Implement the minimal UMD utility**

Export through `module.exports` under Node and `window.ExpressDeliveryUtils` in the browser. Parse prices and variant IDs defensively; compare price first and numeric variant ID second.

- [ ] **Step 4: Verify the tests pass**

Run: `node --test tests/express-delivery-utils.test.js`

Expected: all Task 1 tests PASS.

- [ ] **Step 5: Commit**

```powershell
git add assets/express-delivery-utils.js tests/express-delivery-utils.test.js
git commit -m "feat: add express delivery rule utilities"
```

### Task 2: Render metafield charge configuration and Standard-default PDP

**Files:**
- Modify: `layout/theme.liquid`
- Modify: `snippets/delivery_date.liquid`
- Modify: `assets/cart_drawer_func.js`
- Modify: `assets/cart_drawer_func.js.liquid`
- Create: `tests/express-delivery-pdp.test.js`

**Interfaces:**
- Consumes: `ExpressDeliveryUtils.standardWindow()`.
- Produces hidden inputs `express_charge_variant_id` and `express_charge_price_paise`.
- Produces line properties `_express_charge_variant_id` and `_express_charge_price_paise`.

- [ ] **Step 1: Write failing PDP contract tests**

Assert that Liquid reads `product.metafields.custom.express_delivery_charge.value`, resolves `selected_or_first_available_variant`, emits the fixed fallback ID, loads `express-delivery-utils.js`, selects Standard for both eligible and ineligible TAT, generates the Standard window message through the utility, and copies charge ID/price into both cart drawer assets.

- [ ] **Step 2: Verify the PDP tests fail**

Run: `node --test tests/express-delivery-pdp.test.js`

Expected: FAIL because the metafield contract and new hidden properties are absent.

- [ ] **Step 3: Implement the Liquid and Add-to-Cart changes**

Resolve the metafield product and available variant in Liquid. Emit the variant's ID and price, or variant `53547247698227` and `5000` paise when resolution fails. Change `setupExpressStandardSelector()` so Standard is always checked and applied initially. Render `It will be delivered within X–Y days or earlier.` using the calculated Standard date. Preserve Express eligibility and allow the customer to opt into Express.

- [ ] **Step 4: Verify PDP tests and JavaScript syntax**

Run: `node --test tests/express-delivery-pdp.test.js tests/express-delivery-utils.test.js`

Run: `node --check assets/cart_drawer_func.js`

Expected: all tests PASS and syntax check exits zero.

- [ ] **Step 5: Commit**

```powershell
git add layout/theme.liquid snippets/delivery_date.liquid assets/cart_drawer_func.js assets/cart_drawer_func.js.liquid tests/express-delivery-pdp.test.js
git commit -m "feat: configure PDP express charge from metafield"
```

### Task 3: Dynamic highest-fee cart enforcement

**Files:**
- Modify: `snippets/express-charge-config.liquid`
- Create: `tests/express-delivery-cart.test.js`

**Interfaces:**
- Consumes: `ExpressDeliveryUtils.classifyLine()`, `normalizeCharge()`, `chooseHighestCharge()`, and `cartQualifiesForExpress()`.
- Produces: `window.runExpressEnforcement()` resolving to whether the cart changed.

- [ ] **Step 1: Write failing cart-enforcement contract tests**

Assert that enforcement supports multiple charge variants, selects the highest price, removes obsolete/duplicate charge lines, excludes auxiliary lines, applies the ₹50 fallback, preserves all unrelated properties during `/cart/change.js`, changes mixed-cart main lines to `_delivery_mode: standard`, and replaces `Delivery date` with `_standard_date`.

- [ ] **Step 2: Verify the cart tests fail**

Run: `node --test tests/express-delivery-cart.test.js`

Expected: FAIL because the current enforcer is hard-coded to one charge variant and never normalizes delivery dates.

- [ ] **Step 3: Implement serialized dynamic enforcement**

Replace the single fixed charge check with `_is_express_charge` classification. Build the desired state from main lines. In Express state, remove charge lines whose variant is not the chosen variant, collapse duplicates/quantity, then add the desired variant if absent. In Standard state, remove every charge and sequentially change each main line while passing its complete preserved property object with the Standard mode/date overrides. Re-fetch and re-run when queued cart mutations arrive during enforcement.

- [ ] **Step 4: Verify cart and regression tests**

Run: `node --test tests/express-delivery-cart.test.js tests/express-delivery-pdp.test.js tests/express-delivery-utils.test.js tests/rakhi-addons.test.js`

Expected: all tests PASS.

- [ ] **Step 5: Commit**

```powershell
git add snippets/express-charge-config.liquid tests/express-delivery-cart.test.js
git commit -m "feat: enforce highest express delivery charge"
```

### Task 4: Cart rendering and end-to-end static verification

**Files:**
- Modify: `snippets/cart-drawer.liquid`
- Modify: `sections/main-cart-items.liquid`
- Modify: `sections/main-cart-footer.liquid`
- Create: `tests/express-delivery-rendering.test.js`

**Interfaces:**
- Consumes charge lines marked with `_is_express_charge`.
- Produces one aggregated fee row and the latest delivery promise in drawer and cart page.

- [ ] **Step 1: Write failing rendering tests**

Assert that all marked charge lines are hidden from ordinary item rows, the fee row discovers the surviving dynamic charge rather than a fixed variant, and the cart summary containers remain available after section refreshes.

- [ ] **Step 2: Verify rendering tests fail where behavior is incomplete**

Run: `node --test tests/express-delivery-rendering.test.js`

Expected: FAIL on any dynamic-charge rendering requirement not yet met.

- [ ] **Step 3: Make the minimal rendering corrections**

Keep charge detection property-based, render the surviving charge line's final price, and retain the summary elements used by `refreshExpressDisplay()`.

- [ ] **Step 4: Run complete verification**

Run: `node --test tests/*.test.js`

Run: `node --check assets/express-delivery-utils.js`

Run: `node --check assets/cart_drawer_func.js`

Expected: all tests PASS and both syntax checks exit zero.

- [ ] **Step 5: Review the final diff**

Run: `git diff --check`

Run: `git status --short`

Expected: no whitespace errors; only intended implementation files plus pre-existing unrelated untracked files are present.

- [ ] **Step 6: Commit**

```powershell
git add snippets/cart-drawer.liquid sections/main-cart-items.liquid sections/main-cart-footer.liquid tests/express-delivery-rendering.test.js
git commit -m "test: verify express delivery cart rendering"
```
