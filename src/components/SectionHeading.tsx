
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} animate-slide-up`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text relative">
        {title}
        <span className="absolute -bottom-2 left-0 w-16 h-1 bg-netreads-primary rounded-full"></span>
      </h2>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
