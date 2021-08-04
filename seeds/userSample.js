const { User } = require('../models');

const userdata = [
    {
        username: 'erinlim2001',
        email: 'erinlim@utexas.edu',
        password: 'Password1234',
    },
    {
        username: 'john101',
        email: 'john01@utexas.edu',
        password: 'Passpass123!!',
    },
    {
        username: 'sam1234',
        email: 'sam1234@utexas.edu',
        password: 'QWERTY12345',
    },
    {
        username: 'sara1234',
        email: 'sara@utexas.edu',
        password: 'SaraPass123',
    },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;