import React, { useState } from "react";

const MyComponent: React.FC = () => {
    const img1 ="/img/09f79d24310759c1cabcca483b88701.jpg";
const img2 ="/img/078d8a4da590acfd7422dca2bd13bcf.jpg";
  const videoUrl = "/img/7e2e7a07a685969cd6f3a4242d7c7912_raw.mp4";

  return (
    <div>
        <h1 className="bg-pink-50 p-5 w-34 h-30 border-blue-500 bprder-4 text-3xl text-center">关于马可波罗</h1>
        <li className="text-xl">简介：马可波罗是一位灵活的双枪游侠射手，以高机动性和独特的真实伤害为核心。他依赖技能输出，擅长消耗和收割。</li>
        <li className="text-xl">技能介绍：被动 - 连锁反应： 普攻与技能伤害叠加“破坏”效果，10层后目标受到真实伤害，持续5秒。<br/>
        1技能 - 华丽左轮： 向指定方向连续射击，造成物理伤害（可暴击），受攻速影响子弹数。主要消耗/输出手段。<br/>
        2技能 - 漫游之枪： 向指定方向闪烁，附近有敌人时提升移速和伤害。提供位移与预警。<br/>
        3技能 - 狂热弹幕： 位移后向周围持续射击，造成高额物理伤害。核心AOE爆发技能。</li>S

        <li className="text-xl">核心特色：真实伤害、高机动性、技能型射手。</li>
       {/* 图片 */}
       <div>
<img src={img1}  alt="技能效果1" className="block mx-auto" /><br/><hr/>
<img src={img2}  alt="技能效果2" className="block mx-auto" />

</div>
{/* 视频展示 */}
<div className="w-full max-w-xl ">
    <h2 className="text-3xl block mx-auto">技能演示</h2>
    <video
    src={videoUrl}
    controls
    width="100%"
    height="auto"
    muted
    >
        您的浏览器不支持视频播放，请更换现代浏览器
        </video>
        </div>
</div>
   );
};

export default MyComponent;