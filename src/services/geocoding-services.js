const rp = require('request-promise');

class GeocodingServices {


    getGeocode(req, res, next) {

        const options = {
            uri: 'https://maps.googleapis.com/maps/api/geocode/json',
            qs: {
                address: req.body.city,
                key: 'AIzaSyDt7XZWQWrYjmmzjYnx6eem1p3fkJT5KQM' // -> uri + '?access_token=xxxxx%20xxxxx'
            },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true // Automatically parses the JSON string in the response
        };

        rp(options)
        .then(function (response) {
            req.geocode = response;
            return next();
        })
        .catch(function (error) {
            req.error = error;
            return next();
        });

    }

    getLatLongFromCityName(req, res, next) {
        const error = req.error;
        const geocode = req.geocode;

        if (error) {
            return res.status(500).json(error);
        } else {
            req.lat_lng = {
                address: geocode.results[0].formatted_address,
                lat: geocode.results[0].geometry.location.lat,
                lng: geocode.results[0].geometry.location.lng,
            };
            return next();
        }

    }

}

module.exports = new GeocodingServices();