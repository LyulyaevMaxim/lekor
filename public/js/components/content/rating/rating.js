"use strict";

!function () {
  var t = $("ratings-distribution"),
      s = parseFloat(t.attr("all-votes")),
      i = 0,
      r = 0;t.find("rating-block").each(function () {
    i = parseFloat($(this).attr("receive-votes")), (r = parseFloat(i / s * 100)) > 0 ? $(this).find("progress-bar").css("width", r + "%") : $(this).find("progress-bar").hide();
  });
}();