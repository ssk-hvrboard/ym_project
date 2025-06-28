import React from 'react';
import './NewsCard.css';

const NewsCard = ({ title, summary, onClick }) => (
  <div className="news-card" onClick={onClick}>
    <h3 className="news-title">{title}</h3>
    <p className="news-summary">{summary}</p>
  </div>
);

export default NewsCard; 