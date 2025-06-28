import React, { useState } from 'react';

const FlameButton = ({ newsId, interacted: initialInteracted, onChange }) => {
  const [interacted, setInteracted] = useState(initialInteracted);
  const [loading, setLoading] = useState(false);

  const handleFlame = async () => {
    if (interacted) return;
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/news/${newsId}/interact`, {
        method: 'POST',
      });
      if (res.ok) {
        setInteracted(true);
        if (onChange) onChange(true);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleFlame} disabled={loading || interacted} style={{marginRight: 8}}>
      🔥 {interacted ? 'Etkileşim Verildi' : 'Etkileşim Ver'}
    </button>
  );
};

export default FlameButton; 