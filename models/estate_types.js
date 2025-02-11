const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const EstateTypes = sequelize.define("estateTypes", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  },
});

module.exports = EstateTypes;
