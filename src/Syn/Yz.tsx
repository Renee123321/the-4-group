import React from 'react';

const RubyIntroduction = () => {
    return (
        <div style={{ width: '80%', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
            <h1>露比介绍</h1>
            <p>露比是一个 [Loopy（露比）是2001年韩国的国民级动画片
《小企鹅Pororo》中的卡通人物，她以一个粉
红色小海狸的形象出现，拥有可爱粉红脸颊，
给人以温馨和亲切的感觉。
在这个动画系列里，Loopy扮演着Pororo好朋
友的角色，展现了一种既乖巧又带有些许羡慕
复杂情感的性格。
中文名露比
外文名 Loopy
性别早女
性格敏感且害羞，对朋友友善，
守规矩。] ，以下是关于她的照片和视频。</p>
            {/* 照片展示 */}
            <div style={{ marginBottom: '20px' }}>
                <h2>露比的照片</h2>
                <img 
                    src="public\img\2df743cddb003197a05d2b91d40222da.jpg" // 替换成实际露比照片的地址，本地的话可以是 'public/img/rubys_photo.jpg' 等合适路径
                    alt="露比的照片" 
                    style={{ maxWidth: '100%', height: 'auto' }} 
                />
            </div>
            {/* 视频展示 */}
            <div>
                <h2>露比的视频</h2>
                <video 
                    src="public\img\9b814ab13d9f4db0ba281ae3dd5e3192.mp4" // 替换成实际露比视频的地址，本地路径类似上面照片的写法
                    controls 
                    style={{ maxWidth: '100%' }} 
                >
                    您的浏览器不支持视频播放，请更换浏览器尝试。
                </video>
            </div>
        </div>
    );
};

export default RubyIntroduction;
