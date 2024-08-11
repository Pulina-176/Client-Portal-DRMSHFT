import React from 'react';
import logo from "../assets/logo.png";
import '../App.css';

const PortalBegin = ({ userName }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary text-tertiary">
      <img src={logo} alt="Company Logo" className="logo" />
      <div className="text-center mt-4 ">
        <h1 className="text-3xl text-tertiary">Hey {userName}</h1>
        <h2 className="text-xl mt-2 text-tertiary">Welcome to our X portal</h2>
      </div>
    </div>
  );
}

export default PortalBegin;