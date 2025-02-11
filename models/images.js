const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Images = sequelize.define("images", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  filename: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  },
  author: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  },
  description: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  },
});

module.exports = Images;
