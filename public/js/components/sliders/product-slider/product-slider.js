"use strict";

$(".product-slider-container").lightSlider({ gallery: !0, item: 1, thumbItem: 5, slideMargin: 0, speed: 500, auto: !1, loop: !0, onSliderLoad: function onSliderLoad() {
                $(".product-slider-container").removeClass("cS-hidden");
        }, responsive: [{ breakpoint: 767, settings: { gallery: !1 } }] });