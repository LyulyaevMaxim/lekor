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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuanMiXSwibmFtZXMiOlsiaGVhZGVyTWVudSIsIm1lbnVfYWxsX3Byb2R1Y3RzIiwibWVudSIsIiQiLCJjbGljayIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNhdGFsb2dCdXR0b24iLCJjYXRhbG9nQnV0dG9uUGFyZW50IiwicGFyZW50IiwibWVudUNhdGFsb2dCb2R5IiwiZmluZCIsImNsb3NlQnV0dG9uIiwiZG93bkJ1dHRvbiIsInRpdGxlTWVudSIsImN1cnJlbnRMZXZlbCIsImNzcyIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJoZWlnaHRfdGl0bGUiLCJwYXJzZUZsb2F0Iiwib2xkT3BlbkxpIiwiY2xvc2VzdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudE9wZW5lZEVsZW0iLCJwYXJlbnRFbGVtIl0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUcsYUFBWTtBQUNiQTtBQUNBQzs7QUFFQSxXQUFTRCxVQUFULEdBQXNCO0FBQ3BCLFFBQUlFLE9BQU9DLEVBQUUsZUFBRixDQUFYOztBQUVBRCxTQUFLRSxLQUFMLENBQVcsWUFBWTtBQUNyQixVQUFJRCxFQUFFLE1BQUYsRUFBVUUsUUFBVixDQUFtQixZQUFuQixDQUFKLEVBQXNDO0FBQ3BDRixVQUFFLE1BQUYsRUFBVUcsV0FBVixDQUFzQixZQUF0QjtBQUNELE9BRkQsTUFFTztBQUNMSCxVQUFFLE1BQUYsRUFBVUksUUFBVixDQUFtQixZQUFuQjtBQUNEO0FBQ0YsS0FORDtBQU9EOztBQUVELFdBQVNOLGlCQUFULEdBQTZCO0FBQzNCLFFBQUlPLGdCQUFnQkwsRUFBRSxrQkFBRixDQUFwQjtBQUFBLFFBQ0VNLHNCQUFzQk4sRUFBRSxrQkFBRixFQUFzQk8sTUFBdEIsRUFEeEI7QUFBQSxRQUVFQyxrQkFBa0JILGNBQWNJLElBQWQsQ0FBbUIsNkJBQW5CLENBRnBCO0FBQUEsUUFHRUMsY0FBY0YsZ0JB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dEU7QUFDQVcscUJBQVdoQixJQUFYLENBQWdCLElBQWhCLEVBQXNCSyxHQUF0QixDQUEwQixLQUExQixFQUFrQ0ksZUFBZSxFQUFoQixHQUFzQkEsWUFBdEIsR0FBcUMsRUFBdEU7QUFDQUksZ0JBQU1DLGVBQU47QUFDRDtBQUNGLE9BYkQ7O0FBZUFiLGtCQUFZVCxLQUFaLENBQWtCLFlBQVk7QUFDNUIsWUFBSUssb0JBQW9CSixRQUFwQixDQUE2QixRQUE3QixDQUFKLEVBQTRDO0FBQzFDTSwwQkFBZ0JNLEdBQWhCLENBQW9CLFlBQXBCLEVBQWtDLEdBQWxDO0FBQ0FkLFlBQUUsTUFBRixFQUFVRyxXQUFWLENBQXNCLFlBQXRCO0FBQ0FHLDhCQUFvQkgsV0FBcEIsQ0FBZ0MsUUFBaEM7QUFDRDtBQUNGLE9BTkQ7QUFPRDtBQUNGO0FBSUYsQ0FuR0UsR0FBRCIsImZpbGUiOiJoZWFkZXIvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiOyAoZnVuY3Rpb24gKCkge1xuICBoZWFkZXJNZW51KCk7XG4gIG1lbnVfYWxsX3Byb2R1Y3RzKCk7XG5cbiAgZnVuY3Rpb24gaGVhZGVyTWVudSgpIHtcbiAgICB2YXIgbWVudSA9ICQoXCIjc2hvd01haW5NZW51XCIpO1xuXG4gICAgbWVudS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJChcImh0bWxcIikuaGFzQ2xhc3MoJ2Jsb2NrLWh0bWwnKSkge1xuICAgICAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnYmxvY2staHRtbCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChcImh0bWxcIikuYWRkQ2xhc3MoXCJibG9jay1odG1sXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWVudV9hbGxfcHJvZHVjdHMoKSB7XG4gICAgdmFyIGNhdGFsb2dCdXR0b24gPSAkKFwiI3Nob3dDYXRhbG9nTWVudVwiKSxcbiAgICAgIGNhdGFsb2dCdXR0b25QYXJlbnQgPSAkKFwiI3Nob3dDYXRhbG9nTWVudVwiKS5wYXJlbnQoKSxcbiAgICAgIG1lbnVDYXRhbG9nQm9keSA9IGNhdGFsb2dCdXR0b24uZmluZChcIisgLmhlYWRlci1tZW51LWNhdGFsb2ctYm9keVwiKSxcbiAgICAgIGNsb3NlQnV0dG9uID0gbWVudUNhdGFsb2dCb2R5LmZpbmQoXCIuY2xvc2VcIiksXG4gICAgICBkb3duQnV0dG9uID0gbWVudUNhdGFsb2dCb2R5LmZpbmQoXCIuZG93blwiKSxcbiAgICAgIHRpdGxlTWVudSA9IG1lbnVDYXRhbG9nQm9keS5maW5kKFwiLmhlYWRlci1tZW51LWNhdGFsb2ctYm9keV9fdGl0bGUgcFwiKSxcbiAgICAgIGN1cnJlbnRMZXZlbCA9IDA7XG5cblxuICAgIGNhdGFsb2dCdXR0b24uY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFjYXRhbG9nQnV0dG9uUGFyZW50Lmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICBtZW51Q2F0YWxvZ0JvZHkuY3NzKFwibWF4LWhlaWdodFwiLCBcIm5vbmVcIik7XG4gICAgICAgIC8vICQoXCJodG1sXCIpLmNzcygnb3ZlcmZsb3cteScsICdoaWRkZW4nKTtcbiAgICAgICAgJChcImh0bWxcIikuYWRkQ2xhc3MoXCJibG9jay1odG1sXCIpO1xuICAgICAgICBjYXRhbG9nQnV0dG9uUGFyZW50LmFkZENsYXNzKCdhY3RpdmUnKTtcblxuXG4gICAgICAgIC8vICQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHsgLy8g0YHQvtCx0YvRgtC40LUg0LrQu9C40LrQsCDQv9C+INCy0LXQsS3QtNC+0LrRg9C80LXQvdGC0YNcbiAgICAgICAgLy8gICB2YXIgZGl2ID0gJChcIi5oZWFkZXIgLmFsbC1wcm9kdWN0IC5tZW51XCIpOyAvLyDRgtGD0YIg0YPQutCw0LfRi9Cy0LDQtdC8IElEINGN0LvQtdC80LXQvdGC0LBcbiAgICAgICAgLy8gICBpZiAoIWRpdi5pcyhlLnRhcmdldCkgLy8g0LXRgdC70Lgg0LrQu9C40Log0LHRi9C7INC90LUg0L/QviDQvdCw0YjQtdC80YMg0LHQu9C+0LrRg1xuICAgICAgICAvLyAgICAgJiYgZGl2LmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7IC8vINC4INC90LUg0L/QviDQtdCz0L4g0LTQvtGH0LXRgNC90LjQvCDRjdC70LXQvNC10L3RgtCw0LxcbiAgICAgICAgLy8gICAgICQoXCIuaGVhZGVyIC5hbGwtcHJvZHVjdCAubWVudVwiKS5jc3MoXCJtYXgtaGVpZ2h0XCIsIFwiMFwiKTtcbiAgICAgICAgLy8gICAgICQoXCIuaGVhZGVyIC5hbGwtcHJvZHVjdCAuZm9uXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICAvLyAgICAgJChcImh0bWxcIikuY3NzKCdvdmVyZmxvdy15JywgJ2F1dG8nKTtcbiAgICAgICAgLy8gICAgICQoXCIuaGVhZGVyIC5hbGwtcHJvZHVjdFwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbnVDYXRhbG9nQm9keS5jc3MoXCJtYXgtaGVpZ2h0XCIsIFwiMFwiKTtcbiAgICAgICAgLy8gJCgnaHRtbCcpLmNzcygnb3ZlcmZsb3cteScsICdhdXRvJyk7XG4gICAgICAgICQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKCdibG9jay1odG1sJyk7XG4gICAgICAgIGNhdGFsb2dCdXR0b25QYXJlbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8IDEwMjQpIHtcbiAgICAgICQoXCIuaGVhZGVyLW1lbnUtY2F0YWxvZy1ib2R5X19zdWJtZW51XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3VycmVudExldmVsKys7XG4gICAgICAgIGRvd25CdXR0b24uYWRkQ2xhc3MoXCJzaG93blwiKTtcblxuICAgICAgICBpZiAoY3VycmVudExldmVsID09IDEpIHtcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKFwib3BlblwiKTtcbiAgICAgICAgICBsZXQgaGVpZ2h0X3RpdGxlID0gcGFyc2VGbG9hdCgkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCI+IGFcIikuY3NzKFwiaGVpZ2h0XCIpKSAtIDE7XG4gICAgICAgICAgJCh0aGlzKS5jc3MoXCJ0b3BcIiwgKGhlaWdodF90aXRsZSA+IDUwKSA/IGhlaWdodF90aXRsZSA6IDUwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgb2xkT3BlbkxpID0gJCh0aGlzKS5jbG9zZXN0KFwiLm9wZW5cIik7XG4gICAgICAgICAgb2xkT3BlbkxpLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcbiAgICAgICAgICBvbGRPcGVuTGkuZmluZChcIj4gLmhlYWRlci1tZW51LWNhdGFsb2ctYm9keV9fc3VibWVudVwiKS5jc3MoXCJ0b3BcIiwgXCIwXCIpO1xuICAgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICAgIGxldCBoZWlnaHRfdGl0bGUgPSBwYXJzZUZsb2F0KCQodGhpcykucGFyZW50KCkuZmluZChcIj4gYVwiKS5jc3MoXCJoZWlnaHRcIikpIC0gMTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyhcInRvcFwiLCAoaGVpZ2h0X3RpdGxlID4gNTApID8gaGVpZ2h0X3RpdGxlIDogNTApO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgZG93bkJ1dHRvbi5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBjdXJyZW50T3BlbmVkRWxlbSA9IG1lbnVDYXRhbG9nQm9keS5maW5kKFwiLm9wZW5cIik7XG4gICAgICAgIGN1cnJlbnRPcGVuZWRFbGVtLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcbiAgICAgICAgY3VycmVudExldmVsLS07XG4gICAgICAgIGlmIChjdXJyZW50TGV2ZWwgPT0gMCkge1xuICAgICAgICAgIGRvd25CdXR0b24ucmVtb3ZlQ2xhc3MoXCJzaG93blwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgcGFyZW50RWxlbSA9IGN1cnJlbnRPcGVuZWRFbGVtLnBhcmVudCgpLmNsb3Nlc3QoXCJsaVwiKTtcbiAgICAgICAgICBwYXJlbnRFbGVtLmFkZENsYXNzKFwib3BlblwiKTtcbiAgICAgICAgICBsZXQgaGVpZ2h0X3RpdGxlID0gcGFyc2VGbG9hdChwYXJlbnRFbGVtLmZpbmQoXCI+IGFcIikuY3NzKFwiaGVpZ2h0XCIpKSAtIDE7XG4gICAgICAgICAgcGFyZW50RWxlbS5maW5kKFwidWxcIikuY3NzKFwidG9wXCIsIChoZWlnaHRfdGl0bGUgPiA1MCkgPyBoZWlnaHRfdGl0bGUgOiA1MCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjbG9zZUJ1dHRvbi5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjYXRhbG9nQnV0dG9uUGFyZW50Lmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgIG1lbnVDYXRhbG9nQm9keS5jc3MoXCJtYXgtaGVpZ2h0XCIsIFwiMFwiKTtcbiAgICAgICAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnYmxvY2staHRtbCcpO1xuICAgICAgICAgIGNhdGFsb2dCdXR0b25QYXJlbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG5cbn0oKSk7Il19
