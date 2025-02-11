const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false, // Set to true for debugging SQL queries
  }
);

// Test database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected!');
  } catch (error) {
    console.error('❌ Database connection error:', error);
  }
})();

module.exports = sequelize;
