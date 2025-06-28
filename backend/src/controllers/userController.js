const Favorite = require('../models/favorite');
const News = require('../models/news');
const Comment = require('../models/comment');

// Placeholder for personalized recommendations
exports.getRecommendations = async (req, res) => {
  // TODO: Implement recommendation logic
  res.json({ message: 'Personalized recommendations not implemented yet' });
};

// Get user's favorite news
exports.getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.findAll({
      where: { userId: req.user.id },
      include: [{ model: News }],
    });
    res.json(favorites.map(fav => fav.News));
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch favorites', error: err.message });
  }
};

// Add a news item to favorites
exports.addFavorite = async (req, res) => {
  try {
    const { newsId } = req.body;
    const [favorite, created] = await Favorite.findOrCreate({
      where: { userId: req.user.id, newsId },
    });
    if (!created) return res.status(400).json({ message: 'Already favorited' });
    res.status(201).json({ message: 'Added to favorites' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add favorite', error: err.message });
  }
};

// Remove a news item from favorites
exports.removeFavorite = async (req, res) => {
  try {
    const { newsId } = req.body;
    const deleted = await Favorite.destroy({ where: { userId: req.user.id, newsId } });
    if (!deleted) return res.status(404).json({ message: 'Favorite not found' });
    res.json({ message: 'Removed from favorites' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to remove favorite', error: err.message });
  }
};

// Get all favorites for the logged-in user
exports.getUserFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.findAll({
      where: { userId: req.user.id },
      include: [{ model: News }],
    });
    res.json(favorites.map(fav => fav.News));
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch favorites', error: err.message });
  }
};

// Get all comments for the logged-in user
exports.getUserComments = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { userId: req.user.id },
      order: [['createdAt', 'DESC']],
    });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch comments', error: err.message });
  }
}; 