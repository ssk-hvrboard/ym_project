import React from 'react';

const SaveButton = ({ isSaved, onSave }) => {
  return (
    <button
      className={`save-button ${isSaved ? 'saved' : ''}`}
      onClick={onSave}
      title={isSaved ? 'Kaydedildi' : 'Kaydet'}
    >
      {isSaved ? '💾' : '📁'}
    </button>
  );
};

export default SaveButton; 