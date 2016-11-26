var tempFormat = 'far';
var farTemp = '';
var celTemp = '';

var cloudyPic = 'https://res.cloudinary.com/dx5awlfzg/image/upload/v1480167536/clouds_texture2888_rx0ifu.jpg';
var sunnyPic = 'https://res.cloudinary.com/dx5awlfzg/image/upload/v1480167535/clear_kzgnji.jpg';
var rainyPic = 'https://res.cloudinary.com/dx5awlfzg/image/upload/v1480167536/rain-04_vw2c9y.jpg'

var snowyPic = 'https://res.cloudinary.com/dx5awlfzg/image/upload/v1480167538/snow_xcqwik.jpg'

codes = [['50n', 'cloudy'], ['50d', 'cloudy'], ['03d', 'cloudy'], ['03n', 'cloudy'], ['04d', 'cloudy'], ['04n', 'cloudy'], ['01d', 'sun'], ['01n', 'sun'], ['02d', 'sun'], ['02n', 'sun'], ['09d', 'rain'], ['09n', 'rain'], ['10n', 'rain'], ['10d', 'rain'], ['11d', 'rain'], ['11n', 'rain'], ['13d', 'snow'], ['13n', 'snow']];

function kelToFar(x) {
  return (x * 9/5) - 459.67;
};

function kelToCel(x) {
  return x - 273.15;
};

function bgPic(x) {
  for (var i=0; i < codes.length; i++) {
    if (codes[i][0] === x) {
      return codes[i][1];
    }
  }
};


$(document).ready(function() {
  $('#change-temp').click(function() {
    $('#temp').empty();
    if (tempFormat === 'far') {
      $('#temp').append("Temperature: " + Math.round(celTemp) + "C");
      tempFormat = 'cel';
    }
    else if (tempFormat === 'cel') {
      $('#temp').append("Temperature: " + Math.round(farTemp) + "F");
      tempFormat = 'far';
    }
  });
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  };
  function showPosition(pos) {
    var lat = pos.coords.latitude;
    var lon = pos.coords.longitude;
    //var lat = -50;
    //var lon = -34;
    // console.log(lat, lon);

    var weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?appid=18236d9c672ffbd35a21265440e217b5&';
    var latlon = "lat=" + lat + "&lon=" + lon  

    var url = weatherAPI+latlon;
    // console.log(url);

    $.getJSON(url, function(data) {
      console.log(data);
      var kelTemp = data.main.temp;
      farTemp = kelToFar(kelTemp);
      celTemp = kelToCel(kelTemp);


      // console.log(kelTemp, farTemp, celTemp);
      $('#temp').empty();
      $('#temp').append("Temperature: " + Math.round(farTemp) + "F");
      $('#loc').append(data.name);
      console.log(data.weather[0].icon);
      $('#icn').attr('src', 'https://openweathermap.org/img/w/'+data.weather[0].icon + '.png');
      var bg = bgPic(data.weather[0].icon);
      console.log(bg);
      if (bg === "cloudy") {
        $('body').attr('background', cloudyPic);
      }
      else if (bg === 'sun') {
        $('body').attr('background', sunnyPic);
      }
      else if (bg === 'rain') {
        $('body').attr('background', rainyyPic);
      }
      else if (bg === 'snow') {
        $('body').attr('background', snowyPic);
      }
      
    });
  };

});