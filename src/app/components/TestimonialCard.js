import Image from 'next/image';
import React from 'react';

export default function TestimonialCard() {
  return (
    <div className='bg-white rounded-xl p-5 shadow-lg'>
      <div className='flex justify-between lg:items-center gap-5 flex-col lg:flex-row'>
        <div className='flex gap-5 items-center'>
          <Image
            src={'/images/client1.jpg'}
            alt='client-1'
            className='rounded-full w-14 h-14'
            width={300}
            height={300}
          />
          <div className='flex flex-col gap-1'>
            <h2 className='text-lg text-black font-bold'>Client Name</h2>
            <p className='text-sm text-primary font-semibold'>Client Designation</p>
          </div>
        </div>
        <div className='flex items-center'>
            <Image src={'/images/icons/Star.svg'} alt='rating' width={17} height={17} />
            <Image src={'/images/icons/Star.svg'} alt='rating' width={17} height={17} />
            <Image src={'/images/icons/Star.svg'} alt='rating' width={17} height={17} />
            <Image src={'/images/icons/Star.svg'} alt='rating' width={17} height={17} />
            <Image src={'/images/icons/Star.svg'} alt='rating' width={17} height={17} />
        </div>
      </div>
      <p className='text-gray-400 text-sm mt-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque quo
        nisi dicta, deserunt deleniti amet natus earum ducimus, doloremque id
        vero velit porro dolor repudiandae? Nostrum, dolorum! Nostrum,
        consectetur!
      </p>
    </div>
  );
}
