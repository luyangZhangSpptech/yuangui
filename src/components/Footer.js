import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Simple footer component displayed across all pages. Contains copyright
 * information and secondary navigation links for convenience.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-2">© {currentYear} NeZha Academy. All rights reserved.</p>
        <div className="space-x-4">
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/programs" className="hover:underline">Programs</Link>
          <Link to="/community" className="hover:underline">Community</Link>
          <Link to="/faq" className="hover:underline">FAQ</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;