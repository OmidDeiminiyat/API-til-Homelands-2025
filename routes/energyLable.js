const express = require('express');
const router = express.Router();
const EnergyLabel = require('./../models/energy_labels');
const State = require('./../models');

router.post('/', async (req, res) => {
  try {
    const { name, energy_label_id } = req.body; 

    if (!name || !energy_label_id) {
      return res.status(400).json({ message: "Missing required fields: name, energy_label_id" });
    }

    // Check if EnergyLabel exists
    const energyLabel = await EnergyLabel.findByPk(energy_label_id);
    if (!energyLabel) {
      return res.status(400).json({ message: `EnergyLabel with id ${energy_label_id} does not exist` });
    }

    // Create the new EnergyLabel
    const newEnergy = await EnergyLabel.create({ name });
    res.status(201).json(newEnergy);
  } catch (error) {
    console.error("❌ Error adding energyLabel:", error);
    res.status(500).json({ message: "Error adding energyLabel", error: error.message });
  }
});

module.exports = router;
