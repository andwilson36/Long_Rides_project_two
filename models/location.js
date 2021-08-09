const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class location extends Model { }

location.init(
  {
    // define columns
    destination_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,

    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'location',
  }
);

module.exports = location;