"use strict";

!function () {
  if (document.documentElement.clientWidth > 1439) {
    var t = $("block-for-items");t.css("height", parseFloat(t.find("item").css("height")));
  }
}();