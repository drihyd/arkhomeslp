function loadhtml(e){}function loadClick2Call(e){function t(e){return!!(e&&jQuery.trim(e)&&/(^\+(\d{10}|\d{12}|\d{11}|\d{13}|\d{14})|^(1800(\d{6}|\d{7}|\d{8}))|^(1888(\d{6}|\d{7}|\d{8})))$/.test(e))}jQuery("#click2call_submitbtn").unbind("click").click(function(a){a.preventDefault(),jQuery("#click2call_submitbtn").attr("disabled",!0),jQuery("#click2call_success").hide();var l=e.agentNum,n=jQuery("#click2call_cust_text").val(),c={api_key:e.apiKey,agent_number:l,phone_number:n,sr_number:e.srnumber};t(n.toString())&&t(n.toString())?jQuery.ajax({url:"https://sr.knowlarity.com/vr/api/click2call/",type:"POST",data:c,cache:!1,success:function(e){jQuery(".click_to_call_form").hide(),jQuery("#click2call_success").show(),setTimeout(function(){window.location.href="https://arkgroup.in/l/2-3-bhk-homes-at-ark-homes-bolarum-for-2per-down-payment/thankyou.html"},1e3),jQuery("#click2call_submitbtn").attr("disabled",!1)},error:function(e,t,a){jQuery(".click_to_call_form").hide(),jQuery("#click2call_success").show(),setTimeout(function(){window.location.href="https://arkgroup.in/l/2-3-bhk-homes-at-ark-homes-bolarum-for-2per-down-payment/thankyou.html"},1e3),jQuery("#click2call_submitbtn").attr("disabled",!1)}}):(alert("Number should be in international format like +919999988888."),jQuery("#click2call_submitbtn").attr("disabled",!1))})}function init(e,t,a){var l={apiKey:e,agentNum:a,srnumber:t};if("undefined"==typeof jQuery){"function"==typeof jQuery&&(thisPageUsingOtherJSLibrary=!0),function(e,t){var a=document.createElement("script");a.src=e;var l=document.getElementsByTagName("head")[0],n=!1;a.onload=a.onreadystatechange=function(){!n&&(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState)&&(n=!0,t(),a.onload=a.onreadystatechange=null,l.removeChild(a))},l.appendChild(a)}("//ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js",function(){loadhtml(l),loadClick2Call(l)})}else loadhtml(l),loadClick2Call(l)}