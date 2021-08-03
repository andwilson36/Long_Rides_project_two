const Car = require("./cars");
const Driver = require("./driver");
const Location = require("./location");
const Pickup = require("./pickup");
const Rider = require("./rider");

Driver.hasOne(Location, {
  foreignKey: "destination_id",
  onDelete: "CASCADE",
});

Location.hasOne(Driver, {
  foreignKey: "driver_id",
  onDelete: "CASCADE",
});

Rider.hasOne(Pickup, {
  foreignKey: "pickup_id",
});

Pickup.hasOne(Rider, {
  foreignKey: "rider_id",
});

module.exports = {
  Car,
  Driver,
  Location,
  Pickup,
  Rider,
};
