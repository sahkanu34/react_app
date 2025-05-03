import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import EducationSection from './sections/EducationSection';
import ContactSection from './sections/ContactSection';
import PlaceholderSection from './sections/PlaceholderSection';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollPx / winHeightPx;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const sidebar = document.querySelector('aside');
      const menuButton = document.querySelector('button[aria-label="Toggle menu"]');
      
      if (sidebar && 
          !sidebar.contains(e.target as Node) && 
          menuButton && 
          !menuButton.contains(e.target as Node) &&
          window.innerWidth < 768) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Progress bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-cyan-400 z-50 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />
      
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* Main content */}
      <main className="flex-1 md:ml-64">
        <div className="min-h-screen">
          <HomeSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <PlaceholderSection id="publications" title="Publications" />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}

export default App