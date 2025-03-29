
import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-r from-netreads-primary to-netreads-secondary py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-slide-down">{title}</h1>
        {description && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl animate-slide-up">{description}</p>
        )}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/4"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white opacity-20 rounded-full"></div>
    </div>
  );
};

export default PageHeader;
