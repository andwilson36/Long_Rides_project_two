const User = require("./user");
const Location = require("./location");
const Pickup = require("./pickup");
const Rider = require("./rider");
const Ride = require("./ride")

Rider.belongsTo(User, {
  foreignKey: 'user_id',
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
  Location,
  Pickup,
  Rider,
  Ride,
};
