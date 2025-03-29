
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Refunds: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Refunds & Returns Policy" 
        description="Our fair and transparent policy for digital product refunds"
      />
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-600 mb-8">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <p>
              At Netreads, we stand behind the quality of our digital products. However, we understand that sometimes a product may not meet your specific needs. This Refunds & Returns Policy outlines the process for requesting refunds for digital products purchased from our website.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Digital Product Refund Policy</h2>
            <p>
              Due to the nature of digital products, all sales are generally considered final once the product has been delivered. However, we offer refunds under the following circumstances:
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Eligible Refund Scenarios:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Technical Issues:</strong> If you experience technical problems with accessing or downloading the product that our support team cannot resolve within 48 hours.
              </li>
              <li>
                <strong>Product Not as Described:</strong> If the product significantly differs from its description on our website in terms of content, format, or functionality.
              </li>
              <li>
                <strong>Accidental Purchase:</strong> If you accidentally purchased the same product twice within a short period.
              </li>
              <li>
                <strong>Satisfaction Guarantee:</strong> For certain products marked with our "Satisfaction Guarantee" badge, you may request a refund within 7 days of purchase if you're not satisfied with the product, no questions asked.
              </li>
            </ol>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Ineligible Refund Scenarios:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Change of Mind:</strong> We do not offer refunds simply because you changed your mind about a purchase (unless the product has our "Satisfaction Guarantee").
              </li>
              <li>
                <strong>Compatibility Issues:</strong> If you purchased a product that is not compatible with your device or software, despite clear compatibility requirements stated in the product description.
              </li>
              <li>
                <strong>After Significant Download/Usage:</strong> If you've already downloaded, accessed, or used a significant portion of the digital product.
              </li>
              <li>
                <strong>After the Refund Period:</strong> Requests made after the specified refund period (typically 7 days from purchase) will not be considered.
              </li>
            </ol>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How to Request a Refund</h2>
            <p>
              To request a refund, please follow these steps:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Contact our support team at <a href="mailto:refunds@netreads.in" className="text-netreads-primary hover:underline">refunds@netreads.in</a> with your order number and reason for the refund.
              </li>
              <li>
                Include "Refund Request" in your email subject line.
              </li>
              <li>
                Provide details about why you're requesting a refund, with screenshots or other evidence if applicable.
              </li>
              <li>
                Our team will review your request and respond within 48 hours.
              </li>
            </ol>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Refund Processing</h2>
            <p>
              If your refund request is approved:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Refunds will be processed using the original payment method whenever possible.
              </li>
              <li>
                Refund processing typically takes 5-10 business days, depending on your payment method and financial institution.
              </li>
              <li>
                You will receive an email confirmation once the refund has been processed.
              </li>
              <li>
                Your access to the refunded digital product will be revoked.
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Special Considerations</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Bundles and Packages:</h3>
            <p>
              For bundles or packages containing multiple digital products, partial refunds for individual items within the bundle are not available. The entire bundle must be eligible for a refund according to our policy.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Promotional or Discounted Items:</h3>
            <p>
              Products purchased at a significant discount (more than 50% off the regular price) or received as part of a promotion may have different refund terms, which will be specified at the time of purchase.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Right to Modify This Policy</h2>
            <p>
              We reserve the right to modify this Refunds & Returns Policy at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any modifications indicates your acceptance of the updated policy.
            </p>
            
            <div className="mt-12 py-6 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4">Need Assistance?</h3>
              <p className="mb-4">
                If you have any questions about our Refunds & Returns Policy, please contact our customer support team:
              </p>
              <p>
                Email: <a href="mailto:support@netreads.in" className="text-netreads-primary hover:underline">support@netreads.in</a><br />
                Phone: +91 98765 43210
              </p>
              <div className="mt-6">
                <Button asChild className="bg-netreads-primary hover:bg-netreads-secondary">
                  <Link to="/contact">Contact Support</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Refunds;
