
import React from 'react';

interface TestimonialProps {
  content: string;
  author: string;
  position?: string;
  imageUrl?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, author, position, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center mb-4">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-netreads-accent flex items-center justify-center text-netreads-primary mr-4">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-semibold">{author}</h4>
          {position && <p className="text-sm text-gray-500">{position}</p>}
        </div>
      </div>
      <p className="text-gray-600 italic">"{content}"</p>
    </div>
  );
};

export default Testimonial;
