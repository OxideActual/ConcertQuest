var API_KEY = "MzE3MDcwNTl8MTY3NTEzNjc4NC44MjY0NTYz";
var API_SECRET = "bc1bbc1b67eff86a27904a956c21eab5607128cd3dff8a37fdf2a17f891fc34c063e";
var API_URL = "https://api.seatgeek.com/2/events?client_id=" + API_KEY;

var Artist_endpoint = "https://api.seatgeek.com/2/performers?slug="

function getEvents() {
    console.log("fetching" + API_URL)
    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
    var events = data.events;
    console.dir(events, { depth: null });
    var eventsList = document.getElementById("events");

    for (var i = 0; i < events.length; i++) {
        var event = events[i];
        var eventName = event.short_title;
        var eventDate = event.datetime_local;

        var eventItem = document.createElement("li");
        eventItem.innerHTML = eventName + " - " + eventDate;
        eventsList.appendChild(eventItem);
    }
    })
    .catch(error => {
    console.error(error);
    });
}

var form = document.getElementById("ArtistForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  var name = form.elements.artistSearch.value;
  console.dir("Fetching artist with name:",name, { depth: null });
  getArtists(name);
});

function addHyphen(str) {
  if (str.includes(" ")) {
    return str.replace(" ", "-");
  } else {
    return str;
  }
}

function getArtists(name) {
  let formattedName = addHyphen(name)
  console.log("fetching" + Artist_endpoint + formattedName + "&client_id=" + API_KEY)
  fetch(Artist_endpoint + name + "&client_id=" + API_KEY)
  .then(response => response.json())
  .then(data => {
  console.dir(data, { depth: null });
  var artists = data.performers;
  console.dir(artists, { depth: null });
  var artistsList = document.getElementById("artistsList");

  for (var i = 0; i < artistsList.length; i++) {
      var artist = artists[i];
      var artistName = artist.name;
      console.dir(artistName, { depth: null });
      var artistItem = document.createElement("li");
      artistItem.textContent = artistName;
      artistsList.appendChild(artistItem);
  }
  })
  .catch(error => {
  console.error(error);
  });
}


//GoogleMaps API
//map = new google.maps.Map(document.getElementById('map'), {
//center: {lat: -34.397, lng: 150.644},
//zoom: 8 });

//var API_KEY="AIzaSyCMDalESnrsDy9wdfvtFHL_7_7wj8Ii0yc";
//var API_URL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCMDalESnrsDy9wdfvtFHL_7_7wj8Ii0yc&callback=initMap" + API_KEY;

//function GetLocation () {
//console.log("fetching" + API_URL)
//fetch(API_URL)
//.then
//}