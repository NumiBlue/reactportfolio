import React from 'react';
import backgroundImage from '../assets/wes-hicks-G2W_8eagxNQ-unsplash-2.jpg';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typed from 'react-typed';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
    {/* Container */}
    <div style={{backgroundImage: `url(${backgroundImage})`}}
    className='bg-cover flex flex-col justify-center text-left h-full'>
      <br></br>
      <br></br>
      <p className='pl-40 ml-8 max-w-[1000px] px-8 text-black'>Hello, my name is</p>
      <h1 className='pl-40 ml-8 max-w-[1000px] px-8 text-4xl sm:text-7xl font-bold text-indigo-800'>Ciara Hargis</h1>
        <h2 className='pl-40 ml-8 max-w-[1000px] px-8 text-4xl sm:text-7xl font-bold text-red-500'> I'm a Full Stack</h2>
        <Typed
        className='pl-40 ml-8 max-w-[1000px] px-8 text-4xl sm:text-7xl font-bold text-red-700'
        strings={['Developer.']} 
        typeSpeed={120} 
        backSpeed={140} 
        loop
        />
        <p className='pl-40 ml-8 px-8 text-black py-4 max-w-[500px]'> Hi! I'm a full-stack MERN developer and free-lance web developer. I'm focusing on perfecting my skills and expanding my clientele. </p>
        <div>
          <button className='text-black group px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home 