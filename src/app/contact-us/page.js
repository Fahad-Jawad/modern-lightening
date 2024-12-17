import React from 'react';
import ContactUs from '../components/Sections/ContactUs';

export default function ContactUsPage() {
  return (
    <div>
      <div className='flex items-center justify-center py-40 contactUs text-white'>
        <h2 className='text-5xl font-semibold'>Contact Us</h2>
      </div>
      <div className='py-10'>
        <ContactUs />
      </div>
    </div>
  );
}
