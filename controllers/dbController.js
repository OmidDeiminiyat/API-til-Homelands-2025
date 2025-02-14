const express = require('express');
const seedFromCsv = require('./../utils/seedUtils'); // Use require

const dbController = express.Router();

dbController.get('/seedfromcsv', async (req, res) => {
    try {
      // Indsæt data fra CSV filer til de respektive modeller
      await seedFromCsv('city.csv', City);
      await seedFromCsv('energy-label.csv', EnergyLabel);
      await seedFromCsv('estate-image-rel.csv', EstateImageREL);
  
      // Send succes respons
      res.send({ message: 'Seeding completed' });
    } catch (err) {
      // Fejlhåndtering med respons
      res.status(500).json({ error: err.message });
    }
});

module.exports = dbController;
