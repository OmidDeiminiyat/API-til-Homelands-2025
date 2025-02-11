const express = require('express');
const { authenticate, authorize } = require('../utils/authUtils');  // Adjust path if necessary

const authController = express.Router();

// Route for user login
authController.post('/login', authenticate);

// Route for authorized access (protected route example)
authController.get('/authorize', authorize, (req, res) => {
  res.json({ message: `Welcome, user ${req.user.id}` });
});

module.exports = authController;
