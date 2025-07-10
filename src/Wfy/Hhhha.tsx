import React, { useState } from "react";

const PochaccoCollection: React.FC = () => {
  const expressions = [
    "public\\img\\w.gif", 
    "public\\img\\ww.gif", 
    "public\\img\\www.gif", 
    "public\\img\\f.gif"
    ];
  const [currentIndex, setCurrentIndex] = useState(0); 
  const[userReview,setUserReview]=useState('');
  const [favoriteExpressions, setFavoriteExpressions] = useState<string[]>([]);
  const nextExpression = () => {
    setCurrentIndex((prev) => (prev + 1) % expressions.length);
  };
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex-1 bg-white p-6 rounded-2xl shadow-md border-2 border-purple-200 mb-8">
        <h2 className="text-2xl font-bold text-purple-700 mb-4 pb-2">
          关于帕恰狗
        </h2>
        <div className="space-y-4 text-gray-700">
          <p className="text-lg">
            帕恰狗（Pochacco）是三丽鸥公司于1989年创造的卡通形象，是一只白色的小狗，有着大大的棕色耳朵和圆圆的黑色眼睛。帕恰狗的名字来源于日语中的"ぽちゃっと"（pochatto），意思是圆润可爱。它性格活泼开朗，喜欢运动，特别是篮球和足球，经常带着可爱的笑容。
          </p>
          <p className="text-lg">
            帕恰狗以其天真无邪的形象和活泼的个性赢得了全球粉丝的喜爱，经常出现在各种周边商品上，如文具、毛绒玩具和服装等。它的设计简单却充满魅力，是Sanrio家族中最受欢迎的角色之一。
          </p>
        </div>
        <div className="bg-pink-300 w-52 h-10 text-center text-white p-2 text-2xl mb-4">帕恰狗照片</div>
        <img 
          src="/img/y.jpg" 
          alt="帕恰狗相关图片" 
          className="w-56 h-42 my-4" 
        />
      </div>
      <div className="p-4 bg-white rounded-2xl shadow-md border-2 border-blue-200 mb-8">
        <div className="bg-blue-500 w-52 h-10 text-center text-black p-2 text-2xl mb-4">帕恰狗表情包</div>
        <img 
          src={expressions[currentIndex]} 
          alt="帕恰狗表情" 
          className="w-32 h-32 mb-4"
        />
        <div className="bg-green-400 w-24 h-8 text-black inline-block">
          <button onClick={nextExpression}>切换表情包</button>
        </div>
      </div>
      <div className="p-4 bg-white rounded-2xl shadow-md border-2 border-green-200 mb-8">
      <h3 className="text-xl font-bold text-green-700 mb-4 pb-2 ">
        留下你的评价
      </h3>
      <input 
        type="text" 
        placeholder="写下你对帕恰狗的看法" 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        value={userReview}
        onChange={(e) => setUserReview(e.target.value)}
      />
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => {
          console.log('用户评价:', userReview); 
          setUserReview(''); 
        }}
      >
        提交评价
      </button>
    </div>
    </div>
  );
};

export default PochaccoCollection;