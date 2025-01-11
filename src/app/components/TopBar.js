import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function TopBar() {
  return (
    <div className='flex justify-between items-center px-4 md:px-8 lg:px-12 2xl:px-20 py-4 bg-black text-white'>
      <div className='flex gap-5'>
        <div className='flex items-center gap-3'>
          <Image
            src={'/images/icons/EmailSolid.svg'}
            alt='facebook-icon'
            width={25}
            height={25}
            className='p-1 bg-white rounded-sm'
          />
          <p className='text-sm font-medium'>example@gmail.com</p>
        </div>
        <div className='flex items-center gap-3'>
          <Image
            src={'/images/icons/PhoneSolid.svg'}
            alt='facebook-icon'
            width={25}
            height={25}
            className='p-1 bg-white rounded-sm'
          />
          <p className='text-sm font-medium'>+1 888 988 4317</p>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <Image
          src={'/images/icons/Address.svg'}
          alt='address-icon'
          width={25}
          height={25}
          className='p-1 bg-white rounded-sm'
        />
        <p className='text-sm font-medium'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis et
          nihil quas tempora
        </p>
      </div>
      <div className='flex gap-5'>
        <Link href='/'>
          <Image
            src={'/images/icons/FacebookIcon.svg'}
            alt='facebook-icon'
            width={25}
            height={25}
            className='p-1 bg-white rounded-sm'
          />
        </Link>
        <Link href='/'>
          <Image
            src={'/images/icons/InstaIcon.svg'}
            alt='facebook-icon'
            width={25}
            height={25}
            className='p-1 bg-white rounded-sm'
          />
        </Link>
        <Link href='/'>
          <Image
            src={'/images/icons/XIcon.svg'}
            alt='facebook-icon'
            width={25}
            height={25}
            className='p-1 bg-white rounded-sm'
          />
        </Link>
      </div>
    </div>
  );
}
