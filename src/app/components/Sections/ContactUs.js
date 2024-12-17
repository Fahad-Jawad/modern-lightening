import Image from 'next/image';
import React from 'react';

export default function ContactUs() {
  return (
    <div className='flex px-20 py-10'>
      <div className='w-1/3'>
        <h2 className='text-4xl font-bold uppercase'>Got some burning questions?</h2>
        <p className='my-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          incidunt libero laboriosam ut sapiente. Quas repudiandae suscipit vero
          facilis fugiat maxime dolorem.
        </p>

        <div className='flex flex-col justify-between gap-8'>
          <div className='flex gap-5 items-center'>
            <div className='bg-black rounded-full p-3'>
            <Image
              src={'/images/icons/Phone.svg'}
              alt='modern design'
              width={25}
              height={25}
              
            />
            </div>
            <div className='flex flex-col gap-1'>
              <h3 className='text-xl font-bold '>Hotline</h3>
              <p className='text-sm'>
              +1 888 988 4317
              </p>
            </div>
          </div>
          <div className='flex gap-5 items-center'>
          <div className='bg-black rounded-full p-3'>

            <Image
              src={'/images/icons/Location.svg'}
              alt='modern design'
              width={27}
              height={27}
            />
            </div>
            <div className='flex flex-col gap-1'>
              <h3 className='text-xl font-bold '>Our Location</h3>
              <p className='text-sm'>
                email@example.com
              </p>
            </div>
          </div>

          <div className='flex gap-5 items-center'>
          <div className='bg-black rounded-full p-3'>

            <Image
              src={'/images/icons/Mail.svg'}
              alt='modern design'
              width={25}
              height={25}
            />
            </div>
            <div className='flex flex-col gap-1'>
              <h3 className='text-xl font-bold '>Official Email</h3>
              <p className='text-sm'>
                55 Main street , The Grand Avenue , New York City
              </p>
            </div>
          </div>

        </div>
      </div>
      <div className='w-2/3 flex justify-end'>
      <div className='w-2/3 rounded-xl shadow-2xl p-10'>
        <h2 className='text-xl font-semibold text-gray-300'>Have Question?</h2>
        <h3 className='text-3xl font-bold my-2'>Send us a Message</h3>

        <div className='mt-5 flex flex-col gap-5'>
        <div>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-200 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required />
        </div>
        <div className='flex gap-6'>
            <input type="text" id="email" className="bg-gray-50 border border-gray-200 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
            <input type="text" id="phone" className="bg-gray-50 border border-gray-200 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone" required />
        </div>
        <div>
        <textarea id="message" rows="4" className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message"></textarea>

        </div>

        <button className='bg-black text-white p-3 px-6 rounded-xl w-max'>Submit</button>
        </div>
      </div>
      </div>
    </div>
  );
}
