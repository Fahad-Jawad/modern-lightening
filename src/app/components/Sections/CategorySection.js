'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, A11y, Autoplay } from 'swiper/modules';
import '../styles/Header.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const categories = [
  'Chandelier',
  'Wall Light',
  'Bedroom',
  'Pendant',
  'Ceiling',
  'Outdoor',
  'Dining Room',
];
export default function CategorySection() {
  return (
    <div className='flex  py-10 z-10 cursor-pointer'>
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        slidesPerView={6}
        
        draggable
        autoplay={{ delay: 8000 }}
        loop={true}
        className='h-full'
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className='p-2'>
            <div className='w-40 h-40 rounded-full flex section1 justify-center items-center relative mx-auto'>
              <div className='w-full h-full z-20 absolute bg-black opacity-30 rounded-full'></div>
              <h2 className='relative text-center z-20 text-white text-lg font-semibold'>
                {category}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
