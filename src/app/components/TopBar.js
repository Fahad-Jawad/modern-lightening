import Image from 'next/image';
import React from 'react';

export default function TopBar() {
  return (
    <div className='flex justify-between items-center px-20 py-2'>
      <div className='flex gap-5'>
        <p className='text-sm font-medium'>E-mail support 24/7</p>
        <p className='text-sm font-medium'>+1 888 988 4317</p>
      </div>
      <div className='flex gap-5'>
        <p className='text-sm font-medium'>
         <Image src={'/images/icons/FacebookIcon.svg'} alt='facebook-icon' width={18} height={18} />
        </p>

        <p className='text-sm font-medium'>
        <Image src={'/images/icons/InstaIcon.svg'} alt='facebook-icon' width={18} height={18} />

        </p>

        <p className='text-sm font-medium'>
        <Image src={'/images/icons/XIcon.svg'} alt='facebook-icon' width={18} height={18} />

        </p>
      </div>
    </div>
  );
}
