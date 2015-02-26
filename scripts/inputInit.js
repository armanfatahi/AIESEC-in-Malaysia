/*

@ Author , Owner TAN CHYN HORMG

*/
if (jQuery) (function ($) {

    $.extend($.fn, {
        inputInitValue: function (option, method) {
            option.initField = option.initField || '';
            var initVal = $(option.initField).val();
            this.each(function () {

                var initValue = initVal;
                jQuery.data(this, "initVal", initValue);
                $(this).click(function () {
                    if ($(this).val() == jQuery.data(this, "initVal")) {
                        $(this).val("");
                    }
                })
                $(this).focusout(function () {
                    if ($(this).val() == "") {
                        $(this).val(jQuery.data(this, "initVal"));
                    }
                })


            });

            return $(this);
        }

    });

})(jQuery);