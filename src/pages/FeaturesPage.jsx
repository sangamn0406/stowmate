import React from 'react';
import { motion } from 'framer-motion';
import { FiPackage, FiTrendingUp, FiShield, FiCpu, FiDatabase, FiUsers, FiGlobe, FiLayers, FiAlertCircle, FiClipboard, FiActivity, FiCloud } from 'react-icons/fi';

const FeaturesPage = () => {
  const features = [
    {
      icon: <FiPackage size={24} />,
      title: 'Intelligent Stowage',
      description: 'Our AI algorithms optimize cargo placement based on mass distribution, center of gravity, accessibility requirements, and mission phases.',
      details: [
        'Multi-constraint optimization',
        'Center of gravity balancing',
        'Priority-based placement',
        'Automated conflict resolution'
      ]
    },
    {
      icon: <FiTrendingUp size={24} />,
      title: 'Real-time Monitoring',
      description: 'Track cargo status, location, and environmental conditions throughout the mission lifecycle with comprehensive dashboards and alerts.',
      details: [
        'Live status tracking',
        'Environmental condition monitoring',
        'Customizable alerts and notifications',
        'Historical data analysis'
      ]
    },
    {
      icon: <FiShield size={24} />,
      title: 'Risk Mitigation',
      description: 'Identify potential hazards and conflicts before they occur with predictive analytics and simulation capabilities.',
      details: [
        'Hazard identification',
        'Conflict prediction',
        'What-if scenario testing',
        'Risk assessment reports'
      ]
    },
    {
      icon: <FiCpu size={24} />,
      title: 'Mission Integration',
      description: 'Seamlessly integrate with existing mission planning systems and workflows through our flexible API and data exchange formats.',
      details: [
        'RESTful API integration',
        'Standard data format support',
        'Workflow automation',
        'Third-party system compatibility'
      ]
    },
    {
      icon: <FiDatabase size={24} />,
      title: 'Comprehensive Inventory Management',
      description: 'Maintain detailed records of all cargo items, including specifications, requirements, and handling instructions.',
      details: [
        'Detailed item cataloging',
        'Barcode/RFID integration',
        'Handling instruction management',
        'Inventory forecasting'
      ]
    },
    {
      icon: <FiUsers size={24} />,
      title: 'Collaborative Planning',
      description: 'Enable multiple team members to work together on mission planning with role-based access control and real-time collaboration tools.',
      details: [
        'Multi-user editing',
        'Role-based permissions',
        'Change tracking',
        'Comment and annotation tools'
      ]
    },
    {
      icon: <FiGlobe size={24} />,
      title: 'Mission Timeline Integration',
      description: 'Align cargo management with mission timelines and phases to ensure the right items are accessible at the right time.',
      details: [
        'Phase-based planning',
        'Timeline visualization',
        'Accessibility scheduling',
        'Critical path analysis'
      ]
    },
    {
      icon: <FiLayers size={24} />,
      title: '3D Visualization',
      description: 'Visualize cargo placement in three dimensions with interactive models that allow for detailed inspection and manipulation.',
      details: [
        'Interactive 3D models',
        'Cross-section viewing',
        'VR/AR compatibility',
        'Measurement tools'
      ]
    },
    {
      icon: <FiAlertCircle size={24} />,
      title: 'Compliance Management',
      description: 'Ensure all cargo meets regulatory requirements and mission specifications with automated compliance checking.',
      details: [
        'Regulatory requirement tracking',
        'Compliance verification',
        'Documentation generation',
        'Audit trail maintenance'
      ]
    },
    {
      icon: <FiClipboard size={24} />,
      title: 'Reporting & Analytics',
      description: 'Generate comprehensive reports and analytics to gain insights into cargo utilization, efficiency, and optimization opportunities.',
      details: [
        'Customizable reports',
        'Performance metrics',
        'Trend analysis',
        'Optimization recommendations'
      ]
    },
    {
      icon: <FiActivity size={24} />,
      title: 'Anomaly Detection',
      description: 'Automatically identify unusual patterns or potential issues in cargo data using machine learning algorithms.',
      details: [
        'Pattern recognition',
        'Outlier detection',
        'Predictive maintenance',
        'Early warning system'
      ]
    },
    {
      icon: <FiCloud size={24} />,
      title: 'Secure Cloud Platform',
      description: 'Access your mission data securely from anywhere with our cloud-based platform, featuring enterprise-grade security.',
      details: [
        'End-to-end encryption',
        'Role-based access control',
        'Geo-redundant backups',
        'Compliance with security standards'
      ]
    }
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
              Powerful Features for Space Cargo Management
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover how StowMate's comprehensive suite of tools can transform your mission logistics.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="card hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="p-3 bg-[#1A237E] dark:bg-[#303F9F] text-white rounded-full mb-4 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#1A237E] dark:text-[#5C6BC0]">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-[#FF6D00] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="container-custom bg-gray-100 dark:bg-gray-900 rounded-xl p-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            How StowMate Compares
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            See how our comprehensive feature set stacks up against traditional cargo management solutions.
          </motion.p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#1A237E] dark:bg-[#303F9F] text-white">
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-center">StowMate</th>
                <th className="p-4 text-center">Traditional Solutions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 font-medium">AI-Powered Optimization</td>
                <td className="p-4 text-center text-green-600 dark:text-green-400">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td className="p-4 text-center text-red-600 dark:text-red-400">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 font-medium">Real-time 3D Visualization</td>
                <td className="p-4 text-center text-green-600 dark:text-green-400">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td className="p-4 text-center text-gray-600 dark:text-gray-400">Limited</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 font-medium">Predictive Analytics</td>
                <td className="p-4 text-center text-green-600 dark:text-green-400">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td className="p-4 text-center text-red-600 dark:text-red-400">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 font-medium">Multi-user Collaboration</td>
                <td className="p-4 text-center text-green-600 dark:text-green-400">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td className="p-4 text-center text-gray-600 dark:text-gray-400">Limited</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 font-medium">Mission Timeline Integration</td>
                <td className="p-4 text-center text-green-600 dark:text-green-400">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td className="p-4 text-center text-red-600 dark:text-red-400">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Cloud-based Access</td>
                <td className="p-4 text-center text-green-600 dark:text-green-400">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </td>
                <td className="p-4 text-center text-gray-600 dark:text-gray-400">Some</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom">
        <div className="bg-[#1A237E] dark:bg-gray-800 rounded-xl overflow-hidden">
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Experience These Features?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo to see how StowMate can transform your space mission logistics.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn-accent">
                Request Demo
              </button>
              <button className="bg-white text-[#1A237E] hover:bg-gray-100 font-bold py-2 px-6 rounded-md transition-all duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
