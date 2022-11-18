
alert("Bienvenido");

var map = L.map('map').setView([19.42847, -99.12766], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('select-location').addEventListener('change',function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,15);
});


L.marker([19.35529, -99.06224]).addTo(map)
    .bindPopup('Iztapalapa.')
    .openPopup();

var circle = L.circle([19.44361, -99.10499], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)
    .bindPopup('Venustiano Carranza')
    .openPopup();
