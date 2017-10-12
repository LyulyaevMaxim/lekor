; (function () {
  productSlider();

  function productSlider() {
    var slider_gallery = $('.product-slider-container').lightSlider({
      gallery: true,
      item: 1,
      thumbItem: 5,
      slideMargin: 0,
      speed: 500,
      auto: false,
      loop: true,
      onSliderLoad: function () {
        $('.product-slider-container').removeClass('cS-hidden');
      },
      responsive: [
        {
          breakpoint: 767,
          settings: {
            gallery: false,
          }
        }
      ]
    });
  }

}());