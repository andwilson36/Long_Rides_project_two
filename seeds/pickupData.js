const { Pickup } = require('../models');

const pickupdata = [
    {
        street: '2812 Rio Grande St',
        city: 'Austin',
        state: 'TX',
        zipcode: '78705',
    },
    {
        street: '2518 Leon St',
        city: 'Austin',
        state: 'TX',
        zipcode: '78705',
    },
    {
        street: '201 E 21st St',
        city: 'Austin',
        state: 'TX',
        zipcode: '78705',
    },
    {
        street: '1500 San Jacinto Blvd',
        city: 'Austin',
        state: 'TX',
        zipcode: '78701',
    },
];

const seedPickup = () => User.bulkCreate(pickupdata);

module.exports = seedPickup;