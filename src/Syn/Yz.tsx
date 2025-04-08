import React, { useState } from 'react';

// 组员1组件
const Member1: React.FC = () => {
  const [count1, setCount1] = useState(0);
  return (
    <div className="border-2 border-red-600 p-4 mb-4">
      <p className="text-red-600">组员1作品（带状态）</p>
      <p>点击次数: {count1}</p>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setCount1(count1 + 1)}
      >
        点击改变状态
      </button>
    </div>
  );
};

// 组员2组件
const Member2: React.FC = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div 
      className={`border-2 border-red-600 p-4 ${isHover ? 'bg-gray-100' : ''}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <p className="text-red-600">组员2组件作品（带状态）</p>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Member1 />
      <Member2 />
    </div>
  );
};

export default App;
