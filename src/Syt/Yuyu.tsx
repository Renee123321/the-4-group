import React from 'react';

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  caption?: string;
}

const MediaDisplay: React.FC = () => {
  const mediaItems: MediaItem[] = [
    {
      type: 'image',
      url: 'public/img/0e1828f5511be5fc7dc9457689a5f92f.jpg',
      caption: '图片 1'
    },
    {
      type: 'video',
      url: 'public/img/1fb87bd5eca25554d23ebc550f63ebb3.mp4',
      caption: '视频 1'
    },
    {
      type: 'image',
      url: 'public/img/b5a4d46f0bd1d091c168250c88c487cf.jpgg',
      caption: '图片2'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {mediaItems.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          {item.type === 'image' && (
            <img
              src={item.url}
              alt={item.caption || ''}
              className="w-full h-64 object-cover"
            />
          )}
          {item.type === 'video' && (
            <video
              src={item.url}
              controls
              className="w-full h-64 object-cover"
            />
          )}
          <div className="p-4">
            <p className="text-gray-700">{item.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MediaDisplay;
