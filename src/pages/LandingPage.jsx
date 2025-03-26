import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiPackage, FiTrendingUp, FiShield, FiCpu } from 'react-icons/fi';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import AnimatedCounter from '../components/AnimatedCounter';

const LandingPage = () => {
  const features = [
    {
      icon: <FiPackage size={24} />,
      title: 'Intelligent Stowage',
      description: 'Optimize cargo placement with AI-driven algorithms that consider mass distribution, accessibility, and mission requirements.'
    },
    {
      icon: <FiTrendingUp size={24} />,
      title: 'Real-time Monitoring',
      description: 'Track cargo status, location, and environmental conditions throughout the mission lifecycle.'
    },
    {
      icon: <FiShield size={24} />,
      title: 'Risk Mitigation',
      description: 'Identify potential hazards and conflicts before they occur with predictive analytics and simulation.'
    },
    {
      icon: <FiCpu size={24} />,
      title: 'Mission Integration',
      description: 'Seamlessly integrate with existing mission planning systems and workflows.'
    }
  ];

  const testimonials = [
    {
      quote: "StowMate revolutionized our cargo management process, saving us countless hours and improving mission safety.",
      author: "Dr. Sarah Chen",
      role: "Logistics Director",
      company: "SpaceX",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      quote: "The simulation capabilities allowed us to optimize our payload configuration and identify potential issues before launch.",
      author: "James Wilson",
      role: "Mission Specialist",
      company: "NASA",
      image: "https://randomuser.me/api/portraits/men/42.jpg"
    },
    {
      quote: "An indispensable tool for modern space logistics. The intuitive interface makes complex cargo planning accessible.",
      author: "Elena Rodriguez",
      role: "Operations Manager",
      company: "Blue Origin",
      image: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  ];

  const stats = [
    { value: 98, suffix: '%', label: 'Cargo Optimization' },
    { value: 500, suffix: '+', label: 'Missions Supported' },
    { value: 10000, suffix: '+', label: 'Items Tracked' },
    { value: 30, suffix: '%', label: 'Time Saved' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#1A237E]/90 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
            alt="Space background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Intelligent Cargo Management for Space Missions
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Optimize stowage, enhance safety, and streamline logistics for your space missions with our advanced AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/features" className="btn-accent">
                Explore Features
              </Link>
              <Link to="/simulation" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-2 px-6 rounded-md transition-all duration-300">
                Try Simulation
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="animate-bounce"
          >
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Key Features</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              StowMate provides cutting-edge tools to optimize your space mission logistics and cargo management.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#1A237E] dark:bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <AnimatedCounter 
                  end={stat.value} 
                  suffix={stat.suffix} 
                  duration={2000} 
                />
                <p className="text-gray-300 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">How StowMate Works</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#1A237E] dark:bg-[#303F9F] text-white font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#1A237E] dark:text-[#5C6BC0]">Input Mission Parameters</h3>
                  <p className="text-gray-600 dark:text-gray-300">Define your mission requirements, cargo inventory, and constraints.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#1A237E] dark:bg-[#303F9F] text-white font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#1A237E] dark:text-[#5C6BC0]">AI-Powered Optimization</h3>
                  <p className="text-gray-600 dark:text-gray-300">Our algorithms analyze thousands of possible configurations to find the optimal solution.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#1A237E] dark:bg-[#303F9F] text-white font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#1A237E] dark:text-[#5C6BC0]">Interactive Simulation</h3>
                  <p className="text-gray-600 dark:text-gray-300">Visualize and fine-tune the proposed stowage plan in our 3D environment.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#1A237E] dark:bg-[#303F9F] text-white font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#1A237E] dark:text-[#5C6BC0]">Mission Integration</h3>
                  <p className="text-gray-600 dark:text-gray-300">Export detailed plans and integrate with your mission control systems.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link to="/technology" className="btn-primary">
                Learn More About Our Technology
              </Link>
            </div>
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
                alt="StowMate in action" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#FF6D00] text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold">Increase efficiency by up to 30%</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Trusted by leading space agencies and private aerospace companies.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                image={testimonial.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom">
        <div className="bg-[#1A237E] dark:bg-gray-800 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Optimize Your Space Mission?
              </h2>
              <p className="text-gray-200 mb-8">
                Join leading aerospace organizations that trust StowMate for their cargo management needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/simulation" className="btn-accent">
                  Try Simulation Demo
                </Link>
                <Link to="/contact" className="bg-white text-[#1A237E] hover:bg-gray-100 font-bold py-2 px-6 rounded-md transition-all duration-300">
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                alt="Space" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
