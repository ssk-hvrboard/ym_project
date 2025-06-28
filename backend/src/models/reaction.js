const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const News = require('./news');

const Reaction = sequelize.define('Reaction', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  newsId: { type: DataTypes.INTEGER, allowNull: false },
  type: { type: DataTypes.ENUM('like', 'star'), allowNull: false },
  value: { type: DataTypes.INTEGER }, // for star rating 1-5
}, { timestamps: true, indexes: [{ unique: true, fields: ['userId', 'newsId', 'type'] }] });

Reaction.belongsTo(User, { foreignKey: 'userId' });
Reaction.belongsTo(News, { foreignKey: 'newsId' });

module.exports = Reaction; 