import { useState } from 'react';

// 定义组件的props类型（如果需要）
interface CounterProps {
  initialValue?: number;
}

const Counter = ({ initialValue = 0 }: CounterProps) => {
  // 使用useState管理计数器状态
  const [count, setCount] = useState<number>(initialValue);
  const [inputValue, setInputValue] = useState<string>('');

  // 增加计数器
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // 减少计数器
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // 重置计数器
  const reset = () => {
    setCount(initialValue);
  };

  // 设置自定义值
  const setCustomValue = () => {
    const num = parseInt(inputValue);
    if (!isNaN(num)) {
      setCount(num);
    }
    setInputValue('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          计数器应用
        </h1>
        
        <div className="flex justify-center items-center mb-6">
          <button
            onClick={decrement}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-l-lg transition duration-200"
          >
            -
          </button>
          
          <div className="bg-gray-200 px-6 py-2 text-xl font-mono">
            {count}
          </div>
          
          <button
            onClick={increment}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-r-lg transition duration-200"
          >
            +
          </button>
        </div>
        
        <div className="flex flex-col space-y-4">
          <button
            onClick={reset}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            重置
          </button>
          
          <div className="flex mt-4">
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="输入自定义值"
              className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={setCustomValue}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-r-lg transition duration-200"
            >
              设置
            </button>
          </div>
        </div>
        
        {/* 根据计数显示不同消息 */}
        <div className="mt-6 text-center">
          {count > 10 ? (
            <p className="text-green-600 font-semibold">计数已经超过10了！</p>
          ) : count < 0 ? (
            <p className="text-red-600 font-semibold">计数是负数！</p>
          ) : (
            <p className="text-gray-600">当前计数在0-10之间</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Counter;