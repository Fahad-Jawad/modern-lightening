import React from 'react';

export default function PromoAttach() {
  return (
    <div className=' mx-20 py-32 my-10 flex items-center promoAttach'>
      <div className='w-1/2'></div>
      <div className='w-1/2 flex flex-col gap-5'>
        <div className='bg-white border-l-4 border-red-500 p-4'>
          <p className='text-4xl leading-relaxed'>
            TIME TO ORDER YOUR ITEM <br />
            <span className='font-semibold'> MAKE'S YOU COLORFUL</span>
          </p>
        </div>
        <p className='text-3xl text-white font-semibold p-4 py-2'>NEW 2024 STREET COLLECTION</p>
        <button className='bg-white rounded-xl p-3 px-6 w-max mx-4 font-semibold'>Visit Now</button>
      </div>
    </div>
  );
}
