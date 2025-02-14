const sequelize = require("../config/database");
const { Sequelize, DataTypes } = require('sequelize');

const EnergyLabel = require("./energy_labels"); 
const EstateTypes = require("./estate_types");
const City = require("./cities");

const States = sequelize.define("States", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  address: {
    type: DataTypes.STRING, // Fixed: Use STRING instead of VARCHAR
    allowNull: false, // Enforce required field
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  payout: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  gross: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  net: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  cost: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  num_rooms: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  num_floors: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  floor_space: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ground_space: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  basement_space: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  year_of_construction: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  year_rebuilt: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  floorplan: {
    type: DataTypes.STRING, // Fixed: Use STRING instead of VARCHAR
    allowNull: true,
  },
  num_clicks: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  city_id: {
    type: DataTypes.BIGINT,
    allowNull: true,
    references: {
      model: City, // Ensure correct table name
      key: 'id',
    },
  },
  type_id: {
    type: DataTypes.BIGINT,
    allowNull: true,
    references: {
      model: EstateTypes, 
      key: 'id',
    },
  },
  energy_label_id: {
    type: DataTypes.BIGINT,
    allowNull: true,
    references: {
      model: EnergyLabel, 
      key: "id",
    },
  },
});

States.hasMany(City, { foreignKey: 'state_id', onDelete: 'CASCADE' });
City.belongsTo(States, { foreignKey: 'state_id' });

module.exports = States;
