; (function () {
  fullSlider();

  function fullSlider() {
    var owl = $('.owl-full-slider');
    owl.owlCarousel({
      margin: 0,
      items: 1,
      nav: false,
      navText: true,
      loop: true,
      dots: false,
      lazyLoad: true,
      responsive: {
        768: {
          dots: true,
          nav: true
        }
      }
    })
  }

}());