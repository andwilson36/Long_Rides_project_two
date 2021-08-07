const { Location } = require('../models');

const locationdata = [
    {
        name: 'UT Campus',
        address: 'University of Texas, Austin, TX',
    },
    {
        name: 'Austin Airport',
        address: '3600 Presidential Blvd, Austin, TX 78719',
    },
    {
        name: 'Rainey Street',
        address: '76 Rainey St, Austin, TX 78701',
    },
    {
        name: 'Zilker Park',
        address: '2207 Lou Neff Rd, Austin, TX 78746',
    },
    {
        name: 'Barton Springs Pool',
        address: 'Barton Springs Rd, Austin, TX 78704',
    },
];

const seedLocation = () => Location.bulkCreate(locationdata);

module.exports = seedLocation;