const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const jwtAuth = require('../middlewares/jwtAuth');

// Get personalized recommendations (placeholder)
router.get('/recommendations', jwtAuth, userController.getRecommendations);

// Get user's favorite news
router.get('/favorites', jwtAuth, userController.getUserFavorites);

// Add a news item to favorites
router.post('/favorites', jwtAuth, userController.addFavorite);

// Remove a news item from favorites
router.delete('/favorites', jwtAuth, userController.removeFavorite);

// Get all comments for the logged-in user
router.get('/comments', jwtAuth, userController.getUserComments);

module.exports = router; 