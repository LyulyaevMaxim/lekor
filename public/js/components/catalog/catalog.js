"use strict";

!function () {
  $("block-for-filters").find("accordion .range-min-max").each(function () {
    var a = $(this),
        t = a.find("~ .range__min-value > p"),
        s = a.find("~ .range__max-value > p"),
        i = parseFloat(a.attr("min")),
        e = parseFloat(a.attr("max")),
        l = .7 * e;t.text(0), s.text(l), $(".range-min-max").slider({ range: !0, min: i, max: e, values: [0, l], slide: function slide(a, i) {
        t.text(i.values[0]), s.text(i.values[1]);
      } });
  }), function () {
    var a = $("catalog-items-section"),
        t = $("block-for-toggles view-mode"),
        s = t.find("> .list-mode"),
        i = t.find("> .table-mode");s.on("click", function () {
      a.hasClass("list") || (i.removeClass("active"), $(this).addClass("active"), a.attr("class", "list"));
    }), i.on("click", function () {
      a.hasClass("table") || (s.removeClass("active"), $(this).addClass("active"), a.attr("class", "table"));
    });
  }(), function () {
    $("catalog-items-section");var a = $("block-for-toggles sort-mode"),
        t = a.find("> .price"),
        s = a.find("> .manufacturer");s.on("click", function () {
      $(this).hasClass("active") || (t.removeClass("active"), $(this).addClass("active"));
    }), t.on("click", function () {
      $(this).hasClass("active") ? $(this).hasClass("to-high") ? ($(this).removeClass("to-high"), $(this).addClass("to-low")) : ($(this).removeClass("to-low"), $(this).addClass("to-high")) : (s.removeClass("active"), $(this).addClass("active"));
    });
  }(), function () {
    var a = $("block-for-filters");a.find("> button").on("click", function () {
      a.hasClass("active") ? (a.removeClass("active"), $("html").removeClass("block-html")) : (a.addClass("active"), $("html").addClass("block-html"));
    }), document.documentElement.clientWidth > 767 && $("catalog-block  block-for-filters").addClass("active");
  }();
}();