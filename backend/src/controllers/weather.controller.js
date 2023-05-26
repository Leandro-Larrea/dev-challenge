const weatherService = require('../services/weather.service.js');

async function get(req, res, next) {
    try {
        let answer = await weatherService.get(req.query);
        return res.status(200).json({
            succes: true,
            message: 'getting new reading',
            data: answer,
        });
    } catch (err) {
        console.error(`Error in GET /: ${err.message}`);
        return res.status(401).json({ succes: false, message: err.message });
    }
}

async function getWeatherHistory(req, res, next) {
    try {
        let answer = await weatherService.getWeatherHistory();
        return res
            .status(200)
            .json({ succes: true, message: 'history found', data: answer });
    } catch (err) {
        console.error(`Error in GET /: ${err.message}`);
        return res.status(401).json({ succes: false, message: err.message });
    }
}
async function getWeatherReading(req, res, next) {
    try {
        const { id } = req.query;
        let answer = await weatherService.getWeatherReading(id);
        return res
            .status(200)
            .json({ succes: true, message: 'readings found', data: answer });
    } catch (err) {
        console.error(`Error in GET /: ${err.message}`);
        return res.status(401).json({ succes: false, message: err.message });
    }
}

module.exports = {
    get,
    getWeatherHistory,
    getWeatherReading,
};
