import React from 'react';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'outline';
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  variant = 'primary', 
  icon, 
  href, 
  onClick 
}) => {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm';
  
  const variantClasses = {
    primary: 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg hover:shadow-cyan-700/20',
    outline: 'border border-cyan-600 text-cyan-400 hover:bg-cyan-900/30'
  };
  
  const buttonClass = `${baseClasses} ${variantClasses[variant]}`;
  
  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {icon && <span className="mr-2">{icon}</span>}
        {text}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonClass}>
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;