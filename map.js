// function initMap() {
//     const myLatlng = { lat: -25.363, lng: 131.044 };
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 4,
//       center: myLatlng,
//     });
//     const marker = new google.maps.Marker({
//       position: myLatlng,
//       map,
//       title: "Click to zoom",
//     });
  
//     map.addListener("center_changed", () => {
//       // 3 seconds after the center of the map has changed, pan back to the
//       // marker.
//       window.setTimeout(() => {
//         map.panTo(marker.getPosition());
//       }, 3000);
//     });
//     marker.addListener("click", () => {
//       map.setZoom(8);
//       map.setCenter(marker.getPosition());
//     });
//   }

let map;
let marcador;
//Geolocalizacion
let verid;
let localizacion;

function initMap(){
    const latitud = { lat: -34.397, lng: 150.644 };
    map = new google.maps.Map(document.getElementById("map"), {
        center: latitud,
        zoom: 4,
      });
      marcador = new google.maps.Marker({
        position: latitud,
        map,
        title: 'Mapa Mundi'

      });
      //obtengo laposicion 
      getPosition();

}

//creamos la funcion
function getPosition(){
    if(navigator.geolocation){
        var update = {timeout:10000};
        localizacion = navigator.geolocation;
        verid = localizacion.watchPosition(showLocationonMap, errorHandler,update);

    }else {
        alert('Tu navegador no soporta esta ubicacion ')
    }

}


function showLocationonMap(position){
var latituds = position.coords.latitude;
var longituds = position.coords.longitude;
console.log('latitud:' + latituds + 'Longitud' + longituds);

const latitud = {lat: latituds, lng: longituds};
marcador.setPosition(latitud);
map.setCenter(latitud);

}

function errorHandler(err){
    if(err.code == 1){
        alert('Acceso Denegado');
    }else if (err.code == 2){
        alert('No existe')
    }

}