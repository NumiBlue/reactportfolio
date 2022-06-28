import React from 'react';
import backgroundImage from '../assets/wes-hicks-G2W_8eagxNQ-unsplash-2.jpg';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
    {/* Container */}
    <div style={{backgroundImage: `url(${backgroundImage})`}}
    className='bg-cover flex flex-col justify-center text-left h-full'></div>
      </div>
)
}

export default Home 