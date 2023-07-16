import React from 'react';
import backgroundImage from '../assets/https:/photo-1561954791-05d64ce8460f.webp';
import { FaLinkedinIn } from 'react-icons/fa';
import Typed from 'react-typed';



const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
      {/* Container */}
      <div style={{backgroundImage: `url(${backgroundImage})`}}
       className='bg-cover flex flex-col justify-center text-left h-full'>
        <br />
        <br />
        <p className='pl-40 ml-8 max-w-[1000px] px-8 text-amber-100'>Hello, my name is</p>
        <h1 className='pl-40 ml-8 max-w-[1000px] px-8 text-4xl sm:text-7xl underline decoration-dotted font-bold text-orange-50'>Ciara Hargis</h1>
        <h2 className='pl-40 ml-8 max-w-[1000px] px-8 text-4xl sm:text-7xl font-bold text-amber-100'>I'm a</h2>
        <Typed
          className='pl-40 ml-8 max-w-[1000px] px-8 text-4xl sm:text-7xl font-bold text-amber-100'
          strings={['Full Stack Developer.']} 
          typeSpeed={120} 
          backSpeed={140} 
          loop
        />
        <p className='pl-40 ml-8 px-8 text-amber-100 py-4 max-w-[500px]'>Hi! I'm a full-stack MERN developer and freelance web developer. I'm focusing on perfecting my skills and expanding my clientele.</p>
        <div>
          <a href="https://www.linkedin.com/in/hargisciara/" className='mr-4'>
            <FaLinkedinIn className='text-2xl' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
