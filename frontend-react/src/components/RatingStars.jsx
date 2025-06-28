import React, { useState } from 'react';

const RatingStars = ({ rating, onRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (starRating) => {
    onRating(starRating);
  };

  const handleStarHover = (starRating) => {
    setHoverRating(starRating);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          className={`star ${star <= (hoverRating || rating) ? 'active' : ''}`}
          onClick={() => handleStarClick(star)}
          onMouseEnter={() => handleStarHover(star)}
          onMouseLeave={handleStarLeave}
          title={`${star} yıldız`}
        >
          ⭐
        </button>
      ))}
    </div>
  );
};

export default RatingStars; 