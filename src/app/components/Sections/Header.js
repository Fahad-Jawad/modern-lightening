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
        className='h-[400px] lg:!h-[700px]'
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        <SwiperSlide>
          <div className='w-full h-full slide1Bg flex items-center px-4 md:px-14 lg:px-12 2xl:px-20'>
            <div className='flex flex-col gap-3 md:gap-4 lg:gap-8 '>
              <h2 className='text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white'>Try Out</h2>
              <h3 className='text-4xl md:text-5xl xl:text-7xl font-bold text-primary leading-snug'>
                New Best Arrivals <br /> with 30% OFF
              </h3>
              <button className='bg-white rounded-full p-3 px-5 md:px-5 lg:px-10 w-max text-sm md:text-base lg:text-xl font-semibold'>
                See More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full slide1Bg flex items-center px-4 md:px-14 lg:px-12 2xl:px-20'>
            <div className='flex flex-col gap-8'>
              <h2 className='text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white'>Try Out</h2>
              <h3 className='text-4xl md:text-5xl xl:text-7xl font-bold text-primary leading-snug'>
                New Best Arrivals <br /> with 30% OFF
              </h3>
              <button className='bg-white rounded-full p-3 px-5 md:px-5 lg:px-10 w-max text-sm md:text-base lg:text-xl font-semibold'>
                See More
              </button>
            </div>
          </div>{' '}
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full slide1Bg flex items-center px-4 md:px-14 lg:px-12 2xl:px-20'>
            <div className='flex flex-col gap-8'>
              <h2 className='text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white'>Try Out</h2>
              <h3 className='text-4xl md:text-5xl xl:text-7xl font-bold text-primary leading-snug'>
                New Best Arrivals <br /> with 30% OFF
              </h3>
              <button className='bg-white rounded-full p-3 px-5 md:px-5 lg:px-10 w-max text-sm md:text-base lg:text-xl font-semibold'>
                See More
              </button>
            </div>
          </div>{' '}
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full slide1Bg flex items-center px-4 md:px-14 lg:px-12 2xl:px-20'>
            <div className='flex flex-col gap-8'>
              <h2 className='text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white'>Try Out</h2>
              <h3 className='text-4xl md:text-5xl xl:text-7xl font-bold text-primary leading-snug'>
                New Best Arrivals <br /> with 30% OFF
              </h3>
              <button className='bg-white rounded-full p-3 px-5 md:px-5 lg:px-10 w-max text-sm md:text-base lg:text-xl font-semibold'>
                See More
              </button>
            </div>
          </div>{' '}
        </SwiperSlide>
        <div className="swiper-button-next !hidden md:!block"></div>
        <div className="swiper-button-prev !hidden md:!block"></div>
      </Swiper>
    </div>
  );
}
