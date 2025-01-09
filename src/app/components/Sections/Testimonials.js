'use client';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import TestimonialCard from '../TestimonialCard';
import { useState } from 'react';

export default function Testimonials() {
  const [swiper, setSwiper] = useState(undefined);

  return (
    <div className='mx-4 md:mx-8 lg:mx-12 xl:mx-20  py-10  relative '>
      <div className='testimonials z-10 h-2/3 w-full absolute top-0'></div>
      <div className='flex flex-col w-full lg:w-2/3 mx-auto px-4 lg:px-0 py-10 relative z-20 text-white'>
        <h2 data-aos='fade-right' data-aos-delay='100'>
          Clients Testimonials
        </h2>
        <div className='flex justify-between my-4 gap-4 lg:gap-0 lg:items-center flex-col lg:flex-row'>
          <h3
            className='text-3xl md:text-4xl lg:text-5xl leading-tight font-bold capitalize'
            data-aos='zoom-in'
            data-aos-delay='200'
          >
            see what our client <br /> says about us
          </h3>

          <div className='flex gap-4'>
            <button
              className='p-4 bg-white rounded-lg lg:h-max w-16 h-16'
              data-aos='fade-left'
              data-aos-delay='200'
            >
              <Image
                src={'/images/icons/ArrowSlideLeft.svg'}
                alt='testimonial'
                width={25}
                height={25}
                onClick={() => swiper.slidePrev()}
              />
            </button>
            <button
              className='p-4 bg-white rounded-lg lg:h-max w-16 h-16'
              data-aos='fade-right'
              data-aos-delay='200'
            >
              <Image
                src={'/images/icons/ArrowSlideRight.svg'}
                alt='testimonial'
                width={25}
                height={25}
                onClick={() => swiper.slideNext()}
              />
            </button>
          </div>
        </div>

        <div className='my-5'>
          <Swiper
            onSwiper={setSwiper}
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            draggable
            autoplay={{ delay: 8000 }}
            loop={true}
            className='!p-3'
            breakpoints={{
              // For screens >= 640px (Tablet)
              640: {
                slidesPerView: 2, // Show 4 slides on tablet
              },
              // For screens >= 1024px (Laptop and above)
              1024: {
                slidesPerView: 2, // Show 7 slides on laptop and above
              },
            }}
          >
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
