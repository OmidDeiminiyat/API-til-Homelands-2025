const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/users');  // Adjust path if necessary

// Function to generate JWT token
const generateToken = (user, type) => {
  const expTime = Math.floor(Date.now() / 1000) + 
    +process.env[`TOKEN_${type.toUpperCase()}_EXPIRATION_SECS`];

  return jwt.sign({
    exp: expTime,
    data: { id: user.id }
  }, process.env[`TOKEN_${type.toUpperCase()}_KEY`]);
};

// Authenticate function (login)
const authenticate = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }
  
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        console.log(`No user found with email: ${email}`);
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      console.log(`Password from request: ${password}`);
      console.log(`Password from DB: ${user.password}`);
  
      // Compare password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log('Password comparison failed');
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      const accessToken = generateToken(user, 'access');
      const refreshToken = generateToken(user, 'refresh');
  
      // Optionally save refresh token in DB for later use
      await User.update({ refresh_token: refreshToken }, { where: { id: user.id } });
  
      return res.json({
        access_token: accessToken,
        refresh_token: refreshToken,
        user: {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname
        }
      });
    } catch (error) {
      console.error("Error in authentication:", error);
      res.status(500).json({ message: "Error logging in", error: error.message });
    }
  };
  

// Middleware to authorize user using JWT token
const authorize = async (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (!bearerHeader || !bearerHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token not provided" });
  }

  const token = bearerHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_ACCESS_KEY);
    req.user = decoded.data;
    next();  // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

module.exports = { authenticate, authorize };
