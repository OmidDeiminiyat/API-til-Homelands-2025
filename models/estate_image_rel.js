const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const EstateImageREL = sequelize.define("estateImageRel", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  estate_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  image_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  is_main: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = EstateImageREL;
