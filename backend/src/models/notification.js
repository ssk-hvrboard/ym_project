const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Notification = sequelize.define('Notification', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  category: { type: DataTypes.STRING },
  keyword: { type: DataTypes.STRING },
}, { timestamps: true });

Notification.belongsTo(User, { foreignKey: 'userId' });

module.exports = Notification; 