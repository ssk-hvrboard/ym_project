const News = require('../models/news');
const { Op } = require('sequelize');
const fetchAndStoreNews = require('../utils/fetchNews');

// Get all news, optionally filtered by category
exports.getAllNews = async (req, res) => {
  try {
    const where = {};
    if (req.query.category) {
      where.category = req.query.category;
    }
    const news = await News.findAll({ where, order: [['createdAt', 'DESC']] });
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch news', error: err.message });
  }
};

// Search news by keyword
exports.searchNews = async (req, res) => {
  try {
    const q = req.query.q;
    if (!q) return res.status(400).json({ message: 'Missing search query' });
    const news = await News.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.iLike]: `%${q}%` } },
          { content: { [Op.iLike]: `%${q}%` } },
        ],
      },
      order: [['createdAt', 'DESC']],
    });
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: 'Search failed', error: err.message });
  }
};

// Get popular news (most interacted)
exports.getPopularNews = async (req, res) => {
  try {
    const news = await News.findAll({
      order: [['interactionCount', 'DESC']],
      limit: 10,
    });
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch popular news', error: err.message });
  }
};

// Get breaking news
exports.getBreakingNews = async (req, res) => {
  try {
    const news = await News.findAll({ where: { isBreaking: true }, order: [['createdAt', 'DESC']] });
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch breaking news', error: err.message });
  }
};

// Placeholder for fetching news from external sources
exports.fetchExternalNews = async (req, res) => {
  try {
    await fetchAndStoreNews();
    res.json({ message: 'News fetched and stored.' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch news', error: err.message });
  }
};

exports.importNews = async (req, res) => {
  try {
    await fetchAndStoreNews();
    res.json({ message: 'News imported successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to import news', error: err.message });
  }
};

exports.incrementInteraction = async (req, res) => {
  try {
    const { newsId } = req.params;
    const news = await News.findByPk(newsId);
    if (!news) return res.status(404).json({ message: 'News not found' });
    news.interactionCount += 1;
    await news.save();
    res.json({ message: 'Interaction count incremented', interactionCount: news.interactionCount });
  } catch (err) {
    res.status(500).json({ message: 'Failed to increment interaction', error: err.message });
  }
};

// Get news detail by id
exports.getNewsById = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findByPk(id);
    if (!news) return res.status(404).json({ message: 'News not found' });
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch news detail', error: err.message });
  }
};

// Get news by category (as route param)
exports.getNewsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const news = await News.findAll({ where: { category }, order: [['createdAt', 'DESC']] });
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch news by category', error: err.message });
  }
}; 