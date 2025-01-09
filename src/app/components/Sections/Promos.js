import React from 'react';

export default function Promos() {
  return (
    <div className='flex gap-10 px-4 md:px-8 lg:px-12 2xl:px-20 py-10'>
      <div className='w-1/2 promo1'>
        <div className='flex flex-col gap-4 p-12 px-16 w-full text-white'>
          <h2 className='text-2xl'>Get Upto</h2>
          <h3 className='text-7xl font-semibold'>40% OFF</h3>
          <p className='text-lg'>On floor lamps</p>
          <button className='bg-white text-black font-semibold border p-3 px-5 rounded-xl w-max'>View More</button>
        </div>
      </div>

      <div className='w-1/2 promo2'>
        <div className='flex flex-col gap-4 p-12 px-16 w-full text-white'>
          <h2 className='text-2xl'>Get Upto</h2>
          <h3 className='text-7xl font-semibold'>60% OFF</h3>
          <p className='text-lg'>On floor lamps</p>
          <button className='bg-white text-black font-semibold border p-3 px-5 rounded-xl w-max'>View More</button>
        </div>
      </div>
    </div>
  );
}
