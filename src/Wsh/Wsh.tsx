import React, { useState } from 'react';

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  caption?: string;
  likes: number;
}

const MediaGallery: React.FC = () => {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([
    {
      type: 'image',
      url: 'public/img/90ca1e332ab64a088a0be49b93e7c1a.jpg',
      caption: '图片 1',
      likes: 0
    },
    {
      type: 'video',
      url: 'public/img/fcad15d1a247382864cf8cfe00c5a983.mp4',
      caption: '视频 1',
      likes: 0
    },
    {
      type: 'image',
      url: 'public/img/f573161e8e559729a08ba0209d0274d.jpg',
      caption: '图片 2',
      likes: 0
    },
    {
      type: 'video',
      url: 'public/img/e5b4cf6f5d80c92a4dc361193d5ca0c4.mp4',
      caption: '视频 2',
      likes: 0
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length);
  };

  const handleLike = () => {
    const newMediaItems = [...mediaItems];
    newMediaItems[currentIndex].likes++;
    setMediaItems(newMediaItems);
  };

  const currentMedia = mediaItems[currentIndex];

  return (
        <div className="w-90 p-80 h-4 bg-blue-100 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          上一个
        </button>
        <h1 className="text-xl font-bold text-center">媒体展示</h1>
        <button
          onClick={handleNext}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
  下一个
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-96 overflow-hidden rounded-lg">
        {currentMedia.type === 'image' && (
          <img
            src={currentMedia.url}
            alt={currentMedia.caption || ''}
            className="w-90 h-full object-center"
          />
        )}
        {currentMedia.type === 'video' && (
          <video
            src={currentMedia.url}
            controls
            className="w-full h-full object-center"
          />
        )}
      </div>
      <div className="mt-4 text-center text-gray-600">
        {currentMedia.caption}
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={handleLike}
          className="flex items-center space-x-1 px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span>{currentMedia.likes}</span>
        </button>
      </div>
    </div>
  );
};

export default MediaGallery;