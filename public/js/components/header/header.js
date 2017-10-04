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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuanMiXSwibmFtZXMiOlsibWVudV9hbGxfcHJvZHVjdHMiLCJjYXRhbG9nQnV0dG9uIiwiJCIsImNhdGFsb2dCdXR0b25QYXJlbnQiLCJwYXJlbnQiLCJtZW51Q2F0YWxvZ0JvZHkiLCJmaW5kIiwiY2xvc2VCdXR0b24iLCJkb3duQnV0dG9uIiwidGl0bGVNZW51IiwiY3VycmVudExldmVsIiwiY2xpY2siLCJoYXNDbGFzcyIsImNzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaGVpZ2h0X3RpdGxlIiwicGFyc2VGbG9hdCIsIm9sZE9wZW5MaSIsImNsb3Nlc3QiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRPcGVuZWRFbGVtIiwiY29uc29sZSIsImxvZyIsInBhcmVudEVsZW0iXSwibWFwcGluZ3MiOiI7O0FBQUFBOztBQUVBLFNBQVNBLGlCQUFULEdBQTZCO0FBQzNCLE1BQUlDLGdCQUFnQkMsRUFBRSxrQkFBRixDQUFwQjtBQUFBLE1BQ0VDLHNCQUFzQkQsRUFBRSxrQkFBRixFQUFzQkUsTUFBdEIsRUFEeEI7QUFBQSxNQUVFQyxrQkFBa0JKLGNBQWNLLElBQWQsQ0FBbUIsNkJBQW5CLENBRnBCO0FBQUEsTUFHRUMsY0FBY0YsZ0JBQWdCQyxJQUFoQixDQUFxQixRQUFyQixDQUhoQjtBQUFBLE1BSUVFLGFBQWFILGdCQUFnQkMsSUFBaEIsQ0FBcUIsT0FBckIsQ0FKZjtBQUFBLE1BS0VHLFlBQVlKLGdCQUFnQkMsSUFBaEIsQ0FBcUIsb0NBQXJCLENBTGQ7QUFBQSxNQU1FSSxlQUFlLENBTmpCOztBQVNBVCxnQkFBY1UsS0FBZCxDQUFvQixZQUFZO0FBQzlCLFFBQUksQ0FBQ1Isb0JBQW9CUyxRQUFwQixDQUE2QixRQUE3QixDQUFMLEVBQTZDO0FBQzNDUCxzQkFBZ0JRLEdBQWhCLENBQW9CLFlBQXBCLEVBQWtDLE1BQWxDO0FB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QixFQUFrQyxHQUFsQztBQUNBWCxVQUFFLE1BQUYsRUFBVVcsR0FBVixDQUFjLFlBQWQsRUFBNEIsTUFBNUI7QUFDQVYsNEJBQW9CWSxXQUFwQixDQUFnQyxRQUFoQztBQUNEO0FBQ0YsS0FORDtBQU9EO0FBQ0YiLCJmaWxlIjoiaGVhZGVyL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1lbnVfYWxsX3Byb2R1Y3RzKCk7XG5cbmZ1bmN0aW9uIG1lbnVfYWxsX3Byb2R1Y3RzKCkge1xuICB2YXIgY2F0YWxvZ0J1dHRvbiA9ICQoXCIjc2hvd0NhdGFsb2dNZW51XCIpLFxuICAgIGNhdGFsb2dCdXR0b25QYXJlbnQgPSAkKFwiI3Nob3dDYXRhbG9nTWVudVwiKS5wYXJlbnQoKSxcbiAgICBtZW51Q2F0YWxvZ0JvZHkgPSBjYXRhbG9nQnV0dG9uLmZpbmQoXCIrIC5oZWFkZXItbWVudS1jYXRhbG9nLWJvZHlcIiksXG4gICAgY2xvc2VCdXR0b24gPSBtZW51Q2F0YWxvZ0JvZHkuZmluZChcIi5jbG9zZVwiKSxcbiAgICBkb3duQnV0dG9uID0gbWVudUNhdGFsb2dCb2R5LmZpbmQoXCIuZG93blwiKSxcbiAgICB0aXRsZU1lbnUgPSBtZW51Q2F0YWxvZ0JvZHkuZmluZChcIi5oZWFkZXItbWVudS1jYXRhbG9nLWJvZHlfX3RpdGxlIHBcIiksXG4gICAgY3VycmVudExldmVsID0gMDtcblxuXG4gIGNhdGFsb2dCdXR0b24uY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICghY2F0YWxvZ0J1dHRvblBhcmVudC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgIG1lbnVDYXRhbG9nQm9keS5jc3MoXCJtYXgtaGVpZ2h0XCIsIFwibm9uZVwiKTtcbiAgICAgICQoXCJodG1sXCIpLmNzcygnb3ZlcmZsb3cteScsICdoaWRkZW4nKTtcbiAgICAgIGNhdGFsb2dCdXR0b25QYXJlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAvLyAkKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7IC8vINGB0L7QsdGL0YLQuNC1INC60LvQuNC60LAg0L/QviDQstC10LEt0LTQvtC60YPQvNC10L3RgtGDXG4gICAgICAvLyAgIHZhciBkaXYgPSAkKFwiLmhlYWRlciAuYWxsLXByb2R1Y3QgLm1lbnVcIik7IC8vINGC0YPRgiDRg9C60LDQt9GL0LLQsNC10LwgSUQg0Y3Qu9C10LzQtdC90YLQsFxuICAgICAgLy8gICBpZiAoIWRpdi5pcyhlLnRhcmdldCkgLy8g0LXRgdC70Lgg0LrQu9C40Log0LHRi9C7INC90LUg0L/QviDQvdCw0YjQtdC80YMg0LHQu9C+0LrRg1xuICAgICAgLy8gICAgICYmIGRpdi5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkgeyAvLyDQuCDQvdC1INC/0L4g0LXQs9C+INC00L7Rh9C10YDQvdC40Lwg0Y3Qu9C10LzQtdC90YLQsNC8XG4gICAgICAvLyAgICAgJChcIi5oZWFkZXIgLmFsbC1wcm9kdWN0IC5tZW51XCIpLmNzcyhcIm1heC1oZWlnaHRcIiwgXCIwXCIpO1xuICAgICAgLy8gICAgICQoXCIuaGVhZGVyIC5hbGwtcHJvZHVjdCAuZm9uXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgLy8gICAgICQoXCJodG1sXCIpLmNzcygnb3ZlcmZsb3cteScsICdhdXRvJyk7XG4gICAgICAvLyAgICAgJChcIi5oZWFkZXIgLmFsbC1wcm9kdWN0XCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnVDYXRhbG9nQm9keS5jc3MoXCJtYXgtaGVpZ2h0XCIsIFwiMFwiKTtcbiAgICAgICQoJ2h0bWwnKS5jc3MoJ292ZXJmbG93LXknLCAnYXV0bycpO1xuICAgICAgY2F0YWxvZ0J1dHRvblBhcmVudC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcblxuICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDwgMTAyNCkge1xuICAgICQoXCIuaGVhZGVyLW1lbnUtY2F0YWxvZy1ib2R5X19zdWJtZW51XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGN1cnJlbnRMZXZlbCsrO1xuICAgICAgZG93bkJ1dHRvbi5hZGRDbGFzcyhcInNob3duXCIpO1xuXG4gICAgICBpZiAoY3VycmVudExldmVsID09IDEpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgIGxldCBoZWlnaHRfdGl0bGUgPSBwYXJzZUZsb2F0KCQodGhpcykucGFyZW50KCkuZmluZChcIj4gYVwiKS5jc3MoXCJoZWlnaHRcIikpIC0gMTtcbiAgICAgICAgJCh0aGlzKS5jc3MoXCJ0b3BcIiwgKGhlaWdodF90aXRsZSA+IDUwKSA/IGhlaWdodF90aXRsZSA6IDUwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBvbGRPcGVuTGkgPSAkKHRoaXMpLmNsb3Nlc3QoXCIub3BlblwiKTtcbiAgICAgICAgb2xkT3BlbkxpLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcbiAgICAgICAgb2xkT3BlbkxpLmZpbmQoXCI+IC5oZWFkZXItbWVudS1jYXRhbG9nLWJvZHlfX3N1Ym1lbnVcIikuY3NzKFwidG9wXCIsIFwiMFwiKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgIGxldCBoZWlnaHRfdGl0bGUgPSBwYXJzZUZsb2F0KCQodGhpcykucGFyZW50KCkuZmluZChcIj4gYVwiKS5jc3MoXCJoZWlnaHRcIikpIC0gMTtcbiAgICAgICAgJCh0aGlzKS5jc3MoXCJ0b3BcIiwgKGhlaWdodF90aXRsZSA+IDUwKSA/IGhlaWdodF90aXRsZSA6IDUwKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkb3duQnV0dG9uLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBjdXJyZW50T3BlbmVkRWxlbSA9IG1lbnVDYXRhbG9nQm9keS5maW5kKFwiLm9wZW5cIik7XG4gICAgICBjdXJyZW50T3BlbmVkRWxlbS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XG4gICAgICBjdXJyZW50TGV2ZWwtLTtcbiAgICAgIGlmIChjdXJyZW50TGV2ZWwgPT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xuICAgICAgICBkb3duQnV0dG9uLnJlbW92ZUNsYXNzKFwic2hvd25cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcGFyZW50RWxlbSA9IGN1cnJlbnRPcGVuZWRFbGVtLnBhcmVudCgpLmNsb3Nlc3QoXCJsaVwiKTtcbiAgICAgICAgcGFyZW50RWxlbS5hZGRDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgIGxldCBoZWlnaHRfdGl0bGUgPSBwYXJzZUZsb2F0KHBhcmVudEVsZW0uZmluZChcIj4gYVwiKS5jc3MoXCJoZWlnaHRcIikpIC0gMTtcbiAgICAgICAgcGFyZW50RWxlbS5maW5kKFwidWxcIikuY3NzKFwidG9wXCIsIChoZWlnaHRfdGl0bGUgPiA1MCkgPyBoZWlnaHRfdGl0bGUgOiA1MCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY2xvc2VCdXR0b24uY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGNhdGFsb2dCdXR0b25QYXJlbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgIG1lbnVDYXRhbG9nQm9keS5jc3MoXCJtYXgtaGVpZ2h0XCIsIFwiMFwiKTtcbiAgICAgICAgJChcImh0bWxcIikuY3NzKCdvdmVyZmxvdy15JywgJ2F1dG8nKTtcbiAgICAgICAgY2F0YWxvZ0J1dHRvblBhcmVudC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
