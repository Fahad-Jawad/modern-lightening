'use client'
import Image from 'next/image';
import Header from './components/Sections/Header';
import CategorySection from './components/Sections/CategorySection';
import Promos from './components/Sections/Promos';
import WhyChooseUs from './components/Sections/WhyChooseUs';
import PromoAttach from './components/Sections/PromoAttach';
import CategoriesSection from './components/Sections/CategoriesSection';
import ContactUs from './components/Sections/ContactUs';
import PopularProducts from './components/Sections/PopularProducts';
import Testimonials from './components/Sections/Testimonials';
import StatsSection from './components/Sections/StatsSection';
import Footer from './components/Sections/Footer';


import 'aos/dist/aos.css'; // AOS styles
import { useEffect } from 'react';
import AOS from 'aos';
import InDemand from './components/Sections/InDemand';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
    });
  }, []);
  return (
    <div className='w-full h-full'>
      <div className='flex flex-col h-full'>
        <Header />
        <CategorySection />
        <WhyChooseUs />
        <PopularProducts />
        {/* <Promos /> */}
        <CategoriesSection />
        <StatsSection />
        <PromoAttach />
        <InDemand />
        <Testimonials />
        <ContactUs />
        <Footer />
        
      </div>
    </div>
  );
}
