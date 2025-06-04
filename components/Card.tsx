
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  title?: string;
}

const Card: React.FC<CardProps> = ({ children, className, icon, title }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300 ${className || ''}`}>
      {icon && <div className="mb-4 text-casper-teal">{icon}</div>}
      {title && <h3 className="text-xl font-semibold text-slate-700 mb-3">{title}</h3>}
      <div className="text-slate-600">{children}</div>
    </div>
  );
};

export default Card;
