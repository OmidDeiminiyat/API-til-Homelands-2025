const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const EnergyLabel = sequelize.define("EnergyLabel", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
});

module.exports = EnergyLabel;
