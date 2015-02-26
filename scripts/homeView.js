$(function() {
	/*--------Detecting and fixing for various screen sizes------*/
	//alert($(window).height());
	if($(window).height() <= 690) {
		$('#p7Text').css('top','120px');
	}
	else if($(window).height() <= 745) {
		$('#p7Text').css('top','130px');
	}
	else if($(window).height() <= 775) {
		$('#p7Text').css('top','170px');
	}
	else if($(window).height() > 775 && $(window).height() < 1115) {
		$('#p7Text').css('top','320px');
	}
	else {
		$('#p7Text').css('top','430px');
	}
	
	/*This script is for the button mouseover effect*/

    $('#p1Text img').mouseover(function () {
        $('#p1Text img').attr('src', '/-/media/Images/Tourism Malaysia/Assets/Buttons/index-place-btn-hover.ashx?la=' + $('#langtxt').val());
    });
	$('#p1Text img').mouseout(function() {
	    $('#p1Text img').attr('src', '/-/media/Images/Tourism Malaysia/Assets/Buttons/index-place-btn.ashx?la=' + $('#langtxt').val());
	});

//	$('#p2Text img').mouseover(function() {
//	    $('#p2Text img').attr('src', '/-/media/Images/Tourism Malaysia/Assets/Buttons/index-event-btn-hover.ashx?la=' + $('#langtxt').val());
//	});
//	$('#p2Text img').mouseout(function() {
//	    $('#p2Text img').attr('src', '/-/media/Images/Tourism Malaysia/Assets/Buttons/index-event-btn.ashx?la=' + $('#langtxt').val());
//	});

	$('#p3Text img').mouseover(function () {
	    $('#p3Text img').attr('src', '/-/media/Images/Tourism Malaysia/Assets/Buttons/index-event-btn-hover.ashx?la=' + $('#langtxt').val());
	});
	$('#p3Text img').mouseout(function () {
	    $('#p3Text img').attr('src', '/-/media/Images/Tourism Malaysia/Assets/Buttons/index-event-btn.ashx?la=' + $('#langtxt').val());
	});

	$('#p4Text img').mouseover(function() {
	    $('#p4Text img').attr('src', '/-/media/Images/Tourism Malaysia/Assets/Buttons/index-msia-btn-hover.ashx?la=' + $('#langtxt').val());
	});
	$('#p4Text img').mouseout(function() {
	    $('#p4Text img').attr('src', '/-/media/Images/Tourism Malaysia/Assets/Buttons/index-msia-btn.ashx?la=' + $('#langtxt').val());
	});


	$('.top25more').mouseover(function () {
	    $('.top25more').css('background-image', 'url(/-/media/Images/Tourism Malaysia/Assets/Buttons/index-ex-more.gif)');
	});
	$('.top25more').mouseout(function () {
	    $('.top25more').css('background-image', 'url(/-/media/Images/Tourism Malaysia/Assets/Buttons/index-ex-mores.png)');
	})

	$('#p6Text img').mouseover(function () {
	    $('#p6Text img').attr('src', '/-/media/Images/Tourism Malaysia/Assets/Buttons/index-ex-btn-hover.ashx?la=' + $('#langtxt').val());
	});
	$('#p6Text img').mouseout(function () {
	    $('#p6Text img').attr('src', '/-/media/Images/Tourism Malaysia/Assets/Buttons/index-ex-btn.ashx?la=' + $('#langtxt').val());
	});

	$('#p7Text img').mouseover(function() {
	    $('#p7Text img').attr('src', '/-/media/Images/Tourism Malaysia/Assets/Buttons/index-trip-btn-hover.ashx?la=' + $('#langtxt').val());
	});
	$('#p7Text img').mouseout(function() {
	    $('#p7Text img').attr('src', '/-/media/Images/Tourism Malaysia/Assets/Buttons/index-trip-btn.ashx?la=' + $('#langtxt').val());
	});
});