; (function () {
  ClickOnShowMoreButton();

  function ClickOnShowMoreButton() {

    $(".product-page .show-more").on("click", function () {
      $(this).parent().parent().addClass("all-shown");
    });

    // if (document.documentElement.clientWidth > 1439) {
    //   let blockWithItems = $("block-for-items");
    //   blockWithItems.css("height",
    //     parseFloat(blockWithItems.find("item").css("height"))
    //   );
    // }
  }
}());