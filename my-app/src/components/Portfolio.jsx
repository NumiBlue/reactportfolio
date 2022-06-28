import React from "react";
import WorkImg from "./assets/Pomodorian.jpg"
import SprayCan from ".assets/SprayCan.png"

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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
{/* Grid Item */}
<div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
{/* Hover Effects */}
<div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Pomodorian Application 
              </span>
              <div className='pt-8 text-center'>
                <a href='https://dieterichelizabeth.github.io/project-mixtape-pivot/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/dieterichelizabeth/project-mixtape-pivot/tree/ciara'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
        </div>
      </div>

      <div
            style={{ backgroundImage: `url(${SprayCan})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Graffiti Social Media Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://enigmatic-cliffs-72783.herokuapp.com'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/jonathanprill/spray-can-project-2'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>

    </div>
    </div>
    </div>
    </div>
  );
};

export default Portfolio;
