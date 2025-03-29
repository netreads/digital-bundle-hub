
import React from 'react';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';

const About: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="About Netreads" 
        description="Learn more about our mission, vision, and the team behind Netreads"
      />
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <SectionHeading title="Our Story" />
            <p className="text-gray-600 mb-4">
              Founded in 2020, Netreads started with a simple mission: to make high-quality digital educational resources accessible to everyone in India. What began as a small collection of e-books has grown into a comprehensive platform offering a wide range of digital products.
            </p>
            <p className="text-gray-600">
              Our founder, Rajesh Kumar, identified a gap in the market for affordable yet valuable digital educational content. With his background in education and technology, he built Netreads from the ground up, focusing on quality, accessibility, and customer satisfaction.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Our Team Working" 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-5 -left-5 bg-netreads-primary text-white p-4 rounded-lg shadow-lg hidden md:block">
              <p className="font-bold">Started in 2020</p>
              <p className="text-sm">Growing stronger every day</p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <SectionHeading title="Our Mission & Vision" centered />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-netreads-light p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-netreads-primary">Our Mission</h3>
              <p className="text-gray-600">
                To provide affordable, high-quality digital educational resources that empower individuals to learn new skills, advance their careers, and achieve their goals. We believe that education should be accessible to everyone, regardless of their background or location.
              </p>
            </div>
            <div className="bg-netreads-light p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-netreads-primary">Our Vision</h3>
              <p className="text-gray-600">
                To become India's leading platform for digital educational resources, known for our commitment to quality, innovation, and customer satisfaction. We envision a future where everyone has access to the knowledge and tools they need to succeed in the digital age.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <SectionHeading title="Our Values" centered />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "Quality",
                description: "We are committed to providing the highest quality digital products."
              },
              {
                title: "Accessibility",
                description: "We believe education should be accessible to everyone."
              },
              {
                title: "Innovation",
                description: "We continuously innovate to improve our offerings."
              },
              {
                title: "Integrity",
                description: "We conduct our business with honesty and transparency."
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-netreads-primary">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <SectionHeading title="Our Team" centered />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Founder & CEO",
                bio: "With over 15 years of experience in education and technology, Rajesh leads Netreads with vision and passion.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Priya Sharma",
                role: "Head of Content",
                bio: "Priya ensures that all our digital products meet our high standards for quality and educational value.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Amit Patel",
                role: "Customer Success Manager",
                bio: "Amit and his team are dedicated to providing exceptional support to our customers.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-netreads-primary mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
