import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Hhhha from './Wfy/Hhhha';
import Hhhh from './Hch/Hhhh';
import Hhh from './Lhq/Hhh';
import Hh from './Lyt/Hh';

const App = () => {
  const menuItems = [
    { label: '韦凤莹', link: '/Hhhha' },
    { label: '黄城红', link: '/Hhhh' },
    { label: '刘慧琦', link: '/Hhh' },
    { label: '林玉婷', link: '/Hh' },
  ];
  return (
    <Router>
      <div>
        <Sidebar title="菜单" menuItems={menuItems} /> {/* 传递属性 */}
        <Routes>
          <Route path="/Hhhha" element={<Hhhha />} />
          <Route path="/Hhhh" element={<Hhhh />} />
          <Route path="/Hhh" element={<Hhh />} />
          <Route path="/Hh" element={<Hh />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;