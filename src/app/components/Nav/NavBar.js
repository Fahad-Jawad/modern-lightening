'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { navData } from '../../constants/data';
import NavDetailType1 from './NavDetailType1';
import NavDetailType2 from './NavDetailType2';
import Image from 'next/image';

export default function NavBar() {
  const [hoveredLink, setHoveredLink] = useState('');

  return (
    <>
      <div className='w-full h-auto '>
        {/* Navbar */}
        <div className='navbar border-t border-b flex items-center justify-between px-4 md:px-8 lg:px-12 2xl:px-20 py-1 w-full z-20 bg-white relative'>
          <div className='flex items-center gap-10'>
            <Link href={'/'}>
              <Image
                src={'/images/logo.svg'}
                alt='Logo'
                width={80}
                height={80}
              />
            </Link>
            <div className='flex gap-8 text-lg font-medium'>
              <Link
                href='/'
                onMouseEnter={() => setHoveredLink(null)}
                className='parent-link'
              >
                Home
              </Link>
              <Link
                href='#'
                onMouseEnter={() => setHoveredLink('shopBy')}
                className='flex gap-3 items-center parent-link'
              >
                Shop By
                <span className='font-bold'>
                  <Image
                    src='/images/icons/ArrowDown.svg'
                    alt='menu-arrow'
                    width={16}
                    height={16}
                    className={`transition-transform duration-300 ${
                      hoveredLink === 'shopBy' ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </span>
              </Link>
              <Link
                href='#'
                onMouseEnter={() => setHoveredLink('IndoorLighting')}
                className='flex gap-3 items-center parent-link'
              >
                Indoor Lighting
                <Image
                  src='/images/icons/ArrowDown.svg'
                  alt='menu-arrow'
                  width={16}
                  height={16}
                  className={`transition-transform duration-300 ${
                    hoveredLink === 'IndoorLighting' ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </Link>
              <Link
                href='#'
                onMouseEnter={() => setHoveredLink('OutdoorLighting')}
                className='flex gap-3 items-center parent-link'
              >
                Outdoor Lighting
                <Image
                  src='/images/icons/ArrowDown.svg'
                  alt='menu-arrow'
                  width={16}
                  height={16}
                  className={`transition-transform duration-300 ${
                    hoveredLink === 'OutdoorLighting'
                      ? 'rotate-180'
                      : 'rotate-0'
                  }`}
                />
              </Link>
              <Link
                href='/electrical-supplies'
                onMouseEnter={() => setHoveredLink(null)}
                className='parent-link'
              >
                Electrical Supplies
              </Link>
              <Link
                href='/fashion-lights'
                onMouseEnter={() => setHoveredLink(null)}
                className='parent-link'
              >
                Fashion lights
              </Link>

              <div
                className='relative text-lg'
                onMouseEnter={() => setHoveredLink('highlights')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link href='#' className='flex gap-3 items-center parent-link'>
                  Featured Products
                  <Image
                    src='/images/icons/ArrowDown.svg'
                    alt='menu-arrow'
                    width={16}
                    height={16}
                    className={`transition-transform duration-300 ${
                      hoveredLink === 'highlights' ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </Link>
                {hoveredLink === 'highlights' && (
                  <div className='absolute w-full top-full left-0 mt-0 bg-white shadow-lg rounded text-base'>
                    <Link
                      href='/best-seller'
                      className='block px-4 py-2 hover:bg-primaryLight border-b border-gray-300'
                    >
                      Best Seller
                    </Link>
                    <Link
                      href='#'
                      className='block px-4 py-2 hover:bg-primaryLight'
                    >
                      New Arrivals
                    </Link>
                  </div>
                )}
              </div>
              <div
                className='relative text-lg'
                onMouseEnter={() => setHoveredLink('more')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link href='#' className='flex gap-3 items-center parent-link'>
                  More
                  <Image
                    src='/images/icons/ArrowDown.svg'
                    alt='menu-arrow'
                    width={16}
                    height={16}
                    className={`transition-transform duration-300 ${
                      hoveredLink === 'more' ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </Link>
                {hoveredLink === 'more' && (
                  <div className='absolute top-full left-0 mt-0 w-40 bg-white shadow-lg rounded text-base'>
                    <Link
                      href='/about-us'
                      className='block px-4 py-2 hover:bg-primaryLight border-b border-gray-300'
                    >
                      About Us
                    </Link>
                    <Link
                      href='/contact-us'
                      className='block px-4 py-2 hover:bg-primaryLight border-b border-gray-300'
                    >
                      Contact Us
                    </Link>
                    <Link
                      href='/indoor/category3'
                      className='block px-4 py-2 hover:bg-primaryLight'
                    >
                      FAQs
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Dropdown Menu */}
        <div
          className={`absolute left-0 top-[100%] links-Detail w-full px-10 transition-all duration-300 ease-out transform z-40 bg-white ${
            hoveredLink
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-5 pointer-events-none'
          }`}
          onMouseEnter={() => setHoveredLink(hoveredLink)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          {hoveredLink && navData[hoveredLink]?.type === 1 && (
            <NavDetailType1
              navLink={navData[hoveredLink]}
              setHoveredLink={setHoveredLink}
            />
          )}
          {hoveredLink && navData[hoveredLink]?.type === 2 && (
            <NavDetailType2
              navLink={navData[hoveredLink]}
              setHoveredLink={setHoveredLink}
            />
          )}
        </div>
      </div>
    </>
  );
}
