const jwt = require('jsonwebtoken');

// JWT authentication middleware
module.exports = function (req, res, next) {
  // Get the token from the Authorization header
  const authHeader = req.headers['authorization'];
  // The header should be in the format: 'Bearer <token>'
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    // No token provided
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token using the secret
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next(); // Proceed to the next middleware/route handler
  } catch (err) {
    // Token is invalid or expired
    return res.status(403).json({ message: 'Token is not valid' });
  }
}; 