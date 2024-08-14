import React from "react";
import hero from "../assets/hero.png";
import { FaAngleDown } from "react-icons/fa";

const Ongoing = ({ name, currentTask }) => {
  return (
    <>
    
    <section className="flex h-screen">
      {/* Left Side */}
      <div className="flex flex-col justify-self-start justify-center w-2/3 text-tertiary pl-10">
        <h2 className="text-6xl font-bold mb-4 leading-tight text-left">
          <span>
            View your <span className="text-secondary">DreamShift</span>
          </span>
          <br />
          <span>Project Progress</span>
        </h2>

        <p className="text-xl font-semibold mb-8 text-left">
          <span>
            Contact us for any further information.
          </span>
        </p>
        
       
        <svg
          className="animate-bounce w-24 h-24 text-yellow-500 mt-4 text-5xl justify-center hover:cursor-pointer " 
        >
          <FaAngleDown/>
        </svg>
      </div>

      {/* Right Side */}
      <div className="w-1/3 h-full flex items-center justify-center">
        <img
          src={hero}
          alt="Project progress"
          className="w-3/4 h-auto object-contain"
        />
       
      </div>
      
    </section>
    </>
  );
};

export default Ongoing;