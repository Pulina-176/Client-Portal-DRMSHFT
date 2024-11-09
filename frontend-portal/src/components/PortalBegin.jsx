import React from 'react';
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';

const PortalBegin = ({ userName, fullProjectName }) => {
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    const currentUrl = window.location.pathname; // Get the current URL path
    navigate(`${currentUrl}/c`); // Navigate to /c appended to the current URL
  }
  const firstWord = userName

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-tertiary ">
      <img 
        src={logo} 
        alt="Company Logo" 
        className="h-48 sm:h-50 md:h-64  p-6" 
      />
      
      <div className="text-center mt-2">
      <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold font-poppins">
          Hi <span className="text-secondary">{firstWord}!</span>
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-4xl mt-2 font-bold font-poppins">Welcome to Dreamshift <span className="block sm:hidden"> Client Portal</span><span className="hidden sm:inline">Client Portal</span></h2>
        <a
  className="hover:cursor-pointer mt-10 group text-semibold relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-secondary focus:outline-none  active:text-secondary hover:text-primary hover:bg-secondary"
  
>
  <span className="absolute -end-full transition-all group-hover:end-4">
    <svg
      className="size-5 rtl:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>

  <span className="text-sm font-medium transition-all group-hover:me-4 " onClick={handleNavigate} > See Project Progress </span>
</a>

      </div>
    </div>
  );
}

export default PortalBegin;