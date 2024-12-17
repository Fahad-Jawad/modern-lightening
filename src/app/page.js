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
import FaqSection from './components/Sections/FaqSection';
import Map from './components/Map';
import Footer from './components/Sections/Footer';

export default function Home() {
  return (
    <div className='w-full h-screen'>
      <div className='flex flex-col h-full'>
        <CategorySection />
        <Header />
        <PopularProducts />
        <WhyChooseUs />
        <Promos />
        <CategoriesSection />
        <StatsSection />
        <PromoAttach />
        <FaqSection />
        <Testimonials />
        <ContactUs />
        <Map />
        <Footer />
        
      </div>
    </div>
  );
}
