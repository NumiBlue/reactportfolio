import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import Logo from '../assets/wes-hicks-G2W_8eagxNQ-unsplash-2.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-indigo-800 via bg-red-800 to bg-yellow-600 text-gray-300'>
      {/* <div>
        <img src={Logo} alt="Logo" style={{width: '350px'}}/>
        </div> */}

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='portfolio' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='resume' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

    {/* hamburger 
     <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div> */}
    {/* mobile menu */}
    <ul className='hidden'>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
     
     {/*social icons*/}
      <div className='hidden'>

      </div>


    </div>
  );
};

export default Navbar; 