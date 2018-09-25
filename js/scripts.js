$(document).ready(function() {
  $("#favorites form").submit(function(event) {
    var name = $("#name").val();
    var animal = $("#animal").val();
    var food = $("#food").val();
    var music = $("#music").val();
    var color = $("#color").val();
    var results = [name, animal, food, music, color]
    event.preventDefault();
});
