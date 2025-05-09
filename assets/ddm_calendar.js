var appjetty_ddm_url = "https://oddm.appjetty.com/", status = "1", shop_domain = "tgs-revamp.myshopify.com", required_date_section = "1", time_interval_status = "0", preselected_date_status = "0", ddm_display_at = "cart", prod_config_status = "all_prod", date_format = "d/m/Y", error_msg = "Pick a delivery date", checkout_btn_selector = "checkout", addtocart_btn_selector = "add", ncd_status = "0", timezone = "Asia/Kolkata", ncd_product_page_status = "1", error_msg_color = "#ff0000", process_on_nonworking_days = "0", sunday_order_limit = "0", monday_order_limit = "0", tuesday_order_limit = "0", wednesday_order_limit = "0", thursday_order_limit = "0", friday_order_limit = "0", saturday_order_limit = "0", sunday_limit_checkbox_status = "0", monday_limit_checkbox_status = "0", tuesday_limit_checkbox_status = "0", wednesday_limit_checkbox_status = "0", thursday_limit_checkbox_status = "0", friday_limit_checkbox_status = "0", saturday_limit_checkbox_status = "0", shipping_rate_status = "1", shipping_configuration_status = "1", shipping_bg_color = "#000000", shipping_icon_color = "#ffffff", shipping_hover_bg_color = "#ffffff", shipping_hover_icon_color = "#000000", store_pickup_status = "0",oddm_google_api_key = "",current_lat = "",current_lng = "",pickup_bg_color = "#000000", pickup_icon_color = "#ffffff", pickup_hover_bg_color = "#ffffff", pickup_hover_icon_color = "#000000", local_delivery_status = "1", local_delivery_bg_color = "#000000", local_delivery_icon_color = "#ffffff", local_delivery_hover_bg_color = "#ffffff", local_delivery_hover_icon_color = "#000000", calendar_inline = "", calendar_position = "", slot_before_actual_time_status = "0", hide_slot_before_actual_time = "0", is_store_using_shipping_rate = "1", addDayName = "0";pickup_html = '<div><div class=\"aj-tab-panel active\" id=\"store-pickup\"><h5 class=\"ddm-pickup-title text-center\">Currently no location available for pickup.</h5></div><div class=\"ddm-store-pickup-select\" id=\"store_pickup_sec\"></div><input type=\"hidden\" value=\"\" id=\"location_id\" name=\"attributes[Location Id]\"><input type=\"hidden\" value=\"\" id=\"location_name\" name=\"attributes[Location Name]\"><input type=\"hidden\" value=\"\" id=\"location_address\" name=\"attributes[Location Address]\"></div>', local_delivery_html = '<div class=\"aj-tab-panel active\" id=\"local_delivery_sec\"><h5 class=\"ddm-pickup-title text-center\">Enter a pincode and check you are eligible for local delivery</h5><div class=\"ddm-search-wrapper\"><input type=\"text\" placeholder=\"Enter Pincode\" maxlength=\"10\" id=\"ddm_zipcode\"><div class=\"ddm-search-icon oddm-zipcode-search-icon ddm-config\" data-delivery=\"local_delivery\"> <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"search-icon\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" enable-background=\"new 0 0 32 32\" id=\"Editable-line\" version=\"1.1\" viewBox=\"0 0 32 32\" xml:space=\"preserve\"><circle cx=\"14\" cy=\"14\" fill=\"none\" id=\"XMLID_42_\" r=\"9\" stroke=\"#ffffff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\"/><line fill=\"none\" id=\"XMLID_44_\" stroke=\"#ffffff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\" x1=\"27\" x2=\"20.366\" y1=\"27\" y2=\"20.366\"/></svg></div></div><label class=\"ddm_local_del_error error_msg\" style=\"display:none;\"></label></div>', pickup_note = '<label></lable>', local_delivery_note = '<label></lable>', shipping_note = '<label></lable>', local_del_error_msg = 'Delivery to this product is not available in your area!', dds_calendar = '<div class=\"appjetty-ddm-cart-box\"><div class=\"oddm-tabs-wrapper\"><div class=\"tab-menu-wrapper\"><ul><li class=\"oddm_delivery_method\"block id=\"shipping_tab\" data-delivery-type=\"shipping\" data-display=\"block\" style=\"display:block;\"><input type=\"radio\" id=\"shipping_icon_1\" class=\"input-radio-box delivery-type\" name=\"shipping_icon\" value=\"shipping\"><label for=\"shipping_icon_1\" class=\"aj-input-label-check delivery-type delivery-lable\" style=\"background-color:#000000;\"><svg id=\"icon_5\" data-name=\"icon 5\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 42 32.2\"><g id=\"a\"/><g id=\"b\"><g id=\"c\"><g id=\"d\"><path d=\"M41.79,17.71l-8.69-8.69c-.39-.4-.93-.62-1.49-.62h-12.02v1.4h3.5v10.5h1.4V9.8h7.12c.19,0,.36,.07,.5,.21l1.19,1.19h-3.21c-.77,0-1.4,.63-1.4,1.4v6.3c0,.77,.63,1.4,1.4,1.4h10.5v5.6c0,.39-.31,.7-.7,.7h-1.46c-.38-2.68-2.86-4.53-5.54-4.15-2.15,.31-3.84,2-4.15,4.15h-9.91c-.38-2.68-2.86-4.53-5.54-4.15-2.15,.31-3.84,2-4.15,4.15h-1.46c-.39,0-.7-.31-.7-.7v-6.3h-1.4v6.3c0,1.16,.94,2.1,2.1,2.1h1.46c.15,1.06,.65,2.05,1.42,2.8H0v1.4H33.6c2.43,0,4.49-1.79,4.84-4.2h1.46c1.16,0,2.1-.94,2.1-2.1v-7.7c0-.19-.07-.36-.21-.49ZM10.5,27.3c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5-1.57,3.5-3.5,3.5c-1.93,0-3.5-1.57-3.5-3.5Zm6.92,3.5c.77-.75,1.27-1.74,1.42-2.8h9.91c.15,1.06,.65,2.05,1.42,2.8h-12.76Zm16.18,0c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5,3.5,1.57,3.5,3.5c0,1.93-1.57,3.5-3.5,3.5Zm-3.5-11.9v-6.3h4.61l5.89,5.89v.41h-10.5Z\"/><rect x=\"13.3\" y=\"26.6\" width=\"1.4\" height=\"1.4\"/><rect x=\"32.9\" y=\"26.6\" width=\"1.4\" height=\"1.4\"/><rect y=\"24.5\" width=\"3.5\" height=\"1.4\"/><rect x=\"1.4\" y=\"21.7\" width=\"2.1\" height=\"1.4\"/><rect x=\"2.1\" y=\"18.9\" width=\"1.4\" height=\"1.4\"/><path d=\"M9.1,18.2c5.03,0,9.1-4.07,9.1-9.1S14.13,0,9.1,0,0,4.07,0,9.1c0,5.02,4.08,9.09,9.1,9.1ZM9.1,1.4c4.25,0,7.7,3.45,7.7,7.7s-3.45,7.7-7.7,7.7S1.4,13.35,1.4,9.1c0-4.25,3.45-7.69,7.7-7.7Z\"/><path d=\"M9.1,15.4c.19,0,.36-.07,.49-.21,.45-.45,4.41-4.49,4.41-7.49,0-2.71-2.19-4.9-4.9-4.9s-4.9,2.19-4.9,4.9c0,3,3.95,7.04,4.41,7.49,.13,.13,.31,.21,.49,.21Zm0-11.2c1.93,0,3.5,1.57,3.5,3.5,0,1.8-2.2,4.57-3.5,5.99-1.3-1.41-3.5-4.19-3.5-5.99,0-1.93,1.57-3.5,3.5-3.5Z\"/><path d=\"M11.2,7.7c0-1.16-.94-2.1-2.1-2.1s-2.1,.94-2.1,2.1,.94,2.1,2.1,2.1,2.1-.94,2.1-2.1Zm-2.8,0c0-.39,.31-.7,.7-.7s.7,.31,.7,.7-.31,.7-.7,.7-.7-.31-.7-.7Z\"/><rect x=\"26.6\" y=\"21.7\" width=\"2.8\" height=\"1.4\"/></g></g></g></svg><span class=\"ddm-tab-title\" id=\"shipping_text\" style=\"color:#ffffff;word-break: break-all;\">Shipping</span></a></li><li class=\"oddm_delivery_method\" id=\"ld_tab\" data-delivery-type=\"local_delivery\"><input type=\"radio\" id=\"ld_icon_3\" class=\"input-radio-box delivery-type\" name=\"shipping_icon\" value=\"local_delivery\"><label for=\"ld_icon_3\" class=\"aj-input-label-check delivery-type delivery-lable\" style=\"background-color:#000000;\"><svg id=\"icon_2\" data-name=\"icon 2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 42 26.57\"><g id=\"a\"/><g id=\"b\"><g id=\"c\"><path d=\"M39.06,11.26l-1.09-4.35c.3-.06,.52-.33,.52-.64v-.7c0-1.52-1.24-2.76-2.76-2.76h-4.95V1.36c0-.75-.61-1.36-1.36-1.36H4.16c-.75,0-1.36,.61-1.36,1.36V13.28c0,.36,.29,.66,.66,.66s.66-.29,.66-.66V1.36s.02-.04,.04-.04H29.42s.04,.02,.04,.04V13.28c0,.36,.29,.66,.66,.66s.66-.29,.66-.66v-.75h7.76c.95,0,1.77,.63,2.04,1.49h-2.04c-.36,0-.66,.29-.66,.66v1.4c0,1.14,.92,2.06,2.06,2.06h.75v2.89h-1.72c-.56-1.63-2.12-2.81-3.94-2.81s-3.37,1.17-3.94,2.81h-.32v-4.95c0-.36-.29-.66-.66-.66s-.66,.29-.66,.66v4.95H15.82c-.56-1.63-2.12-2.81-3.94-2.81s-3.37,1.17-3.94,2.81h-3.78s-.04-.02-.04-.04v-1.45h2.85c.36,0,.66-.29,.66-.66s-.29-.66-.66-.66H.66c-.36,0-.66,.29-.66,.66s.29,.66,.66,.66H2.81v1.45c0,.75,.61,1.36,1.36,1.36h3.55v.04c0,2.3,1.87,4.16,4.16,4.16s4.16-1.87,4.16-4.16v-.04h14.82v.04c0,2.3,1.87,4.16,4.16,4.16s4.16-1.87,4.16-4.16v-.04h2.15c.36,0,.66-.29,.66-.66v-7.01c0-1.73-1.28-3.17-2.94-3.42Zm-8.28-7.14h4.95c.8,0,1.45,.65,1.45,1.45v.04h-6.4v-1.49Zm0,7.1V6.93h5.84l1.07,4.3h-6.92ZM11.88,25.25c-1.57,0-2.85-1.28-2.85-2.85s1.28-2.85,2.85-2.85,2.85,1.28,2.85,2.85-1.28,2.85-2.85,2.85Zm23.15,0c-1.57,0-2.85-1.28-2.85-2.85s1.28-2.85,2.85-2.85,2.85,1.28,2.85,2.85-1.28,2.85-2.85,2.85Zm5.66-8.42h-.75c-.41,0-.75-.33-.75-.75v-.75h1.49v1.49h0Z\"/><path d=\"M11.88,21.04c-.75,0-1.36,.61-1.36,1.36s.61,1.36,1.36,1.36,1.36-.61,1.36-1.36c0-.75-.61-1.36-1.36-1.36Z\"/><path d=\"M35.03,21.04c-.75,0-1.36,.61-1.36,1.36s.61,1.36,1.36,1.36,1.36-.61,1.36-1.36-.61-1.36-1.36-1.36Z\"/><path d=\"M27.31,18.24h-9.82c-.36,0-.66,.29-.66,.66s.29,.66,.66,.66h9.82c.36,0,.66-.29,.66-.66s-.29-.66-.66-.66Z\"/><path d=\"M10.48,15.43H2.06c-.36,0-.66,.29-.66,.66s.29,.66,.66,.66H10.48c.36,0,.66-.29,.66-.66s-.29-.66-.66-.66Z\"/><path d=\"M22.87,6.51c-.26-.26-.67-.26-.93,0l-5.85,5.85-3.04-3.04c-.26-.26-.67-.26-.93,0-.26,.26-.26,.67,0,.93l3.51,3.51c.13,.13,.3,.19,.46,.19s.34-.06,.46-.19l6.31-6.31c.26-.26,.26-.67,0-.93Z\"/></g></g></svg><span id=\"ld_text\" class=\"ddm-tab-title\" style=\"color:#ffffff;word-break: break-all;\">Local Delivery</span></a></li></ul></div><div class=\"aj-tabs-content delivery-container\"></div></div><div class=\"cart-container\"><div class=\"cart_datepicker\"><div class=\"ddm_select_box date-picker-wrap\"><label class=\"lable_dds-date-wrapper label-right\"><span class=\"dds-label-text\">Select date</span></label><input type=\"text\" id=\"dds_calendar\" placeholder=\"Please select date\" name=\"attributes[Delivery Date]\"></div></div><div class=\"dds-comment-box\"><label>Add Your Comment</label><textarea rows=\"4\" cols=\"45\" name=\"attributes[Additional Comments]\" id=\"dds_calendar_notes\" class=\"dds-calendar-notes\" ></textarea></div><div class=\"dds-notes\"><label></lable></div></div><div class=\"ddm-loader\"><ul class=\"o-vertical-spacing\"><li class=\"blog-post o-media\"><div class=\"o-media__body\"><div class=\"o-vertical-spacing\"><p><span class=\"skeleton-box\"></span><span class=\"skeleton-box\"></span><span class=\"skeleton-box\"></span><span class=\"skeleton-box\"></span></p></div></div></li></ul></div>',closedDays = [],days_text = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],month_text = ["January"," February"," March"," April"," May"," June"," July"," August"," September"," October"," November"," December"],sunday_slot = '', monday_slot = '', tuesday_slot = '', wednesday_slot = '', thursday_slot = '', friday_slot = '', saturday_slot = '',active_preparation_time = '0',set_preparation_time = '0', hour_wise_time = '0'; slot_limt_value = ["","","","","","",""], time_format = '12', hide_time_slot_based_on = 'start_time', processing_period = '0', first_day_of_calendar = '1', max_delivery_period = '0',day_wise_processing_period = "0", weekly_process_time = [0,-1,5,4,3,2,1], prod_tooltip_content = '<div style=\"display: flex;\"><label>No-contact delivery available</label></div>',blacklist_date_array = ["null"],blackout_days_array = ["null"], cart_tooltip_content = '<div class=\"ondisplay ddm_cart_nocontact_delivery\" style=\"padding: 15px 0px 10px 0px;\"><input type=\"checkbox\" value=\"Yes\" id=\"slideThree\" name=\"attributes[No-contact Delivery]\" /><label>No-contact delivery</label></div>';active_preparation_time = '0',set_preparation_time = '0', hour_wise_time = '0';console.log('oddm app call...',status);
if(typeof oddm_existance != 'undefined'){
 function addGoogleMapJs(){
 var headTag = document.getElementsByTagName("head")[0];
 var oddmJqTag1 = document.createElement('script');
 oddmJqTag1.type = 'text/javascript';
 oddmJqTag1.src = 'https://maps.googleapis.com/maps/api/js?key='+oddm_google_api_key+'&callback=initMap&v=weekly';
 headTag.appendChild(oddmJqTag1);
 var oddmJqTag2 = document.createElement('script');
 oddmJqTag2.type = 'text/javascript';
 oddmJqTag2.src = 'https://polyfill.io/v3/polyfill.min.js?features=default';
 headTag.appendChild(oddmJqTag2);
 }
 !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).flatpickr=t()}(this,(function(){"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function t(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],r=0,l=o.length;r<l;r++,i++)a[i]=o[r];return a}var n=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],a={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:"object"==typeof window&&-1===window.navigator.userAgent.indexOf("MSIE"),ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(e){return"undefined"!=typeof console&&console.warn(e)},getWeek:function(e){var t=new Date(e.getTime());t.setHours(0,0,0,0),t.setDate(t.getDate()+3-(t.getDay()+6)%7);var n=new Date(t.getFullYear(),0,4);return 1+Math.round(((t.getTime()-n.getTime())/864e5-3+(n.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},i={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(e){var t=e%100;if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},o=function(e,t){return void 0===t&&(t=2),("000"+e).slice(-1*t)},r=function(e){return!0===e?1:0};function l(e,t){var n;return function(){var a=this;clearTimeout(n),n=setTimeout((function(){return e.apply(a,arguments)}),t)}}var c=function(e){return e instanceof Array?e:[e]};function d(e,t,n){if(!0===n)return e.classList.add(t);e.classList.remove(t)}function s(e,t,n){var a=window.document.createElement(e);return t=t||"",n=n||"",a.className=t,void 0!==n&&(a.textContent=n),a}function u(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function f(e,t){return t(e)?e:e.parentNode?f(e.parentNode,t):void 0}function m(e,t){var n=s("div","numInputWrapper"),a=s("input","numInput "+e),i=s("span","arrowUp"),o=s("span","arrowDown");if(-1===navigator.userAgent.indexOf("MSIE 9.0")?a.type="number":(a.type="text",a.pattern="\\d*"),void 0!==t)for(var r in t)a.setAttribute(r,t[r]);return n.appendChild(a),n.appendChild(i),n.appendChild(o),n}function g(e){try{return"function"==typeof e.composedPath?e.composedPath()[0]:e.target}catch(t){return e.target}}var p=function(){},h=function(e,t,n){return n.months[t?"shorthand":"longhand"][e]},v={D:p,F:function(e,t,n){e.setMonth(n.months.longhand.indexOf(t))},G:function(e,t){e.setHours(parseFloat(t))},H:function(e,t){e.setHours(parseFloat(t))},J:function(e,t){e.setDate(parseFloat(t))},K:function(e,t,n){e.setHours(e.getHours()%12+12*r(new RegExp(n.amPM[1],"i").test(t)))},M:function(e,t,n){e.setMonth(n.months.shorthand.indexOf(t))},S:function(e,t){e.setSeconds(parseFloat(t))},U:function(e,t){return new Date(1e3*parseFloat(t))},W:function(e,t,n){var a=parseInt(t),i=new Date(e.getFullYear(),0,2+7*(a-1),0,0,0,0);return i.setDate(i.getDate()-i.getDay()+n.firstDayOfWeek),i},Y:function(e,t){e.setFullYear(parseFloat(t))},Z:function(e,t){return new Date(t)},d:function(e,t){e.setDate(parseFloat(t))},h:function(e,t){e.setHours(parseFloat(t))},i:function(e,t){e.setMinutes(parseFloat(t))},j:function(e,t){e.setDate(parseFloat(t))},l:p,m:function(e,t){e.setMonth(parseFloat(t)-1)},n:function(e,t){e.setMonth(parseFloat(t)-1)},s:function(e,t){e.setSeconds(parseFloat(t))},u:function(e,t){return new Date(parseFloat(t))},w:p,y:function(e,t){e.setFullYear(2e3+parseFloat(t))}},D={D:"(\\w+)",F:"(\\w+)",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"(\\w+)",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"(\\w+)",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},w={Z:function(e){return e.toISOString()},D:function(e,t,n){return t.weekdays.shorthand[w.w(e,t,n)]},F:function(e,t,n){return h(w.n(e,t,n)-1,!1,t)},G:function(e,t,n){return o(w.h(e,t,n))},H:function(e){return o(e.getHours())},J:function(e,t){return void 0!==t.ordinal?e.getDate()+t.ordinal(e.getDate()):e.getDate()},K:function(e,t){return t.amPM[r(e.getHours()>11)]},M:function(e,t){return h(e.getMonth(),!0,t)},S:function(e){return o(e.getSeconds())},U:function(e){return e.getTime()/1e3},W:function(e,t,n){return n.getWeek(e)},Y:function(e){return o(e.getFullYear(),4)},d:function(e){return o(e.getDate())},h:function(e){return e.getHours()%12?e.getHours()%12:12},i:function(e){return o(e.getMinutes())},j:function(e){return e.getDate()},l:function(e,t){return t.weekdays.longhand[e.getDay()]},m:function(e){return o(e.getMonth()+1)},n:function(e){return e.getMonth()+1},s:function(e){return e.getSeconds()},u:function(e){return e.getTime()},w:function(e){return e.getDay()},y:function(e){return String(e.getFullYear()).substring(2)}},b=function(e){var t=e.config,n=void 0===t?a:t,o=e.l10n,r=void 0===o?i:o,l=e.isMobile,c=void 0!==l&&l;return function(e,t,a){var i=a||r;return void 0===n.formatDate||c?t.split("").map((function(t,a,o){return w[t]&&"\\"!==o[a-1]?w[t](e,i,n):"\\"!==t?t:""})).join(""):n.formatDate(e,t,i)}},C=function(e){var t=e.config,n=void 0===t?a:t,o=e.l10n,r=void 0===o?i:o;return function(e,t,i,o){if(0===e||e){var l,c=o||r,d=e;if(e instanceof Date)l=new Date(e.getTime());else if("string"!=typeof e&&void 0!==e.toFixed)l=new Date(e);else if("string"==typeof e){var s=t||(n||a).dateFormat,u=String(e).trim();if("today"===u)l=new Date,i=!0;else if(/Z$/.test(u)||/GMT$/.test(u))l=new Date(e);else if(n&&n.parseDate)l=n.parseDate(e,s);else{l=n&&n.noCalendar?new Date((new Date).setHours(0,0,0,0)):new Date((new Date).getFullYear(),0,1,0,0,0,0);for(var f=void 0,m=[],g=0,p=0,h="";g<s.length;g++){var w=s[g],b="\\"===w,C="\\"===s[g-1]||b;if(D[w]&&!C){h+=D[w];var M=new RegExp(h).exec(e);M&&(f=!0)&&m["Y"!==w?"push":"unshift"]({fn:v[w],val:M[++p]})}else b||(h+=".");m.forEach((function(e){var t=e.fn,n=e.val;return l=t(l,n,c)||l}))}l=f?l:void 0}}if(l instanceof Date&&!isNaN(l.getTime()))return!0===i&&l.setHours(0,0,0,0),l;n.errorHandler(new Error("Invalid date provided: "+d))}}};function M(e,t,n){return void 0===n&&(n=!0),!1!==n?new Date(e.getTime()).setHours(0,0,0,0)-new Date(t.getTime()).setHours(0,0,0,0):e.getTime()-t.getTime()}var y=864e5;function x(e){var t=e.defaultHour,n=e.defaultMinute,a=e.defaultSeconds;if(void 0!==e.minDate){var i=e.minDate.getHours(),o=e.minDate.getMinutes(),r=e.minDate.getSeconds();t<i&&(t=i),t===i&&n<o&&(n=o),t===i&&n===o&&a<r&&(a=e.minDate.getSeconds())}if(void 0!==e.maxDate){var l=e.maxDate.getHours(),c=e.maxDate.getMinutes();(t=Math.min(t,l))===l&&(n=Math.min(c,n)),t===l&&n===c&&(a=e.maxDate.getSeconds())}return{hours:t,minutes:n,seconds:a}}"function"!=typeof Object.assign&&(Object.assign=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(!e)throw TypeError("Cannot convert undefined or null to object");for(var a=function(t){t&&Object.keys(t).forEach((function(n){return e[n]=t[n]}))},i=0,o=t;i<o.length;i++){var r=o[i];a(r)}return e});function E(p,v){var w={config:e(e({},a),T.defaultConfig),l10n:i};function E(e){return e.bind(w)}function k(){var e=w.config;!1===e.weekNumbers&&1===e.showMonths||!0!==e.noCalendar&&window.requestAnimationFrame((function(){if(void 0!==w.calendarContainer&&(w.calendarContainer.style.visibility="hidden",w.calendarContainer.style.display="block"),void 0!==w.daysContainer){var t=(w.days.offsetWidth+1)*e.showMonths;w.daysContainer.style.width=t+"px",w.calendarContainer.style.width=t+(void 0!==w.weekWrapper?w.weekWrapper.offsetWidth:0)+"px",w.calendarContainer.style.removeProperty("visibility"),w.calendarContainer.style.removeProperty("display")}}))}function I(e){if(0===w.selectedDates.length){var t=void 0===w.config.minDate||M(new Date,w.config.minDate)>=0?new Date:new Date(w.config.minDate.getTime()),n=x(w.config);t.setHours(n.hours,n.minutes,n.seconds,t.getMilliseconds()),w.selectedDates=[t],w.latestSelectedDateObj=t}void 0!==e&&"blur"!==e.type&&function(e){e.preventDefault();var t="keydown"===e.type,n=g(e),a=n;void 0!==w.amPM&&n===w.amPM&&(w.amPM.textContent=w.l10n.amPM[r(w.amPM.textContent===w.l10n.amPM[0])]);var i=parseFloat(a.getAttribute("min")),l=parseFloat(a.getAttribute("max")),c=parseFloat(a.getAttribute("step")),d=parseInt(a.value,10),s=e.delta||(t?38===e.which?1:-1:0),u=d+c*s;if(void 0!==a.value&&2===a.value.length){var f=a===w.hourElement,m=a===w.minuteElement;u<i?(u=l+u+r(!f)+(r(f)&&r(!w.amPM)),m&&j(void 0,-1,w.hourElement)):u>l&&(u=a===w.hourElement?u-l-r(!w.amPM):i,m&&j(void 0,1,w.hourElement)),w.amPM&&f&&(1===c?u+d===23:Math.abs(u-d)>c)&&(w.amPM.textContent=w.l10n.amPM[r(w.amPM.textContent===w.l10n.amPM[0])]),a.value=o(u)}}(e);var a=w._input.value;S(),be(),w._input.value!==a&&w._debouncedChange()}function S(){if(void 0!==w.hourElement&&void 0!==w.minuteElement){var e,t,n=(parseInt(w.hourElement.value.slice(-2),10)||0)%24,a=(parseInt(w.minuteElement.value,10)||0)%60,i=void 0!==w.secondElement?(parseInt(w.secondElement.value,10)||0)%60:0;void 0!==w.amPM&&(e=n,t=w.amPM.textContent,n=e%12+12*r(t===w.l10n.amPM[1]));var o=void 0!==w.config.minTime||w.config.minDate&&w.minDateHasTime&&w.latestSelectedDateObj&&0===M(w.latestSelectedDateObj,w.config.minDate,!0);if(void 0!==w.config.maxTime||w.config.maxDate&&w.maxDateHasTime&&w.latestSelectedDateObj&&0===M(w.latestSelectedDateObj,w.config.maxDate,!0)){var l=void 0!==w.config.maxTime?w.config.maxTime:w.config.maxDate;(n=Math.min(n,l.getHours()))===l.getHours()&&(a=Math.min(a,l.getMinutes())),a===l.getMinutes()&&(i=Math.min(i,l.getSeconds()))}if(o){var c=void 0!==w.config.minTime?w.config.minTime:w.config.minDate;(n=Math.max(n,c.getHours()))===c.getHours()&&a<c.getMinutes()&&(a=c.getMinutes()),a===c.getMinutes()&&(i=Math.max(i,c.getSeconds()))}O(n,a,i)}}function _(e){var t=e||w.latestSelectedDateObj;t&&O(t.getHours(),t.getMinutes(),t.getSeconds())}function O(e,t,n){void 0!==w.latestSelectedDateObj&&w.latestSelectedDateObj.setHours(e%24,t,n||0,0),w.hourElement&&w.minuteElement&&!w.isMobile&&(w.hourElement.value=o(w.config.time_24hr?e:(12+e)%12+12*r(e%12==0)),w.minuteElement.value=o(t),void 0!==w.amPM&&(w.amPM.textContent=w.l10n.amPM[r(e>=12)]),void 0!==w.secondElement&&(w.secondElement.value=o(n)))}function F(e){var t=g(e),n=parseInt(t.value)+(e.delta||0);(n/1e3>1||"Enter"===e.key&&!/[^\d]/.test(n.toString()))&&Q(n)}function A(e,t,n,a){return t instanceof Array?t.forEach((function(t){return A(e,t,n,a)})):e instanceof Array?e.forEach((function(e){return A(e,t,n,a)})):(e.addEventListener(t,n,a),void w._handlers.push({remove:function(){return e.removeEventListener(t,n)}}))}function N(){pe("onChange")}function P(e,t){var n=void 0!==e?w.parseDate(e):w.latestSelectedDateObj||(w.config.minDate&&w.config.minDate>w.now?w.config.minDate:w.config.maxDate&&w.config.maxDate<w.now?w.config.maxDate:w.now),a=w.currentYear,i=w.currentMonth;try{void 0!==n&&(w.currentYear=n.getFullYear(),w.currentMonth=n.getMonth())}catch(e){e.message="Invalid date supplied: "+n,w.config.errorHandler(e)}t&&w.currentYear!==a&&(pe("onYearChange"),K()),!t||w.currentYear===a&&w.currentMonth===i||pe("onMonthChange"),w.redraw()}function Y(e){var t=g(e);~t.className.indexOf("arrow")&&j(e,t.classList.contains("arrowUp")?1:-1)}function j(e,t,n){var a=e&&g(e),i=n||a&&a.parentNode&&a.parentNode.firstChild,o=he("increment");o.delta=t,i&&i.dispatchEvent(o)}function H(e,t,n,a){var i=X(t,!0),o=s("span","flatpickr-day "+e,t.getDate().toString());return o.dateObj=t,o.$i=a,o.setAttribute("aria-label",w.formatDate(t,w.config.ariaDateFormat)),-1===e.indexOf("hidden")&&0===M(t,w.now)&&(w.todayDateElem=o,o.classList.add("today"),o.setAttribute("aria-current","date")),i?(o.tabIndex=-1,ve(t)&&(o.classList.add("selected"),w.selectedDateElem=o,"range"===w.config.mode&&(d(o,"startRange",w.selectedDates[0]&&0===M(t,w.selectedDates[0],!0)),d(o,"endRange",w.selectedDates[1]&&0===M(t,w.selectedDates[1],!0)),"nextMonthDay"===e&&o.classList.add("inRange")))):o.classList.add("flatpickr-disabled"),"range"===w.config.mode&&function(e){return!("range"!==w.config.mode||w.selectedDates.length<2)&&(M(e,w.selectedDates[0])>=0&&M(e,w.selectedDates[1])<=0)}(t)&&!ve(t)&&o.classList.add("inRange"),w.weekNumbers&&1===w.config.showMonths&&"prevMonthDay"!==e&&n%7==1&&w.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+w.config.getWeek(t)+"</span>"),pe("onDayCreate",o),o}function L(e){e.focus(),"range"===w.config.mode&&ae(e)}function W(e){for(var t=e>0?0:w.config.showMonths-1,n=e>0?w.config.showMonths:-1,a=t;a!=n;a+=e)for(var i=w.daysContainer.children[a],o=e>0?0:i.children.length-1,r=e>0?i.children.length:-1,l=o;l!=r;l+=e){var c=i.children[l];if(-1===c.className.indexOf("hidden")&&X(c.dateObj))return c}}function R(e,t){var n=ee(document.activeElement||document.body),a=void 0!==e?e:n?document.activeElement:void 0!==w.selectedDateElem&&ee(w.selectedDateElem)?w.selectedDateElem:void 0!==w.todayDateElem&&ee(w.todayDateElem)?w.todayDateElem:W(t>0?1:-1);void 0===a?w._input.focus():n?function(e,t){for(var n=-1===e.className.indexOf("Month")?e.dateObj.getMonth():w.currentMonth,a=t>0?w.config.showMonths:-1,i=t>0?1:-1,o=n-w.currentMonth;o!=a;o+=i)for(var r=w.daysContainer.children[o],l=n-w.currentMonth===o?e.$i+t:t<0?r.children.length-1:0,c=r.children.length,d=l;d>=0&&d<c&&d!=(t>0?c:-1);d+=i){var s=r.children[d];if(-1===s.className.indexOf("hidden")&&X(s.dateObj)&&Math.abs(e.$i-d)>=Math.abs(t))return L(s)}w.changeMonth(i),R(W(i),0)}(a,t):L(a)}function B(e,t){for(var n=(new Date(e,t,1).getDay()-w.l10n.firstDayOfWeek+7)%7,a=w.utils.getDaysInMonth((t-1+12)%12,e),i=w.utils.getDaysInMonth(t,e),o=window.document.createDocumentFragment(),r=w.config.showMonths>1,l=r?"prevMonthDay hidden":"prevMonthDay",c=r?"nextMonthDay hidden":"nextMonthDay",d=a+1-n,u=0;d<=a;d++,u++)o.appendChild(H(l,new Date(e,t-1,d),d,u));for(d=1;d<=i;d++,u++)o.appendChild(H("",new Date(e,t,d),d,u));for(var f=i+1;f<=42-n&&(1===w.config.showMonths||u%7!=0);f++,u++)o.appendChild(H(c,new Date(e,t+1,f%i),f,u));var m=s("div","dayContainer");return m.appendChild(o),m}function J(){if(void 0!==w.daysContainer){u(w.daysContainer),w.weekNumbers&&u(w.weekNumbers);for(var e=document.createDocumentFragment(),t=0;t<w.config.showMonths;t++){var n=new Date(w.currentYear,w.currentMonth,1);n.setMonth(w.currentMonth+t),e.appendChild(B(n.getFullYear(),n.getMonth()))}w.daysContainer.appendChild(e),w.days=w.daysContainer.firstChild,"range"===w.config.mode&&1===w.selectedDates.length&&ae()}}function K(){if(!(w.config.showMonths>1||"dropdown"!==w.config.monthSelectorType)){var e=function(e){return!(void 0!==w.config.minDate&&w.currentYear===w.config.minDate.getFullYear()&&e<w.config.minDate.getMonth())&&!(void 0!==w.config.maxDate&&w.currentYear===w.config.maxDate.getFullYear()&&e>w.config.maxDate.getMonth())};w.monthsDropdownContainer.tabIndex=-1,w.monthsDropdownContainer.innerHTML="";for(var t=0;t<12;t++)if(e(t)){var n=s("option","flatpickr-monthDropdown-month");n.value=new Date(w.currentYear,t).getMonth().toString(),n.textContent=h(t,w.config.shorthandCurrentMonth,w.l10n),n.tabIndex=-1,w.currentMonth===t&&(n.selected=!0),w.monthsDropdownContainer.appendChild(n)}}}function U(){var e,t=s("div","flatpickr-month"),n=window.document.createDocumentFragment();w.config.showMonths>1||"static"===w.config.monthSelectorType?e=s("span","cur-month"):(w.monthsDropdownContainer=s("select","flatpickr-monthDropdown-months"),w.monthsDropdownContainer.setAttribute("aria-label",w.l10n.monthAriaLabel),A(w.monthsDropdownContainer,"change",(function(e){var t=g(e),n=parseInt(t.value,10);w.changeMonth(n-w.currentMonth),pe("onMonthChange")})),K(),e=w.monthsDropdownContainer);var a=m("cur-year",{tabindex:"-1"}),i=a.getElementsByTagName("input")[0];i.setAttribute("aria-label",w.l10n.yearAriaLabel),w.config.minDate&&i.setAttribute("min",w.config.minDate.getFullYear().toString()),w.config.maxDate&&(i.setAttribute("max",w.config.maxDate.getFullYear().toString()),i.disabled=!!w.config.minDate&&w.config.minDate.getFullYear()===w.config.maxDate.getFullYear());var o=s("div","flatpickr-current-month");return o.appendChild(e),o.appendChild(a),n.appendChild(o),t.appendChild(n),{container:t,yearElement:i,monthElement:e}}function q(){u(w.monthNav),w.monthNav.appendChild(w.prevMonthNav),w.config.showMonths&&(w.yearElements=[],w.monthElements=[]);for(var e=w.config.showMonths;e--;){var t=U();w.yearElements.push(t.yearElement),w.monthElements.push(t.monthElement),w.monthNav.appendChild(t.container)}w.monthNav.appendChild(w.nextMonthNav)}function $(){w.weekdayContainer?u(w.weekdayContainer):w.weekdayContainer=s("div","flatpickr-weekdays");for(var e=w.config.showMonths;e--;){var t=s("div","flatpickr-weekdaycontainer");w.weekdayContainer.appendChild(t)}return z(),w.weekdayContainer}function z(){if(w.weekdayContainer){var e=w.l10n.firstDayOfWeek,n=t(w.l10n.weekdays.shorthand);e>0&&e<n.length&&(n=t(n.splice(e,n.length),n.splice(0,e)));for(var a=w.config.showMonths;a--;)w.weekdayContainer.children[a].innerHTML="\n <span class='flatpickr-weekday'>\n "+n.join("</span><span class='flatpickr-weekday'>")+"\n </span>\n "}}function G(e,t){void 0===t&&(t=!0);var n=t?e:e-w.currentMonth;n<0&&!0===w._hidePrevMonthArrow||n>0&&!0===w._hideNextMonthArrow||(w.currentMonth+=n,(w.currentMonth<0||w.currentMonth>11)&&(w.currentYear+=w.currentMonth>11?1:-1,w.currentMonth=(w.currentMonth+12)%12,pe("onYearChange"),K()),J(),pe("onMonthChange"),De())}function V(e){return!(!w.config.appendTo||!w.config.appendTo.contains(e))||w.calendarContainer.contains(e)}function Z(e){if(w.isOpen&&!w.config.inline){var t=g(e),n=V(t),a=t===w.input||t===w.altInput||w.element.contains(t)||e.path&&e.path.indexOf&&(~e.path.indexOf(w.input)||~e.path.indexOf(w.altInput)),i="blur"===e.type?a&&e.relatedTarget&&!V(e.relatedTarget):!a&&!n&&!V(e.relatedTarget),o=!w.config.ignoredFocusElements.some((function(e){return e.contains(t)}));i&&o&&(void 0!==w.timeContainer&&void 0!==w.minuteElement&&void 0!==w.hourElement&&""!==w.input.value&&void 0!==w.input.value&&I(),w.close(),w.config&&"range"===w.config.mode&&1===w.selectedDates.length&&(w.clear(!1),w.redraw()))}}function Q(e){if(!(!e||w.config.minDate&&e<w.config.minDate.getFullYear()||w.config.maxDate&&e>w.config.maxDate.getFullYear())){var t=e,n=w.currentYear!==t;w.currentYear=t||w.currentYear,w.config.maxDate&&w.currentYear===w.config.maxDate.getFullYear()?w.currentMonth=Math.min(w.config.maxDate.getMonth(),w.currentMonth):w.config.minDate&&w.currentYear===w.config.minDate.getFullYear()&&(w.currentMonth=Math.max(w.config.minDate.getMonth(),w.currentMonth)),n&&(w.redraw(),pe("onYearChange"),K())}}function X(e,t){var n;void 0===t&&(t=!0);var a=w.parseDate(e,void 0,t);if(w.config.minDate&&a&&M(a,w.config.minDate,void 0!==t?t:!w.minDateHasTime)<0||w.config.maxDate&&a&&M(a,w.config.maxDate,void 0!==t?t:!w.maxDateHasTime)>0)return!1;if(!w.config.enable&&0===w.config.disable.length)return!0;if(void 0===a)return!1;for(var i=!!w.config.enable,o=null!==(n=w.config.enable)&&void 0!==n?n:w.config.disable,r=0,l=void 0;r<o.length;r++){if("function"==typeof(l=o[r])&&l(a))return i;if(l instanceof Date&&void 0!==a&&l.getTime()===a.getTime())return i;if("string"==typeof l){var c=w.parseDate(l,void 0,!0);return c&&c.getTime()===a.getTime()?i:!i}if("object"==typeof l&&void 0!==a&&l.from&&l.to&&a.getTime()>=l.from.getTime()&&a.getTime()<=l.to.getTime())return i}return!i}function ee(e){return void 0!==w.daysContainer&&(-1===e.className.indexOf("hidden")&&-1===e.className.indexOf("flatpickr-disabled")&&w.daysContainer.contains(e))}function te(e){!(e.target===w._input)||!(w.selectedDates.length>0||w._input.value.length>0)||e.relatedTarget&&V(e.relatedTarget)||w.setDate(w._input.value,!0,e.target===w.altInput?w.config.altFormat:w.config.dateFormat)}function ne(e){var t=g(e),n=w.config.wrap?p.contains(t):t===w._input,a=w.config.allowInput,i=w.isOpen&&(!a||!n),o=w.config.inline&&n&&!a;if(13===e.keyCode&&n){if(a)return w.setDate(w._input.value,!0,t===w.altInput?w.config.altFormat:w.config.dateFormat),t.blur();w.open()}else if(V(t)||i||o){var r=!!w.timeContainer&&w.timeContainer.contains(t);switch(e.keyCode){case 13:r?(e.preventDefault(),I(),se()):ue(e);break;case 27:e.preventDefault(),se();break;case 8:case 46:n&&!w.config.allowInput&&(e.preventDefault(),w.clear());break;case 37:case 39:if(r||n)w.hourElement&&w.hourElement.focus();else if(e.preventDefault(),void 0!==w.daysContainer&&(!1===a||document.activeElement&&ee(document.activeElement))){var l=39===e.keyCode?1:-1;e.ctrlKey?(e.stopPropagation(),G(l),R(W(1),0)):R(void 0,l)}break;case 38:case 40:e.preventDefault();var c=40===e.keyCode?1:-1;w.daysContainer&&void 0!==t.$i||t===w.input||t===w.altInput?e.ctrlKey?(e.stopPropagation(),Q(w.currentYear-c),R(W(1),0)):r||R(void 0,7*c):t===w.currentYearElement?Q(w.currentYear-c):w.config.enableTime&&(!r&&w.hourElement&&w.hourElement.focus(),I(e),w._debouncedChange());break;case 9:if(r){var d=[w.hourElement,w.minuteElement,w.secondElement,w.amPM].concat(w.pluginElements).filter((function(e){return e})),s=d.indexOf(t);if(-1!==s){var u=d[s+(e.shiftKey?-1:1)];e.preventDefault(),(u||w._input).focus()}}else!w.config.noCalendar&&w.daysContainer&&w.daysContainer.contains(t)&&e.shiftKey&&(e.preventDefault(),w._input.focus())}}if(void 0!==w.amPM&&t===w.amPM)switch(e.key){case w.l10n.amPM[0].charAt(0):case w.l10n.amPM[0].charAt(0).toLowerCase():w.amPM.textContent=w.l10n.amPM[0],S(),be();break;case w.l10n.amPM[1].charAt(0):case w.l10n.amPM[1].charAt(0).toLowerCase():w.amPM.textContent=w.l10n.amPM[1],S(),be()}(n||V(t))&&pe("onKeyDown",e)}function ae(e){if(1===w.selectedDates.length&&(!e||e.classList.contains("flatpickr-day")&&!e.classList.contains("flatpickr-disabled"))){for(var t=e?e.dateObj.getTime():w.days.firstElementChild.dateObj.getTime(),n=w.parseDate(w.selectedDates[0],void 0,!0).getTime(),a=Math.min(t,w.selectedDates[0].getTime()),i=Math.max(t,w.selectedDates[0].getTime()),o=!1,r=0,l=0,c=a;c<i;c+=y)X(new Date(c),!0)||(o=o||c>a&&c<i,c<n&&(!r||c>r)?r=c:c>n&&(!l||c<l)&&(l=c));for(var d=0;d<w.config.showMonths;d++)for(var s=w.daysContainer.children[d],u=function(a,i){var c,d,u,f=s.children[a],m=f.dateObj.getTime(),g=r>0&&m<r||l>0&&m>l;return g?(f.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach((function(e){f.classList.remove(e)})),"continue"):o&&!g?"continue":(["startRange","inRange","endRange","notAllowed"].forEach((function(e){f.classList.remove(e)})),void(void 0!==e&&(e.classList.add(t<=w.selectedDates[0].getTime()?"startRange":"endRange"),n<t&&m===n?f.classList.add("startRange"):n>t&&m===n&&f.classList.add("endRange"),m>=r&&(0===l||m<=l)&&(d=n,u=t,(c=m)>Math.min(d,u)&&c<Math.max(d,u))&&f.classList.add("inRange"))))},f=0,m=s.children.length;f<m;f++)u(f)}}function ie(){!w.isOpen||w.config.static||w.config.inline||ce()}function oe(e){return function(t){var n=w.config["_"+e+"Date"]=w.parseDate(t,w.config.dateFormat),a=w.config["_"+("min"===e?"max":"min")+"Date"];void 0!==n&&(w["min"===e?"minDateHasTime":"maxDateHasTime"]=n.getHours()>0||n.getMinutes()>0||n.getSeconds()>0),w.selectedDates&&(w.selectedDates=w.selectedDates.filter((function(e){return X(e)})),w.selectedDates.length||"min"!==e||_(n),be()),w.daysContainer&&(de(),void 0!==n?w.currentYearElement[e]=n.getFullYear().toString():w.currentYearElement.removeAttribute(e),w.currentYearElement.disabled=!!a&&void 0!==n&&a.getFullYear()===n.getFullYear())}}function re(){return w.config.wrap?p.querySelector("[data-input]"):p}function le(){"object"!=typeof w.config.locale&&void 0===T.l10ns[w.config.locale]&&w.config.errorHandler(new Error("flatpickr: invalid locale "+w.config.locale)),w.l10n=e(e({},T.l10ns.default),"object"==typeof w.config.locale?w.config.locale:"default"!==w.config.locale?T.l10ns[w.config.locale]:void 0),D.K="("+w.l10n.amPM[0]+"|"+w.l10n.amPM[1]+"|"+w.l10n.amPM[0].toLowerCase()+"|"+w.l10n.amPM[1].toLowerCase()+")",void 0===e(e({},v),JSON.parse(JSON.stringify(p.dataset||{}))).time_24hr&&void 0===T.defaultConfig.time_24hr&&(w.config.time_24hr=w.l10n.time_24hr),w.formatDate=b(w),w.parseDate=C({config:w.config,l10n:w.l10n})}function ce(e){if("function"!=typeof w.config.position){if(void 0!==w.calendarContainer){pe("onPreCalendarPosition");var t=e||w._positionElement,n=Array.prototype.reduce.call(w.calendarContainer.children,(function(e,t){return e+t.offsetHeight}),0),a=w.calendarContainer.offsetWidth,i=w.config.position.split(" "),o=i[0],r=i.length>1?i[1]:null,l=t.getBoundingClientRect(),c=window.innerHeight-l.bottom,s="above"===o||"below"!==o&&c<n&&l.top>n,u=window.pageYOffset+l.top+(s?-n-2:t.offsetHeight+2);if(d(w.calendarContainer,"arrowTop",!s),d(w.calendarContainer,"arrowBottom",s),!w.config.inline){var f=window.pageXOffset+l.left,m=!1,g=!1;"center"===r?(f-=(a-l.width)/2,m=!0):"right"===r&&(f-=a-l.width,g=!0),d(w.calendarContainer,"arrowLeft",!m&&!g),d(w.calendarContainer,"arrowCenter",m),d(w.calendarContainer,"arrowRight",g);var p=window.document.body.offsetWidth-(window.pageXOffset+l.right),h=f+a>window.document.body.offsetWidth,v=p+a>window.document.body.offsetWidth;if(d(w.calendarContainer,"rightMost",h),!w.config.static)if(w.calendarContainer.style.top=u+"px",h)if(v){var D=function(){for(var e=null,t=0;t<document.styleSheets.length;t++){var n=document.styleSheets[t];try{n.cssRules}catch(e){continue}e=n;break}return null!=e?e:(a=document.createElement("style"),document.head.appendChild(a),a.sheet);var a}();if(void 0===D)return;var b=window.document.body.offsetWidth,C=Math.max(0,b/2-a/2),M=D.cssRules.length,y="{left:"+l.left+"px;right:auto;}";d(w.calendarContainer,"rightMost",!1),d(w.calendarContainer,"centerMost",!0),D.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after"+y,M),w.calendarContainer.style.left=C+"px",w.calendarContainer.style.right="auto"}else w.calendarContainer.style.left="auto",w.calendarContainer.style.right=p+"px";else w.calendarContainer.style.left=f+"px",w.calendarContainer.style.right="auto"}}}else w.config.position(w,e)}function de(){w.config.noCalendar||w.isMobile||(K(),De(),J())}function se(){w._input.focus(),-1!==window.navigator.userAgent.indexOf("MSIE")||void 0!==navigator.msMaxTouchPoints?setTimeout(w.close,0):w.close()}function ue(e){e.preventDefault(),e.stopPropagation();var t=f(g(e),(function(e){return e.classList&&e.classList.contains("flatpickr-day")&&!e.classList.contains("flatpickr-disabled")&&!e.classList.contains("notAllowed")}));if(void 0!==t){var n=t,a=w.latestSelectedDateObj=new Date(n.dateObj.getTime()),i=(a.getMonth()<w.currentMonth||a.getMonth()>w.currentMonth+w.config.showMonths-1)&&"range"!==w.config.mode;if(w.selectedDateElem=n,"single"===w.config.mode)w.selectedDates=[a];else if("multiple"===w.config.mode){var o=ve(a);o?w.selectedDates.splice(parseInt(o),1):w.selectedDates.push(a)}else"range"===w.config.mode&&(2===w.selectedDates.length&&w.clear(!1,!1),w.latestSelectedDateObj=a,w.selectedDates.push(a),0!==M(a,w.selectedDates[0],!0)&&w.selectedDates.sort((function(e,t){return e.getTime()-t.getTime()})));if(S(),i){var r=w.currentYear!==a.getFullYear();w.currentYear=a.getFullYear(),w.currentMonth=a.getMonth(),r&&(pe("onYearChange"),K()),pe("onMonthChange")}if(De(),J(),be(),i||"range"===w.config.mode||1!==w.config.showMonths?void 0!==w.selectedDateElem&&void 0===w.hourElement&&w.selectedDateElem&&w.selectedDateElem.focus():L(n),void 0!==w.hourElement&&void 0!==w.hourElement&&w.hourElement.focus(),w.config.closeOnSelect){var l="single"===w.config.mode&&!w.config.enableTime,c="range"===w.config.mode&&2===w.selectedDates.length&&!w.config.enableTime;(l||c)&&se()}N()}}w.parseDate=C({config:w.config,l10n:w.l10n}),w._handlers=[],w.pluginElements=[],w.loadedPlugins=[],w._bind=A,w._setHoursFromDate=_,w._positionCalendar=ce,w.changeMonth=G,w.changeYear=Q,w.clear=function(e,t){void 0===e&&(e=!0);void 0===t&&(t=!0);w.input.value="",void 0!==w.altInput&&(w.altInput.value="");void 0!==w.mobileInput&&(w.mobileInput.value="");w.selectedDates=[],w.latestSelectedDateObj=void 0,!0===t&&(w.currentYear=w._initialDate.getFullYear(),w.currentMonth=w._initialDate.getMonth());if(!0===w.config.enableTime){var n=x(w.config),a=n.hours,i=n.minutes,o=n.seconds;O(a,i,o)}w.redraw(),e&&pe("onChange")},w.close=function(){w.isOpen=!1,w.isMobile||(void 0!==w.calendarContainer&&w.calendarContainer.classList.remove("open"),void 0!==w._input&&w._input.classList.remove("active"));pe("onClose")},w._createElement=s,w.destroy=function(){void 0!==w.config&&pe("onDestroy");for(var e=w._handlers.length;e--;)w._handlers[e].remove();if(w._handlers=[],w.mobileInput)w.mobileInput.parentNode&&w.mobileInput.parentNode.removeChild(w.mobileInput),w.mobileInput=void 0;else if(w.calendarContainer&&w.calendarContainer.parentNode)if(w.config.static&&w.calendarContainer.parentNode){var t=w.calendarContainer.parentNode;if(t.lastChild&&t.removeChild(t.lastChild),t.parentNode){for(;t.firstChild;)t.parentNode.insertBefore(t.firstChild,t);t.parentNode.removeChild(t)}}else w.calendarContainer.parentNode.removeChild(w.calendarContainer);w.altInput&&(w.input.type="text",w.altInput.parentNode&&w.altInput.parentNode.removeChild(w.altInput),delete w.altInput);w.input&&(w.input.type=w.input._type,w.input.classList.remove("flatpickr-input"),w.input.removeAttribute("readonly"));["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach((function(e){try{delete w[e]}catch(e){}}))},w.isEnabled=X,w.jumpToDate=P,w.open=function(e,t){void 0===t&&(t=w._positionElement);if(!0===w.isMobile){if(e){e.preventDefault();var n=g(e);n&&n.blur()}return void 0!==w.mobileInput&&(w.mobileInput.focus(),w.mobileInput.click()),void pe("onOpen")}if(w._input.disabled||w.config.inline)return;var a=w.isOpen;w.isOpen=!0,a||(w.calendarContainer.classList.add("open"),w._input.classList.add("active"),pe("onOpen"),ce(t));!0===w.config.enableTime&&!0===w.config.noCalendar&&(!1!==w.config.allowInput||void 0!==e&&w.timeContainer.contains(e.relatedTarget)||setTimeout((function(){return w.hourElement.select()}),50))},w.redraw=de,w.set=function(e,t){if(null!==e&&"object"==typeof e)for(var a in Object.assign(w.config,e),e)void 0!==fe[a]&&fe[a].forEach((function(e){return e()}));else w.config[e]=t,void 0!==fe[e]?fe[e].forEach((function(e){return e()})):n.indexOf(e)>-1&&(w.config[e]=c(t));w.redraw(),be(!0)},w.setDate=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=w.config.dateFormat);if(0!==e&&!e||e instanceof Array&&0===e.length)return w.clear(t);me(e,n),w.latestSelectedDateObj=w.selectedDates[w.selectedDates.length-1],w.redraw(),P(void 0,t),_(),0===w.selectedDates.length&&w.clear(!1);be(t),t&&pe("onChange")},w.toggle=function(e){if(!0===w.isOpen)return w.close();w.open(e)};var fe={locale:[le,z],showMonths:[q,k,$],minDate:[P],maxDate:[P],clickOpens:[function(){!0===w.config.clickOpens?(A(w._input,"focus",w.open),A(w._input,"click",w.open)):(w._input.removeEventListener("focus",w.open),w._input.removeEventListener("click",w.open))}]};function me(e,t){var n=[];if(e instanceof Array)n=e.map((function(e){return w.parseDate(e,t)}));else if(e instanceof Date||"number"==typeof e)n=[w.parseDate(e,t)];else if("string"==typeof e)switch(w.config.mode){case"single":case"time":n=[w.parseDate(e,t)];break;case"multiple":n=e.split(w.config.conjunction).map((function(e){return w.parseDate(e,t)}));break;case"range":n=e.split(w.l10n.rangeSeparator).map((function(e){return w.parseDate(e,t)}))}else w.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(e)));w.selectedDates=w.config.allowInvalidPreload?n:n.filter((function(e){return e instanceof Date&&X(e,!1)})),"range"===w.config.mode&&w.selectedDates.sort((function(e,t){return e.getTime()-t.getTime()}))}function ge(e){return e.slice().map((function(e){return"string"==typeof e||"number"==typeof e||e instanceof Date?w.parseDate(e,void 0,!0):e&&"object"==typeof e&&e.from&&e.to?{from:w.parseDate(e.from,void 0),to:w.parseDate(e.to,void 0)}:e})).filter((function(e){return e}))}function pe(e,t){if(void 0!==w.config){var n=w.config[e];if(void 0!==n&&n.length>0)for(var a=0;n[a]&&a<n.length;a++)n[a](w.selectedDates,w.input.value,w,t);"onChange"===e&&(w.input.dispatchEvent(he("change")),w.input.dispatchEvent(he("input")))}}function he(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}function ve(e){for(var t=0;t<w.selectedDates.length;t++)if(0===M(w.selectedDates[t],e))return""+t;return!1}function De(){w.config.noCalendar||w.isMobile||!w.monthNav||(w.yearElements.forEach((function(e,t){var n=new Date(w.currentYear,w.currentMonth,1);n.setMonth(w.currentMonth+t),w.config.showMonths>1||"static"===w.config.monthSelectorType?w.monthElements[t].textContent=h(n.getMonth(),w.config.shorthandCurrentMonth,w.l10n)+" ":w.monthsDropdownContainer.value=n.getMonth().toString(),e.value=n.getFullYear().toString()})),w._hidePrevMonthArrow=void 0!==w.config.minDate&&(w.currentYear===w.config.minDate.getFullYear()?w.currentMonth<=w.config.minDate.getMonth():w.currentYear<w.config.minDate.getFullYear()),w._hideNextMonthArrow=void 0!==w.config.maxDate&&(w.currentYear===w.config.maxDate.getFullYear()?w.currentMonth+1>w.config.maxDate.getMonth():w.currentYear>w.config.maxDate.getFullYear()))}function we(e){return w.selectedDates.map((function(t){return w.formatDate(t,e)})).filter((function(e,t,n){return"range"!==w.config.mode||w.config.enableTime||n.indexOf(e)===t})).join("range"!==w.config.mode?w.config.conjunction:w.l10n.rangeSeparator)}function be(e){void 0===e&&(e=!0),void 0!==w.mobileInput&&w.mobileFormatStr&&(w.mobileInput.value=void 0!==w.latestSelectedDateObj?w.formatDate(w.latestSelectedDateObj,w.mobileFormatStr):""),w.input.value=we(w.config.dateFormat),void 0!==w.altInput&&(w.altInput.value=we(w.config.altFormat)),!1!==e&&pe("onValueUpdate")}function Ce(e){var t=g(e),n=w.prevMonthNav.contains(t),a=w.nextMonthNav.contains(t);n||a?G(n?-1:1):w.yearElements.indexOf(t)>=0?t.select():t.classList.contains("arrowUp")?w.changeYear(w.currentYear+1):t.classList.contains("arrowDown")&&w.changeYear(w.currentYear-1)}return function(){w.element=w.input=p,w.isOpen=!1,function(){var t=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],i=e(e({},JSON.parse(JSON.stringify(p.dataset||{}))),v),o={};w.config.parseDate=i.parseDate,w.config.formatDate=i.formatDate,Object.defineProperty(w.config,"enable",{get:function(){return w.config._enable},set:function(e){w.config._enable=ge(e)}}),Object.defineProperty(w.config,"disable",{get:function(){return w.config._disable},set:function(e){w.config._disable=ge(e)}});var r="time"===i.mode;if(!i.dateFormat&&(i.enableTime||r)){var l=T.defaultConfig.dateFormat||a.dateFormat;o.dateFormat=i.noCalendar||r?"H:i"+(i.enableSeconds?":S":""):l+" H:i"+(i.enableSeconds?":S":"")}if(i.altInput&&(i.enableTime||r)&&!i.altFormat){var d=T.defaultConfig.altFormat||a.altFormat;o.altFormat=i.noCalendar||r?"h:i"+(i.enableSeconds?":S K":" K"):d+" h:i"+(i.enableSeconds?":S":"")+" K"}Object.defineProperty(w.config,"minDate",{get:function(){return w.config._minDate},set:oe("min")}),Object.defineProperty(w.config,"maxDate",{get:function(){return w.config._maxDate},set:oe("max")});var s=function(e){return function(t){w.config["min"===e?"_minTime":"_maxTime"]=w.parseDate(t,"H:i:S")}};Object.defineProperty(w.config,"minTime",{get:function(){return w.config._minTime},set:s("min")}),Object.defineProperty(w.config,"maxTime",{get:function(){return w.config._maxTime},set:s("max")}),"time"===i.mode&&(w.config.noCalendar=!0,w.config.enableTime=!0);Object.assign(w.config,o,i);for(var u=0;u<t.length;u++)w.config[t[u]]=!0===w.config[t[u]]||"true"===w.config[t[u]];n.filter((function(e){return void 0!==w.config[e]})).forEach((function(e){w.config[e]=c(w.config[e]||[]).map(E)})),w.isMobile=!w.config.disableMobile&&!w.config.inline&&"single"===w.config.mode&&!w.config.disable.length&&!w.config.enable&&!w.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(u=0;u<w.config.plugins.length;u++){var f=w.config.plugins[u](w)||{};for(var m in f)n.indexOf(m)>-1?w.config[m]=c(f[m]).map(E).concat(w.config[m]):void 0===i[m]&&(w.config[m]=f[m])}i.altInputClass||(w.config.altInputClass=re().className+" "+w.config.altInputClass);pe("onParseConfig")}(),le(),function(){if(w.input=re(),!w.input)return void w.config.errorHandler(new Error("Invalid input element specified"));w.input._type=w.input.type,w.input.type="text",w.input.classList.add("flatpickr-input"),w._input=w.input,w.config.altInput&&(w.altInput=s(w.input.nodeName,w.config.altInputClass),w._input=w.altInput,w.altInput.placeholder=w.input.placeholder,w.altInput.disabled=w.input.disabled,w.altInput.required=w.input.required,w.altInput.tabIndex=w.input.tabIndex,w.altInput.type="text",w.input.setAttribute("type","hidden"),!w.config.static&&w.input.parentNode&&w.input.parentNode.insertBefore(w.altInput,w.input.nextSibling));w.config.allowInput||w._input.setAttribute("readonly","readonly");w._positionElement=w.config.positionElement||w._input}(),function(){w.selectedDates=[],w.now=w.parseDate(w.config.now)||new Date;var e=w.config.defaultDate||("INPUT"!==w.input.nodeName&&"TEXTAREA"!==w.input.nodeName||!w.input.placeholder||w.input.value!==w.input.placeholder?w.input.value:null);e&&me(e,w.config.dateFormat);w._initialDate=w.selectedDates.length>0?w.selectedDates[0]:w.config.minDate&&w.config.minDate.getTime()>w.now.getTime()?w.config.minDate:w.config.maxDate&&w.config.maxDate.getTime()<w.now.getTime()?w.config.maxDate:w.now,w.currentYear=w._initialDate.getFullYear(),w.currentMonth=w._initialDate.getMonth(),w.selectedDates.length>0&&(w.latestSelectedDateObj=w.selectedDates[0]);void 0!==w.config.minTime&&(w.config.minTime=w.parseDate(w.config.minTime,"H:i"));void 0!==w.config.maxTime&&(w.config.maxTime=w.parseDate(w.config.maxTime,"H:i"));w.minDateHasTime=!!w.config.minDate&&(w.config.minDate.getHours()>0||w.config.minDate.getMinutes()>0||w.config.minDate.getSeconds()>0),w.maxDateHasTime=!!w.config.maxDate&&(w.config.maxDate.getHours()>0||w.config.maxDate.getMinutes()>0||w.config.maxDate.getSeconds()>0)}(),w.utils={getDaysInMonth:function(e,t){return void 0===e&&(e=w.currentMonth),void 0===t&&(t=w.currentYear),1===e&&(t%4==0&&t%100!=0||t%400==0)?29:w.l10n.daysInMonth[e]}},w.isMobile||function(){var e=window.document.createDocumentFragment();if(w.calendarContainer=s("div","flatpickr-calendar"),w.calendarContainer.tabIndex=-1,!w.config.noCalendar){if(e.appendChild((w.monthNav=s("div","flatpickr-months"),w.yearElements=[],w.monthElements=[],w.prevMonthNav=s("span","flatpickr-prev-month"),w.prevMonthNav.innerHTML=w.config.prevArrow,w.nextMonthNav=s("span","flatpickr-next-month"),w.nextMonthNav.innerHTML=w.config.nextArrow,q(),Object.defineProperty(w,"_hidePrevMonthArrow",{get:function(){return w.__hidePrevMonthArrow},set:function(e){w.__hidePrevMonthArrow!==e&&(d(w.prevMonthNav,"flatpickr-disabled",e),w.__hidePrevMonthArrow=e)}}),Object.defineProperty(w,"_hideNextMonthArrow",{get:function(){return w.__hideNextMonthArrow},set:function(e){w.__hideNextMonthArrow!==e&&(d(w.nextMonthNav,"flatpickr-disabled",e),w.__hideNextMonthArrow=e)}}),w.currentYearElement=w.yearElements[0],De(),w.monthNav)),w.innerContainer=s("div","flatpickr-innerContainer"),w.config.weekNumbers){var t=function(){w.calendarContainer.classList.add("hasWeeks");var e=s("div","flatpickr-weekwrapper");e.appendChild(s("span","flatpickr-weekday",w.l10n.weekAbbreviation));var t=s("div","flatpickr-weeks");return e.appendChild(t),{weekWrapper:e,weekNumbers:t}}(),n=t.weekWrapper,a=t.weekNumbers;w.innerContainer.appendChild(n),w.weekNumbers=a,w.weekWrapper=n}w.rContainer=s("div","flatpickr-rContainer"),w.rContainer.appendChild($()),w.daysContainer||(w.daysContainer=s("div","flatpickr-days"),w.daysContainer.tabIndex=-1),J(),w.rContainer.appendChild(w.daysContainer),w.innerContainer.appendChild(w.rContainer),e.appendChild(w.innerContainer)}w.config.enableTime&&e.appendChild(function(){w.calendarContainer.classList.add("hasTime"),w.config.noCalendar&&w.calendarContainer.classList.add("noCalendar");var e=x(w.config);w.timeContainer=s("div","flatpickr-time"),w.timeContainer.tabIndex=-1;var t=s("span","flatpickr-time-separator",":"),n=m("flatpickr-hour",{"aria-label":w.l10n.hourAriaLabel});w.hourElement=n.getElementsByTagName("input")[0];var a=m("flatpickr-minute",{"aria-label":w.l10n.minuteAriaLabel});w.minuteElement=a.getElementsByTagName("input")[0],w.hourElement.tabIndex=w.minuteElement.tabIndex=-1,w.hourElement.value=o(w.latestSelectedDateObj?w.latestSelectedDateObj.getHours():w.config.time_24hr?e.hours:function(e){switch(e%24){case 0:case 12:return 12;default:return e%12}}(e.hours)),w.minuteElement.value=o(w.latestSelectedDateObj?w.latestSelectedDateObj.getMinutes():e.minutes),w.hourElement.setAttribute("step",w.config.hourIncrement.toString()),w.minuteElement.setAttribute("step",w.config.minuteIncrement.toString()),w.hourElement.setAttribute("min",w.config.time_24hr?"0":"1"),w.hourElement.setAttribute("max",w.config.time_24hr?"23":"12"),w.hourElement.setAttribute("maxlength","2"),w.minuteElement.setAttribute("min","0"),w.minuteElement.setAttribute("max","59"),w.minuteElement.setAttribute("maxlength","2"),w.timeContainer.appendChild(n),w.timeContainer.appendChild(t),w.timeContainer.appendChild(a),w.config.time_24hr&&w.timeContainer.classList.add("time24hr");if(w.config.enableSeconds){w.timeContainer.classList.add("hasSeconds");var i=m("flatpickr-second");w.secondElement=i.getElementsByTagName("input")[0],w.secondElement.value=o(w.latestSelectedDateObj?w.latestSelectedDateObj.getSeconds():e.seconds),w.secondElement.setAttribute("step",w.minuteElement.getAttribute("step")),w.secondElement.setAttribute("min","0"),w.secondElement.setAttribute("max","59"),w.secondElement.setAttribute("maxlength","2"),w.timeContainer.appendChild(s("span","flatpickr-time-separator",":")),w.timeContainer.appendChild(i)}w.config.time_24hr||(w.amPM=s("span","flatpickr-am-pm",w.l10n.amPM[r((w.latestSelectedDateObj?w.hourElement.value:w.config.defaultHour)>11)]),w.amPM.title=w.l10n.toggleTitle,w.amPM.tabIndex=-1,w.timeContainer.appendChild(w.amPM));return w.timeContainer}());d(w.calendarContainer,"rangeMode","range"===w.config.mode),d(w.calendarContainer,"animate",!0===w.config.animate),d(w.calendarContainer,"multiMonth",w.config.showMonths>1),w.calendarContainer.appendChild(e);var i=void 0!==w.config.appendTo&&void 0!==w.config.appendTo.nodeType;if((w.config.inline||w.config.static)&&(w.calendarContainer.classList.add(w.config.inline?"inline":"static"),w.config.inline&&(!i&&w.element.parentNode?w.element.parentNode.insertBefore(w.calendarContainer,w._input.nextSibling):void 0!==w.config.appendTo&&w.config.appendTo.appendChild(w.calendarContainer)),w.config.static)){var l=s("div","flatpickr-wrapper");w.element.parentNode&&w.element.parentNode.insertBefore(l,w.element),l.appendChild(w.element),w.altInput&&l.appendChild(w.altInput),l.appendChild(w.calendarContainer)}w.config.static||w.config.inline||(void 0!==w.config.appendTo?w.config.appendTo:window.document.body).appendChild(w.calendarContainer)}(),function(){w.config.wrap&&["open","close","toggle","clear"].forEach((function(e){Array.prototype.forEach.call(w.element.querySelectorAll("[data-"+e+"]"),(function(t){return A(t,"click",w[e])}))}));if(w.isMobile)return void function(){var e=w.config.enableTime?w.config.noCalendar?"time":"datetime-local":"date";w.mobileInput=s("input",w.input.className+" flatpickr-mobile"),w.mobileInput.tabIndex=1,w.mobileInput.type=e,w.mobileInput.disabled=w.input.disabled,w.mobileInput.required=w.input.required,w.mobileInput.placeholder=w.input.placeholder,w.mobileFormatStr="datetime-local"===e?"Y-m-d\\TH:i:S":"date"===e?"Y-m-d":"H:i:S",w.selectedDates.length>0&&(w.mobileInput.defaultValue=w.mobileInput.value=w.formatDate(w.selectedDates[0],w.mobileFormatStr));w.config.minDate&&(w.mobileInput.min=w.formatDate(w.config.minDate,"Y-m-d"));w.config.maxDate&&(w.mobileInput.max=w.formatDate(w.config.maxDate,"Y-m-d"));w.input.getAttribute("step")&&(w.mobileInput.step=String(w.input.getAttribute("step")));w.input.type="hidden",void 0!==w.altInput&&(w.altInput.type="hidden");try{w.input.parentNode&&w.input.parentNode.insertBefore(w.mobileInput,w.input.nextSibling)}catch(e){}A(w.mobileInput,"change",(function(e){w.setDate(g(e).value,!1,w.mobileFormatStr),pe("onChange"),pe("onClose")}))}();var e=l(ie,50);w._debouncedChange=l(N,300),w.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&A(w.daysContainer,"mouseover",(function(e){"range"===w.config.mode&&ae(g(e))}));A(window.document.body,"keydown",ne),w.config.inline||w.config.static||A(window,"resize",e);void 0!==window.ontouchstart?A(window.document,"touchstart",Z):A(window.document,"mousedown",Z);A(window.document,"focus",Z,{capture:!0}),!0===w.config.clickOpens&&(A(w._input,"focus",w.open),A(w._input,"click",w.open));void 0!==w.daysContainer&&(A(w.monthNav,"click",Ce),A(w.monthNav,["keyup","increment"],F),A(w.daysContainer,"click",ue));if(void 0!==w.timeContainer&&void 0!==w.minuteElement&&void 0!==w.hourElement){var t=function(e){return g(e).select()};A(w.timeContainer,["increment"],I),A(w.timeContainer,"blur",I,{capture:!0}),A(w.timeContainer,"click",Y),A([w.hourElement,w.minuteElement],["focus","click"],t),void 0!==w.secondElement&&A(w.secondElement,"focus",(function(){return w.secondElement&&w.secondElement.select()})),void 0!==w.amPM&&A(w.amPM,"click",(function(e){I(e),N()}))}w.config.allowInput&&A(w._input,"blur",te)}(),(w.selectedDates.length||w.config.noCalendar)&&(w.config.enableTime&&_(w.config.noCalendar?w.latestSelectedDateObj:void 0),be(!1)),k();var t=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!w.isMobile&&t&&ce(),pe("onReady")}(),w}function k(e,t){for(var n=Array.prototype.slice.call(e).filter((function(e){return e instanceof HTMLElement})),a=[],i=0;i<n.length;i++){var o=n[i];try{if(null!==o.getAttribute("data-fp-omit"))continue;void 0!==o._flatpickr&&(o._flatpickr.destroy(),o._flatpickr=void 0),o._flatpickr=E(o,t||{}),a.push(o._flatpickr)}catch(e){console.error(e)}}return 1===a.length?a[0]:a}"undefined"!=typeof HTMLElement&&"undefined"!=typeof HTMLCollection&&"undefined"!=typeof NodeList&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(e){return k(this,e)},HTMLElement.prototype.flatpickr=function(e){return k([this],e)});var T=function(e,t){return"string"==typeof e?k(window.document.querySelectorAll(e),t):e instanceof Node?k([e],t):k(e,t)};return T.defaultConfig={},T.l10ns={en:e({},i),default:e({},i)},T.localize=function(t){T.l10ns.default=e(e({},T.l10ns.default),t)},T.setDefaults=function(t){T.defaultConfig=e(e({},T.defaultConfig),t)},T.parseDate=C({}),T.formatDate=b({}),T.compareDates=M,"undefined"!=typeof jQuery&&void 0!==jQuery.fn&&(jQuery.fn.flatpickr=function(e){return k(this,e)}),Date.prototype.fp_incr=function(e){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+("string"==typeof e?parseInt(e,10):e))},"undefined"!=typeof window&&(window.flatpickr=T),T}));
 processing_period = parseInt(processing_period);
 max_delivery_period = parseInt(max_delivery_period);
 var sunday = 0,monday = 1,tuesday = 2,wednesday = 3,thursday = 4,friday = 5,saturday = 6
 var is_onload = 1, flag = 0, is_todays_cutoff = 0, visibility_status = 1;
 var weekend_index_array = [];
 var weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
 var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 var using_limit = is_processing_set_for_prod = false;
 var ddmFpCal,date_object,default_selected_date,date_string;
 var timezone = timezone.trim();
 var btn_name_attribute = checkout_btn_selector != '' ? checkout_btn_selector : 'checkout';
 var checkout_btn_name_attribute = checkout_btn_selector != '' ? checkout_btn_selector : 'checkout';
 var shipping_selected_date = local_selected_date = pickup_selected_date = '';
 if(shipping_configuration_status == 1){
 var del_type = "shipping";
 }else if(store_pickup_status == 1){
 var del_type = "pickup";
 }else if(local_delivery_status == 1){
 var del_type = "local_delivery";
 }
 setCookie({'oddm_del_type':del_type},7);
 var beforeSelectedType = getCookie('oddm_del_type');
 var oddm_slected_loc_id = selectedDayName = '';
 var addDayName = parseInt(addDayName);
 if(ddm_display_at == 'product' && template_name == 'product'){
 btn_name_attribute = addtocart_btn_selector != '' ? addtocart_btn_selector : 'add';
 ddmInitProdCal();
 if(visibility_status){
 var cartpage_btn_name_attribute = checkout_btn_selector != '' ? checkout_btn_selector : 'checkout';
 $("[name*="+cartpage_btn_name_attribute+"]" ).removeAttr("disabled");
 attributes = {};
 attributes["Delivery Date"] = '';
 attributes["Delivery Time"] = '';
 attributes["Delivery Day"] = ''; // Krishna
 attributes["Additional Comments"] = '';
 attributes["Location Id"] = '';
 attributes["Location Name"] = '';
 attributes["Location Address"] = '';
 updateCartAttributes(attributes);
 $(document).on('click','[type=radio],.radio-wrapper, .selector-wrapper>select, select,.clickyboxes>li>a',function(){
 if(required_date_section == 1 ){
 disableCheckoutButton(btn_name_attribute);
 }
 });
 }
 }
 if(visibility_status){
 var DDM_Calendar_view = (function () {
 var handleCalendar = function () {
 console.log('cal init..');
 var ddm_calendar_tzdate_obj = selected_timezone_date();
 var defaultDateVal = maxdays = '';
 if(preselected_date_status == 1){
 defaultDateVal = default_selected_date;
 if(max_delivery_period != 0 && processing_period != 0){
 maxdays = processing_period+max_delivery_period-1;
 }else if(max_delivery_period == 0 && processing_period != 0){
 maxdays = '';
 }else if(max_delivery_period != 0 && processing_period == 0){
 maxdays = max_delivery_period-1;
 }
 }else{
 $('#dds_calendar').val('');
 if(max_delivery_period != 0 && processing_period != 0){
 defaultDateVal = '';
 maxdays = max_delivery_period-1+processing_period;
 }else if(max_delivery_period != 0 && processing_period == 0){
 defaultDateVal = '';
 maxdays = max_delivery_period-1;
 }
 }
 if(typeof beforeSelectedDate !== 'undefined' && beforeSelectedDate != ''){
 if(beforeSelectedDate != 'undefined'){
 defaultDateVal = beforeSelectedDate;
 }
 }
 var calId = document.getElementById("dds_calendar");
 if(calId){
 var config_options = {
 enableTime: false,
 minDate: 'today',
 dateFormat: date_format,
 defaultDate: defaultDateVal,
 disableMobile: false,
 locale: {
 "firstDayOfWeek": first_day_of_calendar,
 weekdays: { shorthand: days_text, },
 months: { longhand: month_text },
 },
 disable: [
 function (date) {
 return day_disable(date);
 },
 {
 from: "today",
 to: ddm_calendar_tzdate_obj.fp_incr(processing_period - 1)
 }
 ],
 onChange: function (selectedDates, dateStr, instance) {
 var d = new Date(dateStr);
 is_onload = 0;
 $('.flatpickr-time').hide();
 flatpickr_date_formate(dateStr, date_format);
 instance.close();
 updateCookieData(del_type);
 if(ddm_display_at == 'cart'){
 updateProductProperties(dateStr);
 }
 },
 onReady: function (selectedDates, dateStr, instance) {
 var count_tab = $(".tab-menu-wrapper ul").find("li").length;
 $(".tab-menu-wrapper").addClass('tab_'+count_tab+'');
 if (preselected_date_status == 1 || dateStr != '') {
 flatpickr_date_formate(dateStr, date_format);
 }
 if(ddm_display_at == 'cart' && dateStr != ''){
 updateProductProperties(dateStr);
 }
 },
 onOpen: function () { $('.flatpickr-time').hide(); },
 };
 if(window.Shopify.shop == 'mworks-organics.myshopify.com' || window.Shopify.shop == 'sbandf.myshopify.com'){
 config_options.inline= true;
 }
 if (window.Shopify.shop == 'lotusbakeries.myshopify.com' || window.Shopify.shop == 'shipping-plugin-test-store.myshopify.com') {
 config_options.position = 'auto center';
 }
 if (maxdays != '') {
 config_options.maxDate = ddm_calendar_tzdate_obj.fp_incr(maxdays);
 }
 ddmFpCal = calId.flatpickr(config_options);
 }
 }
 return {
 init: function () {
 handleCalendar();
 }
 }
 })();
 ddmLoadHtml();
 if(typeof appjetty_tag_matched != 'undefined' && appjetty_tag_matched != false){
 closedDays = appjetty_closed_days; // Bllisartisan customization
 }
 var convertTime12to24 = (time12h) => {
 const [time, modifier] = time12h.split(' ');
 let [hours, minutes] = time.split(':');
 if (hours === '12') { hours = '00'; }
 if (modifier === 'PM') { hours = parseInt(hours, 10) + 12; }
 if (modifier === 'AM') {
 hours = parseInt(hours);
 if (hours < 10) {
 hours = '0' + hours;
 }
 }
 if(time12h == ''){ return `23:59`; }
 return `${hours}:${minutes}`;
 }
 if($('#dds_calendar').length > 0){}
 if (beforeSelectedType != null && beforeSelectedType == 'shipping' ) {
 jQuery.getJSON('/cart.js', function (cart) {
 $('#dds_calendar_notes').text(cart.attributes['Additional Comments']);
 if(cart.attributes['No-contact Delivery'] == "Yes"){
 $('#slideThree').prop('checked', true);
 }
 beforeSelectedDate = cart.attributes['Delivery Date'];
 selectedDayName = cart.attributes['Delivery Day'];
 }).done(function(){
 ddmConfigCal();
 attributes = {};
 attributes["DDM Delivery Type"] = 'Shipping';
 $('.ddm-loader').hide();
 if(parseInt(preselected_date_status) && (typeof beforeSelectedDate !== 'undefined' || beforeSelectedDate != '')){
 var shippingPreselectedDate = $('#dds_calendar').val();
 if(typeof shippingPreselectedDate != 'undefined'){
 var shippingPreselectedTime = $('.slot-time-list option:selected').val();
 if(typeof shippingPreselectedTime == 'undefined'){
 shippingPreselectedTime = '';
 }
 attributes["Delivery Date"] = shippingPreselectedDate;
 attributes["Delivery Time"] = shippingPreselectedTime;
 attributes["Delivery Day"] = selectedDayName; // Krishna
 }
 }
 updateCartAttributes(attributes);
 });
 }else{
 if(beforeSelectedType == null && del_type == 'shipping'){
 ddmConfigCal();
 if(parseInt(preselected_date_status)){
 attributes = {};
 var shippingPreselectedDate = $('#dds_calendar').val();
 if(typeof shippingPreselectedDate != 'undefined' && shippingPreselectedDate != ''){
 var shippingPreselectedTime = $('.slot-time-list option:selected').val();
 if(typeof shippingPreselectedTime == 'undefined'){
 shippingPreselectedTime = '';
 }
 attributes["Delivery Date"] = shippingPreselectedDate;
 attributes["Delivery Time"] = shippingPreselectedTime;
 attributes["Delivery Day"] = selectedDayName; // Krishna
 updateCartAttributes(attributes);
 }
 }
 }
 d_type = del_type == 'pickup' ? 'Store Pickup' : del_type == 'local_delivery' ? 'Local Delivery' : 'Shipping';
 attributes = {};
 attributes["DDM Delivery Type"] = d_type;
 updateCartAttributes(attributes);
 setCookie({'oddm_del_type':del_type},7);
 }
 if(del_type != 'shipping'){
 $('.cart-container').hide();
 $('.delivery-container').html(eval(del_type+"_html"));
 }
 if(required_date_section == 1){
 $('#dds_calendar').val() != '' ? $("[name*="+btn_name_attribute+"]" ).removeAttr("disabled") : $("[name*="+btn_name_attribute+"]" ).attr("disabled",true);
 $(document).on('submit','form',function(event){
 if(ddm_display_at == 'product' && window.Shopify.shop == 'pretty-street-flowers.myshopify.com'){
 checkForCustomFields(true);
 if(window.location.pathname != "/account/addresses" && ( $("#dds_calendar").val() == '' || $("#ddm_sender").val() == '' || $('#ddm_receiver').val() == '')){
 event.preventDefault();
 }
 }
 if(window.location.pathname != "/account/addresses" && $("#dds_calendar").val() == '' && $('#dds_calendar').length > 0){
 event.preventDefault();
 if($('.appjetty-ddm-error').length > 0){
 $('.appjetty-ddm-error').html('<span class="error_msg" style="margin-bottom: 5px;color: '+error_msg_color+';">'+htmlspecialchars(error_msg)+'</span>');
 }else if(!$('*').find('span.error_msg').length > 0){
 $('form').find('[name="'+btn_name_attribute+'"]').parent().prepend('<span class="error_msg" style="margin-bottom: 5px;color: '+error_msg_color+';">'+htmlspecialchars(error_msg)+'</span>');
 $('#dds_calendar').css('border-color',error_msg_color);
 }
 }
 });
 }else{
 $("[name*="+btn_name_attribute+"]" ).removeAttr("disabled");
 }
 $(document).on('keyup', '#dds_calendar_notes', function () {
 if (ddm_display_at == 'cart') {
 attributes = {};
 attributes["Additional Comments"] = $(this).val();
 updateCartAttributes(attributes);
 updateCookieData(del_type);
 }
 });
 $(document).on('keyup', '#ddm_zipcode', function () {
 if (ddm_display_at == 'cart') {
 updateCookieData(del_type);
 }
 });
 $(document).on('change','.slot-time-list',function(){
 var delivery_time = $('.slot-time-list option:selected').val() ?? '';
 attributes = {};
 attributes["Delivery Time"] = delivery_time;
 updateCartAttributes(attributes);
 updateCookieData(del_type);
 });
 $(document).on('change','#slideThree',function(e){
 var ischecked= $(this).is(':checked');
 attributes = {};
 attributes["No-contact Delivery"] = $(this).is(':checked') ? 'Yes' : 'No';
 updateCartAttributes(attributes);
 updateCookieData(del_type);
 });
 $(document).on('change','.delivery-type',function(e){
 beforeSelectedDate = '';
 if(!$(this).parents('.oddm_delivery_method').hasClass('selected-type')){
 del_type = $(this).parents('.oddm_delivery_method').data('delivery-type');
 setCookie({'oddm_del_type':del_type},7);
 setDeliveryTypeAttribute(del_type);
 $('.tab-menu-wrapper li').removeClass('selected-type');
 $(this).parents('.oddm_delivery_method').addClass('selected-type');
 $('span.error_msg').remove();
 ddmSetSelectedTab();
 $('.cart-container').hide();
 $('.delivery-container').html('');
 disabledClickOnDeliveryIcon();
 if(del_type == 'shipping'){
 ddmGetShippingConfig(del_type);
 }else{
 $('.dds-notes').html('');
 $('.delivery-container').html(eval(del_type+"_html"));
 if($(this).val() == 'store_pickup' && typeof $('input[type=radio][name=ddm_sp_location]:checked').val() == 'undefined'){
 $("input[type=radio][name=ddm_sp_location]:first").trigger('click');
 }
 if(required_date_section){
 $("[name*=" + btn_name_attribute + "]").attr("disabled", true);
 }
 enabledClickOnDeliveryIcon();
 }
 }
 });
 $(document).on('click','.oddm-zipcode-search-icon',function(e){
 disabledClickOnDeliveryIcon();
 attributes = {};
 attributes["Delivery Date"] = '';
 attributes["Delivery Time"] = '';
 attributes["Delivery Day"] = '';
 attributes["Additional Comments"] = '';
 attributes["Location Id"] = '';
 updateCartAttributes(attributes);
 $("[name*=" + btn_name_attribute + "]").attr("disabled",true);
 $('.ddm_local_del_error, .cart-container').hide();
 if($('#ddm_zipcode').val() == '' || $('#ddm_zipcode').val() == null){
 $('.ddm_local_del_error').html('Zipcode is required').show();
 enabledClickOnDeliveryIcon();
 return [false];
 }
 var req_data = {
 'domain': shop_domain ,
 'delivery_type' : del_type,
 'zipcode' : $('#ddm_zipcode').val()
 };
 ddmGetLocalAndPickupConfig(req_data);
 });
 $(document).on('change','input[type=radio][name=ddm_sp_location]',function() {
 var location_id = $(this).val();
 var location_name = $(this).siblings('.oddm-pickup-locations').find('.oddm-pickup-locations-name').attr('data-name');
 var location_address = $(this).siblings('.oddm-pickup-locations').find('.oddm-pickup-locations-add').text();
 current_lat = parseFloat($(this).attr('data-lat'));
 current_lng = parseFloat($(this).attr('data-lng'));
 $('#location_id').val(location_id);
 $('#location_name').val(location_name);
 $('#location_address').val(location_address);
 attributes = {};
 attributes["Location Id"] = location_id;
 attributes["Location Name"] = location_name;
 attributes["Location Address"] = location_address;
 updateCartAttributes(attributes);
 $("[name*=" + btn_name_attribute + "]").attr("disabled",true);
 var req_data = {
 'domain': shop_domain ,
 'delivery_type' : del_type,
 'location' : $('input[name="ddm_sp_location"]:checked').data('id')
 };
 $('.ddm_local_del_error, .cart-container').hide();
 disabledClickOnDeliveryIcon();
 ddmGetLocalAndPickupConfig(req_data);
 updateCookieData(del_type);
 initMap();
 });
 $(document).on('click','[name*="'+checkout_btn_name_attribute+'"]',function() {
 updateProductProperties($('#dds_calendar').val());
 });
 if(del_type != 'shipping'){
 attributes = {};
 var beforeNoContactDeliveryStatus = getCookie('oddm_noContactDelivery');
 var beforeNoContactDeliveryStatusVal = '';
 if(beforeNoContactDeliveryStatus == "true"){
 $('#slideThree').prop('checked', true);
 beforeNoContactDeliveryStatusVal = "Yes";
 }
 if(beforeSelectedType == 'pickup'){
 var beforeSelectedPickupId = getCookie('oddm_pickup_id');
 var beforeSelectedPickupDate = getCookie('oddm_pickup_date');
 var beforeSelectedPickupTime = getCookie('oddm_pickup_time');
 var beforeSelectedPickupComment = getCookie('oddm_pickup_comment');
 beforeSelectedDate = beforeSelectedPickupDate;
 if(beforeSelectedPickupComment == 'undefined'){
 beforeSelectedPickupComment = '';
 }
 $('#store_pickup_sec input.ddm-config[id='+beforeSelectedPickupId+']').attr('checked',true);
 $('#store_pickup_sec input.ddm-config[id='+beforeSelectedPickupId+']').trigger('change');
 if(beforeSelectedPickupId != null && beforeSelectedPickupDate != null){
 $('#dds_calendar_notes').val(beforeSelectedPickupComment);
 setCookie({'oddm_pickup_comment':beforeSelectedPickupComment},7);
 attributes["Location Id"] = beforeSelectedPickupId;
 attributes["Location Name"] = $('#location_name').val();
 attributes["Location Address"] = $('#location_address').val();
 attributes["Delivery Date"] = beforeSelectedPickupDate;
 attributes["Delivery Time"] = beforeSelectedPickupTime;
 attributes["Delivery Day"] = selectedDayName;
 attributes["Additional Comments"] = beforeSelectedPickupComment;
 attributes["No-contact Delivery"] = beforeNoContactDeliveryStatusVal;
 updateCartAttributes(attributes);
 }else{
 $("input[type=radio][name=ddm_sp_location]:first").trigger('click');
 }
 $('.ddm-loader').hide();
 }
 if(beforeSelectedType == 'local_delivery'){
 var beforeSelectedLocalZipcode = getCookie('oddm_local_delivery_zipcode');
 var beforeSelectedLocalDate = getCookie('oddm_local_delivery_date');
 var beforeSelectedLocalTime = getCookie('oddm_local_delivery_time');
 var beforeSelectedLocalComment = getCookie('oddm_local_delivery_comment');
 if(beforeSelectedLocalComment == 'undefined'){
 beforeSelectedLocalComment = '';
 }
 if(beforeSelectedLocalZipcode != null && beforeSelectedLocalZipcode != ''){
 $('#ddm_zipcode').val(beforeSelectedLocalZipcode);
 beforeSelectedDate = beforeSelectedLocalDate;
 $('.oddm-zipcode-search-icon').trigger('click');
 if(beforeSelectedLocalDate != null && beforeSelectedLocalDate != ''){
 $('#dds_calendar_notes').val(beforeSelectedLocalComment);
 setCookie({'oddm_local_delivery_comment':beforeSelectedLocalComment},7);
 attributes["Delivery Date"] = beforeSelectedLocalDate;
 attributes["Delivery Time"] = beforeSelectedLocalTime;
 attributes["Delivery Day"] = selectedDayName; // Krishna
 attributes["Location Id"] = oddm_slected_loc_id;
 attributes["Additional Comments"] = beforeSelectedLocalComment;
 }else{
 if(parseInt(preselected_date_status)){
 attributes["Delivery Date"] = $('#dds_calendar').val();
 attributes["Delivery Time"] = $('.slot-time-list option:selected').val();
 attributes["Delivery Day"] = selectedDayName; // Krishna
 attributes["Location Id"] = oddm_slected_loc_id;
 }
 }
 attributes["No-contact Delivery"] = beforeNoContactDeliveryStatusVal;
 }
 updateCartAttributes(attributes);
 $('.ddm-loader').hide();
 }
 }
 }
}
function ddmGetLocalAndPickupConfig(req_data){
 $('.ddm-loader').show();
 $.ajax({
 type : 'post',
 url : appjetty_ddm_url+'get-calendar-config',
 data : req_data,
 dataType : 'json',
 async:false,
 success:function(resp){
 if(typeof resp.zipcode_found != 'undefined' && resp.zipcode_found == false) {
 $('.ddm_local_del_error').html(local_del_error_msg).css('display','block');
 $('.ddm-loader').hide();
 enabledClickOnDeliveryIcon();
 return false;
 }
 $("[name*=" + btn_name_attribute + "]").removeAttr("disabled");
 ddmSetCalConfig(resp,del_type);
 oddm_slected_loc_id = resp.location_id;
 setCookie({
 'oddm_location_id' : oddm_slected_loc_id
 },7);
 attributes = {};
 attributes["Location Id"] = oddm_slected_loc_id;
 updateCartAttributes(attributes);
 var ConfigPreselectedDate = $('#dds_calendar').val();
 if(ConfigPreselectedDate != ''){
 var ConfigPreselectedTime = $('.slot-time-list option:selected').val();
 if(typeof ConfigPreselectedTime == 'undefined'){
 ConfigPreselectedTime = '';
 }
 attributes["Delivery Date"] = ConfigPreselectedDate;
 attributes["Delivery Time"] = ConfigPreselectedTime;
 attributes["Delivery Day"] = selectedDayName; // Krishna
 attributes["Location Id"] = oddm_slected_loc_id;
 if(window.Shopify.shop == "zipcode-testing.myshopify.com" || window.Shopify.shop == "incroast.myshopify.com"){
 setTimeout(function(){
 updateCartAttributes(attributes)
 },1000);
 }else{
 updateCartAttributes(attributes)
 }
 }
 }
 });
}
function ddmGetShippingConfig(d_type){
 $('.ddm-loader').show();
 disabledClickOnDeliveryIcon();
 $.ajax({
 type : 'post',
 url : appjetty_ddm_url+'get-shipping-config',
 data : { 'domain':shop_domain },
 dataType : 'json',
 async:false,
 success:function(resp){
 ddmSetCalConfig(resp,d_type);
 if(parseInt(preselected_date_status)){
 attributes = {};
 var shippingPreselectedDate = $('#dds_calendar').val();
 var shippingPreselectedTime = $('.slot-time-list option:selected').val();
 if(typeof shippingPreselectedTime == 'undefined'){
 shippingPreselectedTime = '';
 }
 attributes["Delivery Date"] = shippingPreselectedDate;
 attributes["Delivery Time"] = shippingPreselectedTime;
 attributes["Delivery Day"] = selectedDayName; // Krishna
 updateCartAttributes(attributes);
 }
 }
 });
}
function ddmSetCalConfig(resp,d_type){
 weekend_index_array = [];
 closedDays = resp.ClosedDays_array;
 slot_limt_value = resp.slot_limt_value;
 processing_period = resp.processing_period;
 day_wise_processing_period = resp.day_wise_processing_period;
 process_on_nonworking_days = resp.process_on_nonworking_days;
 weekly_process_time = resp.day_wise_process_time;
 blackout_days_array = resp.blackout_days_array;
 blacklist_date_array = resp.blacklist_date_array;
 timezone = resp.timezone;
 max_delivery_period = resp.max_del_days;
 active_preparation_time = resp.active_preparation_time;
 set_preparation_time = resp.set_preparation_time;
 hour_wise_time = resp.hour_wise_time;
 $.each(weekday,function(i,day){
 window[day+"_order_limit"] = resp.order_limit[day];
 window[day+"_limit_checkbox_status"] = resp.limit_checkbox_status[day];
 window[day+"_slot"] = resp.days_slots[day];
 });
 $("#dds_calendar").val('');
 $('.ddm_select_box.slot-listing').hide();
 $('#dds_calendar_notes').val('');
 ddmConfigCal();
 $('.dds-notes').html(eval(d_type+"_note"));
 setTimeout(() => {
 $('.cart-container').show('slow');
 $('.ddm-loader').hide();
 enabledClickOnDeliveryIcon();
 }, 600);
}
function ddmConfigCal(){
 for (var i = 0; i < closedDays.length; i++) {
 weekend_index_array.push(eval(closedDays[i]));
 }
 if(timezone){
 ddm_date_obj = selected_timezone_date();
 current_day_index = ddm_date_obj.getDay();
 var new_d = selected_timezone_date();
 const date = selected_timezone_date();
 }
 if(is_processing_set_for_prod == false && day_wise_processing_period == 1){
 processing_period = weekly_process_time[new_d.getDay()];
 }
 if(window.Shopify.shop == 'lotusbakeries.myshopify.com'){
 weekly_process_time = [15,14,13,19,18,17,16];
 processing_period = weekly_process_time[new_d.getDay()];
 }
 cutoff_time_1 = convertTime12to24($.trim(slot_limt_value[current_day_index]));
 new_d.setHours(parseInt(cutoff_time_1.split(':')[0]));
 new_d.setMinutes(parseInt(cutoff_time_1.split(':')[1]));
 date_string = DateValue(ddm_date_obj,'d-m-y');
 default_selected_date = date_string.toString();
 if ($.inArray(default_selected_date, blacklist_date_array) != -1){
 }else if (jQuery.inArray(ddm_date_obj.getDay(), weekend_index_array) != -1) {
 if ($.inArray(date_string, blacklist_date_array) == -1 && new_d < ddm_date_obj && process_on_nonworking_days==1){
 processing_period = processing_period + 1;
 is_todays_cutoff = 1;
 }
 }else {
 if (new_d < ddm_date_obj) {
 processing_period = processing_period + 1;
 is_todays_cutoff = 1;
 }
 }
 for (i = 0; i < 7; i++) {
 this["slot_"+i] = $.parseHTML(eval(weekday[i]+ '_slot'));
 }
 for (i = 0; i < 7; i++) {
 $(eval('slot_' + i)).each(function(index, value) {
 var arrayOfStrings = $(this).text().split('-');
 final_val = time_format == 24 ? convertTime12to24($.trim(arrayOfStrings[0])) + ' - ' + convertTime12to24($.trim(arrayOfStrings[1])) : $.trim(arrayOfStrings[0]) + ' - ' + $.trim(arrayOfStrings[1]);
 $(this).val(final_val);
 $(this).text(final_val);
 });
 sunday_slot = slot_0;monday_slot = slot_1;tuesday_slot = slot_2;wednesday_slot = slot_3;thursday_slot = slot_4;friday_slot = slot_5;saturday_slot = slot_6;
 }
 ddm_date_format();
 if(!parseInt(preselected_date_status)){
 slotshowing(default_selected_date,date_object);
 }else{
 var resp = [];
 resp['hideslot_array'] = '';
 checkSlotAvailable(default_selected_date,date_object,resp);
 }
 if(closedDays.length < 7){
 ProcessingAndMaxPeriod();
 }
 ddm_date_format();
 DDM_Calendar_view.init();
}
function updateCookieData(del_type){
 var ODDMselectedDate = $('#dds_calendar').val();
 var ODDMselectedTime = $('.slot-time-list option:selected').val();
 if(typeof ODDMselectedTime == 'undefined'){
 ODDMselectedTime = '';
 }
 var ODDMadditionComment = $('#dds_calendar_notes').val();
 if(typeof ODDMadditionComment == 'undefined'){
 ODDMadditionComment = '';
 }
 var noContactDelivery = $("#slideThree").is(':checked');
 if(typeof noContactDelivery == 'undefined'){
 noContactDelivery = '';
 }
 if(del_type == 'pickup'){
 var ODDMpickupId = $('input[name="ddm_sp_location"]:checked').val();
 setCookie({
 'oddm_pickup_id' : ODDMpickupId,
 'oddm_pickup_date' : ODDMselectedDate,
 'oddm_pickup_time' : ODDMselectedTime,
 'oddm_pickup_comment' : ODDMadditionComment,
 'oddm_noContactDelivery' : noContactDelivery
 },7);
 }else if(del_type == 'local_delivery'){
 var ODDMlocationZipcode = $('#ddm_zipcode').val();
 setCookie({
 'oddm_local_delivery_zipcode' : ODDMlocationZipcode,
 'oddm_local_delivery_date' : ODDMselectedDate,
 'oddm_local_delivery_time' : ODDMselectedTime,
 'oddm_local_delivery_comment' : ODDMadditionComment,
 'oddm_noContactDelivery' : noContactDelivery
 },7);
 }else if(del_type == 'shipping'){
 setCookie({
 'oddm_shipping_date' : ODDMselectedDate,
 'oddm_shipping_time' : ODDMselectedTime,
 'oddm_shipping_comment' : ODDMadditionComment,
 'oddm_noContactDelivery' : noContactDelivery
 },7);
 }
}
function ddmSetSelectedTab(){
 $('.oddm-tabs-wrapper .tab-menu-wrapper ul li').each(function(){
 var $this = $(this);
 var d_type = $this.data('delivery-type');
 $parent = $this.children('.delivery-type');
 $this.hasClass('selected-type') ? ddmSelectedTabHoverStyle($this,d_type,false,$parent) : ddmSelectedTabStyle($this,$parent,d_type);
 $this.find('label').hover(function(){
 if(!$this.hasClass('selected-type')){
 ddmSelectedTabHoverStyle($(this),d_type,true);
 }
 },function(){
 if(!$this.hasClass('selected-type')){
 ddmSelectedTabStyle($this,$this,d_type);
 }
 });
 });
}
function ddmSelectedTabHoverStyle($this,d_type,on_hover=false,$parent=null){
 element = on_hover ? $this : $this.find('label');
 $parent = on_hover ? $this : $parent;
 element.css("background-color", eval(d_type+"_hover_bg_color"));
 $parent.find('svg').css('fill', eval(d_type+"_hover_icon_color"));
 $parent.find('.ddm-tab-title').css("color", eval(d_type+"_hover_icon_color"));
}
function ddmSelectedTabStyle($this,$parent,d_type){
 $this.find('label').css("background-color", eval(d_type+"_bg_color"));
 $parent.find('svg').css('fill', eval(d_type+"_icon_color"));
 $parent.find('.ddm-tab-title').css("color", eval(d_type+"_icon_color"));
}
function ddmInitProdCal(){
 if(prod_config_status == 'specific_prod'){
 $.ajax({
 type : 'post',
 url : appjetty_ddm_url+'/appjetty-ddm-check-widget',
 data : { 'pid' : product_id,'domain':shop_domain },
 dataType : 'json',
 async:false,
 success:function(resp){
 prodBlackoutDate = JSON.parse(resp.blackout_dates);
 visibility_status = resp.visibility;
 blackout_days_array = prodBlackoutDate != null ? prodBlackoutDate.map(function (el) {return el.trim();}) : resp.additional_config_status ? [] : blackout_days_array;
 if(window.Shopify.shop == 'humidhouse.myshopify.com'){
 blacklist_date_array = blackout_days_array;
 }
 closedDays = resp.delivery_days.length > 0 ? resp.delivery_days : resp.additional_config_status ? [] : closedDays;
 if(resp.processing_period != null){
 processing_period = resp.processing_period;
 is_processing_set_for_prod = true;
 }else if(resp.additional_config_status){
 processing_period = 0;
 is_processing_set_for_prod = true;
 }
 max_delivery_period = resp.max_delivery_period != null ? resp.max_delivery_period : resp.additional_config_status ? 0 : max_delivery_period;
 slot_limt_value = typeof resp.slot_limt_value != 'undefined' ? resp.slot_limt_value : resp.additional_config_status ? ["","","","","","",""] : slot_limt_value;
 for(let index in resp.days_slots){
 window[index+"_slot"] = resp.days_slots[index];
 }
 active_preparation_time = typeof resp.active_preparation_time != 'undefined' ? resp.active_preparation_time : active_preparation_time;
 set_preparation_time = typeof resp.set_preparation_time != 'undefined' ? resp.set_preparation_time : set_preparation_time;
 hour_wise_time = typeof resp.hour_wise_time != 'undefined' ? resp.hour_wise_time : hour_wise_time;
 }
 });
 }
}
function ddmLoadHtml(){
 if(ddm_display_at == 'product'){
 if(template_name == 'product'){
 $('.ddm_calendar').prepend(dds_calendar);
 var formIdAttr = $('.ddm_calendar').attr('form_id');
 if (typeof formIdAttr !== 'undefined' && formIdAttr !== false) {
 $(".ddm_calendar input,.ddm_calendar select,.ddm_calendar textarea").attr("form",formIdAttr); // when set div outside form tag
 }
 }
 }else{
 if($('.appjetty-ddm-cart-cal').length > 0){
 if(template_name == 'cart' || window.Shopify.shop == 'lotusbakeries.myshopify.com' || window.Shopify.shop == 'the-quirky-oven.myshopify.com' || window.Shopify.shop == 'bloomtimegifts.myshopify.com' || window.Shopify.shop == 'projects-promotion-2-0.myshopify.com' || window.Shopify.shop == 'pandanusbespokefoodboards.myshopify.com'){
 $('.appjetty-ddm-cart-cal').append(dds_calendar);
 }
 }else{
 if(window.Shopify.shop != 'glorist-flower-shop.myshopify.com'){
 $('[name="' + btn_name_attribute + '"]').parent().before(dds_calendar);
 if($('[name="' + btn_name_attribute + '"]').length > 1 && template_name == 'cart'){
 $('cart-notification').find('.appjetty-ddm-cart-box').remove('.appjetty-ddm-cart-box');
 }
 }
 }
 if($('.oddm-tabs-wrapper ul li').length > 1){
 if(beforeSelectedType != null){
 $('.oddm-tabs-wrapper ul li').show();
 $('.oddm-tabs-wrapper [data-delivery-type='+beforeSelectedType+']').addClass('selected-type');
 $('.oddm-tabs-wrapper [data-delivery-type='+beforeSelectedType+'] .delivery-type').attr('checked',true);
 }else{
 $('.oddm-tabs-wrapper ul li:first').addClass('selected-type');
 $('.oddm-tabs-wrapper ul li .delivery-type:first').attr('checked',true);
 $('.oddm-tabs-wrapper ul li').show();
 }
 }else{
 $('.oddm-tabs-wrapper ul li').hide();
 $('.oddm-tabs-wrapper ul li:first').addClass('selected-type');
 $('.oddm-tabs-wrapper ul li .delivery-type:first').attr('checked',true);
 beforeSelectedType = $('.selected-type').data('delivery-type');
 }
 del_type = $('.selected-type').data('delivery-type');
 if(typeof del_type == 'undefined'){
 del_type = 'shipping';
 }
 if(del_type != 'shipping'){
 $('.cart-container').hide();
 $('.delivery-container').html(eval(del_type+"_html"));
 }
 ddmSetSelectedTab();
 }
 if (ncd_status == 1) {
 if (ncd_product_page_status == 1) {
 $('.ddm_calendar').append(prod_tooltip_content);
 }
 $('.appjetty-ddm-cart-box').append(cart_tooltip_content);
 }
 if (required_date_section == 1 && ddm_display_at == 'product'){
 var ddm_value = $('#dds_calendar').val();
 if(window.Shopify.shop == 'pretty-street-flowers.myshopify.com'){
 checkForCustomFields();
 }else if(typeof ddm_value == 'undefined' || ddm_value == null || ddm_value == ''){
 $("[name*=" + btn_name_attribute + "]").attr("disabled", true);
 }
 }
 addGoogleMapJs();
 current_lat = parseFloat(current_lat);
 current_lng = parseFloat(current_lng);
 function initMap() {
 const uluru = { lat: current_lat, lng: current_lng };
 const map = new google.maps.Map(document.getElementById("oddm-storepickup-map"), {
 zoom: 16,
 center: uluru,
 });
 const marker = new google.maps.Marker({
 position: uluru,
 map: map,
 });
 }
 window.initMap = initMap;
}
function checkForCustomFields(submitted=false){
 var ddm_sender_value = $('#ddm_sender').val();
 var ddm_receiver_value = $('#ddm_receiver').val();
 var ddm_calendar_value = $('#dds_calendar').val();
 if (typeof ddm_calendar_value == 'undefined' || ddm_calendar_value == null || ddm_calendar_value == '' || typeof ddm_sender_value == 'undefined' || ddm_sender_value == null || ddm_sender_value == '' || typeof ddm_receiver_value == 'undefined' || ddm_receiver_value == null || ddm_receiver_value == '') {
 $("[name*=" + btn_name_attribute + "]").attr("disabled", true);
 if (submitted) {
 $('#ddm_sender,#ddm_receiver').css('border-color', error_msg_color);
 }
 } else {
 $("[name*=" + btn_name_attribute + "]").removeAttr("disabled");
 $('#ddm_sender,#ddm_receiver').css('border-color', '#ccc');
 }
}
function selected_timezone_date(){
 return date_obj = (timezone) ? (new Date(new Date().toLocaleString("en-US", {timeZone: timezone}))) : new Date();
}
function DateValue(date_obj,date_format = 'y-m-d') {
 var date = date_obj.getDate();
 var month = date_obj.getMonth() + 1;
 var year = date_obj.getFullYear();
 date = date < 10 ? "0" + date : date;
 month = month < 10 ? "0" + month : month;
 if(date_format == 'd-m-y'){
 return formated_date_string = date + '-' + month + '-' + year;
 }else{
 return formated_date_string = year + '-' + month + '-' + date;
 }
}
function ProcessingAndMaxPeriod() {
 if(process_on_nonworking_days==1){
 preprocessing_period = processing_period;
 }
 if(day_wise_processing_period == 0){
 for (var i = 0; i <= processing_period; i++) {
 var processing_tz_date = selected_timezone_date();
 const copy = processing_tz_date;
 copy.setDate(processing_tz_date.getDate() + i);
 var date_string = DateValue(copy,'d-m-y');
 default_selected_date = date_string.toString();
 var new_date_string = DateValue(copy);
 if($.inArray(date_string, blacklist_date_array) != -1){
 processing_period = processing_period + 1;
 if(process_on_nonworking_days==1){
 preprocessing_period = preprocessing_period + 1;
 }
 }else if(jQuery.inArray(copy.getDay(), weekend_index_array) != -1) {
 if(process_on_nonworking_days==1){
 if ($.inArray(date_string, blacklist_date_array) == -1 && preprocessing_period <= i){
 processing_period = processing_period + 1;
 }
 }else{
 if ($.inArray(date_string, blacklist_date_array) == -1){
 processing_period = processing_period + 1;
 }
 }
 }
 if(i == processing_period-1 || processing_period == 0){
 new_default_selected_date = new_date_string.toString();
 }
 }
 }else{
 var processing_tz_date = selected_timezone_date();
 const copy = processing_tz_date;
 copy.setDate(processing_tz_date.getDate() + processing_period - 1);
 var date_string = DateValue(copy,'d-m-y');
 var new_date_string = DateValue(copy);
 new_default_selected_date = new_date_string.toString();
 }
 for (var i = 0; i < max_delivery_period; i++) {
 const event = new Date(new_default_selected_date);
 if (processing_period != 0) {
 event.setDate(event.getDate() + 1);
 event.setDate(event.getDate() + i);
 }else{
 if (i == 0) {
 event.setDate(event.getDate());
 } else {
 event.setDate(event.getDate() + 1);
 event.setDate(event.getDate() + i);
 }
 }
 var date_string = DateValue(event,'d-m-y');
 if ($.inArray(date_string, blackout_days_array) != -1){
 max_delivery_period = max_delivery_period + 1;
 }else if(jQuery.inArray(event.getDay(), weekend_index_array) != -1) {
 if($.inArray(date_string, blackout_days_array) == -1){
 max_delivery_period = max_delivery_period + 1;
 }
 }else{
 if (flag == 0) {
 default_selected_date = date_string;
 flag = 1;
 }
 }
 }
}
function ddm_date_format() {
 dateArr = default_selected_date.split('-');
 new_date_format = dateArr[2] + '-' + dateArr[1] + '-' + dateArr[0];
 if (date_format == 'm-d-Y') {
 default_selected_date = dateArr[1] + '-' + dateArr[0] + '-' + dateArr[2];
 }else if (date_format == 'Y-m-d') {
 default_selected_date = dateArr[2] + '-' + dateArr[1] + '-' + dateArr[0];
 }else if (date_format == 'm/d/Y') {
 default_selected_date = dateArr[1] + '/' + dateArr[0] + '/' + dateArr[2];
 }else if (date_format == 'Y/m/d') {
 default_selected_date = dateArr[2] + '/' + dateArr[1] + '/' + dateArr[0];
 }
 date_object = new Date(new_date_format);
}
function closedDays_function(day) {
 for (var i = 0; i < closedDays.length; i++) {
 if (day == eval(closedDays[i])) {
 return [false];
 }
 }
}
function flatpickr_date_formate(dateStr,date_format) {
 date_obj = flatpickr.parseDate(dateStr, date_format);
 selectedDayName = dayName[date_obj.getDay()];
 formated_date = flatpickr.formatDate(new Date(date_obj), date_format);
 return slotshowing(formated_date,date_obj);
}
function slotshowing(formated_date,date_obj) {
 var current_day_limit_checkbox_status = eval(weekday[date_obj.getDay()]+'_limit_checkbox_status');
 var current_day_order_limit = eval(weekday[date_obj.getDay()]+'_order_limit');
 using_limit = current_day_limit_checkbox_status == 1 ? true : current_day_order_limit > 0 ? true : false;
 $('span.error_msg').remove();
 $('#dds_calendar').css('border-color', '');
 if(using_limit){
 var db_date_string = DateValue(date_obj);
 var ajax_data = {'selected_delivery_date': db_date_string,'domain':shop_domain}
 if (ddm_display_at == 'product' && template_name =='product') {
 ajax_data = {
 'product_id': product_id,
 'collection_id': collection_id,
 'selected_delivery_date': db_date_string,
 'domain': shop_domain
 }
 }else{
 var d_type = getCookie('oddm_del_type');
 ajax_data['delivery_type'] = d_type;
 ajax_data['location_id'] = d_type == 'local_delivery' ? getCookie('oddm_location_id') : d_type == 'pickup' ? $('#location_id').val() : null;
 }
 $.ajax({
 type: 'post',
 url : appjetty_ddm_url+'/appjetty-ddm',
 data: ajax_data,
 async: false,
 success: function(resp) {
 if(ddm_display_at == 'product' && window.Shopify.shop == 'pretty-street-flowers.myshopify.com'){
 checkForCustomFields();
 }else if ($('#dds_calendar').val() != '') {
 $("[name*=" + btn_name_attribute + "]").removeAttr("disabled");
 }
 checkSlotAvailable(formated_date,date_obj,resp);
 }
 });
 }else{
 if(ddm_display_at == 'product' && window.Shopify.shop == 'pretty-street-flowers.myshopify.com'){
 checkForCustomFields();
 }else if ($('#dds_calendar').val() != '') {
 $("[name*=" + btn_name_attribute + "]").removeAttr("disabled");
 }
 var resp = [];
 resp['hideslot_array'] = '';
 checkSlotAvailable(formated_date,date_obj,resp);
 }
}
function checkSlotAvailable(formated_date,date_obj,resp){
 $('#time-slot-options').html(eval(weekday[date_obj.getDay()]+ '_slot'));
 var selected_date_string = DateValue(date_obj,'d-m-y');
 var todaysDate = selected_timezone_date(); // Time slots gets hidden for different timezone issue solved (https://drive.google.com/file/d/1bTJCU6Bh9hJx0xfaoVS5S4HkvifbOhjy/view)
 var today_date_string = DateValue(todaysDate,'d-m-y');
 var slot_str = '',cutoff_flag = 0;
 $('#time-slot-options > option').each(function() {
 if(selected_date_string == today_date_string){
 var date_object = selected_timezone_date();
 if(active_preparation_time == 1 && set_preparation_time == false){
 processing_period = 0;
 before_obj = date_object.getDate();
 date_object.setTime(date_object.getTime() + (hour_wise_time * 60 * 1000));
 after_obj = date_object.getDate();
 if(before_obj != after_obj ){
 processing_period = processing_period + 1;
 }
 if(is_todays_cutoff == 1 && processing_period == 0){
 if($.inArray(date_string, blacklist_date_array) == -1){
 processing_period = processing_period + 1;
 }
 }
 }
 var hours_val = date_object.getHours();
 hours_val = (hours_val < 10) ? "0" + hours_val : hours_val;
 var m = date_object.getMinutes();
 m = m < 10 ? "0" + m : m;
 var time = hours_val + ":" + m;
 var arrayOfStrings = $(this).val().split('-');
 var starting_date = time_format == 12 ? convertTime12to24($.trim(arrayOfStrings[0])) : $.trim(arrayOfStrings[0]);
 var ending_date = time_format == 12 ? convertTime12to24($.trim(arrayOfStrings[1])) : $.trim(arrayOfStrings[1]);
 if(hide_time_slot_based_on == 'start_time'){
 time >= starting_date ? $(this).attr('hidden', 'true') : '';
 }else{
 time >= ending_date ? $(this).attr('hidden', 'true') : '';
 }
 }else {
 $(this).removeAttr('hidden');
 }
 if ($(this).val() != '12:00 AM - 12:00 AM') {
 cutoff_flag = 1;
 }
 if (jQuery.inArray($(this).val(), resp.hideslot_array) != -1) {
 $(this).attr('hidden', 'true');
 }
 if ($(this).attr('hidden') != 'hidden') {
 slot_str += '<option value="' + $(this).val() + '">' + $(this).val() + '</option>';
 }
 });
 if (slot_str == '' && cutoff_flag == 1 && is_onload == 1 ) {
 var today_date = new Date();
 if(jQuery.inArray(today_date.getDay(), weekend_index_array) != -1){
 }else{
 if(is_todays_cutoff == 0 && processing_period == 0){
 if($.inArray(date_string, blacklist_date_array) == -1){
 processing_period = processing_period + 1;
 }
 }
 }
 }
 $('#time-slot-options').html(slot_str);
 $('.ddm_select_box.date-picker-wrap .lable_dds-date-wrapper').addClass('label-right');
 $('.ddm_select_box.slot-listing').hide();
 $('.lable_dds-date-wrapper').removeClass('slot_active');
 if($('#time-slot-options option').length > 0 && $('#dds_calendar').val() != '') {
 $('.lable_dds-date-wrapper').addClass('slot_active');
 $('.ddm_select_box.date-picker-wrap .lable_dds-date-wrapper').removeClass('label-right');
 $('.ddm_select_box.slot-listing').css('display', 'block');
 $('.ddm-slot').removeClass('ddm-slot-data');
 }
 if(ddm_display_at =='cart' && !is_onload){
 var delivery_time = $('.slot-time-list option:selected').val();
 if (typeof delivery_time == 'undefined' || $("#dds_calendar").val() == '') {
 delivery_time = '';
 }
 attributes = {};
 attributes["Delivery Date"] = $("#dds_calendar").val();
 attributes["Delivery Time"] = delivery_time;
 attributes["Delivery Day"] = selectedDayName; // Krishna
 updateCartAttributes(attributes);
 }
}
function day_disable(date) {
 if ($.inArray(flatpickr.formatDate(date, "d-m-Y"), blackout_days_array) != -1){
 return [false, '']
 } else {
 var day = date.getDay();
 return closedDays_function(day);
 }
}
function htmlspecialchars(string) {
 return $('<span>').text(string).html();
}
function setDeliveryTypeAttribute(d_type=''){
 var location_id = location_name = location_address = s_delivery_date = s_delivery_time = s_add_comments = '';
 d_type = d_type == 'pickup' ? 'Store Pickup' : d_type == 'local_delivery' ? 'Local Delivery' : 'Shipping';
 attributes = {};
 attributes["DDM Delivery Type"] = d_type;
 attributes["Delivery Date"] = '';
 attributes["Delivery Time"] = '';
 attributes["Delivery Day"] = ''; // Krishna
 attributes["Additional Comments"] = '';
 attributes["Location Id"] = '';
 attributes["Location Name"] = '';
 attributes["Location Address"] = '';
 updateCartAttributes(attributes);
}
function handleErrors(){
 var has_errors = false;
 if(required_date_section == 1 && window.location.pathname != "/account/addresses" && $("#dds_calendar").val() == '' && $('#dds_calendar').length > 0){
 if($('.appjetty-ddm-error').length > 0){
 $('.appjetty-ddm-error').html('<span class="error_msg" style="margin-bottom: 5px;color: '+error_msg_color+';">'+htmlspecialchars(error_msg)+'</span>');
 }else if(!$('*').find('span.error_msg').length > 0){
 $('form').find('[name="'+btn_name_attribute+'"]').parent().prepend('<span class="error_msg" style="margin-bottom: 5px;color: '+error_msg_color+';">'+htmlspecialchars(error_msg)+'</span>');
 $('#dds_calendar').css('border-color',error_msg_color);
 }
 has_errors = true;
 }
 return has_errors;
}
function disabledClickOnDeliveryIcon(){
 if($('.oddm-tabs-wrapper .oddm_delivery_method').length > 1){
 $('.oddm-tabs-wrapper').css('cursor','not-allowed');
 $('.oddm-tabs-wrapper li').css('pointer-events','none');
 }
}
function enabledClickOnDeliveryIcon(){
 if($('.oddm-tabs-wrapper .oddm_delivery_method').length > 1){
 $('.oddm-tabs-wrapper').css('cursor','unset');
 $('.oddm-tabs-wrapper li').css('pointer-events','unset');
 }
}
function disableCheckoutButton(btn_name_attribute){
 var timer_array = [100,400,800,1000,2000,4000];
 $.each(timer_array, function( index, timer ) {
 setTimeout(function () {
 if($('#dds_calendar').val() == ''){
 $("[name*="+btn_name_attribute+"]" ).attr("disabled", true);
 }
 },timer);
 });
}
function updateCartAttributes(attributes){
 if(ddm_display_at != 'cart'){
 attributes = {};
 attributes["DDM Delivery Type"] = '';
 attributes["Delivery Date"] = '';
 attributes["Delivery Time"] = '';
 attributes["Delivery Day"] = ''; // Krishna
 attributes["Additional Comments"] = '';
 attributes["Location Id"] = '';
 attributes["Location Name"] = '';
 attributes["Location Address"] = '';
 }
 var totalAttributes = Object.keys(attributes).length;
 var attributeString = '';
 var i = 1;
 $.each(attributes,function(key,value){
 if(key=='Delivery Day'){
 if(!addDayName){
 value = '';
 }
 }
 attributeString+='attributes['+key+']='+value;
 if(totalAttributes != i){
 attributeString+="&";
 }
 i++;
 });
 jQuery.post('/cart/update.js', attributeString, null, "json");
}
function setCookie(data,expiry){
 var expires = new Date();
 expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
 $.each(data,function(key,value){
 document.cookie = key + '=' + value + ';expires=' + expires.toUTCString()+';path=/';
 });
}
function getCookie(key) {
 var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
 return keyValue ? keyValue[2] : null;
}
$('[data-display="none"]').hide();
function readLocationDataAndReint(){ // do not remove this function
 var beforeSelectedLocalZipcode = getCookie('oddm_local_delivery_zipcode');
 var beforeSelectedLocalDate = getCookie('oddm_local_delivery_date');
 var beforeSelectedLocalTime = getCookie('oddm_local_delivery_time');
 var beforeSelectedLocalComment = getCookie('oddm_local_delivery_comment');
 if(beforeSelectedLocalComment == 'undefined'){
 beforeSelectedLocalComment = '';
 }
 if(beforeSelectedLocalZipcode != null && beforeSelectedLocalZipcode != ''){
 $('#ddm_zipcode').val(beforeSelectedLocalZipcode);
 beforeSelectedDate = beforeSelectedLocalDate;
 $('.oddm-zipcode-search-icon').trigger('click');
 if(beforeSelectedLocalDate != null && beforeSelectedLocalDate != ''){
 $('#dds_calendar_notes').val(beforeSelectedLocalComment);
 setCookie({'oddm_local_delivery_comment':beforeSelectedLocalComment},7);
 attributes["Delivery Date"] = beforeSelectedLocalDate;
 attributes["Delivery Time"] = beforeSelectedLocalTime;
 attributes["Delivery Day"] = selectedDayName; // Krishna
 attributes["Location Id"] = oddm_slected_loc_id;
 attributes["Additional Comments"] = beforeSelectedLocalComment;
 }else{
 if(parseInt(preselected_date_status)){
 attributes["Delivery Date"] = $('#dds_calendar').val();
 attributes["Delivery Time"] = $('.slot-time-list option:selected').val();
 attributes["Delivery Day"] = selectedDayName; // Krishna
 attributes["Location Id"] = oddm_slected_loc_id;
 }
 }
 }
 updateCartAttributes(attributes);
}
function updateProductProperties(date){
 if(is_store_using_shipping_rate == 1){
 $.ajax({
 type: 'GET',
 url: '/cart.js',
 cache: false,
 async: false,
 dataType: 'json',
 success: function(cart) {
 cart['items'].forEach((element) => {
 var properties = {};
 $.each(element.properties, function(i,e){
 properties[i] = e;
 });
 properties['_appjetty_delivery_date'] = date;
 properties['_appjetty_delivery_type'] = getCookie('oddm_del_type');
 $.ajax({
 url: "/cart/change.js",
 type: "POST",
 async: false,
 data: { 'id' : element.key, 'quantity' : element.quantity, 'properties' : properties },
 dataType: 'json',
 success: function(){ },
 error: function(error) { console.log(error); }
 });
 });
 }
 });
 }
}
if(window.Shopify.shop == "appjetty-artistic-blossoms.myshopify.com" || window.Shopify.shop == "de-cheezy.myshopify.com" || window.Shopify.shop == 'zipcode-testing-now.myshopify.com' || window.Shopify.shop == 'our-road-to-nowhere.myshopify.com'){
 var timearrays=['500','1000','2000'];
 $.each(timearrays, function( index, value ) {
 setTimeout(function() {
 updateCartProductProperties($("#dds_calendar").val(),$("#time-slot-options").val(),$("#dds_calendar_notes").val());
 },value);
 });
 $(document).on("change","#dds_calendar, #time-slot-options, #dds_calendar_notes",function(){
 updateCartProductProperties($("#dds_calendar").val(),$("#time-slot-options").val(),$("#dds_calendar_notes").val());
 });
}
function updateCartProductProperties(date,time,notes){
 if(template_name == 'cart'){
 var cart_attributes = {
 "Delivery date" : date,
 "Delivery time" : time,
 "Add comments" : notes,
 };
 $.ajax({
 type: 'GET',
 url: '/cart.js',
 cache: false,
 async: false,
 dataType: 'json',
 success: function(cart) {
 cart['items'].forEach((element) => {
 var properties = {};
 $.each(element.properties, function(i,e){
 properties[i] = e;
 });
 var index = 0;
 properties["_"+0] = {};
 $.each(cart_attributes, function(i,e){
 if(e){
 properties["_"+0][index] = {
 "name": i,
 "value": e
 };
 }
 index++;
 });
 $.ajax({
 url: "/cart/change.js",
 type: "POST",
 async: false,
 data: { 'id' : element.key, 'quantity' : element.quantity, 'properties' : properties },
 dataType: 'json',
 success: function(){ },
 error: function(error) { console.log(error); }
 });
 });
 }
 });
 }
}