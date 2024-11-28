import React from "react";
import hero from "../assets/hero.png";
import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Ongoing = ({ userName, currentTask }) => {
  const navigate = useNavigate();
  const firstWord = userName;
  const handleNavigate = () => {
    navigate("/process")
  }
  return (
    <>
      <section className="flex flex-col md:flex-row h-screen -mb-22 md:px-[20px] lg:px-[50px] xl:px-[150px]">
        <div className="flex flex-col gap-[10px] justify-center w-full md:w-2/3 text-tertiary px-4 md:pl-10 ">
          <h2 className="text-center md:text-start text-4xl sm:text-5xl md:text-6xl font-bold mb-2 leading-tight mt-16 lg:mt-10">
            <div className="md:hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                Hi <span className="text-secondary">{firstWord}!</span>
              </h1>
              
              <span className="text-xl sm:text-2xl md:text-3xl">  View your </span>
              <p className="text-secondary text-xl sm:text-2xl md:text-3xl md:pt-8 lg:pt-12">
                DreamShift&nbsp;
              </p>

              <p className="text-xl sm:text-2xl md:text-3xl md:mt-8 lg:mt-[100px] lg:pt-[40px]">
                Project Progress
              </p>
            </div>

            <div className="hidden xl:flex flex-col gap-5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                Hi <span className="text-secondary">{firstWord}!</span>
              </h1>
              <h1 className="text-xl sm:text-2xl md:text-3xl">
                View your <span className="text-secondary">DreamShift</span>
              </h1>
              <h1 className="text-xl sm:text-2xl md:text-3xl">Project Progress</h1>
            </div>

            <div className="hidden md:block xl:hidden flex-col gap-5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                Hi <span className="text-secondary">{firstWord}!</span>
              </h1>
              <h1 className="text-4xl sm:text-2xl md:text-3xl mt-6">View your <span className="text-secondary">DreamShift</span> Project Progress</h1>
            </div>
          </h2>


          <p className="text-center md:text-start sm:text-sm md:text-lg lg:text-xl font-semibold mb-8 ">
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
          <FaAngleDown onClick={handleNavigate} className="animate-bounce w-20 h-20 text-yellow-500 mt-4 text-5xl hover:cursor-pointer" />
        </div>
      </section>
    </>
  );
};

export default Ongoing;
