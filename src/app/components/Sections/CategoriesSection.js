import React from 'react';

export default function CategoriesSection() {
  return (
    <div className='w-full flex flex-col gap-1 px-20 py-10'>
        <div className='flex flex-col gap-2 text-center mb-5'>
        <h2 className='text-base text-gray-300'>We Provide</h2>
        <h3 className='text-3xl font-bold'>Variety To Choose From</h3>
      </div>
      <div className='w-full flex gap-1 text-white'>
        <div className='w-6/12 flex flex-col justify-center promo2 p-16 py-24 rounded-lg'>
          <h2 className='text-lg font-bold'>New</h2>
          <p className='text-4xl mt-2'>ARRIVALS</p>
        </div>
        <div className='w-3/12 flex flex-col justify-center testimonials p-10 rounded-lg'>
          <h2 className='text-lg font-bold'>New</h2>
          <p className='text-4xl mt-2'>Sale</p>
        </div>
        <div className='w-3/12 flex flex-col justify-center Chandeliers3 p-10 rounded-lg'>
          <h2 className='text-lg font-bold'>Best</h2>
          <p className='text-4xl mt-2'>Chandeliers</p>
        </div>
      </div>
      <div className='w-full flex gap-1 text-white'>
        <div className='w-5/12 flex flex-col justify-center Scandinavian1 p-10 rounded-lg'>
          <h2 className='text-lg font-bold'>Best</h2>
          <p className='text-4xl mt-2'>Scandinavian</p>
        </div>
        <div className='w-7/12 flex flex-col justify-center promo1 p-16 py-24 rounded-lg'>
          <h2 className='text-lg font-bold'>New</h2>
          <p className='text-4xl mt-2'>ARRIVALS</p>
        </div>
       
      </div>
    </div>
  );
}
