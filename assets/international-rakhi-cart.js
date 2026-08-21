(function () {
  function attachInternationalCartHandlers() {
    document.querySelectorAll('[data-international-rakhi="true"]').forEach(function (button) {
      if (button.dataset.internationalHandlerAttached === 'true') return;
      button.dataset.internationalHandlerAttached = 'true';

      button.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();

        if (window.validateInternationalUsaDelivery && !window.validateInternationalUsaDelivery()) {
          return;
        }

        var form = button.closest('form');
        var cart = document.querySelector('cart-drawer');
        var formData = new FormData(form);
        var errorElement = button.closest('product-form')?.querySelector('.lt_error_text');

        button.disabled = true;
        button.setAttribute('aria-disabled', 'true');
        button.querySelector('.custom_spinner').style.display = 'flex';

        if (cart && cart.getSectionsToRender) {
          formData.append('sections', cart.getSectionsToRender().map(function (section) { return section.id; }));
          formData.append('sections_url', window.location.pathname);
        }

        fetch('/cart/add.js', {
          method: 'POST',
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
          body: formData
        })
          .then(function (response) { return response.json(); })
          .then(function (response) {
            if (response.status) throw new Error(response.description || 'Unable to add this product to cart.');
            if (cart && cart.renderContents) {
              cart.renderContents(response);
            } else {
              window.location.href = '/cart';
            }
          })
          .catch(function (error) {
            if (errorElement) errorElement.textContent = error.message;
          })
          .finally(function () {
            button.disabled = false;
            button.removeAttribute('aria-disabled');
            button.querySelector('.custom_spinner').style.display = 'none';
          });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachInternationalCartHandlers);
  } else {
    attachInternationalCartHandlers();
  }
})();
