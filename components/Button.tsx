
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ease-in-out transform hover:scale-105";
  
  const variantStyles = {
    primary: "bg-casper-teal text-white hover:bg-opacity-90 focus:ring-[#82C3BE]",
    secondary: "bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-500",
    ghost: "bg-transparent text-casper-teal hover:bg-teal-50 border border-casper-teal focus:ring-casper-teal",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} target={props.target} rel={props.rel}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
