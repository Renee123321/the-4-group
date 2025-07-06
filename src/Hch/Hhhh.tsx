import React, { useState } from "react";

const HhhhComponent: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div>
      <h1 className="bg-blue-200 p-4 w-34 h-30 border-red-400 border-4 text-3xl text-center">kitty的介绍</h1>
      <li className="text-xl">中文名凯蒂·怀特</li>
      <li className="text-xl">外文名Kitty White,Hello Kitty</li>
      <li className="text-xl">别名凯蒂猫、凯蒂、堤提猫、吉蒂猫</li>
      <li className="text-xl">饰演凯蒂猫</li>
      <li className="text-xl">性别女</li>
      <li className="text-xl">登场作品《Hello Kitty》系列作品</li>
      <li className="text-xl">生日1974年11月1日</li>
      <li className="text-xl">年龄小学三年级</li>
      
      {/* 照片展示 */}
      <div>
        <div style={{ marginBottom: '20px' }}></div>
        <h2 className="bg-pink-200 p-4 w-64 h-16 border-red-400 border-4 text-2xl text-center">kitty的照片</h2>
        <img 
          src="public\img\屏幕截图_11-6-2025_95745_cn.bing.com.jpg" 
          alt="kitty的照片"
          style={{ maxWidth: '500px', width: '100%', height: 'auto' }}
        />
        
        <h3 className="bg-pink-200 p-4 w-64 h-16 border-red-400 border-4 text-2xl text-center">kitty的全家福</h3>
        <img 
          src="public\img\e5f5ee2550cb8062afc68f6ebb61bb8f.webp" 
          alt="kitty的照片"
          style={{ maxWidth: '500px', width: '100%', height: 'auto' }}
        />
      </div>

      {/* 新增视频播放按钮和区域 */}
      <div className="mt-6 text-center">
        <button 
          onClick={() => setShowVideo(!showVideo)}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          {showVideo ? '隐藏视频' : '播放Kitty视频'}
        </button>
        
        {showVideo && (
          <div className="mt-4">
            <video 
              controls 
              width="800"
              className="mx-auto"
              style={{ maxWidth: '100%', height: 'auto' }}
            >
              <source 
                src="/img/VID_20250706_181521.mp4" 
                type="video/mp4"
              />
              您的浏览器不支持视频播放
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default HhhhComponent;