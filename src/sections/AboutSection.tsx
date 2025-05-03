import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Section from '../components/Section';
import { useInView } from '../hooks/useInView';

interface HighlightProps {
  emoji: string;
  text: string;
}

const Highlight: React.FC<HighlightProps> = ({ emoji, text }) => {
  return (
    <div className="flex items-start mb-6 group">
      <div className="w-10 h-10 mr-4 flex-shrink-0 bg-cyan-900/40 rounded-full flex items-center justify-center text-lg group-hover:bg-cyan-800/60 transition-colors duration-300">
        {emoji}
      </div>
      <p className="text-gray-300 flex-1">{text}</p>
    </div>
  );
};

const AboutSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const highlights = [
    {
      emoji: '🚀',
      text: 'Aspiring Machine Learning Engineer with a strong background in Computer Applications, dedicated to solving complex real-world problems through AI.'
    },
    {
      emoji: '💻',
      text: 'Experienced in machine learning, natural language processing, data analytics, and web application development.'
    },
    {
      emoji: '🛠️',
      text: 'Proficient in Python, Scikit-learn, Pandas, MySQL, MLflow, Streamlit, and other data science tools and technologies.'
    },
    {
      emoji: '🎯',
      text: 'Focused on applying AI and machine learning techniques to healthcare, finance, and process optimization domains.'
    },
    {
      emoji: '🤝',
      text: 'Strong communication, organization, and problem-solving skills with a curious mindset and focus on creating meaningful impact.'
    }
  ];

  return (
    <Section id="about">
      <div 
        ref={ref}
        className={`transition-all duration-1000 ${
          isInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <SectionHeading title="About Me" />
        
        <div className="space-y-6">
          {highlights.map((highlight, index) => (
            <Highlight 
              key={index} 
              emoji={highlight.emoji} 
              text={highlight.text} 
            />
          ))}
        </div>
        
        <p className="text-cyan-400 font-medium mt-10 text-lg">
          Let's build something smart, scalable, and impactful!
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;