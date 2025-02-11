const express = require('express');
const bcrypt = require('bcryptjs');  // Add bcryptjs for password hashing
const router = express.Router();
const Users = require('../models/users');

router.get('/', async (req, res) => {
  try {
    const users = await Users.findAll();
    res.status(200).json(users);
  } catch (err) {
    console.error('❌ Error fetching users:', err.message);
    res.status(500).json({ message: 'Error fetching users', error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { firstname, lastname, email, password, refresh_token, is_active } = req.body;

    // Ensure all required fields are provided
    if (!firstname || !lastname || !email || !password || !refresh_token || !is_active) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);  // Use bcrypt to hash the password

    // Create the user with the hashed password
    const newUser = await Users.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,  // Store the hashed password
      refresh_token,
      is_active
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error("❌ Error adding user:", error);
    res.status(500).json({ message: "Error adding user", error: error.message });
  }
});

module.exports = router;
