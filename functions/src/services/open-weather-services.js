const rp = require('request-promise');

class OpenWeatherServices {

    getWeatherData(req, res, next) {
        const lat_lng = req.lat_lng;
        const language = (req.body.language) ? req.body.language : 'en';
        const units = (req.body.units) ? req.body.units : 'standard';

        const options = {
            uri: 'http://api.openweathermap.org/data/2.5/weather',
            qs: {
                lang: language,
                units: units,
                lat: lat_lng.lat,
                lon: lat_lng.lng,
                appid: process.env.WEATHER_KEY // -> uri + '?access_token=xxxxx%20xxxxx'
            },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true // Automatically parses the JSON string in the response
        };

        rp(options)
        .then(function (response) {
            req.weather = response;
            return next();
        })
        .catch(function (error) {
            req.error = error;
            return next();
        });
    }

}

module.exports = new OpenWeatherServices();