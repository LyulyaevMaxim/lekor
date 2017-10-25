"use strict";

$(".product-page .show-more").on("click", function () {
  $(this).parent().parent().addClass("all-shown");
});