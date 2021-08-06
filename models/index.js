const User = require("./User");
const Driver = require("./driver");
const Location = require("./location");
const Pickup = require("./pickup");
const Rider = require("./rider");
const Ride = require("./ride")

Rider.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Driver.belongsTo(User, {
  foreignKey: 'driver_id',
  onDelete: 'CASCADE'
});

Rider.hasOne(Pickup, {
  foreignKey: "pickup_id",
});

Pickup.hasOne(Rider, {
  foreignKey: "rider_id",
});

module.exports = {
  User,
  Driver,
  Location,
  Pickup,
  Rider,
  Ride,
};
