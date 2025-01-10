'use client';
import React from 'react';
import ProductCard from '../ProductCard';
import { products } from '@/app/constants/navLinks';
import SectionDivider from '../SectionDivider';

export default function PopularProducts() {
  const productsArray = Object.values(products);
  return (
    <div className='flex flex-col w-full h-auto px-4 md:px-8 lg:px-12 2xl:px-20 py-10'>
      <div
        className='flex flex-col gap-0 text-center'
        data-aos='zoom-out-up'
      >
        <h2 className='text-base text-primary'>Visit Our</h2>
                <SectionDivider />
        
        <h3 className='text-3xl lg:text-4xl font-bold'>Most Popular Products</h3>
      </div>
      <div className='flex flex-wrap mt-12'>
        {productsArray.map((product, index) => (
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4' data-aos='fade-up' data-aos-delay={index*150}>
            <ProductCard key={'popular' + index} product={product} />
          </div>
        ))}
        {productsArray.map((product, index) => (
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4' data-aos='fade-up' data-aos-delay={index*150}>
            <ProductCard key={'popular products' + index} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
