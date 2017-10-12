; (function () {
  removeItemsThatDoNotFit();

  function removeItemsThatDoNotFit() {
    if (document.documentElement.clientWidth > 1439) {
      let blockWithItems = $("block-for-items");
      blockWithItems.css("height",
        parseFloat(blockWithItems.find("item").css("height"))
      );
    }
  }
}());