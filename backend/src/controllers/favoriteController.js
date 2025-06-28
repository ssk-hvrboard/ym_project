const Favorite = require('../models/favorite');

// Add a news item to favorites
exports.addFavorite = async (req, res) => {
  try {
    const { newsId } = req.params;
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
    const { newsId } = req.params;
    const deleted = await Favorite.destroy({ where: { userId: req.user.id, newsId } });
    if (!deleted) return res.status(404).json({ message: 'Favorite not found' });
    res.json({ message: 'Removed from favorites' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to remove favorite', error: err.message });
  }
}; 