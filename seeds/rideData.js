const { Ride } = require('../models');

const rideData = [
    {
        destination: 'Zilker Park',
        pickup: 'UT Campus',
        driver_name: 'Tony',
        description: 'Making three stops',
        price: 15,
        num_seats: '4'
    },
    {
        destination: 'Austin Airport',
        pickup: 'UT Campus',
        driver_name: 'Erin',
        description: 'Non-smoking',
        price: 20,
        num_seats: '3'
    },
    {
        destination: 'Rainey Street',
        pickup: 'UT Campus',
        driver_name: 'Andrew',
        description: 'Partiers only',
        price: 10,
        num_seats: '2'
    },
    {
        destination: 'Barton Springs Pool',
        pickup: 'UT campus',
        driver_name: 'Rico',
        description: 'Two stops',
        price: 10,
        num_seats: '4'
    },
];

const seedRider = () => Ride.bulkCreate(rideData);

module.exports = seedRider;