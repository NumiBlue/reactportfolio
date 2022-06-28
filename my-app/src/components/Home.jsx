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
      <p className='pl-40 ml-8 max-w-[1000px] px-8 text-white'>Hello, my name is</p>
      <h1 className='pl-40 ml-8 max-w-[1000px] px-8 text-4xl sm:text-7xl font-bold text-indigo-800'>Ciara Hargis</h1>
        <h2 className='pl-40 ml-8 max-w-[1000px] px-8 text-4xl sm:text-7xl font-bold text-yred-500'> I'm a Full Stack</h2>
        <Typed
        className='pl-40 ml-8 max-w-[1000px] px-8 text-4xl sm:text-7xl font-bold text-yellow-600'
        strings={['Developer.']} 
        typeSpeed={120} 
        backSpeed={140} 
        loop
        />
    </div>
      </div>
)
}

export default Home 