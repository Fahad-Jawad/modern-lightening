'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Accordion from '../Accordion';

export default function MobileNav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const toggleAccordion = (accordionIndex) => {
    setActiveAccordion((prev) =>
      prev === accordionIndex ? null : accordionIndex
    );
  };

  const closeMobileNav = () => {
    if(activeAccordion === 1){
      toggleAccordion(1)
    }
    setIsMobileNavOpen(false); // Close the mobile nav when a link is clicked
  };

  return (
    <>
      <div className='flex justify-between items-center px-4 w-full'>
        <Image
          src={'/images/logo.svg'}
          alt='modern-lighting logo'
          width={80}
          height={80}
        />
        {/* Mobile Toggle Button */}
        <div className='xl:hidden'>
          <button onClick={toggleMobileNav}>
            <span className='text-2xl'>&#9776;</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 overflow-y-scroll ${
          isMobileNavOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className='flex justify-between p-4'>
          <Image
            src={'/images/logo.svg'}
            alt='modern-lighting logo'
            width={80}
            height={80}
          />
          <button onClick={toggleMobileNav} className='text-3xl text-black'>
            &times;
          </button>
        </div>

        {/* Mobile Links */}
        <div className='flex flex-col items-center text-black px-4'>
          <Link
            href='/'
            className='text-base font-medium border-b w-full text-start py-2'
            onClick={closeMobileNav} // Close the mobile nav when clicked
          >
            Home
          </Link>

          <div className='w-full mobile-menu'>
            {/* Relaxing Essence Accordion */}
            <button
              onClick={() => toggleAccordion(1)}
              className='text-base font-medium w-full text-left py-3 border-b flex justify-between items-center'
            >
              Shop By
              <Image
                src='/images/icons/ArrowDown.svg'
                alt='arrow'
                width={13}
                height={13}
                className={`transform transition-transform ${
                  activeAccordion === 1 ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                activeAccordion === 1 ? 'max-h-96' : 'max-h-0'
              }`}
              style={{ transitionProperty: 'max-height' }}
            >
              <Accordion title={'Shop By Style'} className='py-3 text-sm' isNav>
                <div className='flex flex-col bg-primaryLight text-sm'>
                  <Link
                    href='/products/scandinavian'
                    className='block px-4 py-3 hover:bg-gray-300'
                    onClick={closeMobileNav}
                  >
                    Scandinavian
                  </Link>
                  <Link
                    href='/products/minimalistic'
                    className='block px-4 py-3 hover:bg-gray-300'
                    onClick={closeMobileNav}
                  >
                    Minimalistic
                  </Link>
                  <Link
                    href='/products/metropolitan'
                    className='block px-4 py-3 hover:bg-gray-300'
                    onClick={closeMobileNav}
                  >
                    Metropolitan
                  </Link>
                  <Link
                    href='/products/mid-century'
                    className='block px-4 py-3 hover:bg-gray-300'
                    onClick={closeMobileNav}
                  >
                    Mid-Century
                  </Link>
              
                </div>
              </Accordion>

              <Accordion
                title={'Shop By Outdoor'}
                className='py-3 text-sm'
                isNav
              >
                <div className='flex flex-col bg-primaryLight text-sm'>
                  <Link
                    href=''
                    className='block px-4 py-3 hover:bg-gray-300'
                    onClick={closeMobileNav}
                  >
                    Shop All Outdoor
                  </Link>
                  <Link
                    href='/products/dining-room'
                    className='block px-4 py-3 hover:bg-gray-300'
                    onClick={closeMobileNav}
                  >
                    Dining Room
                  </Link>
                  <Link
                    href='/products/living-room'
                    className='block px-4 py-3 hover:bg-gray-300'
                    onClick={closeMobileNav}
                  >
                    Living Room
                  </Link>
                  <Link
                    href='/products/bedroom'
                    className='block px-4 py-3 hover:bg-gray-300'
                    onClick={closeMobileNav}
                  >
                    Bed Room
                  </Link>
                </div>
              </Accordion>
              {/* Add the rest of your Accordions with similar onClick handlers */}
            </div>
          </div>

          <Link
            href='/about-us'
            className='text-base font-medium border-b w-full text-start py-3'
            onClick={closeMobileNav}
          >
            About Us
          </Link>
          <Link
            href='/best-sellers'
            className='text-base font-medium border-b w-full text-start py-3'
            onClick={closeMobileNav}
          >
            Best Sellers
          </Link>
          <Link
            href='/new-arrivals'
            className='text-base font-medium border-b w-full text-start py-3'
            onClick={closeMobileNav}
          >
            New Arrivals
          </Link>
          <Link
            href='/contact-us'
            className='text-base font-medium border-b w-full text-start py-3'
            onClick={closeMobileNav}
          >
            Contact Us
          </Link>
        </div>

        {/* Social Links */}
        <div className='mt-20 w-full flex justify-center space-x-6 px-4'>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-80'
          >
            <img
              src='/images/icons/FacebookIcon.svg'
              alt='Facebook'
              className='h-6 w-6'
            />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-80'
          >
            <img
              src='/images/icons/XIcon.svg'
              alt='Twitter'
              className='h-6 w-6'
            />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-80'
          >
            <img
              src='/images/icons/InstaIcon.svg'
              alt='Instagram'
              className='h-6 w-6'
            />
          </a>
        </div>
      </div>
    </>
  );
}
