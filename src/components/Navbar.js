import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Responsive navigation bar component. Displays the site logo and
 * navigation links. On small screens, a hamburger menu toggles the
 * visibility of the nav links.
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold hover:text-gray-200">
          NeZha Academy
        </Link>
        <button className="sm:hidden focus:outline-none" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className={`sm:flex space-x-6 ${isOpen ? 'block' : 'hidden'} sm:block`}> 
          <Link to="/" className="block py-2 hover:text-gray-200" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block py-2 hover:text-gray-200" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/programs" className="block py-2 hover:text-gray-200" onClick={() => setIsOpen(false)}>Programs</Link>
          <Link to="/community" className="block py-2 hover:text-gray-200" onClick={() => setIsOpen(false)}>Community</Link>
          <Link to="/faq" className="block py-2 hover:text-gray-200" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link to="/contact" className="block py-2 hover:text-gray-200" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;