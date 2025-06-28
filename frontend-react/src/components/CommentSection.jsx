import React, { useState, useEffect } from 'react';

const CommentSection = ({ newsId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    fetchComments();
    // Load user name from localStorage or generate a random one
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setUserName(savedName);
    } else {
      const randomName = `Kullanıcı${Math.floor(Math.random() * 1000)}`;
      setUserName(randomName);
      localStorage.setItem('userName', randomName);
    }
  }, [newsId]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/news/${newsId}/comments`);
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      } else {
        // Fallback to sample comments
        setComments(getSampleComments());
      }
    } catch (error) {
      // Fallback to sample comments
      setComments(getSampleComments());
    }
  };

  const getSampleComments = () => {
    return [
      {
        id: 1,
        content: "Bu haber gerçekten çok ilginç! Teknoloji dünyasındaki gelişmeleri takip etmek her zaman heyecan verici.",
        author: "TechLover",
        createdAt: new Date(Date.now() - 1800000).toISOString(),
        likes: 5
      },
      {
        id: 2,
        content: "Yapay zeka konusunda dikkatli olmamız gerekiyor. Bu teknolojinin etik kullanımı çok önemli.",
        author: "EthicsMatter",
        createdAt: new Date(Date.now() - 3600000).toISOString(),
        likes: 3
      },
      {
        id: 3,
        content: "Harika bir yazı olmuş! Özellikle eğitim alanındaki potansiyeli çok etkileyici.",
        author: "Educator",
        createdAt: new Date(Date.now() - 5400000).toISOString(),
        likes: 7
      }
    ];
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/news/${newsId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          content: newComment,
          author: userName
        })
      });

      if (response.ok) {
        const comment = await response.json();
        setComments(prev => [comment, ...prev]);
        setNewComment('');
      } else {
        // Fallback: add comment locally
        const newCommentObj = {
          id: Date.now(),
          content: newComment,
          author: userName,
          createdAt: new Date().toISOString(),
          likes: 0
        };
        setComments(prev => [newCommentObj, ...prev]);
        setNewComment('');
      }
    } catch (error) {
      // Fallback: add comment locally
      const newCommentObj = {
        id: Date.now(),
        content: newComment,
        author: userName,
        createdAt: new Date().toISOString(),
        likes: 0
      };
      setComments(prev => [newCommentObj, ...prev]);
      setNewComment('');
    } finally {
      setLoading(false);
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

  return (
    <div className="comment-section">
      <h3 className="comment-section-title">💬 Yorumlar ({comments.length})</h3>
      
      {/* Add Comment Form */}
      <form onSubmit={handleSubmitComment} className="comment-form">
        <div className="comment-input-container">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Düşüncelerinizi paylaşın..."
            className="comment-input"
            rows="3"
            disabled={loading}
          />
          <button 
            type="submit" 
            className="comment-submit-button"
            disabled={loading || !newComment.trim()}
          >
            {loading ? 'Gönderiliyor...' : 'Yorum Gönder'}
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="comments-list">
        {comments.length === 0 ? (
          <p className="no-comments">Henüz yorum yapılmamış. İlk yorumu siz yapın!</p>
        ) : (
          comments.map(comment => (
            <div key={comment.id} className="comment-item">
              <div className="comment-header">
                <span className="comment-author">{comment.author}</span>
                <span className="comment-time">{formatTimeAgo(comment.createdAt)}</span>
              </div>
              <div className="comment-content">
                {comment.content}
              </div>
              <div className="comment-actions">
                <button className="comment-like-button">
                  👍 {comment.likes}
                </button>
                <button className="comment-reply-button">
                  Yanıtla
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection; 