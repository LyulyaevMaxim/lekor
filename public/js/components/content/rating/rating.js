"use strict";

;(function () {
  calculateRatings();

  function calculateRatings() {
    var ratingsDistribution = $("ratings-distribution"),
        allVotes = parseFloat(ratingsDistribution.attr("all-votes")),
        receivedVotes = 0,
        widthProgressBar = 0;

    ratingsDistribution.find("review-rating").each(function () {
      receivedVotes = parseFloat($(this).attr("receive-votes"));
      widthProgressBar = parseFloat(receivedVotes / allVotes * 100);

      if (widthProgressBar > 0) {
        $(this).find("progress-bar").css("width", widthProgressBar + "%");
      } else {
        $(this).find("progress-bar").hide();
      }
    });
  }
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQvcmF0aW5nL3JhdGluZy5qcyJdLCJuYW1lcyI6WyJjYWxjdWxhdGVSYXRpbmdzIiwicmF0aW5nc0Rpc3RyaWJ1dGlvbiIsIiQiLCJhbGxWb3RlcyIsInBhcnNlRmxvYXQiLCJhdHRyIiwicmVjZWl2ZWRWb3RlcyIsIndpZHRoUHJvZ3Jlc3NCYXIiLCJmaW5kIiwiZWFjaCIsImNzcyIsImhpZGUiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBRyxhQUFZLEFBQ2IsQUFFQTs7O1dBQUEsQUFBUyxtQkFBbUIsQUFDMUI7UUFBSSxzQkFBc0IsRUFBMUIsQUFBMEIsQUFBRTtRQUMxQixXQUFXLFdBQVcsb0JBQUEsQUFBb0IsS0FENUMsQUFDYSxBQUFXLEFBQXlCO1FBQy9DLGdCQUZGLEFBRWtCO1FBQ2hCLG1CQUhGLEFBR3FCLEFBRXJCOzt3QkFBQSxBQUFvQixLQUFwQixBQUF5QixpQkFBekIsQUFBMEMsS0FBSyxZQUFZLEFBQ3pEO3NCQUFnQixXQUFXLEVBQUEsQUFBRSxNQUFGLEFBQVEsS0FBbkMsQUFBZ0IsQUFBVyxBQUFhLEFBQ3hDO3lCQUFtQixXQUFZLGdCQUFELEFBQWlCLFdBQS9DLEFBQW1CLEFBQXdDLEFBRTNEOztVQUFJLG1CQUFKLEFBQXVCLEdBQUcsQUFDeEI7VUFBQSxBQUFFLE1BQUYsQUFBUSxLQUFSLEFBQWEsZ0JBQWIsQUFBNkIsSUFBN0IsQUFBaUMsU0FBUyxtQkFENUMsQUFDRSxBQUE2RCxBQUM5RDthQUNJLEFBQ0g7VUFBQSxBQUFFLE1BQUYsQUFBUSxLQUFSLEFBQWEsZ0JBUmpCLEFBUUksQUFBNkIsQUFDOUIsQUFDRixBQUNGLEFBQ0Y7QUFyQkMsQUFBQyIsImZpbGUiOiJjb250ZW50L3JhdGluZy9yYXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI7IChmdW5jdGlvbiAoKSB7XG4gIGNhbGN1bGF0ZVJhdGluZ3MoKTtcblxuICBmdW5jdGlvbiBjYWxjdWxhdGVSYXRpbmdzKCkge1xuICAgIGxldCByYXRpbmdzRGlzdHJpYnV0aW9uID0gJChcInJhdGluZ3MtZGlzdHJpYnV0aW9uXCIpLFxuICAgICAgYWxsVm90ZXMgPSBwYXJzZUZsb2F0KHJhdGluZ3NEaXN0cmlidXRpb24uYXR0cihcImFsbC12b3Rlc1wiKSksXG4gICAgICByZWNlaXZlZFZvdGVzID0gMCxcbiAgICAgIHdpZHRoUHJvZ3Jlc3NCYXIgPSAwO1xuXG4gICAgcmF0aW5nc0Rpc3RyaWJ1dGlvbi5maW5kKFwicmV2aWV3LXJhdGluZ1wiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlY2VpdmVkVm90ZXMgPSBwYXJzZUZsb2F0KCQodGhpcykuYXR0cihcInJlY2VpdmUtdm90ZXNcIikpO1xuICAgICAgd2lkdGhQcm9ncmVzc0JhciA9IHBhcnNlRmxvYXQoKHJlY2VpdmVkVm90ZXMgLyBhbGxWb3RlcykgKiAxMDApO1xuXG4gICAgICBpZiAod2lkdGhQcm9ncmVzc0JhciA+IDApIHtcbiAgICAgICAgJCh0aGlzKS5maW5kKFwicHJvZ3Jlc3MtYmFyXCIpLmNzcyhcIndpZHRoXCIsIHdpZHRoUHJvZ3Jlc3NCYXIgKyBcIiVcIik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgJCh0aGlzKS5maW5kKFwicHJvZ3Jlc3MtYmFyXCIpLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSgpKTsiXX0=
