const Notification = require('../models/notification');

// Subscribe to a category or keyword
exports.subscribe = async (req, res) => {
  try {
    const { category, keyword } = req.body;
    const subscription = await Notification.create({ userId: req.user.id, category, keyword });
    res.status(201).json(subscription);
  } catch (err) {
    res.status(500).json({ message: 'Failed to subscribe', error: err.message });
  }
};

// Unsubscribe from a category or keyword
exports.unsubscribe = async (req, res) => {
  try {
    const { category, keyword } = req.body;
    const deleted = await Notification.destroy({ where: { userId: req.user.id, category, keyword } });
    if (!deleted) return res.status(404).json({ message: 'Subscription not found' });
    res.json({ message: 'Unsubscribed' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to unsubscribe', error: err.message });
  }
};

// Get all subscriptions for the user
exports.getSubscriptions = async (req, res) => {
  try {
    const subs = await Notification.findAll({ where: { userId: req.user.id } });
    res.json(subs);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch subscriptions', error: err.message });
  }
}; 