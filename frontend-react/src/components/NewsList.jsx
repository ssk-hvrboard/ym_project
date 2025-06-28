import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import styles from './NewsList.module.css';
import Home from './pages/Home';

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
      .catch(() => {
        setError('Haberler yüklenemedi.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className={styles.center}>Yükleniyor...</div>;
  if (error) return <div className={styles.center}>{error}</div>;
  if (!news.length) return <div className={styles.center}>Hiç haber bulunamadı.</div>;

  return (
    <div className={styles.grid}>
      {news.map(item => (
        <NewsCard
          key={item.id}
          id={item.id}
          title={item.title}
          summary={item.summary || item.content?.slice(0, 80) + '...'}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default NewsList; 