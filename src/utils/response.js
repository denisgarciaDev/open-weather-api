class Response {

    lat_lng(req, res) {
        const error = req.error;
        const lat_lng = req.lat_lng;

        if (error) {
            return res.status(500).json(error);
        } else if (lat_lng) {
            return res.status(200).json(lat_lng);
        } else {
            return res.status(500).json('Server Error!');
        }
    }

    weather(req, res) {
        const error = req.error;
        const weather = req.weather;

        if (error) {
            return res.status(500).json(error);
        } else if (weather) {
            return res.status(200).json(weather);
        } else {
            return res.status(500).json('Server Error!');
        }
    }

}

module.exports = new Response();