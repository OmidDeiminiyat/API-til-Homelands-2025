const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Staffs = sequelize.define("staffs", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  },
  position: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  },
  image: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  },
});

module.exports = Staffs;
