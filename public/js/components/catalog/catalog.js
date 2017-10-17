"use strict";

(function () {
  toggleViewMode();
  toggleSortMode();

  function toggleViewMode() {
    var Catalog = $("catalog-items-section"),
        blockForViewToggles = $("block-for-toggles view-mode"),
        listMode = blockForViewToggles.find("> .list-mode"),
        tableMode = blockForViewToggles.find("> .table-mode");

    listMode.on("click", function () {
      if (!Catalog.hasClass("list")) {
        tableMode.removeClass("active");
        $(this).addClass("active");
        Catalog.attr("class", "list");
      }
    });

    tableMode.on("click", function () {
      if (!Catalog.hasClass("table")) {
        listMode.removeClass("active");
        $(this).addClass("active");
        Catalog.attr("class", "table");
      }
    });
  }

  function toggleSortMode() {
    var Catalog = $("catalog-items-section"),
        blockForSortToggles = $("block-for-toggles sort-mode"),
        priceSort = blockForSortToggles.find("> .price"),
        manufacturerSort = blockForSortToggles.find("> .manufacturer");

    manufacturerSort.on("click", function () {
      if (!$(this).hasClass("active")) {
        priceSort.removeClass("active");
        $(this).addClass("active");
      }
    });

    priceSort.on("click", function () {
      if (!$(this).hasClass("active")) {
        manufacturerSort.removeClass("active");
        $(this).addClass("active");
      } else {
        if ($(this).hasClass("to-high")) {
          $(this).removeClass("to-high");
          $(this).addClass("to-low");
        } else {
          $(this).removeClass("to-low");
          $(this).addClass("to-high");
        }
      }
    });
  }
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cvY2F0YWxvZy5qcyJdLCJuYW1lcyI6WyJ0b2dnbGVWaWV3TW9kZSIsInRvZ2dsZVNvcnRNb2RlIiwiQ2F0YWxvZyIsIiQiLCJibG9ja0ZvclZpZXdUb2dnbGVzIiwibGlzdE1vZGUiLCJmaW5kIiwidGFibGVNb2RlIiwib24iLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJhdHRyIiwiYmxvY2tGb3JTb3J0VG9nZ2xlcyIsInByaWNlU29ydCIsIm1hbnVmYWN0dXJlclNvcnQiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxZQUFXLEFBQ1YsQUFDQTtBQUVBOzs7V0FBQSxBQUFTLGlCQUFpQixBQUN4QjtRQUFJLFVBQVUsRUFBZCxBQUFjLEFBQUU7UUFDZCxzQkFBc0IsRUFEeEIsQUFDd0IsQUFBRTtRQUN4QixXQUFXLG9CQUFBLEFBQW9CLEtBRmpDLEFBRWEsQUFBeUI7UUFDcEMsWUFBWSxvQkFBQSxBQUFvQixLQUhsQyxBQUdjLEFBQXlCLEFBRXZDOzthQUFBLEFBQVMsR0FBVCxBQUFZLFNBQVMsWUFBVyxBQUM5QjtVQUFJLENBQUMsUUFBQSxBQUFRLFNBQWIsQUFBSyxBQUFpQixTQUFTLEFBQzdCO2tCQUFBLEFBQVUsWUFBVixBQUFzQixBQUN0QjtVQUFBLEFBQUUsTUFBRixBQUFRLFNBQVIsQUFBaUIsQUFDakI7Z0JBQUEsQUFBUSxLQUFSLEFBQWEsU0FBYixBQUFzQixBQUN2QixBQUNGO0FBTkQsQUFRQTs7O2NBQUEsQUFBVSxHQUFWLEFBQWEsU0FBUyxZQUFXLEFBQy9CO1VBQUksQ0FBQyxRQUFBLEFBQVEsU0FBYixBQUFLLEFBQWlCLFVBQVUsQUFDOUI7aUJBQUEsQUFBUyxZQUFULEFBQXFCLEFBQ3JCO1VBQUEsQUFBRSxNQUFGLEFBQVEsU0FBUixBQUFpQixBQUNqQjtnQkFBQSxBQUFRLEtBQVIsQUFBYSxTQUFiLEFBQXNCLEFBQ3ZCLEFBQ0Y7QUFORCxBQU9EO0FBRUQ7OztXQUFBLEFBQVMsaUJBQWlCLEFBQ3hCO1FBQUksVUFBVSxFQUFkLEFBQWMsQUFBRTtRQUNkLHNCQUFzQixFQUR4QixBQUN3QixBQUFFO1FBQ3hCLFlBQVksb0JBQUEsQUFBb0IsS0FGbEMsQUFFYyxBQUF5QjtRQUNyQyxtQkFBbUIsb0JBQUEsQUFBb0IsS0FIekMsQUFHcUIsQUFBeUIsQUFFOUM7O3FCQUFBLEFBQWlCLEdBQWpCLEFBQW9CLFNBQVMsWUFBVyxBQUN0QztVQUFJLENBQUMsRUFBQSxBQUFFLE1BQUYsQUFBUSxTQUFiLEFBQUssQUFBaUIsV0FBVyxBQUMvQjtrQkFBQSxBQUFVLFlBQVYsQUFBc0IsQUFDdEI7VUFBQSxBQUFFLE1BQUYsQUFBUSxTQUFSLEFBQWlCLEFBQ2xCLEFBQ0Y7QUFMRCxBQU9BOzs7Y0FBQSxBQUFVLEdBQVYsQUFBYSxTQUFTLFlBQVcsQUFDL0I7VUFBSSxDQUFDLEVBQUEsQUFBRSxNQUFGLEFBQVEsU0FBYixBQUFLLEFBQWlCLFdBQVcsQUFDL0I7eUJBQUEsQUFBaUIsWUFBakIsQUFBNkIsQUFDN0I7VUFBQSxBQUFFLE1BQUYsQUFBUSxTQUFSLEFBQWlCLEFBQ2xCLEFBSEQ7YUFHTyxBQUNMO1lBQUksRUFBQSxBQUFFLE1BQUYsQUFBUSxTQUFaLEFBQUksQUFBaUIsWUFBWSxBQUMvQjtZQUFBLEFBQUUsTUFBRixBQUFRLFlBQVIsQUFBb0IsQUFDcEI7WUFBQSxBQUFFLE1BQUYsQUFBUSxTQUFSLEFBQWlCLEFBQ2xCLEFBSEQ7ZUFHTyxBQUNMO1lBQUEsQUFBRSxNQUFGLEFBQVEsWUFBUixBQUFvQixBQUNwQjtZQUFBLEFBQUUsTUFBRixBQUFRLFNBQVIsQUFBaUIsQUFDbEIsQUFDRjtBQUNGO0FBYkQsQUFjRDtBQUNGO0FBdkREIiwiZmlsZSI6ImNhdGFsb2cvY2F0YWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgdG9nZ2xlVmlld01vZGUoKTtcbiAgdG9nZ2xlU29ydE1vZGUoKTtcblxuICBmdW5jdGlvbiB0b2dnbGVWaWV3TW9kZSgpIHtcbiAgICBsZXQgQ2F0YWxvZyA9ICQoXCJjYXRhbG9nLWl0ZW1zLXNlY3Rpb25cIiksXG4gICAgICBibG9ja0ZvclZpZXdUb2dnbGVzID0gJChcImJsb2NrLWZvci10b2dnbGVzIHZpZXctbW9kZVwiKSxcbiAgICAgIGxpc3RNb2RlID0gYmxvY2tGb3JWaWV3VG9nZ2xlcy5maW5kKFwiPiAubGlzdC1tb2RlXCIpLFxuICAgICAgdGFibGVNb2RlID0gYmxvY2tGb3JWaWV3VG9nZ2xlcy5maW5kKFwiPiAudGFibGUtbW9kZVwiKTtcblxuICAgIGxpc3RNb2RlLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIUNhdGFsb2cuaGFzQ2xhc3MoXCJsaXN0XCIpKSB7XG4gICAgICAgIHRhYmxlTW9kZS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgQ2F0YWxvZy5hdHRyKFwiY2xhc3NcIiwgXCJsaXN0XCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGFibGVNb2RlLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIUNhdGFsb2cuaGFzQ2xhc3MoXCJ0YWJsZVwiKSkge1xuICAgICAgICBsaXN0TW9kZS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgQ2F0YWxvZy5hdHRyKFwiY2xhc3NcIiwgXCJ0YWJsZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVNvcnRNb2RlKCkge1xuICAgIGxldCBDYXRhbG9nID0gJChcImNhdGFsb2ctaXRlbXMtc2VjdGlvblwiKSxcbiAgICAgIGJsb2NrRm9yU29ydFRvZ2dsZXMgPSAkKFwiYmxvY2stZm9yLXRvZ2dsZXMgc29ydC1tb2RlXCIpLFxuICAgICAgcHJpY2VTb3J0ID0gYmxvY2tGb3JTb3J0VG9nZ2xlcy5maW5kKFwiPiAucHJpY2VcIiksXG4gICAgICBtYW51ZmFjdHVyZXJTb3J0ID0gYmxvY2tGb3JTb3J0VG9nZ2xlcy5maW5kKFwiPiAubWFudWZhY3R1cmVyXCIpO1xuXG4gICAgbWFudWZhY3R1cmVyU29ydC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIHByaWNlU29ydC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHByaWNlU29ydC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIG1hbnVmYWN0dXJlclNvcnQucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcInRvLWhpZ2hcIikpIHtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwidG8taGlnaFwiKTtcbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwidG8tbG93XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJ0by1sb3dcIik7XG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcInRvLWhpZ2hcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSkoKTtcbiJdfQ==
