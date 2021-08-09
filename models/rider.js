const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class rider extends Model { }

rider.init(
  {
    // define columns
    rider_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'rider',
  }
);

module.exports = rider;