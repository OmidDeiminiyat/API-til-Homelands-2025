const express = require('express');
const router = express.Router();
const { State } = require('../models');

// Fetch all states
router.get('/', async (req, res) => {
  try {
    const states = await State.findAll();
    res.status(200).json(states);
  } catch (err) {
    console.error('❌ Error fetching states:', err.message);
    res.status(500).json({ message: 'Error fetching states', error: err.message });
  }
});




router.post('/', async (req, res) => {
  try {
    const { address, price, city_id } = req.body; // ✅ Ensure state_id is included

    // Ensure all fields are provided
    if (!address || !price || !city_id) {
      return res.status(400).json({ message: "Missing required fields: name, zipcode, state_id" });
    }


    // Create the city
    const newState = await State.create({ address, price, city_id });
    res.status(201).json(newState);
  } catch (error) {
    console.error("❌ Error adding city:", error);
    res.status(500).json({ message: "Error adding city", error: error.message });
  }
});

module.exports = router;
