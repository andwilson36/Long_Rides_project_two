const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Ride extends Model { }

Ride.init(
  {
    // define columns
    ride_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pickup: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    driver_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    num_seats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ride',
  }
);

module.exports = Ride;