const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Energy = sequelize.define("energy", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.varchar,
    allowNull: false,
  },
});

module.exports = Energy;
