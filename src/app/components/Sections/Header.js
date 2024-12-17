'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import '../styles/Header.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Header() {
  return (
    <div className='w-full'>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        draggable
        autoplay={{ delay: 5000 }}
        loop={true}
        navigation
        className='!h-[700px]'
      >
        <SwiperSlide>
          <div className='w-full h-full slide1Bg flex items-center px-20'>
            <div className='flex flex-col gap-8 '>
              <h2 className='text-5xl text-white'>Try Out</h2>
              <h3 className='text-7xl font-bold text-yellow-500 leading-snug'>
                New Best Arrivals <br /> with 30% OFF
              </h3>
              <button className='bg-white rounded-full p-3 px-10 w-max text-xl font-semibold'>
                See More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full slide1Bg flex items-center px-20'>
            <div className='flex flex-col gap-8'>
              <h2 className='text-5xl text-white'>Try Out</h2>
              <h3 className='text-7xl font-bold text-yellow-500 leading-snug'>
                New Best Arrivals <br /> with 30% OFF
              </h3>
              <button className='bg-white rounded-full p-3 px-10 w-max text-xl font-semibold'>
                See More
              </button>
            </div>
          </div>{' '}
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full slide1Bg flex items-center px-20'>
            <div className='flex flex-col gap-8'>
              <h2 className='text-5xl text-white'>Try Out</h2>
              <h3 className='text-7xl font-bold text-yellow-500 leading-snug'>
                New Best Arrivals <br /> with 30% OFF
              </h3>
              <button className='bg-white rounded-full p-3 px-10 w-max text-xl font-semibold'>
                See More
              </button>
            </div>
          </div>{' '}
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full slide1Bg flex items-center px-20'>
            <div className='flex flex-col gap-8'>
              <h2 className='text-5xl text-white'>Try Out</h2>
              <h3 className='text-7xl font-bold text-yellow-500 leading-snug'>
                New Best Arrivals <br /> with 30% OFF
              </h3>
              <button className='bg-white rounded-full p-3 px-10 w-max text-xl font-semibold'>
                See More
              </button>
            </div>
          </div>{' '}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
