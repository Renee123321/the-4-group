import React from "react";

const MediaDisplay = () => {
  const textContent = "这是一段关于童年回忆的文字，搭配着喜欢的图片和视频~";
  // 图片路径+对应描述（数组对象形式，方便一一对应）
  const images = [
    { url: "public/img/1.jpg", desc: "第一张照片：熊大的弟弟，比较强壮，性格憨厚，偶尔也能想出聪明的点子，和熊大一起守护森林。" },
    { url: "public/img/2.jpg", desc: "第二张照片：小时候的可爱瞬间" },
    { url: "public/img/3.jpg", desc: "第三张照片：熊兄弟的主心骨，有勇有谋，带领熊二多次成功阻挠光头强砍伐树木，有时也会帮助陷入困境的光头强" },
    { url: "public/img/4.jpg", desc: "第四张照片：光头强：前期是一心伐木却总失败的伐木工，常被李老板催着交木头并克扣工资；后期身份有所转变，比如成为导游等，与熊大、熊二的关系也逐渐从敌对变得亦敌亦友 。" }
  ];
  const videoUrl = "public/img/视频.mp4";

  return (
    <div style={{ width: "800px", margin: "0 auto", padding: "20px" }}>
      {/* 标题文字（加粗+颜色） */}
      <p style={{ 
        fontSize: "16px", 
        color: "#e63946", 
        fontWeight: "bold" 
      }}>
        {textContent}
      </p>

      {/* 图片+描述展示 */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(2, 1fr)", 
        gap: "20px", // 加大间距，避免文字拥挤
        marginTop: "10px" 
      }}>
        {images.map((item, index) => (
          <div key={index}> {/* 每个图片+文字用div包裹 */}
            <img 
              src={item.url} 
              alt={`照片${index + 1}`} 
              style={{ width: "100%", height: "200px", objectFit: "cover" }} 
            />
            {/* 照片下方的文字（可单独设置样式） */}
            <p style={{ 
              marginTop: "5px", 
              color: "#555", 
              fontSize: "14px",
              fontWeight: "500" // 中等加粗
            }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 视频展示 */}
      <video 
        src={videoUrl} 
        controls 
        style={{ width: "100%", marginTop: "20px" }}
      >
        你的浏览器不支持 video 标签，请升级浏览器。
      </video>
    </div>
  );
};

export default MediaDisplay;
