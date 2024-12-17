import React from 'react';
import WhyChooseUs from '../components/Sections/WhyChooseUs';
import StatsSection from '../components/Sections/StatsSection';
import Testimonials from '../components/Sections/Testimonials';

export default function AboutUs() {
  return (
    <div>
      <div className='flex items-center justify-center py-40 aboutUs text-white'>
        <h2 className='text-5xl font-semibold'>About Us</h2>
      </div>
      <div className='py-10'>
        <WhyChooseUs />
        <StatsSection />
        <Testimonials />
      </div>
    </div>
  );
}
