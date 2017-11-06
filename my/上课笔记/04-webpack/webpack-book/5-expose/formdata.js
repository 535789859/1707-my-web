!(function ($) {
     $.fn.extend({
        "formdata": function () {
            ///<summary>
            /// 加粗字体
            ///</summary>
            return $(this).serializeArray()
        }
    });
})(jQuery)