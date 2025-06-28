const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const News = require('./news');

const Favorite = sequelize.define('Favorite', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  newsId: { type: DataTypes.INTEGER, allowNull: false },
}, { timestamps: true, indexes: [{ unique: true, fields: ['userId', 'newsId'] }] });

Favorite.belongsTo(User, { foreignKey: 'userId' });
Favorite.belongsTo(News, { foreignKey: 'newsId' });

module.exports = Favorite; 