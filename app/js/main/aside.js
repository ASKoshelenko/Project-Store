;(function ($) {
    let asideToggleBtn = $(".mobile-aside-toggle");
    let body = $("body");
    let closeAside = $(".close-mobile-aside");

    function toggleAside(e) {
        body.toggleClass("show-aside");
    }

    asideToggleBtn.on("click", toggleAside);
    closeAside.on("click", toggleAside);
})(jQuery);