import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div 
      className="card hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-[#1A237E] dark:bg-[#303F9F] text-white rounded-full mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-[#1A237E] dark:text-[#5C6BC0]">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
