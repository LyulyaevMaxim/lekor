"use strict";

(function () {
  headerMenu();
  menu_all_products();

  function headerMenu() {
    var menu = $("#showMainMenu");

    menu.click(function () {
      if ($("html").hasClass("block-html")) {
        $("html").removeClass("block-html");
      } else {
        $("html").addClass("block-html");
      }
    });
  }

  function menu_all_products() {
    var catalogButton = $("#showCatalogMenu"),
        catalogButtonParent = $("#showCatalogMenu").parent(),
        menuCatalogBody = catalogButton.find("+ .header-menu-catalog-body"),
        closeButton = menuCatalogBody.find(".close"),
        downButton = menuCatalogBody.find(".down"),
        titleMenu = menuCatalogBody.find(".header-menu-catalog-body__title p"),
        currentLevel = 0;

    catalogButton.click(function () {
      if (!catalogButtonParent.hasClass("active")) {
        menuCatalogBody.css("max-height", "none");
        $("html").addClass("block-html");
        catalogButtonParent.addClass("active");
      } else {
        menuCatalogBody.css("max-height", "0");
        $("html").removeClass("block-html");
        catalogButtonParent.removeClass("active");
      }
    });

    if (document.documentElement.clientWidth < 1024) {
      $(".header-menu-catalog-body__submenu").click(function () {
        currentLevel++;
        downButton.addClass("shown");

        if (currentLevel == 1) {
          $(this).parent().addClass("open");
          var height_title = parseFloat($(this).parent().find("> a").css("height")) - 1;
          $(this).css("top", height_title > 50 ? height_title : 50);
        } else {
          var oldOpenLi = $(this).closest(".open");
          oldOpenLi.removeClass("open");
          oldOpenLi.find("> .header-menu-catalog-body__submenu").css("top", "0");
          $(this).parent().addClass("open");
          var _height_title = parseFloat($(this).parent().find("> a").css("height")) - 1;
          $(this).css("top", _height_title > 50 ? _height_title : 50);
          event.stopPropagation();
        }
      });

      downButton.click(function () {
        var currentOpenedElem = menuCatalogBody.find(".open");
        currentOpenedElem.removeClass("open");
        currentLevel--;
        if (currentLevel == 0) {
          downButton.removeClass("shown");
        } else {
          var parentElem = currentOpenedElem.parent().closest("li");
          parentElem.addClass("open");
          var height_title = parseFloat(parentElem.find("> a").css("height")) - 1;
          parentElem.find("ul").css("top", height_title > 50 ? height_title : 50);
          event.stopPropagation();
        }
      });

      closeButton.click(function () {
        if (catalogButtonParent.hasClass("active")) {
          menuCatalogBody.css("max-height", "0");
          $("html").removeClass("block-html");
          catalogButtonParent.removeClass("active");
        }
      });
    }
  }
})();