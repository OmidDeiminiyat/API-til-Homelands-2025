const { Sequelize } = require('sequelize');
const City = require('./../models/cities');   
const States = require('./../models/states');    


States.hasMany(City, {
  foreignKey: 'state_id',  
  as: 'cities'            
});

City.belongsTo(States, {
  foreignKey: 'state_id',  
  as: 'state'             
});

module.exports = { States, City };
