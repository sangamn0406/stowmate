import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Scientific Officer',
      bio: 'Former NASA logistics specialist with 15 years of experience in space mission planning.',
      image: '/placeholder.svg?height=200&width=200'
    },
    {
      name: 'Marcus Johnson',
      role: 'Lead Engineer',
      bio: 'Aerospace engineer specializing in cargo optimization algorithms and space-grade materials.',
      image: '/placeholder.svg?height=200&width=200'
    },
    {
      name: 'Dr. Aisha Patel',
      role: 'AI Research Director',
      bio: 'Pioneer in applying machine learning to complex logistics problems in extreme environments.',
      image: '/placeholder.svg?height=200&width=200'
    },
    {
      name: 'Carlos Rodriguez',
      role: 'UX Director',
      bio: 'Expert in creating intuitive interfaces for mission-critical applications.',
      image: '/placeholder.svg?height=200&width=200'
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[#1A237E] mb-4">About StowMate</h1>
          <p className="text-xl text-[#607D8B] max-w-3xl mx-auto">
            Pioneering the future of space logistics with intelligent cargo management solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#1A237E] mb-4">Our Mission</h2>
            <p className="text-[#212121] mb-4">
              At StowMate, we're dedicated to solving one of the most complex challenges in space exploration: 
              optimizing cargo storage and management for long-duration missions.
            </p>
            <p className="text-[#212121]">
              Our intelligent cargo management system combines advanced algorithms, machine learning, and 
              human-centered design to maximize storage efficiency, minimize risks, and ensure mission success.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#1A237E] mb-4">Our Vision</h2>
            <p className="text-[#212121] mb-4">
              We envision a future where space missions of any duration and distance can be supported by 
              intelligent, adaptive cargo management systems that evolve with the needs of the mission.
            </p>
            <p className="text-[#212121]">
              By removing logistical barriers to long-term space exploration, we aim to accelerate humanity's 
              journey to becoming a multi-planetary species.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#1A237E] mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 * index + 0.8 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img 
                  src={member.image || "/placeholder.svg"} 
                  alt={member.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1A237E]">{member.name}</h3>
                  <p className="text-[#FF6D00] font-medium mb-2">{member.role}</p>
                  <p className="text-[#607D8B]">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="bg-[#1A237E] text-white rounded-lg shadow-lg p-8 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Join Our Mission</h2>
          <p className="mb-6 max-w-3xl mx-auto">
            We're always looking for talented individuals passionate about space exploration and 
            pushing the boundaries of what's possible in logistics and cargo management.
          </p>
          <button className="bg-[#FF6D00] text-white px-6 py-3 rounded-md hover:bg-[#FF8F00] transition-colors">
            View Open Positions
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
