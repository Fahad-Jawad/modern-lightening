import React from 'react';
import SectionDivider from '../SectionDivider';


export default function CategoriesSection() {
  return (
    <div className='w-full flex flex-col gap-1 px-4 md:px-8 lg:px-12 2xl:px-20 py-10'>
      <div className='flex flex-col gap-0 text-center' data-aos='zoom-out-up'>
        <h2 className='text-base text-primary'>We Provide</h2>
        <SectionDivider />

        <h3 className='text-3xl lg:text-4xl font-bold'>
          Variety To Choose From
        </h3>
      </div>
      <div className='w-full flex flex-col lg:flex-row gap-3 lg:gap-1 mt-12 text-white'>
        <div
          className='w-full lg:w-6/12 flex flex-col justify-center promo2 p-16 lg:py-24 rounded-lg'
          data-aos='zoom-in'
          data-aos-delay='100'
        >
          <h2 className='text-lg font-bold'>New</h2>
          <p className='text-4xl mt-2'>ARRIVALS</p>
        </div>
        <div
          className='w-full lg:w-3/12 flex flex-col justify-center testimonials p-16 lg:p-10 rounded-lg'
          data-aos='zoom-in'
          data-aos-delay='200'
        >
          <h2 className='text-lg font-bold'>New</h2>
          <p className='text-4xl mt-2'>Sale</p>
        </div>
        <div
          className='w-full lg:w-3/12 flex flex-col justify-center Chandeliers3 p-16 lg:p-10 rounded-lg'
          data-aos='zoom-in'
          data-aos-delay='300'
        >
          <h2 className='text-lg font-bold'>Best</h2>
          <p className='text-4xl mt-2'>Chandeliers</p>
        </div>
      </div>
      <div className='w-full flex flex-col lg:flex-row gap-3 lg:gap-1 text-white'>
        <div
          className='w-full lg:w-5/12 flex flex-col justify-center Scandinavian1 p-16 lg:p-10 rounded-lg'
          data-aos='zoom-in'
          data-aos-delay='400'
        >
          <h2 className='text-lg font-bold'>Best</h2>
          <p className='text-4xl mt-2'>Scandinavian</p>
        </div>
        <div
          className='w-full lg:w-7/12 flex flex-col justify-center promo1 p-16 lg:p-16 lg:py-24 rounded-lg'
          data-aos='zoom-in'
          data-aos-delay='500'
        >
          <h2 className='text-lg font-bold'>Best</h2>
          <p className='text-4xl mt-2'>Sellers</p>
        </div>
      </div>
    </div>
  );
}
