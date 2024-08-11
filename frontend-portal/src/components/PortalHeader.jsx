import React, { useState, useEffect }  from 'react';

import logo from '../assets/logo.svg'; 
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
        <img src={logo} alt="Logo" className="h-20 w-auto" />
      </div>
      <nav className="flex space-x-4 ml-10">
        <Link to="/tab1"className="text-tertiary hover:text-secondary px-4 py-2 rounded font-bold font-poppins">Overview</Link>
        <Link to="/tab2" className="text-tertiary hover:text-secondary px-4 py-2 rounded font-bold font-poppins">Process</Link>
      </nav>
    </header>
    
  

  
 

 
  
  );
}

export default PortalHeader;