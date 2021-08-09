const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class pickup extends Model { }

pickup.init(
  {
    pickup_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Latitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Longitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "pickup",
  }
);

module.exports = pickup;
