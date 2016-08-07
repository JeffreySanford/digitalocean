(function(){
    L.mapbox.accessToken = 'pk.eyJ1IjoiamVmZnJleXNhbmZvcmQiLCJhIjoiY2lya3FyN2E1MDAzNGZnbTh4cWZrYjQzNSJ9.YGbWQc4BIuvtnfs_0xbJPQ';

    var map = L.mapbox.map('map');
    L.mapbox.tileLayer('mapbox.outdoors').addTo(map);

    var overlay = L.mapbox.tileLayer('mapbox.comic').addTo(map);
    var range = document.getElementById('range');

    function clip() {
        var nw = map.containerPointToLayerPoint([0, 0]),
            se = map.containerPointToLayerPoint(map.getSize()),
            clipX = nw.x + (se.x - nw.x) * range.value;

        overlay.getContainer().style.clip = 'rect(' + [nw.y, clipX, se.y, nw.x].join('px,') + 'px)';
    }

    L.geoJson({
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        properties: {},
        geometry: {
            type: 'LineString',
            coordinates: [[0, 0], [10, 20]]
        }
    }, {
        type: 'Feature',
        properties: {},
        geometry: {
            type: 'Point',
            coordinates: [0, 0]
        }
    }]
    }).addTo(map);
    range['oninput' in range ? 'oninput' : 'onchange'] = clip;
    map.on('move', clip);
    map.on('mousemove', function (e) {
        document.getElementById('info').innerHTML =
        // e.point is the x, y coordinates of the mousemove event relative
        // to the top-left corner of the map
        JSON.stringify(e.layerPoint.x) + '(x)'+ JSON.stringify(e.layerPoint.y) + '(y)';
            // e.lngLat is the longitude, latitude geographical position of the event
	document.getElementById('latitude').innerHTML = JSON.stringify(e.latlng.lat.toFixed(2));
	document.getElementById('longitude').innerHTML = JSON.stringify(e.latlng.lng.toFixed(2));

});
    map.setView([40.3428, -105.6836], 12);
    clip();
}());
