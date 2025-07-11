import React from 'react';

const ChiiPage = () => {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: "'Arial Rounded MT Bold', 'Arial', sans-serif",
      backgroundColor: '#fff9fb',
      minHeight: '100vh'
    }}>
      {/* 页眉 */}
      <header style={{
        textAlign: 'center',
        marginBottom: '30px',
        padding: '20px',
        background: 'linear-gradient(135deg, #ffb6e6 0%, #a0e7ff 100%)',
        borderRadius: '15px',
        color: 'white',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          margin: '0',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
        }}>✨ 可爱的吉伊 ✨</h1>
        <p style={{
          fontSize: '1.2rem',
          margin: '10px 0 0',
          fontStyle: 'italic'
        }}>世界上最柔软的小可爱</p >
      </header>
      
      {/* 主要内容 */}
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px'
      }}>
        {/* 第一张图片 */}
        <div style={{
          textAlign: 'center',
          backgroundColor: 'white',
          padding: '15px',
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          < img 
            src="/img/微信图片_20250711011629.jpg" 
            alt="吉伊的可爱照片1" 
            style={{
              maxWidth: '100%',
              borderRadius: '10px',
              border: '3px solid #ffb6e6'
            }}
          />
          <p style={{
            marginTop: '10px',
            color: '#ff66b3',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}>看我看我~吉伊在对你眨眼睛呢！</p >
        </div>
        
        {/* 第二张图片 */}
        <div style={{
          textAlign: 'center',
          backgroundColor: 'white',
          padding: '15px',
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          < img 
            src="/img/微信图片_20250711011712.jpg" 
            alt="吉伊的可爱照片2" 
            style={{
              maxWidth: '100%',
              borderRadius: '10px',
              border: '3px solid #ffb6e6'
            }}
          />
          <p style={{
            marginTop: '10px',
            color: '#ff66b3',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}>哎呀~被发现了吉伊的小秘密！</p >
        </div>
        
        {/* 描述文字 */}
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            color: '#5dadec',
            borderBottom: '2px dashed #ffb6e6',
            paddingBottom: '10px'
          }}>关于吉伊的小故事</h2>
          <p style={{ lineHeight: '1.6', color: '#555' }}>
            吉伊是一只超级可爱的小生物，有着毛茸茸的身体和闪闪发亮的大眼睛。
            它最喜欢的事情是吃甜甜的草莓和躺在软软的云朵上打盹~
          </p >
          <p style={{ lineHeight: '1.6', color: '#555' }}>
            每当吉伊开心的时候，它的小尾巴会像螺旋桨一样转啊转，
            还会发出"啾啾"的可爱声音！
          </p >
        </div>
      </main>
      
      {/* 页脚 */}
      <footer style={{
        textAlign: 'center',
        marginTop: '30px',
        padding: '15px',
        backgroundColor: '#ffb6e6',
        borderRadius: '15px',
        color: 'white'
      }}>
        <p>❤️ 吉伊爱你哟 ❤️</p >
      </footer>
    </div>
  );
};

export default ChiiPage;