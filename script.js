var API_KEY = "MzE3OTM3NDJ8MTY3NTcyODg1MC4xMDMyNDIy";
var API_SECRET = "b84eac6954d27e897060ffbc4fdfea046b19363bad3271bb222c0e43d8d8af4d4";
var API_URL = "https://api.seatgeek.com/2/events?aid=123" + API_KEY;



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


const aplication = document.querySelector('.container2')
const url_artist = 'https://jsonplaceholder.typicode.com/users'

function getArtist() {
  fetch(url_artist)
    .then(response => response.json())
    .then(data => {
         data.forEach(usuario => {
           console.log(usuario.name)
           const listItem = document.createElement('li')
           listItem.innerHTML = usuario.name
           aplication.appendChild(listItem)
         });
        
       })
    .catch(error => {
      console.error(error);
    });
}
