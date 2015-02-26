function tNameSort(){
	
	var divList = $('[name = tSortContainer] li');
	if($('[name = tNameSortHeader]').hasClass('desc')){
		$('[name = tNameSortHeader]').removeClass('desc');
		$('[name = tNameSortHeader]').addClass('asc');
	}else{
		$('[name = tNameSortHeader]').removeClass('asc');
		$('[name = tNameSortHeader]').addClass('desc');
	}
	
	divList.sort(function(a, b){
		//var keyA = $(a).find('[name = tNameSortTarget]').html();
        //var keyB = $(b).find('[name = tNameSortTarget]').html();
		var keyA = $(a).find('[name = tajaxLoad]').html();
        var keyB = $(b).find('[name = tajaxLoad]').html();

        if($('[name = tNameSortHeader]').hasClass('asc')){
            //return (keyA > keyB) ? 1 : 0; --not working in IE
			return (keyA < keyB) ? -1 : (keyA > keyB) ? 1 : 0;
        } else {
            //return (keyA < keyB) ? 1 : 0; --not working in IE
			return (keyA > keyB) ? -1 : (keyA < keyB) ? 1 : 0;
        }
		
    });
    $.each(divList, function (index, row) {
        $(this).removeClass("Bgcolor");
        if ((index % 2) == 1) {
            $(this).addClass("Bgcolor");
        }
        $('[name = tSortContainer]').append(row);
    });
}

function tRateSort(){
	var divList = $('[name = tSortContainer] li');
	if($('[name = tRateSortHeader]').hasClass('desc')){
		$('[name = tRateSortHeader]').removeClass('desc');
		$('[name = tRateSortHeader]').addClass('asc');
	}else{
		$('[name = tRateSortHeader]').removeClass('asc');
		$('[name = tRateSortHeader]').addClass('desc');
	}
	
	divList.sort(function(a, b){
		var keyA = $(a).find('[name = tRateSortTarget] div').length;
        var keyB = $(b).find('[name = tRateSortTarget] div').length;
        if($('[name = tRateSortHeader]').hasClass('asc')){
            //return (keyA > keyB) ? 1 : 0;  --not working in IE
			return (keyA < keyB) ? -1 : (keyA > keyB) ? 1 : 0;
        } else {
            //return (keyA < keyB) ? 1 : 0;  --not working in IE
			return (keyA > keyB) ? -1 : (keyA < keyB) ? 1 : 0;
        }
		
    });
    $.each(divList, function (index, row) {
        $(this).removeClass("Bgcolor");
        if ((index % 2) == 1) {
            $(this).addClass("Bgcolor");
        }
        $('[name = tSortContainer]').append(row);
    });
}

function tRateSortByStar() {
    var divList = $('[name = tSortContainer] li');
    if ($('[name = tRateSortHeader]').hasClass('desc')) {
        $('[name = tRateSortHeader]').removeClass('desc');
        $('[name = tRateSortHeader]').addClass('asc');
    } else {
        $('[name = tRateSortHeader]').removeClass('asc');
        $('[name = tRateSortHeader]').addClass('desc');
    }

    divList.sort(function (a, b) {
        var keyA = $(a).find('[name = tRateSortTarget] div').attr('class').toLowerCase();
        var keyB = $(b).find('[name = tRateSortTarget] div').attr('class').toLowerCase();
        //alert(keyA + " : " + keyB);
        if ($('[name = tRateSortHeader]').hasClass('asc')) {
            //return (keyA > keyB) ? 1 : 0;  --not working in IE
            return (keyA < keyB) ? -1 : (keyA > keyB) ? 1 : 0;
        } else {
            //return (keyA < keyB) ? 1 : 0;  --not working in IE
            return (keyA > keyB) ? -1 : (keyA < keyB) ? 1 : 0;
        }

    });
    $.each(divList, function (index, row) {
        $(this).removeClass("Bgcolor");
        if ((index % 2) == 1) {
            $(this).addClass("Bgcolor");
        }
        $('[name = tSortContainer]').append(row);
    });
}
function tPriceSort(){
	var divList = $('[name = tSortContainer] li');
	if($('[name = tPriceSortHeader]').hasClass('desc')){
		$('[name = tPriceSortHeader]').removeClass('desc');
		$('[name = tPriceSortHeader]').addClass('asc');
	}else{
		$('[name = tPriceSortHeader]').removeClass('asc');
		$('[name = tPriceSortHeader]').addClass('desc');
	}

	divList.sort(function (a, b) {
	    var keyA = 0;
	    var keyB = 0;

	    var re = new RegExp(webVal.priceReg);

	    var mA = $(a).find('[name = tPriceSortTarget]').html();
	    var mB = $(b).find('[name = tPriceSortTarget]').html();

	    var mA = mA.replace("&nbsp;", " ");
	    var mB = mB.replace("&nbsp;", " ");

	    var mA = re.exec(mA);
	    var mB = re.exec(mB);
	    var tempS;
	    if (mA == null) {
	        keyA = 0;
	    } else {
	        tempS = mA[2];
	        tempS = tempS.replace(",", "");
	        keyA = parseFloat(tempS, 10);
	    }
	    if (mB == null) {
	        keyB = 0;
	    } else {
	        tempS = mB[2];
	        tempS = tempS.replace(",", "");
	        keyB = parseFloat(tempS, 10);
	    }
	    //alert(mA[2]);
	    //alert(keyA);

	    if ($('[name = tPriceSortHeader]').hasClass('asc')) {
	        //return (keyA > keyB) ? 1 : 0;  --not working in IE
	        return (keyA < keyB) ? -1 : (keyA > keyB) ? 1 : 0;
	    } else {
	        //return (keyA < keyB) ? 1 : 0;  --not working in IE
	        return (keyA > keyB) ? -1 : (keyA < keyB) ? 1 : 0;
	    }

	});
    $.each(divList, function (index, row) {
        $(this).removeClass("Bgcolor");
        if ((index % 2) == 1) {
            $(this).addClass("Bgcolor");
        }
        $('[name = tSortContainer]').append(row);
    });
}