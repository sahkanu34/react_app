import React, { useState } from 'react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import { ExternalLink, Github, ChevronDown, ChevronUp, Code, Monitor, Tag } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveDemo?: string;
  github?: string;
  details?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveDemo,
  github,
  details = []
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-[#0B1221] rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-cyan-900/20 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-[#0B1221] to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-80'}`} />
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{title}</h3>
      </div>
      
      <div className="p-6">
        <p className="text-gray-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.slice(0, expanded ? technologies.length : 4).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-cyan-900/20 text-cyan-400 rounded-full text-sm border border-cyan-800/30 flex items-center"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tech}
            </span>
          ))}
          {!expanded && technologies.length > 4 && (
            <span className="px-3 py-1 bg-cyan-900/20 text-cyan-400 rounded-full text-sm border border-cyan-800/30 cursor-pointer hover:bg-cyan-900/40"
              onClick={() => setExpanded(true)}>
              +{technologies.length - 4} more
            </span>
          )}
        </div>
        
        {details.length > 0 && (
          <div className="mb-6">
            <button 
              onClick={() => setExpanded(!expanded)}
              className="flex items-center text-cyan-400 hover:text-cyan-300 mb-2 text-sm font-medium"
            >
              {expanded ? <ChevronUp className="w-4 h-4 mr-1" /> : <ChevronDown className="w-4 h-4 mr-1" />}
              {expanded ? 'Hide details' : 'Show details'}
            </button>
            
            {expanded && (
              <ul className="list-disc text-gray-400 pl-5 space-y-2 text-sm animate-fadeIn">
                {details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        )}
        
        <div className="flex gap-3">
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center text-sm text-white bg-cyan-600 hover:bg-cyan-700 px-4 py-2.5 rounded-lg transition-colors group"
            >
              <Monitor className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Live Demo
              <span className="ml-1 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:ml-2">→</span>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center text-sm text-cyan-400 hover:text-cyan-300 border border-cyan-800 hover:border-cyan-700 px-4 py-2.5 rounded-lg transition-colors group"
            >
              <Code className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              GitHub
              <span className="ml-1 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:ml-2">→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Brain Tumor Detection System",
      description: "Developed a CNN model for predicting the 4 types of Brain Tumour using TensorFlow & Keras with advanced image processing techniques.",
      image: "images/brain_tumor.jpeg",
      technologies: ["Python", "CNN", "Deep Learning", "TensorFlow", "Keras", "Streamlit", "Docker", "NumPy", "Matplotlib"],
      liveDemo: "https://github.com/sahkanu34/Brain_tumour_detection_system",
      github: "https://github.com/sahkanu34/Brain_tumour_detection_system",
      category: "ml",
      details: [
        "Designed and implemented a deep learning-based system using MobileNetV2, delivering high-accuracy classification on MRI brain scans",
        "Built an advanced image preprocessing pipeline with resizing, normalization, and denoising, boosting model efficiency and clinical reliability by 18%",
        "Achieved 94% accuracy on the test set with reduced false positives through transfer learning and custom data augmentation",
        "Deployed full-stack solution via Streamlit and Docker with real-time image upload, automated inference, and model metric visualization"
      ]
    },
    {
      title: "Cancer Prediction System",
      description: "Developed a machine learning classification model for a Breast Cancer Prediction System using advanced ML algorithms and comprehensive data analysis.",
      image: "images/cancer1.jpeg",
      technologies: ["Python", "Streamlit", "Random Forest", "XGBoost", "SVM", "Classification", "Pandas", "NumPy", "Seaborn"],
      liveDemo: "https://github.com/sahkanu34/cancer_prediction_app",
      github: "https://github.com/sahkanu34/cancer_prediction_app",
      category: "ml",
      details: [
        "Built a robust ML-driven system leveraging Random Forest, XGBoost, and SVM, achieving 97% accuracy in malignancy classification",
        "Developed a comprehensive EDA and visualization dashboard using Plotly to reveal correlations, trends, and feature impacts",
        "Optimized preprocessing pipeline with scaling, outlier detection, and imputation, improving model performance by 15% and reducing false negatives by 30%",
        "Containerized and deployed via Streamlit and Docker, enabling seamless interaction with real-time prediction, validation, and hyperparameter tuning"
      ]
    },
    {
      title: "Blood Bank & Donor Management",
      description: "Developed a Django-based online web application where users can create profiles, join a community, and request blood with real-time notifications.",
      image: "images/raktasteu.jpeg",
      technologies: ["Django", "Bootstrap", "MySQL", "Python", "Docker"],
      liveDemo: "https://github.com/sahkanu34/Raktasetu",
      github: "https://github.com/sahkanu34/Raktasetu",
      category: "web",
      details: [
        "Developed a scalable Django-based web app serving 500+ active users, enabling donor registration, community interaction, and live blood requests",
        "Led the creation of an admin panel, streamlining donor approvals and request tracking with 40% faster response time",
        "Designed and optimized a relational MySQL schema capable of handling 10,000+ donor records with 99.9% uptime and seamless scalability"
      ]
    },
    {
      title: "Salary Prediction App",
      description: "Engineered a regression-based ML model for salary forecasting with dynamic visualizations and cloud deployment.",
      image: "images/sal.png",
      technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "Plotly", "Docker", "Streamlit"],
      liveDemo: "https://github.com/sahkanu34/salary_prediction_app",
      github: "https://github.com/sahkanu34/salary_prediction_app",
      category: "ml",
      details: [
        "Engineered a regression-based ML model achieving 92% prediction accuracy for salary forecasting using 15+ input features",
        "Constructed a high-performance data pipeline processing 50,000+ records with real-time responsiveness and robust error handling",
        "Enhanced business insight with dynamic data visualizations via Matplotlib and Plotly, improving decision-making accuracy by 60%",
        "Deployed application using Streamlit and Docker on AWS EC2, reliably serving 1000+ daily user predictions with minimal latency"
      ]
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <Section id="projects">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <SectionHeading 
          title="Projects" 
          subtitle="Here are some of my recent projects that showcase my skills and experience in machine learning and web development."
        />
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-[#0B1221] rounded-lg p-1">
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'all' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-cyan-400'}`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'ml' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-cyan-400'}`}
              onClick={() => setFilter('ml')}
            >
              Machine Learning
            </button>
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'web' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-cyan-400'}`}
              onClick={() => setFilter('web')}
            >
              Web Development
            </button>
          </div>
        </div>
        
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                {...project} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-400">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default ProjectsSection;