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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuanMiXSwibmFtZXMiOlsibWVudV9hbGxfcHJvZHVjdHMiLCJjYXRhbG9nQnV0dG9uIiwiJCIsImNhdGFsb2dCdXR0b25QYXJlbnQiLCJwYXJlbnQiLCJtZW51Q2F0YWxvZ0JvZHkiLCJmaW5kIiwiY2xvc2VCdXR0b24iLCJkb3duQnV0dG9uIiwidGl0bGVNZW51IiwiY3VycmVudExldmVsIiwiY2xpY2siLCJoYXNDbGFzcyIsImNzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaGVpZ2h0X3RpdGxlIiwicGFyc2VGbG9hdCIsIm9sZE9wZW5MaSIsImNsb3Nlc3QiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRPcGVuZWRFbGVtIiwiY29uc29sZSIsImxvZyIsInBhcmVudEVsZW0iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsU0FBQSxBQUFTLG9CQUFvQixBQUMzQjtNQUFJLGdCQUFnQixFQUFwQixBQUFvQixBQUFFO01BQ3BCLHNCQUFzQixFQUFBLEFBQUUsb0JBRDFCLEFBQ3dCLEFBQXNCO01BQzVDLGtCQUFrQixjQUFBLEFBQWMsS0FGbEMsQUFFb0IsQUFBbUI7TUFDckMsY0FBYyxnQkFBQSxBQUFnQixLQUhoQyxBQUdnQixBQUFxQjtNQUNuQyxhQUFhLGdCQUFBLEFBQWdCLEtBSi9CLEFBSWUsQUFBcUI7TUFDbEMsWUFBWSxnQkFBQSxBQUFnQixLQUw5QixBQUtjLEFBQXFCO01BQ2pDLGVBTkYsQUFNaUIsQUFHakI7O2dCQUFBLEFBQWMsTUFBTSxZQUFZLEFBQzlCO1FBQUksQ0FBQyxvQkFBQSxBQUFvQixTQUF6QixBQUFLLEFBQTZCLFdBQVcsQUFDM0M7c0JBQUEsQUFBZ0IsSUFBaEIsQUFBb0IsY0FBcEIsQUFBa0MsQUFDbEM7UUFBQSxBQUFFLFFBQUYsQUFBVSxJQUFWLEFBQWMsY0FBZCxBQUE0QixBQUM1QjswQkFBQSxB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OlsibWVudV9hbGxfcHJvZHVjdHMoKTtcblxuZnVuY3Rpb24gbWVudV9hbGxfcHJvZHVjdHMoKSB7XG4gIHZhciBjYXRhbG9nQnV0dG9uID0gJChcIiNzaG93Q2F0YWxvZ01lbnVcIiksXG4gICAgY2F0YWxvZ0J1dHRvblBhcmVudCA9ICQoXCIjc2hvd0NhdGFsb2dNZW51XCIpLnBhcmVudCgpLFxuICAgIG1lbnVDYXRhbG9nQm9keSA9IGNhdGFsb2dCdXR0b24uZmluZChcIisgLmhlYWRlci1tZW51LWNhdGFsb2ctYm9keVwiKSxcbiAgICBjbG9zZUJ1dHRvbiA9IG1lbnVDYXRhbG9nQm9keS5maW5kKFwiLmNsb3NlXCIpLFxuICAgIGRvd25CdXR0b24gPSBtZW51Q2F0YWxvZ0JvZHkuZmluZChcIi5kb3duXCIpLFxuICAgIHRpdGxlTWVudSA9IG1lbnVDYXRhbG9nQm9keS5maW5kKFwiLmhlYWRlci1tZW51LWNhdGFsb2ctYm9keV9fdGl0bGUgcFwiKSxcbiAgICBjdXJyZW50TGV2ZWwgPSAwO1xuXG5cbiAgY2F0YWxvZ0J1dHRvbi5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFjYXRhbG9nQnV0dG9uUGFyZW50Lmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgbWVudUNhdGFsb2dCb2R5LmNzcyhcIm1heC1oZWlnaHRcIiwgXCJub25lXCIpO1xuICAgICAgJChcImh0bWxcIikuY3NzKCdvdmVyZmxvdy15JywgJ2hpZGRlbicpO1xuICAgICAgY2F0YWxvZ0J1dHRvblBhcmVudC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgIC8vICQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHsgLy8g0YHQvtCx0YvRgtC40LUg0LrQu9C40LrQsCDQv9C+INCy0LXQsS3QtNC+0LrRg9C80LXQvdGC0YNcbiAgICAgIC8vICAgdmFyIGRpdiA9ICQoXCIuaGVhZGVyIC5hbGwtcHJvZHVjdCAubWVudVwiKTsgLy8g0YLRg9GCINGD0LrQsNC30YvQstCw0LXQvCBJRCDRjdC70LXQvNC10L3RgtCwXG4gICAgICAvLyAgIGlmICghZGl2LmlzKGUudGFyZ2V0KSAvLyDQtdGB0LvQuCDQutC70LjQuiDQsdGL0Lsg0L3QtSDQv9C+INC90LDRiNC10LzRgyDQsdC70L7QutGDXG4gICAgICAvLyAgICAgJiYgZGl2LmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7IC8vINC4INC90LUg0L/QviDQtdCz0L4g0LTQvtGH0LXRgNC90LjQvCDRjdC70LXQvNC10L3RgtCw0LxcbiAgICAgIC8vICAgICAkKFwiLmhlYWRlciAuYWxsLXByb2R1Y3QgLm1lbnVcIikuY3NzKFwibWF4LWhlaWdodFwiLCBcIjBcIik7XG4gICAgICAvLyAgICAgJChcIi5oZWFkZXIgLmFsbC1wcm9kdWN0IC5mb25cIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAvLyAgICAgJChcImh0bWxcIikuY3NzKCdvdmVyZmxvdy15JywgJ2F1dG8nKTtcbiAgICAgIC8vICAgICAkKFwiLmhlYWRlciAuYWxsLXByb2R1Y3RcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVudUNhdGFsb2dCb2R5LmNzcyhcIm1heC1oZWlnaHRcIiwgXCIwXCIpO1xuICAgICAgJCgnaHRtbCcpLmNzcygnb3ZlcmZsb3cteScsICdhdXRvJyk7XG4gICAgICBjYXRhbG9nQnV0dG9uUGFyZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPCAxMDI0KSB7XG4gICAgJChcIi5oZWFkZXItbWVudS1jYXRhbG9nLWJvZHlfX3N1Ym1lbnVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgY3VycmVudExldmVsKys7XG4gICAgICBkb3duQnV0dG9uLmFkZENsYXNzKFwic2hvd25cIik7XG5cbiAgICAgIGlmIChjdXJyZW50TGV2ZWwgPT0gMSkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKFwib3BlblwiKTtcbiAgICAgICAgbGV0IGhlaWdodF90aXRsZSA9IHBhcnNlRmxvYXQoJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiPiBhXCIpLmNzcyhcImhlaWdodFwiKSkgLSAxO1xuICAgICAgICAkKHRoaXMpLmNzcyhcInRvcFwiLCAoaGVpZ2h0X3RpdGxlID4gNTApID8gaGVpZ2h0X3RpdGxlIDogNTApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG9sZE9wZW5MaSA9ICQodGhpcykuY2xvc2VzdChcIi5vcGVuXCIpO1xuICAgICAgICBvbGRPcGVuTGkucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICBvbGRPcGVuTGkuZmluZChcIj4gLmhlYWRlci1tZW51LWNhdGFsb2ctYm9keV9fc3VibWVudVwiKS5jc3MoXCJ0b3BcIiwgXCIwXCIpO1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKFwib3BlblwiKTtcbiAgICAgICAgbGV0IGhlaWdodF90aXRsZSA9IHBhcnNlRmxvYXQoJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiPiBhXCIpLmNzcyhcImhlaWdodFwiKSkgLSAxO1xuICAgICAgICAkKHRoaXMpLmNzcyhcInRvcFwiLCAoaGVpZ2h0X3RpdGxlID4gNTApID8gaGVpZ2h0X3RpdGxlIDogNTApO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvd25CdXR0b24uY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGN1cnJlbnRPcGVuZWRFbGVtID0gbWVudUNhdGFsb2dCb2R5LmZpbmQoXCIub3BlblwiKTtcbiAgICAgIGN1cnJlbnRPcGVuZWRFbGVtLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcbiAgICAgIGN1cnJlbnRMZXZlbC0tO1xuICAgICAgaWYgKGN1cnJlbnRMZXZlbCA9PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIik7XG4gICAgICAgIGRvd25CdXR0b24ucmVtb3ZlQ2xhc3MoXCJzaG93blwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwYXJlbnRFbGVtID0gY3VycmVudE9wZW5lZEVsZW0ucGFyZW50KCkuY2xvc2VzdChcImxpXCIpO1xuICAgICAgICBwYXJlbnRFbGVtLmFkZENsYXNzKFwib3BlblwiKTtcbiAgICAgICAgbGV0IGhlaWdodF90aXRsZSA9IHBhcnNlRmxvYXQocGFyZW50RWxlbS5maW5kKFwiPiBhXCIpLmNzcyhcImhlaWdodFwiKSkgLSAxO1xuICAgICAgICBwYXJlbnRFbGVtLmZpbmQoXCJ1bFwiKS5jc3MoXCJ0b3BcIiwgKGhlaWdodF90aXRsZSA+IDUwKSA/IGhlaWdodF90aXRsZSA6IDUwKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjbG9zZUJ1dHRvbi5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY2F0YWxvZ0J1dHRvblBhcmVudC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgbWVudUNhdGFsb2dCb2R5LmNzcyhcIm1heC1oZWlnaHRcIiwgXCIwXCIpO1xuICAgICAgICAkKFwiaHRtbFwiKS5jc3MoJ292ZXJmbG93LXknLCAnYXV0bycpO1xuICAgICAgICBjYXRhbG9nQnV0dG9uUGFyZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19
