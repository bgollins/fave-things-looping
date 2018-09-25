$(document).ready(function() {
  $("#favorites form").submit(function(event) {
    var name = $("#name").val();
    var animal = $("#animal").val();
    var food = $("#food").val();
    var music = $("#music").val();
    var color = $("#color").val();
    var results = [name, animal, food, music, color];

    var topThings1 = results[1];
    var topThings2 = results[0];
    var topThings3 = results[2];
    var topTopThings = topThings1.concat(topThings2.concat(topThings3));
    topTopThings.toString();
    $("#topTopThings").text(topTopThings);
    topThings1.toString();
    $(".topThings1").text(topThings1);
    topThings2.toString();
    $(".topThings2").text(topThings2);
    topThings3.toString();
    $(".topThings3").text(topThings3);

    event.preventDefault();
  });
});
