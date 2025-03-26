import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiBox, FiAlertTriangle, FiCheckCircle, FiBarChart2, FiLayers, FiRefreshCw, FiDownload, FiX } from 'react-icons/fi';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const SimulationDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isDragging, setIsDragging] = useState(false);
  const [cargoItems, setCargoItems] = useState([
    { id: 1, name: 'Life Support Module', weight: 1200, priority: 'High', status: 'Placed' },
    { id: 2, name: 'Science Equipment', weight: 850, priority: 'Medium', status: 'Placed' },
    { id: 3, name: 'Food Supplies', weight: 650, priority: 'High', status: 'Unplaced' },
    { id: 4, name: 'Water Containers', weight: 900, priority: 'High', status: 'Unplaced' },
    { id: 5, name: 'Spare Parts', weight: 450, priority: 'Low', status: 'Unplaced' },
    { id: 6, name: 'Medical Supplies', weight: 300, priority: 'Medium', status: 'Unplaced' },
    { id: 7, name: 'Communication Equipment', weight: 200, priority: 'Medium', status: 'Unplaced' },
    { id: 8, name: 'Personal Items', weight: 150, priority: 'Low', status: 'Unplaced' }
  ]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(null);
  const reportRef = useRef(null);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDrop = (e, zone) => {
    e.preventDefault();
    const id = parseInt(e.dataTransfer.getData('text/plain'));
    
    setCargoItems(cargoItems.map(item => 
      item.id === id ? { ...item, status: 'Placed' } : item
    ));
    
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Low':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Placed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Unplaced':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const resetSimulation = () => {
    setCargoItems(cargoItems.map(item => ({
      ...item,
      status: 'Unplaced'
    })));
  };

  const handleEditItem = (item) => {
    setSelectedItem(item);
    setIsEditModalOpen(true);
  };

  const updateItem = () => {
    setCargoItems(cargoItems.map(item => 
      item.id === selectedItem.id ? selectedItem : item
    ));
    setIsEditModalOpen(false);
  };

  const generatePDF = async (reportType) => {
    if (!reportRef.current) return;

    try {
      const canvas = await html2canvas(reportRef.current);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${reportType}_report.pdf`);
    } catch (error) {
      console.error('PDF generation error:', error);
    }
  };

  return (
    <div className="pt-16">
      {/* Dashboard Header */}
      <section className="bg-[#1A237E] dark:bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Simulation Dashboard</h1>
              <p className="text-gray-200">Interactive cargo management simulation</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-2">
              <button className="bg-white text-[#1A237E] hover:bg-gray-100 font-medium py-2 px-4 rounded-md transition-all duration-300 flex items-center">
                <FiRefreshCw className="mr-2" /> Reset Simulation
              </button>
              <button className="btn-accent flex items-center">
                <FiCheckCircle className="mr-2" /> Save Configuration
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Tabs */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            <button 
              className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                activeTab === 'overview' 
                  ? 'text-[#1A237E] dark:text-[#5C6BC0] border-b-2 border-[#1A237E] dark:border-[#5C6BC0]' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-[#1A237E] dark:hover:text-[#5C6BC0]'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                activeTab === 'cargo' 
                  ? 'text-[#1A237E] dark:text-[#5C6BC0] border-b-2 border-[#1A237E] dark:border-[#5C6BC0]' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-[#1A237E] dark:hover:text-[#5C6BC0]'
              }`}
              onClick={() => setActiveTab('cargo')}
            >
              Cargo Items
            </button>
            <button 
              className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                activeTab === 'analytics' 
                  ? 'text-[#1A237E] dark:text-[#5C6BC0] border-b-2 border-[#1A237E] dark:border-[#5C6BC0]' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-[#1A237E] dark:hover:text-[#5C6BC0]'
              }`}
              onClick={() => setActiveTab('analytics')}
            >
              Analytics
            </button>
            <button 
              className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                activeTab === 'reports' 
                  ? 'text-[#1A237E] dark:text-[#5C6BC0] border-b-2 border-[#1A237E] dark:border-[#5C6BC0]' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-[#1A237E] dark:hover:text-[#5C6BC0]'
              }`}
              onClick={() => setActiveTab('reports')}
            >
              Reports
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="bg-gray-100 dark:bg-gray-900 py-8 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                      <FiBox className="text-blue-600 dark:text-blue-300" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Total Cargo Items</p>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">8</h3>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="flex items-center">
                    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full mr-4">
                      <FiCheckCircle className="text-green-600 dark:text-green-300" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Placed Items</p>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">2</h3>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="flex items-center">
                    <div className="p-3 bg-red-100 dark:bg-red-900 rounded-full mr-4">
                      <FiAlertTriangle className="text-red-600 dark:text-red-300" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Unplaced High Priority</p>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">2</h3>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Cargo Bay Simulation</h3>
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 h-96 flex items-center justify-center"
                      onDrop={(e) => handleDrop(e, 'cargo-bay')}
                      onDragOver={handleDragOver}
                    >
                      <div className="text-center">
                        <FiLayers className="mx-auto text-gray-400 dark:text-gray-500 mb-2" size={48} />
                        <p className="text-gray-500 dark:text-gray-400">
                          {isDragging ? 'Drop cargo item here' : 'Drag and drop cargo items here to place them in the cargo bay'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Unplaced Items</h3>
                    <div className="space-y-3">
                      {cargoItems.filter(item => item.status === 'Unplaced').map(item => (
                        <div 
                          key={item.id}
                          className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg cursor-move"
                          draggable
                          onDragStart={(e) => handleDragStart(e, item.id)}
                          onDragEnd={handleDragEnd}
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <FiBox className="text-gray-500 dark:text-gray-400 mr-2" />
                              <span className="font-medium text-gray-800 dark:text-white">{item.name}</span>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(item.priority)}`}>
                              {item.priority}
                            </span>
                          </div>
                          <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            Weight: {item.weight} kg
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Cargo Items Tab */}
          {activeTab === 'cargo' && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Cargo Inventory</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Weight (kg)</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Priority</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {cargoItems.map(item => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">{item.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{item.weight}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(item.priority)}`}>
                            {item.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(item.status)}`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          <button className="text-[#1A237E] dark:text-[#5C6BC0] hover:text-[#303F9F] dark:hover:text-[#7986CB]">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Weight Distribution</h3>
                <div className="h-80 flex items-center justify-center">
                  <FiBarChart2 className="text-gray-400 dark:text-gray-500" size={64} />
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Cargo Status</h3>
                <div className="h-80 flex items-center justify-center">
                  <div className="w-48 h-48 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-800 dark:text-white">25%</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Placed</div>
                      </div>
                    </div>
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E0E0E0"
                        strokeWidth="2"
                        className="dark:stroke-gray-700"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#1A237E"
                        strokeWidth="2"
                        strokeDasharray="25, 100"
                        className="dark:stroke-[#5C6BC0]"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Priority Distribution</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">High Priority</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">3</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-red-600 dark:bg-red-500 h-2 rounded-full" style={{ width: '37.5%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Medium Priority</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">3</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-600 dark:bg-yellow-500 h-2 rounded-full" style={{ width: '37.5%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Low Priority</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">2</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-600 dark:bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Optimization Metrics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Space Utilization</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-[#1A237E] dark:bg-[#5C6BC0] h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Weight Balance</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-[#1A237E] dark:bg-[#5C6BC0] h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Accessibility Score</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">42%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-[#1A237E] dark:bg-[#5C6BC0] h-2 rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === 'reports' && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Simulation Reports</h3>
            <div className="space-y-4" ref={reportRef}>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 dark:text-white mb-2">Cargo Placement Report</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Detailed analysis of current cargo placement configuration.</p>
                <button 
                    onClick={() => {
                    setReportModalOpen('cargo-placement');
                    generatePDF('Cargo_Placement');
                    }}
                    className="text-[#1A237E] dark:text-[#5C6BC0] hover:text-[#303F9F] dark:hover:text-[#7986CB] font-medium"
                >
                    Generate Report
                </button>
                </div>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 dark:text-white mb-2">Weight Distribution Analysis</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Center of gravity and weight balance assessment.</p>
                <button 
                    onClick={() => {
                    setReportModalOpen('weight-distribution');
                    generatePDF('Weight_Distribution');
                    }}
                    className="text-[#1A237E] dark:text-[#5C6BC0] hover:text-[#303F9F] dark:hover:text-[#7986CB] font-medium"
                >
                    Generate Report
                </button>
                </div>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 dark:text-white mb-2">Optimization Recommendations</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">AI-generated suggestions for improving cargo configuration.</p>
                <button 
                    onClick={() => {
                    setReportModalOpen('optimization');
                    generatePDF('Optimization');
                    }}
                    className="text-[#1A237E] dark:text-[#5C6BC0] hover:text-[#303F9F] dark:hover:text-[#7986CB] font-medium"
                >
                    Generate Report
                </button>
                </div>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 dark:text-white mb-2">Mission Readiness Assessment</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Overall evaluation of cargo readiness for mission launch.</p>
                <button 
                    onClick={() => {
                    setReportModalOpen('mission-readiness');
                    generatePDF('Mission_Readiness');
                    }}
                    className="text-[#1A237E] dark:text-[#5C6BC0] hover:text-[#303F9F] dark:hover:text-[#7986CB] font-medium"
                >
                    Generate Report
                </button>
                </div>
            </div>
            </div>
          )}

           {/* Cargo Edit Modal */}
           {isEditModalOpen && selectedItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-96">
                    <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">Edit Cargo Item</h3>
                    <button 
                        onClick={() => setIsEditModalOpen(false)}
                        className="text-gray-500 hover:text-gray-800 dark:hover:text-white"
                    >
                        <FiX size={24} />
                    </button>
                    </div>
                    <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                        <input
                        type="text"
                        value={selectedItem.name}
                        onChange={(e) => setSelectedItem({...selectedItem, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-[#1A237E] focus:border-[#1A237E]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Weight (kg)</label>
                        <input
                        type="number"
                        value={selectedItem.weight}
                        onChange={(e) => setSelectedItem({...selectedItem, weight: parseInt(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-[#1A237E] focus:border-[#1A237E]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Priority</label>
                        <select
                        value={selectedItem.priority}
                        onChange={(e) => setSelectedItem({...selectedItem, priority: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-[#1A237E] focus:border-[#1A237E]"
                        >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                        </select>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button 
                        onClick={() => setIsEditModalOpen(false)}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                        >
                        Cancel
                        </button>
                        <button 
                        onClick={updateItem}
                        className="px-4 py-2 bg-[#1A237E] text-white rounded-md hover:bg-[#303F9F]"
                        >
                        Save Changes
                        </button>
                    </div>
                    </div>
                </div>
                </div>
           )}

            {/* Reset Simulation Button */}
            <button 
                onClick={resetSimulation}
                className="fixed bottom-4 right-4 bg-[#1A237E] text-white p-3 rounded-full shadow-lg hover:bg-[#303F9F] transition-all duration-300 z-50 flex items-center"
            >
                <FiRefreshCw size={24} />
            </button>
        </div>
      </section>
    </div>
  );
};

export default SimulationDashboard;
