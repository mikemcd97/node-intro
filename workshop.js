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

}

function getCurrentTemperature(address) {

}

function getDistanceFromIss(address) {

}