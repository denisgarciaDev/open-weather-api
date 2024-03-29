const express = require('express');
const cors = require('cors');

const geocodingServices = require('./src/services/geocoding-services');
const weatherServices = require('./src/services/open-weather-services');
const response = require('./src/utils/response');
const config = require('./src/utils/config.json');

const PORT = 3388;
const app = express();

process.env.MAPS_KEY = config.maps_key;
process.env.WEATHER_KEY = config.weather_key;

app.use(cors());
app.use(express.json({limit: '15mb', extended: true}));
app.use(express.urlencoded( { extended: true } ));

app.post('/lat-long-from-city',
    geocodingServices.getGeocode,
    geocodingServices.getLatLongFromCityName,
    response.lat_lng
);

app.post('/weather-from-city',
    geocodingServices.getGeocode,
    geocodingServices.getLatLongFromCityName,
    weatherServices.getWeatherData,
    response.weather
);

app.listen(PORT);