"use strict";

;(function () {
  headerMenu();
  menu_all_products();

  function headerMenu() {
    var menu = $("#showMainMenu");

    menu.click(function () {
      if ($("html").hasClass('block-html')) {
        $("html").removeClass('block-html');
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
      if (!catalogButtonParent.hasClass('active')) {
        menuCatalogBody.css("max-height", "none");
        // $("html").css('overflow-y', 'hidden');
        $("html").addClass("block-html");
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
        // $('html').css('overflow-y', 'auto');
        $("html").removeClass('block-html');
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
          $("html").removeClass('block-html');
          catalogButtonParent.removeClass('active');
        }
      });
    }
  }
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuanMiXSwibmFtZXMiOlsiaGVhZGVyTWVudSIsIm1lbnVfYWxsX3Byb2R1Y3RzIiwibWVudSIsIiQiLCJjbGljayIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNhdGFsb2dCdXR0b24iLCJjYXRhbG9nQnV0dG9uUGFyZW50IiwicGFyZW50IiwibWVudUNhdGFsb2dCb2R5IiwiZmluZCIsImNsb3NlQnV0dG9uIiwiZG93bkJ1dHRvbiIsInRpdGxlTWVudSIsImN1cnJlbnRMZXZlbCIsImNzcyIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJoZWlnaHRfdGl0bGUiLCJwYXJzZUZsb2F0Iiwib2xkT3BlbkxpIiwiY2xvc2VzdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudE9wZW5lZEVsZW0iLCJwYXJlbnRFbGVtIl0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUcsYUFBWSxBQUNiO0FBQ0E7QUFFQTs7V0FBUyxBQUFULGFBQXNCLEFBQ3BCO1FBQUksT0FBTyxFQUFFLEFBQUYsQUFBWCxBQUVBOztTQUFLLEFBQUwsTUFBVyxZQUFZLEFBQ3JCO1VBQUksRUFBRSxBQUFGLFFBQVUsQUFBVixTQUFtQixBQUFuQixBQUFKLGVBQXNDLEFBQ3BDO1VBQUUsQUFBRixRQUFVLEFBQVYsWUFBc0IsQUFBdEIsQUFDRDtBQUZELGFBRU8sQUFDTDtVQUFFLEFBQUYsUUFBVSxBQUFWLFNBQW1CLEFBQW5CLEFBQ0Q7QUFDRjtBQU5ELEFBT0Q7QUFFRDs7V0FBUyxBQUFULG9CQUE2QixBQUMzQjtRQUFJLGdCQUFnQixFQUFFLEFBQUYsQUFBcEI7UUFDRSxzQkFBc0IsRUFBRSxBQUFGLG9CQUFzQixBQUF0QixBQUR4QjtRQUVFLGtCQUFrQixjQUFjLEFBQWQsS0FBbUIsQUFBbkIsQUFGcEI7UUFHRSxjQUFjLGdCQUFnQixBQUFoQixLQUFxQixBQUFyQixBQUhoQjtRQUlFLGFBQWEsZ0JB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O1lBQUksb0JBQW9CLEFBQXBCLFNBQTZCLEFBQTdCLEFBQUosV0FBNEMsQUFDMUM7MEJBQWdCLEFBQWhCLElBQW9CLEFBQXBCLGNBQWtDLEFBQWxDLEFBQ0E7WUFBRSxBQUFGLFFBQVUsQUFBVixZQUFzQixBQUF0QixBQUNBOzhCQUFvQixBQUFwQixZQUFnQyxBQUFoQyxBQUNEO0FBQ0Y7QUFORCxBQU9EO0FBQ0Y7QUFJRjtBQW5HRSxBQUFEIiwiZmlsZSI6ImhlYWRlci9oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI7IChmdW5jdGlvbiAoKSB7XG4gIGhlYWRlck1lbnUoKTtcbiAgbWVudV9hbGxfcHJvZHVjdHMoKTtcblxuICBmdW5jdGlvbiBoZWFkZXJNZW51KCkge1xuICAgIHZhciBtZW51ID0gJChcIiNzaG93TWFpbk1lbnVcIik7XG5cbiAgICBtZW51LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkKFwiaHRtbFwiKS5oYXNDbGFzcygnYmxvY2staHRtbCcpKSB7XG4gICAgICAgICQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKCdibG9jay1odG1sJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiaHRtbFwiKS5hZGRDbGFzcyhcImJsb2NrLWh0bWxcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBtZW51X2FsbF9wcm9kdWN0cygpIHtcbiAgICB2YXIgY2F0YWxvZ0J1dHRvbiA9ICQoXCIjc2hvd0NhdGFsb2dNZW51XCIpLFxuICAgICAgY2F0YWxvZ0J1dHRvblBhcmVudCA9ICQoXCIjc2hvd0NhdGFsb2dNZW51XCIpLnBhcmVudCgpLFxuICAgICAgbWVudUNhdGFsb2dCb2R5ID0gY2F0YWxvZ0J1dHRvbi5maW5kKFwiKyAuaGVhZGVyLW1lbnUtY2F0YWxvZy1ib2R5XCIpLFxuICAgICAgY2xvc2VCdXR0b24gPSBtZW51Q2F0YWxvZ0JvZHkuZmluZChcIi5jbG9zZVwiKSxcbiAgICAgIGRvd25CdXR0b24gPSBtZW51Q2F0YWxvZ0JvZHkuZmluZChcIi5kb3duXCIpLFxuICAgICAgdGl0bGVNZW51ID0gbWVudUNhdGFsb2dCb2R5LmZpbmQoXCIuaGVhZGVyLW1lbnUtY2F0YWxvZy1ib2R5X190aXRsZSBwXCIpLFxuICAgICAgY3VycmVudExldmVsID0gMDtcblxuXG4gICAgY2F0YWxvZ0J1dHRvbi5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWNhdGFsb2dCdXR0b25QYXJlbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgIG1lbnVDYXRhbG9nQm9keS5jc3MoXCJtYXgtaGVpZ2h0XCIsIFwibm9uZVwiKTtcbiAgICAgICAgLy8gJChcImh0bWxcIikuY3NzKCdvdmVyZmxvdy15JywgJ2hpZGRlbicpO1xuICAgICAgICAkKFwiaHRtbFwiKS5hZGRDbGFzcyhcImJsb2NrLWh0bWxcIik7XG4gICAgICAgIGNhdGFsb2dCdXR0b25QYXJlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cbiAgICAgICAgLy8gJChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkgeyAvLyDRgdC+0LHRi9GC0LjQtSDQutC70LjQutCwINC/0L4g0LLQtdCxLdC00L7QutGD0LzQtdC90YLRg1xuICAgICAgICAvLyAgIHZhciBkaXYgPSAkKFwiLmhlYWRlciAuYWxsLXByb2R1Y3QgLm1lbnVcIik7IC8vINGC0YPRgiDRg9C60LDQt9GL0LLQsNC10LwgSUQg0Y3Qu9C10LzQtdC90YLQsFxuICAgICAgICAvLyAgIGlmICghZGl2LmlzKGUudGFyZ2V0KSAvLyDQtdGB0LvQuCDQutC70LjQuiDQsdGL0Lsg0L3QtSDQv9C+INC90LDRiNC10LzRgyDQsdC70L7QutGDXG4gICAgICAgIC8vICAgICAmJiBkaXYuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHsgLy8g0Lgg0L3QtSDQv9C+INC10LPQviDQtNC+0YfQtdGA0L3QuNC8INGN0LvQtdC80LXQvdGC0LDQvFxuICAgICAgICAvLyAgICAgJChcIi5oZWFkZXIgLmFsbC1wcm9kdWN0IC5tZW51XCIpLmNzcyhcIm1heC1oZWlnaHRcIiwgXCIwXCIpO1xuICAgICAgICAvLyAgICAgJChcIi5oZWFkZXIgLmFsbC1wcm9kdWN0IC5mb25cIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgIC8vICAgICAkKFwiaHRtbFwiKS5jc3MoJ292ZXJmbG93LXknLCAnYXV0bycpO1xuICAgICAgICAvLyAgICAgJChcIi5oZWFkZXIgLmFsbC1wcm9kdWN0XCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVudUNhdGFsb2dCb2R5LmNzcyhcIm1heC1oZWlnaHRcIiwgXCIwXCIpO1xuICAgICAgICAvLyAkKCdodG1sJykuY3NzKCdvdmVyZmxvdy15JywgJ2F1dG8nKTtcbiAgICAgICAgJChcImh0bWxcIikucmVtb3ZlQ2xhc3MoJ2Jsb2NrLWh0bWwnKTtcbiAgICAgICAgY2F0YWxvZ0J1dHRvblBhcmVudC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDwgMTAyNCkge1xuICAgICAgJChcIi5oZWFkZXItbWVudS1jYXRhbG9nLWJvZHlfX3N1Ym1lbnVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBjdXJyZW50TGV2ZWwrKztcbiAgICAgICAgZG93bkJ1dHRvbi5hZGRDbGFzcyhcInNob3duXCIpO1xuXG4gICAgICAgIGlmIChjdXJyZW50TGV2ZWwgPT0gMSkge1xuICAgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICAgIGxldCBoZWlnaHRfdGl0bGUgPSBwYXJzZUZsb2F0KCQodGhpcykucGFyZW50KCkuZmluZChcIj4gYVwiKS5jc3MoXCJoZWlnaHRcIikpIC0gMTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyhcInRvcFwiLCAoaGVpZ2h0X3RpdGxlID4gNTApID8gaGVpZ2h0X3RpdGxlIDogNTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBvbGRPcGVuTGkgPSAkKHRoaXMpLmNsb3Nlc3QoXCIub3BlblwiKTtcbiAgICAgICAgICBvbGRPcGVuTGkucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICAgIG9sZE9wZW5MaS5maW5kKFwiPiAuaGVhZGVyLW1lbnUtY2F0YWxvZy1ib2R5X19zdWJtZW51XCIpLmNzcyhcInRvcFwiLCBcIjBcIik7XG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICAgbGV0IGhlaWdodF90aXRsZSA9IHBhcnNlRmxvYXQoJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiPiBhXCIpLmNzcyhcImhlaWdodFwiKSkgLSAxO1xuICAgICAgICAgICQodGhpcykuY3NzKFwidG9wXCIsIChoZWlnaHRfdGl0bGUgPiA1MCkgPyBoZWlnaHRfdGl0bGUgOiA1MCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBkb3duQnV0dG9uLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRPcGVuZWRFbGVtID0gbWVudUNhdGFsb2dCb2R5LmZpbmQoXCIub3BlblwiKTtcbiAgICAgICAgY3VycmVudE9wZW5lZEVsZW0ucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICBjdXJyZW50TGV2ZWwtLTtcbiAgICAgICAgaWYgKGN1cnJlbnRMZXZlbCA9PSAwKSB7XG4gICAgICAgICAgZG93bkJ1dHRvbi5yZW1vdmVDbGFzcyhcInNob3duXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBwYXJlbnRFbGVtID0gY3VycmVudE9wZW5lZEVsZW0ucGFyZW50KCkuY2xvc2VzdChcImxpXCIpO1xuICAgICAgICAgIHBhcmVudEVsZW0uYWRkQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICAgIGxldCBoZWlnaHRfdGl0bGUgPSBwYXJzZUZsb2F0KHBhcmVudEVsZW0uZmluZChcIj4gYVwiKS5jc3MoXCJoZWlnaHRcIikpIC0gMTtcbiAgICAgICAgICBwYXJlbnRFbGVtLmZpbmQoXCJ1bFwiKS5jc3MoXCJ0b3BcIiwgKGhlaWdodF90aXRsZSA+IDUwKSA/IGhlaWdodF90aXRsZSA6IDUwKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNsb3NlQnV0dG9uLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNhdGFsb2dCdXR0b25QYXJlbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgbWVudUNhdGFsb2dCb2R5LmNzcyhcIm1heC1oZWlnaHRcIiwgXCIwXCIpO1xuICAgICAgICAgICQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKCdibG9jay1odG1sJyk7XG4gICAgICAgICAgY2F0YWxvZ0J1dHRvblBhcmVudC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG5cblxufSgpKTsiXX0=
