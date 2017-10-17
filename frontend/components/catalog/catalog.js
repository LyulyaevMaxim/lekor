(function() {
  toggleViewMode();
  toggleSortMode();

  function toggleViewMode() {
    let Catalog = $("catalog-items-section"),
      blockForViewToggles = $("block-for-toggles view-mode"),
      listMode = blockForViewToggles.find("> .list-mode"),
      tableMode = blockForViewToggles.find("> .table-mode");

    listMode.on("click", function() {
      if (!Catalog.hasClass("list")) {
        tableMode.removeClass("active");
        $(this).addClass("active");
        Catalog.attr("class", "list");
      }
    });

    tableMode.on("click", function() {
      if (!Catalog.hasClass("table")) {
        listMode.removeClass("active");
        $(this).addClass("active");
        Catalog.attr("class", "table");
      }
    });
  }

  function toggleSortMode() {
    let Catalog = $("catalog-items-section"),
      blockForSortToggles = $("block-for-toggles sort-mode"),
      priceSort = blockForSortToggles.find("> .price"),
      manufacturerSort = blockForSortToggles.find("> .manufacturer");

    manufacturerSort.on("click", function() {
      if (!$(this).hasClass("active")) {
        priceSort.removeClass("active");
        $(this).addClass("active");
      }
    });

    priceSort.on("click", function() {
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
})();
