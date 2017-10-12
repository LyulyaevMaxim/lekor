"use strict";

;(function () {
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
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJDbGlja09uU2hvd01vcmVCdXR0b24iLCIkIiwib24iLCJwYXJlbnQiLCJhZGRDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFHLGFBQVksQUFDYixBQUVBOzs7V0FBQSxBQUFTLHdCQUF3QixBQUUvQjs7TUFBQSxBQUFFLDRCQUFGLEFBQThCLEdBQTlCLEFBQWlDLFNBQVMsWUFBWSxBQUNwRDtRQUFBLEFBQUUsTUFBRixBQUFRLFNBQVIsQUFBaUIsU0FBakIsQUFBMEIsU0FENUIsQUFDRSxBQUFtQyxBQUNwQyxBQUVELEFBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNGO0FBaEJDLEFBQUMiLCJmaWxlIjoicHJvZHVjdC9wcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiOyAoZnVuY3Rpb24gKCkge1xuICBDbGlja09uU2hvd01vcmVCdXR0b24oKTtcblxuICBmdW5jdGlvbiBDbGlja09uU2hvd01vcmVCdXR0b24oKSB7XG5cbiAgICAkKFwiLnByb2R1Y3QtcGFnZSAuc2hvdy1tb3JlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5hZGRDbGFzcyhcImFsbC1zaG93blwiKTtcbiAgICB9KTtcblxuICAgIC8vIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPiAxNDM5KSB7XG4gICAgLy8gICBsZXQgYmxvY2tXaXRoSXRlbXMgPSAkKFwiYmxvY2stZm9yLWl0ZW1zXCIpO1xuICAgIC8vICAgYmxvY2tXaXRoSXRlbXMuY3NzKFwiaGVpZ2h0XCIsXG4gICAgLy8gICAgIHBhcnNlRmxvYXQoYmxvY2tXaXRoSXRlbXMuZmluZChcIml0ZW1cIikuY3NzKFwiaGVpZ2h0XCIpKVxuICAgIC8vICAgKTtcbiAgICAvLyB9XG4gIH1cbn0oKSk7Il19
