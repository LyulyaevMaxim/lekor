; (function () {
  ClickOnShowMoreButton();

  function ClickOnShowMoreButton() {
    $(".product-page .show-more").on("click", function () {
      $(this).parent().parent().addClass("all-shown");
    });
  }
}());