const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const News = sequelize.define('News', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  url: { type: DataTypes.STRING },
  image: { type: DataTypes.STRING },
  category: { type: DataTypes.STRING },
  isBreaking: { type: DataTypes.BOOLEAN, defaultValue: false },
  interactionCount: { type: DataTypes.INTEGER, defaultValue: 0 },
  summary: { type: DataTypes.STRING },
  author: { type: DataTypes.STRING },
}, { timestamps: true });

module.exports = News; 