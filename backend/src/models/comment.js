const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const News = require('./news');

const Comment = sequelize.define('Comment', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  newsId: { type: DataTypes.INTEGER, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
}, { timestamps: true });

Comment.belongsTo(User, { foreignKey: 'userId' });
Comment.belongsTo(News, { foreignKey: 'newsId' });

module.exports = Comment; 