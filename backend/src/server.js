const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./config/database');
const { seedNews } = require('./utils/seedData');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const authRoutes = require('./routes/auth');
const newsRoutes = require('./routes/news');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const notificationRoutes = require('./routes/notification');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/notifications', notificationRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Cavaliere News API', 
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      news: '/api/news',
      auth: '/api/auth',
      users: '/api/users'
    }
  });
});

// Database connection and server start
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Test database connection
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully.');

    // Sync database models
    await sequelize.sync({ alter: true });
    console.log('✅ Database models synchronized.');

    // Seed sample data
    await seedNews();
    console.log('✅ Sample data seeded.');

    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
      console.log(`📰 Cavaliere News API ready at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
