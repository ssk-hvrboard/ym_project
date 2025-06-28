import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CommentSection from '../components/CommentSection';
import LikeButton from '../components/LikeButton';
import SaveButton from '../components/SaveButton';
import RatingStars from '../components/RatingStars';
import '../App.css';

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [rating, setRating] = useState(0);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);

  useEffect(() => {
    fetchNewsDetail();
    loadUserData();
  }, [id]);

  const loadUserData = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const savedItems = JSON.parse(localStorage.getItem('savedItems') || '[]');
    
    setIsFavorite(favorites.includes(parseInt(id)));
    setIsSaved(savedItems.includes(parseInt(id)));
  };

  const fetchNewsDetail = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/api/news/${id}`);
      
      if (response.ok) {
        const data = await response.json();
        setNews(data);
        setLikes(data.likes || 0);
        setComments(data.comments || 0);
      } else {
        // Fallback to sample data
        setNews(getSampleNewsDetail());
      }
    } catch (err) {
      setError(err.message);
      // Fallback to sample data
      setNews(getSampleNewsDetail());
    } finally {
      setLoading(false);
    }
  };

  const getSampleNewsDetail = () => {
    const sampleNews = {
      1: {
        id: 1,
        title: "Yapay Zeka Teknolojisinde Yeni Gelişmeler",
        excerpt: "OpenAI'nin yeni GPT-5 modeli, doğal dil işleme alanında çığır açan gelişmeler sunuyor.",
        content: `Yapay zeka teknolojisinde son dönemde yaşanan gelişmeler, endüstrinin geleceğini şekillendiriyor. OpenAI'nin yeni GPT-5 modeli, önceki versiyonlara göre %40 daha iyi performans gösteriyor ve daha doğal konuşma yeteneklerine sahip.

        Bu yeni model, özellikle doğal dil işleme alanında büyük ilerlemeler kaydediyor. GPT-5, daha az veri ile daha iyi sonuçlar üretebiliyor ve çok dilli destek konusunda da önemli gelişmeler içeriyor.

        Uzmanlar, bu teknolojinin eğitim, sağlık, finans ve eğlence sektörlerinde devrim yaratacağını öngörüyor. Özellikle eğitim alanında, kişiselleştirilmiş öğrenme deneyimleri sunma potansiyeli büyük ilgi görüyor.

        Ancak bu gelişmeler aynı zamanda etik soruları da gündeme getiriyor. Yapay zekanın iş gücü üzerindeki etkisi ve veri güvenliği konuları, teknoloji şirketlerinin ve politika yapıcıların gündeminde öncelikli konular arasında yer alıyor.`,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
        category: "technology",
        author: "Tech Reporter",
        publishedAt: new Date().toISOString(),
        readTime: "5 min",
        likes: 245,
        comments: 18
      },
      2: {
        id: 2,
        title: "Küresel İklim Anlaşması İmzalandı",
        excerpt: "200'den fazla ülke, karbon emisyonlarını azaltmak için tarihi bir anlaşma imzaladı.",
        content: `Paris'te düzenlenen küresel iklim zirvesinde, 200'den fazla ülke temsilcisi karbon emisyonlarını 2030 yılına kadar %50 azaltma hedefi için anlaşma imzaladı. Bu anlaşma, iklim değişikliğiyle mücadelede önemli bir adım olarak görülüyor.

        Anlaşma kapsamında, gelişmiş ülkeler gelişmekte olan ülkelere finansal destek sağlayacak ve temiz enerji teknolojilerinin transferi konusunda işbirliği yapacaklar. Bu destek, özellikle yenilenebilir enerji projelerinin hayata geçirilmesinde kritik rol oynayacak.

        Çevre örgütleri, anlaşmayı önemli bir ilerleme olarak değerlendirirken, bazıları hedeflerin bilim insanlarının önerdiği seviyelerin altında kaldığını belirtiyor. Uzmanlar, anlaşmanın başarılı olması için tüm ülkelerin taahhütlerini yerine getirmesi gerektiğini vurguluyor.

        Bir sonraki zirve, 2025 yılında düzenlenecek ve uygulamanın hızlandırılması ile hedeflerin artırılması konularına odaklanacak.`,
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
        category: "politics",
        author: "World News",
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        readTime: "7 min",
        likes: 189,
        comments: 32
      }
    };

    return sampleNews[id] || sampleNews[1];
  };

  const handleFavorite = () => {
    const newFavorites = isFavorite
      ? JSON.parse(localStorage.getItem('favorites') || '[]').filter(favId => favId !== parseInt(id))
      : [...JSON.parse(localStorage.getItem('favorites') || '[]'), parseInt(id)];
    
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  const handleSave = () => {
    const newSavedItems = isSaved
      ? JSON.parse(localStorage.getItem('savedItems') || '[]').filter(savedId => savedId !== parseInt(id))
      : [...JSON.parse(localStorage.getItem('savedItems') || '[]'), parseInt(id)];
    
    localStorage.setItem('savedItems', JSON.stringify(newSavedItems));
    setIsSaved(!isSaved);
  };

  const handleLike = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/news/${id}/react`, {
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
    
    try {
      await fetch(`http://localhost:5000/api/news/${id}/react`, {
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

  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Az önce';
    if (diffInMinutes < 60) return `${diffInMinutes} dakika önce`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} saat önce`;
    return `${Math.floor(diffInMinutes / 1440)} gün önce`;
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

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Haber yükleniyor...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Hata: {error}</p>
        <button onClick={fetchNewsDetail}>Tekrar Dene</button>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="error-container">
        <p>Haber bulunamadı</p>
        <Link to="/" className="back-button">Ana Sayfaya Dön</Link>
      </div>
    );
  }

  return (
    <div className="news-detail-container">
      <div className="news-detail-content">
        {/* Back Button */}
        <Link to="/" className="back-button">
          ← Ana Sayfaya Dön
        </Link>

        {/* News Image */}
        <div className="news-image">
          <img src={news.image} alt={news.title} />
        </div>

        {/* News Header */}
        <div className="news-header">
          <div className="news-meta">
            <span className="news-category">
              {getCategoryIcon(news.category)} {getCategoryName(news.category)}
            </span>
            <span className="news-author">👤 {news.author}</span>
            <span className="news-date">{formatTimeAgo(news.publishedAt)}</span>
            <span className="news-read-time">⏱️ {news.readTime}</span>
          </div>

          <h1 className="news-title">{news.title}</h1>
          
          <div className="news-summary">
            <p>{news.excerpt}</p>
          </div>

          {/* Action Buttons */}
          <div className="news-actions">
            <LikeButton
              likes={likes}
              onLike={handleLike}
            />
            
            <button className="comment-button">
              💬 {comments} Yorum
            </button>

            <div className="rating-section">
              <span>Değerlendir: </span>
              <RatingStars
                rating={rating}
                onRating={handleRating}
              />
            </div>

            <SaveButton
              isSaved={isSaved}
              onSave={handleSave}
            />

            <button
              className={`favorite-button ${isFavorite ? 'active' : ''}`}
              onClick={handleFavorite}
            >
              {isFavorite ? '❤️ Favorilerden Çıkar' : '🤍 Favorilere Ekle'}
            </button>
          </div>
        </div>

        {/* News Body */}
        <div className="news-body">
          {news.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="news-content">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Comments Section */}
        <CommentSection newsId={id} />
      </div>
    </div>
  );
};

export default NewsDetail; 