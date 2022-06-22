import React from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-indigo-800 via bg-red-800 to bg-yellow-600 text-gray-300'>

      {/* menu */}
    <div>
      <ul className='flex'>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </div>

    {/* hamburger */}
    <div className='hidden'>
      <FaBars />
    </div>
    {/* mobile menu */}
    <ul className='hidden'>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>

    </div>
  );
};

export default Navbar; 