$(document).ready(function() {
    var sle_wrap_width = $('.sleeve_wrapper').width();
    var card_wrap_width = $('.gift_products_wrap').width();
    var slv_product_point = "";
    var card_product_point = "";
    $('.slv_product').hover(function(e) {
        var pos = $(this).position();
        var lft_pos = pos.left;
        lft_pos = lft_pos + 250;
        if (lft_pos > sle_wrap_width) {
            $('.slv_product .tooltip_product_info').css({
                "left": "auto",
                "right": "0%"
            });
        } else {
            $('.slv_product .tooltip_product_info').css({
                "left": "0%",
                "right": "auto"
            });
        }
    });
    //   alert(card_wrap_width);
    $('.gift_product').hover(function(e) {
        var card_pos = $(this).position();
        var lft_c_pos = card_pos.left;
        lft_c_pos = lft_c_pos + 250;

        if (lft_c_pos > card_wrap_width) {
            $('.gift_product .tooltip_product_info').css({
                "left": "auto",
                "right": "0%"
            });
        } else {
            $('.gift_product .tooltip_product_info').css({
                "left": "0%",
                "right": "auto"
            });
        }
    });


    var gift_product_id = "";
    var sleeve_product_id = "";
    var color_product_id = ""; 
    $('.gift_product_checkbox').click(function() {
        $('input[name="product_id"]:checked').each(function() {
            gift_product_id = this.value;
            var gift_pd_name = $(this).parent().find('.gift_pd_name').val();
            $('.show_gift_prod_name').text(gift_pd_name);
            if (gift_product_id == "" || gift_product_id == undefined) {
                $('.card_msg_wrapper').slideUp();
                $('#gift_card_msg').removeClass('cm-common-input');
            } else {
                $('.card_msg_wrapper').slideDown();
                $('#gift_card_msg').addClass('cm-common-input');
            }
        });
    });

    $('.sleeve_product_checkbox').click(function() {
        $('input[name="sleeve_product_id"]:checked').each(function() {
            sleeve_product_id = this.value;
            var sleeve_pd_name = $(this).parent().find('.sleeve_pd_name').val();
            $('.show_sleeve_pd_name').text(sleeve_pd_name);
        });
    });

  $('.color_name').click(function() {
        $('input[name="color_product_id"]:checked').each(function() {
            color_product_id = this.value;
            // var sleeve_pd_name = $(this).parent().find('.sleeve_pd_name').val();
            // $('.show_sleeve_pd_name').text(sleeve_pd_name);
        });
    });


  var skus = $('input[name="properties[SKU]"]').map(function() {
    return $(this).val();
  }).get();

  var $colorProduct = $('.color-product .color_name');
  for (var i = 0; i < skus.length; i++) {
    $colorProduct.eq(i).attr('data-sku', skus[i]);
  }


    



    $(window).on("load", function() {
        $('.slv_product:first-child .sleeve_product_checkbox').attr('checked', true);
        $('.slv_product:first-child .sleeve_product_checkbox').trigger("click");

 $('.color_name_sec:nth-child(1) .color_name').attr('checked', true);
        $('.color_name_sec:nth-child(1) .color_name').trigger("click");

    })

  // code star by dev NR
function hasBlankFields() {
  var form = $('.custom_game');
  var visibleFields = form.find(':visible');
  var uniqueInputs = [];
  visibleFields.each(function() {
    var inputName = $(this).attr('name');
    if (inputName && !uniqueInputs.includes(inputName)) {
      uniqueInputs.push(inputName);
    }
  });
  var isAnyFieldBlank = false;
  uniqueInputs.forEach(function(inputName) {
    var inputElements = form.find('[name="' + inputName + '"]');
    var hasValue = false;
    inputElements.each(function() {
      var elementValue = '';
      elementValue = $(this).val();
      if (elementValue.trim() !== '') {
        hasValue = true;
        return false;
      }
    });
    if (!hasValue) {
      isAnyFieldBlank = true;
      return false;
    }
  });
  return isAnyFieldBlank;
}
  
// code end


  

    $(".add-to-cart-button").on("click", function(event) {
      // debugger;
     // code star by dev NR
        var newProdTags = $(".hidden_tag").val();
          if(newProdTags.toLowerCase().includes("custom_game_set") && hasBlankFields()==true){
            $(".custom_game_input").focus();
            return $(".lt_error_text").text("Please fill up the questionaire. ");
            
          }
      // code end
        $(".lt_error_text").text("");
        $(".add-to-cart-button").attr("disabled", "disabled");
        $(".add-to-cart-button .custom_spinner").css("display", "flex");
        // event.preventDefault();
        // var cartNotification = new CartNotification();
        //    cartNotification.setActiveElement(document.activeElement)



        var product_id = "";
        let urlString = window.location.href;

        let paramString = urlString.split('?')[1];
        if (paramString == undefined) {
            product_id = $("#ProductSelected-variant").val();
        } else {
            let queryString = new URLSearchParams(paramString);

            for (let pair of queryString.entries()) {
                if (pair[0] == 'variant') {
                    product_id = pair[1];
                } else {
                    product_id = $("#ProductSelected-variant").val();
                }
            }
        }



        //     var product_id = $("select#ProductSelect-product-template option").filter(":selected").val();
        var card_msg = $('#gift_card_msg').val();

        var error_msg = $('.error-message').val();
        var error_message = $('.error_msg').val();


        var product_name = $('.product__title h1').html();
        var pd_quantity = $('.product_quantity_input_pdp').val() || 1;
        var custom_game_text = $('.custom_game_input').val();
      var fileInput = $("#custom_photo")[0]; // Get the DOM element from jQuery
var image_upload=false;
      const Image_upload_mandatory = $('p.product_tags').text().includes('photo_upload_field');
if (fileInput && fileInput.files.length > 0) {
  
    var file = fileInput.files[0];
    var allowedTypes = ['image/jpeg', 'image/png'];
    var maxSize = 1 * 1024 * 1024; // 1MB
 
// Remove any previous error
$(".custom_photo_error_txt").remove();
    if (!allowedTypes.includes(file.type)) {
        $("#custom_photo")[0].focus();
        $('<span class="custom_photo_error_txt lt_error_text">Please upload a valid image (JPEG, JPG or PNG only).</span>').insertAfter($(".image_input"));
        $(".add-to-cart-button").removeAttr("disabled");
        $(".add-to-cart-button .custom_spinner").css("display", "none");
        return false;
    }
    if (file.size > maxSize) {
        $("#custom_photo")[0].focus();
      $('<span class="custom_photo_error_txt lt_error_text">Image size must be less than 1 MB.</span>').insertAfter($(".image_input"));
        $(".add-to-cart-button").removeAttr("disabled");
        $(".add-to-cart-button .custom_spinner").css("display", "none");
        return false;
    }
  image_upload=true;
}
else if(Image_upload_mandatory){
$(".custom_photo_error_txt").remove();
        $("#custom_photo")[0].focus();
        $('<span class="custom_photo_error_txt lt_error_text">Please upload a image (JPEG, JPG or PNG only).</span>').insertAfter($(".image_input"));
  $(".add-to-cart-button").removeAttr("disabled");
        $(".add-to-cart-button .custom_spinner").css("display", "none");
  return false;
}

        var pincode_val = $("#pincode_input").val();
       var delivery_date_val = $("#delivery-date-5").val();
        var product_warehouse = $("#product_warehouse").val();
        var product_warehouse_available_quantity = $("#product_warehouse_available_quantity").val();
        var product_warehouse_tat = $("#product_warehouse_tat").val();
        var total_product_tat = $("#total_product_tat").val();
        var time_slot = $('#time-slot').val();
    
        var pd_json_property_val = {};
        
     
        if (pincode_val == "") {
           pushPincodeEnteredEvent(0,'Please fill Pincode value! it is required');
           $('.pincode_txt').html("<span class='red_txt'>Please fill Pincode value! it is required. </span>").removeClass('valid').addClass('invalid');
            // $(".lt_error_text").text("Please fill Pincode value! it is required. ");
          $("#pincode_input").focus();
            $(".add-to-cart-button").removeAttr("disabled");
            $(".add-to-cart-button .custom_spinner").css("display", "none");
          // scroll to pincode input field if empty
          // document.getElementById('pincode_input').scrollIntoView(); 
            return false;
        } else if (pincode_val.length != 6) {
          //velocity: 06-0-2024 Added this condition to handle the case when user will enter pincode less then 6 digit.
           pushPincodeEnteredEvent(0,'Enter a Valid Pincode');
            $('.pincode_txt').html("<span class='red_txt'>Enter a Valid Pincode</span>").removeClass('valid').addClass('invalid');
            $(".add-to-cart-button").removeAttr("disabled");
            $(".add-to-cart-button .custom_spinner").css("display", "none");
          $("#pincode_input").focus();
            
            $(".add-to-cart-button, #add-to-cart-button_1, .shopify-payment-button__button").addClass('pincode_error').prop('disabled', true);
            $('.pincode_btn button').attr('disabled', true);
          
          // scroll to pincode input field if empty
          // document.getElementById('pincode_input').scrollIntoView(); 
            return false;
        }
        pd_json_property_val["Pincode"] = pincode_val;
        pd_json_property_val["_product_warehouse_tat"] = product_warehouse_tat;
        pd_json_property_val["_product_tat"] = total_product_tat;
        pd_json_property_val["Delivery Time Slot"] = time_slot;
        pd_json_property_val["_product_warehouse"] = product_warehouse;
        pd_json_property_val["_product_warehouse_available_quantity"] = product_warehouse_available_quantity;
      
      
        if (delivery_date_val == "") {
            $(".lt_error_text").text("Please Choose Delivery date value! it is required. ");
          $("#delivery-date-5").focus();
          
            $(".add-to-cart-button").removeAttr("disabled");
            $(".add-to-cart-button .custom_spinner").css("display", "none");
            return false;
        }
        pd_json_property_val["Delivery date"] = delivery_date_val;

        if ($("#balloon-customisation-txt").length == 1) {
            var ballon_customisation_val = $("#balloon-customisation-txt").val();
            if (ballon_customisation_val == "") {
              
                $(".lt_error_text").text("Please Add Ballon customization value! it is required. ");
                $(".add-to-cart-button").removeAttr("disabled");
                $(".add-to-cart-button .custom_spinner").css("display", "none");
          $("#balloon-customisation-txt").focus();
              
                return false;
            }
            pd_json_property_val["Balloon customization text"] = ballon_customisation_val;
        }
        if ($("#cake-message").length == 1) {
            var cake_message_val = $("#cake-message").val();
            if (cake_message_val == "") {
                $(".lt_error_text").text("Please Enter cake customization value! it is required. ");
                $("#cake-message").focus();
              
                $(".add-to-cart-button").removeAttr("disabled");
                $(".add-to-cart-button .custom_spinner").css("display", "none");
                return false;
            }
            pd_json_property_val["Message on cake"] = cake_message_val;
        }
      if ($("#cake-message-new").length == 1) {
            var cake_message_new_val = $("#cake-message-new").val();
            // if (cake_message_new_val == "") {
            //     $(".lt_error_text").text("Please Enter cake customization value! it is required. ");
            //     $(".add-to-cart-button").removeAttr("disabled");
            //     $(".add-to-cart-button .custom_spinner").css("display", "none");
            //     return false;
            // }
            pd_json_property_val["Message"] = cake_message_new_val;
        }
      if ($("#gift_carnation-message").length == 1) {
            var gift_carnation_message_val = $("#gift_carnation-message").val();
            if (gift_carnation_message_val == "") {
                $(".lt_error_text").text("Please Enter gift customization value! it is required. ");
                        $("#gift_carnation-message").focus();
                $(".add-to-cart-button").removeAttr("disabled");
                $(".add-to-cart-button .custom_spinner").css("display", "none");
                return false;
            }
            pd_json_property_val["Message on Card"] = gift_carnation_message_val;
        }
      if ($("#giftees-name").length == 1) {
            var giftees_name_val = $("#giftees-name").val();
            if (giftees_name_val == "") {
                $(".lt_error_text").text("Please Enter Giftees name! it is required. ");
                        $("#giftees-name").focus();
                $(".add-to-cart-button").removeAttr("disabled");
                $(".add-to-cart-button .custom_spinner").css("display", "none");
                return false;
            }
            pd_json_property_val["Enter Giftees Name"] = giftees_name_val;
        }
      if ($("#giftees-email").length == 1) {
            var giftees_email_val = $("#giftees-email").val();
            if (giftees_email_val == "") {
                $(".lt_error_text").text("Please Enter Giftees email! it is required. ");
                        $("#giftees-email").focus();
                $(".add-to-cart-button").removeAttr("disabled");
                $(".add-to-cart-button .custom_spinner").css("display", "none");
                return false;
            }
            pd_json_property_val["Enter Giftees Email"] =  giftees_email_val;
        }
      if ($("#giftees-number").length == 1) {
            var giftees_number_val = $("#giftees-number").val();
            if (giftees_number_val == "") {
                $(".lt_error_text").text("Please Enter Giftees number! it is required. ");
                $("#giftees-number").focus();
                $(".add-to-cart-button").removeAttr("disabled");
                $(".add-to-cart-button .custom_spinner").css("display", "none");
                return false;
            }
            pd_json_property_val["Enter Giftees Number"] = giftees_number_val;
        }
        if ($("#customisation-digit").length == 1) {
            var customisation_digit_val = $("#customisation-digit").val();
            if (customisation_digit_val == "") {
                $(".lt_error_text").text("Please Enter Customization Digit Value! it is required.");
                $("#customisation-digit").focus();
                $(".add-to-cart-button").removeAttr("disabled");
                $(".add-to-cart-button .custom_spinner").css("display", "none");
                return false;
            }
            pd_json_property_val["Add Digits"] = customisation_digit_val;
        }
      
      if ($("input[name='color_product_id']").is(':checked')) {
            var customisation_color_val = $("input[name='color_product_id']:checked").val();
        var customisation_sku_val = $("input[name='color_product_id']:checked").data('sku');
            if (customisation_color_val == "") {
                $("input[name='color_product_id']:checked").focus();
                $(".lt_error_text").text("Please Select Box Color! it is required.");
                $(".add-to-cart-button").removeAttr("disabled");
                $(".add-to-cart-button .custom_spinner").css("display", "none");
                return false;
            }
            pd_json_property_val["Box Color"] = customisation_color_val;
            pd_json_property_val["SKU"] = customisation_sku_val;
        }
        if ($("#your-message").length == 1) {
            var your_message_val = $("#your-message").val();
            if (your_message_val == "") {
                $(".lt_error_text").text("Please Add Your Message value! it is required. ");
                $(".add-to-cart-button").removeAttr("disabled");
                $("#your-message").focus();
                $(".add-to-cart-button .custom_spinner").css("display", "none");
                return false;
            }
            pd_json_property_val["Your Message"] = your_message_val;
        }
        if ($("#your-spacial-date").length == 1) {
            var your_spacial_date_val = $("#your-spacial-date").val();
            if (your_spacial_date_val == "") {
                $(".lt_error_text").text("Please Add Your Spacial Date value! it is required. ");
                $(".add-to-cart-button").removeAttr("disabled");
                $("#your-spacial-date").focus();
                $(".add-to-cart-button .custom_spinner").css("display", "none");
                return false;
            }
            pd_json_property_val["Your Special Date"] = your_spacial_date_val;
        }
      if ($("#time").length == 1) {
            var time_val = $("#time").val();
            if (time_val == "") {
                $(".lt_error_text").text("Please Add Time value! it is required. ");
                $(".add-to-cart-button").removeAttr("disabled");
                $(".add-to-cart-button .custom_spinner").css("display", "none");
                $("#time").focus();
                return false;
            }
            pd_json_property_val["Time"] = time_val;
        }
         if ($("#location").length == 1) {
            var location_val = $("#location").val();
            if (location_val == "") {
                $(".lt_error_text").text("Please Add Location value! it is required. ");
                $(".add-to-cart-button").removeAttr("disabled");
                $(".add-to-cart-button .custom_spinner").css("display", "none");
                $("#location").focus();
    
                return false;
            }
            pd_json_property_val["Location"] = location_val;
        }


        function renderCartNotificationProduct(key, url, title, image, variantTitle, price) {
            return `<tr id="CartDrawer-Item-${key}" class="cart-item" role="row">
                        <td class="cart-item__media" role="cell" headers="CartDrawer-ColumnProductImage">

                            <a href="${url}" class="cart-item__link" tabindex="-1" aria-hidden="true"> </a>
                            <img class="cart-item__image"
                              src="${image}"
                              alt="product_img"
                              loading="lazy"
                              width="150"
                              height="150"
                            >
                         
                        </td>

                        <td class="cart-item__details" role="cell" headers="CartDrawer-ColumnProduct">
                          

                          <a href="${url}" class="cart-item__name h4 break">${title}</a>
<div class="price_quantity">
                      
                         
                            <div class="product-option">
                              ${price}
                               <p>${input_text}</p>
                            </div>
                          

                                   <dl>
                              
                                  <div class="product-option">
                                    <dt>: </dt>
                                    <dd>${variantTitle}</dd>
                                  </div>
                                

                              
                                  <div class="product-option">
                                    <dt>${property.first}: </dt>
                                    <dd>
                                    
                                        ${ property.last }
                                     
                                    </dd>
                                  </div>
                               
                            </dl>

                            
                         

                          
</div>
                        </td>

                        <td class="cart-item__totals right " role="cell" headers="CartDrawer-ColumnTotal">
                      
                          
                      
                        </td>

                        <td class="cart-item__quantity" role="cell" headers="CartDrawer-ColumnQuantity">
                      <cart-remove-button id="CartDrawer-Remove-${key}" data-index="${key}">
                              <button type="button" class="button button--tertiary" aria-label="Remove ">
                                Liquid error: This liquid context does not allow includes.
                              </button>
                            </cart-remove-button>
                          <div class="cart-item__quantity-wrapper">
                            <quantity-input class="quantity">
                              <button class="quantity__button no-js-hidden" name="minus" type="button">
                                <span class="visually-hidden">Decrease quantity for </span>
                                Liquid error: This liquid context does not allow includes.
                              </button>
                              <input class="quantity__input"
                                type="number"
                                name="updates[]"
                                value=""
                                min="0"
                                aria-label="Quantity for "
                                id="Drawer-quantity-1"
                                data-index="1"
                              >
                              <button class="quantity__button no-js-hidden" name="plus" type="button">
                                <span class="visually-hidden">Increase quantity for </span>
                                Liquid error: This liquid context does not allow includes.
                              </button>
                            </quantity-input>

                            
                            <div class="loading-overlay hidden">
                            <div class="loading-overlay__spinner">
                              <svg aria-hidden="true" focusable="false" role="presentation" class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                                <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                              </svg>
                            </div>
                          </div>

                          <div class="cart-item__price-wrapper"><span class="price price--end">
                                
                              </span></div>
                          </div>

                          <div id="CartDrawer-LineItemError-${key}" class="cart-item__error" role="alert">
                            <small class="cart-item__error-text"></small>
                            <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-error" viewBox="0 0 13 13">
                              <circle cx="6.5" cy="6.50049" r="5.5" stroke="white" stroke-width="2"/>
                              <circle cx="6.5" cy="6.5" r="5.5" fill="#EB001B" stroke="#EB001B" stroke-width="0.7"/>
                              <path d="M5.87413 3.52832L5.97439 7.57216H7.02713L7.12739 3.52832H5.87413ZM6.50076 9.66091C6.88091 9.66091 7.18169 9.37267 7.18169 9.00504C7.18169 8.63742 6.88091 8.34917 6.50076 8.34917C6.12061 8.34917 5.81982 8.63742 5.81982 9.00504C5.81982 9.37267 6.12061 9.66091 6.50076 9.66091Z" fill="white"/>
                              <path d="M5.87413 3.17832H5.51535L5.52424 3.537L5.6245 7.58083L5.63296 7.92216H5.97439H7.02713H7.36856L7.37702 7.58083L7.47728 3.537L7.48617 3.17832H7.12739H5.87413ZM6.50076 10.0109C7.06121 10.0109 7.5317 9.57872 7.5317 9.00504C7.5317 8.43137 7.06121 7.99918 6.50076 7.99918C5.94031 7.99918 5.46982 8.43137 5.46982 9.00504C5.46982 9.57872 5.94031 10.0109 6.50076 10.0109Z" fill="white" stroke="#EB001B" stroke-width="0.7">
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr>
                      <td class="cart-item__media" role="cell" headers="CartDrawer-ColumnProductImage">

                            <a href="${url}" class="cart-item__link" tabindex="-1" aria-hidden="true"> </a>
                            <img class="cart-item__image"
                              src="${image}"
                              alt="product_img"
                              loading="lazy"
                              width="150"
                              height="150"
                            >
                         
                        </td>
                         <td class="cart-item__details" role="cell" headers="CartDrawer-ColumnProduct">
                          

                          <a href="${url}" class="cart-item__name h4 break">${gift_product_id}</a>
<div class="price_quantity">
                      
                          
                            <div class="product-option">
                              ${price}
                            </div>
                          

                                   <dl>
                              
                                  <div class="product-option">
                                    <dt>Product Title: </dt>
                                    <dd>${product_name}</dd>
                                  </div>
                                

                              
                                  <div class="product-option">
                                    <dt>Message on card: </dt>
                                    <dd>
                                    
                                        ${card_msg}
                                     
                                    </dd>
                                  </div>
                               
                            </dl>

                            
                         

                          
</div>
                        </td>
                      </tr>`
        }

        function renderCartBubble(cartItemCount) {
            return `<div id="shopify-section-cart-icon-bubble" class="shopify-section">
       <svg xmlns="http://www.w3.org/2000/svg" width="18.395" height="17.627" viewBox="0 0 18.395 17.627">\n  <g id="Icon_feather-shopping-cart" data-name="Icon feather-shopping-cart" transform="translate(0.75 0.75)">\n    <path id="Path_3" data-name="Path 3" d="M13.536,30.768A.768.768,0,1,1,12.768,30,.768.768,0,0,1,13.536,30.768Z" transform="translate(-6.624 -15.409)" fill="none" stroke="#1d1d1d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>\n    <path id="Path_4" data-name="Path 4" d="M30.036,30.768A.768.768,0,1,1,29.268,30,.768.768,0,0,1,30.036,30.768Z" transform="translate(-14.677 -15.409)" fill="none" stroke="#1d1d1d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>\n    <path id="Path_5" data-name="Path 5" d="M1.5,1.5H4.572L6.63,11.783a1.536,1.536,0,0,0,1.536,1.236h7.465a1.536,1.536,0,0,0,1.536-1.236L18.4,5.34H5.34" transform="translate(-1.5 -1.5)" fill="none" stroke="#1d1d1d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>\n  </g>\n</svg>\n<span class="visually-hidden">Cart</span>
		<div class="cart-count-bubble"><span aria-hidden="true">${cartItemCount}</span><span class="visually-hidden"> items</span>\n  </div>
    </div>
	`
        }

        function addItemToCart() {

          var timestamp=istTime.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

          // code start by NR
          $(".ans_sec textarea").each(function() {
            var property_Names = $(this).attr("name");
            property_Names = property_Names.match(/\[(.*?)\]/)[1];
            pd_json_property_val[property_Names] = $(this).val();
          });
        
          // code end
          
            if ((gift_product_id == "" || gift_product_id == undefined) && (sleeve_product_id == "" || sleeve_product_id == undefined)) {
                data = {
                    items: [{
                        "id": product_id,
                        "quantity": pd_quantity,
                        "properties": {
                    ...pd_json_property_val,
                    "_Timestamp": timestamp
                }
                    }]
                }
            } else if ((gift_product_id != "" || gift_product_id != undefined) && (sleeve_product_id == "" || sleeve_product_id == undefined)) {
                data = {
                    items: [{
                            "id": gift_product_id,
                            "quantity": pd_quantity,
                            "properties": {
                                "Product title": product_name,
                                "Message on card": card_msg
                            }
                        },
                        {
                            "id": product_id,
                            "quantity": pd_quantity,
                            "properties": {
                    ...pd_json_property_val,
                    "_Timestamp": timestamp
                }
                        }
                    ]

                }
            } else if ((gift_product_id == "" || gift_product_id == undefined) && (sleeve_product_id != "" || sleeve_product_id != undefined)) {
                data = {
                    items: [{
                            "id": sleeve_product_id,
                            "quantity": pd_quantity,
                            "properties": {
                                "Product title": product_name
                            }
                        },
                        {
                            "id": product_id,
                            "quantity": pd_quantity,
                            "properties": {
                    ...pd_json_property_val,
                    "_Timestamp": timestamp
                }
                        }
                    ]

                }
            } else {
                data = {
                    items: [{
                            "id": gift_product_id,
                            "quantity": pd_quantity,
                            "properties": {
                                "Product title": product_name,
                                "Message on card": card_msg
                            }
                        },
                        {
                            "id": sleeve_product_id,
                            "quantity": pd_quantity,
                            "properties": {
                                "Product title": product_name
                            }
                        },
                        {
                            "id": product_id,
                            "quantity": pd_quantity,
                            "properties": {
                    ...pd_json_property_val,
                    "_Timestamp": timestamp
                }
                        }
                    ]

                }
            }

            function getCart(callback) {
                $.ajax({
                    type: 'GET',
                    url: '/cart.js',
                    dataType: 'json',
                    success: function(data) {
                        callback(data)
                    }
                });
            }

            
          
            jQuery.ajax({
                type: 'POST',
                url: '/cart/add.js',
                data: data,
                dataType: 'json',
                success: function() {
                    // window.location.href = '/cart';
                    var items = data.items;
                    if (items.length) {

                        var key = items[0].key
                        var url = items[0].url
                        var image = items[0].image
                        var title = items[0].product_title
                        var variantTitle = items[0].variant_title

//velocity: 04-07-2024 Added the function to push the add_to_cart event to GTM
                      
                        v_productQuantity = items[0].quantity;
                            // Trigger GTM event
                          window.dataLayer = window.dataLayer || [];
                          window.dataLayer.push({
                              'event': 'addToCart',
                              'ecommerce': {
                                  'currencyCode': v_shopCurrency,
                                      'products': [{
                                        'product_id': v_productId,
                                        'product_name': v_productName,
                                        'category': v_productCollection,
                                        'category_id' : v_productCollectionId,
                                        'brand': v_productBrand,
                                        'variant_name': v_productVariantTitle,
                                        'variant_id' : v_productVariantId,
                                        'price': v_productPrice,
                                        'offer_price': v_productOfferPrice,
                                        'discount': v_productDiscount,
                                        'quantity': v_productQuantity
                                      }],
                                   'city': localStorage.getItem("location-city"),
                                  'pincode': localStorage.getItem("userPincode"),
                                  'timestamp' : getTimestamp(),
                                  'device_type' : getDeviveType(),
                                  'registered_mobile_number' : '',
                                  'user_id' : getCustomerId(),
                                  'previous_screen': getPreviousPageUrl()
                              }
                          });
        
                      
                        $("#pincode_input").val("");
                        $("#delivery_date").val("");
                        $("#balloon-customisation-txt").val("");
                        $("#cake-message").val("");
                        $("#customisation-digit").val("");
                       $("#giftees-name").val("");
                       $("#giftees-email").val("");
                       $("#giftees-number").val("");
                        $("#gift_card_msg").val("");


                        $(".add-to-cart-button").removeAttr("disabled");
                        $("#CartDrawer_MainContent>div").load(location.href + " #CartDrawer_MainContent>div", function() {
                            $(".add-to-cart-button .custom_spinner").css("display", "none");
                            //velocity: 17-07-2024 Function to send the event to send the side drawer open event to GTM
                            handleCartDrawer();
                                                // Added code to hide the zohodesk chat support icon on cart drawer open
                          var $zsiqFloat = $('.zsiq-float');
$zsiqFloat.css('display', 'none');
                            $("cart-drawer.drawer").addClass("active");
                            if($('cart-drawer-items').find('[data-cart-prod-bundle-id]').length)
                              setTimeout(function(){location.reload()},900);
                        // Code start by NR
                        setTimeout(function() {
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
// velocity: 01-06-2025 Updated delivery date and time slot when delivery date and time slot expired.        
                          
      validateDeliveryDates();
                          
                        }, 500);
                        // Code end by NR

                        });

                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    $(".add-to-cart-button").removeAttr("disabled");
                    $(".add-to-cart-button .custom_spinner").css("display", "none");
                    $(".lt_error_text").text("Something went wrong!");
                }

            });

        }


          function ImageUpload(){
                
  const formData = new FormData();
  formData.append('file', file); 
  $.ajax({
    type: 'POST',
    url: 'https://tgs.velsof.com/upload_image',
    data: formData,
    dataType: 'json',
    processData: false, // Required for FormData
    contentType: false, // Required for FormData
     headers: {
                    "x-api-key": "339308f5c7eac7cdaffd9646d61109a7"
                },
    success: function(response) {
      if (response.status === true) {
      const uploadedImageURL = response.file_url;
        console.log('Image uploaded:', uploadedImageURL);
        // debugger;
        pd_json_property_val["Image"] = uploadedImageURL;
        
          addItemToCart();
        
      } else {
        console.error('Upload failed:', response.message);
      }
    },
    error: function(xhr, status, error) {
      console.error('AJAX error:', error);
    }
  });
  }

        if (gift_product_id == "" || gift_product_id == undefined) {
      if(image_upload == true){
        ImageUpload();
      }else{
            addItemToCart();
      }
        } else {
            if (card_msg == "") {
                // $('.card_msg_error').text("Please fill this field, it is required !");
                $(".lt_error_text").text("Please fill 'Message on card' field, it is required !");
              $('#gift_card_msg').focus();
                $(".add-to-cart-button").removeAttr("disabled");
                $(".add-to-cart-button .custom_spinner").css("display", "none");
                return false;
            }
            else {
                 if(image_upload == true){
            ImageUpload();
            }else{
            addItemToCart();
            }
            }
        }

    });

});