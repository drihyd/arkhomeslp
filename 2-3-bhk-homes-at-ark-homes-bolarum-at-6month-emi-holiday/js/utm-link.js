/* Start Venkat Code */
var utm_source = getUrlParameter('utm_source');
var utm_medium = getUrlParameter('utm_medium');
var utm_campaign = getUrlParameter('utm_campaign');
var utm_term = getUrlParameter('utm_term');
var utm_content = getUrlParameter('utm_content');
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
/* End Venkat Code */

if(utm_source=="" || utm_source=="undefined"){	
	//$.cookie('utm_source', "Landing Page Form", { expires: 7, path: '/' });
	//$.cookie('utm_source', $.cookie('utm_source'), { expires: 7, path: '/' });
}
else{
	$.cookie('utm_source', utm_source);
}

if(utm_medium=="" || utm_medium=="undefined"){	
	//$.cookie('utm_medium', "Web", { expires: 7, path: '/' });
	//$.cookie('utm_medium', $.cookie('utm_medium'), { expires: 7, path: '/' });
}
else{
	$.cookie('utm_medium', utm_medium);
}

if(utm_campaign=="" || utm_campaign=="undefined"){	
	//$.cookie('utm_campaign', "", { expires: 7, path: '/' });
	//$.cookie('utm_campaign', $.cookie('utm_campaign'), { expires: 7, path: '/' });
}
else{
	$.cookie('utm_campaign', utm_campaign);
}

if(utm_term=="" || utm_term=="undefined"){	
	//$.cookie('utm_term', "", { expires: 7, path: '/' });
	//$.cookie('utm_term', $.cookie('utm_term'), { expires: 7, path: '/' });
}
else{
	$.cookie('utm_term', utm_term);
}

if(utm_content=="" || utm_content=="undefined"){	
	//$.cookie('utm_content', "", { expires: 7, path: '/' });
	//$.cookie('utm_content', $.cookie('utm_content'), { expires: 7, path: '/' });

}
else{
	$.cookie('utm_content', utm_content);
}



$(document).ready(function(){
	/* Change code by venkat */
	 var tracking_param = "utm_source="+setDefaultVal($.cookie('utm_source'),"Website")+"&utm_medium="+setDefaultVal($.cookie('utm_medium'),"Web")+"&utm_campaign="+setDefaultVal($.cookie('utm_campaign'),"Landing Page")+"&utm_term="+setDefaultVal($.cookie('utm_term'),"Landing Page")+"&utm_content="+setDefaultVal($.cookie('utm_content'),"Landing Page");
	 /* End */

$('.logoo').click(function() {


	var param_linker;
  var href = $(this).attr('href')
  if(href !== undefined) {
  if(href.indexOf('?') >=0) { 
    param_linker = "&"
  }
  else {
    param_linker = "?"
  }
  var final_url = href + param_linker + tracking_param ;
  $(this).attr('href', final_url);
  }
});
	
    });  
	
	
	
	function setDefaultVal(value, defaultValue){
	
		if(value=="undefined"){
			 return defaultValue;
		}
		else{
			 return value;
		}
  
}  