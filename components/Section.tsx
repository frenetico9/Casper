
import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  titleClassName?: string;
  subtitle?: string;
  subtitleClassName?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className, title, titleClassName, subtitle, subtitleClassName }) => {
  return (
    <section id={id} className={`py-12 md:py-20 ${className || ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 gradient-text ${titleClassName || ''}`}>
            {title}
          </h2>
        )}
        {subtitle && (
           <p className={`text-center text-slate-600 md:text-lg mb-10 md:mb-16 max-w-2xl mx-auto ${subtitleClassName || ''}`}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
