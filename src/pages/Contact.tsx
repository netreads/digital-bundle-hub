
import React from 'react';
import { Mail, Phone, MapPin, AlignLeft } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';

const Contact: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        description="Get in touch with our team for any questions or inquiries"
      />
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <SectionHeading title="Get In Touch" />
            <p className="text-gray-600 mb-8">
              We'd love to hear from you! Whether you have a question about our products, need help with a purchase, or want to explore collaboration opportunities, our team is ready to assist you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start hover-lift p-4 rounded-lg transition-all hover:bg-netreads-light/50">
                <div className="mr-4 bg-netreads-light p-3 rounded-full text-netreads-primary animate-pulse">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Email</h3>
                  <a href="mailto:support@netreads.in" className="text-netreads-primary hover:underline">
                    support@netreads.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-start hover-lift p-4 rounded-lg transition-all hover:bg-netreads-light/50">
                <div className="mr-4 bg-netreads-light p-3 rounded-full text-netreads-primary animate-pulse">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Phone</h3>
                  <a href="tel:+919876543210" className="text-netreads-primary hover:underline">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              
              <div className="flex items-start hover-lift p-4 rounded-lg transition-all hover:bg-netreads-light/50">
                <div className="mr-4 bg-netreads-light p-3 rounded-full text-netreads-primary animate-pulse">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Office</h3>
                  <p className="text-gray-600">
                    123 Tech Park, Electronic City<br />
                    Bangalore, Karnataka 560100<br />
                    India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-medium text-lg mb-3">Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  className="bg-netreads-light p-3 rounded-full text-netreads-primary hover:bg-netreads-primary hover:text-white transition-colors hover-lift"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  className="bg-netreads-light p-3 rounded-full text-netreads-primary hover:bg-netreads-primary hover:text-white transition-colors hover-lift"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  className="bg-netreads-light p-3 rounded-full text-netreads-primary hover:bg-netreads-primary hover:text-white transition-colors hover-lift"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  className="bg-netreads-light p-3 rounded-full text-netreads-primary hover:bg-netreads-primary hover:text-white transition-colors hover-lift"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62207.88835451953!2d77.63062442636958!3d12.964040526530124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1623145052066!5m2!1sen!2sin" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Netreads office location"
              ></iframe>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white p-5 rounded-lg shadow-lg hidden md:flex items-center animate-fade-in hover-lift">
              <AlignLeft className="mr-3 text-netreads-primary" />
              <div>
                <p className="font-bold">Business Hours</p>
                <p className="text-sm text-gray-500">Mon-Sat: 9AM - 6PM IST</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 animate-slide-up">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              {
                question: "How quickly will I receive my digital product?",
                answer: "You'll receive instant access to your digital product after your payment is processed. A download link will be sent to your email."
              },
              {
                question: "Can I access my purchases on multiple devices?",
                answer: "Yes, you can access your purchases on any device by logging into your account or using the download links sent to your email."
              },
              {
                question: "Do you offer bulk discounts?",
                answer: "Yes! We offer special discounts for bulk purchases. Please contact us directly for more information."
              },
              {
                question: "How do I request a refund?",
                answer: "You can request a refund within 7 days of purchase through our refund page or by contacting our support team."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover-lift">
                <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
