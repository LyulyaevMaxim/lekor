"use strict";
$("#showMainMenu").click(function () {
  $("html").hasClass("block-html") ? $("html").removeClass("block-html") : $("html").addClass("block-html");
}), function () {
  var s = $("#showCatalogMenu"),
      a = $("#showCatalogMenu").parent(),
      e = s.find("+ .header-menu-catalog-body"),
      t = e.find(".close"),
      o = e.find(".down"),
      l = (e.find(".header-menu-catalog-body__title p"), 0);s.click(function () {
    a.hasClass("active") ? (e.css("max-height", "0"), $("html").removeClass("block-html"), a.removeClass("active")) : (e.css("max-height", "none"), $("html").addClass("block-html"), a.addClass("active"));
  }), document.documentElement.clientWidth < 1024 && ($(".header-menu-catalog-body__submenu").click(function () {
    if (l++, o.addClass("shown"), 1 == l) {
      $(this).parent().addClass("open");var s = parseFloat($(this).parent().find("> a").css("height")) - 1;$(this).css("top", s > 50 ? s : 50);
    } else {
      var a = $(this).closest(".open");a.removeClass("open"), a.find("> .header-menu-catalog-body__submenu").css("top", "0"), $(this).parent().addClass("open");var e = parseFloat($(this).parent().find("> a").css("height")) - 1;$(this).css("top", e > 50 ? e : 50), event.stopPropagation();
    }
  }), o.click(function () {
    var s = e.find(".open");if (s.removeClass("open"), 0 == --l) o.removeClass("shown");else {
      var a = s.parent().closest("li");a.addClass("open");var t = parseFloat(a.find("> a").css("height")) - 1;a.find("ul").css("top", t > 50 ? t : 50), event.stopPropagation();
    }
  }), t.click(function () {
    a.hasClass("active") && (e.css("max-height", "0"), $("html").removeClass("block-html"), a.removeClass("active"));
  }));
}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuanMiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwicyIsImEiLCJwYXJlbnQiLCJlIiwiZmluZCIsInQiLCJvIiwibCIsImNzcyIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJwYXJzZUZsb2F0IiwiY2xvc2VzdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFhQSxFQUFFLGVBQUYsRUFBbUJDLEtBQW5CLENBQXlCLFlBQVU7QUFBQ0QsSUFBRSxNQUFGLEVBQVVFLFFBQVYsQ0FBbUIsWUFBbkIsSUFBaUNGLEVBQUUsTUFBRixFQUFVRyxXQUFWLENBQXNCLFlBQXRCLENBQWpDLEdBQXFFSCxFQUFFLE1BQUYsRUFBVUksUUFBVixDQUFtQixZQUFuQixDQUFyRTtBQUFzRyxDQUExSSxHQUE0SSxZQUFVO0FBQUMsTUFBSUMsSUFBRUwsRUFBRSxrQkFBRixDQUFOO0FBQUEsTUFBNEJNLElBQUVOLEVBQUUsa0JBQUYsRUFBc0JPLE1BQXRCLEVBQTlCO0FBQUEsTUFBNkRDLElBQUVILEVBQUVJLElBQUYsQ0FBTyw2QkFBUCxDQUEvRDtBQUFBLE1BQXFHQyxJQUFFRixFQUFFQyxJQUFGLENBQU8sUUFBUCxDQUF2RztBQUFBLE1BQXdIRSxJQUFFSCxFQUFFQyxJQUFGLENBQU8sT0FBUCxDQUExSDtBQUFBLE1BQTBJRyxLQUFHSixFQUFFQyxJQUFGLENBQU8sb0NBQVAsR0FBNkMsQ0FBaEQsQ0FBMUksQ0FBNkxKLEVBQUVKLEtBQUYsQ0FBUSxZQUFVO0FBQUNLLE1BQUVKLFFBQUYsQ0FBVyxRQUFYLEtBQXNCTSxFQUFFSyxHQUFGLENBQU0sWUFBTixFQUFtQixHQUFuQixHQUF3QmIsRUFBRSxNQUFGLEVBQVVHLFdBQVYsQ0FBc0IsWUFBdEIsQ0FBeEIsRUFBNERHLEVBQUVILFdBQUYsQ0FBYyxRQUFkLENBQWxGLEtBQTRHSyxFQUFFSyxHQUFGLENBQU0sWUFBTixFQUFtQixNQUFuQixHQUEyQmIsRUFBRSxNQUFGLEVBQVVJLFFBQVYsQ0FBbUIsWUFBbkIsQ0FBM0IsRUFBNERFLEVBQUVGLFFBQUYsQ0FBVyxRQUFYLENBQXhLO0FBQThMLEdBQWpOLEdBQW1OVSxTQUFTQyxlQUFULENBQXlCQyxXQUF6QixHQUFxQyxJQUFyQyxLQUE0Q2hCLEVBQUUsb0NBQUYsRUFBd0NDLEtBQXhDLENBQThDLFlBQVU7QUFBQyxRQUFHVyxLQUFJRCxFQUFFUCxRQUFGLENBQVcsT0FBWCxDQUFKLEVBQXdCLEtBQUdRLENBQTlCLEVBQWdDO0FBQUNaLFFBQUUsSUFBRixFQUFRTyxNQUFSLEdBQWlCSCxRQUFqQixDQUEwQixNQUExQixFQUFrQyxJQUFJQyxJQUFFWSxXQUFXakIsRUFBRSxJQUFGLEVBQVFPLE1BQVIsR0FBaUJFLElBQWpCLENBQXNCLEtBQXRCLEVBQTZCSSxHQUE3QixDQUFpQyxRQUFqQyxDQUFYLElBQXVELENBQTdELENBQStEYixFQUFFLElBQUYsRUFBUWEsR0FBUixDQUFZLEtBQVosRUFBa0JSLElBQUUsRUFBRixHQUFLQSxDQUFMLEdBQU8sRUFBekI7QUFBNkIsS0FBL0osTUFBbUs7QUFBQyxVQUFJQyxJQUFFTixFQUFFLElBQUYsRUFBUWtCLE9BQVIsQ0FBZ0IsT0FBaEIsQ0FBTixDQUErQlosRUFBRUgsV0FBRixDQUFjLE1BQWQsR0FBc0JHLEVBQUVHLElBQUYsQ0FBTyxzQ0FBUCxFQUErQ0ksR0FBL0MsQ0FBbUQsS0FBbkQsRUFBeUQsR0FBekQsQ0FBdEIsRUFBb0ZiLEVBQUUsSUFBRixFQUFRTyxNQUFSLEdBQWlCSCxRQUFqQixDQUEwQixNQUExQixDQUFwRixDQUFzSCxJQUFJSSxJQUFFUyxXQUFXakIsRUFBRSxJQUFGLEVBQVFPLE1BQVIsR0FBaUJFLElBQWpCLENBQXNCLEtBQXRCLEVBQTZCSSxHQUE3QixDQUFpQyxRQUFqQyxDQUFYLElBQXVELENBQTdELENBQStEYixFQUFFLElBQUYsRUFBUWEsR0FBUixDQUFZLEtBQVosRUFBa0JMLElBQUUsRUFBRixHQUFLQSxDQUFMLEdBQU8sRUFBekIsR0FBNkJXLE1BQU1DLGVBQU4sRUFBN0I7QUFBcUQ7QUFBQyxHQUF2ZSxHQUF5ZVQsRUFBRVYsS0FBRixDQUFRLFlBQVU7QUFBQyxRQUFJSSxJQUFFRyxFQUFFQyxJQUFGLENBQU8sT0FBUCxDQUFOLENBQXNCLElBQUdKLEVBQUVGLFdBQUYsQ0FBYyxNQUFkLEdBQXNCLEtBQUcsRUFBRVMsQ0FBOUIsRUFBZ0NELEVBQUVSLFdBQUYsQ0FBYyxPQUFkLEVBQWhDLEtBQTJEO0FBQUMsVUFBSUcsSUFBRUQsRUFBRUUsTUFBRixHQUFXVyxPQUFYLENBQW1CLElBQW5CLENBQU4sQ0FBK0JaLEVBQUVGLFFBQUYsQ0FBVyxNQUFYLEVBQW1CLElBQUlNLElBQUVPLFdBQVdYLEVBQUVHLElBQUYsQ0FBTyxLQUFQLEVBQWNJLEdBQWQsQ0FBa0IsUUFBbEIsQ0FBWCxJQUF3QyxDQUE5QyxDQUFnRFAsRUFBRUcsSUFBRixDQUFPLElBQVAsRUFBYUksR0FBYixDQUFpQixLQUFqQixFQUF1QkgsSUFBRSxFQUFGLEdBQUtBLENBQUwsR0FBTyxFQUE5QixHQUFrQ1MsTUFBTUMsZUFBTixFQUFsQztBQUEwRDtBQUFDLEdBQWxRLENBQXplLEVBQTZ1QlYsRUFBRVQsS0FBRixDQUFRLFlBQVU7QUFBQ0ssTUFBRUosUUFBRixDQUFXLFFBQVgsTUFBdUJNLEVBQUVLLEdBQUYsQ0FBTSxZQUFOLEVBQW1CLEdBQW5CLEdBQXdCYixFQUFFLE1BQUYsRUFBVUcsV0FBVixDQUFzQixZQUF0QixDQUF4QixFQUE0REcsRUFBRUgsV0FBRixDQUFjLFFBQWQsQ0FBbkY7QUFBNEcsR0FBL0gsQ0FBenhCLENBQW5OO0FBQThtQyxDQUF0ekMsRUFBNUkiLCJmaWxlIjoiaGVhZGVyL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiOyQoXCIjc2hvd01haW5NZW51XCIpLmNsaWNrKGZ1bmN0aW9uKCl7JChcImh0bWxcIikuaGFzQ2xhc3MoXCJibG9jay1odG1sXCIpPyQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKFwiYmxvY2staHRtbFwiKTokKFwiaHRtbFwiKS5hZGRDbGFzcyhcImJsb2NrLWh0bWxcIil9KSxmdW5jdGlvbigpe3ZhciBzPSQoXCIjc2hvd0NhdGFsb2dNZW51XCIpLGE9JChcIiNzaG93Q2F0YWxvZ01lbnVcIikucGFyZW50KCksZT1zLmZpbmQoXCIrIC5oZWFkZXItbWVudS1jYXRhbG9nLWJvZHlcIiksdD1lLmZpbmQoXCIuY2xvc2VcIiksbz1lLmZpbmQoXCIuZG93blwiKSxsPShlLmZpbmQoXCIuaGVhZGVyLW1lbnUtY2F0YWxvZy1ib2R5X190aXRsZSBwXCIpLDApO3MuY2xpY2soZnVuY3Rpb24oKXthLmhhc0NsYXNzKFwiYWN0aXZlXCIpPyhlLmNzcyhcIm1heC1oZWlnaHRcIixcIjBcIiksJChcImh0bWxcIikucmVtb3ZlQ2xhc3MoXCJibG9jay1odG1sXCIpLGEucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIikpOihlLmNzcyhcIm1heC1oZWlnaHRcIixcIm5vbmVcIiksJChcImh0bWxcIikuYWRkQ2xhc3MoXCJibG9jay1odG1sXCIpLGEuYWRkQ2xhc3MoXCJhY3RpdmVcIikpfSksZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoPDEwMjQmJigkKFwiLmhlYWRlci1tZW51LWNhdGFsb2ctYm9keV9fc3VibWVudVwiKS5jbGljayhmdW5jdGlvbigpe2lmKGwrKyxvLmFkZENsYXNzKFwic2hvd25cIiksMT09bCl7JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcyhcIm9wZW5cIik7dmFyIHM9cGFyc2VGbG9hdCgkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCI+IGFcIikuY3NzKFwiaGVpZ2h0XCIpKS0xOyQodGhpcykuY3NzKFwidG9wXCIscz41MD9zOjUwKX1lbHNle3ZhciBhPSQodGhpcykuY2xvc2VzdChcIi5vcGVuXCIpO2EucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpLGEuZmluZChcIj4gLmhlYWRlci1tZW51LWNhdGFsb2ctYm9keV9fc3VibWVudVwiKS5jc3MoXCJ0b3BcIixcIjBcIiksJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcyhcIm9wZW5cIik7dmFyIGU9cGFyc2VGbG9hdCgkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCI+IGFcIikuY3NzKFwiaGVpZ2h0XCIpKS0xOyQodGhpcykuY3NzKFwidG9wXCIsZT41MD9lOjUwKSxldmVudC5zdG9wUHJvcGFnYXRpb24oKX19KSxvLmNsaWNrKGZ1bmN0aW9uKCl7dmFyIHM9ZS5maW5kKFwiLm9wZW5cIik7aWYocy5yZW1vdmVDbGFzcyhcIm9wZW5cIiksMD09LS1sKW8ucmVtb3ZlQ2xhc3MoXCJzaG93blwiKTtlbHNle3ZhciBhPXMucGFyZW50KCkuY2xvc2VzdChcImxpXCIpO2EuYWRkQ2xhc3MoXCJvcGVuXCIpO3ZhciB0PXBhcnNlRmxvYXQoYS5maW5kKFwiPiBhXCIpLmNzcyhcImhlaWdodFwiKSktMTthLmZpbmQoXCJ1bFwiKS5jc3MoXCJ0b3BcIix0PjUwP3Q6NTApLGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpfX0pLHQuY2xpY2soZnVuY3Rpb24oKXthLmhhc0NsYXNzKFwiYWN0aXZlXCIpJiYoZS5jc3MoXCJtYXgtaGVpZ2h0XCIsXCIwXCIpLCQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKFwiYmxvY2staHRtbFwiKSxhLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpKX0pKX0oKTsiXX0=
