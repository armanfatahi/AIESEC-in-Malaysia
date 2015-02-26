/*

@param container
@param content
@param next
@param pre
@param callBack 

*/
if (jQuery) (function ($) {

    $.extend($.fn, {
        tchElemSlider: function (option, method) {
            var sliderWarper = option.sliderWarper || '';
            var sliderNode = option.sliderNode || '';
            var elemShowCount = option.elemShowCount || 1;
            var nextBtnbtnId = option.nextBtn.btnId || '';
            var nextBtndisableCls = option.nextBtn.disableCls || '';
            var preBtnbtnId = option.preBtn.btnId || '';
            var preBtndisableCls = option.preBtn.disableCls || '';
            var paggingDis = option.paggingDis || '';
            var paggingSelectedStyle = option.paggingSelectedStyle || '';
            var paggingStyle = option.paggingStyle || '';

            var getDisplayNodeWidth = function (from, showCount, nodeList) {
                var to = (from - 1) + showCount;
                var totalWidth = 0;
                for (var i = from; i <= to; i++) {
                    totalWidth = totalWidth + $(nodeList[i]).outerWidth();
                }
                return totalWidth;
            }

            var slideAnimate = function (curThis, moveDistance, parrent, nodeList) {
                $(nextBtnbtnId).addClass(nextBtndisableCls);
                $(preBtnbtnId).addClass(preBtndisableCls);
                $(curThis).delay(20).animate({
                    "margin-left": moveDistance + 'px'
                }, 2000, function () {
                    pageCheck(parrent);
                    drawPage(parrent, nodeList);
                });
            }

            var countPage = function (totalNode, elemShowCount) {
                var page = Math.ceil(totalNode / elemShowCount);
                return page;
            }

            var drawPage = function (parrent, nodeList) {
                $(paggingDis).empty();
                var totaPage = jQuery.data(parrent, "totalPage");
                var currentPage = jQuery.data(parrent, "currentPage");

                for (var i = 1; i <= totaPage; i++) {
                    var a = $('<a/>');
                    $(a).addClass(paggingStyle);
                    $(a).attr('page', i);
                    if (i == currentPage) {
                        $(a).addClass(paggingSelectedStyle);

                    }
                    $(a).click(function (i) {
                        var currentPage = jQuery.data(parrent, "currentPage");
                        if (currentPage == parseInt($(this).attr('page'), 10)) {
                            return false;
                        }

                        if (currentPage < parseInt($(this).attr('page'), 10)) {
                            var current = jQuery.data(parrent, "current");
                            var currentmargin = jQuery.data(parrent, "currentmargin");
                            var totalWidth = getDisplayNodeWidth(current, ((parseInt($(this).attr('page'), 10) - currentPage) * elemShowCount), nodeList);
                            currentmargin = currentmargin - totalWidth
                            slideAnimate($(parrent).find(sliderWarper), currentmargin, parrent, nodeList);

                            current = current + elemShowCount;
                            jQuery.data(parrent, "currentmargin", currentmargin);
                            jQuery.data(parrent, "current", parseInt($(this).attr('page'), 10) * elemShowCount);
                            jQuery.data(parrent, "currentPage", parseInt($(this).attr('page'), 10));
                            
                            return false;
                        }
                        if (currentPage > parseInt($(this).attr('page'), 10)) {
                            var current = jQuery.data(parrent, "current");
                            var currentmargin = jQuery.data(parrent, "currentmargin");
                            var currentPage = jQuery.data(parrent, "currentPage");
                            var totalWidth = getDisplayNodeWidth((((parseInt($(this).attr('page'), 10) - 1) * elemShowCount) + 1), ((currentPage - parseInt($(this).attr('page'), 10)) * elemShowCount), nodeList);
                            currentmargin = currentmargin + totalWidth
                            slideAnimate($(parrent).find(sliderWarper), currentmargin, parrent, nodeList);

                            current = current + elemShowCount;
                            jQuery.data(parrent, "currentmargin", currentmargin);
                            jQuery.data(parrent, "current", parseInt($(this).attr('page'), 10) * elemShowCount);
                            jQuery.data(parrent, "currentPage", parseInt($(this).attr('page'), 10));
                           
                            return false;
                        }
                    })
                    $(paggingDis).append(a);
                }



            }

            var pageCheck = function (parrent) {
                $(nextBtnbtnId).removeClass(nextBtndisableCls);
                $(preBtnbtnId).removeClass(preBtndisableCls);
                if (jQuery.data(parrent, "currentPage") == 1) {
                    $(preBtnbtnId).addClass(preBtndisableCls);
                }
                if (jQuery.data(parrent, "currentPage") >= jQuery.data(parrent, "totalPage")) {
                    $(nextBtnbtnId).addClass(preBtndisableCls);
                }
            }

            this.each(function () {
                var nodeList = $(this).find(sliderNode);
                var totalnode = nodeList.length;
                var parrent = this;
                jQuery.data(parrent, "current", 1);
                jQuery.data(parrent, "currentmargin", 0);
                jQuery.data(parrent, "totalPage", countPage(totalnode, elemShowCount));
                jQuery.data(parrent, "currentPage", 1);

                pageCheck(parrent);
                drawPage(parrent, nodeList);

                $(nextBtnbtnId).click(function () {
                    if ($(this).hasClass(nextBtndisableCls)) {
                        return false;
                    }
                    var current = jQuery.data(parrent, "current");
                    var currentmargin = jQuery.data(parrent, "currentmargin");
                    var totalWidth = getDisplayNodeWidth(current, elemShowCount, nodeList);
                    currentmargin = currentmargin - totalWidth
                    slideAnimate($(parrent).find(sliderWarper), currentmargin, parrent, nodeList);

                    current = current + elemShowCount;
                    jQuery.data(parrent, "currentmargin", currentmargin);
                    jQuery.data(parrent, "current", current);
                    jQuery.data(parrent, "currentPage", jQuery.data(parrent, "currentPage") + 1);
                    
                });

                $(preBtnbtnId).click(function () {
                    if ($(this).hasClass(preBtndisableCls)) {
                        return false;
                    }
                    var current = jQuery.data(parrent, "current");
                    var currentmargin = jQuery.data(parrent, "currentmargin");
                    var totalWidth = getDisplayNodeWidth(current - elemShowCount, elemShowCount, nodeList);
                    currentmargin = currentmargin + totalWidth
                    slideAnimate($(parrent).find(sliderWarper), currentmargin, parrent, nodeList);

                    current = current - elemShowCount;
                    jQuery.data(parrent, "currentmargin", currentmargin);
                    jQuery.data(parrent, "current", current);
                    jQuery.data(parrent, "currentPage", jQuery.data(parrent, "currentPage") - 1);
                   
                });
            })


            return $(this);
        }

    });

})(jQuery);