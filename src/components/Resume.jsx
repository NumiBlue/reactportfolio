import React from 'react';
import {  FaLinkedinIn } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-indigo-800 text-white">
      <div>
        <a href="/" className="text-2xl font-bold">My Portfolio</a>
      </div>
      <div>
        <a href="/" className="mr-4"><FaLinkedinIn className="text-2xl" /></a>
      </div>
    </nav>
  );
};

export default Navbar;
