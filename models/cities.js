const sequelize = require("../config/database");
const { Sequelize, DataTypes } = require('sequelize');

const EnergyLabel = require("./energy_labels"); 
const EstateTypes = require("./estate_types");
const States = require("./states");  

const City = sequelize.define("City", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  zipcode: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  state_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: States, 
      key: 'id',
    },
  }
});

// Define associations here, if needed
City.belongsTo(States, { foreignKey: 'state_id', as: 'state' });
States.hasMany(City, { foreignKey: 'state_id', as: 'cities' });

module.exports = City;
