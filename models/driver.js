const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class driver extends Model {}

driver.init(
  {
    // define columns
    driver_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id',
    }
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