import Image from 'next/image';
import React from 'react';

export default function WhyChooseUs() {
  return (
    <div className='flex flex-col px-20 py-10'>
      <div className='flex flex-col gap-2 text-center' data-aos="zoom-out-up">
        <h2 className='text-base text-gray-300'>Why Choose US</h2>
        <h3 className='text-4xl font-bold'>Why Choose MOD Lights</h3>
      </div>

      <div className='flex gap-8 mt-12'>
        <div className='w-1/2 flex flex-col justify-between pb-4'>
          <div className='flex gap-5 items-start' data-aos="fade-down" data-aos-delay='200'>
            <Image
              src={'/images/icons/ModernDesign.svg'}
              alt='modern design'
              width={60}
              height={60}
            />
            <div className='flex flex-col gap-2'>
              <h3 className='text-2xl font-bold'>Modern Design</h3>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi libero molestiae suscipit. Quisquam quibusdam
                perspiciatis
              </p>
            </div>
          </div>

          <div className='flex gap-5 items-start' data-aos="fade-down" data-aos-delay='400'>
            <Image
              src={'/images/icons/Quality.svg'}
              alt='modern design'
              width={55}
              height={55}
            />
            <div className='flex flex-col gap-2'>
              <h3 className='text-2xl font-bold'>Best Quality</h3>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi libero molestiae suscipit. Quisquam quibusdam
                perspiciatis
              </p>
            </div>
          </div>

          <div className='flex gap-5 items-start' data-aos="fade-down" data-aos-delay='600'>
            <Image
              src={'/images/icons/Price.svg'}
              alt='modern design'
              width={55}
              height={55}
            />
            <div className='flex flex-col gap-2'>
              <h3 className='text-2xl font-bold'>Best Price</h3>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi libero molestiae suscipit. Quisquam quibusdam
                perspiciatis
              </p>
            </div>
          </div>
        </div>
        <div className='w-1/2 flex gap-6'>
          <div className='w-1/2'>
            <Image
              src={'/images/why1.png'}
              alt='modern design'
              width={500}
              height={500}
              className='h-[400px] w-full whyUsImg1'
              data-aos="zoom-in-right" 
              data-aos-delay='200'
            />{' '}
          </div>
          <div className='w-1/2 flex flex-col gap-3'>
          <Image
              src={'/images/Scandinavian3.png'}
              alt='modern design'
              width={550}
              height={550}
              className='h-[190px] w-full whyUsImg2'
              data-aos="zoom-in-up" 
              data-aos-delay='400'
            />{' '}
             <Image
              src={'/images/why3.png'}
              alt='modern design'
              width={550}
              height={550}
              className='h-[190px] w-full whyUsImg3'
              data-aos="zoom-in-down" 
              data-aos-delay='600'
            />{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
