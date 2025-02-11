const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Favorite = sequelize.define("favorite", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  estate_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
});

module.exports = Favorite;
