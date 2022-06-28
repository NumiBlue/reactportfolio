import React from "react";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="w-full md:h-screen text-black  bg-[#fbe1f0]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-black border-indigo-800">
            Portfolio
          </p>
          <p className="py-6 text-indigo-800">
            Here are some of my recent projects. Some are individual, some are the work of a group. On all group projects, I have functioned as the Project Manager.
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"></div>
      </div>
    </div>
  );
};

export default Portfolio;
