import React from 'react';
import { motion } from 'framer-motion';

const TechnologyPage = () => {
  const technologies = [
    {
      title: 'Artificial Intelligence',
      description: 'Our proprietary AI algorithms optimize cargo placement by analyzing thousands of possible configurations in seconds.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: '3D Visualization Engine',
      description: 'Interactive 3D models allow for detailed inspection and manipulation of cargo placement.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: 'Physics-Based Simulation',
      description: 'Accurate physics models ensure that cargo placement accounts for real-world forces and constraints.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Machine Learning',
      description: 'Our system learns from past missions to continuously improve cargo optimization recommendations.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Real-time Data Processing',
      description: 'Process and analyze mission data in real-time to provide immediate insights and alerts.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Secure, scalable cloud architecture ensures reliable access to your mission data from anywhere.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    }
  ];

  const techStack = [
    { name: 'React.js', category: 'Frontend', description: 'Component-based UI library for building interactive interfaces' },
    { name: 'Tailwind CSS', category: 'Styling', description: 'Utility-first CSS framework for rapid UI development' },
    { name: 'Framer Motion', category: 'Animation', description: 'Production-ready motion library for React' },
    { name: 'Chart.js', category: 'Visualization', description: 'JavaScript charting library for data visualization' },
    { name: 'Three.js', category: '3D Rendering', description: 'JavaScript 3D library for creating WebGL-based 3D graphics' },
    { name: 'TensorFlow.js', category: 'AI/ML', description: 'Machine learning framework for JavaScript applications' },
    { name: 'Node.js', category: 'Backend', description: 'JavaScript runtime for building server-side applications' },
    { name: 'MongoDB', category: 'Database', description: 'NoSQL database for storing mission and cargo data' },
    { name: 'WebSockets', category: 'Real-time', description: 'Protocol for real-time, bidirectional communication' },
    { name: 'WebGL', category: 'Graphics', description: 'JavaScript API for rendering 3D graphics in browsers' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-[#1A237E] dark:bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Technology
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Powered by cutting-edge technologies to deliver intelligent cargo management solutions for space missions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Core Technologies
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The innovative technologies that power StowMate's intelligent cargo management platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div 
              key={index}
              className="card hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-[#1A237E] dark:text-[#5C6BC0] mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1A237E] dark:text-[#5C6BC0]">{tech.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              How Our Technology Works
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              A deeper look at the technological processes that drive StowMate's capabilities.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[#1A237E] dark:bg-[#303F9F]"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Item 1 */}
                <motion.div 
                  className="relative flex flex-col md:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1 md:text-right md:pr-8 pb-8 md:pb-0">
                    <h3 className="text-xl font-bold text-[#1A237E] dark:text-[#5C6BC0]">Data Collection & Processing</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Mission parameters, cargo specifications, and constraints are collected and processed through our secure data pipeline.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#FF6D00] text-white">
                    1
                  </div>
                  <div className="flex-1 md:pl-8 md:mt-0"></div>
                </motion.div>
                
                {/* Item 2 */}
                <motion.div 
                  className="relative flex flex-col md:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1 md:text-right md:pr-8 md:hidden"></div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#FF6D00] text-white">
                    2
                  </div>
                  <div className="flex-1 md:pl-8">
                    <h3 className="text-xl font-bold text-[#1A237E] dark:text-[#5C6BC0]">AI Analysis & Optimization</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Our AI algorithms analyze the data to generate optimal cargo placement strategies, considering multiple constraints simultaneously.
                    </p>
                  </div>
                </motion.div>
                
                {/* Item 3 */}
                <motion.div 
                  className="relative flex flex-col md:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1 md:text-right md:pr-8">
                    <h3 className="text-xl font-bold text-[#1A237E] dark:text-[#5C6BC0]">3D Visualization Rendering</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Optimized cargo configurations are rendered in our 3D visualization engine, allowing for interactive exploration and adjustment.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#FF6D00] text-white">
                    3
                  </div>
                  <div className="flex-1 md:pl-8 md:mt-0"></div>
                </motion.div>
                
                {/* Item 4 */}
                <motion.div 
                  className="relative flex flex-col md:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1 md:text-right md:pr-8 md:hidden"></div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#FF6D00] text-white">
                    4
                  </div>
                  <div className="flex-1 md:pl-8">
                    <h3 className="text-xl font-bold text-[#1A237E] dark:text-[#5C6BC0]">Physics-Based Validation</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Proposed configurations undergo rigorous physics-based simulations to ensure they meet all safety and performance requirements.
                    </p>
                  </div>
                </motion.div>
                
                {/* Item 5 */}
                <motion.div 
                  className="relative flex flex-col md:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1 md:text-right md:pr-8">
                    <h3 className="text-xl font-bold text-[#1A237E] dark:text-[#5C6BC0]">Continuous Learning</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Our machine learning models continuously improve based on feedback and real mission data, enhancing future recommendations.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#FF6D00] text-white">
                    5
                  </div>
                  <div className="flex-1 md:pl-8 md:mt-0"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Tech Stack
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The powerful technologies that form the foundation of the StowMate platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <motion.div 
              key={index}
              className="card hover:shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col">
                <div className="bg-[#1A237E]/10 dark:bg-[#303F9F]/20 px-3 py-1 rounded-full text-xs font-medium text-[#1A237E] dark:text-[#5C6BC0] self-start mb-2">
                  {tech.category}
                </div>
                <h3 className="text-lg font-bold text-[#1A237E] dark:text-[#5C6BC0] mb-2">{tech.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Research & Development */}
      <section className="bg-[#1A237E] dark:bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Research & Development</h2>
              <p className="text-gray-200 mb-6">
                Our dedicated R&D team continuously explores new technologies and methodologies to enhance StowMate's capabilities.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#FF6D00] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">Advanced AI Algorithms</h3>
                    <p className="text-gray-300">Developing next-generation optimization algorithms for even more efficient cargo placement.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#FF6D00] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">VR/AR Integration</h3>
                    <p className="text-gray-300">Exploring virtual and augmented reality interfaces for more intuitive cargo management.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#FF6D00] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">Quantum Computing</h3>
                    <p className="text-gray-300">Researching quantum algorithms for solving complex optimization problems at unprecedented speeds.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Research and Development" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom">
        <div className="bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden">
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] dark:text-[#5C6BC0] mb-4">
              Want to Learn More About Our Technology?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Download our technical whitepaper or schedule a consultation with our engineering team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn-primary">
                Download Whitepaper
              </button>
              <button className="btn-secondary">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;
