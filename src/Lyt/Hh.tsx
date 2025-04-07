import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Tailwind Counter</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <span className="text-2xl block mb-4">Count: {count}</span>
        <button
          onClick={() => setCount(prev => prev + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Increment
        </button>
      </div>
    </div>
  );
}