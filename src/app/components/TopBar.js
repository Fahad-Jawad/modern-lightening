import Image from 'next/image';
import React from 'react';

export default function TopBar() {
  return (
    <div className='flex justify-between items-center px-20 py-4'>
      <div className='flex gap-5'>
        <div className='flex items-center gap-3'>
          <Image
            src={'/images/icons/EmailSolid.svg'}
            alt='facebook-icon'
            width={16}
            height={16}
          />
          <p className='text-sm font-medium'>example@gmail.com</p>
        </div>
        <div className='flex items-center gap-3'>
          <Image
            src={'/images/icons/PhoneSolid.svg'}
            alt='facebook-icon'
            width={16}
            height={16}
          />
          <p className='text-sm font-medium'>+1 888 988 4317</p>
        </div>
      </div>
      <div className='flex items-center gap-3'>
          <Image
            src={'/images/icons/Address.svg'}
            alt='facebook-icon'
            width={18}
            height={18}
          />
          <p className='text-sm font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis et nihil quas tempora</p>
        </div>
      <div className='flex gap-5'>
        <p className='text-sm font-medium'>
          <Image
            src={'/images/icons/FacebookIcon.svg'}
            alt='facebook-icon'
            width={18}
            height={18}
          />
        </p>

        <p className='text-sm font-medium'>
          <Image
            src={'/images/icons/InstaIcon.svg'}
            alt='facebook-icon'
            width={18}
            height={18}
          />
        </p>

        <p className='text-sm font-medium'>
          <Image
            src={'/images/icons/XIcon.svg'}
            alt='facebook-icon'
            width={18}
            height={18}
          />
        </p>
      </div>
    </div>
  );
}
