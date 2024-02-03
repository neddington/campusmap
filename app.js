mapboxgl.accessToken = 'pk.eyJ1IjoibWF4bWFsa2luIiwiYSI6ImNsczVpamxlODFoaG0ycnBhdzd1bTY4amMifQ.Rbe4ueQeIAE6AzCCbtIpqQ';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-122.197772, 47.758864], // UW Bothell campus coordinates
    zoom: 15,
    maxBounds: [
        [-122.209049, 47.752314], // Southwest bound
        [-122.186492, 47.765457]  // Northeast bound
    ],
});

map.on('load', () => {
    // Add Mapbox GL navigation control
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add a marker for UW Bothell campus
    new mapboxgl.Marker()
        .setLngLat([-122.1911463, 47.758586])
        .addTo(map);

    // Add styled labels for building names
    map.addLayer({
        id: 'building-labels',
        type: 'symbol',
        source: {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        properties: {
                            name: 'Building 1',
                        },
                        geometry: {
                            type: 'Point',
                            coordinates: [-122.196848, 47.759285], // Example coordinates for Building 1
                        },
                    },
                    // Add more buildings as needed
                ],
            },
        },
        layout: {
            'text-field': ['get', 'name'],
            'text-size': 12,
            'text-anchor': 'top',
        },
        paint: {
            'text-color': '#FFD700', // Gold text color
        },
    });
});