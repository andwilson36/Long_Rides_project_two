const { Location } = require('../models');

const locationdata = [
    {
        name: 'Example place',
        lat: '30.306',
        long: '35.306',
    },
    {
        name: 'Example place 2',
        lat: '37.306',
        long: '35.306',
    },
    {
        name: 'Example place 3 ',
        lat: '31.306',
        long: '35.306',
    },
    {
        name: 'Example place 4',
        lat: '32.306',
        long: '35.306',
    },
];

const seedLocation = () => Location.bulkCreate(locationdata);

module.exports = seedLocation;