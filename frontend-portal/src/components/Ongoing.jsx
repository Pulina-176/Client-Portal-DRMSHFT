import React from "react";
import hero from "../assets/hero.png";
import { FaAngleDown } from "react-icons/fa";

const Ongoing = ({ name, currentTask }) => {
  return (
    <>
    
    <section className="flex flex-col md:flex-row h-screen  -mb-22">
     
      <div className="flex flex-col justify-center w-full md:w-2/3 text-tertiary px-4 md:pl-10">
        <h2 className="text-center md:text-start text-4xl sm:text-5xl md:text-6xl font-bold mb-2 leading-tight mt-16">
          <span>
            View your</span><br className="md:hidden" /> <span className="text-secondary">DreamShift&nbsp;</span>
            <br className="hidden md:block" />
            <br className="sm:hidden" />
            <span>Project&nbsp;</span>
            <br className="hidden sm:block md:hidden" />
            <span>Progress</span>
        
          
        </h2>

        <p className="text-center md:text-start text-xl font-semibold mb-8">
          <span>
            Contact us for any further information.
          </span>
        </p>
        
        <div className="flex justify-center md:justify-start">
        <svg
          className="animate-bounce w-20 h-20 text-yellow-500 mt-4 text-5xl justify-center hover:cursor-pointer " 
        >
          <FaAngleDown/>
        </svg>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/3  flex items-center justify-center sm:pt-8 md:pt-2 lg:pt-0">
        <img
          src={hero}
          alt="Project progress"
          className="w-2/4 sm:w-2/5 md:w-3/4 h-auto object-contain "
        />
       
      </div>
      
    </section>
    </>
  );
};

export default Ongoing;