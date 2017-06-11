$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    event.preventDefault();
    var results = parseInt($("input#entry1").val());

    $(".results").text(results);

    $("#results").show()
    entry(results)

  });
});
// business logic
   var entry = function(results) {
     for (var i = 1 ; i <= results ; i++) {
     if (i % 3===0) {
       console.log("ping");
       $("#results").append("<li>" + "ping" +"</li>");
     }
     else if (i % 5===0) {
       console.log("pong");
       $("#results").append("<li>" + "pong" +"</li>");

     }
     else if (i % 5===0 && 3===0) {
       console.log("pingpong");
       $("#results").append("<li>" + "pingpong" +"</li>");
     }

      {$("#results").append("<li>" + String(i) +"</li>");}



   };
   };
