import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section 
      id={id} 
      className={`min-h-screen py-16 px-6 md:px-12 ${className}`}
    >
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;