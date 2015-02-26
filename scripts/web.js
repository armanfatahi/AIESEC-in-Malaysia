	var tripPanelShowing = true;//commented by tin.nb 2012-10-27. this variable is used for both trip planner and book your trip
	var boxNeedClosing = false;//3si - added by tin.nb on 2012-10-27 to know box need to close or not
	var whichOpening = -1; // -1 no box is opened; 0-trip planner is opened; 1- book your trip is opened. added by tin.nb on 2012-10-27 to know exactly which panel is be openning (Trip Planner or Book Your Trip)
	var tabIndex = 0; //3si - added by tin.nb on 2012-10-29 to know which tab is focused
	var tpTabIndex = 0; //3si - added by tin.nb on 2012-10-29 to know which tab is clicked
	var tripPanelShowed = false; //added by tin.onb on 2012-11-09. it always true once TP is opened
	var tripNameFromSession = ""; //added by tin.nb on 2012-11-09. it stores tripName getting from Session
	var emailFromSession = ""; //added by tin.nb on 2012-11-09. it stores email getting from Session
	var jsPaneAPI = ""; //added by tin.nb on 2012-11-16. it refers to jScrollPane
	var headerMapShow=false;
	var promotionShowing = false;
	var promoScroll = 0;
	var tNextLink = '';
	var checkSave = false;
	var thisYear;
	var runToggle=false;
	var calScrolling = true;
	var keyVal = '';
	var webVal = {
		headerBarContainer : 'header',
		globalHeaderName : '.MapNaviContent',
		headerLogoName : '#logoContainer',
		headerMapBarName : '.MapNaviBar',
		headerBarName : '',
		fullcontainerName : '.fullContainer',
		fixcontainerName : '.fixContainer',
		bgcontainerName : '.bgRoll',
		//fullLayerName : ['#p1Layer','#p2Layer','#p3Layer','#p4Layer','#p5Layer','#p6Layer','#p7Layer'],
		//fixLayerName: ['#p1Text', '#p2Text', '#p3Text', '#p4Text', '#p5Text', '#p6Text', '#p7Text', '#p8Text'],
		fixLayerName: ['#p1Text', '#p3Text', '#p4Text', '#p5Text', '#p6Text', '#p7Text', '#p8Text'],
		fixLayerSpeed : 1.2,
		fullLayerSpeed : 1.3,
		//bgPartition:[714, 961, 924, 931, 876, 429, 560],
		//bgPartition:[737, 976, 875, 911, 1002, 839, 921, 560],
		bgPartition:  [888, 851, 912, 984, 866, 929, 450],
		sliderBarName : '#slider',
		promotionBarName : '.promotion',
		promotionBarShow : '0',
		promotionBarClose : '-145',
		movingTripValStore: '.pagging-Mid-Content',
		movingTripContainer : '[name = tchMovingContainer]',
		movingTripPanel : '[name = tchMovingContainer] ul',
		pagingCache : true,
		pagingShow : '.Place-SlideRight-Page',
		pagingMainContainer: '.pagging-Mid-Content:parent',
		pagingDetailContainer : '.Place-Bg',
		pagingDetailBlock : '[name = placeDetail]',
		picViewSelector : '#picSelection',
		picViewContainer : '#picViewContainer',
		priceReg : '(^RM) (.*) (-) (.*$)',
		acrodianContainer : '#vacrodian',
		acrodianSection : '[name = tchAcrodianMovingContainer] ul',
		acrodianElement : '[name = vacrodianElement]',
		acrodianPagingContainer : '[name = tchAcrodianMovingContainer]',
		acrodianPagingMax : 5,
		acrodianTxtContent : '.TextContent',
		acrodianDarkValue : '0.6',
		tripPanelContainer : '.TPBox',
		tripPanelContainerHeight: '513',
		bookPanelContainer: '.BYTBox',//added by tin.nb on 2012-10-27
		bookPanelContainerHeight: '513', //added by tin.nb on 2012-10-27
		tripConfirmSavePop : '#savedPlannerMsgContainer',
		preScrollCal : '.Year-Left',
		nextScrollCal : '.Year-Right',
		monthScrollCal : '[name = tScrollCalMonth]'
	};
//3si - added by tin.nb on 2012-10-20 - start
    function initBYTTabs(){
        $("#hoteltab").hide();
        $("#hotelflighttab").hide();
    }
    function clickflight() {
        if (tabIndex == 0) return;
        tabIndex = 0;
        $("#flighttab").show();
        $("#hoteltab").hide();
        $("#hotelflighttab").hide();
        $('#liflightab').removeClass('in_tab_flight');
        $('#liflightab').addClass('ac_tab_flight');
        $('#liflightab a').removeClass('inactive_flight');
        $('#liflightab a').addClass('active_flight');
        $('#lihoteltab').removeClass('ac_tab_hotel');
        $('#lihoteltab').addClass('in_tab_hotel');
        $('#lihoteltab a').removeClass('active_hotel');
        $('#lihoteltab a').addClass('inactive_hotel');
        $('#liflighhoteltab').removeClass('ac_tab_flight_hotel');
        $('#liflighhoteltab').addClass('in_tab_flight_hotel');
        $('#liflighhoteltab a').removeClass('active_flight_hotel');
        $('#liflighhoteltab a').addClass('inactive_flight_hotel');
    }
    function clickhotel() {
        if (tabIndex == 1) return;
        tabIndex = 1;
        $("#flighttab").hide();
        $("#hoteltab").show();
        $("#hotelflighttab").hide();
        $('#liflightab').removeClass('ac_tab_flight');
        $('#liflightab').addClass('in_tab_flight');
        $('#liflightab a').removeClass('active_flight');
        $('#liflightab a').addClass('inactive_flight');
        $('#lihoteltab').removeClass('in_tab_hotel');
        $('#lihoteltab').addClass('ac_tab_hotel');
        $('#lihoteltab a').removeClass('inactive_hotel');
        $('#lihoteltab a').addClass('active_hotel');
        $('#liflighhoteltab').removeClass('ac_tab_flight_hotel');
        $('#liflighhoteltab').addClass('in_tab_flight_hotel');
        $('#liflighhoteltab a').removeClass('active_flight_hotel');
        $('#liflighhoteltab a').addClass('inactive_flight_hotel');
    }
    function clickflighthotel() {
        if (tabIndex == 2) return;
        tabIndex = 2;
        $("#flighttab").hide();
        $("#hoteltab").hide();
        $("#hotelflighttab").show();
        $('#liflightab').removeClass('ac_tab_flight');
        $('#liflightab').addClass('in_tab_flight');
        $('#liflightab a').removeClass('active_flight');
        $('#liflightab a').addClass('inactive_flight');
        $('#lihoteltab').removeClass('ac_tab_hotel');
        $('#lihoteltab').addClass('in_tab_hotel');
        $('#lihoteltab a').removeClass('active_hotel');
        $('#lihoteltab a').addClass('inactive_hotel');
        $('#liflighhoteltab').removeClass('in_tab_flight_hotel');
        $('#liflighhoteltab').addClass('ac_tab_flight_hotel');
        $('#liflighhoteltab a').removeClass('inactive_flight_hotel');
        $('#liflighhoteltab a').addClass('active_flight_hotel');
    }
    function linkflight() {
        whichOpening = 1;
        tpTabIndex = 0;
        switchingBYT();
    }
    function linkhotel() {
        whichOpening = 1;
        tpTabIndex = 1;
        switchingBYT();
    }
    function linkflighthotel() {
        whichOpening = 1;
        tpTabIndex = 2;
        switchingBYT();
    }
    function switchingBYT() {
        //Set hash for current viewing itinerary
        $('#currentTripHash').val(getHashValue());

        var tripHash = $('#tripHash').val();
        var currentTripHash = $('#currentTripHash').val();
        if (currentTripHash == "") {/*alert('Not saving 0');*/
            if (tripPanelShowing) {
                //Fix for remain to do list items when clicked on Trip Planner close
                resetToDoListInSessionShort();
            }
            doneSave();
            toggleTripPanel();
            return true;
        } else {//alert('Not saving 2dd');
            if (currentTripHash == tripHash) { //alert('Not saving 1.1');
                doneSave();
                toggleTripPanel();

                return true;
            } else { //alert('saving 1.1');
                showOverlay();
                setDivCenter("#savedPlannerMsgContainer");
                $("#savedPlannerMsgContainer").show();
                return false;
            }
        }
    }
    //3si - end added
    function toggleTripPanel() {
        
	    //$(webVal.tripPanelContainer).css('overflow','hidden');
		if( ! runToggle) {
			return;
		}

		if(!tripPanelShowing){ //show - need to show
		    //3si - modified by tin.nb on 2012-10-27
		    if (parseInt(whichOpening) == 0) {
		        $(webVal.tripPanelContainer).show();
		    } else if (parseInt(whichOpening) == 1) {
		        $(webVal.bookPanelContainer).show();
		        $('div.TripPlanBtn').css("z-index", "0"); //added by tin.nb on 2012-11-02
		        $('div.BookingBtn').addClass('BookingBtnOverlap'); //added by tin.nb on 2012-11-02
		        $('div.BookingBtn a').addClass('BookingBtnOverlapText'); //added by tin.nb on 2012-11-02
		        $('div.blockClick').css('left', '304px');
		    }
			
		    if (parseInt(whichOpening) == 0) {
		        $("#trip-planner").height($(webVal.tripPanelContainer).height() + 39);
		        $(webVal.tripPanelContainer).animate({ "margin-top": '0px' }, 100, function () {
		            $('.TripPlanBtn a').addClass('tripToggleArrowUp');
		            $('.BookingBtn a').addClass('tripToggleArrowUp');
		        });
		    } else if (parseInt(whichOpening) == 1) {
            if (BYT) {BYT.loadRecomm();} // in book_your_trip.js
		        $("#trip-planner").height($(webVal.bookPanelContainer).height() + 39);
		        $(webVal.bookPanelContainer).animate({ "margin-top": '0px' }, 100, function () {
		            $('.TripPlanBtn a').addClass('tripToggleArrowUp');
		            $('.BookingBtn a').addClass('tripToggleArrowUp');
		        });
		    }
		    tripPanelShowing = true;
			/*$(webVal.tripPanelContainer).animate({"margin-top":'0px'}, 1000,function() {
				$('.TripPlanBtn a').addClass('tripToggleArrowUp');
				//$(this).removeClass('tripToggleArrowUp');
				tripPanelShowing = true;
				//$(webVal.tripPanelContainer).css('overflow','visible');
				//$(webVal.tripPanelContainer).css('margin-top','');
				//$(webVal.tripPanelContainer).css('opacity','0');
			});*/
            //3si - end modified
		} else { //hide - maybe need to hide - maybe need to switch
			//$(webVal.tripPanelContainer).css('margin-top','-'+webVal.tripPanelContainerHeight+'px');
		    //3si - added by tin.nb on 2012-10-27
		    if (boxNeedClosing == true) {
		        if (parseInt(whichOpening) == 0) {
		            resetToDoListInSession();
		            $(webVal.tripPanelContainer).animate({"margin-top": '-'+webVal.tripPanelContainerHeight+'px'}, 1000,function() {
		                $('.TripPlanBtn a').removeClass('tripToggleArrowUp');
		                $('.BookingBtn a').removeClass('tripToggleArrowUp');
		            //$(this).removeClass('tripToggleArrowDown');
		            $("#trip-planner").height(39);
		            $(webVal.tripPanelContainer).hide();
		            });
		        } else if (parseInt(whichOpening) == 1) {
		            $(webVal.bookPanelContainer).animate({ "margin-top": '-' + webVal.bookPanelContainerHeight + 'px' }, 1000, function () {
		                $('.TripPlanBtn a').removeClass('tripToggleArrowUp');
		                $('.BookingBtn a').removeClass('tripToggleArrowUp');
		                //$(this).removeClass('tripToggleArrowDown');
		                $("#trip-planner").height(39);
		                $(webVal.bookPanelContainer).hide();
		            });
		        }
		        whichOpening = -1;
		        boxNeedClosing = false;
		        tripPanelShowing = false;
		        runToggle = false;
		        $('div.TripPlanBtn').css("z-index", "90"); //added by tin.nb on 2012-11-02
		        $('div.BookingBtn').removeClass('BookingBtnOverlap'); //added by tin.nb on 2012-11-02
		        $('div.BookingBtn a').removeClass('BookingBtnOverlapText'); //added by tin.nb on 2012-11-02
                $('div.blockClick').css('left','325px');
    		}
		    else {
		        if (parseInt(whichOpening) == 0) {//switch to trip planner
		            $(webVal.bookPanelContainer).animate({ "margin-top": '-' + webVal.bookPanelContainerHeight + 'px' }, 1, function () {
		                //$('.TripPlanBtn a').removeClass('tripToggleArrowUp');
		                //$(this).removeClass('tripToggleArrowDown');
		                //$("#trip-planner").height(39);
		                $(webVal.bookPanelContainer).hide();
		            });
    		        //$(webVal.bookPanelContainer).hide();
    		        $(webVal.tripPanelContainer).show();
    		        $("#trip-planner").height($(webVal.tripPanelContainer).height() + 39);
    		        $(webVal.tripPanelContainer).animate({ "margin-top": '0px' }, 1, function () {
    		            $('.TripPlanBtn a').addClass('tripToggleArrowUp');
    		            $('.BookingBtn a').addClass('tripToggleArrowUp');
    		        });
    		        $('div.TripPlanBtn').css("z-index", "90"); //added by tin.nb on 2012-11-02
    		        $('div.BookingBtn').removeClass('BookingBtnOverlap'); //added by tin.nb on 2012-11-02
    		        $('div.BookingBtn a').removeClass('BookingBtnOverlapText'); //added by tin.nb on 2012-11-02
                    $('div.blockClick').css('left','325px');
    		    } else if (parseInt(whichOpening) == 1) {//switch to book your trip
    		        $(webVal.tripPanelContainer).animate({ "margin-top": '-' + webVal.tripPanelContainerHeight + 'px' }, 1, function () {
    		            //$('.TripPlanBtn a').removeClass('tripToggleArrowUp');
    		            //$(this).removeClass('tripToggleArrowDown');
    		            //$("#trip-planner").height(39);
    		            $(webVal.tripPanelContainer).hide();
    		        });
    		        //$(webVal.tripPanelContainer).hide();
    		        if (tpTabIndex == 0) {
    		            clickflight();
    		        }
    		        else if (tpTabIndex == 1) {
    		            clickhotel();
    		        }
    		        else if (tpTabIndex == 2) {
    		            clickflighthotel();
    		        }
    		        $(webVal.bookPanelContainer).show();
    		        $("#trip-planner").height($(webVal.bookPanelContainer).height() + 39);
                if (BYT) {BYT.loadRecomm();} // in book_your_trip.js
    		        $(webVal.bookPanelContainer).animate({ "margin-top": '0px' }, 1, function () {
    		            $('.TripPlanBtn a').addClass('tripToggleArrowUp');
    		            $('.BookingBtn a').addClass('tripToggleArrowUp');
    		        });
    		        $('div.TripPlanBtn').css("z-index", "0"); //added by tin.nb on 2012-11-02
    		        $('div.BookingBtn').addClass('BookingBtnOverlap'); //added by tin.nb on 2012-11-02
    		        $('div.BookingBtn a').addClass('BookingBtnOverlapText'); //added by tin.nb on 2012-11-02
                    $('div.blockClick').css('left','304px');
    		    }
            }
            //3si -end added
            //3si - commented all by tin.nb - 2012-10-27
			//Fix for remain to do list items when clicked on Trip Planner close
			/*resetToDoListInSession();
			
			
			$(webVal.tripPanelContainer).animate({"margin-top": '-'+webVal.tripPanelContainerHeight+'px'}, 1000,function() {
				$('.TripPlanBtn a').removeClass('tripToggleArrowUp');
				//$(this).removeClass('tripToggleArrowDown');
				$("#trip-planner").height(39);
				tripPanelShowing = false;
				$(webVal.tripPanelContainer).hide();
				
				//$(webVal.tripPanelContainer).hide();
				//$(webVal.tripPanelContainer).css('margin-top','');
			});*/
			//3si - end commented
		}
		//runToggle = false;

		//setTripPlannerQuantity();
	}
	
	function initTripPanel(){
		//alert('inittrip');
		//$(webVal.tripPanelContainer).css('overflow','hidden');
		if(!tripPanelShowing){ //show
			$(webVal.tripPanelContainer).show();
			$(webVal.tripPanelContainer).css("margin-top",'0px');
			$(this).addClass('tripToggleArrowDown');
			$(this).removeClass('tripToggleArrowUp');
			tripPanelShowing = true;
			//$(webVal.tripPanelContainer).css('overflow','visible');

		}else{ //hide
			//$(webVal.tripPanelContainer).css('margin-top','-'+webVal.tripPanelContainerHeight+'px');
			$(webVal.tripPanelContainer).css("margin-top",'-'+webVal.tripPanelContainerHeight+'px');
			$(webVal.bookPanelContainer).css("margin-top", '-' + webVal.bookPanelContainerHeight + 'px');//added by tin.nb on 2012-10-27
			$(this).addClass('tripToggleArrowUp');
			$(this).removeClass('tripToggleArrowDown');
			tripPanelShowing = false;
			$(webVal.tripPanelContainer).hide();
			$(webVal.bookPanelContainer).hide();
			//$(webVal.tripPanelContainer).hide();
			//$(webVal.tripPanelContainer).css('margin-top','');	
		}
	}
	
	function toggleHeaderMap(){
		if(headerMapShow == true){
			thideHeaderMap();
		}else{
			tshowHeaderMap();
		}
	}
	
	function tshowHeaderMap(){
		$(webVal.headerBarContainer).animate({top: '0px'}, 2000,function() {
			headerMapShow = true;
		});
	}
	
	function thideHeaderMap(){
		$(webVal.headerBarContainer).animate({top: '-'+$(webVal.headerMapBarName).height()+'px'}, 2000,function() {
			headerMapShow = false;
		});
	}
	function keydown(e)
	{
		var unicode=e.keyCode? e.keyCode : e.charCode;
		keyVal = unicode;
	}
	function keyup(e)
	{
		keyVal = '';
	}
	function tInitHeaderNav(){
		//alert('initheade');
		window.onkeydown = keydown;
		window.onkeyup = keyup;


		$(webVal.headerBarContainer).css('top','-'+$(webVal.headerMapBarName).height()+'px');
		$('a[name^=tajaxLoad]').not('.tajaxLoaded').addClass('tajaxLoaded').click(function () {
		    // a[name=tajaxLoad]    -> pop = [name=tAjaxPop]
		    // a[name=tajaxLoadWide] -> pop = [name=tAjaxPopWide]
		    var pop = $('[name=tAjaxPop' + this.name.replace('tajaxLoad', '') + ']');
		    //if (pop.attr('name') == 'tajaxLoadWide') {
		    //    pop.css('top', '104px');
		    //}
		    setDivCenter(pop);
        if (pop.attr('name') == 'tAjaxPopWide') {
          var top = pop.css('top').replace('px','');
           if (top<87) {pop.css('top', '87px');}
        }
		    pop.find('[name=tAjaxContent]').html('');
		    pop.fadeIn('slow');
		    showOverlay();
		    pop.find('.popScroll').jScrollPane().data().jsp.destroy();
		    pop.find('[name=tAjaxContent]').html('');
		    $.ajax({
		        url: $(this).attr('href'),
		        type: 'POST',
		        dataType: 'html',
		        error: function () {
		            //alert("Error");
		        },
		        success: function (obj) {
		            pop.find('[name=tAjaxContent]').html(obj);
		            setDivCenter(pop);
                if (pop.attr('name') == 'tAjaxPopWide') {
                  var top = pop.css('top').replace('px','');
                   if (top<87) {pop.css('top', '87px');}
                }
                    //pop.find('.popScroll').jScrollPane({ maintainPosition: false, autoReinitialise: true, stickToBottom: false, hideFocus: true });
                    jsPaneAPI = pop.find('.popScroll').jScrollPane({ maintainPosition: false, autoReinitialise: true, stickToBottom: false, hideFocus: true }).data('jsp'); ;
		        }
		    });
		    return false;
		})
/*
		$('a[name=tajaxLoad]').click(function(){
			setDivCenter('[name=tAjaxPop]');
			$('[name=tAjaxContent]').html('');
			$('[name=tAjaxPop]').fadeIn('slow');
			showOverlay();
			$('.popScroll').jScrollPane().data().jsp.destroy();
			$('[name=tAjaxContent]').html('');
			$.ajax({
					url: $(this).attr('href'),
					type: 'POST',
					dataType: 'html',
					error: function(){
						//alert("Error");
					},
					success: function(obj){
						$('[name=tAjaxContent]').html('');
						$('[name=tAjaxContent]').html(obj);
						setDivCenter('[name=tAjaxPop]');
                        $('.popScroll').jScrollPane({ maintainPosition: false, autoReinitialise: true, stickToBottom: false, hideFocus: true });
						// new update 20120310
						
					}
				});

			return false;
		})
*/

		$('a[name=tiframeLoad]').click(function(){
			$('[name=tiframePop]').fadeIn('slow');
			setDivCenter('[name=tiframePop]');
			showOverlay();
	
			return true;
		});
		/*
		$('[name=fbShare]').click(function(){
			url=location.href;
			title=document.title;
			window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(url)+'&t='+encodeURIComponent(title),'sharer','toolbar=0,status=0,width=626,height=436');
			return false;
		});
		*/
	}
	
	function fbShare(fbTitle, fbSummary, fbImage, fbUrl) {
		if(fbUrl == '') {
			fbUrl=location.href;
		}
		//alert(fbUrl);
		//http://www.facebook.com/sharer.php?s=100&p[title]=Daddy+Design&p[summary]=Become+a+fan+of+Daddy+Design%21&p[url]=http%3A%2F%2Fwww.facebook.com%2Fwordpressdesign&&p[images][0]=http%3A%2F%2Fwww.daddydesign.com%2FClientsTemp%2FTutorials%2Fcustom-iframe-share-button%2Fimages%2Fthumbnail.jpg','sharer','toolbar=0,status=0,width=548,height=325'); window.location.href='http://www.daddydesign.com/ClientsTemp/Tutorials/custom-iframe-share-button/thankyou.php';"> Share our Facebook page! </a>
		window.open('http://www.facebook.com/sharer.php?s=100&p[title]='+(fbTitle)+'&p[summary]='+(fbSummary)+'&p[url]='+(fbUrl)+'&p[images][0]='+fbImage,'sharer','toolbar=0,status=0,width=626,height=436');
		//window.open('http://www.facebook.com/dialog/feed?app_id=138314939568305&link='+(fbUrl)+'&picture='+fbImage+'&name='+(fbTitle)+'&caption=&description='+(fbSummary)+'&message=&redirect_uri='+(fbUrl),'sharer','toolbar=0,status=0,width=626,height=436');
		//return false;
	}
	
	function moveLogo(){
		//alert('move');
		var marginSpacing = $(webVal.globalHeaderName).position().left;
		if(marginSpacing <= 1){	
			marginSpacing = $(webVal.globalHeaderName).offset().left;
		}
		$(webVal.headerLogoName).css('width', marginSpacing+'px');
		$(webVal.headerLogoName+' div').css('margin-left', marginSpacing+'px');
		
		//$(webVal.headerLogoName).animate({'width': marginSpacing+'px'}, 1000,function() {});
		//$(webVal.headerLogoName+' div').animate({'margin-left': marginSpacing+'px'}, 1000,function() {});
	}
	
	function galleryEnlarge(){
		var mediumImg = $('.tn3-full-image img').attr('src');
		var splitSrc = mediumImg.split('.');
		var largeImg = mediumImg.replace("gallery-large-339x300", "gallery-xlarge-600x400").replace(/\?.+$/,'');

		var imgDiv = $('<div/>',{id : 'tEnlargeContainer'});
		var imgBlock = $('<div/>').css('position','relative');
		
		imgBlock.append($('<img/>').attr('src',largeImg));
		imgClose = $('<div/>').addClass('imgEnlargeClose').click(function(){
			hideOverlay();
			$('#tEnlargeContainer').fadeOut('slow',function(){
				$(this).remove();
			})
			
		});
		imgDiv.append(imgBlock);
		imgBlock.append(imgClose);
		imgDiv.css('position','absolute');
		imgDiv.css('z-index','30000');
		$('body').append(imgDiv)
		
		$('<img />')
        .attr('src', largeImg)
        .load(function(){
			setDivCenter('#tEnlargeContainer');
		});
		
		
		showOverlay();
		$('#tchinitOverlap').click(function(){
			hideOverlay();
			$('#tEnlargeContainer').fadeOut('slow',function(){
				$(this).remove();
			})
			
		})

	}
	
	function getCenter(lat, Lng){
		
		var mapDiv = $('<div/>',{id : 'tCenterMapContainer'});
		var mapBlock = $('<div/>').css('position','relative');
		
		mapBlock.append($('<div/>',{id : 'getMapCanvas'}).css('width','300px').css('height','300').css('background-color','blue'));
		mapClose = $('<div/>').addClass('imgCenterMapClose').click(function(){
			hideOverlay();
			$('#tCenterMapContainer').fadeOut('slow',function(){
				$(this).remove();
			})
		});
		
		mapDiv.append(mapBlock);
		mapBlock.append(mapClose);
		mapDiv.css('position','absolute');
		mapDiv.css('z-index','10000');
		$('body').append(mapDiv);
		
		setDivCenter('#tCenterMapContainer');
		
		showOverlay();
		tGMap("getMapCanvas",lat, Lng);
	}
	
	function tGMap(divName,lat, Lng) {
		var myOptions = {
			center: new google.maps.LatLng(7.002764,103.568115), zoom: 4, mapTypeId: google.maps.MapTypeId.ROADMAP };
        
			new google.maps.Map(document.getElementById(divName), myOptions);				
    }
	
	var viewMapShowing = false
	function showViewMap(curThis,popDiv,lat, Lng, zoomIndex, txtInfo){
		//$('.Pop-Out').hide();
		//$('.PopOut').hide();
		$('[name=tSideNav]').css('background-color','');
		if(!viewMapShowing){
			//alert("show");
			$('.Pop-Out').hide();
			$(curThis).find(popDiv).fadeIn('slow',function(){
				viewMapShowing = true;
			});
			//tGMap("placePopMapCanvas");
			initGMap2(lat, Lng, zoomIndex, "placePopMapCanvas", false, txtInfo);
		}
		
	}
	
	function closeViewMap(curThis,popDiv){
		if(viewMapShowing){
			$(curThis).closest(popDiv).fadeOut('slow',function(){
				viewMapShowing = false;
			});
		}
	}
	
	function setSelectedNav(id){
		$(id).addClass('selected');
	}
	
	function openSideTab(curThis,target){
		$('[name = contentSelector]').removeClass('selected');
		$(curThis).addClass('selected');
		$('[name = tSideTabContent]').hide();
		$(target).fadeIn('slow');
	}


	function initTripSavePromt() {
	    $('a').on('click', function () {

	        if (keyVal == 17) {
	            return true;
	        }
	        var href = $(this).attr('href') || "";
	        tNextLink = href;
	        var name = $(this).attr('name');
	        if (href == '' || href == 'javascript:void();' || href == 'javascript:void()') {
	            return false;
	        }
	        /* start update in 20120310 */
	        if (name == 'tiframeLoad') {
	            var popuplink = $(this).attr('href');
	            $('.iframe-pop-detail iframe').attr("src", popuplink);
	            return false;
	        } else if (name == 'tajaxLoad' || name == 'addRemoveTripBtn') {
	            return false;
	        } else if (name == 'runToggle') {
	            //3si - added by tin.nb on 2012-10-27 - start
	            var clickId = $(this).attr('id');
	            if (!tripPanelShowing) {//tab is closing    -> need to open
	                if (clickId == 'tpbox') {
	                    whichOpening = 0;
	                } else if (clickId == 'bytbox') {
	                    whichOpening = 1;
	                }
	                runToggle = true;
	            }
	            else {//tab is openning
	                if (clickId == 'tpbox') {
	                    if (parseInt(whichOpening) == 0) {//need to close tab
	                        boxNeedClosing = true;
	                        runToggle = true;
	                    }
	                    else {//switch from bytbox to tpbox
	                        whichOpening = 0;
	                    }
	                } else if (clickId == 'bytbox') {
	                    if (parseInt(whichOpening) == 1) {//need to close tab
	                        boxNeedClosing = true;
	                        runToggle = true;
	                    }
	                    else {//switch from tpbox to byt
	                        whichOpening = 1;
	                    }
	                }
	            }
	            //3si - end added
	            //runToggle = true;
	        } else if (name == 'escapeSave') {
	            return false;
	        }

	        /* end update in 20120310 */
	        if ($(this).attr('target') == '_blank') {
	            return true;
	        }
	        if (href.substring(0, 4) == "http") {
	            if ($(this).attr('target') == '_blank') {
	                return true;
	            }
	        }

	        var subHref = href.split('.');
	        if (subHref == 'jpg' || subHref == 'gif' || subHref == 'jpeg' || subHref == 'png') {
	            return true;
	        }
	        //Set hash for current viewing itinerary
	        $('#currentTripHash').val(getHashValue());

	        var tripHash = $('#tripHash').val();
	        var currentTripHash = $('#currentTripHash').val();
	        if (currentTripHash == "") {/*alert('Not saving 0');*/
	            if (tripPanelShowing) {
	                //Fix for remain to do list items when clicked on Trip Planner close
	                resetToDoListInSessionShort();
	            }
	            doneSave();
	            //3si - added by tin.nb on 2012-11-09 to check if it need to get trip planner (from session) or not - start
	            if (!tripPanelShowed && runToggle)//first time TP has been clicked
	            {
	                tripPanelShowed = true;
	                if (($.trim(tripNameFromSession) != "") && ($.trim(emailFromSession) != "")) {
	                    showTripPlanner();
	                    /*
	                    $("#retrieveGuide").trigger("click");
	                    var tnSelector = "#savedTripItem li div[name=" + tripNameFromSession + "]";
	                    $(tnSelector).trigger("click");
	                    //$("#closeSaveGuide").trigger("click");
	                    */
	                }
	            }
	            //3si - end added
	            toggleTripPanel();
	            return true;
	        } else {//alert('Not saving 2dd');
	            if (currentTripHash == tripHash) { //alert('Not saving 1.1');
	                doneSave();
	                toggleTripPanel();

	                return true;
	            } else { //alert('saving 1.1');
	                showOverlay();
	                setDivCenter("#savedPlannerMsgContainer");
	                $("#savedPlannerMsgContainer").show();
	                return false;
	            }
	        }

	        if (!checkSave) {
	            return true;
	        }

	        return true;
	    });
	}

	//3si - added by tin.nb on 2012-11-09 to show trip if it exists - start
	function showTripPlanner() {
	    var dataOption = { saveToEmail: $('#emailToRetrieveGuide').val() };
	    var savedTripPlannerListURL = TP.webService + '?mode=get_trip_planner_list';

	    $.post(savedTripPlannerListURL, dataOption).complete(function (response) {
	        if (response.statusText == 'OK' || response.statusText == 'success') {
	            var responseData = $.parseJSON(response.responseText);
	            if (responseData != null) {
	                for (var i = 0; i < responseData.length; i++) {
	                    var plannerName = responseData[i].plannerName.toString().toLowerCase();
	                    if ($.trim(plannerName) == $.trim(tripNameFromSession.toString().toLowerCase())) {
	                        resetToEmptyItinerary();
	                        setSelectedTripInfo(tripNameFromSession, responseData[i].arrivedDate, responseData[i].dayNO);
                            /*
	                        var dataOption = { todo_val: jsonToPipedIds(arrayToDoList) };
	                        //var targetURL = 'http://www.tourism.gov.my/intl_en/trip_planner/remove_to_do';
	                        var targetURL = TP.webService + '?mode=reset_todo';
	                        $.ajax({
	                            async: false,
	                            type: "POST",
	                            url: targetURL,
	                            data: dataOption,
	                            complete: function (response) {
	                                if (response.statusText == 'OK' || response.statusText == 'success') {
	                                    
	                                }
	                            }
	                        });
                            */
	                        initTripPlannerContent(tripNameFromSession);
	                        break;
	                    }
	                }
	            }
	        }
	    }).error(function (response) {
	        //alert(TP.alert.LoadTPList);
	    });
	}
    //3si - end

	function promtSaveAlert(){
		showOverlay();
		setDivCenter(webVal.tripConfirmSavePop);
		$(webVal.tripConfirmSavePop).fadeIn('slow');
	}
	
	function saveTrip(){
		//call save method
		if(true){
			//doneSave();
			/*
			hideExitToNewNavigationMsgContainer();
			loadTripAsHashValue();
			var hashValue = $('#tripHash').val();	
			if(hashValue == "") {
				doneSave();
			} else {
				$(".TPSavedGuides").trigger('click');
			}	*/					
		}
	}
	
	function cancelSaveTrip(){
		window.location = tNextLink;
		setTripPlannerQuantity();
	}
	
	function closeSaveTrip(){
		hideOverlay();
		$(webVal.tripConfirmSavePop).fadeOut('slow');
		//3si - added by tin.nb on 2012-10-27 - start
		if ((tripPanelShowing == true) && ( parseInt(whichOpening) == 1)) {
		    whichOpening = 0;
		    tabIndex = 0;
		}
        //end added
		//setCheckSave(false);
	}
	
	function setCheckSave(c){
		checkSave = c;
	}
	function doneSave(){
		window.location = tNextLink;
	}
	function initScrollCalander(){
		var dt = new Date();
		thisYear = dt.getFullYear(); 
		thisMonth = dt.getMonth(); 
		//alert(thisMonth);
		
		$(webVal.preScrollCal).css('background-image','url(/tourism/assets/public/images/eventCalander/'+(thisYear-1)+'-l.jpg)');
		$(webVal.preScrollCal).attr('curYear');
		$(webVal.nextScrollCal).css('background-image','url(/tourism/assets/public/images/eventCalander/'+(thisYear+1)+'-r.jpg)');
		$(webVal.nextScrollCal).attr('curYear');
		var listOfYear = $(webVal.monthScrollCal);
		var plus = false;
		for(var i=0; i<listOfYear.length; i++){
			var scWidth = $(listOfYear[i]).width();
			//alert($(listOfYear[i]));
			if($(listOfYear[i]).attr('id') != 'tScrollYear'+thisYear){
				if(plus){
					$(listOfYear[i]).css('margin-left','+'+(scWidth+(50))+'px');
				}else{
					$(listOfYear[i]).css('margin-left','-'+(scWidth+(50))+'px');
				}
				
				
			}else{
				$(listOfYear[i]).css('margin-left','0px');
				plus = true;
			}
		}
		calScrolling = false;
		var lliList = $('#tScrollYear'+thisYear).find('li');

		//$(lliList[parseInt(thisMonth,10)]).addClass('selected');
	}
	function moveToPreYear(){
		if(calScrolling){
			return;
		}
		calScrolling = true;
		var scWidth = $(webVal.monthScrollCal).width();
		$(webVal.preScrollCal).css('pointer','default');
		if($('#tScrollYear'+(thisYear-1)).length == 0){
			/*$('#tScrollYear'+(thisYear)).animate({"margin-left": '+50px'}, 300,function() {
				$('#tScrollYear'+(thisYear)).animate({"margin-left": '0px'}, 300,function() {
					$(webVal.preScrollCal).css('pointer','cursor');
					calScrolling = false;
				});
			});*/
			calScrolling = false;
			return;
		}
		$('#tScrollYear'+thisYear).animate({"margin-left": '+'+(scWidth+(50))+'px'}, 1000,function() {
			thisYear--;
			$(webVal.preScrollCal).css('background-image','url(/tourism/assets/public/images/eventCalander/'+(thisYear-1)+'-l.jpg)');
			$(webVal.nextScrollCal).css('background-image','url(/tourism/assets/public/images/eventCalander/'+(thisYear+1)+'-r.jpg)');
			$('#tScrollYear'+(thisYear)).animate({"margin-left": '0px'}, 1000,function() {
				$(webVal.preScrollCal).css('pointer','cursor');
				calScrolling = false;
				setYearBtn();
			});
		});
		
	}
	
	function moveToNextYear(){
		if(calScrolling){
			return;
		}
		calScrolling = true;
		var scWidth = $(webVal.monthScrollCal).width();
		$(webVal.nextScrollCal).css('pointer','default');
		
		if($('#tScrollYear'+(thisYear+1)).length == 0){
			/*$('#tScrollYear'+(thisYear)).animate({"margin-left": '-50px'}, 300,function() {
				$('#tScrollYear'+(thisYear)).animate({"margin-left": '0px'}, 300,function() {
					$(webVal.preScrollCal).css('pointer','cursor');
					calScrolling = false;
				});
			});
			*/
			calScrolling = false;
			return;
		}
		
		$('#tScrollYear'+thisYear).animate({"margin-left": '-'+(scWidth+(50))+'px'}, 1000,function() {
			thisYear++;
			$(webVal.preScrollCal).css('background-image','url(/tourism/assets/public/images/eventCalander/'+(thisYear-1)+'-l.jpg)');
			$(webVal.nextScrollCal).css('background-image','url(/tourism/assets/public/images/eventCalander/'+(thisYear+1)+'-r.jpg)');
			$('#tScrollYear'+(thisYear)).animate({"margin-left": '0px'}, 1000,function() {
				$(webVal.nextScrollCal).css('pointer','cursor');
				calScrolling = false;
				setYearBtn();
			});
		});
		
	}
	// new add function
	function setYearBtn(){
		
		if($('#tScrollYear'+(thisYear+1)).length == 0){
			$(webVal.nextScrollCal).css('cursor','default');
		}else{
			$(webVal.nextScrollCal).css('cursor','pointer');
		}
		if($('#tScrollYear'+(thisYear-1)).length == 0){
			$(webVal.preScrollCal).css('cursor','default');
		}else{
			$(webVal.preScrollCal).css('cursor','pointer');
		}
	}
	
	
	/* end update in 20120310 */
	
	function initMapStateHover(){
		 $("[name=tstateDetail]").mouseenter(function() {
				lookingStateDetail = true;
		  }).mouseleave(function() {
				lookingStateDetail = false;
				
				hideStateDetail(this,'id');
		  });

	}
	
	function showStateDetail(curThis){
		clearTimeout(hidetimer);
		lookingStateDetail = true;
		$('[name=tstateDetail]').hide();
		var id = $(curThis).attr('name');
		$('#'+id).fadeIn('fast');
		$('#states-hover').removeClass();
		$('#states-hover').addClass(id);
		$('#states-hover').show();
		//$('#tstateMap').attr('src','stateMap/'+id+'.png');
		
	}
	
	
	var hidetimer;
	var lookingStateDetail = false;
	function hideStateDetail(curThis,arg){
		lookingStateDetail = false;
		hidetimer = setTimeout(function(){
			if(!lookingStateDetail){
				//$('#tstateMap').attr('src','/tourism/assets/public/images/stateMap/State-Msia-Map.png');
				$('#states-hover').hide();
				$('#states-hover').removeClass();
				var id = $(curThis).attr(arg);

				$('#'+id).fadeOut('fast');
			}
		},100
		);
	}
	
	function showThisDetail(curThis,showElem){
		$('.Pop-Out').hide();
		$('.PopOut').hide();
		viewMapShowing = false;
		$(showElem).fadeIn('slow');
		$('[name=tSideNav]').css('background-color','');
		$(curThis).css('background-color','#ffffff');
	}
	
	function closeThisDetail(curThis, showElem){
		$(curThis).closest(showElem).fadeOut('slow');
		$('[name=tSideNav]').css('background-color','');
	}
	function nextMore(){
		var moreList = $('[name=showMore]');
		moreList.hide();
		$('[name=showMoreContainer]').append($(moreList[0]));
		$(moreList[0]).fadeIn('slow');
	}

	window.onresize = function (event) {
	    moveLogo();
	}

	
	$(function () {
	    tInitHeaderNav();
	    moveLogo();
	    initTripPanel();
	    initTripSavePromt();
	    initBYTTabs(); //3si - added by tin.nb on 2012-10-29
	    $('.Dlist-wrapper').hide();
	    //$('.tchScroll').tchScroll({});
	    $('.tchScroll').jScrollPane({ maintainPosition: false, autoReinitialise: true, stickToBottom: false, hideFocus: true });
	    var selectSettings = ('settings', {
	        'menuTransition': 'fade',
	        'menuSpeed': 'medium'
	    });

	    $('input[type=checkbox]').checkbox({
	        cls: 'jquery-safari-checkbox',
	        empty: 'images/empty.png'
	    });

	    $("SELECT").selectBox(selectSettings);
	    $(".SeachText").inputInitValue({ initField: '#inputinit' });
	    $('[name^=tAjaxPop]').appendTo('body');
	    $(".cbacc").autoCheck({
	        alltxtElemVal: '#selectalltxt',
	        cleartxtElemVal: '#clearalltxt',
	        txtshow: '#cbacctxt'
	    });
	    $(".cbrating").autoCheck({
	        alltxtElemVal: '#selectalltxt',
	        cleartxtElemVal: '#clearalltxt',
	        txtshow: '#cbratingtxt'
	    });
	    $(".cbprice").autoCheck({
	        alltxtElemVal: '#selectalltxt',
	        cleartxtElemVal: '#clearalltxt',
	        txtshow: '#cbpricetxt'
	    });
	    $(".cbcat").autoCheck({
	        alltxtElemVal: '#selectalltxt',
	        cleartxtElemVal: '#clearalltxt',
	        txtshow: '#cbcattxt',
	        keepDefaultCheck: false
	    });
	    showScroller();
	    $('.tchPagging').tchPagging({
	        startIndex: 1,
	        currentPage: '#tchCurrentPageNo',
	        baseUrl: '',
	        container: '.splitsection',
	        display: {
	            currentPage: '.curPageDis',
	            totalPage: '.totalPageDis'
	        },
	        nextBtn: {
	            btnId: '[name=tchNextPage]',
	            disableCls: 'pageLoading'
	        },
	        preBtn: {
	            btnId: '[name=tchPrePage]',
	            disableCls: 'pageLoading'
	        },
	        totalPage: '#tchLastPageNo',
	        callBack: function () {
	            $("select").selectBox('destroy');
	            $("select").selectBox(selectSettings);
	        },
	        paggingDis: '.paggingNumDis',
	        paggingMaxNum: 5,
	        paggingMinNum: 3
	    });
	    hoverCategory();
	    togglePromotionBar();
	    $('.promotionContent').tchElemSlider({
	        sliderNode: '.showNode',
	        elemShowCount: 3,
	        sliderWarper: '.nodeWarper',
	        paggingDis: '.kPromoPaging',
	        paggingSelectedStyle: 'active',
	        paggingStyle: 'kShowPage',
	        nextBtn: {
	            btnId: '.tchNextNode',
	            disableCls: 'pageLoading'
	        },
	        preBtn: {
	            btnId: '.tchPreNode',
	            disableCls: 'pageLoading'
	        }
	    });
	    if (typeof initAndResetBYTSelectBox != 'undefined') { initAndResetBYTSelectBox(); } //3si - added by tin.nb on 2012-10-30

	    $("#directorySubmit").click(function () {
	        var directoryCheckbox = $('.cbcat');
	        var hascheck = false;
	        for (var i = 0; i < directoryCheckbox.length; i++) {
	            if ($(directoryCheckbox[i]).is(':checked')) {
	                hascheck = true;
	                break;
	            }
	        }
	        if (!hascheck) {
	            $('#cbcattxt').trigger("click");

	        }
	        $('#form1').trigger('submit');

	    })


	});

	function showScroller() {
	    $('.imgScroll').fadeIn(3000, function () {
	        setTimeout('$(".imgScroll").fadeOut(1500);', 3000);
	    });

	    $('.dltripcontainer').fadeIn(3000, function () {
	        setTimeout('$(".dltripcontainer").fadeOut(1500);', 15000);
	    });

	    $(window).scroll(function () {
	        $('.imgScroll').fadeOut(1500);
	        $('.dltripcontainer').fadeOut(1500);
	    });
	}

    function togglePromotionBar() {
	    if (promotionShowing) {
		    $(webVal.promotionBarName).animate({"bottom": webVal.promotionBarClose + 'px'}, 300, function() {
			    promotionShowing = false;
			    $('.toggleArrow').html('<img src="images/promotion-ArrowUp.png" border="0" />&nbsp;&nbsp;&nbsp;' + $('#promoExpTxt').val());
		    });
	    } else {
		    $(webVal.promotionBarName).animate({"bottom": webVal.promotionBarShow + 'px'}, 1000, function() {
			    promotionShowing = true;
			    $('.toggleArrow').html('<img src="images/promotion-ArrowDown.png" border="0" />&nbsp;&nbsp;&nbsp;' + $('#promoColTxt').val());
		    });
	    }
    } 

    function gotopage(page_num){
		document.getElementById('page').value = page_num;
		//document.forms['acc_search'].submit();
		$('[name="formSubmit"]').trigger('click');
	}

    function sortby(type){
		document.getElementsByName('sort').value = type;
		//document.forms['acc_search'].submit();
		$('[name="formSubmit"]').trigger('click');
	}

    function showCategory() {
            $('.Dlist-wrapper').show();
            $('.Dlist-wrapper .Dlist').animate({top:'0'},500);
    }

    function hideCategory() {
        $('.Dlist-wrapper .Dlist').animate({top:'-214px'},500, function() { $('.Dlist-wrapper').hide(); });
    }

    function hoverCategory() {
        $('.Dlist li').hover(
            function() {
                $(this).addClass("hover");
            },
            function() {
                $(this).removeClass("hover");
            }
        );
    }