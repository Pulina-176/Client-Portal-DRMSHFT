import React, { useState, useEffect }  from 'react';

import logo1 from "../assets/logo1.png";
import { Link } from 'react-router-dom';
import '../App.css';

const PortalHeader = () => {
  const [showHeader, setShowHeader] = useState(true);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        
        setShowHeader(false);
      } else {
        
        setShowHeader(true);
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    
    <header
      className={`fixed top-4 left-2 w-full flex justify-between items-center p-0 bg-primary text-white h-24 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center">
        <img src={logo1} alt="Logo" className="h-20 w-auto" />
      </div>
      <span class="relative flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
</span>
    </header>
    
  

  
 

 
  
  );
}

export default PortalHeader;