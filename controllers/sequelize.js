const City = require('./../models/cities');   
const States = require('./../models/states');    

States.hasMany(City, {
  foreignKey: 'stateId',  
  as: 'cities'            
});

City.belongsTo(States, {
  foreignKey: 'stateId',  
  as: 'state'             
});

module.exports = { States, City };
