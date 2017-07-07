var request = require('request-promise');

// Euclidian distance between two points
function getDistance(pos1, pos2) {
  return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}

function getIssPosition() {
  return request('http://api.open-notify.org/iss-now.json')
  .then(
    function(response) {
      var r = JSON.parse(response)
      var lat = r.iss_position.latitude;
      var lng= r.iss_position.longitude;
      return r;
    }
  )
}

function getAddressPosition(address) {
  var apiLink = ("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyBrv6tJL-1KoDPGOEQ7r0LMWVa2UOOzfKg")
  return request(apiLink)
  .then(
    function(response){
      var r = JSON.parse(response);
      var coordinates = r.results[0].geometry.location;
      return coordinates;
    }
    )
}

function getCurrentTemperatureAtPosition(position) {
  var latitude = position.lat;
  var longitude = position.lng;
  var darkSky = ('https://api.darksky.net/forecast/68ae7d38fb51db27bc7d79139fe20b2a/' + latitude + "," + longitude);
  return request(darkSky)
    
    .then(
        function(response){
        var r = JSON.parse(response);
        var currentTemp = r.currently.temperature;
        return currentTemp;
      }  
    )
  
}

function getCurrentTemperature(address) {
  getAddressPosition(address)
    .then(
      function(response){
        getCurrentTemperatureAtPosition(response);
      }
      );
      
}

function getDistanceFromIss(address) {

}