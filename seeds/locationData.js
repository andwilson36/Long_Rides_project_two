const { Location } = require('../models');

const locationdata = [
    {
        street: '6104 Diamondleaf Bnd',
        city: 'Austin',
        state: 'TX',
        zipcode: '78724',
    },
    {
        street: '900 Durness Dr',
        city: 'Austin',
        state: 'TX',
        zipcode: '78660',
    },
    {
        street: '1966 Broken Oak St',
        city: 'San Antonio',
        state: 'TX',
        zipcode: '78232',
    },
    {
        street: '517 W Metcalfe St',
        city: 'Hutto',
        state: 'TX',
        zipcode: '78634',
    },
];

const seedLocation = () => User.bulkCreate(locationdata);

module.exports = seedLocation;