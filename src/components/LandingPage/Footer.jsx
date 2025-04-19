// src/components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const links = [
    { name: 'Wellness Tracking', path: '/wellness-tracking' },
    { name: 'Work-life Balance', path: '/work-life-balance' },
    { name: 'Mental Health Support', path: '/mental-health' },
    { name: 'Reminders', path: '/reminders' }
  ];

  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 mb-4 md:mb-0">
            {links.map((link, index) => (
              <Link 
                key={index} 
                to={link.path} 
                className="text-gray-800 hover:text-green-700 font-medium transition duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center text-gray-600 text-sm">
          © 2025 Wellness Buddy | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;