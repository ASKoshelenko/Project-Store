( function($) { 
    // init slicknav
    if($('.header-nav').length) {
        $('.header-nav').slicknav({
            appendTo: '.bottom-header .container',
            label: "Menu"
        });
    }    

    //init week trending carousel
    if ($('.week-trending-carousel').length) {
      $('.week-trending-carousel').slick({
            arrows: false,
            dots: true,
            // autoplay: true,
            // autoplaySpeed: 5000,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
    }

    // Init ion range slider
    if ( $("#price-range").length) {
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
    }

    // Init jquery form stayler
    if ($('.select-stayler, .input-file-stayler').length) {
        $('.select-stayler, .input-file-stayler').styler();
    }
})(jQuery);