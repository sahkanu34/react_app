import React from 'react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import { useInView } from '../hooks/useInView';
import { Calendar, MapPin } from 'lucide-react';

interface EducationItemProps {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
}

const EducationItem: React.FC<EducationItemProps> = ({
  degree,
  institution,
  location,
  period,
  description,
  achievements
}) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-cyan-800/30" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/20" />
      
      <h3 className="text-xl font-bold text-white mb-1">{degree}</h3>
      <h4 className="text-lg text-cyan-400 mb-2">{institution}</h4>
      
      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </div>
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {period}
        </div>
      </div>
      
      <p className="text-gray-300 mb-4">{description}</p>
      
      {achievements && achievements.length > 0 && (
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 mr-2" />
              <span className="text-gray-400">{achievement}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const EducationSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const educationData = [
    // {
    //   degree: "Master of Computer Applications (MCA)",
    //   institution: "Lovely Professional University",
    //   location: "Punjab, India",
    //   period: "2022 - 2024",
    //   description: "Specializing in Data Science and Machine Learning with a focus on practical applications in healthcare and finance.",
    //   achievements: [
    //     "Maintained a CGPA of 8.5/10 throughout the program",
    //     "Published research paper on 'Deep Learning Applications in Healthcare'",
    //     "Led a team of 4 in developing an AI-powered medical diagnosis system"
    //   ]
    // },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Tribhuvan University",
      location: "Kathmandu, Nepal",
      period: "2019 - 2022",
      description: "Focused on computer science fundamentals, programming, and software development.",
      achievements: [
        "Graduated with First Class Honours (80%)",
        "Developed multiple web applications using Django and React",
        "Winner of University Coding Championship 2021"
      ]
    }
  ];

  return (
    <Section id="education">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <SectionHeading 
          title="Education" 
          subtitle="My academic journey and achievements"
        />
        
        <div className="space-y-8">
          {educationData.map((education, index) => (
            <EducationItem key={index} {...education} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default EducationSection;