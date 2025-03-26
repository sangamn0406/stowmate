import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Technology', path: '/technology' },
    { name: 'Simulation', path: '/simulation' },
    { name: 'Mission Planner', path: '/mission-planner' },
    { name: 'About Us', path: '/about' },
    { name: 'Insights', path: '/blog' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div 
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 14L12 18L3 14V10L12 6L21 10V14Z" stroke={darkMode ? "#5C6BC0" : "#1A237E"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V18" stroke={darkMode ? "#5C6BC0" : "#1A237E"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 10L12 14L21 10" stroke={darkMode ? "#5C6BC0" : "#1A237E"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            <span className="font-bold text-xl text-[#1A237E] dark:text-[#5C6BC0]">StowMate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-[#FF6D00]'
                    : 'text-[#212121] dark:text-gray-200 hover:text-[#FF6D00] dark:hover:text-[#FF9E40]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FiSun className="text-yellow-400" />
              ) : (
                <FiMoon className="text-[#1A237E]" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FiSun className="text-yellow-400" />
              ) : (
                <FiMoon className="text-[#1A237E]" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="text-[#212121] dark:text-white hover:text-[#FF6D00] dark:hover:text-[#FF9E40]"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900"
      >
        <div className="px-4 py-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block py-2 px-3 rounded-md text-base font-medium ${
                location.pathname === link.path
                  ? 'bg-[#1A237E] text-white dark:bg-[#303F9F]'
                  : 'text-[#212121] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
