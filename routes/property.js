const express = require('express');
const router = express.Router();
const { Property } = require('../models');

// Create a new property
router.post('/', async (req, res) => {
  try {
    const newProperty = await Property.create(req.body);
    res.status(201).json(newProperty);
  } catch (err) {
    console.error('Error adding property:', err);
    res.status(500).json({ message: 'Error adding property', error: err.message });
  }
});

module.exports = router;
