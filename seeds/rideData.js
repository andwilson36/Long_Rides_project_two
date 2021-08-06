const { Ride } = require('../models');

const rideData = [
    {
        destination: 'example dest',
        pickup: 'example pick',
        driver_name: 'example name',
        description: 'three stops',
        price: 15,
        num_seats: '4'
    },
    {
        destination: 'example dest',
        pickup: 'example pick',
        driver_name: 'example name',
        description: 'three stops',
        price: 15,
        num_seats: '4'
    },
    {
        destination: 'example dest',
        pickup: 'example pick',
        driver_name: 'example name',
        description: 'three stops',
        price: 15,
        num_seats: '4'
    },
    {
        destination: 'example dest',
        pickup: 'example pick',
        driver_name: 'example name',
        description: 'three stops',
        price: 15,
        num_seats: '4'
    },
];

const seedRider = () => Ride.bulkCreate(rideData);

module.exports = seedRider;