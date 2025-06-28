const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully', user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};

// Mocked Google OAuth login controller
// This simulates a Google OAuth login flow for demonstration purposes
exports.googleOAuth = async (req, res) => {
  try {
    // Simulate receiving a Google profile (in real use, you'd get this from Google)
    const mockGoogleProfile = {
      name: 'Google User',
      email: 'googleuser@example.com',
      // No password from Google, so we use a placeholder
    };

    // Check if user already exists
    let user = await User.findOne({ where: { email: mockGoogleProfile.email } });
    if (!user) {
      // If not, create a new user with a random password (not used for login)
      const hashedPassword = await bcrypt.hash(Math.random().toString(36), 10);
      user = await User.create({
        name: mockGoogleProfile.name,
        email: mockGoogleProfile.email,
        password: hashedPassword,
      });
    }

    // Generate JWT token for the user
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    // Respond with the token and user info
    res.json({ token, user: { id: user.id, name: user.name, email: user.email }, oauth: 'google' });
  } catch (err) {
    res.status(500).json({ message: 'Google OAuth login failed', error: err.message });
  }
}; 