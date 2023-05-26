const { newPrisma } = require('../utils/prisma.server');
const axios = require('axios');
const prisma = newPrisma();

require('dotenv').config();

/*it looks for a reacord in the db with lat and lon, if either the reading doesn't exist or it was recorded
more than 10 minutes ago the function is gonna fetch and store new data*/
async function get(props) {
    try {
        const { lat, lon } = props;
        if (!lat || !lon)
            throw new Error('latitude and longitude are necessaries');
        let [weatherDb] = await prisma.Weather.findMany({
            where: {
                lat: Number(lat).toFixed(2),
                lon: Number(lon).toFixed(2),
            },
            orderBy: {
                createdAt: 'desc',
            },
            take: 1,
        });

        const recentUpdated =
            weatherDb &&
            new Date(weatherDb.updatedAt) > new Date() - 10 * 60 * 1000;

        if (!recentUpdated) {
            weatherDb = await fetchAndSave(lat, lon);
        }
        console.log(weatherDb);
        return weatherDb;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getWeatherHistory() {
    const readings = await prisma.Weather.findMany({
        orderBy: {
            createdAt: 'asc',
        },
        select: {
            id: true,
            cityName: true,
            hourOfLecture: true,
        },
    });
    if (!readings) throw new Error("There aren't readings");
    return readings;
}

async function getWeatherReading(id) {
    const readings = await prisma.Weather.findUnique({
        where: { id: id },
    });
    return readings;
}

async function fetchAndSave(lat, lon) {
    console.log('se llamo no joda');
    try {
        const { data } = await axios(
            `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${lat},${lon}`
        );
        if (!data) throw new Error('Location not found');

        const fetchLat = data.location.lat.toFixed(2);
        const fetchLon = data.location.lon.toFixed(2);

        /*the api brings data with different lat and lon when does't find a result, this conditional
            it's for beeing sure of showing locations that match with the user request*/

        if (
            Number(lat).toFixed(2) === fetchLat &&
            Number(lon).toFixed(2) === fetchLon
        ) {
            const newData = await prisma.Weather.create({
                data: {
                    condition: data.current.condition,
                    temperature: data.current.temp_c,
                    hourOfLecture: data.current.last_updated,
                    cityName: data.location.name,
                    lat: `${data.location.lat.toFixed(2)}`,
                    lon: `${data.location.lon.toFixed(2)}`,
                    windMph: data.current.wind_mph,
                    windDegree: data.current.wind_degree,
                    pressure: data.current.pressure_mb,
                    humidity: data.current.humidity,
                    feelsLike: data.current.feelslike_c,
                },
            });
            return newData;
        }
        throw new Error('Location not found');
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    get,
    getWeatherHistory,
    getWeatherReading,
    fetchAndSave,
};
