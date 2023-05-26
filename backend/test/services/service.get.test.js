const { expect } = require('chai');
const { get, fetchAndSave } = require('../../src/services/weather.service.js');
const sinon = require('sinon');

describe('get', () => {
    it('it should to throw an error if does not recive lat or lon', async () => {
        const props = {};
        try {
            await get(props);

            expect.fail('It was expected to recive an error');
        } catch (error) {
            expect(error.message).to.equal(
                'latitude and longitude are necessaries'
            );
        }
    });

    it('debe devolver un objeto con propiedades específicas', async () => {
        const result = await get({ lat: 11, lon: 12 });
        expect(result).to.be.an('object');
        expect(result).to.have.property('id');
        expect(result).to.have.property('condition');
        expect(result).to.have.property('temperature');
        expect(result).to.have.property('hourOfLecture');
        expect(result).to.have.property('cityName');
        expect(result).to.have.property('lat');
        expect(result).to.have.property('lon');
        expect(result).to.have.property('windMph');
        expect(result).to.have.property('windDegree');
        expect(result).to.have.property('pressure');
        expect(result).to.have.property('humidity');
        expect(result).to.have.property('feelsLike');
        expect(result).to.have.property('createdAt');
        expect(result).to.have.property('updatedAt');
    });
});
