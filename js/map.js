var lat, lon;

var map, markerLocation;

$(function () {
    map = L.map('map').setView([38.0302, 23.3370], 7);

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxZoom: 18
    }).addTo(map);

    var theMarker = {};

    map.on('click', function (e) {
        lat = e.latlng.lat;
        lon = e.latlng.lng;

        console.log("You clicked the map at LAT: " + lat + " and LONG: " + lon);

        if (theMarker != undefined) {
            map.removeLayer(theMarker);
        };

        theMarker = L.marker([lat, lon]).addTo(map);
    });
});