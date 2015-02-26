/*

@param container
@param content
@param next
@param pre
@param callBack 

*/
if (jQuery) (function ($) {

    $.extend($.fn, {
        tchPagging: function (option, method) {
            option.startIndex = option.startIndex || 1;
            option.currentPage = $(option.currentPage).val() || option.startIndex;
            option.baseUrl = option.baseUrl || '';
            option.container = option.container || '';
            option.nextBtn.btnId = option.nextBtn.btnId || '';
            option.nextBtn.disableCls = option.nextBtn.disableCls || '';
            option.preBtn.btnId = option.preBtn.btnId || '';
            option.preBtn.disableCls = option.preBtn.disableCls || '';
            option.display.currentPage = option.display.currentPage || '';
            option.display.totalPage = option.display.totalPage || '';
            option.totalPage = option.totalPage || '';
            option.paggingDis = option.paggingDis || '';
            option.paggingMaxNum = option.paggingMaxNum || 0;
            option.paggingMinNum = option.paggingMinNum || 0;

            var curPage;
            var lastPage;
            var firstPage;
            var callbacks;


            var drawPaggingNum = function () {
                var pageNumDistance = option.paggingMaxNum - option.paggingMinNum;
                var ul = $('<ul/>');
                var from = ((curPage - pageNumDistance) <= 0) ? 1 : curPage - pageNumDistance;
                var to = ((curPage + pageNumDistance) > lastPage) ? lastPage : curPage + pageNumDistance; ;

                if (curPage > 1) {

                    ul.append(getLi("&lt;", function () { backPage(); }, ''));
                }
                for (var i = from; i <= to; i++) {
                    var selected = '';
                    if (i == curPage) {
                        selected = 'selected';
                    }
                    ul.append(getLi(i, function () { navToPageNum(this); }, selected));
                }
                if (curPage < lastPage) {
                    ul.append(getLi("&gt;", function () { goPage(); }, ''));
                }
                $(option.paggingDis).html('');
                $(option.paggingDis).append(ul);

            }

            var getLi = function (text, fun, selected) {
                var li = $('<li/>');
                var a = $('<a>').html(text);
                $(a).attr('href', 'javascript:void();');
                if (selected != '') {
                    $(li).addClass('selected');
                } else {
                    $(a).click(fun);
                }
                li.append(a);
                return li;

            }

            var callBackFun = function () {
                if ($.isFunction(option.callBack)) {
                    callbacks.fire();
                }
            }
            var lockClick = function () {
                $(option.nextBtn.btnId).addClass(option.nextBtn.disableCls);
                $(option.preBtn.btnId).addClass(option.nextBtn.disableCls);

            }
            var releaseClick = function () {
                $(option.nextBtn.btnId).removeClass(option.nextBtn.disableCls);
                $(option.preBtn.btnId).removeClass(option.nextBtn.disableCls);
            }
            var warpChild = function (curThis, leftPos, width, height) {
                var containerDIV = $('<div/>');
                containerDIV.addClass("tchPaggingWarp");

                containerDIV.css({
                    height: height + 'px',
                    width: width + 'px',
                    position: 'absolute',
                    top: '0px',
                    left: leftPos + 'px'

                })

                $(curThis).children().wrapAll(containerDIV);
            }
            var pageCheck = function () {
                $(option.nextBtn.btnId).removeClass(option.nextBtn.disableCls);
                $(option.preBtn.btnId).removeClass(option.nextBtn.disableCls);
                if (curPage >= lastPage) {
                    $(option.nextBtn.btnId).addClass(option.nextBtn.disableCls);
                }
                if (curPage <= firstPage) {
                    $(option.preBtn.btnId).addClass(option.preBtn.disableCls);
                }

                $(option.display.currentPage).html('');
                $(option.display.totalPage).html('');
                $(option.display.currentPage).html(curPage);
                $(option.display.totalPage).html(lastPage);
            }
            var paggingAnimate = function (curThis, moveDistance) {
                releaseClick();
                pageCheck();
                drawPaggingNum();
                $(curThis).find('.tchPaggingRemove').delay(20).animate({
                    "left": moveDistance + 'px'
                }, 1000, function () {

                });
                $(curThis).find('.tchPaggingWarp').delay(20).animate({
                    "left": '0px'
                }, 1000, function () {
                    // Animation complete.
                    $(curThis).find('.tchPaggingRemove').remove();


                });
            }
            var navToPageNum = function (curThis) {
                var pagenum = parseInt($(curThis).html(),10);
                if (pagenum < curPage) {
                    curPage = pagenum + 1;
                    backPage();
                } else {
                    curPage = pagenum - 1;
                    goPage();
                }
            }
            var goPage = function () {
                if ($(option.nextBtn.btnId).hasClass(option.nextBtn.disableCls)) {
                    return false;
                }
                lockClick();
                curPage++;

                $.ajax({
                    url: option.baseUrl + "?page=" + curPage,
                    type: 'GET',
                    dataType: 'html',
                    error: function () {

                    },
                    success: function (obj) {
                        var loadedHtml = $(obj);

                        var filteredContainer = loadedHtml.find(option.container);
                        var curContainer = $(option.container);
                        var tempDiv
                        for (var i = 0; i < curContainer.length; i++) {
                            if (i < filteredContainer.length) {
                                tempDiv = $(filteredContainer[i]);
                                warpChild(tempDiv, $(curContainer[i]).outerWidth(), $(curContainer[i]).outerWidth(), $(curContainer[i]).outerHeight());

                            } else {
                                tempDiv = $(filteredContainer[0]).clone();
                                warpChild(tempDiv, $(curContainer[i]).outerWidth(), $(curContainer[i]).outerWidth(), $(curContainer[i]).outerHeight());
                                $(tempDiv).find('.tchPaggingWarp').html('');
                            }

                            $(curContainer[i]).find('.tchPaggingWarp').addClass('tchPaggingRemove');
                            $(curContainer[i]).find('.tchPaggingWarp').removeClass('tchPaggingWarp');
                            $(curContainer[i]).append($(tempDiv).find('.tchPaggingWarp').clone());
                            paggingAnimate($(curContainer[i]), '-' + $(curContainer[i]).outerWidth());

                        }
                        obj = null;

                        callBackFun();
                    }
                });
            }
            var backPage = function () {
                if ($(option.preBtn.btnId).hasClass(option.preBtn.disableCls)) {
                    return false;
                }
                lockClick();
                curPage--;
                $.ajax({
                    url: option.baseUrl + "?page=" + curPage,
                    type: 'GET',
                    dataType: 'html',
                    error: function () {

                    },
                    success: function (obj) {
                        var loadedHtml = $(obj);

                        var filteredContainer = loadedHtml.find(option.container);
                        var curContainer = $(option.container);

                        for (var i = 0; i < filteredContainer.length; i++) {
                            warpChild($(filteredContainer[i]), '-' + $(curContainer[i]).outerWidth(), $(curContainer[i]).outerWidth(), $(curContainer[i]).outerHeight());
                            $(curContainer[i]).find('.tchPaggingWarp').addClass('tchPaggingRemove');
                            $(curContainer[i]).find('.tchPaggingWarp').removeClass('tchPaggingWarp');
                            $(curContainer[i]).append($(filteredContainer[i]).find('.tchPaggingWarp'));
                            paggingAnimate($(curContainer[i]), '+' + $(curContainer[i]).outerWidth());
                        }
                        callBackFun();
                    }
                });
            }
            var init = function (curThis) {
                curPage = option.currentPage;
                lastPage = $(option.totalPage).val();
                firstPage = option.startIndex;

                $(curThis).find(option.container).css('position', 'relative');
                $(curThis).find(option.container).css('width', $(curThis).find(option.container).outerWidth() + 'px');
                $(curThis).find(option.container).css('height', $(curThis).find(option.container).outerHeight() + 'px');
                $(curThis).find(option.container).each(function () {
                    warpChild(this, 0, $(this).outerWidth(), $(this).outerHeight());
                })
                callbacks = $.Callbacks();
                callbacks.add(option.callBack);
                pageCheck();
                drawPaggingNum();
                $(option.nextBtn.btnId).click(function () {
                    goPage();
                })

                $(option.preBtn.btnId).click(function () {
                    backPage();
                })
            }

            switch (method) {
                case 'go':
                    // Getter
                    goPage();
                    break;
                case 'back':
                    // Getter
                    backPage();
                    break;

                default:
                    $(this).each(function () {
                        init(this);
                    });
                    break;
            }
            return $(this);
        }

    });

})(jQuery);

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