"use strict";

!function () {
  !function () {
    var t = $("ratings-distribution"),
        i = parseFloat(t.attr("all-votes")),
        s = 0,
        r = 0;t.find("rating-block").each(function () {
      s = parseFloat($(this).attr("receive-votes")), (r = parseFloat(s / i * 100)) > 0 ? $(this).find("progress-bar").css("width", r + "%") : $(this).find("progress-bar").hide();
    });
  }();
}();