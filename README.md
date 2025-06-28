# Cavaliere News Application

A modern news application built with React frontend and Node.js backend, featuring Docker containerization and CI/CD pipeline.

## 🚀 Features

- **News Listing**: Browse and search through news articles
- **Categories**: Filter news by different categories
- **User Interactions**: Like, save, rate, and comment on articles
- **Responsive Design**: Modern UI with smooth interactions
- **Docker Support**: Containerized application for easy deployment
- **CI/CD Pipeline**: Automated testing and deployment with GitHub Actions

## 🏗️ Architecture

- **Frontend**: React.js with modern CSS
- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL with Sequelize ORM
- **Containerization**: Docker with docker-compose
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
├── backend/                 # Node.js backend
│   ├── src/
│   │   ├── controllers/     # API controllers
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   └── utils/          # Utility functions
│   └── Dockerfile
├── frontend-react/         # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   └── styles/        # CSS files
│   └── Dockerfile
├── docker-compose.yml      # Multi-container setup
└── .github/workflows/      # CI/CD pipelines
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- PostgreSQL (if running locally)

### Quick Start with Docker

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cavaliere-news-app
   ```

2. **Run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Health Check: http://localhost:5000/api/health

### Local Development

1. **Backend Setup**
   ```bash
   cd backend
   npm install
   npm start
   ```

2. **Frontend Setup**
   ```bash
   cd frontend-react
   npm install
   npm start
   ```

## 🔧 API Endpoints

- `GET /api/health` - Health check
- `GET /api/news` - Get all news
- `GET /api/news/:id` - Get specific news
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/comment` - Add comment
- `POST /api/favorite` - Save article

## 🚀 CI/CD Pipeline

The project includes GitHub Actions workflows that automatically:
- Run tests on code changes
- Build Docker images
- Validate docker-compose configuration
- Test the full application stack

## 📝 Environment Variables

Create `.env` files in both `backend/` and `frontend-react/` directories:

**Backend (.env)**
```
DB_HOST=localhost
DB_USER=postgres
DB_PASS=password
DB_NAME=news_db
JWT_SECRET=your_jwt_secret
PORT=5000
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the GitHub repository. 