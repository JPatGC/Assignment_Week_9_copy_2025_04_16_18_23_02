/* map.js – Manhattan Pocket Parks (Leaflet) */
const parks = [
  { name: "Paley Park",               lat: 40.7603, lng: -73.9751,  file: "Paley Park.html" },
  { name: "Greenacre Park",           lat: 40.75643, lng: -73.96926, file: "Greenacre Park.html" },
  { name: "McGraw-Hill Pocket Park",  lat: 40.75903, lng: -73.98447, file: "McGraw-Hill Pocket Park.html" },
  { name: "Tudor City Greens",        lat: 40.74962, lng: -73.97052, file: "Tudor City Greens.html" },
  { name: "50th Street Commons",      lat: 40.75734, lng: -73.97477, file: "50th Street Commons.html" },
  { name: "550 Madison Park",         lat: 40.76131, lng: -73.97344, file: "550 Madison Park.html" },
  { name: "Septuagesimo Uno",         lat: 40.77883, lng: -73.98436, file: "Septuagesimo Uno.html" },
  { name: "Amster Yard",              lat: 40.75499, lng: -73.97043, file: "Amster Yard.html" },
  { name: "Berlin Wall Remnant Park", lat: 40.76026, lng: -73.97463, file: "Berlin Wall Remnant Park.html" },
  { name: "Labyrinth of Contemplation", lat: 40.70406, lng: -74.01658, file: "Labyrinth of Contemplation.html" }
];

function initLeaflet() {
  const map = L.map("park-map").setView([40.7605, -73.9770], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors'
  }).addTo(map);

  parks.forEach(p => {
    const m = L.marker([p.lat, p.lng]).addTo(map)
             .bindPopup(`<strong>${p.name}</strong><br>
                         <a href="${p.file}">open park page →</a>`);

    const li = document.querySelector(`.list-item[data-park="${p.name}"]`);
    if (li) {
      li.style.cursor = "pointer";
      li.onclick = () => { map.setView([p.lat, p.lng], 17); m.openPopup(); };
    }
  });
}

document.addEventListener("DOMContentLoaded", initLeaflet);
