var animateTiming = 700;
var sTimer;
function getBGHeight() {
    return $('body').height();
}

function getPixelInt(px1) {
    if (px1 == 'NaN' || px1 == 'undefined' || px1 == 'auto' || px1 == null || px1 == NaN) {
        return 0;
    }
    return parseInt(px1.substring(0, px1.length - 2));
}

function tInitialParallax() {
    if ($(webVal.fullcontainerName).length <= 0) {
        return;
    }
    $(webVal.fullcontainerName).css('width', '100%');
    $(webVal.fixcontainerName).css('height', $(window).height() + 'px');

    //for(var i=0; i<webVal.fullLayerName.length; i++){

    //	$(webVal.fullLayerName[i]).css('width',$(window).width()+'px');
    //}
    //calLayerPosTo(webVal.fullLayerName,webVal.fullLayerSpeed);
    calLayerPosTo(webVal.fixLayerName, webVal.fixLayerSpeed);
    var sliderHeight = $(window).height() - $(webVal.headerBarName).height() - $(webVal.footerBarName).height() - ($('body').offset().top * 2);
    $(webVal.bgcontainerName).css('top', '0px');

    $('#parallaxFooter').css("left", (($(window).width() - $('#parallaxFooter').outerWidth()) / 2) + $(window).scrollLeft() + "px");

}

function calLayerPosTo(args, speed) {
    var is1Layer = true;
    var layer1Height = 0;
    var sumLayerPos = 0;
    for (var i = 0; i < args.length; i++) {
        $(args[i]).attr('startPos', $(args[i]).css('top'));
        if (is1Layer) {
            var a = $(args[i]);
            $(args[i]).css('top', $(args[i]).css('top'));
            $(args[i]).attr('oriPos', $(args[i]).css('top'));
            is1Layer = false;

            layer1Height = getPixelInt($(args[i]).css('top'));
        } else {
            if (i >= args.length - 1) {
                var sliderHeight = $(window).height() - $(webVal.headerBarName).height() - $(webVal.footerBarName).height() - ($('body').offset().top * 2);
                var temp = sliderHeight - webVal.bgPartition[i];
                var layerCalPos = ((getPixelInt($(args[i]).css('top'))) + (speed * sumLayerPos) - temp);
            } else {
                var layerCalPos = (getPixelInt($(args[i]).css('top'))) + (speed * sumLayerPos);
            }
            $(args[i]).css('top', layerCalPos + 'px');
            $(args[i]).attr('oriPos', layerCalPos + 'px');
        }
        sumLayerPos = sumLayerPos + webVal.bgPartition[i];
    }
}

function resetLayer(args) {
    for (var i = 0; i < args.length; i++) {
        $(args[i]).css('top', $(args[i]).attr('startPos'));
    }
}

function tScroll(autoPos) {
    //startAutoScroll(autoPos,webVal.fullLayerName,webVal.fullLayerSpeed);
    startAutoScroll(autoPos, webVal.fixLayerName, webVal.fixLayerSpeed);

}

function startAutoScroll(currentPosition, args, speed) {
    for (var i = 0; i < args.length; i++) {
        //parallax exception for #p5Layer
        if (args[i] == '#p5Layer') {
            $(args[i]).animate({ top: getPixelInt($(args[i]).attr('oriPos')) - (currentPosition * 1.6) }, animateTiming, function () { });
        }
        else {
            $(args[i]).animate({ top: getPixelInt($(args[i]).attr('oriPos')) - (currentPosition * speed) }, animateTiming, function () { });
        }
    }

}

function tScrollStop(args) {
    for (var i = 0; i < args.length; i++) {
        $(args[i]).stop();
    }

}

function tInitSlider() {

    $(window).scroll(function (event) {

        $('#showVal').val($(window).scrollTop());

        tScrollStop(webVal.fixLayerName);
        //tScrollStop(webVal.fullLayerName);
        $(webVal.bgcontainerName).stop();
        tScroll($(window).scrollTop());
        $(webVal.bgcontainerName).animate({ 'top': '-' + ($(window).scrollTop()) + 'px' }, animateTiming, function () { });
        return;

    });

}

function tBackgroundSliderEvent(event, ui) {
    var sliderHeight = $(window).height() - $(webVal.headerBarName).height() - $(webVal.footerBarName).height() - ($('body').offset().top * 2);
    var currentPosition = (getBGHeight() - sliderHeight) - ui.value;
    startSlide(currentPosition, webVal.fixLayerName, webVal.fixLayerSpeed);
    //startSlide(currentPosition,webVal.fullLayerName,webVal.fullLayerSpeed);

}

function startSlide(currentPosition, args, speed) {
    for (var i = 0; i < args.length; i++) {

        $(args[i]).css('top', getPixelInt($(args[i]).attr('oriPos')) - (currentPosition * speed));
    }
    $(webVal.bgcontainerName).css('top', '-' + currentPosition + 'px');
}

/*this function will load the rest of the parallax images*/
function startParallax(value) {
    var parallax = value;


    /*This function will fadeOut the low-res image once the high-res is loaded*/

}
function scroll_manager() {
    var currentScroll = $(this).scrollTop();
    var endScroll = currentScroll + $(window).height();

    if (promotionShowing == true && promoScroll == 0) {
        togglePromotionBar(promoScroll = 1);
    }
    else if (currentScroll == 0 && promotionShowing == false) {
        //togglePromotionBar(promoScroll = 0);
    }
    else if (promotionShowing == true && currentScroll >= 4000) {
        //togglePromotionBar();
        togglePromotionBar(promoScroll = 1);
    }
    previousScroll = currentScroll;
}
$(function () {
    var previousScroll = 0;

    tInitialParallax();
    tInitSlider();

    /* Lazy script starts here || http://www.appelsiini.net/projects/lazyload 
    $('.inner_bgimg img').lazyload({
    event: "load",
    load: function (elements_left, settings) { //This call will enable the background image to finish loading first
    startParallax(value = 1);
    }
    });
    */
    /*This script will roll up and roll down the promotion based on scroll values*/
    $(window).scroll(scroll_manager);
});
        
       
	
