import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import LandingPage from './pages/LandingPage';
import FeaturesPage from './pages/FeaturesPage';
import TechnologyPage from './pages/TechnologyPage';
import SimulationDashboard from './pages/SimulationDashboard';
import MissionPlanner from './pages/MissionPlanner';
import AboutUs from './pages/AboutUs';
import InsightsBlog from './pages/InsightsBlog';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-[#F5F5F5]'}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/simulation" element={<SimulationDashboard />} />
            <Route path="/mission-planner" element={<MissionPlanner />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<InsightsBlog />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
