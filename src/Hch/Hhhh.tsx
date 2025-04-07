// hhhh.tsx
import React, { useState } from 'react';
import './Hhhh.js'; // 假设你的Tailwind CSS样式在这里导入，文件名相应更改

const HhhhComponent: React.FC = () => {
  // 使用useState来管理一个计数器状态
  const [count, setCount] = useState<number>(0);

  return (
    
<div className="flex items-center justify-center min-h-screen bg-gray-100">
<div className="bg-white p-6 rounded-lg shadow-lg">
<h1 className="text-2xl font-bold mb-4">
快快快点击我！！
</h1>
<p className="text-xl mb-4">
当前计数: {count}
</p >
<button
          className="bg-blue-500 text-white p-2 rounded-full w-full"
          onClick={() =>
 setCount(count + 1)}
        >
          增加计数
        
</button>
</div>
</div>

  );
};

export default HhhhComponent;