import React from 'react';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import Sidebar from './Sidebar';
import Hhhha from './Wfy/Hhhha';

const App = () => {
  const menuItems = [
    { label: '韦凤莹', link: '/Hhhha' },
   
  ];
  return (
    <Router>
      <div>
        <Sidebar title="菜单" menuItems={menuItems} /> {/* 传递属性 */}
        <Routes>
          <Route path="Hhhha" element={<Hhhha />} />
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;