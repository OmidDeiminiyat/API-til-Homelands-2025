const { DataTypes } = require('sequelize');
const sequelize = require('../server');  // Sequelize instance from server.js
const States = require('./states');


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
    type: DataTypes.Varchar,
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

City.belongsTo(States, { foreignKey: 'state_id' });
States.hasMany(City, { foreignKey: 'state_id' });

module.exports = City;
