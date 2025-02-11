const { DataTypes } = require('sequelize');
const sequelize = require('../server');

const States = sequelize.define("States", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  address: {
    type: DataTypes.VARCHAR,
    
  },
  price: {
    type: DataTypes.DOUBLE,
    
  },
  comment: {
    type: DataTypes.TEXT,
   
  },
  payout: {
    type: DataTypes.DOUBLE,
    
  },
  gross: {
    type: DataTypes.DOUBLE,
    
  },
  net: {
    type: DataTypes.DOUBLE,
    
  },
  cost: {
    type: DataTypes.DOUBLE,
   
  },
  num_rooms: {
    type: DataTypes.INTEGER,
    
  },
  num_floors: {
    type: DataTypes.INTEGER,
   
  },
  floor_space: {
    type: DataTypes.INTEGER,
    
  },
  ground_space: {
    type: DataTypes.INTEGER,
   
  },
  basement_space: {
    type: DataTypes.INTEGER,
   
  },
  year_of_construction: {
    type: DataTypes.INTEGER,
   
  },
  year_rebuilt: {
    type: DataTypes.INTEGER,
    
  },
  description: {
    type: DataTypes.TEXT,
    
  },
  floorplan: {
    type: DataTypes.VARCHAR,
    
  },
  num_clicks: {
    type: DataTypes.INTEGER,
   
  },
  city_id: {
    type: DataTypes.BIGINT,
    
  },
  type_id: {
    type: DataTypes.BIGINT,
   
  },
  energy_label_id: {
    type: DataTypes.BIGINT,

  },
});

module.exports = States;
