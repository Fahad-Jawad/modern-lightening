import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className='bg-black py-8 px-20 text-white flex justify-between rounded-tl-3xl rounded-tr-3xl'>
      <div className='w-1/4 flex flex-col gap-3'>
        <h2 className='text-xl font-bold'>Company Logo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          animi tempora obcaecati praesentium nulla, aliquid
        </p>
      </div>
      <div className='w-1/4 flex flex-col gap-3'>
        <h2 className='text-xl font-bold'>Shop By</h2>
        <Link href='#' className='underline-animation-white w-max'>
          Shop By Room
        </Link>
        <Link href='#' className='underline-animation-white w-max'>
          Shop By Style
        </Link>
        <Link href='#' className='underline-animation-white w-max'>
          Shop By Type
        </Link>
        <Link href='#' className='underline-animation-white w-max'>
          Shop By Collection
        </Link>
      </div>
      <div className='w-1/4 flex flex-col gap-3'>
        <h2 className='text-xl font-bold'>Categories</h2>
        <Link href='#' className='underline-animation-white w-max'>
          Chandelier
        </Link>
        <Link href='#' className='underline-animation-white w-max'>
          Wall Light
        </Link>
        <Link href='#' className='underline-animation-white w-max'>
          Pendant
        </Link>
        <Link href='#' className='underline-animation-white w-max'>
          Ceiling
        </Link>
        <Link href='#' className='underline-animation-white w-max'>
          Outdoor
        </Link>
      </div>
      <div className='w-1/4 flex flex-col gap-3'>
        <h2 className='text-xl font-bold'>Social Link</h2>
        <div className='flex gap-3'>
          <Link href='#' className='w-max'>
            <Image
              src={'/images/icons/FacebookWhite.svg'}
              alt='facebook'
              width={40}
              height={40}
            />
          </Link>
          <Link href='#' className='w-max'>
            <Image
              src={'/images/icons/InstaWhite.svg'}
              alt='facebook'
              width={40}
              height={40}
            />
          </Link>

          <Link href='#' className='w-max'>
            <Image
              src={'/images/icons/Xwhite.svg'}
              alt='facebook'
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
