const Reaction = require('../models/reaction');

// Like or rate a news item
exports.reactToNews = async (req, res) => {
  try {
    const { newsId } = req.params;
    const { type, value } = req.body;
    if (!['like', 'star', 'rate'].includes(type)) {
      return res.status(400).json({ message: 'Invalid reaction type' });
    }
    let reactionType = type === 'rate' ? 'star' : type;
    let reaction;
    if (reactionType === 'star') {
      if (typeof value !== 'number' || value < 1 || value > 5) {
        return res.status(400).json({ message: 'Rating must be 1-5' });
      }
      [reaction, created] = await Reaction.findOrCreate({
        where: { userId: req.user.id, newsId, type: 'star' },
        defaults: { value },
      });
      if (!created) {
        reaction.value = value;
        await reaction.save();
        return res.json({ message: 'Rating updated' });
      }
      return res.status(201).json({ message: 'News rated' });
    } else if (reactionType === 'like') {
      [reaction, created] = await Reaction.findOrCreate({
        where: { userId: req.user.id, newsId, type: 'like' },
        defaults: { value: 1 },
      });
      if (!created) return res.status(400).json({ message: 'Already liked' });
      return res.status(201).json({ message: 'News liked' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to react to news', error: err.message });
  }
}; 