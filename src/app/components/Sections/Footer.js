import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Map from '../Map';

export default function Footer() {
  return (
    <>
      <Map />
      <div className='bg-black py-8 px-4 md:px-8 lg:px-12 2xl:px-20 text-white flex justify-between rounded-tl-3xl rounded-tr-3xl flex-col lg:flex-row gap-8 lg:gap-0'>
        <div className='w-full lg:w-1/4 flex flex-col gap-5 items-center lg:items-start'>
          <div className='flex justify-center w-3/4'>
            <Image
              src={'/images/logoWhite.jpg'}
              alt='modern-lighting logo'
              width={160}
              height={150}
              className='rounded-xl'
            />
          </div>

        </div>
        <div className='w-full lg:w-1/4 flex flex-col gap-3 items-center lg:items-start'>
          <h2 className='text-xl font-bold uppercase '>Shop By</h2>
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
        <div className='w-full lg:w-1/4 flex flex-col gap-3 items-center lg:items-start'>
          <h2 className='text-xl font-bold uppercase '>Categories</h2>
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
        <div className='w-full lg:w-1/4 flex flex-col gap-3 items-center lg:items-start'>
          <h2 className='text-xl font-bold uppercase '>Contact Us</h2>
          <div className='flex flex-col justify-between gap-3'>
            <div className='flex gap-5 items-center flex-col lg:flex-row text-center lg:text-start'>
              <div className='bg-white rounded-full p-2'>
                <Image
                  src={'/images/icons/PhoneBlack.svg'}
                  alt='modern design'
                  width={20}
                  height={20}
                />
              </div>
              <div className='flex flex-col gap-1'>
                <h3 className='text-base font-bold '>Hotline</h3>
                <p className='text-xs'>+1 888 988 4317</p>
              </div>
            </div>
            <div className='flex gap-5 items-center flex-col lg:flex-row text-center lg:text-start'>
              <div className='bg-white rounded-full p-2'>
                <Image
                  src={'/images/icons/MailBlack.svg'}
                  alt='modern design'
                  width={21}
                  height={21}
                />
              </div>
              <div className='flex flex-col gap-1'>
                <h3 className='text-base font-bold '>Official Email</h3>
                <p className='text-xs'>email@example.com</p>
              </div>
            </div>

            <div className='flex gap-5 items-center flex-col lg:flex-row text-center lg:text-start'>
              <div className='bg-white rounded-full p-2'>
                <Image
                  src={'/images/icons/LocationBlack.svg'}
                  alt='modern design'
                  width={26}
                  height={26}
                />
              </div>
              <div className='flex flex-col gap-1'>
                <h3 className='text-base font-bold '>Our Location</h3>
                <p className='text-xs'>
                  55 Main street , The Grand Avenue , New York City
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/4 flex flex-col gap-3 items-center lg:items-start'>
          <h2 className='text-xl font-bold uppercase '>Social Links</h2>
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
    </>
  );
}
