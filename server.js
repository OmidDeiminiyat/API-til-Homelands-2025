require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const cors = require('cors');
const authController = require('./controllers/authController');  // Adjust path if necessary
const dbController = require('./controllers/dbController'); // Import dbController


const app = express();
app.use(bodyParser.json());
app.use(cors());

// Routes
const stateRoutes = require('./routes/state');
const cityRoutes = require('./routes/city');
const propertyRoutes = require('./routes/property');
const userRoute = require('./routes/User');
const energyToute = require('./routes/energyLable');

app.use('/api/seed', dbController);  
app.use('/api/auth', authController);

app.get('/', (req, res) => {
  res.send('Welcome to the Homeland API');
});


app.use('/api/states', stateRoutes);
app.use('/api/cities', cityRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/users', userRoute); 
app.use('/api/energyLabel', energyToute);


// Sync Database
sequelize.sync({ alter: true }) // Avoids dropping tables
  .then(() => console.log('✅ Database Synced'))
  .catch(err => console.error('❌ Database Sync Error:', err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
