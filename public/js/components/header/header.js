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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuanMiXSwibmFtZXMiOlsiaGVhZGVyTWVudSIsIm1lbnVfYWxsX3Byb2R1Y3RzIiwibWVudSIsIiQiLCJjbGljayIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNhdGFsb2dCdXR0b24iLCJjYXRhbG9nQnV0dG9uUGFyZW50IiwicGFyZW50IiwibWVudUNhdGFsb2dCb2R5IiwiZmluZCIsImNsb3NlQnV0dG9uIiwiZG93bkJ1dHRvbiIsInRpdGxlTWVudSIsImN1cnJlbnRMZXZlbCIsImNzcyIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJoZWlnaHRfdGl0bGUiLCJwYXJzZUZsb2F0Iiwib2xkT3BlbkxpIiwiY2xvc2VzdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudE9wZW5lZEVsZW0iLCJwYXJlbnRFbGVtIl0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUcsYUFBWSxBQUNiLEFBQ0EsQUFFQTs7OztXQUFBLEFBQVMsYUFBYSxBQUNwQjtRQUFJLE9BQU8sRUFBWCxBQUFXLEFBQUUsQUFFYjs7U0FBQSxBQUFLLE1BQU0sWUFBWSxBQUNyQjtVQUFJLEVBQUEsQUFBRSxRQUFGLEFBQVUsU0FBZCxBQUFJLEFBQW1CLGVBQWUsQUFDcEM7VUFBQSxBQUFFLFFBQUYsQUFBVSxZQURaLEFBQ0UsQUFBc0IsQUFDdkI7YUFBTSxBQUNMO1VBQUEsQUFBRSxRQUFGLEFBQVUsU0FBVixBQUFtQixBQUNwQixBQUNGLEFBTkQsQUFPRDtBQUVEOzs7O1dBQUEsQUFBUyxvQkFBb0IsQUFDM0I7UUFBSSxnQkFBZ0IsRUFBcEIsQUFBb0IsQUFBRTtRQUNwQixzQkFBc0IsRUFBQSxBQUFFLG9CQUQxQixBQUN3QixBQUFzQjtRQUM1QyxrQkFBa0IsY0FBQSxBQUFjLEtBRmxDLEFBRW9CLEFBQW1CO1FBQ3JDLGNBQWMsZ0JBQUEsQUFBZ0IsS0FIaEMsQUFHZ0IsQUFBcUI7UUFDbkMsYUFBYSxnQkFBQSxBQUFnQixLQUovQixBQUllLEFBQXFCO1FBQ2xDLFlBQVksZ0JBQUEsQUFBZ0IsS0FMOUIsQUFLYyxBQUFxQjtRQUNqQyxlQU5GLEFBTWlCLEFBR2pCOztrQkFBQSxBQUFjLE1BQU0sWUFBWSxBQUM5QjtVQUFJLENBQUMsb0JBQUEsQUFBb0IsU0FBekIsQUFBSyxBQUE2QixXQUFXLEFBQzNDO3dCQUFBLEFBQWdCLElBQWhCLEFBQW9CLGNBQXBCLEFBQWtDLEFBQ2xDLEFBQ0E7O1VBQUEsQUFBRSxRQUFGLEFBQVUsU0FBVixBQUFtQixBQUNuQjs0QkFBQSxBQUFvQixTQUFwQixBQUE2QixBQUc3QixBQUNBLEFBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQWpCRDs7YUFpQk8sQUFDTDt3QkFBQSxBQUFnQixJQUFoQixBQUFvQixjQUFwQixBQUFrQyxBQUNsQyxBQUNBOztVQUFBLEFBQUUsUUFBRixBQUFVLFlBQVYsQUFBc0IsQUFDdEI7NEJBQUEsQUFBb0IsWUFBcEIsQUFBZ0MsQUFDakMsQUFDRixBQXhCRCxBQTBCQTs7OztRQUFJLFNBQUEsQUFBUyxnQkFBVCxBQUF5QixjQUE3QixBQUEyQyxNQUFNLEFBQy9DO1FBQUEsQUFBRSxzQ0FBRixBQUF3QyxNQUFNLFlBQVksQUFDeEQsQUFDQTs7bUJBQUEsQUFBVyxTQUFYLEFBQW9CLEFBRXBCOztZQUFJLGdCQUFKLEFBQW9CLEdBQUcsQUFDckI7WUFBQSxBQUFFLE1BQUYsQUFBUSxTQUFSLEFBQWlCLFNBQWpCLEFBQTBCLEFBQzFCO2NBQUksZUFBZSxXQUFXLEVBQUEsQUFBRSxNQUFGLEFBQVEsU0FBUixBQUFpQixLQUFqQixBQUFzQixPQUF0QixBQUE2QixJQUF4QyxBQUFXLEFBQWlDLGFBQS9ELEFBQTRFLEFBQzVFO1lBQUEsQUFBRSxNQUFGLEFBQVEsSUFBUixBQUFZLE9BQVEsZUFBRCxBQUFnQixLQUFoQixBQUFzQixlQUgzQyxBQUdFLEFBQXdELEFBQ3pEO2VBQU0sQUFDTDtjQUFJLFlBQVksRUFBQSxBQUFFLE1BQUYsQUFBUSxRQUF4QixBQUFnQixBQUFnQixBQUNoQztvQkFBQSxBQUFVLFlBQVYsQUFBc0IsQUFDdEI7b0JBQUEsQUFBVSxLQUFWLEFBQWUsd0NBQWYsQUFBdUQsSUFBdkQsQUFBMkQsT0FBM0QsQUFBa0UsQUFDbEU7WUFBQSxBQUFFLE1BQUYsQUFBUSxTQUFSLEFBQWlCLFNBQWpCLEFBQTBCLEFBQzFCO2NBQUksZ0JBQWUsV0FBVyxFQUFBLEFBQUUsTUFBRixBQUFRLFNBQVIsQUFBaUIsS0FBakIsQUFBc0IsT0FBdEIsQUFBNkIsSUFBeEMsQUFBVyxBQUFpQyxhQUEvRCxBQUE0RSxBQUM1RTtZQUFBLEFBQUUsTUFBRixBQUFRLElBQVIsQUFBWSxPQUFRLGdCQUFELEFBQWdCLEtBQWhCLEFBQXNCLGdCQUF6QyxBQUF3RCxBQUN4RDtnQkFBQSxBQUFNLEFBQ1AsQUFDRixBQWpCRCxBQW1CQTs7OztpQkFBQSxBQUFXLE1BQU0sWUFBWSxBQUMzQjtZQUFJLG9CQUFvQixnQkFBQSxBQUFnQixLQUF4QyxBQUF3QixBQUFxQixBQUM3QzswQkFBQSxBQUFrQixZQUFsQixBQUE4QixBQUM5QixBQUNBOztZQUFJLGdCQUFKLEFBQW9CLEdBQUcsQUFDckI7cUJBQUEsQUFBVyxZQURiLEFBQ0UsQUFBdUIsQUFDeEI7ZUFBTSxBQUNMO2NBQUksYUFBYSxrQkFBQSxBQUFrQixTQUFsQixBQUEyQixRQUE1QyxBQUFpQixBQUFtQyxBQUNwRDtxQkFBQSxBQUFXLFNBQVgsQUFBb0IsQUFDcEI7Y0FBSSxlQUFlLFdBQVcsV0FBQSxBQUFXLEtBQVgsQUFBZ0IsT0FBaEIsQUFBdUIsSUFBbEMsQUFBVyxBQUEyQixhQUF6RCxBQUFzRSxBQUN0RTtxQkFBQSxBQUFXLEtBQVgsQUFBZ0IsTUFBaEIsQUFBc0IsSUFBdEIsQUFBMEIsT0FBUSxlQUFELEFBQWdCLEtBQWhCLEFBQXNCLGVBQXZELEFBQXNFLEFBQ3RFO2dCQUFBLEFBQU0sQUFDUCxBQUNGLEFBYkQsQUFlQTs7OztrQkFBQSxBQUFZLE1BQU0sWUFBWSxBQUM1QjtZQUFJLG9CQUFBLEFBQW9CLFNBQXhCLEFBQUksQUFBNkIsV0FBVyxBQUMxQzswQkFBQSxBQUFnQixJQUFoQixBQUFvQixjQUFwQixBQUFrQyxBQUNsQztZQUFBLEFBQUUsUUFBRixBQUFVLFlBQVYsQUFBc0IsQUFDdEI7OEJBQUEsQUFBb0IsWUFBcEIsQUFBZ0MsQUFDakMsQUFDRixBQU5ELEFBT0Q7QUFDRjtBQUlGO0FBbkdDLEFBQUMiLCJmaWxlIjoiaGVhZGVyL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIjsgKGZ1bmN0aW9uICgpIHtcbiAgaGVhZGVyTWVudSgpO1xuICBtZW51X2FsbF9wcm9kdWN0cygpO1xuXG4gIGZ1bmN0aW9uIGhlYWRlck1lbnUoKSB7XG4gICAgdmFyIG1lbnUgPSAkKFwiI3Nob3dNYWluTWVudVwiKTtcblxuICAgIG1lbnUuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCQoXCJodG1sXCIpLmhhc0NsYXNzKCdibG9jay1odG1sJykpIHtcbiAgICAgICAgJChcImh0bWxcIikucmVtb3ZlQ2xhc3MoJ2Jsb2NrLWh0bWwnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCJodG1sXCIpLmFkZENsYXNzKFwiYmxvY2staHRtbFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lbnVfYWxsX3Byb2R1Y3RzKCkge1xuICAgIHZhciBjYXRhbG9nQnV0dG9uID0gJChcIiNzaG93Q2F0YWxvZ01lbnVcIiksXG4gICAgICBjYXRhbG9nQnV0dG9uUGFyZW50ID0gJChcIiNzaG93Q2F0YWxvZ01lbnVcIikucGFyZW50KCksXG4gICAgICBtZW51Q2F0YWxvZ0JvZHkgPSBjYXRhbG9nQnV0dG9uLmZpbmQoXCIrIC5oZWFkZXItbWVudS1jYXRhbG9nLWJvZHlcIiksXG4gICAgICBjbG9zZUJ1dHRvbiA9IG1lbnVDYXRhbG9nQm9keS5maW5kKFwiLmNsb3NlXCIpLFxuICAgICAgZG93bkJ1dHRvbiA9IG1lbnVDYXRhbG9nQm9keS5maW5kKFwiLmRvd25cIiksXG4gICAgICB0aXRsZU1lbnUgPSBtZW51Q2F0YWxvZ0JvZHkuZmluZChcIi5oZWFkZXItbWVudS1jYXRhbG9nLWJvZHlfX3RpdGxlIHBcIiksXG4gICAgICBjdXJyZW50TGV2ZWwgPSAwO1xuXG5cbiAgICBjYXRhbG9nQnV0dG9uLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghY2F0YWxvZ0J1dHRvblBhcmVudC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgbWVudUNhdGFsb2dCb2R5LmNzcyhcIm1heC1oZWlnaHRcIiwgXCJub25lXCIpO1xuICAgICAgICAvLyAkKFwiaHRtbFwiKS5jc3MoJ292ZXJmbG93LXknLCAnaGlkZGVuJyk7XG4gICAgICAgICQoXCJodG1sXCIpLmFkZENsYXNzKFwiYmxvY2staHRtbFwiKTtcbiAgICAgICAgY2F0YWxvZ0J1dHRvblBhcmVudC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cblxuICAgICAgICAvLyAkKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7IC8vINGB0L7QsdGL0YLQuNC1INC60LvQuNC60LAg0L/QviDQstC10LEt0LTQvtC60YPQvNC10L3RgtGDXG4gICAgICAgIC8vICAgdmFyIGRpdiA9ICQoXCIuaGVhZGVyIC5hbGwtcHJvZHVjdCAubWVudVwiKTsgLy8g0YLRg9GCINGD0LrQsNC30YvQstCw0LXQvCBJRCDRjdC70LXQvNC10L3RgtCwXG4gICAgICAgIC8vICAgaWYgKCFkaXYuaXMoZS50YXJnZXQpIC8vINC10YHQu9C4INC60LvQuNC6INCx0YvQuyDQvdC1INC/0L4g0L3QsNGI0LXQvNGDINCx0LvQvtC60YNcbiAgICAgICAgLy8gICAgICYmIGRpdi5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkgeyAvLyDQuCDQvdC1INC/0L4g0LXQs9C+INC00L7Rh9C10YDQvdC40Lwg0Y3Qu9C10LzQtdC90YLQsNC8XG4gICAgICAgIC8vICAgICAkKFwiLmhlYWRlciAuYWxsLXByb2R1Y3QgLm1lbnVcIikuY3NzKFwibWF4LWhlaWdodFwiLCBcIjBcIik7XG4gICAgICAgIC8vICAgICAkKFwiLmhlYWRlciAuYWxsLXByb2R1Y3QgLmZvblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgLy8gICAgICQoXCJodG1sXCIpLmNzcygnb3ZlcmZsb3cteScsICdhdXRvJyk7XG4gICAgICAgIC8vICAgICAkKFwiLmhlYWRlciAuYWxsLXByb2R1Y3RcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW51Q2F0YWxvZ0JvZHkuY3NzKFwibWF4LWhlaWdodFwiLCBcIjBcIik7XG4gICAgICAgIC8vICQoJ2h0bWwnKS5jc3MoJ292ZXJmbG93LXknLCAnYXV0bycpO1xuICAgICAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnYmxvY2staHRtbCcpO1xuICAgICAgICBjYXRhbG9nQnV0dG9uUGFyZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPCAxMDI0KSB7XG4gICAgICAkKFwiLmhlYWRlci1tZW51LWNhdGFsb2ctYm9keV9fc3VibWVudVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN1cnJlbnRMZXZlbCsrO1xuICAgICAgICBkb3duQnV0dG9uLmFkZENsYXNzKFwic2hvd25cIik7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRMZXZlbCA9PSAxKSB7XG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICAgbGV0IGhlaWdodF90aXRsZSA9IHBhcnNlRmxvYXQoJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiPiBhXCIpLmNzcyhcImhlaWdodFwiKSkgLSAxO1xuICAgICAgICAgICQodGhpcykuY3NzKFwidG9wXCIsIChoZWlnaHRfdGl0bGUgPiA1MCkgPyBoZWlnaHRfdGl0bGUgOiA1MCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IG9sZE9wZW5MaSA9ICQodGhpcykuY2xvc2VzdChcIi5vcGVuXCIpO1xuICAgICAgICAgIG9sZE9wZW5MaS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICAgb2xkT3BlbkxpLmZpbmQoXCI+IC5oZWFkZXItbWVudS1jYXRhbG9nLWJvZHlfX3N1Ym1lbnVcIikuY3NzKFwidG9wXCIsIFwiMFwiKTtcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKFwib3BlblwiKTtcbiAgICAgICAgICBsZXQgaGVpZ2h0X3RpdGxlID0gcGFyc2VGbG9hdCgkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCI+IGFcIikuY3NzKFwiaGVpZ2h0XCIpKSAtIDE7XG4gICAgICAgICAgJCh0aGlzKS5jc3MoXCJ0b3BcIiwgKGhlaWdodF90aXRsZSA+IDUwKSA/IGhlaWdodF90aXRsZSA6IDUwKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGRvd25CdXR0b24uY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgY3VycmVudE9wZW5lZEVsZW0gPSBtZW51Q2F0YWxvZ0JvZHkuZmluZChcIi5vcGVuXCIpO1xuICAgICAgICBjdXJyZW50T3BlbmVkRWxlbS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgIGN1cnJlbnRMZXZlbC0tO1xuICAgICAgICBpZiAoY3VycmVudExldmVsID09IDApIHtcbiAgICAgICAgICBkb3duQnV0dG9uLnJlbW92ZUNsYXNzKFwic2hvd25cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHBhcmVudEVsZW0gPSBjdXJyZW50T3BlbmVkRWxlbS5wYXJlbnQoKS5jbG9zZXN0KFwibGlcIik7XG4gICAgICAgICAgcGFyZW50RWxlbS5hZGRDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICAgbGV0IGhlaWdodF90aXRsZSA9IHBhcnNlRmxvYXQocGFyZW50RWxlbS5maW5kKFwiPiBhXCIpLmNzcyhcImhlaWdodFwiKSkgLSAxO1xuICAgICAgICAgIHBhcmVudEVsZW0uZmluZChcInVsXCIpLmNzcyhcInRvcFwiLCAoaGVpZ2h0X3RpdGxlID4gNTApID8gaGVpZ2h0X3RpdGxlIDogNTApO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY2xvc2VCdXR0b24uY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY2F0YWxvZ0J1dHRvblBhcmVudC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICBtZW51Q2F0YWxvZ0JvZHkuY3NzKFwibWF4LWhlaWdodFwiLCBcIjBcIik7XG4gICAgICAgICAgJChcImh0bWxcIikucmVtb3ZlQ2xhc3MoJ2Jsb2NrLWh0bWwnKTtcbiAgICAgICAgICBjYXRhbG9nQnV0dG9uUGFyZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cblxuXG59KCkpOyJdfQ==
