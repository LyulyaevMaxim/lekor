(function() {
  calculateRatings();

  function calculateRatings() {
    let ratingsDistribution = $("ratings-distribution"),
      allVotes = parseFloat(ratingsDistribution.attr("all-votes")),
      receivedVotes = 0,
      widthProgressBar = 0;

    ratingsDistribution.find("rating-block").each(function() {
      receivedVotes = parseFloat($(this).attr("receive-votes"));
      widthProgressBar = parseFloat(receivedVotes / allVotes * 100);

      if (widthProgressBar > 0) {
        $(this)
          .find("progress-bar")
          .css("width", widthProgressBar + "%");
      } else {
        $(this)
          .find("progress-bar")
          .hide();
      }
    });
  }
})();
