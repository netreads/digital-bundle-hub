
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import { ArrowRight, Zap, Shield, Tag, Clock, BookOpen, BarChart, Award, PenTool } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-netreads-light py-16 md:py-24 pattern-bg overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Explore top-quality</span> digital bundles for learning & earning.
              </h1>
              <p className="text-xl text-gray-600">
                Discover the future of digital learning with our premium products designed to help you grow and succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-netreads-primary hover:bg-netreads-secondary animate-pulse">
                  <Link to="/">Shop Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover-lift">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute -z-10 w-64 h-64 bg-netreads-accent rounded-full opacity-60 blur-3xl top-10 -right-20 animate-float"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Digital Learning" 
                className="rounded-lg shadow-xl hover-lift"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg hidden md:block animate-fade-in hover-lift">
                <p className="font-bold text-netreads-primary">5000+ Happy Customers</p>
                <p className="text-sm text-gray-500">Join our community today</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Why Choose Us?" 
            subtitle="We deliver excellence in digital products with these key benefits"
            centered 
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <FeatureCard 
                icon={<Zap />} 
                title="Fast Delivery" 
                description="Instant access to your purchases, no waiting time" 
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <FeatureCard 
                icon={<Shield />} 
                title="Secure Payments" 
                description="100% safe and encrypted transactions" 
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <FeatureCard 
                icon={<Tag />} 
                title="Exclusive Discounts" 
                description="Save more with our multi-buy offers" 
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <FeatureCard 
                icon={<Clock />} 
                title="24/7 Support" 
                description="Always here to assist you whenever needed" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Learning Categories */}
      <section className="py-16 bg-gray-50 pattern-bg">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Explore Knowledge Categories" 
            subtitle="Dive into our comprehensive collection of digital learning resources"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Business & Marketing",
                icon: <BarChart className="w-8 h-8 text-netreads-primary" />,
                description: "Growth strategies, digital marketing, and entrepreneurship resources to scale your business",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Creative Skills",
                icon: <PenTool className="w-8 h-8 text-netreads-primary" />,
                description: "Design, writing, and artistic resources to unleash your creative potential",
                image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Personal Development",
                icon: <Award className="w-8 h-8 text-netreads-primary" />,
                description: "Productivity, mindfulness, and self-improvement guides for a better you",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((category, index) => (
              <Card key={index} className="overflow-hidden hover-lift animate-slide-up" style={{ animationDelay: `${0.2 * index}s` }}>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-bold ml-3">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Button variant="outline" className="w-full hover-glow">
                    Explore {category.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Your Learning Journey" 
            subtitle="How our digital products transform your skills and career"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Learning Journey" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-5 -left-5 bg-netreads-primary text-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="font-bold">Start Learning Today</p>
                <p className="text-sm opacity-90">And see results quickly</p>
              </div>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Discover Your Path",
                  description: "Browse our curated collection of digital resources tailored to your interests and goals."
                },
                {
                  step: "02",
                  title: "Learn at Your Pace",
                  description: "Access your purchases instantly and learn whenever, wherever suits your schedule."
                },
                {
                  step: "03",
                  title: "Apply Your Knowledge",
                  description: "Put your new skills to work with practical exercises and real-world applications."
                },
                {
                  step: "04",
                  title: "Grow & Succeed",
                  description: "See tangible results as you progress through your learning journey."
                }
              ].map((step, index) => (
                <div key={index} className="flex animate-slide-up" style={{ animationDelay: `${0.2 * index}s` }}>
                  <div className="mr-6 flex-shrink-0">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-netreads-light text-netreads-primary font-bold text-lg">
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <SectionHeading 
              title="Latest Resources" 
              subtitle="Fresh digital content to keep you ahead of the curve"
            />
            <Button asChild variant="outline" className="mt-4 md:mt-0 hover-lift">
              <Link to="/">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Remote Work Mastery Guide",
                category: "Productivity",
                date: "June 15, 2023",
                image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Digital Marketing Trends 2023",
                category: "Marketing",
                date: "May 28, 2023",
                image: "https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Financial Freedom Blueprint",
                category: "Finance",
                date: "April 10, 2023",
                image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((resource, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md animate-slide-up hover-lift" style={{ animationDelay: `${0.2 * index}s` }}>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={resource.image} 
                    alt={resource.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-2">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span className="text-sm">{resource.category}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm">{resource.date}</span>
                  </div>
                  <h3 className="text-xl font-bold">{resource.title}</h3>
                </div>
                <div className="absolute inset-0 bg-netreads-primary/80 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Button className="bg-white text-netreads-primary hover:bg-netreads-light">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-netreads-primary to-netreads-secondary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="max-w-2xl mx-auto animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Digital Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Discover the future of digital learning & earning with our premium products!
            </p>
            <Button asChild size="lg" className="bg-white text-netreads-primary hover:bg-netreads-light animate-bounce-subtle">
              <Link to="/">Get Started Today</Link>
            </Button>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white opacity-10 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white opacity-10 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white opacity-5 animate-pulse"></div>
      </section>
    </>
  );
};

export default Home;
