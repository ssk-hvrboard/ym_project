const Comment = require('../models/comment');
const Reaction = require('../models/reaction');
const User = require('../models/user');

// Add a comment to a news item
exports.addComment = async (req, res) => {
  try {
    const { text } = req.body;
    const { newsId } = req.params;
    const comment = await Comment.create({ userId: req.user.id, newsId, content: text });
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add comment', error: err.message });
  }
};

// Get all comments for a news item
exports.getComments = async (req, res) => {
  try {
    const { newsId } = req.params;
    const comments = await Comment.findAll({
      where: { newsId },
      include: [{ model: User, attributes: ['id', 'email'] }],
      order: [['createdAt', 'DESC']],
    });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch comments', error: err.message });
  }
};

// Like a news item (once per user)
exports.likeNews = async (req, res) => {
  try {
    const { newsId } = req.body;
    const [reaction, created] = await Reaction.findOrCreate({
      where: { userId: req.user.id, newsId, type: 'like' },
      defaults: { value: 1 },
    });
    if (!created) return res.status(400).json({ message: 'Already liked' });
    res.status(201).json({ message: 'News liked' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to like news', error: err.message });
  }
};

// Rate a news item (1-5 stars, once per user)
exports.rateNews = async (req, res) => {
  try {
    const { newsId, value } = req.body;
    if (value < 1 || value > 5) return res.status(400).json({ message: 'Rating must be 1-5' });
    const [reaction, created] = await Reaction.findOrCreate({
      where: { userId: req.user.id, newsId, type: 'star' },
      defaults: { value },
    });
    if (!created) {
      // Update existing rating
      reaction.value = value;
      await reaction.save();
      return res.json({ message: 'Rating updated' });
    }
    res.status(201).json({ message: 'News rated' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to rate news', error: err.message });
  }
}; 