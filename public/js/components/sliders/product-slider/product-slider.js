'use strict';

;(function () {
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
      onSliderLoad: function onSliderLoad() {
        $('.product-slider-container').removeClass('cS-hidden');
      },
      responsive: [{
        breakpoint: 767,
        settings: {
          gallery: false
        }
      }]
    });
  }
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlcnMvcHJvZHVjdC1zbGlkZXIvcHJvZHVjdC1zbGlkZXIuanMiXSwibmFtZXMiOlsicHJvZHVjdFNsaWRlciIsInNsaWRlcl9nYWxsZXJ5IiwiJCIsImxpZ2h0U2xpZGVyIiwiZ2FsbGVyeSIsIml0ZW0iLCJ0aHVtYkl0ZW0iLCJzbGlkZU1hcmdpbiIsInNwZWVkIiwiYXV0byIsImxvb3AiLCJvblNsaWRlckxvYWQiLCJyZW1vdmVDbGFzcyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBRyxhQUFZO0FBQ2JBOztBQUVBLFdBQVNBLGFBQVQsR0FBeUI7QUFDdkIsUUFBSUMsaUJBQWlCQyxFQUFFLDJCQUFGLEVBQStCQyxXQUEvQixDQUEyQztBQUM5REMsZUFBUyxJQURxRDtBQUU5REMsWUFBTSxDQUZ3RDtBQUc5REMsaUJBQVcsQ0FIbUQ7QUFJOURDLG1CQUFhLENBSmlEO0FBSzlEQyxhQUFPLEdBTHVEO0FBTTlEQyxZQUFNLEtBTndEO0FBTzlEQyxZQUFNLElBUHdEO0FBUTlEQyxvQkFBYyx3QkFBWTtBQUN4QlQsVUFBRSwyQkFBRixFQUErQlUsV0FBL0IsQ0FBMkMsV0FBM0M7QUFDRCxPQVY2RDtBQVc5REMsa0JBQVksQ0FDVjtBQUNFQyxvQkFBWSxHQURkO0FBRUVDLGtCQUFVO0FBQ1JYLG1CQUFTO0FBREQ7QUFGWixPQURVO0FBWGtELEtBQTNDLENBQXJCO0FBb0JEO0FBRUYsQ0ExQkUsR0FBRCIsImZpbGUiOiJzbGlkZXJzL3Byb2R1Y3Qtc2xpZGVyL3Byb2R1Y3Qtc2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiOyAoZnVuY3Rpb24gKCkge1xuICBwcm9kdWN0U2xpZGVyKCk7XG5cbiAgZnVuY3Rpb24gcHJvZHVjdFNsaWRlcigpIHtcbiAgICB2YXIgc2xpZGVyX2dhbGxlcnkgPSAkKCcucHJvZHVjdC1zbGlkZXItY29udGFpbmVyJykubGlnaHRTbGlkZXIoe1xuICAgICAgZ2FsbGVyeTogdHJ1ZSxcbiAgICAgIGl0ZW06IDEsXG4gICAgICB0aHVtYkl0ZW06IDUsXG4gICAgICBzbGlkZU1hcmdpbjogMCxcbiAgICAgIHNwZWVkOiA1MDAsXG4gICAgICBhdXRvOiBmYWxzZSxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBvblNsaWRlckxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnByb2R1Y3Qtc2xpZGVyLWNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdjUy1oaWRkZW4nKTtcbiAgICAgIH0sXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIGdhbGxlcnk6IGZhbHNlLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICB9XG5cbn0oKSk7Il19
