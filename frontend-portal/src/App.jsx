import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Loading from './components/Loading';
import PortalBegin from './components/PortalBegin';

import Home from './pages/Home';

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    
      <BrowserRouter>
        
       
          <Routes>
            <Route path="/" element={showLoading ? <Loading /> : <Navigate to="/portalbegin" />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/portalbegin" element={<PortalBegin userName="UserName" />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        
      </BrowserRouter>
    
  );
}

export default App;