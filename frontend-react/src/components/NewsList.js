import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import './NewsList.css';

const API_URL = 'http://localhost:5000/api/news';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setNews(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Haberler yüklenemedi.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="news-list">
      {news.map(item => (
        <NewsCard
          key={item.id}
          title={item.title}
          summary={item.summary || item.content?.slice(0, 80) + '...'}
          onClick={() => window.location.href = `/news/${item.id}`}
        />
      ))}
    </div>
  );
};

export default NewsList; 