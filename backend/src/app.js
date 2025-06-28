require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sequelize } = require('./config');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.error('Database connection error:', err));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Backend is running',
    timestamp: new Date().toISOString()
  });
});

// Placeholder for routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/news', require('./routes/news'));
app.use('/api/user', require('./routes/user'));
app.use('/api/comment', require('./routes/comment'));
app.use('/api/notification', require('./routes/notification'));
app.use('/api/category', require('./routes/category'));

module.exports = app; 