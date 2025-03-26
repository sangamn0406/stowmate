import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogCard = ({ id, title, excerpt, image, date, author, delay = 0 }) => {
  return (
    <motion.div 
      className="card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="h-48 overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span>{date}</span>
          <span>{author}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-[#1A237E] dark:text-[#5C6BC0]">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>
        <Link 
          to={`/blog/${id}`} 
          className="text-[#FF6D00] hover:text-[#FF9E40] font-medium inline-flex items-center"
        >
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
