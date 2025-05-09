if(window.location.href.includes("corporate-gifting-thank-you")){
  // Push event to data layer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'form_filled'
  });
}
var clickTargetUrl = '';
// velocity: This function handles showing a popup and then redirecting to the passed URL after a delay
function handleRedirectWithPopup(url, image_src='', isBannerClick = 0) {

  if (localStorage.getItem("is-manually-set") == '1') {
     setCityManually(url);
  } else {
     if(isBannerClick == 1) {
      handleImageClick(image_src, url);
    } else {
        window.location.href = url;
    }
  }
}



$(document).ready(function() {
//   try {
// if (posthog.getFeatureFlag('abtesting') === 'variant') {
//     // Do something differently for this user
//    if (localStorage.getItem('location-city') === 'Mumbai') {
//             $('.same_delivery_sec').remove();
//         }
// } else {
//     // It's a good idea to let control variant always be the default behaviour,
//     // so if something goes wrong with flag evaluation, you don't break your app.
// }
// } catch (error) {
//     console.error("An error occurred during POSTHOG AB testing:", error);
// }

// Added by Velocity Support on 10-02-2025 for showing the Same Day delivery option only for the selected cities
var user_city = localStorage.getItem("location-city");

// List of cities for which to display the text
var allowedCities = ['Mumbai', 'Delhi', 'Gurgaon', 'Noida', 'Ghaziabad', 'Faridabad', 'Bangalore'];

// Get the current date and time
let currentTime = new Date();

// Get the current hour
let currentHour = currentTime.getHours();

// Get the element where we want to display the text
let sameDayTextElement = document.getElementById('same_day_text');
let sameDayTextElementMobile = document.getElementById('same_day_text_mobile');

// Check if the sameDayTextElement exists and update it
if (sameDayTextElement) {
  let sameDayTextSpan = sameDayTextElement.querySelector('span');
  
  // Check if the span inside the sameDayTextElement exists
  if (sameDayTextSpan) {
    // Get the user's city (this assumes the variable `user_city` is set elsewhere in your code)
    var user_city = localStorage.getItem("location-city");

    // Check if the user's city is in the allowed list
    if (allowedCities.includes(user_city)) {
      // Check if the current time is before or after 4 PM
      if (currentHour < 16) {
        // If it's before 4 PM, set the text to "Same Day"
        sameDayTextSpan.innerText = "Same Day Delivery";
      } else {
        // If it's after 4 PM, set the text to "Next Day"
        sameDayTextSpan.innerText = "Next Day Delivery";
      }

      // Show the element
      sameDayTextElement.style.display = 'block';
    } else {
      // Hide the element if the city is not in the allowed list
      sameDayTextElement.style.display = 'none';
    }
  }
}

// Check if the sameDayTextElementMobile exists and update it
if (sameDayTextElementMobile) {
  // Get the user's city (this assumes the variable `user_city` is set elsewhere in your code)
  var user_city = localStorage.getItem("location-city");

  // Check if the user's city is in the allowed list
  if (allowedCities.includes(user_city)) {
    // Check if the current time is before or after 4 PM
    if (currentHour < 16) {
      // If it's before 4 PM, set the text to "Same Day"
      sameDayTextElementMobile.innerText = "Same Day Delivery";
    } else {
      // If it's after 4 PM, set the text to "Next Day"
      sameDayTextElementMobile.innerText = "Next Day Delivery";
    }

    // Show the element
    sameDayTextElementMobile.style.display = 'block';
  } else {
    // Hide the element if the city is not in the allowed list
    sameDayTextElementMobile.style.display = 'none';
  }
}


    var clusterLocation = localStorage.getItem("location");
  if(clusterLocation=='location-kolkata'){
    localStorage.setItem("location", "location-mumbai");
  }
  
  // onclick tabs on best seller section //
 $(document).on('click', '.tabs ul li', function () {
                $('li').removeClass('active');
                // $('ul').toggleClass('expanded');
                $(this).addClass('active');
                var tab_id = $(this).attr('data-tab');
                $('.tab-content').removeClass('current');
                $(this).addClass('current');
                $('#' + tab_id).addClass('current');
            });

   // onclick tabs on best seller section //
 
  //Progress bar & slick slider for homepage section //
function progressbar(sliderName, progressClass) {
        var $slider = $(sliderName);
        var $progressBar = $(progressClass);
        var $progressBarLabel = $(".progress_bar");
        $slider.on(
          "beforeChange",
          function (event, slick, currentSlide, nextSlide) {
            var calc = (nextSlide / (slick.slideCount - 1)) * 100;

            $progressBar
              .css("background-size", calc + "% 100%")
              .attr("aria-valuenow", calc);

            $progressBarLabel.text(calc + "% completed");
          }
        );
      }

  progressbar(".blog_slider", ".progress4");
  progressbar(".testimonial_slider", ".progress3");

var outerW = $(window).outerWidth();

  if(outerW > 767){

    // blog slider //
  $(".blog_slider").slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
        prevArrow: '<img src="https://cdn.shopify.com/s/files/1/0689/3014/2515/files/arrow_icon_slider.svg?v=1687769341" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="https://cdn.shopify.com/s/files/1/0689/3014/2515/files/arrow_icon_slider.svg?v=1687769341" class="slide-arrow next-arrow">',
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              infinite:false,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              arrows:false,
              
            },
          },
        ],
      });
// blog slider //
  }

      $(".testimonial_slider").slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
        prevArrow: '<img src="https://cdn.shopify.com/s/files/1/0689/3014/2515/files/arrow_icon_slider.svg?v=1687769341" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="https://cdn.shopify.com/s/files/1/0689/3014/2515/files/arrow_icon_slider.svg?v=1687769341" class="slide-arrow next-arrow">',
        responsive: [{
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              arrows:false,
              variableWidth:true
            },
          },
        ],
      });


    $(".wall_fame_section .category_inner_sec").slick({
        dots: true,
        infinite:false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
      rows:2,
            responsive: [{
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });

  $(".diwali_slider").slick({
        dots: false,
        infinite:true,
        slidesToShow: 4,
    loop:true,
        slidesToScroll: 1,
        arrows:true,
    prevArrow: '<img src="https://cdn.shopify.com/s/files/1/0689/3014/2515/files/arrow_icon_slider.svg?v=1687769341" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="https://cdn.shopify.com/s/files/1/0689/3014/2515/files/arrow_icon_slider.svg?v=1687769341" class="slide-arrow next-arrow">',
            responsive: [{
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });


  //filter tabs starts here //
  var $btns = $('.btn_tabs').click(function() {
  if (this.id == 'all' || this.id == 'all_in_stock') {
    if(this.id == 'all_in_stock'){
    var $el = $('.' + this.id).fadeIn(450);
    $('#product-grid > li').not($el).hide();
    }else{
    $('#product-grid > li').fadeIn(450);
    }
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('#product-grid > li').not($el).hide();
  }
    
  $btns.removeClass('active');
  $(this).addClass('active');
})
  //filter tabs ends here //


 
  
  
  //recommendation slider starts here //
    $("#product-grid").on('scroll', function() {
        $val = $(this).scrollLeft();

        if ($(this).scrollLeft() + $(this).innerWidth() >= $(this)[0].scrollWidth) {
            $(".nav-next").hide();
        } else {
            $(".nav-next").show();
        }

        if ($val == 0) {
            $(".nav-prev").hide();
        } else {
            $(".nav-prev").show();
        }
    });
    $(".nav-next").on("click", function() {
        $(this).parent().animate({
            scrollLeft: '+=460'
        }, 200);

    });
    $(".nav-prev").on("click", function() {
        $(this).parent().animate({
            scrollLeft: '-=460'
        }, 200);
    });
    //recommendation slider ends here //


  //dropdown on  click of account icon starts here //
  $('.account_sec a').click(function(){
    $('.account_sec ul').delay(100).slideDown();
	
});
$('html').click(function(){
if( $('.account_sec ul').is(':visible') ) {
    $('.account_sec ul').slideUp();
}
});
  //dropdown on  click of account icon ends here //

 // horizontal scrolling on collection page tabs starts here //
  const slider = document.querySelector('.hampers_filters .btn-container');
//velocity: 09-09-2024 Added the check on slider that when exist then only perform the check
  if (slider) {
    let mouseDown = false;
    let startX, scrollLeft;
    
    let startDragging = function (e) {
      mouseDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };
    let stopDragging = function (event) {
      mouseDown = false;
    };
    
    slider.addEventListener('mousemove', (e) => {
      e.preventDefault();
      if(!mouseDown) { return; }
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    });
    
    // Add the event listeners //
    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);
    // horizontal scrolling on collection page tabs starts here //
  }
  
});


const accSingleTriggers = document.querySelectorAll('.main_ques');

accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

function toggleAccordion() {
    const items = document.querySelectorAll('.custom_game');
    const thisItem = this.parentNode;

    items.forEach(item => {
        if (thisItem == item) {
            thisItem.classList.toggle('is-open');
            return;
        }
        item.classList.remove('is-open');
    });
}

function clearShopifyCart() {
  fetch("/cart/clear.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
     
      window.location.href = 'https://thegiftstudio.com';
    })
    .catch((error) => {
      console.error("Error clearing the cart:", error);
    });
}



/* =============================== location functionality starts here ===================================== */

var allLocations = ['location-mumbai', 'location-kolkata', 'location-delhi','location-bangalore', 'location-pune' ,'location-gurgaon']

var locationDropdown = document.querySelector(".locationsDropdown");
var city_name = document.querySelector(".city_name");

showProductsAccordingToCity = () => {
    var setLocation = localStorage.getItem("location"); // getting the value of city from local storage //
    var setLocationText = localStorage.getItem("location-city"); // getting the text of city from local storage //
      var setPincode=localStorage.getItem("userPincode");

    if(setPincode=='')setPincode="";

    else setPincode+=', ';

    city_name.innerText=setPincode + setLocationText;

    // city_name.innerText = setLocationText // setting the text of selected city on header  

    let byohproductItems = document.querySelectorAll('.product-card');

    // Loop through all the product items
    byohproductItems.forEach(function(item) {
        // Initialize inventory variable
        let inventory = 0;

        // Check the current location and get the inventory value for that location
        if(setLocation == 'location-mumbai') {
            inventory = (item.getAttribute('data_mumbai'));
        } else if(setLocation == 'location-kolkata') {
            inventory = (item.getAttribute('data_kolkata'));
        } else if(setLocation == 'location-gurgaon') {
            inventory = (item.getAttribute('data_gurgaon'));
        } else if(setLocation == 'location-delhi') {
            inventory = (item.getAttribute('data_delhi'));
        } else if(setLocation == 'location-bangalore') {
            inventory = (item.getAttribute('data_bangalore'));
        }
      
        // If the inventory is less than or equal to 0, remove the element from the DOM
        if(inventory=="" || parseInt(inventory) <= 0) {
            item.remove();
        }
    });

  //Velocity: Added the below code to remove the perishable-item when it is not deliverable
    if( localStorage.getItem("isPerishable") == 1) {
      var notRequiredProducts1 = document.querySelectorAll('.perishable-item');
      notRequiredProducts1.forEach(item => {
        // Initialize inventory variable
        let inventory = 0;

        // Check the current location and get the inventory value for that location
        if(setLocation == 'location-mumbai') {
            inventory = (item.getAttribute('data_mumbai'));
        } else if(setLocation == 'location-kolkata') {
            inventory = (item.getAttribute('data_kolkata'));
        } else if(setLocation == 'location-gurgaon') {
            inventory = (item.getAttribute('data_gurgaon'));
        } else if(setLocation == 'location-delhi') {
            inventory = (item.getAttribute('data_delhi'));
        } else if(setLocation == 'location-bangalore') {
            inventory = (item.getAttribute('data_bangalore'));
        }
      
        // If the inventory is less than or equal to 0, remove the element from the DOM
        if(inventory=="" || parseInt(inventory) <= 0) {
            item.remove();
        }
      }); 
    }
    
    
   //Velocity: Added the below code to remove the perishable-item when it is not deliverable
   //Velocity: Show perishable product in pune city that contain show-perishable tag.
  if (localStorage.getItem("isPerishable") == 0) {
    // Get all perishable items
    var perishableItems = document.querySelectorAll('.perishable-item');
     var city = localStorage.getItem("location-city");
    // Loop through perishable items and remove those that don't have 'show-perishable' class
    perishableItems.forEach(el => {
      if(city && city.toLowerCase() === 'pune'){
        if (!el.classList.contains('show-perishable')) {
            el.remove(); 
        }
      }else{
        el.remove(); 
      }
    });
}
  //remove content hidden class for selected city items //
    var boxes = document.querySelectorAll('.' + setLocation);
    boxes.forEach(box => {
        box.classList.remove('content_hidden')
    });
    // remove unwanted city items div from document //
    // for eg. if kolkata is selected then remove mumbai, bangalore, etc //
    var notRequiredBoxes = document.querySelectorAll('.content_hidden');
    notRequiredBoxes.forEach(notRequiredBox => {
        notRequiredBox.remove()
    });
}



setCityManually = (url = '') => {

  if (url=='') {
    clickTargetUrl = ''
  } else {
    clickTargetUrl = url;
  }

var getCity = getParameterByName('getCity');
  if(getCity == 'Kolkata'){
     // storing the value of city in local storage //
      localStorage.setItem("location", "location-kolkata" ); 
      // storing the text of city local storage //
      localStorage.setItem("location-city", "Kolkata"); 
    city_name.innerText = 'Kolkata';

    document.querySelector('body').classList.remove(allLocations) // removing all location class from body if already set //
    document.querySelector('body').classList.add('location-kolkata') // adding the selected city name class to body //

      //remove content hidden class for selected city items //
    var boxes = document.querySelectorAll('.' + 'location-kolkata');
    boxes.forEach(box => {
        box.classList.remove('content_hidden')
    });

    // remove unwanted city items div from document //
    // for eg. if kolkata is selected then remove mumbai, bangalore, etc //
    var notRequiredBoxes = document.querySelectorAll('.content_hidden');
    notRequiredBoxes.forEach(notRequiredBox => {
        notRequiredBox.remove()
    });
    
  }
  else{
    //valocity: 09-08-2024 Added this code to show the popup for city selection 
    $('.city-modal-popup').addClass('active');
    $('.city-modal-overlay').addClass('active');
    

  var l = document.getElementById("select_city");
  onChange = () => {
    // getting value of selected city //
    let value = l.value; 
    
     //velocity: 17-07-2024 Function to push the event to GTM once a city is selected from dropdown
    pushSelectLocationFromDropdown(value, '', '');
    
    // getting text of selected city //
    var cityName = l.options[l.selectedIndex].text; 
    
    if(checkIfCityProductExistsInCart(value)){
      $('.city-modal-popup').removeClass('active');
      $('.city-modal-overlay').removeClass('active');
      $('.popup_class').css('display', 'block');
      $("#replace-cart").on("click", function () {
          clearShopifyCart();
          
          $('.popup_class').css('display', 'none');
          // storing the value of city in local storage //
          localStorage.setItem("location", value); 
          // storing the text of city local storage //
          localStorage.setItem("location-city", cityName); 
          // Show all the product according to selected city 
          showProductsAccordingToCity();
        window.location.href = 'https://thegiftstudio.com/';
        });
      $('#close-popup').on("click", function () {
        $('.popup_class').css('display', 'none');
        location.reload();
      });
    }
    
  };
    
  }

  // city change on dropdown //
  // l.onchange = onChange;
};

function cityChangePopup(city, value = '', tat = 0, isPerishable = 1,pincode='') {
    // getting value of selected city //
    var cityName = city; 
    // var allLocations = ['Mumbai', 'Kolkata', 'Delhi', 'Bangalore', 'Gurgaon'];
    // var allLocationsValue = ['location-mumbai', 'location-kolkata', 'location-delhi', 'location-bangalore', 'location-gurgaon'];
  
  
    if(value == '') {
     value = 'location-roi'; // Default value 
    }
    
     //velocity: 17-07-2024 Function to push the event to GTM once a city is selected from dropdown
    // Updated on 22-04-2025 to push the city name and pincode
  
      if (localStorage.getItem("is-manually-set") == '1') {
    pushSelectLocationFromDropdown(cityName, pincode, 'auto');
      }else{
    pushSelectLocationFromDropdown(cityName, pincode, 'manually');
      }
  userStartedPincodeEnter(pincode);
    if(checkIfCityProductExistsInCart(value)){
      $('.city-modal-popup').removeClass('active');
      $('.city-modal-overlay').removeClass('active');
        $('.popup_class').css('display', 'block');
        $("#replace-cart").on("click", function () {
            clearShopifyCart();
            
            $('.popup_class').css('display', 'none');
            // storing the value of city in local storage //
            localStorage.setItem("location", value); 
            // storing the text of city local storage //
            localStorage.setItem("location-city", cityName); 
            localStorage.setItem("isPerishable", isPerishable); 
           localStorage.setItem("location-city", cityName); 
          localStorage.setItem("city-tat", tat); 
          localStorage.setItem("userPincode", pincode);
            localStorage.setItem("is-manually-set", "0"); 
            // Show all the product according to selected city 
            showProductsAccordingToCity();
          window.location.href = 'https://thegiftstudio.com/';
          });
        $('#close-popup').on("click", function () {
          $('.popup_class').css('display', 'none');
          location.reload();
        });
    }else{
       $('.city-modal-popup').removeClass('active');
      $('.city-modal-overlay').removeClass('active');
        $('.popup_class').css('display', 'none');
          // storing the value of city in local storage //
          localStorage.setItem("location", value); 

         // velocity:14-09-2024 Added the isPerishable key in the local storage. 
        localStorage.setItem("isPerishable", isPerishable); 
        localStorage.setItem("city-tat", tat); 
          // storing the text of city local storage //
          localStorage.setItem("location-city", cityName); 
      localStorage.setItem("is-manually-set", "0"); 
          // Show all the product according to selected city 
           //Velocity: 04-09-2024 Added the below code to set the pincode value as null on change of city.
         localStorage.setItem("userPincode", pincode); 
          if(cityChangePopup == '') {
             showProductsAccordingToCity();
            location.reload();
          } else {
            window.location.href = clickTargetUrl;
          }
         
    }
}

function checkIfCityProductExistsInCart(cityName){
  // var allHaveSelectedCity = true;

  // $("#CartDrawer .tgs-product-item").each(function () {
  //   if (!$(this).hasClass(cityName)) {
  //     allHaveSelectedCity = false;
  //     return false; // Exit the loop early if a product without the city class is found
  //   }
  // });

  // return allHaveSelectedCity;       
   var allHaveSelectedCity = false;

  $("#CartDrawer .tgs-product-item").each(function () {
      allHaveSelectedCity = true;
  });

  return allHaveSelectedCity;       
}

changeCity = () => {
   //velocity: 17-07-2024 Added the function push the event to GTM on click of city option in navigation bar
    pushLocationFilterClick();
    setCityManually();
    
    var setLocationText = localStorage.getItem("location-city");
    if (!setLocationText) {
        return;
    }
    
    // Ensure the element exists before trying to access it
    const cityNameElements = document.querySelectorAll('.city_name_sec');
    if (cityNameElements.length > 0) {
        cityNameElements[0].innerText = setLocationText;
    }
};



mumLocation = () => {

    $('.city-modal-popup').removeClass('active');
    $('.city-modal-overlay').removeClass('active');
  // location.reload();
  // if (localStorage.getItem("location") == null) {
   
  //   localStorage.setItem("location", "location-mumbai"); // setting the value of city in local storage if it is null
  //   localStorage.setItem("location-city", "Mumbai"); // setting the text of city in local storage if it is null
  //    //valocity: 09-08-2024 Added this code to hide the popup for city selection 
  //    $('.city-modal-popup').removeClass('active');
  //   $('.city-modal-overlay').removeClass('active');
    
  //  location.reload();
  // }
  // else{
  //    //valocity: 09-08-2024 Added this code to hide the popup for city selection 
  //     $('.city-modal-popup').removeClass('active');
  //   $('.city-modal-overlay').removeClass('active');
  // }
}


locationFunc = () => {
  // velocity: This condition is to handle the popup if someone comes to BYOH page after going through other pages.
  if (localStorage.getItem("is-manually-set") == '1') {
       // if ($(".city-modal-close").length) {
       //          $(".city-modal-close").remove();
       //  }

       //  if ($(".city-modal-header-mobile").length) {
       //     $(".city-modal-header-mobile").find("button").remove();
       //  }
    if (window.location.href.includes("hamper-collections") || window.location.href.includes("sdd-4pm-cut-off")) {
      setTimeout(() => {
      changeCity();
      $(".city-modal-close").remove();
       if ($(".city-modal-header-mobile").length) {
          $(".city-modal-header-mobile").find("button").remove();
       }

    }, 1000); // 1000 milliseconds = 1 seconds 
    }
  }

  // if ( localStorage.getItem("is-manually-set") == '1' &&  window.location.href.includes("hamper-collections")) {
  //          changeCity();
  //   } else 
    if (localStorage.getItem("location") == null) {
        localStorage.setItem("location", "location-mumbai" ); 
        localStorage.setItem("location-city", "Mumbai"); 
      localStorage.setItem("userPincode", ""); 
        localStorage.setItem("is-manually-set", "1"); 
        // city_name.innerText = 'Choose Location';
        
        localStorage.setItem("isPerishable", 1); 
        localStorage.setItem("city-tat", 0); 

        // if ($(".city-modal-close").length) {
        //         $(".city-modal-close").remove();
        // }

        // if ($(".city-modal-header-mobile").length) {
        //    $(".city-modal-header-mobile").find("button").remove();
        // }
      
      // velocity: This condition is to handle the popup if user directly comes to BYOH page with no city selected.
        if (window.location.href.includes("hamper-collections") || window.location.href.includes("same-day")) {
          setTimeout(() => {
            changeCity();
          }, 1000); // 1000 milliseconds = 1 seconds
        }

        showProductsAccordingToCity();
        // setCityUsingGeoLocation(); //
        // location.reload() //
      
        // changeCity();
    } else {


      var getCity = getParameterByName('getCity');
       if(getCity == 'Kolkata'){
     // storing the value of city in local storage //
      localStorage.setItem("location", "location-kolkata" ); 
      // storing the text of city local storage //
      localStorage.setItem("location-city", "Kolkata"); 
    city_name.innerText = 'Kolkata';

    document.querySelector('body').classList.remove(allLocations) // removing all location class from body if already set //
    document.querySelector('body').classList.add('location-kolkata') // adding the selected city name class to body //

      //remove content hidden class for selected city items //
    var boxes = document.querySelectorAll('.' + 'location-kolkata');
    boxes.forEach(box => {
        box.classList.remove('content_hidden')
    });

    // remove unwanted city items div from document //
    // for eg. if kolkata is selected then remove mumbai, bangalore, etc //
    var notRequiredBoxes = document.querySelectorAll('.content_hidden');
    notRequiredBoxes.forEach(notRequiredBox => {
        notRequiredBox.remove()
    });
    
  }
      
        showProductsAccordingToCity();
    }
   
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

window.onpaint = locationFunc();




/* ============================== location functionality ends here ===================================== */





$(document).ready(function() {


 function checkTimeAndToggleText() {

      var city_tat = localStorage.getItem("city-tat");
        var currentTime = new Date();
        var hours = currentTime.getHours();
        
       
        if (hours >= 12 && hours < 24) {
            // Hide the text
          if(parseInt(city_tat) == 0) {
             $('.same_day_text').parents('.same_delivery_sec').css('display', 'block');
            $('.same_day_text').html('<span><svg xmlns="http://www.w3.org/2000/svg" width="40.237" height="23.266" viewBox="0 0 25.237 23.266"><path id="Path_29847" data-name="Path 29847" d="M25.093,14.341l-4.124-4.134a.493.493,0,0,0-.349-.145H16.956v-1.2a.493.493,0,0,0,.394-.483V4.436a.493.493,0,0,0-.493-.493h-4.24A2.464,2.464,0,1,0,8.675.988,2.464,2.464,0,1,0,4.733,3.943H.493A.493.493,0,0,0,0,4.436V8.38a.493.493,0,0,0,.493.493H7V19.319l0,.005a2.463,2.463,0,0,0-4.076.2H1.38v-7.2a.493.493,0,1,0-.986,0v7.689a.493.493,0,0,0,.493.493h1.69a2.446,2.446,0,0,0,.476,1.774H.493a.493.493,0,1,0,0,.986H8.967a2.459,2.459,0,0,0,2.446-2.76h7.139a2.5,2.5,0,0,0-.018.3,2.452,2.452,0,0,0,.494,1.479H14.891a.493.493,0,0,0,0,.986H21A2.467,2.467,0,0,0,23.463,20.8a2.5,2.5,0,0,0-.018-.3h1.3a.493.493,0,0,0,.493-.493V14.689A.493.493,0,0,0,25.093,14.341Zm-.842,1.63H20.907l2.213-2.213,1.132,1.135Zm-5.028-.493V14.466l2.3-2.3.9.9-2.879,2.879A.493.493,0,0,1,19.224,15.477Zm1.608-4.013-1.608,1.608V11.048h1.192ZM16.365,7.887H10.351V4.929h6.014Zm-7.4,10.45a2.452,2.452,0,0,0-.982.2V4.929h1.38v13.44A2.472,2.472,0,0,0,8.967,18.336ZM10.647.986a1.479,1.479,0,0,1,0,2.957H9.865l.851-.851a.493.493,0,0,0-.7-.7l-.851.851V2.465A1.48,1.48,0,0,1,10.647.986ZM5.225,2.465a1.479,1.479,0,1,1,2.957,0v.782L7.332,2.4a.493.493,0,0,0-.7.7l.851.851H6.7A1.48,1.48,0,0,1,5.225,2.465ZM.986,7.887V4.929H7V7.887ZM3.545,20.8A1.479,1.479,0,1,1,5.024,22.28,1.48,1.48,0,0,1,3.545,20.8ZM7,22.278v0h0Zm1.972,0A1.479,1.479,0,1,1,10.446,20.8,1.48,1.48,0,0,1,8.967,22.28Zm5.475-2.76H11.071a2.484,2.484,0,0,0-.72-.756V8.872H15.97V19.519ZM21,22.28A1.479,1.479,0,1,1,22.477,20.8,1.48,1.48,0,0,1,21,22.28Zm2.1-2.76a2.463,2.463,0,0,0-4.209,0H16.956V11.048h1.282v4.43a1.48,1.48,0,0,0,1.479,1.479h4.535v2.563Zm0,0" transform="translate(0 0)"/></svg></span><span>Earliest delivery: Tomorrow</span>');
          } else if(city_tat > 0) {
            $('.same_day_text').parents('.same_delivery_sec').css('display', 'none');
          }
        } else {
           if(city_tat == 0) {
            // Show the text
              $('.same_day_text').parents('.same_delivery_sec').css('display', 'block');
            $('.same_day_text').html('<span><svg xmlns="http://www.w3.org/2000/svg" width="40.237" height="23.266" viewBox="0 0 25.237 23.266"><path id="Path_29847" data-name="Path 29847" d="M25.093,14.341l-4.124-4.134a.493.493,0,0,0-.349-.145H16.956v-1.2a.493.493,0,0,0,.394-.483V4.436a.493.493,0,0,0-.493-.493h-4.24A2.464,2.464,0,1,0,8.675.988,2.464,2.464,0,1,0,4.733,3.943H.493A.493.493,0,0,0,0,4.436V8.38a.493.493,0,0,0,.493.493H7V19.319l0,.005a2.463,2.463,0,0,0-4.076.2H1.38v-7.2a.493.493,0,1,0-.986,0v7.689a.493.493,0,0,0,.493.493h1.69a2.446,2.446,0,0,0,.476,1.774H.493a.493.493,0,1,0,0,.986H8.967a2.459,2.459,0,0,0,2.446-2.76h7.139a2.5,2.5,0,0,0-.018.3,2.452,2.452,0,0,0,.494,1.479H14.891a.493.493,0,0,0,0,.986H21A2.467,2.467,0,0,0,23.463,20.8a2.5,2.5,0,0,0-.018-.3h1.3a.493.493,0,0,0,.493-.493V14.689A.493.493,0,0,0,25.093,14.341Zm-.842,1.63H20.907l2.213-2.213,1.132,1.135Zm-5.028-.493V14.466l2.3-2.3.9.9-2.879,2.879A.493.493,0,0,1,19.224,15.477Zm1.608-4.013-1.608,1.608V11.048h1.192ZM16.365,7.887H10.351V4.929h6.014Zm-7.4,10.45a2.452,2.452,0,0,0-.982.2V4.929h1.38v13.44A2.472,2.472,0,0,0,8.967,18.336ZM10.647.986a1.479,1.479,0,0,1,0,2.957H9.865l.851-.851a.493.493,0,0,0-.7-.7l-.851.851V2.465A1.48,1.48,0,0,1,10.647.986ZM5.225,2.465a1.479,1.479,0,1,1,2.957,0v.782L7.332,2.4a.493.493,0,0,0-.7.7l.851.851H6.7A1.48,1.48,0,0,1,5.225,2.465ZM.986,7.887V4.929H7V7.887ZM3.545,20.8A1.479,1.479,0,1,1,5.024,22.28,1.48,1.48,0,0,1,3.545,20.8ZM7,22.278v0h0Zm1.972,0A1.479,1.479,0,1,1,10.446,20.8,1.48,1.48,0,0,1,8.967,22.28Zm5.475-2.76H11.071a2.484,2.484,0,0,0-.72-.756V8.872H15.97V19.519ZM21,22.28A1.479,1.479,0,1,1,22.477,20.8,1.48,1.48,0,0,1,21,22.28Zm2.1-2.76a2.463,2.463,0,0,0-4.209,0H16.956V11.048h1.282v4.43a1.48,1.48,0,0,0,1.479,1.479h4.535v2.563Zm0,0" transform="translate(0 0)"/></svg></span><span>Earliest delivery: Today</span>');
          } else if(city_tat == 1) {
              $('.same_day_text').parents('.same_delivery_sec').css('display', 'block');
             $('.same_day_text').html('<span><svg xmlns="http://www.w3.org/2000/svg" width="40.237" height="23.266" viewBox="0 0 25.237 23.266"><path id="Path_29847" data-name="Path 29847" d="M25.093,14.341l-4.124-4.134a.493.493,0,0,0-.349-.145H16.956v-1.2a.493.493,0,0,0,.394-.483V4.436a.493.493,0,0,0-.493-.493h-4.24A2.464,2.464,0,1,0,8.675.988,2.464,2.464,0,1,0,4.733,3.943H.493A.493.493,0,0,0,0,4.436V8.38a.493.493,0,0,0,.493.493H7V19.319l0,.005a2.463,2.463,0,0,0-4.076.2H1.38v-7.2a.493.493,0,1,0-.986,0v7.689a.493.493,0,0,0,.493.493h1.69a2.446,2.446,0,0,0,.476,1.774H.493a.493.493,0,1,0,0,.986H8.967a2.459,2.459,0,0,0,2.446-2.76h7.139a2.5,2.5,0,0,0-.018.3,2.452,2.452,0,0,0,.494,1.479H14.891a.493.493,0,0,0,0,.986H21A2.467,2.467,0,0,0,23.463,20.8a2.5,2.5,0,0,0-.018-.3h1.3a.493.493,0,0,0,.493-.493V14.689A.493.493,0,0,0,25.093,14.341Zm-.842,1.63H20.907l2.213-2.213,1.132,1.135Zm-5.028-.493V14.466l2.3-2.3.9.9-2.879,2.879A.493.493,0,0,1,19.224,15.477Zm1.608-4.013-1.608,1.608V11.048h1.192ZM16.365,7.887H10.351V4.929h6.014Zm-7.4,10.45a2.452,2.452,0,0,0-.982.2V4.929h1.38v13.44A2.472,2.472,0,0,0,8.967,18.336ZM10.647.986a1.479,1.479,0,0,1,0,2.957H9.865l.851-.851a.493.493,0,0,0-.7-.7l-.851.851V2.465A1.48,1.48,0,0,1,10.647.986ZM5.225,2.465a1.479,1.479,0,1,1,2.957,0v.782L7.332,2.4a.493.493,0,0,0-.7.7l.851.851H6.7A1.48,1.48,0,0,1,5.225,2.465ZM.986,7.887V4.929H7V7.887ZM3.545,20.8A1.479,1.479,0,1,1,5.024,22.28,1.48,1.48,0,0,1,3.545,20.8ZM7,22.278v0h0Zm1.972,0A1.479,1.479,0,1,1,10.446,20.8,1.48,1.48,0,0,1,8.967,22.28Zm5.475-2.76H11.071a2.484,2.484,0,0,0-.72-.756V8.872H15.97V19.519ZM21,22.28A1.479,1.479,0,1,1,22.477,20.8,1.48,1.48,0,0,1,21,22.28Zm2.1-2.76a2.463,2.463,0,0,0-4.209,0H16.956V11.048h1.282v4.43a1.48,1.48,0,0,0,1.479,1.479h4.535v2.563Zm0,0" transform="translate(0 0)"/></svg></span><span>Earliest delivery: Tomorrow</span>');
          } else if(city_tat > 1) {
           $('.same_day_text').parents('.same_delivery_sec').css('display', 'none');
           }
        }

        
        if (hours >= 16 && hours < 24) {
            // Hide the text
           if(city_tat == 0) {
              $('.four_hour_text').parents('.same_delivery_sec').css('display', 'block');
             $('.four_hour_text').html('<span><svg xmlns="http://www.w3.org/2000/svg" width="40.237" height="23.266" viewBox="0 0 25.237 23.266"><path id="Path_29847" data-name="Path 29847" d="M25.093,14.341l-4.124-4.134a.493.493,0,0,0-.349-.145H16.956v-1.2a.493.493,0,0,0,.394-.483V4.436a.493.493,0,0,0-.493-.493h-4.24A2.464,2.464,0,1,0,8.675.988,2.464,2.464,0,1,0,4.733,3.943H.493A.493.493,0,0,0,0,4.436V8.38a.493.493,0,0,0,.493.493H7V19.319l0,.005a2.463,2.463,0,0,0-4.076.2H1.38v-7.2a.493.493,0,1,0-.986,0v7.689a.493.493,0,0,0,.493.493h1.69a2.446,2.446,0,0,0,.476,1.774H.493a.493.493,0,1,0,0,.986H8.967a2.459,2.459,0,0,0,2.446-2.76h7.139a2.5,2.5,0,0,0-.018.3,2.452,2.452,0,0,0,.494,1.479H14.891a.493.493,0,0,0,0,.986H21A2.467,2.467,0,0,0,23.463,20.8a2.5,2.5,0,0,0-.018-.3h1.3a.493.493,0,0,0,.493-.493V14.689A.493.493,0,0,0,25.093,14.341Zm-.842,1.63H20.907l2.213-2.213,1.132,1.135Zm-5.028-.493V14.466l2.3-2.3.9.9-2.879,2.879A.493.493,0,0,1,19.224,15.477Zm1.608-4.013-1.608,1.608V11.048h1.192ZM16.365,7.887H10.351V4.929h6.014Zm-7.4,10.45a2.452,2.452,0,0,0-.982.2V4.929h1.38v13.44A2.472,2.472,0,0,0,8.967,18.336ZM10.647.986a1.479,1.479,0,0,1,0,2.957H9.865l.851-.851a.493.493,0,0,0-.7-.7l-.851.851V2.465A1.48,1.48,0,0,1,10.647.986ZM5.225,2.465a1.479,1.479,0,1,1,2.957,0v.782L7.332,2.4a.493.493,0,0,0-.7.7l.851.851H6.7A1.48,1.48,0,0,1,5.225,2.465ZM.986,7.887V4.929H7V7.887ZM3.545,20.8A1.479,1.479,0,1,1,5.024,22.28,1.48,1.48,0,0,1,3.545,20.8ZM7,22.278v0h0Zm1.972,0A1.479,1.479,0,1,1,10.446,20.8,1.48,1.48,0,0,1,8.967,22.28Zm5.475-2.76H11.071a2.484,2.484,0,0,0-.72-.756V8.872H15.97V19.519ZM21,22.28A1.479,1.479,0,1,1,22.477,20.8,1.48,1.48,0,0,1,21,22.28Zm2.1-2.76a2.463,2.463,0,0,0-4.209,0H16.956V11.048h1.282v4.43a1.48,1.48,0,0,0,1.479,1.479h4.535v2.563Zm0,0" transform="translate(0 0)"/></svg></span><span>Earliest delivery: Tomorrow</span>');
          } else if(city_tat > 0) {
             $('.four_hour_text').parents('.same_delivery_sec').css('display', 'none');
           }
        } else {
          if(city_tat == 0) {
             $('.four_hour_text').parents('.same_delivery_sec').css('display', 'block');
             $('.four_hour_text').html('<span><svg xmlns="http://www.w3.org/2000/svg" width="40.237" height="23.266" viewBox="0 0 25.237 23.266"><path id="Path_29847" data-name="Path 29847" d="M25.093,14.341l-4.124-4.134a.493.493,0,0,0-.349-.145H16.956v-1.2a.493.493,0,0,0,.394-.483V4.436a.493.493,0,0,0-.493-.493h-4.24A2.464,2.464,0,1,0,8.675.988,2.464,2.464,0,1,0,4.733,3.943H.493A.493.493,0,0,0,0,4.436V8.38a.493.493,0,0,0,.493.493H7V19.319l0,.005a2.463,2.463,0,0,0-4.076.2H1.38v-7.2a.493.493,0,1,0-.986,0v7.689a.493.493,0,0,0,.493.493h1.69a2.446,2.446,0,0,0,.476,1.774H.493a.493.493,0,1,0,0,.986H8.967a2.459,2.459,0,0,0,2.446-2.76h7.139a2.5,2.5,0,0,0-.018.3,2.452,2.452,0,0,0,.494,1.479H14.891a.493.493,0,0,0,0,.986H21A2.467,2.467,0,0,0,23.463,20.8a2.5,2.5,0,0,0-.018-.3h1.3a.493.493,0,0,0,.493-.493V14.689A.493.493,0,0,0,25.093,14.341Zm-.842,1.63H20.907l2.213-2.213,1.132,1.135Zm-5.028-.493V14.466l2.3-2.3.9.9-2.879,2.879A.493.493,0,0,1,19.224,15.477Zm1.608-4.013-1.608,1.608V11.048h1.192ZM16.365,7.887H10.351V4.929h6.014Zm-7.4,10.45a2.452,2.452,0,0,0-.982.2V4.929h1.38v13.44A2.472,2.472,0,0,0,8.967,18.336ZM10.647.986a1.479,1.479,0,0,1,0,2.957H9.865l.851-.851a.493.493,0,0,0-.7-.7l-.851.851V2.465A1.48,1.48,0,0,1,10.647.986ZM5.225,2.465a1.479,1.479,0,1,1,2.957,0v.782L7.332,2.4a.493.493,0,0,0-.7.7l.851.851H6.7A1.48,1.48,0,0,1,5.225,2.465ZM.986,7.887V4.929H7V7.887ZM3.545,20.8A1.479,1.479,0,1,1,5.024,22.28,1.48,1.48,0,0,1,3.545,20.8ZM7,22.278v0h0Zm1.972,0A1.479,1.479,0,1,1,10.446,20.8,1.48,1.48,0,0,1,8.967,22.28Zm5.475-2.76H11.071a2.484,2.484,0,0,0-.72-.756V8.872H15.97V19.519ZM21,22.28A1.479,1.479,0,1,1,22.477,20.8,1.48,1.48,0,0,1,21,22.28Zm2.1-2.76a2.463,2.463,0,0,0-4.209,0H16.956V11.048h1.282v4.43a1.48,1.48,0,0,0,1.479,1.479h4.535v2.563Zm0,0" transform="translate(0 0)"/></svg></span><span>Earliest delivery: Today</span>');
          } else if(city_tat == 1) {
             $('.four_hour_text').parents('.same_delivery_sec').css('display', 'block');
             $('.four_hour_text').html('<span><svg xmlns="http://www.w3.org/2000/svg" width="40.237" height="23.266" viewBox="0 0 25.237 23.266"><path id="Path_29847" data-name="Path 29847" d="M25.093,14.341l-4.124-4.134a.493.493,0,0,0-.349-.145H16.956v-1.2a.493.493,0,0,0,.394-.483V4.436a.493.493,0,0,0-.493-.493h-4.24A2.464,2.464,0,1,0,8.675.988,2.464,2.464,0,1,0,4.733,3.943H.493A.493.493,0,0,0,0,4.436V8.38a.493.493,0,0,0,.493.493H7V19.319l0,.005a2.463,2.463,0,0,0-4.076.2H1.38v-7.2a.493.493,0,1,0-.986,0v7.689a.493.493,0,0,0,.493.493h1.69a2.446,2.446,0,0,0,.476,1.774H.493a.493.493,0,1,0,0,.986H8.967a2.459,2.459,0,0,0,2.446-2.76h7.139a2.5,2.5,0,0,0-.018.3,2.452,2.452,0,0,0,.494,1.479H14.891a.493.493,0,0,0,0,.986H21A2.467,2.467,0,0,0,23.463,20.8a2.5,2.5,0,0,0-.018-.3h1.3a.493.493,0,0,0,.493-.493V14.689A.493.493,0,0,0,25.093,14.341Zm-.842,1.63H20.907l2.213-2.213,1.132,1.135Zm-5.028-.493V14.466l2.3-2.3.9.9-2.879,2.879A.493.493,0,0,1,19.224,15.477Zm1.608-4.013-1.608,1.608V11.048h1.192ZM16.365,7.887H10.351V4.929h6.014Zm-7.4,10.45a2.452,2.452,0,0,0-.982.2V4.929h1.38v13.44A2.472,2.472,0,0,0,8.967,18.336ZM10.647.986a1.479,1.479,0,0,1,0,2.957H9.865l.851-.851a.493.493,0,0,0-.7-.7l-.851.851V2.465A1.48,1.48,0,0,1,10.647.986ZM5.225,2.465a1.479,1.479,0,1,1,2.957,0v.782L7.332,2.4a.493.493,0,0,0-.7.7l.851.851H6.7A1.48,1.48,0,0,1,5.225,2.465ZM.986,7.887V4.929H7V7.887ZM3.545,20.8A1.479,1.479,0,1,1,5.024,22.28,1.48,1.48,0,0,1,3.545,20.8ZM7,22.278v0h0Zm1.972,0A1.479,1.479,0,1,1,10.446,20.8,1.48,1.48,0,0,1,8.967,22.28Zm5.475-2.76H11.071a2.484,2.484,0,0,0-.72-.756V8.872H15.97V19.519ZM21,22.28A1.479,1.479,0,1,1,22.477,20.8,1.48,1.48,0,0,1,21,22.28Zm2.1-2.76a2.463,2.463,0,0,0-4.209,0H16.956V11.048h1.282v4.43a1.48,1.48,0,0,0,1.479,1.479h4.535v2.563Zm0,0" transform="translate(0 0)"/></svg></span><span>Earliest delivery: Tomorrow</span>');
          } else if(city_tat > 1) {
             $('.four_hour_text').parents('.same_delivery_sec').css('display', 'none');
           }
        } 
   //Seven PM logic start
       if (hours >= 19 && hours < 24) {
            // Hide the text
           if(city_tat == 0) {
              $('.seven_hour_text').parents('.same_delivery_sec').css('display', 'block');
             $('.seven_hour_text').html('<span><svg xmlns="http://www.w3.org/2000/svg" width="40.237" height="23.266" viewBox="0 0 25.237 23.266"><path id="Path_29847" data-name="Path 29847" d="M25.093,14.341l-4.124-4.134a.493.493,0,0,0-.349-.145H16.956v-1.2a.493.493,0,0,0,.394-.483V4.436a.493.493,0,0,0-.493-.493h-4.24A2.464,2.464,0,1,0,8.675.988,2.464,2.464,0,1,0,4.733,3.943H.493A.493.493,0,0,0,0,4.436V8.38a.493.493,0,0,0,.493.493H7V19.319l0,.005a2.463,2.463,0,0,0-4.076.2H1.38v-7.2a.493.493,0,1,0-.986,0v7.689a.493.493,0,0,0,.493.493h1.69a2.446,2.446,0,0,0,.476,1.774H.493a.493.493,0,1,0,0,.986H8.967a2.459,2.459,0,0,0,2.446-2.76h7.139a2.5,2.5,0,0,0-.018.3,2.452,2.452,0,0,0,.494,1.479H14.891a.493.493,0,0,0,0,.986H21A2.467,2.467,0,0,0,23.463,20.8a2.5,2.5,0,0,0-.018-.3h1.3a.493.493,0,0,0,.493-.493V14.689A.493.493,0,0,0,25.093,14.341Zm-.842,1.63H20.907l2.213-2.213,1.132,1.135Zm-5.028-.493V14.466l2.3-2.3.9.9-2.879,2.879A.493.493,0,0,1,19.224,15.477Zm1.608-4.013-1.608,1.608V11.048h1.192ZM16.365,7.887H10.351V4.929h6.014Zm-7.4,10.45a2.452,2.452,0,0,0-.982.2V4.929h1.38v13.44A2.472,2.472,0,0,0,8.967,18.336ZM10.647.986a1.479,1.479,0,0,1,0,2.957H9.865l.851-.851a.493.493,0,0,0-.7-.7l-.851.851V2.465A1.48,1.48,0,0,1,10.647.986ZM5.225,2.465a1.479,1.479,0,1,1,2.957,0v.782L7.332,2.4a.493.493,0,0,0-.7.7l.851.851H6.7A1.48,1.48,0,0,1,5.225,2.465ZM.986,7.887V4.929H7V7.887ZM3.545,20.8A1.479,1.479,0,1,1,5.024,22.28,1.48,1.48,0,0,1,3.545,20.8ZM7,22.278v0h0Zm1.972,0A1.479,1.479,0,1,1,10.446,20.8,1.48,1.48,0,0,1,8.967,22.28Zm5.475-2.76H11.071a2.484,2.484,0,0,0-.72-.756V8.872H15.97V19.519ZM21,22.28A1.479,1.479,0,1,1,22.477,20.8,1.48,1.48,0,0,1,21,22.28Zm2.1-2.76a2.463,2.463,0,0,0-4.209,0H16.956V11.048h1.282v4.43a1.48,1.48,0,0,0,1.479,1.479h4.535v2.563Zm0,0" transform="translate(0 0)"/></svg></span><span>Earliest delivery: Tomorrow</span>');
          } else if(city_tat > 0) {
             $('.seven_hour_text').parents('.same_delivery_sec').css('display', 'none');
           }
        } else {
          if(city_tat == 0) {
             $('.seven_hour_text').parents('.same_delivery_sec').css('display', 'block');
             $('.seven_hour_text').html('<span><svg xmlns="http://www.w3.org/2000/svg" width="40.237" height="23.266" viewBox="0 0 25.237 23.266"><path id="Path_29847" data-name="Path 29847" d="M25.093,14.341l-4.124-4.134a.493.493,0,0,0-.349-.145H16.956v-1.2a.493.493,0,0,0,.394-.483V4.436a.493.493,0,0,0-.493-.493h-4.24A2.464,2.464,0,1,0,8.675.988,2.464,2.464,0,1,0,4.733,3.943H.493A.493.493,0,0,0,0,4.436V8.38a.493.493,0,0,0,.493.493H7V19.319l0,.005a2.463,2.463,0,0,0-4.076.2H1.38v-7.2a.493.493,0,1,0-.986,0v7.689a.493.493,0,0,0,.493.493h1.69a2.446,2.446,0,0,0,.476,1.774H.493a.493.493,0,1,0,0,.986H8.967a2.459,2.459,0,0,0,2.446-2.76h7.139a2.5,2.5,0,0,0-.018.3,2.452,2.452,0,0,0,.494,1.479H14.891a.493.493,0,0,0,0,.986H21A2.467,2.467,0,0,0,23.463,20.8a2.5,2.5,0,0,0-.018-.3h1.3a.493.493,0,0,0,.493-.493V14.689A.493.493,0,0,0,25.093,14.341Zm-.842,1.63H20.907l2.213-2.213,1.132,1.135Zm-5.028-.493V14.466l2.3-2.3.9.9-2.879,2.879A.493.493,0,0,1,19.224,15.477Zm1.608-4.013-1.608,1.608V11.048h1.192ZM16.365,7.887H10.351V4.929h6.014Zm-7.4,10.45a2.452,2.452,0,0,0-.982.2V4.929h1.38v13.44A2.472,2.472,0,0,0,8.967,18.336ZM10.647.986a1.479,1.479,0,0,1,0,2.957H9.865l.851-.851a.493.493,0,0,0-.7-.7l-.851.851V2.465A1.48,1.48,0,0,1,10.647.986ZM5.225,2.465a1.479,1.479,0,1,1,2.957,0v.782L7.332,2.4a.493.493,0,0,0-.7.7l.851.851H6.7A1.48,1.48,0,0,1,5.225,2.465ZM.986,7.887V4.929H7V7.887ZM3.545,20.8A1.479,1.479,0,1,1,5.024,22.28,1.48,1.48,0,0,1,3.545,20.8ZM7,22.278v0h0Zm1.972,0A1.479,1.479,0,1,1,10.446,20.8,1.48,1.48,0,0,1,8.967,22.28Zm5.475-2.76H11.071a2.484,2.484,0,0,0-.72-.756V8.872H15.97V19.519ZM21,22.28A1.479,1.479,0,1,1,22.477,20.8,1.48,1.48,0,0,1,21,22.28Zm2.1-2.76a2.463,2.463,0,0,0-4.209,0H16.956V11.048h1.282v4.43a1.48,1.48,0,0,0,1.479,1.479h4.535v2.563Zm0,0" transform="translate(0 0)"/></svg></span><span>Earliest delivery: Today</span>');
          } else if(city_tat == 1) {
             $('.seven_hour_text').parents('.same_delivery_sec').css('display', 'block');
             $('.seven_hour_text').html('<span><svg xmlns="http://www.w3.org/2000/svg" width="40.237" height="23.266" viewBox="0 0 25.237 23.266"><path id="Path_29847" data-name="Path 29847" d="M25.093,14.341l-4.124-4.134a.493.493,0,0,0-.349-.145H16.956v-1.2a.493.493,0,0,0,.394-.483V4.436a.493.493,0,0,0-.493-.493h-4.24A2.464,2.464,0,1,0,8.675.988,2.464,2.464,0,1,0,4.733,3.943H.493A.493.493,0,0,0,0,4.436V8.38a.493.493,0,0,0,.493.493H7V19.319l0,.005a2.463,2.463,0,0,0-4.076.2H1.38v-7.2a.493.493,0,1,0-.986,0v7.689a.493.493,0,0,0,.493.493h1.69a2.446,2.446,0,0,0,.476,1.774H.493a.493.493,0,1,0,0,.986H8.967a2.459,2.459,0,0,0,2.446-2.76h7.139a2.5,2.5,0,0,0-.018.3,2.452,2.452,0,0,0,.494,1.479H14.891a.493.493,0,0,0,0,.986H21A2.467,2.467,0,0,0,23.463,20.8a2.5,2.5,0,0,0-.018-.3h1.3a.493.493,0,0,0,.493-.493V14.689A.493.493,0,0,0,25.093,14.341Zm-.842,1.63H20.907l2.213-2.213,1.132,1.135Zm-5.028-.493V14.466l2.3-2.3.9.9-2.879,2.879A.493.493,0,0,1,19.224,15.477Zm1.608-4.013-1.608,1.608V11.048h1.192ZM16.365,7.887H10.351V4.929h6.014Zm-7.4,10.45a2.452,2.452,0,0,0-.982.2V4.929h1.38v13.44A2.472,2.472,0,0,0,8.967,18.336ZM10.647.986a1.479,1.479,0,0,1,0,2.957H9.865l.851-.851a.493.493,0,0,0-.7-.7l-.851.851V2.465A1.48,1.48,0,0,1,10.647.986ZM5.225,2.465a1.479,1.479,0,1,1,2.957,0v.782L7.332,2.4a.493.493,0,0,0-.7.7l.851.851H6.7A1.48,1.48,0,0,1,5.225,2.465ZM.986,7.887V4.929H7V7.887ZM3.545,20.8A1.479,1.479,0,1,1,5.024,22.28,1.48,1.48,0,0,1,3.545,20.8ZM7,22.278v0h0Zm1.972,0A1.479,1.479,0,1,1,10.446,20.8,1.48,1.48,0,0,1,8.967,22.28Zm5.475-2.76H11.071a2.484,2.484,0,0,0-.72-.756V8.872H15.97V19.519ZM21,22.28A1.479,1.479,0,1,1,22.477,20.8,1.48,1.48,0,0,1,21,22.28Zm2.1-2.76a2.463,2.463,0,0,0-4.209,0H16.956V11.048h1.282v4.43a1.48,1.48,0,0,0,1.479,1.479h4.535v2.563Zm0,0" transform="translate(0 0)"/></svg></span><span>Earliest delivery: Tomorrow</span>');
          } else if(city_tat > 1) {
             $('.seven_hour_text').parents('.same_delivery_sec').css('display', 'none');
           }
        } 
   //Seven PM logic end
        if (hours >= 14 && hours < 24) {
          if(city_tat == 0) {
             $('.two_hour_text').parents('.same_delivery_sec').css('display', 'block');
            $('.two_hour_text').html('<span><svg xmlns="http://www.w3.org/2000/svg" width="40.237" height="23.266" viewBox="0 0 25.237 23.266"><path id="Path_29847" data-name="Path 29847" d="M25.093,14.341l-4.124-4.134a.493.493,0,0,0-.349-.145H16.956v-1.2a.493.493,0,0,0,.394-.483V4.436a.493.493,0,0,0-.493-.493h-4.24A2.464,2.464,0,1,0,8.675.988,2.464,2.464,0,1,0,4.733,3.943H.493A.493.493,0,0,0,0,4.436V8.38a.493.493,0,0,0,.493.493H7V19.319l0,.005a2.463,2.463,0,0,0-4.076.2H1.38v-7.2a.493.493,0,1,0-.986,0v7.689a.493.493,0,0,0,.493.493h1.69a2.446,2.446,0,0,0,.476,1.774H.493a.493.493,0,1,0,0,.986H8.967a2.459,2.459,0,0,0,2.446-2.76h7.139a2.5,2.5,0,0,0-.018.3,2.452,2.452,0,0,0,.494,1.479H14.891a.493.493,0,0,0,0,.986H21A2.467,2.467,0,0,0,23.463,20.8a2.5,2.5,0,0,0-.018-.3h1.3a.493.493,0,0,0,.493-.493V14.689A.493.493,0,0,0,25.093,14.341Zm-.842,1.63H20.907l2.213-2.213,1.132,1.135Zm-5.028-.493V14.466l2.3-2.3.9.9-2.879,2.879A.493.493,0,0,1,19.224,15.477Zm1.608-4.013-1.608,1.608V11.048h1.192ZM16.365,7.887H10.351V4.929h6.014Zm-7.4,10.45a2.452,2.452,0,0,0-.982.2V4.929h1.38v13.44A2.472,2.472,0,0,0,8.967,18.336ZM10.647.986a1.479,1.479,0,0,1,0,2.957H9.865l.851-.851a.493.493,0,0,0-.7-.7l-.851.851V2.465A1.48,1.48,0,0,1,10.647.986ZM5.225,2.465a1.479,1.479,0,1,1,2.957,0v.782L7.332,2.4a.493.493,0,0,0-.7.7l.851.851H6.7A1.48,1.48,0,0,1,5.225,2.465ZM.986,7.887V4.929H7V7.887ZM3.545,20.8A1.479,1.479,0,1,1,5.024,22.28,1.48,1.48,0,0,1,3.545,20.8ZM7,22.278v0h0Zm1.972,0A1.479,1.479,0,1,1,10.446,20.8,1.48,1.48,0,0,1,8.967,22.28Zm5.475-2.76H11.071a2.484,2.484,0,0,0-.72-.756V8.872H15.97V19.519ZM21,22.28A1.479,1.479,0,1,1,22.477,20.8,1.48,1.48,0,0,1,21,22.28Zm2.1-2.76a2.463,2.463,0,0,0-4.209,0H16.956V11.048h1.282v4.43a1.48,1.48,0,0,0,1.479,1.479h4.535v2.563Zm0,0" transform="translate(0 0)"/></svg></span><span>Earliest delivery: Tomorrow</span>');
          } else if(city_tat == 0) {
             $('.two_hour_text').parents('.same_delivery_sec').css('display', 'block');
             $('.two_hour_text').html('<span><svg xmlns="http://www.w3.org/2000/svg" width="40.237" height="23.266" viewBox="0 0 25.237 23.266"><path id="Path_29847" data-name="Path 29847" d="M25.093,14.341l-4.124-4.134a.493.493,0,0,0-.349-.145H16.956v-1.2a.493.493,0,0,0,.394-.483V4.436a.493.493,0,0,0-.493-.493h-4.24A2.464,2.464,0,1,0,8.675.988,2.464,2.464,0,1,0,4.733,3.943H.493A.493.493,0,0,0,0,4.436V8.38a.493.493,0,0,0,.493.493H7V19.319l0,.005a2.463,2.463,0,0,0-4.076.2H1.38v-7.2a.493.493,0,1,0-.986,0v7.689a.493.493,0,0,0,.493.493h1.69a2.446,2.446,0,0,0,.476,1.774H.493a.493.493,0,1,0,0,.986H8.967a2.459,2.459,0,0,0,2.446-2.76h7.139a2.5,2.5,0,0,0-.018.3,2.452,2.452,0,0,0,.494,1.479H14.891a.493.493,0,0,0,0,.986H21A2.467,2.467,0,0,0,23.463,20.8a2.5,2.5,0,0,0-.018-.3h1.3a.493.493,0,0,0,.493-.493V14.689A.493.493,0,0,0,25.093,14.341Zm-.842,1.63H20.907l2.213-2.213,1.132,1.135Zm-5.028-.493V14.466l2.3-2.3.9.9-2.879,2.879A.493.493,0,0,1,19.224,15.477Zm1.608-4.013-1.608,1.608V11.048h1.192ZM16.365,7.887H10.351V4.929h6.014Zm-7.4,10.45a2.452,2.452,0,0,0-.982.2V4.929h1.38v13.44A2.472,2.472,0,0,0,8.967,18.336ZM10.647.986a1.479,1.479,0,0,1,0,2.957H9.865l.851-.851a.493.493,0,0,0-.7-.7l-.851.851V2.465A1.48,1.48,0,0,1,10.647.986ZM5.225,2.465a1.479,1.479,0,1,1,2.957,0v.782L7.332,2.4a.493.493,0,0,0-.7.7l.851.851H6.7A1.48,1.48,0,0,1,5.225,2.465ZM.986,7.887V4.929H7V7.887ZM3.545,20.8A1.479,1.479,0,1,1,5.024,22.28,1.48,1.48,0,0,1,3.545,20.8ZM7,22.278v0h0Zm1.972,0A1.479,1.479,0,1,1,10.446,20.8,1.48,1.48,0,0,1,8.967,22.28Zm5.475-2.76H11.071a2.484,2.484,0,0,0-.72-.756V8.872H15.97V19.519ZM21,22.28A1.479,1.479,0,1,1,22.477,20.8,1.48,1.48,0,0,1,21,22.28Zm2.1-2.76a2.463,2.463,0,0,0-4.209,0H16.956V11.048h1.282v4.43a1.48,1.48,0,0,0,1.479,1.479h4.535v2.563Zm0,0" transform="translate(0 0)"/></svg></span><span>Earliest delivery: Tomorrow</span>');
          } else if(city_tat > 1) {
             $('.two_hour_text').parents('.same_delivery_sec').css('display', 'none');
           }
        } else {
          if(city_tat == 0) {
             $('.two_hour_text').parents('.same_delivery_sec').css('display', 'block');
            $('.two_hour_text').html('<span><svg xmlns="http://www.w3.org/2000/svg" width="40.237" height="23.266" viewBox="0 0 25.237 23.266"><path id="Path_29847" data-name="Path 29847" d="M25.093,14.341l-4.124-4.134a.493.493,0,0,0-.349-.145H16.956v-1.2a.493.493,0,0,0,.394-.483V4.436a.493.493,0,0,0-.493-.493h-4.24A2.464,2.464,0,1,0,8.675.988,2.464,2.464,0,1,0,4.733,3.943H.493A.493.493,0,0,0,0,4.436V8.38a.493.493,0,0,0,.493.493H7V19.319l0,.005a2.463,2.463,0,0,0-4.076.2H1.38v-7.2a.493.493,0,1,0-.986,0v7.689a.493.493,0,0,0,.493.493h1.69a2.446,2.446,0,0,0,.476,1.774H.493a.493.493,0,1,0,0,.986H8.967a2.459,2.459,0,0,0,2.446-2.76h7.139a2.5,2.5,0,0,0-.018.3,2.452,2.452,0,0,0,.494,1.479H14.891a.493.493,0,0,0,0,.986H21A2.467,2.467,0,0,0,23.463,20.8a2.5,2.5,0,0,0-.018-.3h1.3a.493.493,0,0,0,.493-.493V14.689A.493.493,0,0,0,25.093,14.341Zm-.842,1.63H20.907l2.213-2.213,1.132,1.135Zm-5.028-.493V14.466l2.3-2.3.9.9-2.879,2.879A.493.493,0,0,1,19.224,15.477Zm1.608-4.013-1.608,1.608V11.048h1.192ZM16.365,7.887H10.351V4.929h6.014Zm-7.4,10.45a2.452,2.452,0,0,0-.982.2V4.929h1.38v13.44A2.472,2.472,0,0,0,8.967,18.336ZM10.647.986a1.479,1.479,0,0,1,0,2.957H9.865l.851-.851a.493.493,0,0,0-.7-.7l-.851.851V2.465A1.48,1.48,0,0,1,10.647.986ZM5.225,2.465a1.479,1.479,0,1,1,2.957,0v.782L7.332,2.4a.493.493,0,0,0-.7.7l.851.851H6.7A1.48,1.48,0,0,1,5.225,2.465ZM.986,7.887V4.929H7V7.887ZM3.545,20.8A1.479,1.479,0,1,1,5.024,22.28,1.48,1.48,0,0,1,3.545,20.8ZM7,22.278v0h0Zm1.972,0A1.479,1.479,0,1,1,10.446,20.8,1.48,1.48,0,0,1,8.967,22.28Zm5.475-2.76H11.071a2.484,2.484,0,0,0-.72-.756V8.872H15.97V19.519ZM21,22.28A1.479,1.479,0,1,1,22.477,20.8,1.48,1.48,0,0,1,21,22.28Zm2.1-2.76a2.463,2.463,0,0,0-4.209,0H16.956V11.048h1.282v4.43a1.48,1.48,0,0,0,1.479,1.479h4.535v2.563Zm0,0" transform="translate(0 0)"/></svg></span><span>Earliest delivery: Tomorrow</span>');
          } else if(city_tat > 0) {
             $('.two_hour_text').parents('.same_delivery_sec').css('display', 'none');
          } 
        }
    
    }

    // Call the function initially
    checkTimeAndToggleText();

    // Set an interval to check the time every minute
    setInterval(checkTimeAndToggleText, 60000); // Check every minute (60000 milliseconds)
  

  $("#close").on('click', function() {
    $(".location_filter").css("display","none");
});

    // ATC btn hide & show

  var storeLocation = localStorage.getItem("location");

 var classArr = [];
  var mainProductSec = $("#main-product_sec");
  
  if (mainProductSec.length > 0 && mainProductSec.attr("class")) {
      classArr = mainProductSec.attr("class").split(/\s+/);
      
      if (classArr.includes(storeLocation)) {
          $("#btn-show-1 .add_to_cart_btn_sec").show();
          $(".atc-error-msg").text(" ");
      } else {
          $("#btn-show-1 .add_to_cart_btn_sec").hide();
          $(".atc-error-msg").text(
              "This product is from a different location. Please change the location"
          );
      }
  }


  // ATC btn hide & show

 
 

 
  
     $(window).scroll(function() {
    // Code from websensepro.com //
    //After scrolling 300px from the top... //
    $('.prod_img_title_sec').css('display', 'none');
       $('.sticky-button .add_to_cart_btn_sec').css({
         'width':'100%'
       });
    if ( $(window).scrollTop() >= 800 ) {
        $('.sticky-button').css({
          'position':'fixed',
          'padding':'0 5rem',
          'box-shadow': '1px 3px 5px 2px rgba(0,0,0,1.5)'
        });
      $('.prod_img_title_sec').css('display', 'flex');
      $('.sticky-button .add_to_cart_btn_sec').css({
         'width':'20%'
       });
     
    //Otherwise remove inline styles and thereby revert to original stying //
    } else {
        $('.sticky-button').attr('style', '');

    }
});
  
   var winW = $(window).outerWidth();
  if (winW < 767) {

    $('.card_hide').hide();
         $('.view_more_sec p').click(function(){
            $('.card_hide').slideToggle();
         })

  $(window).scroll(function() {
    // Code from websensepro.com //
    //After scrolling 300px from the top... //
    $('.prod_img_title_sec').css('display', 'none');
    $('.sticky-button .add_to_cart_btn_sec').css({
         'width':'100%'
       });
     $('.sticky-button .add-to-cart-button').css({
        'width':'100%',
        'background':'#000',
        'color':'white',
         'border-radius':'30px'
      });
    if ( $(window).scrollTop() >= 1000 ) {
        $('.sticky-button').css({
          'position':'fixed',
          'padding':'0 1rem',
          'box-shadow': '1px 3px 5px 2px rgba(0,0,0,1.5)'
        });
      $('.prod_img_title_sec').css('display', 'flex');
      $('.sticky-button .add_to_cart_btn_sec').css({
         'width':'50%'
       });
      $('.sticky-button .add-to-cart-button').css({
        'width':'100%',
        'background':'#000',
        'color':'white',
        'border-radius':'30px'
      });

    //Otherwise remove inline styles and thereby revert to original stying //
    } else {
        $('.sticky-button').attr('style', '');

    }
});
    
  }

     $( ".addresses .toggle_btn" ).click(function() {
     var expanded = this.getAttribute('aria-expanded')
      if (expanded === 'false') {
        this.setAttribute('aria-expanded', 'true')
      } else {
        this.setAttribute('aria-expanded', 'false')
      }
    });

  $(document).ready(function () {
  // Find your slideshow container element
  var slideshow = $('.slideshow-container');

  // Clone the first slide and append it to the end
  // slideshow.find('.slideshow__slide').first().clone().appendTo(slideshow);

  // Set a timer to advance the slides
  setInterval(function () {
    // Calculate the width of each slide
    var slideWidth = slideshow.find('.slideshow__slide').outerWidth();

    // Animate the slideshow to the next slide
    slideshow.animate({ left: '0' }, 1000, function () {
      // Move the first slide to the end
    slideshow.find('.slideshow__slide').first().appendTo(slideshow);
      // Reset the position
      slideshow.css('left', 0);
    });
  }, 5000); // Change 3000 to your desired slide change interval in milliseconds
});


$(".discount-code-section .discount-header").on("click", function () {

  //opening the clicked accordian
		$(this).addClass("active");
		$(this)
			.parents(".accordion_section")
			.find(".accordion_content")
			.slideDown(200);
    
	//if the open accordion is clicked
	if ($(this).hasClass("active")) {
		//closing the current opened accordian
		$(this).removeClass("active");
		$(this).parents(".discount-code-section").find(".discount-code-container").slideUp(200);
	} 
});


  
});


