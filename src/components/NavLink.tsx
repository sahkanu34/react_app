import React, { useEffect, useState } from 'react';

interface NavLinkProps {
  href: string;
  label: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hash = href.substring(1);
      const section = document.getElementById(hash);
      
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= 100 && rect.bottom >= 100;
        setIsActive(isInView);
      }
    };

    handleScroll(); // Check immediately on mount
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [href]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a
      href={href}
      onClick={scrollToSection}
      className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive
          ? 'bg-cyan-900/30 text-cyan-400 border-l-2 border-cyan-400'
          : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
      }`}
    >
      {label}
    </a>
  );
};