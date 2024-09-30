import React from 'react'
import logo1 from "../assets/logo1.png";

const Navbar = () =>  {
     return (
    <div className="py-[24px]">
      <nav className="py-[16px] fixed top-0 left-0 w-full bg-addprim z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-start">
              <div className="flex flex-shrink-0 items-center ">
                <img className="h-12 w-auto" src={logo1} alt="Your Company" />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
              <div className="relative ml-3">
                
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar