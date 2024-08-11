import React from 'react';
import logo from "../assets/logo.png";

const PortalBegin = ({ userName }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary text-tertiary">
      <img 
        src={logo} 
        alt="Company Logo" 
        className="h-44 p-6 transition-filter duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" 
      />
      
      <div className="text-center mt-2">
      <h1 className="text-4xl font-bold font-poppins">
          Hey <span className="text-secondary">{userName}</span>
        </h1>
        <h2 className="text-4xl mt-2 font-bold font-poppins">Welcome</h2>
        <h2 className="text-xl mt-2 font-bold font-poppins">to our</h2>
        <h2 className="text-4xl font-bold font-poppins">X portal</h2>
      </div>
    </div>
  );
}

export default PortalBegin;
