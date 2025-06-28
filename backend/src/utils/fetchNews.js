const axios = require('axios');
const News = require('../models/news');
const Category = require('../models/category');

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const CATEGORIES = ['technology', 'sports', 'business', 'health', 'science', 'entertainment'];

async function fetchAndStoreNews() {
  for (const category of CATEGORIES) {
    try {
      const url = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&pageSize=20&apiKey=${NEWS_API_KEY}`;
      const { data } = await axios.get(url);
      // Ensure category exists in DB
      await Category.findOrCreate({ where: { name: category } });
      for (const article of data.articles) {
        if (!article.title || !article.description) {
          console.warn(`⛔ SKIPPED — Eksik veri! [${category}] ${article.url}`);
          continue;
        }
      
        console.log(`✔️ [${category}] ${article.title}`);
      
        await News.findOrCreate({
          where: { url: article.url },
          defaults: {
            title: article.title,
            content: article.description,
            image: article.urlToImage,
            category,
            isBreaking: false,
            createdAt: article.publishedAt || new Date(),
            updatedAt: article.publishedAt || new Date(),
          },
        });
      }
      
    } catch (err) {
      console.error(`Failed to fetch news for category ${category}:`, err.message);
    }
  }
}

module.exports = fetchAndStoreNews; 