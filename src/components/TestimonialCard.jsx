import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, author, role, company, image, delay = 0 }) => {
  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 relative">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src={image || "/placeholder.svg"} alt={author} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-[#FF6D00] text-white p-1 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.021A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <p className="italic text-gray-600 dark:text-gray-300 mb-4">"{quote}"</p>
        <div>
          <h4 className="font-bold text-[#1A237E] dark:text-[#5C6BC0]">{author}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
