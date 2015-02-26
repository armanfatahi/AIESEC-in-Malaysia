var serverError = "Server temporarily unavailable. Please try again later.";
var defaultUrl = "/";

var Browser = {
  Version: function() {
    var version = 999; // we assume a sane browser
    if (navigator.appVersion.indexOf("MSIE") != -1)
      // bah, IE again, lets downgrade version number
      version = parseFloat(navigator.appVersion.split("MSIE")[1]);
    return version;
  }
}

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function currentTime(){
	var d=new Date();
	return "p="+d.getTime()+"A"+Math.floor(Math.random()*1000);
}

function getErrorRedirect(redirurl){
	var e = getUrlVars()["e"];
	if(e == null){
		e = 1;
	}else{
		e = parseInt(e,10);
		e = e+1;
	}
	if(e > 2){
		alert(serverError);
		window.location = defaultUrl;
	}else{
		window.location = redirurl+'?e='+e;
	}
	
}

function getErrorReload(){
	var e = getUrlVars()["e"];
	var redirurl;
	if(e == null){
		e = 1;
		redirurl =  window.location.href;
	}else{
		e = parseInt(e,10);
		e = e+1;
		redirurl =  window.location.href.slice(0,window.location.href.indexOf('?'));
	}
	if(e > 2){
		alert(serverError);
		window.location = defaultUrl;
	}else{
		//var redirurl = window.location.href;
		
		window.location = redirurl+'?e='+e;
	}
}

function severProAlert(){
	alert(serverError);
	window.location = defaultUrl;
}

function get1stListElementTotalWidth(selector){
	var list = $(selector);
	var liWidth;
	var liPadding;
	var liMargin;
	var liTotalWidth;
	if(list.length > 0){
		var liWidth = $(list[0]).width();
		var liPadding = parseInt($(list[0]).css('padding-left'),10) + parseInt($(list[0]).css('padding-right'),10);
		var liMargin = parseInt($(list[0]).css('margin-left')) + parseInt($(list[0]).css('margin-right'));
	}
	liTotalWidth = liWidth + liPadding + liMargin;
	return liTotalWidth;
}

function getElementTotalHeight(selector){
	var elem = $(selector);
	var liWidth;
	var liPadding;
	var liMargin;
	var liTotalWidth;
	
	var liHeight = elem.height();
	var liPadding = parseInt(elem.css('padding-top'),10) + parseInt(elem.css('padding-bottom'),10);
	var liMargin = parseInt(elem.css('margin-top')) + parseInt(elem.css('margin-bottom'));
		
	liTotalHeight = liHeight + liPadding + liMargin;
	return liTotalHeight;
}

function markSelectedButton(){
	var tchoricls = getUrlVars()["tchoricls"];
	var tchselectcls = getUrlVars()["tchselectcls"];
	if(tchselectcls == '' || tchselectcls == null){
		tchselectcls =  tchoricls+'-s';
	}
	$('.'+tchoricls).addClass(tchselectcls);
	$('.'+tchoricls).removeClass(tchoricls);
}

function setDivCenter(div){
    $(div).css("position", "absolute");
	$(div).css("top", (($(window).height() - $(div).outerHeight()) / 2) + $(window).scrollTop() + "px");
	$(div).css("left", (($(window).width() - $(div).outerWidth()) / 2) + $(window).scrollLeft() + "px");
	
}

function showOverlay(){
	
	var div = $('<div/>',{name:'tchinitOverlap'});
	div.css("position","fixed");
	div.css("bottom","0");
	div.css("width","100%");
	div.css("height","100%");
	div.css("opacity","0.8");
	div.css("z-index","9999");
	div.css("background","#000000");
	div.css("margin","0");
	div.css("padding","0");
	div.css("display","none");
	
	$('body').append(div);
	div.fadeIn('slow');
}

function hideOverlay(){
	
	$('[name=tchinitOverlap]').fadeOut('slow',function(){
		$(this).remove();
	});

}

function convertPXtoInt(s){
	if(s == 'NaN' || s == 'undefined' || s == 'auto'){
	
		return 0;
	}
	try{
		var i = parseInt(s.substring(0,s.length-2)); 
		return i;
	}catch(e){
		return s;
	}
	return 
}

function showProgress(){
	showOverlay();
	var div = $('<div/>',{id:'tchProgressOverlap'});
	div.css("position","fixed");
	div.css("bottom","0");
	div.css("width","200px");
	div.css("height","50px");
	div.css("z-index","10005");
	div.css("margin","0");
	div.css("padding","0");
	div.css("display","block");
	
	div.append($('<div/>',{id:'progress'}));
	
	$('body').append(div);
	setDivCenter('#tchProgressOverlap');
	$( "#progress" ).progressbar({
			value: 0
	});
}

function setProgressVal(val){
	$( "#progress" ).progressbar( "option", "value", parseInt(val,10));
	if(val == 100){
		doneProgress();
	}
}

function doneProgress(){
	hideOverlay();
	$( "progress" ).progressbar( "option", "disabled", true );
	$('#tchProgressOverlap').remove();
}
