import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className='bg-black text-white px-4 py-2 md:px-16 lg:px-24'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='hidden md:flex flex-col text-left'>
          <div className='text-lg md:text-2xl font-bold'>Soumya Ranjan</div>
          <div className='text-sm md:text-lg'>Phone: +91 6371763209</div>
          <div className='text-sm md:text-lg'>Email: soumyaranjan@example.com</div>
        </div>

        <div className='space-x-2 md:space-x-5 text-sm md:text-base'>
          <Link to="/" className='hover:text-gray-600'>Home</Link>
          <Link to="/about" className='hover:text-gray-400'>About</Link>
          <Link to="/service" className='hover:text-gray-400'>Services</Link>
          <Link to="/projects" className='hover:text-gray-400'>Projects</Link>
          <Link to="/skills" className='hover:text-gray-400'>Skills</Link>
          <Link to="/contact" className='hover:text-gray-400'>Contact</Link>
        </div>

        {/* Connect Button (visible on all screen sizes, adjusted for mobile) */}
        <button
          onClick={() => navigate('/contact')}
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 md:px-6 md:py-2 rounded-full text-xs md:text-base transition-transform duration-300 hover:scale-105'>
          Connect Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
