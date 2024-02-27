import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from './images/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white flex items-center justify-between px-4 py-2">
      <div className="flex items-center">
        <img src={LogoImage} alt="Logo" className=" h-24 mr-10" /> 
      </div>
      <div className="hidden md:flex flex-grow justify-end items-center space-x-10">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/about" className="mr-4">About</Link>
        <Link to="/team" className="mr-4">Team</Link>
        <Link to="/event">Event</Link>
      </div>
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={toggleMenu}
      >
        ☰
      </button>
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-black text-white py-4 px-2">
          <Link to="/" className="block mb-2">Home</Link>
          <Link to="/about" className="block mb-2">About</Link>
          <Link to="/team" className="block mb-2">Team</Link>
          <Link to="/event" className="block">Event</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;