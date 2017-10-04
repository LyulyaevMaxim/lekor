"use strict";

menu_all_products();

function menu_all_products() {
  var catalogButton = $("#showCatalogMenu"),
      catalogButtonParent = $("#showCatalogMenu").parent(),
      menuCatalogBody = catalogButton.find("+ .header-menu-catalog-body"),
      closeButton = menuCatalogBody.find(".close"),
      downButton = menuCatalogBody.find(".down"),
      titleMenu = menuCatalogBody.find(".header-menu-catalog-body__title p"),
      currentLevel = 0;

  catalogButton.click(function () {
    if (!catalogButtonParent.hasClass('active')) {
      menuCatalogBody.css("max-height", "none");
      $("html").css('overflow-y', 'hidden');
      catalogButtonParent.addClass('active');

      // $(document).mouseup(function (e) { // событие клика по веб-документу
      //   var div = $(".header .all-product .menu"); // тут указываем ID элемента
      //   if (!div.is(e.target) // если клик был не по нашему блоку
      //     && div.has(e.target).length === 0) { // и не по его дочерним элементам
      //     $(".header .all-product .menu").css("max-height", "0");
      //     $(".header .all-product .fon").css("display", "none");
      //     $("html").css('overflow-y', 'auto');
      //     $(".header .all-product").removeClass('active');
      //   }
      // });
    } else {
      menuCatalogBody.css("max-height", "0");
      $('html').css('overflow-y', 'auto');
      catalogButtonParent.removeClass('active');
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
        console.log("click");
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
      if (catalogButtonParent.hasClass('active')) {
        menuCatalogBody.css("max-height", "0");
        $("html").css('overflow-y', 'auto');
        catalogButtonParent.removeClass('active');
      }
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuanMiXSwibmFtZXMiOlsibWVudV9hbGxfcHJvZHVjdHMiLCJjYXRhbG9nQnV0dG9uIiwiJCIsImNhdGFsb2dCdXR0b25QYXJlbnQiLCJwYXJlbnQiLCJtZW51Q2F0YWxvZ0JvZHkiLCJmaW5kIiwiY2xvc2VCdXR0b24iLCJkb3duQnV0dG9uIiwidGl0bGVNZW51IiwiY3VycmVudExldmVsIiwiY2xpY2siLCJoYXNDbGFzcyIsImNzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaGVpZ2h0X3RpdGxlIiwicGFyc2VGbG9hdCIsIm9sZE9wZW5MaSIsImNsb3Nlc3QiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRPcGVuZWRFbGVtIiwiY29uc29sZSIsImxvZyIsInBhcmVudEVsZW0iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsU0FBQSxBQUFTLG9CQUFvQixBQUMzQjtNQUFJLGdCQUFnQixFQUFwQixBQUFvQixBQUFFO01BQ3BCLHNCQUFzQixFQUFBLEFBQUUsb0JBRDFCLEFBQ3dCLEFBQXNCO01BQzVDLGtCQUFrQixjQUFBLEFBQWMsS0FGbEMsQUFFb0IsQUFBbUI7TUFDckMsY0FBYyxnQkFBQSxBQUFnQixLQUhoQyxBQUdnQixBQUFxQjtNQUNuQyxhQUFhLGdCQUFBLEFBQWdCLEtBSi9CLEFBSWUsQUFBcUI7TUFDbEMsWUFBWSxnQkFBQSxBQUFnQixLQUw5QixBQUtjLEFBQXFCO01BQ2pDLGVBTkYsQUFNaUIsQUFHakI7O2dCQUFBLEFBQWMsTUFBTSxZQUFZLEFBQzlCO1FBQUksQ0FBQyxvQkFBQSxBQUFvQixTQUF6QixBQUFLLEFBQTZCLFdBQVcsQUFDM0M7c0JBQUEsQUFBZ0IsSUFBaEIsQUFBb0IsY0FBcEIsQUFBa0MsQUFDbEM7UUFBQSxBQUFFLFFBQUYsQUFBVSxJQUFWLEFBQWMsY0FBZCxBQUE0QixBQUM1QjswQkFBQSxB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X2FsbF9wcm9kdWN0cygpO1xuXG5mdW5jdGlvbiBtZW51X2FsbF9wcm9kdWN0cygpIHtcbiAgdmFyIGNhdGFsb2dCdXR0b24gPSAkKFwiI3Nob3dDYXRhbG9nTWVudVwiKSxcbiAgICBjYXRhbG9nQnV0dG9uUGFyZW50ID0gJChcIiNzaG93Q2F0YWxvZ01lbnVcIikucGFyZW50KCksXG4gICAgbWVudUNhdGFsb2dCb2R5ID0gY2F0YWxvZ0J1dHRvbi5maW5kKFwiKyAuaGVhZGVyLW1lbnUtY2F0YWxvZy1ib2R5XCIpLFxuICAgIGNsb3NlQnV0dG9uID0gbWVudUNhdGFsb2dCb2R5LmZpbmQoXCIuY2xvc2VcIiksXG4gICAgZG93bkJ1dHRvbiA9IG1lbnVDYXRhbG9nQm9keS5maW5kKFwiLmRvd25cIiksXG4gICAgdGl0bGVNZW51ID0gbWVudUNhdGFsb2dCb2R5LmZpbmQoXCIuaGVhZGVyLW1lbnUtY2F0YWxvZy1ib2R5X190aXRsZSBwXCIpLFxuICAgIGN1cnJlbnRMZXZlbCA9IDA7XG5cblxuICBjYXRhbG9nQnV0dG9uLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWNhdGFsb2dCdXR0b25QYXJlbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICBtZW51Q2F0YWxvZ0JvZHkuY3NzKFwibWF4LWhlaWdodFwiLCBcIm5vbmVcIik7XG4gICAgICAkKFwiaHRtbFwiKS5jc3MoJ292ZXJmbG93LXknLCAnaGlkZGVuJyk7XG4gICAgICBjYXRhbG9nQnV0dG9uUGFyZW50LmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgLy8gJChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkgeyAvLyDRgdC+0LHRi9GC0LjQtSDQutC70LjQutCwINC/0L4g0LLQtdCxLdC00L7QutGD0LzQtdC90YLRg1xuICAgICAgLy8gICB2YXIgZGl2ID0gJChcIi5oZWFkZXIgLmFsbC1wcm9kdWN0IC5tZW51XCIpOyAvLyDRgtGD0YIg0YPQutCw0LfRi9Cy0LDQtdC8IElEINGN0LvQtdC80LXQvdGC0LBcbiAgICAgIC8vICAgaWYgKCFkaXYuaXMoZS50YXJnZXQpIC8vINC10YHQu9C4INC60LvQuNC6INCx0YvQuyDQvdC1INC/0L4g0L3QsNGI0LXQvNGDINCx0LvQvtC60YNcbiAgICAgIC8vICAgICAmJiBkaXYuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHsgLy8g0Lgg0L3QtSDQv9C+INC10LPQviDQtNC+0YfQtdGA0L3QuNC8INGN0LvQtdC80LXQvdGC0LDQvFxuICAgICAgLy8gICAgICQoXCIuaGVhZGVyIC5hbGwtcHJvZHVjdCAubWVudVwiKS5jc3MoXCJtYXgtaGVpZ2h0XCIsIFwiMFwiKTtcbiAgICAgIC8vICAgICAkKFwiLmhlYWRlciAuYWxsLXByb2R1Y3QgLmZvblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgIC8vICAgICAkKFwiaHRtbFwiKS5jc3MoJ292ZXJmbG93LXknLCAnYXV0bycpO1xuICAgICAgLy8gICAgICQoXCIuaGVhZGVyIC5hbGwtcHJvZHVjdFwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51Q2F0YWxvZ0JvZHkuY3NzKFwibWF4LWhlaWdodFwiLCBcIjBcIik7XG4gICAgICAkKCdodG1sJykuY3NzKCdvdmVyZmxvdy15JywgJ2F1dG8nKTtcbiAgICAgIGNhdGFsb2dCdXR0b25QYXJlbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8IDEwMjQpIHtcbiAgICAkKFwiLmhlYWRlci1tZW51LWNhdGFsb2ctYm9keV9fc3VibWVudVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBjdXJyZW50TGV2ZWwrKztcbiAgICAgIGRvd25CdXR0b24uYWRkQ2xhc3MoXCJzaG93blwiKTtcblxuICAgICAgaWYgKGN1cnJlbnRMZXZlbCA9PSAxKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICBsZXQgaGVpZ2h0X3RpdGxlID0gcGFyc2VGbG9hdCgkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCI+IGFcIikuY3NzKFwiaGVpZ2h0XCIpKSAtIDE7XG4gICAgICAgICQodGhpcykuY3NzKFwidG9wXCIsIChoZWlnaHRfdGl0bGUgPiA1MCkgPyBoZWlnaHRfdGl0bGUgOiA1MCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgb2xkT3BlbkxpID0gJCh0aGlzKS5jbG9zZXN0KFwiLm9wZW5cIik7XG4gICAgICAgIG9sZE9wZW5MaS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgIG9sZE9wZW5MaS5maW5kKFwiPiAuaGVhZGVyLW1lbnUtY2F0YWxvZy1ib2R5X19zdWJtZW51XCIpLmNzcyhcInRvcFwiLCBcIjBcIik7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICBsZXQgaGVpZ2h0X3RpdGxlID0gcGFyc2VGbG9hdCgkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCI+IGFcIikuY3NzKFwiaGVpZ2h0XCIpKSAtIDE7XG4gICAgICAgICQodGhpcykuY3NzKFwidG9wXCIsIChoZWlnaHRfdGl0bGUgPiA1MCkgPyBoZWlnaHRfdGl0bGUgOiA1MCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG93bkJ1dHRvbi5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY3VycmVudE9wZW5lZEVsZW0gPSBtZW51Q2F0YWxvZ0JvZHkuZmluZChcIi5vcGVuXCIpO1xuICAgICAgY3VycmVudE9wZW5lZEVsZW0ucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgY3VycmVudExldmVsLS07XG4gICAgICBpZiAoY3VycmVudExldmVsID09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja1wiKTtcbiAgICAgICAgZG93bkJ1dHRvbi5yZW1vdmVDbGFzcyhcInNob3duXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHBhcmVudEVsZW0gPSBjdXJyZW50T3BlbmVkRWxlbS5wYXJlbnQoKS5jbG9zZXN0KFwibGlcIik7XG4gICAgICAgIHBhcmVudEVsZW0uYWRkQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICBsZXQgaGVpZ2h0X3RpdGxlID0gcGFyc2VGbG9hdChwYXJlbnRFbGVtLmZpbmQoXCI+IGFcIikuY3NzKFwiaGVpZ2h0XCIpKSAtIDE7XG4gICAgICAgIHBhcmVudEVsZW0uZmluZChcInVsXCIpLmNzcyhcInRvcFwiLCAoaGVpZ2h0X3RpdGxlID4gNTApID8gaGVpZ2h0X3RpdGxlIDogNTApO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNsb3NlQnV0dG9uLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjYXRhbG9nQnV0dG9uUGFyZW50Lmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICBtZW51Q2F0YWxvZ0JvZHkuY3NzKFwibWF4LWhlaWdodFwiLCBcIjBcIik7XG4gICAgICAgICQoXCJodG1sXCIpLmNzcygnb3ZlcmZsb3cteScsICdhdXRvJyk7XG4gICAgICAgIGNhdGFsb2dCdXR0b25QYXJlbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=
