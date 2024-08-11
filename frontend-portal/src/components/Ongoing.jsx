import React from 'react';


const Ongoing = () => {
  return (
    <section className="bg-primary">
      <div className="flex-grow flex flex-col items-center justify-start text-center pt-40 text-tertiary">
        <h1 className="text-4xl font-bold font-poppins">
          Hey <span className="text-secondary">Chathumi</span>
        </h1>
        <h2 className="text-4xl mt-4 font-bold font-poppins">Welcome</h2>
        <h2 className="text-xl mt-2 font-bold font-poppins">to our</h2>
        <h2 className="text-4xl font-bold font-poppins">X portal</h2>

        <h3 className="text-lg mt-6">Ongoing</h3>
        <div className="w-full flex justify-center mt-4">
          <div className="w-2/4 h-4 bg-gray-300 rounded-full overflow-hidden">
            <div className="animate-loadingBar bg-secondary h-full"></div>
          </div>
        </div>
        <h3 className="text-lg mt-6">ATS Research</h3>
      </div>
    </section>
  );
};

export default Ongoing;