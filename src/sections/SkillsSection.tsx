import React from 'react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import { useInView } from '../hooks/useInView';

interface SkillCategoryProps {
  title: string;
  skills: Array<{
    name: string;
    icon: string;
  }>;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
      <h3 className="text-lg font-semibold text-cyan-400 mb-4">{title}</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center group"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gray-700/30 rounded-lg mb-2 group-hover:bg-gray-700/50 transition-colors">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-xs text-gray-400 text-center group-hover:text-cyan-400 transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const skillCategories = [
    {
      title: "Programming Languages & Databases",
      skills: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
        { name: "matplotlib", icon: "https://icon.icepanel.io/Technology/svg/Matplotlib.svg" },
        { name: "plotly", icon: "https://icon.icepanel.io/Technology/svg/Ploty.svg" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Anaconda", icon: "https://icon.icepanel.io/Technology/svg/Anaconda.svg" }
      ]
    },
    {
      title: "Data Science & ML",
      skills: [
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "Keras", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
        { name: "MLflow", icon: "https://raw.githubusercontent.com/mlflow/mlflow/master/assets/icon.svg" },
        { name: "juypter", icon: "https://icon.icepanel.io/Technology/png-shadow-512/Jupyter.png" },
        { name: "kaggle", icon: "https://icon.icepanel.io/Technology/svg/Kaggle.svg" },
        { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.svg" }
      ]
    }
  ];

  return (
    <Section id="skills">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <SectionHeading 
          title="Skills" 
          subtitle="Here are the technologies and tools I work with"
        />
        
        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;