	function tScroller(container, content, scroller){
		tScroller(container, content, scroller, false);
	}
	function tScroller(container, content, scroller, noli){
		$(content).css('height','auto');
		$(container).css('overflow','hidden');
		$(scroller).addClass('tscroller');
		//var containerHeight = $(container).height() -  (convertPXtoInt($(container).css('padding-top')) + convertPXtoInt($(container).css('padding-bottom'))+ convertPXtoInt($(container).css('margin-bottom'))+ convertPXtoInt($(container).css('margin-top')));
		var containerHeight = $(container).height() -  (convertPXtoInt($(container).css('padding-top')) + convertPXtoInt($(container).css('padding-bottom')));

		var y = $(convertPXtoInt($(container).css('padding-top')));
		//alert(convertPXtoInt($(container).css('margin-bottom')));
		var contentHeight = $(content).height() -  (convertPXtoInt($(content).css('padding-top')) + convertPXtoInt($(content).css('padding-bottom')))
		var scrollerHeight =$(scroller).height() +  (convertPXtoInt($(scroller).css('padding-top')) + convertPXtoInt($(scroller).css('padding-bottom')));
		var contentChildList = $(content+' li');
		var contentChildHeight = 0;
		//alert("containerHeight :"+containerHeight+"contentHeight :"+contentHeight+"scrollerHeight :"+$(scroller).height()+"distance :"+distance);
		for(var i=0; i<contentChildList.length; i++){

			contentChildHeight = contentChildHeight + ($(contentChildList[i]).height() +  (convertPXtoInt($(contentChildList[i]).css('padding-top')) + convertPXtoInt($(contentChildList[i]).css('padding-bottom'))+convertPXtoInt($(contentChildList[i]).css('margin-top')) + convertPXtoInt($(contentChildList[i]).css('margin-bottom'))));
			
		}
		//alert(contentChildHeight +">"+ contentHeight);
		//contentChildHeight = contentChildHeight / liRate;
		

		if(contentChildHeight > contentHeight && !noli){
			contentHeight = contentHeight;
		}
		
		//alert(contentHeight);
		var distance = contentHeight - containerHeight;
		
		//alert("containerHeight :"+containerHeight+"contentHeight :"+contentHeight+"scrollerHeight :"+scrollerHeight+"distance :"+distance);
		if(distance > 0){
			distance = distance+convertPXtoInt($(container).css('margin-top')) + convertPXtoInt($(container).css('margin-bottom'));
			$(scroller).show();
			var c = $(scroller).find('div');
			if(c.length <= 0){
				$(scroller).mouseenter(function(){
			
					$(scroller).css('opacity', '1');
					
				}).mouseleave(function(){
					if($($(this).parent()).find('[name = tchScrollering]').val() == 'false'){
						$(scroller).css('opacity', '0.5');
					}
				});
				$(scroller).find('[name = tchScrollerContainer]').remove();
				$(scroller).find('[name = tchScrollerContent]').remove();
				$(scroller).find('[name = tchScrollerDistance]').remove();
				$(scroller).find('[name = tchScrollering]').remove();
				$(scroller).find('[name = tchScroller]').remove();
				$(container).find('[name = tchScrollerName]').remove();
				
				
				
				$(scroller).append($('<input/>',{name:'tchScrollerContainer',type:'hidden'}).val(container));
				$(scroller).append($('<input/>',{name:'tchScrollerContent',type:'hidden'}).val(content));
				$(scroller).append($('<input/>',{name:'tchScrollerDistance',type:'hidden'}).val(distance));
				$(scroller).append($('<div/>',{name:'tchScroller'}));
				$(scroller).append($('<input/>',{name:'tchScrollering',type:'hidden'}).val('false'));
				$(container).append($('<input/>',{name:'tchScrollerName',type:'hidden'}).val(scroller));
				
				//alert(scrollerHeight);
				//alert(parseInt($(scroller).find('[name = tchScroller]').css('margin-bottom'),10));
				//alert(parseInt($(scroller).find('[name = tchScroller]').css('margin-top'),10));
				
				$(scroller).find('[name = tchScroller]').css('height', scrollerHeight - (convertPXtoInt($(scroller).find('[name = tchScroller]').css('margin-top')) + convertPXtoInt($(scroller).find('[name= tchScroller]').css('margin-bottom'))+convertPXtoInt($(scroller).css('padding-top')) + convertPXtoInt($(scroller).css('padding-bottom'))));
				$(scroller).addClass('ui-widget-content');
				$(scroller).addClass('ui-corner-all');
				
			}else{	
				$(scroller).find('[name = tchScrollerDistance]').val(distance);
				$(scroller+' div').slider('destroy');
				//$(scroller+' div').remove();
				//alert('remove');
			}
			var val = (distance + convertPXtoInt($(content).css('margin-top')));
			//alert(val);
			distance = distance ;

			$(scroller+' div').slider({
					orientation: "vertical",
					value:val,
					min: 0,
					max: distance,
					step: 1,
					slide: function( event, ui ) {
					
						var tchScrollerContainer = $($(this).parent()).find('[name = tchScrollerContainer]').val();
						var tchScrollerContent = $($(this).parent()).find('[name = tchScrollerContent]').val();
						var distance = $($(this).parent()).find('[name = tchScrollerDistance]').val();
						var value = ui.value;
						$(tchScrollerContent).css('margin-top','-'+(distance-value)+'px');
					
					},
					change: function( event, ui ) {
					
						var tchScrollerContainer = $($(this).parent()).find('[name = tchScrollerContainer]').val();
						var tchScrollerContent = $($(this).parent()).find('[name = tchScrollerContent]').val();
						var distance = $($(this).parent()).find('[name = tchScrollerDistance]').val();
						var value = ui.value;
						$(tchScrollerContent).css('margin-top','-'+(distance-value)+'px');
						
					},
					start: function( event, ui ) {
					
						var tchScrollerContainer = $($(this).parent()).find('[name = tchScrollerContainer]').val();
						var tchScrollerName = $($(tchScrollerContainer).parent()).find('[name = tchScrollerName]').val();
						$(tchScrollerName).css('opacity', '1');
						$($(this).parent()).find('[name = tchScrollering]').val('true');
						
					},
					stop: function( event, ui ) {
					
						var tchScrollerContainer = $($(this).parent()).find('[name = tchScrollerContainer]').val();
						var tchScrollerName = $($(tchScrollerContainer).parent()).find('[name = tchScrollerName]').val();
						$(tchScrollerName).css('opacity', '0.5');
						$($(this).parent()).find('[name = tchScrollering]').val('false');
						
					}
				});
		}else{
			$(scroller+' div').slider('destroy');
			$(scroller).hide();
			$(content).css('margin-top','0px');
		}
		
		if(true){
			$(container).bind('mousewheel', function(event, delta) {
				if(delta > 0){
					//up
					var scrollName = $($(this).parent()).find('[name = tchScrollerName]').val();
					
					var value = parseInt($(scrollName+' div').slider('value'))+10; 
					$(scrollName+' div').slider('value',value);
				}else{
					//down
					var scrollName = $($(this).parent()).find('[name = tchScrollerName]').val();
					
					var value = parseInt($(scrollName+' div').slider('value'))-10; 
					$(scrollName+' div').slider('value',value);
					
					
				}
				return false;
			});
		}

	}