import React from 'react';

const TextTruncate = ({ text, maxLength }) => {
  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  const truncatedText = text.split(' ').slice(0, maxLength).join(' ');

  return <span>{truncatedText}...</span>;
};

export default TextTruncate;