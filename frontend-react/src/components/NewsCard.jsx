import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';
import SaveButton from './SaveButton';
import RatingStars from './RatingStars';
import './NewsCard.css';

const NewsCard = ({ news, isFavorite, isSaved, onFavorite, onSave, formatTimeAgo }) => {
  const [showRating, setShowRating] = useState(false);
  const [rating, setRating] = useState(0);
  const [likes, setLikes] = useState(news.likes || 0);
  const [comments, setComments] = useState(news.comments || 0);

  const handleLike = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/news/${news.id}/react`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ type: 'like' })
      });

      if (response.ok) {
        setLikes(prev => prev + 1);
      }
    } catch (error) {
      // Fallback: just update local state
      setLikes(prev => prev + 1);
    }
  };

  const handleRating = async (newRating) => {
    setRating(newRating);
    setShowRating(false);
    
    try {
      await fetch(`http://localhost:5000/api/news/${news.id}/react`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ type: 'rate', value: newRating })
      });
    } catch (error) {
      console.log('Rating saved locally');
    }
  };

  const getCategoryIcon = (category) => {
    const icons = {
      technology: '💻',
      politics: '🏛️',
      sports: '⚽',
      entertainment: '🎬'
    };
    return icons[category] || '📰';
  };

  const getCategoryName = (category) => {
    const names = {
      technology: 'Teknoloji',
      politics: 'Politika',
      sports: 'Spor',
      entertainment: 'Eğlence'
    };
    return names[category] || category;
  };

  return (
    <article className="news-card">
      <div className="news-card-image">
        <img src={news.image} alt={news.title} />
        <div className="news-card-overlay">
          <div className="news-card-actions">
            <button
              className={`favorite-button ${isFavorite ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onFavorite();
              }}
              title={isFavorite ? 'Favorilerden çıkar' : 'Favorilere ekle'}
            >
              {isFavorite ? '❤️' : '🤍'}
            </button>
            <SaveButton
              isSaved={isSaved}
              onSave={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onSave();
              }}
            />
          </div>
        </div>
      </div>

      <div className="news-card-content">
        <div className="news-card-header">
          <span className="news-category">
            {getCategoryIcon(news.category)} {getCategoryName(news.category)}
          </span>
          <span className="news-time">
            {formatTimeAgo(news.publishedAt)}
          </span>
        </div>

        <Link to={`/news/${news.id}`} className="news-card-link">
          <h3 className="news-title">{news.title}</h3>
          <p className="news-excerpt">{news.excerpt}</p>
        </Link>

        <div className="news-card-footer">
          <div className="news-meta">
            <span className="news-author">👤 {news.author}</span>
            <span className="news-read-time">⏱️ {news.readTime}</span>
          </div>

          <div className="news-interactions">
            <LikeButton
              likes={likes}
              onLike={handleLike}
            />
            
            <button
              className="comment-button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              title="Yorumlar"
            >
              💬 {comments}
            </button>

            <div className="rating-container">
              <button
                className="rating-button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowRating(!showRating);
                }}
                title="Değerlendir"
              >
                ⭐
              </button>
              {showRating && (
                <div className="rating-popup">
                  <RatingStars
                    rating={rating}
                    onRating={handleRating}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard; 