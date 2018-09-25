$(document).ready(function() {
  $("#favorites form").submit(function(event) {
    var favs = ["name", "animal", "food", "music", "color"];

    favs.forEach(function(fav) {
     var userInput = $("#" + fav).val();
     $("." + fav).text(userInput);
    });
    event.preventDefault();
  });
});

    // var topThings1 = results[1];
    // var topThings2 = results[0];
    // var topThings3 = results[2];
    // var topTopThings = topThings1.concat(topThings2.concat(topThings3));
    // topTopThings.toString();
    // $("#topTopThings").text(topTopThings);
    // topThings1.toString();
    // $(".topThings1").text(topThings1);
    // topThings2.toString();
    // $(".topThings2").text(topThings2);
    // topThings3.toString();
    // $(".topThings3").text(topThings3);
