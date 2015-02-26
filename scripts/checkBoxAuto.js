/*

@ Author , Owner TAN CHYN HORMG

*/
if (jQuery) (function ($) {

    $.extend($.fn, {
        autoCheck: function (option, method) {
            var totalThis = $(this);
            option.alltxtElemVal = option.alltxtElemVal || '';
            option.cleartxtElemVal = option.cleartxtElemVal || '';
            option.txtshow = option.txtshow || '';
            option.keepDefaultCheck = option.keepDefaultCheck || false;
            minCheck = option.minCheck || 0;
            var checkField = function (curThis) {
                var totalCheck = 0;
                for (var i = 0; i < totalThis.length; i++) {
                    if ($(totalThis[i]).is(':checked')) {
                        totalCheck++;
                    }
                    if (totalCheck > 1) {
                        $(option.txtshow).html($(option.cleartxtElemVal).val());
                        $(option.txtshow).addClass("isCheckAll");
                        break;
                    } else {
                        $(option.txtshow).html($(option.alltxtElemVal).val());
                        $(option.txtshow).removeClass("isCheckAll");
                    }

                }
                if (minCheck > 0) {
                    if (totalCheck <= minCheck) {
                        return false;
                    }
                }


            };

            var checkAction = function () {
                if ($(option.txtshow).hasClass("isCheckAll")) {
                    $(totalThis).removeAttr('checked');
                    for (var i = 0; i < totalThis.length; i++) {
                        if ($(totalThis[i]).hasClass('keepCheck') && option.keepDefaultCheck) {
                            $(totalThis[i]).attr('checked', 'checked');
                        }
                    }
                } else {
                    $(totalThis).attr('checked', 'checked');
                }
                checkField(this);
            }
            checkField();
            $(option.txtshow).click(checkAction);
            this.each(function () {
                $(this).change(checkField);
                if ($(this).is(':checked')) {
                    $(this).addClass('keepCheck');
                }
            });

            return $(this);
        }

    });

})(jQuery);