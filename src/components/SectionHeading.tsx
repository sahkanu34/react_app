import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold text-white relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-400 rounded-full"></span>
      </h2>
      {subtitle && <p className="mt-4 text-gray-400">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;