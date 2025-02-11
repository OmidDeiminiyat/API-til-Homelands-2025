const express = require('express');
const router = express.Router();
const { City, State } = require('../models');

router.post('/', async (req, res) => {
  try {
    const { name, zipcode, state_id } = req.body; // ✅ Ensure state_id is included

    // Ensure all fields are provided
    if (!name || !zipcode || !state_id) {
      return res.status(400).json({ message: "Missing required fields: name, zipcode, state_id" });
    }

    // Check if state exists
    const state = await State.findByPk(state_id);
    if (!state) {
      return res.status(400).json({ message: `State with id ${state_id} does not exist` });
    }

    // Create the city
    const newCity = await City.create({ name, zipcode, state_id });
    res.status(201).json(newCity);
  } catch (error) {
    console.error("❌ Error adding city:", error);
    res.status(500).json({ message: "Error adding city", error: error.message });
  }
});

module.exports = router;
