// $(function () {

//     $("#tabs").tabs();
//     $("#tabsFirst").tabs();
//     $("#tabs1").tabs();
//     $("#tabs2").tabs();

//     jQuery('#mobile-number').keyup(function () {
//         this.value = this.value.replace(/[^0-9\.]/g, '');
//     });

//     campaignId = (getParameterByName('campaignId') === null) ? '' : getParameterByName('campaignId');
//     userId = (getParameterByName('userId') === null) ? '' : getParameterByName('userId');
//     source = (getParameterByName('source') === null) ? '' : getParameterByName('source');

//     utm_source = (getParameterByName('utm_source') === null) ? '' : getParameterByName('utm_source');
//     utm_medium = (getParameterByName('utm_medium') === null) ? '' : getParameterByName('utm_medium');
//     utm_campaign = (getParameterByName('utm_campaign') === null) ? '' : getParameterByName('utm_campaign');
//     utm_term = (getParameterByName('utm_term') === null) ? '' : getParameterByName('utm_term');
//     utm_content = (getParameterByName('utm_content') === null) ? '' : getParameterByName('utm_content');

//     var selectallhrefonpage = document.getElementsByClassName('ss-buttons');

//     for (let i = 0, max = selectallhrefonpage.length; i < max; i++) {
//         if (utm_source === '' || document.getElementsByClassName('ss-buttons')[i].href === 'tel:+1-214-560-0877' || document.getElementsByClassName('ss-buttons')[i].href === 'tel:+91-901-573-1800') {
//             document.getElementsByClassName('ss-buttons')[i].href = document.getElementsByClassName('ss-buttons')[i].href
//         } else if (document.getElementsByClassName('ss-buttons')[i].href === 'https://www.salezshark.com/demo?product=engage' || document.getElementsByClassName('ss-buttons')[i].href === 'https://www.salezshark.com/demo?product=connect' || document.getElementsByClassName('ss-buttons')[i].href === 'https://www.salezshark.com/product/engage?isEtab=true' || document.getElementsByClassName('ss-buttons')[i].href === 'https://www.salezshark.com/contact?product=engage' || document.getElementsByClassName('ss-buttons')[i].href === 'https://www.salezshark.com/contact?product=connect' || document.getElementsByClassName('ss-buttons')[i].href === 'https://www.salezshark.com/pricing?isEtab=true') {
//             document.getElementsByClassName('ss-buttons')[i].href = document.getElementsByClassName('ss-buttons')[i].href + `&utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_term=${utm_term}&utm_content=${utm_content}`;
//         } else {
//             document.getElementsByClassName('ss-buttons')[i].href = document.getElementsByClassName('ss-buttons')[i].href + `?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_term=${utm_term}&utm_content=${utm_content}`;
//         }
//     }

//     // qa link change code must comment while making build for prod
//     // for (let i = 0, max = selectallhrefonpage.length; i < max; i++) {
//     //     if (window.location.hostname === 'qa.salezshark.io') {
//     //         document.getElementsByClassName('ss-buttons')[i].href = document.getElementsByClassName('ss-buttons')[i].href.replace("www.salezshark.com", "qa.salezshark.io/connectplus");
//     //     } else if (window.location.hostname === 'www.salezshark.com') {
//     //         document.getElementsByClassName('ss-buttons')[i].href
//     //     }
//     // }
//     // qa link change code must comment while making build for prod

//     var appendutmstoselectedlinks = document.getElementsByClassName('append-utm');
//     for (let i = 0, maxx = appendutmstoselectedlinks.length; i < maxx; i++) {
//         if (utm_source === '' || document.getElementsByClassName('append-utm')[i].href === 'tel:+1-214-560-0877' || document.getElementsByClassName('append-utm')[i].href === 'tel:+91-901-573-1800') {
//             document.getElementsByClassName('append-utm')[i].href = document.getElementsByClassName('append-utm')[i].href;
//         }
//         else if (document.getElementsByClassName('append-utm')[i].href === 'https://www.salezshark.com/demo?product=engage' || document.getElementsByClassName('append-utm')[i].href === 'https://www.salezshark.com/product/engage?isEtab=true' || document.getElementsByClassName('append-utm')[i].href === 'https://www.salezshark.com/contact?product=engage' || document.getElementsByClassName('append-utm')[i].href === 'https://www.salezshark.com/contact?product=connect' || document.getElementsByClassName('append-utm')[i].href === 'https://www.salezshark.com/pricing?isEtab=true') {
//             document.getElementsByClassName('append-utm')[i].href = document.getElementsByClassName('append-utm')[i].href + `&utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_term=${utm_term}&utm_content=${utm_content}`;
//         } else {
//             document.getElementsByClassName('append-utm')[i].href = document.getElementsByClassName('append-utm')[i].href + `?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_term=${utm_term}&utm_content=${utm_content}`;

//         }
//     }
// });


// function getParameterByName(name, url) {
//     if (!url)
//         url = window.location.href;
//     name = name.replace(/[\[\]]/g, "\\$&");
//     var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//         results = regex.exec(url);
//     if (!results)
//         return null;
//     if (!results[2])
//         return '';
//     return decodeURIComponent(results[2].replace(/\+/g, " "));
// }

// const LeadSource = {
//     Web_Trial: 'Web-Trial',
//     Festive_Offer: 'Festival Offer 2021'
// }

// function generateClientsLead() {

//     var email = jQuery("input[name='your-email']").val();

//     var phone_num = jQuery("#mobile-number").val();

//     var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;

//     var phoneRgex = /^(\+\d{1,3}[- ]?)?\d{7,16}$/;

//     var alpha_num = /^[ A-Za-z0-9_@./]*$/;

//     var first_name = jQuery("input[name='first_name']").val();
//     var last_name = jQuery("input[name='last_name']").val();

//     var utmSource = jQuery("input[name='utm_source']").val();
//     var utmMedium = jQuery("input[name='utm_medium']").val();
//     var utmCampaign = jQuery("input[name='utm_campaign']").val();
//     var utmTerm = jQuery("input[name='utm_term']").val();
//     var utmContent = jQuery("input[name='utm_content']").val();

//     var productId = jQuery("input[name='productId']").val();

//     if (first_name == '') {
//         showError('errorFirstName', 'Please enter name.', 'first_name');
//         return false;
//     } else if (!alpha_num.test(first_name)) {
//         showError('errorFirstName', 'Please enter a valid name.', 'first_name');
//         return false;
//     }

//     if (last_name == '') {
//         showError('errorLastName', 'Please enter last name.', 'last_name');
//         return false;
//     } else if (!alpha_num.test(last_name)) {
//         showError('errorLastName', 'Please enter a valid last name.', 'last_name');
//         return false;
//     }

//     if (email == '') {
//         showError('errorEmailId', 'Please enter email address.', 'your-email');
//         return false;
//     } else if (!regex.test(email)) {
//         showError('errorEmailId', 'Please enter a valid email address.', 'your-email');
//         return false;
//     }

//     // if (jQuery("input[type='text'][name='your-Industry']").val() === '') {
//     //     showError('errorCompanyName', 'Please enter company name.', 'your-Industry');
//     //     return false;
//     // } else if (!alpha_num.test($('#company_name').val())) {
//     //     showError('errorCompanyName', 'Please enter a valid company name.', 'your-Industry');
//     //     return false;
//     // }

//     if (phone_num === '') {
//         showError('errorPhoneNumber', 'Please enter contact number.', 'phone');
//         return false;
//     } else if (!phoneRgex.test(phone_num)) {
//         showError('errorPhoneNumber', 'Please enter a valid contact number.', 'phone');
//         return false;
//     }

//     if (jQuery("#comment").val() == '') {
//         showError('errorComments', 'Please enter comments.', 'comments');
//         return false;
//     } else if (!alpha_num.test($('#comments').val())) {
//         showError('errorComments', 'Please enter a valid comments.', 'comments');
//         return false;
//     }

//     page_for = $("#sourcePage").val();
//     var response_page;
//     var source;
//     response_page = 'https://www.salezshark.com/crm/thank-you-contact';
//     if (page_for == null) {

//         // if (jQuery("#terms").is(':checked') === false) {
//         //     $("#errorTerms").fadeIn(500);
//         //     $("#errorTerms").fadeOut(3000);
//         //     return false;
//         // }

//         if (jQuery("#g-recaptcha-response").val() === '') {
//             $("#errorCatcha").fadeIn(500);
//             $("#errorCatcha").fadeOut(3000);
//             return false;
//         } else {
//             jQuery.ajax({
//                 data: { captcha: jQuery("#g-recaptcha-response").val() },
//                 type: 'POST',
//                 url: 'verifycaptcha',
//                 success: function (data) {
//                     jsoneData = JSON.parse(data);
//                     if (!jsoneData.success) {
//                         //$(".g-recaptcha").after('<span id="errorCatcha" hidden = "hidden" class="erroralert" >Wrong captcha, Please try the captcha again.</span>');
//                         $("#errorCatcha").html('Wrong captcha, Please try the captcha again.');
//                         $("#errorCatcha").fadeIn(500);
//                         $("#errorCatcha").fadeOut(3000);
//                         return false;
//                     }
//                 },
//                 error: function (data) {
//                     // alert("error");
//                 }
//             });
//         }

//         // response_page = 'https://www.salezshark.com/crm/thank-you';
//         response_page = 'https://www.salezshark.com/crm/thank-you-contact'+ '?' + 'email=' + email;; //prod
//         // response_page = 'https://qa.salezshark.io/website/crm/thank-you-contact.php'; //qa


//         addLoaderToSignUsBtn();

//         // if (isEmailAvailableinDB) {
//         //     callSignUpAPI();            
//         // }

//         // jQuery.ajax({
//         //     dataType: 'json',
//         //     async: true,
//         //     contentType: "application/json",
//         //     headers: {
//         //         Accept: "application/json",
//         //         "Access-Control-Allow-Origin": "*",
//         //         'firstName': jQuery("input[type='text'][name='first_name']").val(),
//         //         'lastName': jQuery("input[type='text'][name='last_name']").val(),
//         //         'email': jQuery("input[name='your-email']").val(),
//         //         'phone': jQuery("input[type='text'][name='phone']").val(),
//         //         'mobile': "",
//         //         'company': jQuery("input[type='text'][name='your-Industry']").val(),
//         //         'ownerID': '2905',
//         //         'createdFrom': 'SalezShark',
//         //         'address': jQuery("input[type='text'][name='your-state']").val(),
//         //         'orgID': '1',
//         //         'campaignId': campaignId,
//         //         'userId': '2905',
//         //         'source': source,
//         //         'sourcePage': page_for
//         //     },
//         //     type: 'POST',
//         //     url: 'https://app.salezshark.com/ExternalUtilitiesForDG/rest/service/createTrialUser',
//         //     url: 'https://qa.salezshark.io/ExternalUtilitiesForDG/rest/service/createTrialUser',

//         //     success: function (data) {
//         //         var status_code = data.statusCode;
//         //         var status_message = data.displayMessage;

//         //         if (status_code !== '0') {
//         //             $("#errorEmailId").html(status_message).fadeIn(500);
//         //             $("#errorEmailId").fadeOut(3000);
//         //             return false;
//         //         }

//         //     },
//         //     error: function (data) {
//         //         alert("error");
//         //         return false;
//         //     }
//         // });

//         source = "Web-Trial";

//     } else if (page_for == 'contact') {
//         source = "Web-Contact Us";
//         // addLoaderToContactUsBtn();
//         addLoaderToSignUsBtn();
//     } else if (page_for == 'demo') {
//         source = "Web-Demo";
//         addLoaderToDemoBtn();
//     }


//     jQuery.ajax({
//         dataType: 'json',
//         async: true,
//         headers: {
//             Accept: "application/json",
//             "Access-Control-Allow-Origin": "*",
//             "Content-Type": "application/json",
//             "APIKey": '3ccd60cb-12d1-4efa-a365-cccba3af181f', // prod
//             // "APIKey": '27df28eb-990b-4fa3-abd0-1ab9401bdfa3', // qa
//             "ownerId": 2905, //prod
//             // "ownerId": 2216, //qa
//             "organizationId": 2874 // prod
//             // "organizationId": 2270 // qa
//         },
//         data: JSON.stringify({
//             "ownerId": "2905", //prod
//             // "ownerId": 2216, //qa
//             "organizationId": "2874", // prod
//             // "organizationId": "2270", // qa
//             "firstName": first_name,
//             "lastName": last_name,
//             "email": email,
//             "phone": phone_num,
//             "utmSource": utmSource,
//             "utmMedium": utmMedium,
//             "utmCampaign": utmCampaign,
//             "utmTerm": utmTerm,
//             "utmContent": utmContent,
//             "companyName": jQuery("input[type='text'][name='your-Industry']").val(),
//             "description": jQuery("#comment").val(),
//             "status": "Open Lead",
//             // "source": source,
//             "source": utmSource ? utmSource : LeadSource.Web_Trial,
//             "productId": productId
//         }),
//         type: 'POST',
//         url: "https://app.salezshark.com/webToLeadAPI/webtolead/createLead", //prod
//         // url: 'https://qa.salezshark.io/webToLeadAPI/webtolead/createLead', //qa

//         success: function (data) {
//             var status_code = data.statusCode;

//             // if (source === "Web-Trial") {
//             //     if (status_code === 201) {
//             //         $('#thankspopup').modal('show');
//             //         $("#signup-form").removeClass('signUpArrowBtnView');
//             //         $('#signup-form')[0].reset();
//             //         $('.inputTick').css('background-size', '0');
//             //         grecaptcha.reset();                  

//             //     }
//             // }
//             // else if (status_code === 201) {
//             //     location.href = response_page;
//             //     $('#signup-form')[0].reset();
//             // }
//             if (status_code === 201) {
//                 location.href = response_page;
//                 $('#signup-form')[0].reset();
//                 $('.inputTick').css('background-size', '0');
//             }

//             if (source === "Web-Demo") {
//                 setDemoBtn();
//             } else if (source === "Web-Contact Us") {
//                 setContactUsBtn();
//             } else if (source === "Web-Trial") {
//                 setSignUsBtn();
//             }

//             if (status_code !== 201) {
//                 $("#errorEmailId").html(data.message).fadeIn(500).fadeOut(4000);
//             }
//         },
//         error: function (data) {
//             if (source === "Web-Demo") {
//                 setDemoBtn();
//             } else if (source === "Web-Contact Us") {
//                 setContactUsBtn();
//             } else if (source === "Web-Trial") {
//                 setSignUsBtn();
//             }
//             alert('Error');
//         }
//     });
// }


// function validate_email() {
//     var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
//     email = $("#ss_email").val();
//     if (email == '' || !regex.test(email)) {
//         $("#errorGetStartedEmailId").fadeIn(500);
//         $("#errorGetStartedEmailId").fadeOut(3000);
//         $("#" + i).focus();
//         return false;
//     }

//     // $("#" + frm).submit();
//     window.location.href = "https://www.salezshark.com/contact?product=engage&email=" + email + `&utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_term=${utm_term}&utm_content=${utm_content}`; //prod
//     // window.location.href = "https://qa.salezshark.io/connectplus/contact?product=engage&email=" + email + `&utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_term=${utm_term}&utm_content=${utm_content}`; //qa
//     return true;
// }



// function gotocontact() {
//     location.href = "contact";
// }


// function generateLeadsByContactPopUp() {

//     $("#contactUsPopup").prop('disabled', true);

//     var email = jQuery("input[name='your-email']").val();

//     var phone_num = jQuery("#mobile-number").val();

//     var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

//     var phoneRgex = /^(\+\d{1,3}[- ]?)?\d{7,16}$/;

//     var alpha_num = /^[ A-Za-z0-9_@./]*$/;

//     var name = jQuery("input[name='name']").val();

//     var company_name = jQuery("input[name='your-Industry']").val();

//     if (name == '') {
//         showError('errorName', 'Please enter name.', 'name');
//         return false;
//     } else if (!alpha_num.test(name)) {
//         showError('errorName', 'Please enter a valid name.', 'name');
//         return false;
//     }

//     if (email == '') {
//         showError('errorEmailId', 'Please enter email address.', 'your-email');
//         return false;
//     } else if (!regex.test(email)) {
//         showError('errorEmailId', 'Please enter a valid email address.', 'your-email');
//         return false;
//     }

//     if (phone_num === '') {
//         showError('errorPhoneNumber', 'Please enter contact number.', 'phone');
//         return false;
//     } else if (!phoneRgex.test(phone_num)) {
//         showError('errorPhoneNumber', 'Please enter a valid contact number.', 'phone');
//         return false;
//     }

//     if (company_name == '') {
//         showError('errorIndustryName', 'Please enter company name.', 'your-Industry');
//         return false;
//     }

//     addLoaderToSendBtn();

//     jQuery.ajax({
//         dataType: 'json',
//         async: true,
//         headers: {
//             Accept: "application/json",
//             "Access-Control-Allow-Origin": "*",
//             "Content-Type": "application/json",
//             "APIKey": '3ccd60cb-12d1-4efa-a365-cccba3af181f',
//             "ownerId": 2905,
//             "organizationId": 2874
//         },
//         data: JSON.stringify({
//             "ownerId": "2905",
//             "organizationId": "2874",
//             "lastName": name,
//             "email": email,
//             "phone": phone_num,
//             "companyName": company_name,
//             "status": "Open Lead",
//             "source": "Web-Contact Us",
//         }),
//         type: 'POST',
//         url: "https://app.salezshark.com/webToLeadAPI/webtolead/createLead", //prod
//         // url: 'http://qa.salezshark.io/webToLeadAPI/webtolead/createLead', //qa
//         success: function (data) {
//             var status_code = data.statusCode;

//             if (status_code !== 201) {
//                 setSendBtn();
//                 $("#errorEmailId").html(data.message).fadeIn(500).fadeOut(4000);
//             }

//             if (status_code === 201) {
//                 location.href = 'https://www.salezshark.com/thank-you-contact';
//             }
//         },
//         error: function (data) {
//             setSendBtn();
//             $("#errorContactPopup").fadeIn(500).fadeOut(4000);
//         }
//     });
// }


// function createLeadsByChat(data) {

//     // var name = data[0].answer;
//     // var email = data[1].answer;
//     // var phone = data[2].answer;

//     var name, email, phone;

//             for (var i = 0; i < data.length; i++) {
//             var currentLabel = data[i].label;
//             var currentAnswer = data[i].answer;

//             switch (currentLabel) {
//                 case "Name":
//                     name = currentAnswer;
//                     break;
//                 case "Email":
//                     email = currentAnswer;
//                     break;
//                 case "Phone":
//                     phone = currentAnswer;
//                     break;
//                 // Add more cases for other labels if needed
//             }
//         }

//     jQuery.ajax({
//         dataType: 'json',
//         async: false,
//         headers: {
//             Accept: "application/json",
//             "Access-Control-Allow-Origin": "*",
//             "Content-Type": "application/json",
//             "APIKey": "3ccd60cb-12d1-4efa-a365-cccba3af181f",
//             "ownerId": 2904,
//             "organizationId": 2874
//         },
//         data: JSON.stringify({
//             "ownerId": "2904",
//             "organizationId": "2874",
//             "lastName": name,
//             "email": email,
//             "phone": phone,
//             "status": "Open Lead",
//             "source": "Chat",
//         }),
//         type: 'POST',
//         url: "https://app.salezshark.com/webToLeadAPI/webtolead/createLead", //prod
//         // url: 'https://qa.salezshark.io/webToLeadAPI/webtolead/createLead', //qa
//         success: function (data) { },
//         error: function (data) { }
//     });
// }

// function showError(id, msg, name) {
//     $("#contactUsPopup").prop('disabled', false);
//     $("#doneButton").prop('disabled', false);
//     $("#" + id).html(msg);
//     $("#" + id).fadeIn(500);
//     $("#" + id).fadeOut(3000);
//     jQuery("input[type='text'][name='" + name + "']").focus();
// }

// function addLoaderToSendBtn() {
//     $('.contctSend').empty();
//     $(".contctSend").addClass('contactSendBtnLoaderDiv');
//     $('.contctSend').append(spinner());
// }

// function addLoaderToDemoBtn() {
//     $('.requestBtnView').empty();
//     $(".requestBtnView").addClass('demoBtnLoaderDiv');
//     $('.requestBtnView').append(spinner());
// }

// function addLoaderToContactUsBtn() {
//     $('.contctSend').empty();
//     $(".contctSend").addClass('contactSendBtnLoaderDiv');
//     $('.contctSend').append(spinner());
// }

// function addLoaderToSignUsBtn() {
//     $('.signUpArrowBtnView').empty();
//     $(".signUpArrowBtnView").addClass('contactSendBtnLoaderDiv');
//     $('.signUpArrowBtnView').append(spinner());
// }

// function spinner() {
//     loader = '<div class="sendBtnSpinner">' +
//         '<div class="bounce1"></div>' +
//         '<div class="bounce2"></div>' +
//         '<div class="bounce3"></div>' +
//         '</div>';
//     return loader;
// }

// function setSendBtn() {
//     $(".contctSend").removeClass('contactSendBtnLoaderDiv');
//     $('.contctSend').empty();
//     merkup = '<input type="hidden" name="sourcePage" id="sourcePage" value="contact" />'
//         + '<button id="contactUsPopup" type="button" class="sendBtn" onclick="generateLeadsByContactPopUp();" style="width: 80px;">SEND</button>'
//         + '<span id="errorContactPopup" hidden="hidden" class="erroralert" style="float: right;">Internal Serve Error.</span>';
//     $('.contctSend').append(merkup);
// }

// function setDemoBtn() {
//     $(".requestBtnView").removeClass('demoBtnLoaderDiv');
//     $('.requestBtnView').empty();
//     merkup = '<input type="hidden" name="sourcePage" id="sourcePage" value="demo" />'
//         + '<button type="button" class="requestDemoBtn" onclick="generateClientsLead();"> Request Demo </button>';
//     $('.requestBtnView').append(merkup);
// }

// function setContactUsBtn() {
//     $(".contctSend").removeClass('contactSendBtnLoaderDiv');
//     $('.contctSend').empty();
//     merkup = '<input type="hidden" name="sourcePage" id="sourcePage" value="contact" />'
//         + '<button type="button" class="btn sendBtn" id="doneButton" onclick="generateClientsLead();">SEND</button>';
//     $('.contctSend').append(merkup);
// }

// function setSignUsBtn() {
//     $(".signUpArrowBtnView").removeClass('contactSendBtnLoaderDiv');
//     $('.signUpArrowBtnView').empty();
//     // merkup = '<button type="button" class="crm_Btn crm_blue_btn" id="" onclick="generateClientsLead()" style="padding: 8px 30px; margin-top:20px;width: 100%;border-radius:4px;">Register</button>';
//     // merkup = ' <button type="button" class="signUpBtnArrow" id="signUpArrowBtn" onclick="generateClientsLead()">'
//     //     + '<svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
//     //     + '<g id="Approved-Home-Page" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'
//     //     + '<g id="Landing-Page-_5-Feb_v3" transform="translate(-586.000000, -947.000000)" fill="#fff" fill-rule="nonzero">'
//     //     + '<g id="Product-features" transform="translate(0.000000, 693.000000)">'
//     //     + '<g id="Content" transform="translate(106.000000, 72.000000)">'
//     //     + '<g id="2" transform="translate(400.000000, 79.000000)">'
//     //     + '<path d="M89.9409577,108.924973 L87.1044922,106.088508 C86.5187628,105.502779 86.5187628,104.553124 87.1044922,103.967394 C87.6902215,103.381665 88.6398764,103.381665 89.2256057,103.967394 L94.5930163,109.334805 C95.1787456,109.920534 95.1787456,110.870189 94.5930163,111.455918 C94.5451223,111.503812 94.494795,111.54779 94.4424325,111.587852 C94.4021644,111.640422 94.3579804,111.690954 94.3098806,111.739054 L89.0255614,117.023373 C88.4347332,117.614202 87.4768113,117.614202 86.8859831,117.023373 C86.2951548,116.432545 86.2951548,115.474623 86.8859831,114.883795 L89.818984,111.950794 L81.5129103,111.950794 C80.677353,111.950794 80,111.273441 80,110.437884 C80,109.602326 80.677353,108.924973 81.5129103,108.924973 L89.9409577,108.924973 Z" id="ic_arrow"></path>'
//     //     + '</g></g></g></g></g></svg></button>';
//     // $('.signUpArrowBtnView').append(merkup);
// }


// // const apiBaseURL = 'http://qa.salezshark.io'; // QA URL
// const apiBaseURL = 'https://app.salezshark.com';   // PRODUCTION URL 
// // var isEmailAvailableinDB = true;

// function isEmailPresent(email) {

//     jQuery("input[name='your-email']").addClass('inputLoader');

//     $.ajax({
//         type: 'GET',
//         url: apiBaseURL + '/subscriber/isEmailPresent?email=' + email,
//         dataType: "json",
//         headers: {
//             'Content-Type': 'application/json',
//             'token': '6292fe12819bc89215e537d07b27e7e41c9be92347053f7469ec3c0f958be37f'
//         },
//         async: true,
//         success: function (response) {
//             jQuery("input[name='your-email']").removeClass('inputLoader');
//             if (response.success && response.statusCode === 200 && response.data !== null) {
//                 if (response.data.isEmailPresent) {
//                     $("#errorEmailId").text(response.data.message);
//                     jQuery("input[name='your-email']").removeClass('inputTick');
//                     // form submit btn disabled and errors set
//                     showError('errorEmailId', 'Email already present', 'your-email');
//                     $('#formsubmitbtn').prop('disabled', true);
//                     $('input[type="text"]').keyup(function () {
//                         if ($(this).val() != '') {
//                             $('#formsubmitbtn').prop('disabled', false);
//                         }
//                     });
//                     // form submit btn disabled and errors set
//                 } else {
//                     jQuery("input[name='your-email']").addClass('inputTick');
//                 }

//                 // isEmailAvailableinDB = response.data.isEmailPresent;
//             }

//         },
//         error: function (err) {
//             jQuery("input[name='your-email']").removeClass('inputLoader');
//         }
//     });
// }

// function onEmailBlur(val) {
//     checkEmailValidation(val);
// }

// function checkEmailValidation(val) {
//     var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

//     if (isEmpty(val)) {
//         $("#errorEmailId").html('Please enter email.').fadeIn(500).fadeOut(4000);
//         jQuery("input[name='your-email']").removeClass('inputTick');
//         // isEmailAvailableinDB = true;
//         return;
//     }

//     if (!isEmpty(val) && !val.match(regex)) {
//         $("#errorEmailId").html('Please enter a valid email.').fadeIn(500).fadeOut(4000);
//         jQuery("input[name='your-email']").removeClass('inputTick');
//         // isEmailAvailableinDB = true;
//         return;
//     }

//     isEmailPresent(val);
// }

// function isEmpty(e) {
//     e = e.trim();
//     switch (e) {
//         case "":
//         case 0:
//         case "0":
//         case null:
//         case false:
//         case typeof this == "undefined":
//             return true;
//         default:
//             return false;
//     }
// }


// $(document).on("click", ".open-signup-form", function () {
//     $(this).siblings(".signup-form-parent").children(".signUp-form-wraper").find(".row").addClass('showing-signup-form');
// });


// $(document).on("click", ".cross-form-btn", function () {
//     $(this).parent(".col-md-5").parent(".row.showing-signup-form").removeClass('showing-signup-form');
// });
