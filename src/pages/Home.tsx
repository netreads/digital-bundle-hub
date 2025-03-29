
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import ProductCard from '@/components/ProductCard';
import FeatureCard from '@/components/FeatureCard';
import Testimonial from '@/components/Testimonial';
import { ArrowRight, Zap, Shield, Tag, Clock } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-netreads-light py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Explore top-quality</span> digital bundles for learning & earning.
              </h1>
              <p className="text-xl text-gray-600">
                Discover the future of digital learning with our premium products designed to help you grow and succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-netreads-primary hover:bg-netreads-secondary">
                  <Link to="/">Shop Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Digital Learning" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="font-bold text-netreads-primary">5000+ Happy Customers</p>
                <p className="text-sm text-gray-500">Join our community today</p>
              </div>
            </div>
          </div>
        </div>
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
            <FeatureCard 
              icon={<Zap />} 
              title="Fast Delivery" 
              description="Instant access to your purchases, no waiting time" 
            />
            <FeatureCard 
              icon={<Shield />} 
              title="Secure Payments" 
              description="100% safe and encrypted transactions" 
            />
            <FeatureCard 
              icon={<Tag />} 
              title="Exclusive Discounts" 
              description="Save more with our multi-buy offers" 
            />
            <FeatureCard 
              icon={<Clock />} 
              title="24/7 Support" 
              description="Always here to assist you whenever needed" 
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Our Featured Products" 
            subtitle="Explore our most popular digital bundles"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
              title="Digital Marketing Masterclass" 
              description="Complete guide to master digital marketing strategies in 2023" 
              price="₹1,999" 
              imageUrl="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              bestSeller={true}
            />
            <ProductCard 
              title="Financial Freedom Bundle" 
              description="Learn to invest, save, and grow your wealth with expert strategies" 
              price="₹2,499" 
              imageUrl="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              discount="20% OFF"
            />
            <ProductCard 
              title="Web Development Toolkit" 
              description="All the tools and resources you need to build modern websites" 
              price="₹1,799" 
              imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-netreads-primary hover:bg-netreads-secondary">
              <Link to="/">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="What Our Customers Say" 
            subtitle="Don't just take our word for it - hear from our happy customers"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            <Testimonial 
              content="The digital marketing bundle completely transformed my business. I've seen a 200% increase in leads since implementing the strategies." 
              author="Priya Sharma"
              position="Small Business Owner"
            />
            <Testimonial 
              content="I've tried many investment courses, but Netreads' Financial Freedom Bundle is by far the most comprehensive and actionable." 
              author="Rohit Gupta"
              position="IT Professional"
            />
            <Testimonial 
              content="Customer support is amazing. They helped me quickly resolve an issue with my download and even provided extra resources!" 
              author="Ananya Patel"
              position="Freelancer"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-netreads-primary to-netreads-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Digital Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the future of digital learning & earning with our premium products!
          </p>
          <Button asChild size="lg" className="bg-white text-netreads-primary hover:bg-netreads-light">
            <Link to="/">Shop Now</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
