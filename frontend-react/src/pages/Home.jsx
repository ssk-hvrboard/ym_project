import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import '../App.css';

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  const categories = [
    { id: 'all', name: 'Tümü', icon: '📰' },
    { id: 'technology', name: 'Teknoloji', icon: '💻' },
    { id: 'politics', name: 'Politika', icon: '🏛️' },
    { id: 'sports', name: 'Spor', icon: '⚽' },
    { id: 'entertainment', name: 'Eğlence', icon: '🎬' },
    { id: 'favorites', name: 'Favoriler', icon: '❤️' },
    { id: 'saved', name: 'Kaydedilenler', icon: '💾' },
    { id: 'for-you', name: 'Senin İçin', icon: '🎯' },
    { id: 'popular', name: 'Popüler', icon: '🔥' }
  ];

  useEffect(() => {
    fetchNews();
    loadUserData();
  }, [selectedCategory]);

  const loadUserData = () => {
    const savedFavorites = localStorage.getItem('favorites');
    const savedItems = localStorage.getItem('savedItems');
    
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    if (savedItems) {
      setSavedItems(JSON.parse(savedItems));
    }
  };

  const fetchNews = async () => {
    try {
      setLoading(true);
      let url = 'http://localhost:5000/api/news';
      
      if (selectedCategory !== 'all' && !['favorites', 'saved', 'for-you', 'popular'].includes(selectedCategory)) {
        url = `http://localhost:5000/api/news/category/${selectedCategory}`;
      } else if (selectedCategory === 'popular') {
        url = 'http://localhost:5000/api/news/popular';
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Haberler yüklenemedi');
      }
      
      let data = await response.json();
      
      // Handle special categories
      if (selectedCategory === 'favorites') {
        data = data.filter(item => favorites.includes(item.id));
      } else if (selectedCategory === 'saved') {
        data = data.filter(item => savedItems.includes(item.id));
      } else if (selectedCategory === 'for-you') {
        // Simple recommendation logic
        data = data.slice(0, 6); // Show first 6 items as recommendations
      }
      
      setNews(data);
    } catch (err) {
      setError(err.message);
      // Fallback to sample data if API fails
      setNews(getSampleNews());
    } finally {
      setLoading(false);
    }
  };

  const getSampleNews = () => {
    return [
      {
        id: 1,
        title: "Yapay Zeka Teknolojisinde Yeni Gelişmeler",
        excerpt: "OpenAI'nin yeni GPT-5 modeli, doğal dil işleme alanında çığır açan gelişmeler sunuyor.",
        content: "Yapay zeka teknolojisinde son dönemde yaşanan gelişmeler, endüstrinin geleceğini şekillendiriyor. OpenAI'nin yeni GPT-5 modeli, önceki versiyonlara göre %40 daha iyi performans gösteriyor ve daha doğal konuşma yeteneklerine sahip.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
        category: "technology",
        author: "Tech Reporter",
        publishedAt: new Date().toISOString(),
        readTime: "3 min",
        likes: 245,
        comments: 18
      },
      {
        id: 2,
        title: "Küresel İklim Anlaşması İmzalandı",
        excerpt: "200'den fazla ülke, karbon emisyonlarını azaltmak için tarihi bir anlaşma imzaladı.",
        content: "Paris'te düzenlenen küresel iklim zirvesinde, 200'den fazla ülke temsilcisi karbon emisyonlarını 2030 yılına kadar %50 azaltma hedefi için anlaşma imzaladı. Bu anlaşma, iklim değişikliğiyle mücadelede önemli bir adım olarak görülüyor.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400",
        category: "politics",
        author: "World News",
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        readTime: "5 min",
        likes: 189,
        comments: 32
      },
      {
        id: 3,
        title: "Futbol Ligi Şampiyonası Heyecanı",
        excerpt: "Sezonun son maçlarında şampiyonluk yarışı kızışıyor.",
        content: "Futbol liginde sezonun son haftalarına girilirken, şampiyonluk yarışı heyecan verici bir hal alıyor. İlk 3 takım arasında sadece 2 puan fark bulunuyor ve her maç kritik önem taşıyor.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
        category: "sports",
        author: "Sports Desk",
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        readTime: "4 min",
        likes: 156,
        comments: 24
      },
      {
        id: 4,
        title: "Yeni Netflix Dizisi Rekor Kırdı",
        excerpt: "Netflix'in yeni orijinal dizisi, ilk haftasında 100 milyon izlenme rekoru kırdı.",
        content: "Netflix'in yeni yayınladığı orijinal dizisi, ilk haftasında 100 milyon izlenme sayısına ulaşarak platform tarihinde yeni bir rekor kırdı. Dizi, sosyal medyada da büyük ilgi görüyor.",
        image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400",
        category: "entertainment",
        author: "Entertainment Weekly",
        publishedAt: new Date(Date.now() - 10800000).toISOString(),
        readTime: "2 min",
        likes: 298,
        comments: 45
      }
    ];
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/api/news/search?q=${encodeURIComponent(searchQuery)}`);
      if (response.ok) {
        const data = await response.json();
        setNews(data);
      } else {
        // Fallback to client-side search
        const filteredNews = getSampleNews().filter(item =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setNews(filteredNews);
      }
    } catch (err) {
      // Fallback to client-side search
      const filteredNews = getSampleNews().filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setNews(filteredNews);
    } finally {
      setLoading(false);
    }
  };

  const handleFavorite = (newsId) => {
    const newFavorites = favorites.includes(newsId)
      ? favorites.filter(id => id !== newsId)
      : [...favorites, newsId];
    
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const handleSave = (newsId) => {
    const newSavedItems = savedItems.includes(newsId)
      ? savedItems.filter(id => id !== newsId)
      : [...savedItems, newsId];
    
    setSavedItems(newSavedItems);
    localStorage.setItem('savedItems', JSON.stringify(newSavedItems));
  };

  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Az önce';
    if (diffInMinutes < 60) return `${diffInMinutes} dakika önce`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} saat önce`;
    return `${Math.floor(diffInMinutes / 1440)} gün önce`;
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Haberler yükleniyor...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Hata: {error}</p>
        <button onClick={fetchNews}>Tekrar Dene</button>
      </div>
    );
  }

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="logo">📰 Cavaliere News</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Haber ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="search-input"
            />
            <button onClick={handleSearch} className="search-button">
              🔍
            </button>
          </div>
        </div>
      </header>

      {/* Categories */}
      <nav className="categories-nav">
        <div className="categories-container">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* News Grid */}
      <main className="news-container">
        {news.length === 0 ? (
          <div className="no-news">
            <p>Bu kategoride henüz haber bulunmuyor.</p>
          </div>
        ) : (
          <div className="news-grid">
            {news.map(item => (
              <NewsCard
                key={item.id}
                news={item}
                isFavorite={favorites.includes(item.id)}
                isSaved={savedItems.includes(item.id)}
                onFavorite={() => handleFavorite(item.id)}
                onSave={() => handleSave(item.id)}
                formatTimeAgo={formatTimeAgo}
              />
            ))}
          </div>
        )}
      </main>
  </div>
);
};

export default Home; 