$( function() {
    //init week trending carousel
    $('.week-trending-carousel').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000      
    });

} );

( function($) {    
    //init ion range slider
    $("#price-range").ionRangeSlider({
        type: "double",
    grid: false,
    min: 0,
    max: 1000,
    from: 200,
    to: 800,
    prefix: "$",
    hide_min_max: true
    });

    // init jQuerry form styler
    $('.select-stayler, .input-file-stayler').styler();
})(jQuery);