
import React from 'react';
import PageHeader from '@/components/PageHeader';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Privacy Policy" 
        description="We value your privacy and are committed to protecting your personal data"
      />
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-600 mb-8">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <p>
              At Netreads, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create an account</li>
              <li>Make a purchase</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact our support team</li>
              <li>Complete forms on our website</li>
            </ul>
            
            <p className="mt-4">
              The types of information we may collect include your:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Billing information</li>
              <li>Phone number (optional)</li>
              <li>IP address and browser information</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
            <p>
              We may use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Provide customer support</li>
              <li>Send transactional emails and order updates</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraudulent transactions</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and collect certain information. This helps us understand how you use our site and allows us to provide a better user experience.
            </p>
            <p className="mt-4">
              You can set your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our website may not function properly without cookies.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Service Providers</h2>
            <p>
              We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service.
            </p>
            <p className="mt-4">
              These third parties are contractually obligated to use your information only for the purposes for which we disclose it to them.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Security</h2>
            <p>
              We use appropriate security measures to protect your information, including encryption, firewalls, and secure server facilities. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal information</li>
              <li>The right to rectify inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p className="mt-4">
              We encourage you to review this Privacy Policy periodically for any changes.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions or concerns about our Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              Email: privacy@netreads.in<br />
              Phone: +91 98765 43210<br />
              Address: 123 Tech Park, Electronic City, Bangalore, Karnataka 560100, India
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
