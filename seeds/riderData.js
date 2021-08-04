const { Rider } = require('../models');

const riderdata = [
    {
        rider_id: '1',
    },
    {
        rider_id: '2',
    },
    {
        rider_id: '3',
    },
    {
        rider_id: '4',
    },
];

const seedRider = () => User.bulkCreate(riderdata);

module.exports = seedRider;