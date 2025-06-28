import React, { useState } from 'react';

const LikeButton = ({ likes, onLike }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (!isLiked) {
      setIsLiked(true);
      setLikeCount(prev => prev + 1);
      onLike();
    }
  };

  return (
    <button
      className={`like-button ${isLiked ? 'liked' : ''}`}
      onClick={handleLike}
      title={isLiked ? 'Beğenildi' : 'Beğen'}
    >
      {isLiked ? '❤️' : '🤍'} {likeCount}
    </button>
  );
};

export default LikeButton; 