const { Driver } = require('../models');

const driverdata = [
    {
        driver_id: '1',
        car: 'Gray Honda Civic',
        numberRiders: '4',
    },
    {
        driver_id: '2',
        car: 'Black Toyota Camry',
        numberRiders: '3',
    },
    {
        driver_id: '3',
        car: 'White BMW',
        numberRiders: '4',
    },
    {
        driver_id: '4',
        car: 'Blue Tesla Model S',
        numberRiders: '2',
    },
];

const seedDriver = () => User.bulkCreate(driverdata);

module.exports = seedDriver;