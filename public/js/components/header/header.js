"use strict";

!function () {
  $("#showMainMenu").click(function () {
    $("html").hasClass("block-html") ? $("html").removeClass("block-html") : $("html").addClass("block-html");
  }), function () {
    var s = $("#showCatalogMenu"),
        a = $("#showCatalogMenu").parent(),
        e = s.find("+ .header-menu-catalog-body"),
        t = e.find(".close"),
        o = e.find(".down"),
        l = (e.find(".header-menu-catalog-body__title p"), 0);s.click(function () {
      a.hasClass("active") ? (e.css("max-height", "0"), $("html").removeClass("block-html"), a.removeClass("active")) : (e.css("max-height", "none"), $("html").addClass("block-html"), a.addClass("active"));
    }), document.documentElement.clientWidth < 1024 && ($(".header-menu-catalog-body__submenu").click(function () {
      if (l++, o.addClass("shown"), 1 == l) {
        $(this).parent().addClass("open");var s = parseFloat($(this).parent().find("> a").css("height")) - 1;$(this).css("top", s > 50 ? s : 50);
      } else {
        var a = $(this).closest(".open");a.removeClass("open"), a.find("> .header-menu-catalog-body__submenu").css("top", "0"), $(this).parent().addClass("open");var e = parseFloat($(this).parent().find("> a").css("height")) - 1;$(this).css("top", e > 50 ? e : 50), event.stopPropagation();
      }
    }), o.click(function () {
      var s = e.find(".open");if (s.removeClass("open"), 0 == --l) o.removeClass("shown");else {
        var a = s.parent().closest("li");a.addClass("open");var t = parseFloat(a.find("> a").css("height")) - 1;a.find("ul").css("top", t > 50 ? t : 50), event.stopPropagation();
      }
    }), t.click(function () {
      a.hasClass("active") && (e.css("max-height", "0"), $("html").removeClass("block-html"), a.removeClass("active"));
    }));
  }();
}();