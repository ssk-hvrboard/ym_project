const express = require('express');
const router = express.Router();
const jwtAuth = require('../middlewares/jwtAuth');

// Test route to confirm routing works
router.get('/test', (req, res) => {
  res.send('Test route works!');
});

// Protected user profile route
router.get('/user/profile', jwtAuth, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;