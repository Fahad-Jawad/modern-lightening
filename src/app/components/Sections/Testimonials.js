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
    <div className='mx-20 py-10  relative '>
      <div className='testimonials z-10 h-2/3 w-full absolute top-0'></div>
      <div className='flex flex-col w-2/3 mx-auto py-10 relative z-20 text-white'>
        <h2>Clients Testimonials</h2>
        <div className='flex justify-between my-4 items-center'>
          <h3 className='text-5xl leading-tight font-bold capitalize'>
            see what our client <br /> says about us
          </h3>

          <div className='flex gap-4'>
            <button className='p-4 bg-white rounded-lg h-max'>
              <Image
                src={'/images/icons/ArrowSlideLeft.svg'}
                alt='testimonial'
                width={25}
                height={25}
                onClick={() => swiper.slidePrev()}
              />
            </button>
            <button className='p-4 bg-white rounded-lg h-max'>
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
            slidesPerView={2}
            draggable
            autoplay={{ delay: 8000 }}
            loop={true}
            className='!p-3'
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
