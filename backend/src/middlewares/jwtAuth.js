const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Get the token from the Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    // No token provided
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token using the secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach the decoded user info to the request object
    req.user = decoded;
    next();
  } catch (err) {
    // Token is invalid or expired
    return res.status(403).json({ message: 'Token is not valid' });
  }
}; 