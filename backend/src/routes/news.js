const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const commentController = require('../controllers/commentController');
const favoriteController = require('../controllers/favoriteController');
const reactionController = require('../controllers/reactionController');
const jwtAuth = require('../middlewares/jwtAuth');

// Get all news, optionally filtered by category
router.get('/', newsController.getAllNews);

// Search news by keyword
router.get('/search', newsController.searchNews);

// Get popular news
router.get('/popular', newsController.getPopularNews);

// Get breaking news
router.get('/breaking', newsController.getBreakingNews);

// Fetch news from external sources (admin only, placeholder)

// Public route to trigger news import (for testing)
router.get('/fetch-external', newsController.importNews);

// Comments
router.post('/:newsId/comments', jwtAuth, commentController.addComment);
router.get('/:newsId/comments', commentController.getComments);

// Favorites
router.post('/:newsId/favorite', jwtAuth, favoriteController.addFavorite);
router.delete('/:newsId/favorite', jwtAuth, favoriteController.removeFavorite);

// Reactions (like/rate)
router.post('/:newsId/react', jwtAuth, reactionController.reactToNews);

// Anonymous interaction
router.post('/:newsId/interact', newsController.incrementInteraction);

// Get news detail by id
router.get('/:id', newsController.getNewsById);

// Get news by category (as route param)
router.get('/category/:category', newsController.getNewsByCategory);

module.exports = router; 