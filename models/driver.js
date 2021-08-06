const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class driver extends Model {}

driver.init(
  {
    // define columns
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pickup: {
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
    car: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numberRiders: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'driver',
  }
);

module.exports = driver;