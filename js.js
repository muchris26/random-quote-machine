$(document).ready(function() {
  /*
  var chuckAPI = "https://api.chucknorris.io/jokes/random";
  
  $.getJSON(chuckAPI, function(data) {

    console.log(data.value);
    $('#chuckquote').append(data.value);
  });
  */

  var swAPI = "http://api.chrisvalleskey.com/fillerama/get.php?count=1&format=json&show=starwars";
  
  $.getJSON(swAPI, function(data) {

    console.log(data.db[0].quote);
    console.log(data.db[0].source);
    $('#swquote').append('"' + data.db[0].quote + '"');

    $('#swsource').append("- " + data.db[0].source);
    if (data.db[0].source === "Darth Vader") {
      document.getElementByID("bg").src = "happy.jpg" };    

    $('#tweet').attr("href", "https://twitter.com/intent/tweet?text=" + '"' + data.db[0].quote + '" - ' + data.db[0].source);
    });
  



});