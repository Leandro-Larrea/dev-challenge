const express = require('express');
const weatherController = require('../controllers/weather.controller');
const router = express.Router();

router
    .get('/', weatherController.get)
    .get('/history', weatherController.getWeatherHistory)
    .get('/byId', weatherController.getWeatherReading);
module.exports = (app) => {
    app.use('/weather', router); // Path to mount the router
};

/**
 * GET /weather
 * @summary Get a reading based on location
 * @description it looks for a reading using queries {lat, lon}
 * @param {string} lat.query example 22.6
 * @param {string} lon.query example 11
 * @tags [Weather]
 * @return {object} 200 - Returns an object - application/json
 * @example response - 200 - succes response
 * {"succes":true,
 *  "message":"getting new reading",
 *  "data":{
  "id": "cli4p7a7b0000van4x4mi68w6",
  "condition": {
    "code": 1000,
    "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
    "text": "Sunny"
  },
  "temperature": 39.6,
  "hourOfLecture": "2023-05-26 16:00",
  "cityName": "Mora",
  "lat": "11.00",
  "lon": "14.00",
  "windMph": 6,
  "windDegree": 298,
  "pressure": 1004,
  "humidity": 23,
  "feelsLike": 40.4,
  "createdAt": "2023-05-26T15:08:42.984Z",
  "updatedAt": "2023-05-26T15:08:42.984Z"
}
 * }
 * @return {object} 401 - Returns an object - application/json
 * @example response - 401 - error response
 * {"succes":false, "messagge":"specific error"}
 */

/**
 * GET /weather/history
 * @summary Get reading from location
 * @description It get all readings from data base
 * @tags [Weather]
 * @return {object} 200 - Returns an object - application/json
 * @example response - 200 - success response
 * {"succes":true,
 *  "message":"history found",
 *  "data":[
    {
      "dbObject": "..."
    },
    {
      "dbObject": "..."
    },
    {
      "dbObject": "..."
    }
  ]
}
 *
 * @return {object} 401 - Returns an object - application/json
 * @example response - 401 - error response
 * {"succes":false, "messagge":"specific error"}
 */

/**
 * GET /weather/byId
 * @summary Get an specific reading by its id
 * @description it looks for a specific reading using its id
 * @param {string} id.query example /weather?id=cli4p7a7b0000van4x4mi68w6
 * @tags [Weather]
 * @return {object} 200 - Returns an object - application/json
 * @example response - 200 - succes response
 * {"succes":true,
 *  "message":"readings found",
 *  "data":{
  "id": "cli4p7a7b0000van4x4mi68w6",
  "condition": {
    "code": 1000,
    "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
    "text": "Sunny"
  },
  "temperature": 39.6,
  "hourOfLecture": "2023-05-26 16:00",
  "cityName": "Mora",
  "lat": "11.00",
  "lon": "14.00",
  "windMph": 6,
  "windDegree": 298,
  "pressure": 1004,
  "humidity": 23,
  "feelsLike": 40.4,
  "createdAt": "2023-05-26T15:08:42.984Z",
  "updatedAt": "2023-05-26T15:08:42.984Z"
}
 * }
 * @return {object} 401 - Returns an object - application/json
 * @example response - 401 - error response
 * {"succes":false, "messagge":"specific error"}
 */
