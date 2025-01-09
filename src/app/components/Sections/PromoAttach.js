import React from 'react';

export default function PromoAttach() {
  return (
    <div className='mx-4 md:mx-8 lg:mx-12 xl:mx-20 py-32 my-10 flex items-center promoAttach rounded-lg'>
      <div className='w-1/6 lg:w-1/2'></div>
      <div className='w-5/6 lg:w-1/2 flex flex-col gap-5'>
        <div className='bg-white border-l-4 border-red-500 p-4'>
          <p className='text-xl lg:text-2xl leading-relaxed'>
            TIME TO ORDER YOUR ITEM <br />
            <span className='font-semibold text-primary'> MAKE'S YOU COLORFUL</span>
          </p>
        </div>
        <p className='text-2xl lg:text-3xl text-white font-semibold p-4 py-2'>NEW 2024 STREET COLLECTION</p>
        <button className='bg-white rounded-xl p-3 px-6 w-max mx-4 font-semibold'>Visit Now</button>
      </div>
    </div>
  );
}
