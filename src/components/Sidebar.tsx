import React from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button 
        className="fixed top-4 right-4 z-50 p-2 bg-gray-800 rounded-full shadow-lg md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-cyan-400" />
        ) : (
          <Menu className="w-6 h-6 text-cyan-400" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 border-r border-cyan-800/30 shadow-xl transform transition-transform duration-300 z-40 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div className="flex flex-col items-center pt-10 pb-6">
          {/* Profile Image */}
          <div className="relative w-32 h-32 mb-4 rounded-full border-2 border-cyan-400 overflow-hidden">
            <img
              src="https://github.com/sahkanu34/react_app/blob/main/images/github_profile.jpg?raw=true"
              alt="Suraj Sah Kanu"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name and Title */}
          <h2 className="text-xl font-bold text-white">Suraj Sah Kanu</h2>
          <p className="text-sm text-cyan-400 mt-1">Data Science & AI Enthusiast</p>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-4">
            <a
              href="https://linkedin.com/in/sahkanu34"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/sahkanu34"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 pl-4 pr-2">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  href={`#${item.id}`}
                  label={item.label}
                />
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;