'use client';

import React from 'react';
import Accordion from '../Accordion';

const FaqSection = () => {
  const faqs = [
    {
      question: 'Shop By Room',
      answer:
        'Our return policy allows you to return items within 30 days of purchase. Items must be in their original condition.',
    },
    {
      question: 'Shop By Style',
      answer:
        'Once your order is shipped, you will receive a tracking link via email or SMS. You can use it to track your order status.',
    },
    {
      question: 'Shop By Type',
      answer:
        'We accept all major credit cards, PayPal, and other local payment methods based on your location.',
    },
    {
      question: 'Shop By Collection',
      answer:
        'You can contact our customer support via the “Contact Us” page or by emailing support@example.com.',
    },
  ];

  return (
    <section className='py-10'>
      <div className='container mx-auto px-6 lg:px-20'>
        <div className=' mx-auto rounded-lg shadow-lg'>
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.question} className='p-6 text-2xl'>
              <p className='text-lg'>{faq.answer}</p>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
