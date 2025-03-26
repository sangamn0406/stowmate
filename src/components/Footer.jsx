import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#1A237E] dark:bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 14L12 18L3 14V10L12 6L21 10V14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 10L12 14L21 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-bold text-xl">StowMate</span>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Intelligent Cargo Management for Space Missions
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub className="text-white hover:text-[#FF6D00] transition-colors duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FiTwitter className="text-white hover:text-[#FF6D00] transition-colors duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin className="text-white hover:text-[#FF6D00] transition-colors duration-300" />
              </a>
              <a href="mailto:info@stowmate.com" aria-label="Email">
                <FiMail className="text-white hover:text-[#FF6D00] transition-colors duration-300" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link to="/features" className="text-gray-300 hover:text-white transition-colors duration-300">Features</Link></li>
              <li><Link to="/technology" className="text-gray-300 hover:text-white transition-colors duration-300">Technology</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Tools</h3>
            <ul className="space-y-2">
              <li><Link to="/simulation" className="text-gray-300 hover:text-white transition-colors duration-300">Simulation Dashboard</Link></li>
              <li><Link to="/mission-planner" className="text-gray-300 hover:text-white transition-colors duration-300">Mission Planner</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-300">Insights</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic text-gray-300">
              <p>123 Space Center Blvd</p>
              <p>Houston, TX 77058</p>
              <p className="mt-2">info@stowmate.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} StowMate. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
