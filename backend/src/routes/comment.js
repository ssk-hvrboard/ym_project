const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const jwtAuth = require('../middlewares/jwtAuth');

// Add a comment to a news item
router.post('/comment', jwtAuth, commentController.addComment);

// Like a news item
router.post('/like', jwtAuth, commentController.likeNews);

// Rate a news item
router.post('/rate', jwtAuth, commentController.rateNews);

module.exports = router; 