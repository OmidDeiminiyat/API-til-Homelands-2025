const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');
const sequelize = require('../config/database');

/**
* Læser data fra en CSV-fil og returnerer det som en array af objekter.
* @param {string} fileName - Navnet på CSV-filen.
* @returns {Promise} - En promise, der returnerer den parsede CSV-data.
*/
async function getCsvData(fileName) {
  const csvPath = path.resolve(`./../data/${fileName}`);
  const data = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(csvPath)
      .pipe(csv())
      .on('data', (row) => data.push(row))
      .on('end', () => resolve(data))
      .on('error', (error) => reject(error));
  });
}

/**
* Indsætter data fra en CSV-fil i databasen.
* @param {string} fileName - Navnet på CSV-filen, der skal importeres.
* @param {Object} model - Sequelize-modellen, der skal indsættes i.
*/
async function seedFromCsv(fileName, model) {
    const transaction = await sequelize.transaction();

    try {
      const data = await getCsvData(fileName);
      await model.bulkCreate(data, { transaction });

      await transaction.commit();
      console.log(`Seeding completed for ${fileName}`);
    } catch (error) {
      await transaction.rollback();
      console.error('Seeding error:', error);
    }
};

module.exports = seedFromCsv;  // Export the function
