class CartDrawer extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());
    this.querySelector('#CartDrawer-Overlay').addEventListener('click', this.close.bind(this));
    this.setHeaderCartIconAccessibility();
  }

 setHeaderCartIconAccessibility() {
    //velocity: 09-09-2024 added the check on the cartLink that only execute when it exists.
    const cartLink = document.querySelector('#cart-icon-bubble');
    const cartLink1 = document.querySelector('#cart-icon-bubble-1');

    if (cartLink) {
        cartLink.setAttribute('role', 'button');
        cartLink.setAttribute('aria-haspopup', 'dialog');
        cartLink.addEventListener('click', (event) => {
          event.preventDefault();
         // Check if current page is cart page and redirect to /cart instead of opening drawer
         if (window.location.pathname === '/cart') {
         window.location.href = '/cart';
         return;
         }
         validateDeliveryDates();
            this.open(cartLink);
        });
        cartLink.addEventListener('keydown', (event) => {
            if (event.code.toUpperCase() === 'SPACE') {
              event.preventDefault();
            // Check if current page is cart page and redirect to /cart instead of opening drawer
            if (window.location.pathname === '/cart') {
                window.location.href = '/cart';
                return;
            }
                this.open(cartLink);
            }
        });
    }

    if (cartLink1) {
      
            cartLink1.setAttribute('role', 'button');
            cartLink1.setAttribute('aria-haspopup', 'dialog');
            
            cartLink1.addEventListener('click', (event) => {
            // Check if current page is cart page and redirect to /cart instead of opening drawer
            event.preventDefault();
            if (window.location.pathname === '/cart') {
                window.location.href = '/cart';
                return;
            }
               validateDeliveryDates();
                this.open(cartLink1);
            });
            
            cartLink1.addEventListener('keydown', (event) => {
                if (event.code.toUpperCase() === 'SPACE') {
                    event.preventDefault();
             // Check if current page is cart page and redirect to /cart instead of opening drawer
            if (window.location.pathname === '/cart') {
                window.location.href = '/cart';
                return;
            }
                    this.open(cartLink1);
                }
            });
        }
}

  open(triggeredBy) {
    var $zsiqFloat = $('.zsiq-float');
$zsiqFloat.css('display', 'none');
    if (triggeredBy) this.setActiveElement(triggeredBy);
    const cartDrawerNote = this.querySelector('[id^="Details-"] summary');
    if (cartDrawerNote && !cartDrawerNote.hasAttribute('role')) this.setSummaryAccessibility(cartDrawerNote);
    // here the animation doesn't seem to always get triggered. A timeout seem to help
    setTimeout(() => {this.classList.add('animate', 'active')});

    this.addEventListener('transitionend', () => {
      const containerToTrapFocusOn = this.classList.contains('is-empty') ? this.querySelector('.drawer__inner-empty') : document.getElementById('CartDrawer');
      const focusElement = this.querySelector('.drawer__inner') || this.querySelector('.drawer__close');
      trapFocus(containerToTrapFocusOn, focusElement);
    }, { once: true });

    document.body.classList.add('overflow-hidden');
  }

  close() {
    var $zsiqFloat = $('.zsiq-float');
$zsiqFloat.css('display', 'block');
    this.classList.remove('active');
    removeTrapFocus(this.activeElement);
    document.body.classList.remove('overflow-hidden');
  }

  setSummaryAccessibility(cartDrawerNote) {
    cartDrawerNote.setAttribute('role', 'button');
    cartDrawerNote.setAttribute('aria-expanded', 'false');

    if(cartDrawerNote.nextElementSibling.getAttribute('id')) {
      cartDrawerNote.setAttribute('aria-controls', cartDrawerNote.nextElementSibling.id);
    }

    cartDrawerNote.addEventListener('click', (event) => {
      event.currentTarget.setAttribute('aria-expanded', !event.currentTarget.closest('details').hasAttribute('open'));
    });

    cartDrawerNote.parentElement.addEventListener('keyup', onKeyUpEscape);
  }

  renderContents(parsedState) {
    this.querySelector('.drawer__inner').classList.contains('is-empty') && this.querySelector('.drawer__inner').classList.remove('is-empty');
    this.productId = parsedState.id;
    this.getSectionsToRender().forEach((section => {
      const sectionElement = section.selector ? document.querySelector(section.selector) : document.getElementById(section.id);
      sectionElement.innerHTML =
          this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);
    }));

    setTimeout(() => {
      this.querySelector('#CartDrawer-Overlay').addEventListener('click', this.close.bind(this));
      this.open();
    });
  }

  getSectionInnerHTML(html, selector = '.shopify-section') {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector).innerHTML;
  }

  getSectionsToRender() {
    return [
      {
        id: 'cart-drawer',
        selector: '#CartDrawer'
      },
      {
        id: 'cart-icon-bubble'
      }
    ];
  }

  getSectionDOM(html, selector = '.shopify-section') {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector);
  }

  setActiveElement(element) {
    this.activeElement = element;
  }
}

customElements.define('cart-drawer', CartDrawer);

class CartDrawerItems extends CartItems {
  getSectionsToRender() {
    return [
      {
        id: 'CartDrawer',
        section: 'cart-drawer',
        selector: '.drawer__inner'
      },
      {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '.shopify-section'
      }
    ];
  }
}

customElements.define('cart-drawer-items', CartDrawerItems);
