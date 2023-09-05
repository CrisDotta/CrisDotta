
const latitudeDiv = document.getElementById("latitude-td")
const longitudeDiv =document.getElementById("longitude-td")
const velocityDiv = document.getElementById("velocity-td")

const issIcon = L.icon({
    iconUrl: "satellite.png",
    iconSize: [50,50],
    iconAnchor: [25,16]
})
let map = L.map("map").setView([0, 0], 2);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);
let marker = L.marker([0, 0],{icon: issIcon}).addTo(map);

let getISS = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    let { latitude, longitude, velocity} = data;
    marker.setLatLng([latitude,longitude])
    map.setView([latitude,longitude])

    latitudeDiv.textContent = latitude + " °"
    longitudeDiv.textContent = longitude + " °"
    velocityDiv.textContent = velocity.toFixed(2) + " km/h";
};

getISS("https://api.wheretheiss.at/v1/satellites/25544");
setInterval(() => {
    getISS("https://api.wheretheiss.at/v1/satellites/25544");
}, 1000);

