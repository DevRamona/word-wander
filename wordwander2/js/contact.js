function initMap() {
    const location = { lat: YOUR_LAT, lng: YOUR_LNG };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{"color": "#f8f7fe"}]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#8a2be2"}]
            }
        ]
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: {
            url: 'images/map-marker.svg',
            scaledSize: new google.maps.Size(40, 40)
        }
    });
}

window.addEventListener('load', initMap);