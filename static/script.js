// Initialize the map
const map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add the wind layer to the map
const windLayer = L.velocityLayer({
    displayValues: true,
    displayOptions: {
        velocityType: 'Global Wind',
        displayPosition: 'bottomleft',
        displayEmptyString: 'No wind data',
        speedUnit: 'm/s',
        position: 'bottomleft',
        emptyString: 'No data',
        angleConvention: 'bearingCW',
        windOptions: {
            maxVelocity: 15
        },
        colorScale: ['#FFFFFF', '#FFFF00', '#FFD700', '#FFA500', '#FF4500', '#FF0000']
    },
    data: 'http://maps.openweathermap.org/maps/2.0/weather/WND/{z}/{x}/{y}?date=1552861800&appid={b83b257095ff375fd543f085796ac77f}'
}).addTo(map);
