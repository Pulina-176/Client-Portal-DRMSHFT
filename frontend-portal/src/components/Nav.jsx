import React from "react";
import logo1 from "../assets/logo1.png";

const Nav = ({currentTask}) => {
  return (
    <div className="py-[24px]">
      <nav className="py-[16px] fixed top-0 left-0 w-full bg-primary lg:bg-addprim z-50">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
          <div class="relative flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center justify-start">
              <div class="flex flex-shrink-0 items-center ">
              <img 
  className="h-8 w-auto pl-4 sm:h-10 md:h-12 lg:h-16 xl:h-20" 
  src={logo1} 
  alt="Your Company" 
/>

              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
              <div class="relative ml-3">
                <div>
                  <span class="inline-flex items-center justify-center rounded-full border-2 border-green-400 px-4 py-2 text-white text-lg">
                    <span class="relative flex h-3 w-3">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>

                    <p class="whitespace-nowrap text-lg ml-2">Ongoing task: {currentTask.name}</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
