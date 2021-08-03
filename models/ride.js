const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class ride extends Model {}

ride.init(
  {
    // define columns
    ride_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    destination_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'location',
            key: 'destination_id',
        }
    },
    pickup_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'pickup',
            key: 'pickup_id',
        }
    },
    driver_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'driver',
            key: 'driver_id',
        }
    },
    rider_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'rider',
            key: 'rider_id',
        }
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

module.exports = ride;