import React, { useState } from'react';

// 定义组件的props类型
type CounterProps = {};

const Counter: React.FC<CounterProps> = () => {
  // 使用useState定义状态count，初始值为0
  const [count, setCount] = useState(0);

  return (
    <div className="bg - white p - 4 rounded shadow-md">
      <h1 className="text - 2xl font - bold mb - 4">计数器</h1>
      <p className="text - lg mb - 4">当前计数: {count}</p>
      <button
        className="bg - blue - 500 hover:bg - blue - 700 text - white font - bold py - 2 px - 4 rounded"
        onClick={() => setCount(count + 1)}
      >
        增加计数
      </button>
    </div>
  );
};

export default Counter;