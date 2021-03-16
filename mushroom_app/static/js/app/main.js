var currentMarkers = [];
var position;
mapboxgl.accessToken = 'pk.eyJ1IjoieW91c3NlZjAwIiwiYSI6ImNrbTlnOGZybTFodTIyeW80cDdldGMyMDQifQ.U8EnK4EdAcoMnXuJNWS3kQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-77.03, 38.91],
    zoom: 9
});


var marker = new mapboxgl.Marker()
    .setLngLat([-77.03, 38.91])
    .addTo(map);

map.on('click', function (e) {
    var i;
    position = e.lngLat.wrap();
    var marker = new mapboxgl.Marker({ color: "purple", draggable: true })
        .setLngLat([position.lng, position.lat])
        .addTo(map);
    document.getElementById("lat").setAttribute('value', position.lat);
    document.getElementById("lon").setAttribute('value', position.lng);
    currentMarkers.push(marker);
    if (currentMarkers !== null) {
        for (i = currentMarkers.length - 1; i >= 0; i--) {
            currentMarkers[i-1].remove();
        }
    }

});



//Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// Set options
// var marker = new mapboxgl.Marker({
// color: "#FFFFFF",
// draggable: true
// }).setLngLat([-77.09, 38.94])
// .addTo(map);


// map.on('click', function(ev) {
//     new mapboxgl.Marker()
//  setMarkerPosition(ev.latLng.lat(), ev.latLng.lng());
// });