const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');
const jwtAuth = require('../middlewares/jwtAuth');

// Get all subscriptions
router.get('/', jwtAuth, notificationController.getSubscriptions);

// Subscribe to a category or keyword
router.post('/subscribe', jwtAuth, notificationController.subscribe);

// Unsubscribe from a category or keyword
router.delete('/unsubscribe', jwtAuth, notificationController.unsubscribe);

module.exports = router; 