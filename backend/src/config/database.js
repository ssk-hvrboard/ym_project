const path = require('path'); // ← önce path tanımlanmalı
const dotenvPath = path.resolve(__dirname, '../../.env');
require('dotenv').config({ path: dotenvPath });

const { Sequelize } = require('sequelize');

console.log("DB_USER:", process.env.DB_USER);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  String(process.env.DB_PASSWORD),
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
    logging: false,
  }
);

module.exports = sequelize;
