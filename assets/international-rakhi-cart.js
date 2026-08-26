(function () {
  function getTimestamp() {
    var currentTime = typeof istTime !== 'undefined' && istTime instanceof Date
      ? istTime
      : new Date();

    return currentTime.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour12: false,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  function refreshAndOpenCartDrawer() {
    if (!window.jQuery || !document.querySelector('#CartDrawer_MainContent > div')) {
      window.location.href = '/cart';
      return;
    }

    window.jQuery('#CartDrawer_MainContent>div').load(
      window.location.href + ' #CartDrawer_MainContent>div',
      function () {
        if (typeof window.handleCartDrawer === 'function') {
          window.handleCartDrawer();
        }

        window.jQuery('.zsiq-float').css('display', 'none');
        window.jQuery('cart-drawer.drawer').addClass('active');
      }
    );
  }

  function attachInternationalCartHandlers() {
    document.querySelectorAll('[data-international-rakhi="true"]').forEach(function (button) {
      if (button.dataset.internationalHandlerAttached === 'true') return;
      button.dataset.internationalHandlerAttached = 'true';

      // Capture the USA button click before the legacy India cart listener.
      // This button builds its own main + USA add-on request below.
      button.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();

        if (window.validateInternationalUsaDelivery && !window.validateInternationalUsaDelivery()) {
          return;
        }

        var form = button.closest('form');
        var formVariantInput = form ? form.querySelector('input[name="id"]') : null;
        var fallbackVariantInput = document.querySelector('#ProductSelected-variant');
        var quantityInput = document.querySelector('.product_quantity_input_pdp') ||
          (form ? form.querySelector('input[name="quantity"]') : null);
        var selectedAddon = document.querySelector('input[name="rakhi_product_id"]:checked');
        var titleElement = document.querySelector('.product__title h1');
        var zipInput = document.querySelector('#usa_zip_code');
        var deliveryDateInput = document.querySelector('#usa_delivery_date');
        var tatInput = document.querySelector('#usa_delivery_tat_value');
        var spinner = button.querySelector('.custom_spinner');
        var productForm = button.closest('product-form');
        var errorElement = productForm ? productForm.querySelector('.lt_error_text') : null;
        var mainVariantId = formVariantInput && formVariantInput.value
          ? formVariantInput.value
          : (fallbackVariantInput ? fallbackVariantInput.value : button.dataset.variantId);
        var quantity = quantityInput && quantityInput.value ? quantityInput.value : 1;

        if (!mainVariantId) {
          if (errorElement) errorElement.textContent = 'Unable to identify this product variant.';
          return;
        }

        var items = [];
        if (selectedAddon && selectedAddon.value) {
          items.push({
            id: selectedAddon.value,
            quantity: quantity,
            properties: {
              'Product title': titleElement ? titleElement.textContent.trim() : ''
            }
          });
        }

        items.push({
          id: mainVariantId,
          quantity: quantity,
          properties: {
            Pincode: zipInput ? zipInput.value.trim() : '',
            'Delivery date': deliveryDateInput ? deliveryDateInput.value : '',
            _product_tat: tatInput ? tatInput.value : '',
            _Timestamp: getTimestamp()
          }
        });

        if (errorElement) errorElement.textContent = '';
        button.disabled = true;
        button.setAttribute('aria-disabled', 'true');
        if (spinner) spinner.style.display = 'flex';

        fetch('/cart/add.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            Accept: 'application/json'
          },
          body: JSON.stringify({ items: items })
        })
          .then(function (response) {
            return response.json().then(function (body) {
              if (!response.ok || body.status) {
                throw new Error(body.description || 'Unable to add this product to cart.');
              }
              return body;
            });
          })
          .then(function () {
            var noAddonInput = document.querySelector('#no_rakhi');
            if (noAddonInput) noAddonInput.click();
            refreshAndOpenCartDrawer();
          })
          .catch(function (error) {
            if (errorElement) errorElement.textContent = error.message;
          })
          .finally(function () {
            button.disabled = false;
            button.removeAttribute('aria-disabled');
            if (spinner) spinner.style.display = 'none';
          });
      }, true);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachInternationalCartHandlers);
  } else {
    attachInternationalCartHandlers();
  }
})();
