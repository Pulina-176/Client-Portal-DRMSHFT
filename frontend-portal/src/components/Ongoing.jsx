import React from "react";
import hero from "../assets/hero.png";
import { FaAngleDown } from "react-icons/fa";

const Ongoing = ({ name, currentTask }) => {
  return (
    <>
      <section className="flex flex-col md:flex-row h-screen -mb-22 md:px-[20px] lg:px-[50px] xl:px-[150px]">
        <div className="flex flex-col gap-[10px] justify-center w-full md:w-2/3 text-tertiary px-4 md:pl-10 ">
          <h2 className="text-center md:text-start text-4xl sm:text-5xl md:text-6xl font-bold mb-2 leading-tight mt-16 lg:mt-10">
            <div className="  md:hidden ">
              <span>View your </span>
              <br className="md:hidden" />
              <span className="text-secondary pt-[5px] md:pt-8 lg:pt-12">DreamShift&nbsp;</span>
              <br className="hidden md:block" />
              <br className="sm:hidden" />
              <span className="md:mt-8 lg:mt-[100px] lg:pt-[40px]">Project&nbsp;</span>
              <br className="hidden sm:block md:hidden" />
              <span>Progress</span>
            </div>
            <div className=" hidden  xl:flex  flex-col gap-5">
              <h1>View your <span className="text-secondary">DreamShift</span></h1>
              <h1>Project Progress</h1>

            </div>
            <div className=" hidden md:block xl:hidden flex-col gap-5">
              <h1>View your </h1>
              <h1 className="text-secondary">DreamShift</h1>
              <h1>Project Progress</h1>

            </div>
          </h2>

          <p className="text-center md:text-start text-xl font-semibold mb-8 pt-6">
            <span>Contact us for any further information.</span>
          </p>

          <div className="flex justify-center md:justify-start hidden md:block">
            <FaAngleDown className="animate-bounce w-20 h-20 text-yellow-500 mt-4 text-5xl hover:cursor-pointer" />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/3 flex items-center justify-center sm:pt-8 md:pt-2 lg:pt-0 ">
          <img
            src={hero}
            alt="Project progress"
            className="w-2/4 sm:w-2/5 md:w-3/4 lg:w-[90%] h-auto object-contain"
          />
        </div>

        <div className="flex justify-center md:hidden sm:pt-[50px]">
          <FaAngleDown className="animate-bounce w-20 h-20 text-yellow-500 mt-4 text-5xl hover:cursor-pointer" />
        </div>
      </section>
    </>
  );
};

export default Ongoing;
