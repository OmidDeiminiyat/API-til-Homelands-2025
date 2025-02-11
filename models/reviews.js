const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Reviews = sequelize.define("reviews", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  subject: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  },
  comment: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  num_stars: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  estate_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Reviews;
