import React from 'react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';

interface PlaceholderSectionProps {
  id: string;
  title: string;
}

const PlaceholderSection: React.FC<PlaceholderSectionProps> = ({ id, title }) => {
  return (
    <Section id={id}>
      <SectionHeading title={title} />
      <div className="h-40 flex items-center justify-center border border-dashed border-gray-700 rounded-lg bg-gray-800/50">
        <p className="text-gray-400 text-center">
          {title} content will be populated here
        </p>
      </div>
    </Section>
  );
};

export default PlaceholderSection;