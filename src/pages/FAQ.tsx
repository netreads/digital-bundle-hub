
import React from 'react';
import PageHeader from '@/components/PageHeader';
import FAQItem from '@/components/FAQItem';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What types of digital products does Netreads offer?",
      answer: "Netreads offers a wide range of digital products including e-books, online courses, templates, software tools, guides, and bundles specifically designed for learning and professional growth."
    },
    {
      question: "How do I access my purchased digital products?",
      answer: "After completing your purchase, you will receive an email with download instructions and links to access your digital products. You can also access all your purchases from your account dashboard on our website."
    },
    {
      question: "Can I use the digital products on multiple devices?",
      answer: "Yes, our digital products can be accessed on multiple devices. However, they are licensed for personal use only, meaning they should only be used by the person who purchased them."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit and debit cards, UPI payments, net banking, and digital wallets like PayTM, Google Pay, PhonePe, and Amazon Pay for your convenience."
    },
    {
      question: "Do you offer refunds if I'm not satisfied with a product?",
      answer: "Yes, we offer a 7-day satisfaction guarantee on most of our products. If you're not satisfied with your purchase, you can request a refund within 7 days. Please refer to our Refund Policy for more details."
    },
    {
      question: "Are there any discounts for bulk purchases?",
      answer: "Yes! We offer special discounts for bulk purchases. Please contact our customer support team for more information on bulk pricing."
    },
    {
      question: "How secure is my payment information?",
      answer: "All payments on Netreads are processed through secure payment gateways that use industry-standard encryption to protect your information. We never store your full credit card details on our servers."
    },
    {
      question: "Do you provide updates for the digital products?",
      answer: "Yes, for products that require updates (like software tools or courses covering evolving topics), we provide free updates for a specified period. The update policy is mentioned in each product's description."
    },
    {
      question: "Can I share or resell digital products purchased from Netreads?",
      answer: "No, our digital products are licensed for single-user personal use only. Sharing, distributing, or reselling our products is strictly prohibited and violates our terms of service."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our customer support team via email at support@netreads.in, by phone at +91 98765 43210, or through the contact form on our website. We aim to respond to all inquiries within 24 hours."
    },
    {
      question: "What should I do if I didn't receive my download link?",
      answer: "If you haven't received your download link within 15 minutes of purchase, please check your spam or promotions folder. If you still can't find it, contact our customer support team with your order number."
    },
    {
      question: "Do you offer any free resources?",
      answer: "Yes, we offer free sample downloads, blog posts, newsletters, and occasional webinars. Subscribe to our newsletter to stay updated on our free resources and special offers."
    }
  ];

  return (
    <>
      <PageHeader 
        title="Frequently Asked Questions" 
        description="Find answers to common questions about Netreads and our digital products"
      />
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <p className="text-gray-600 mb-8">
              Can't find the answer you're looking for? Contact our <a href="/contact" className="text-netreads-primary hover:underline">customer support team</a>.
            </p>
            
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <FAQItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isDefaultOpen={index === 0}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4 gradient-text">Still have questions?</h2>
            <p className="text-gray-600 mb-6">
              Our customer support team is here to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@netreads.in" 
                className="inline-flex items-center justify-center px-6 py-3 bg-netreads-primary hover:bg-netreads-secondary text-white rounded-md font-medium transition-colors"
              >
                Email Us
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-netreads-primary text-netreads-primary hover:bg-netreads-light rounded-md font-medium transition-colors"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
