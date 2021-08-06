const sequelize = require('../config/connection');
const seedUser = require('./userSample')
const seedRides = require('./rideData');
const seedLocation = require('./locationData')
//const seedPost = require('./postData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedRides();

  await seedLocation();
  //await seedPost();

  process.exit(0);
};

seedAll();