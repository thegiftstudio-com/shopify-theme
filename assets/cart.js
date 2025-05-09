class CartRemoveButton extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('click', (event) => {
      event.preventDefault();
      if(this.getAttribute("data-custom-bundle-prod")==null){
        const cartItems = this.closest('cart-items') || this.closest('cart-drawer-items');
         //Velocity 05-07-2024 Below functions are to push the data to GTM on Cart quantity update
          try {
                removeCompleteItemFromCartEvent(this.dataset.index);
            } catch (error) {
                console.error('Some error in pushing the event to GTM:', error);
            }
        
        cartItems.updateQuantity(this.dataset.index, 0, "", this.getAttribute("data-quantity-variant-id"));
      }
    });

   
      var classes = $('body').attr('class').split(' ');

      var bodyLocationClass = classes.find(function(className) {
        return className.startsWith('location-');
      });

      $('.product_card_wrapper').each(function() {
        var draweLocationClass = $(this).attr('class');
        if (draweLocationClass.includes(bodyLocationClass)) {
          $(this).removeClass('content_hidden');
        }
      });
    
  }
}

customElements.define('cart-remove-button', CartRemoveButton);

class CartItems extends HTMLElement {
  constructor() {
    super();
    this.lineItemStatusElement =
      document.getElementById('shopping-cart-line-item-status') ||
      document.getElementById('CartDrawer-LineItemStatus');

    const debouncedOnChange = debounce((event) => {
      // Check if the target element has the class `byoh_quantity__input`
      if (event.target && event.target.classList.contains('byoh_quantity__input')) {
        return; // Do nothing if the input has the class
      }

      this.onChange(event); // Call the `onChange` handler for other inputs
    }, ON_CHANGE_DEBOUNCE_TIMER);

    // Bind the debounced function and attach the event listener
    this.addEventListener('change', debouncedOnChange);
  }

  cartUpdateUnsubscriber = undefined;

  connectedCallback() {
    this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, (event) => {
      if (event.source === 'cart-items') {
        return;
      }
      this.onCartUpdate();
    });
  }

  disconnectedCallback() {
    if (this.cartUpdateUnsubscriber) {
      this.cartUpdateUnsubscriber();
    }
  }

  onChange(event) {
    // Velocity: To skip the auto quantity update to 1 in case of BYOH 
    if (this.classList.contains('byoh_quantity')) {
      return;
    }
    this.updateQuantity(event.target.dataset.index, event.target.value, document.activeElement.getAttribute('name'), event.target.getAttribute("data-quantity-variant-id"));
  }

  onCartUpdate() {
    fetch('/cart?section_id=main-cart-items')
      .then((response) => response.text())
      .then((responseText) => {
        const html = new DOMParser().parseFromString(responseText, 'text/html');
        const sourceQty = html.querySelector('cart-items');
        this.innerHTML = sourceQty.innerHTML;
      })
      .catch(e => {
        console.error(e);
      });
  }

  getSectionsToRender() {
    return [
      {
        id: 'main-cart-items',
        section: document.getElementById('main-cart-items').dataset.id,
        selector: '.js-contents'
      },
      {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '.shopify-section'
      },
      {
        id: 'cart-live-region-text',
        section: 'cart-live-region-text',
        selector: '.shopify-section'
      },
      {
        id: 'main-cart-footer',
        section: document.getElementById('main-cart-footer').dataset.id,
        selector: '.js-contents'
      }
    ];
  }

  updateQuantity(line, quantity, name, varId = "") {
    //velocity: 18-07-2024 storing the previous quantity to check if this is remove or add
    var event_type = name;
     var prev_quantity = document.getElementById('line_product_quantity_' + line).value;
    if(event_type == null && document.getElementById('line_product_quantity_' + line)) {
       if(parseInt(prev_quantity) > parseInt(quantity)){
          event_type = 'minus';
        } else if(parseInt(prev_quantity) < parseInt(quantity)) {
           event_type = 'plus';
        } 
    }
    var selected_warehouse = $(".product_warehouse_"+line).val();
   const product_warehouse_available_quantity = $(".product_warehouse_available_quantity_"+ $(".product_warehouse_"+line).val() + "_" + varId +  "_" + line).val();
    const product_url = $("#product_url_" + line).val();

     // Required quantity (user's selected quantity)
    let requiredQuantity = parseInt(quantity) || 0;

    // Check if any other warehouse has more stock than required quantity
    let hasHigherStock = false;
    let higherStockLocation = "";

    // $(".product_warehouse_available_quantity").each(function () {
    //     let warehouseClass = $(this).attr("class");
    //     let warehouseIdParts = warehouseClass.match(/product_warehouse_available_quantity_(\w+)_(\d+)_(\d+)/);

    //     if (warehouseIdParts) {
    //         let warehouseLocation = warehouseIdParts[1]; // Get the location
    //         let warehouseVariant = warehouseIdParts[2]; // Get the variant ID
    //         let warehouseLine = warehouseIdParts[3]; // Get the line number

    //         if (warehouseVariant === varId && warehouseLocation !== selected_warehouse) {
    //             let otherWarehouseQty = parseInt($(this).val()) || 0;

    //             if (otherWarehouseQty > requiredQuantity) {
    //                 hasHigherStock = true;
    //                 higherStockLocation = warehouseLocation;
    //             }
    //         }
    //     }
    // });

    // if (hasHigherStock) {
    //     alert(`A warehouse with higher stock is available at ${higherStockLocation}`);
    // }

    if (parseInt(product_warehouse_available_quantity) < parseInt(quantity)) {
        showPopup(
            "The requested quantity is not available. Would you like to reset the TAT? This will remove the product from the cart and redirect you to the product page.",
            () => {
                // OK clicked: Remove product and redirect to product page
                const variantId = document.getElementById('line_product_variant_id_' + line).value;

                // Remove the product from the cart
                const body = JSON.stringify({
                    id: variantId,
                    quantity: 0, // Setting quantity to 0 removes the item
                });

                fetch(`${routes.cart_change_url}`, { ...fetchConfig(), ...{ body } })
                    .then((response) => {
                        if (response.ok) {
                            console.log("Product removed from the cart.");
                            window.location.href = product_url; // Redirect to product page
                        } else {
                            console.error("Error removing product from the cart.");
                        }
                    })
                    .catch((error) => {
                        console.error("Error in fetch request:", error);
                    });
            },
            () => {
                // Reject clicked: Proceed without changes
               window.location.reload();
                console.log("User canceled the action.");
            }
        );
        return false; // Prevent further execution until user interacts with the popup
    }

    
    
    this.enableLoading(line);
    var id = (varId!="") ? varId : line;
    if(id==null){
      return false;
    }
    const body = JSON.stringify({
      id,
      quantity,
      sections: this.getSectionsToRender().map((section) => section.section),
      sections_url: window.location.pathname
    });

    fetch(`${routes.cart_change_url}`, { ...fetchConfig(), ...{ body } })
      .then((response) => {
        return response.text();
      })
      .then((state) => {
        if($('cart-drawer-items').find('[data-cart-prod-bundle-id]').length){
          location.reload();
          return true;
        }
        const parsedState = JSON.parse(state);
        const quantityElement = document.getElementById(`Quantity-${line}`) || document.getElementById(`Drawer-quantity-${line}`);
        const items = document.querySelectorAll('.cart-item');

        if (parsedState.errors) {
          quantityElement.value = quantityElement.getAttribute('value');
          this.updateLiveRegions(line, parsedState.errors);
          return;
        }

        this.classList.toggle('is-empty', parsedState.item_count === 0);
        const cartDrawerWrapper = document.querySelector('cart-drawer');
        const cartFooter = document.getElementById('main-cart-footer');

        if (cartFooter) cartFooter.classList.toggle('is-empty', parsedState.item_count === 0);
        if (cartDrawerWrapper) cartDrawerWrapper.classList.toggle('is-empty', parsedState.item_count === 0);

        this.getSectionsToRender().forEach((section => {
          const elementToReplace = 
            document.getElementById(section.id).querySelector(section.selector) || document.getElementById(section.id);
          elementToReplace.innerHTML = 
            this.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
        }));
        const updatedValue = parsedState.items[line - 1] ? parsedState.items[line - 1].quantity : undefined;
        let message = '';
        if (items.length === parsedState.items.length && updatedValue !== parseInt(quantityElement.value)) {
          if (typeof updatedValue === 'undefined') {
            message = window.cartStrings.error;
          } else {
            message = window.cartStrings.quantityError.replace('[quantity]', updatedValue);
          }
        }
        this.updateLiveRegions(line, message);

        const lineItem = document.getElementById(`CartItem-${line}`) || document.getElementById(`CartDrawer-Item-${line}`);
        if (lineItem && lineItem.querySelector(`[name="${name}"]`)) {
          cartDrawerWrapper ? trapFocus(cartDrawerWrapper, lineItem.querySelector(`[name="${name}"]`)) : lineItem.querySelector(`[name="${name}"]`).focus();
        } else if (parsedState.item_count === 0 && cartDrawerWrapper) {
          trapFocus(cartDrawerWrapper.querySelector('.drawer__inner-empty'), cartDrawerWrapper.querySelector('a'))
        } else if (document.querySelector('.cart-item') && cartDrawerWrapper) {
          trapFocus(cartDrawerWrapper, document.querySelector('.cart-item__name'))
        }
        publish(PUB_SUB_EVENTS.cartUpdate, {source: 'cart-items'});

         //Velocity 05-07-2024 Below functions are to push the data to GTM on Cart quantity update
        
         //Velocity 05-07-2024 Below functions are to push the data to GTM on Cart quantity update
        if(quantity != 0){
          try {
                if (event_type == 'plus') {
                   addToCartEvent(line);
                } else if(event_type == 'minus') {
                   removeItemFromCartEvent(line);
                }
            } catch (error) {
                console.error('Some error in pushing the event to GTM:', error);
            }
          }
      }).catch(() => {
        this.querySelectorAll('.loading-overlay').forEach((overlay) => overlay.classList.add('hidden'));
        const errors = document.getElementById('cart-errors') || document.getElementById('CartDrawer-CartErrors');
        errors.textContent = window.cartStrings.error;
      })
      .finally(() => {
        this.disableLoading(line);
      });
  }

  updateLiveRegions(line, message) {
    const lineItemError = document.getElementById(`Line-item-error-${line}`) || document.getElementById(`CartDrawer-LineItemError-${line}`);
    if (lineItemError) lineItemError.querySelector('.cart-item__error-text').innerHTML = message;

    this.lineItemStatusElement.setAttribute('aria-hidden', true);

    const cartStatus = document.getElementById('cart-live-region-text') || document.getElementById('CartDrawer-LiveRegionText');
    cartStatus.setAttribute('aria-hidden', false);

    setTimeout(() => {
      cartStatus.setAttribute('aria-hidden', true);
    }, 1000);
  }

  getSectionInnerHTML(html, selector) {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector).innerHTML;
  }

  enableLoading(line) {
    const mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');
    mainCartItems.classList.add('cart__items--disabled');

    const cartItemElements = this.querySelectorAll(`#CartItem-${line} .loading-overlay`);
    const cartDrawerItemElements = this.querySelectorAll(`#CartDrawer-Item-${line} .loading-overlay`);

    [...cartItemElements, ...cartDrawerItemElements].forEach((overlay) => overlay.classList.remove('hidden'));

    document.activeElement.blur();
    this.lineItemStatusElement.setAttribute('aria-hidden', false);
  }

  disableLoading(line) {
    const mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');
    mainCartItems.classList.remove('cart__items--disabled');

    const cartItemElements = this.querySelectorAll(`#CartItem-${line} .loading-overlay`);
    const cartDrawerItemElements = this.querySelectorAll(`#CartDrawer-Item-${line} .loading-overlay`);

    cartItemElements.forEach((overlay) => overlay.classList.add('hidden'));
    cartDrawerItemElements.forEach((overlay) => overlay.classList.add('hidden'));
  }
}

customElements.define('cart-items', CartItems);

if (!customElements.get('cart-note')) {
  customElements.define('cart-note', class CartNote extends HTMLElement {
      constructor() {
        super();

      this.addEventListener('change', debounce((event) => {
            const body = JSON.stringify({ note: event.target.value });
            fetch(`${routes.cart_update_url}`, { ...fetchConfig(), ...{ body } });
      }, ON_CHANGE_DEBOUNCE_TIMER))
      }
  });
};




function showPopup(message, onOk, onCancel) {
    // Get the popup elements
    const popupOverlay = document.getElementById("tatResetPopup");
    const popupMessage = popupOverlay.querySelector("p");
    const okButton = document.getElementById("popupOkButton");
    const rejectButton = document.getElementById("popupRejectButton");

    // Set the message dynamically
    popupMessage.textContent = message;

    // Show the popup
    popupOverlay.style.display = "flex";

    // Remove existing event listeners to prevent duplicate handlers
    okButton.onclick = null;
    rejectButton.onclick = null;

    // Attach event listeners for OK and Reject buttons
    okButton.onclick = function () {
        popupOverlay.style.display = "none"; // Hide the popup
        if (typeof onOk === "function") onOk(); // Execute the OK callback
    };

    rejectButton.onclick = function () {
        popupOverlay.style.display = "none"; // Hide the popup
        if (typeof onCancel === "function") onCancel(); // Execute the Cancel callback
    };
}
