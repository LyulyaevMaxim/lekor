"use strict";

(function () {
  inputRangeShowValues();
  toggleViewMode();
  toggleSortMode();
  filtersShow();

  function toggleViewMode() {
    var Catalog = $("catalog-items-section"),
        blockForViewToggles = $("block-for-toggles view-mode"),
        listMode = blockForViewToggles.find("> .list-mode"),
        tableMode = blockForViewToggles.find("> .table-mode");

    listMode.on("click", function () {
      if (!Catalog.hasClass("list")) {
        tableMode.removeClass("active");
        $(this).addClass("active");
        Catalog.attr("class", "list");
      }
    });

    tableMode.on("click", function () {
      if (!Catalog.hasClass("table")) {
        listMode.removeClass("active");
        $(this).addClass("active");
        Catalog.attr("class", "table");
      }
    });
  }

  function toggleSortMode() {
    var Catalog = $("catalog-items-section"),
        blockForSortToggles = $("block-for-toggles sort-mode"),
        priceSort = blockForSortToggles.find("> .price"),
        manufacturerSort = blockForSortToggles.find("> .manufacturer");

    manufacturerSort.on("click", function () {
      if (!$(this).hasClass("active")) {
        priceSort.removeClass("active");
        $(this).addClass("active");
      }
    });

    priceSort.on("click", function () {
      if (!$(this).hasClass("active")) {
        manufacturerSort.removeClass("active");
        $(this).addClass("active");
      } else {
        if ($(this).hasClass("to-high")) {
          $(this).removeClass("to-high");
          $(this).addClass("to-low");
        } else {
          $(this).removeClass("to-low");
          $(this).addClass("to-high");
        }
      }
    });
  }

  function filtersShow() {
    var filters = $("block-for-filters"),
        button = filters.find("> button");

    button.on("click", function () {
      if (!filters.hasClass("active")) {
        filters.addClass("active");
        $("html").addClass('block-html');
      } else {
        filters.removeClass("active");
        $("html").removeClass('block-html');
      }
    });

    if (document.documentElement.clientWidth > 767) {
      $("catalog-block  block-for-filters").addClass("active");
    }
  }

  function inputRangeShowValues() {
    var filters = $("block-for-filters");

    filters.find("accordion .range-min-max").each(function () {
      var input = $(this),
          buttonMinValue = input.find("~ .range__min-value > p"),
          buttonMaxValue = input.find("~ .range__max-value > p"),
          min = parseFloat(input.attr("min")),
          max = parseFloat(input.attr("max")),
          initialMinValue = 0,
          initialMaxValue = 0.7 * max;

      //инициализация значений кнопок
      buttonMinValue.text(initialMinValue);
      buttonMaxValue.text(initialMaxValue);
      $(".range-min-max").slider({
        range: true,
        min: min,
        max: max,
        values: [initialMinValue, initialMaxValue],
        slide: function slide(event, ui) {
          buttonMinValue.text(ui.values[0]);
          buttonMaxValue.text(ui.values[1]);
        }
      });
    });
  }
})();