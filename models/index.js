const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define State model
const State = sequelize.define('State', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING }
});

// Define City model
const City = sequelize.define('City', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING },
  state_id: {
    type: DataTypes.INTEGER,
   
    references: { model: State, key: 'id' }
  }
});

// Define Property model (NEW)
const Property = sequelize.define('Property', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  address: { type: DataTypes.STRING },
  price: { type: DataTypes.DOUBLE },
  comment: { type: DataTypes.TEXT },
  payout: { type: DataTypes.DOUBLE },
  gross: { type: DataTypes.DOUBLE },
  net: { type: DataTypes.DOUBLE },
  cost: { type: DataTypes.DOUBLE },
  num_rooms: { type: DataTypes.INTEGER },
  num_floors: { type: DataTypes.INTEGER },
  floor_space: { type: DataTypes.DOUBLE },
  ground_space: { type: DataTypes.DOUBLE },
  basement_space: { type: DataTypes.DOUBLE },
  year_of_construction: { type: DataTypes.INTEGER },
  year_rebuilt: { type: DataTypes.INTEGER },
  description: { type: DataTypes.TEXT },
  floorplan: { type: DataTypes.STRING },
  num_clicks: { type: DataTypes.INTEGER },
  city_id: {
    type: DataTypes.INTEGER,
    
    references: { model: City, key: 'id' }
  }
});

// Relationships
State.hasMany(City, { foreignKey: 'state_id', onDelete: 'CASCADE' });
City.belongsTo(State, { foreignKey: 'state_id' });

City.hasMany(Property, { foreignKey: 'city_id', onDelete: 'CASCADE' });
Property.belongsTo(City, { foreignKey: 'city_id' });

module.exports = { sequelize, State, City, Property };
