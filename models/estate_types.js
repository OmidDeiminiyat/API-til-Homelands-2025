const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");



const EstateTypes = sequelize.define("EstateTypes", {
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

module.exports = EstateTypes;
