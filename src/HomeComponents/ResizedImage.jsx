// ResizedImage.js

import React, { useState, useEffect } from 'react';

const handleImageChange = async (imageUrl, width, height) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const desiredWidth = width; // Adjust as needed
      const desiredHeight = height; // Adjust as needed
      canvas.width = desiredWidth;
      canvas.height = desiredHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, desiredWidth, desiredHeight);

      canvas.toBlob((blob) => {
        if (blob) {
          const resizedImageUrl = URL.createObjectURL(blob);
          resolve(resizedImageUrl);
        } else {
          reject(new Error('Failed to create blob object'));
        }
      }, 'image/jpeg', 100);
    };
    img.onerror = (error) => {
      reject(error);
    };
    img.src = imageUrl;
  });
};

const ResizedImage = ({ imageUrl, width, height }) => {
  const [resizedImageUrl, setResizedImageUrl] = useState(null);

  useEffect(() => {
    const fetchResizedImage = async () => {
      try {
        const resizedUrl = await handleImageChange(imageUrl, width, height);
        setResizedImageUrl(resizedUrl);
      } catch (error) {
        console.error('Error resizing image:', error);
      }
    };

    fetchResizedImage();
  }, [imageUrl, width, height]);

  return (
    <img src={resizedImageUrl} height={height} />
  );
};

export default ResizedImage;
