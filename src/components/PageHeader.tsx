
import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-r from-netreads-primary to-netreads-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        {description && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">{description}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
