'use client'
import React from 'react';
import ProductCard from '../ProductCard';
import { products } from '@/app/constants/navLinks';

export default function PopularProducts() {
  const productsArray = Object.values(products);
  return (
    <div className='flex flex-col w-full h-auto px-20 py-10'>
      <div className='flex flex-col gap-2 text-center'>
        <h2 className='text-base text-gray-300'>Visit Our</h2>
        <h3 className='text-3xl font-bold'>Most Popular Products</h3>
      </div>
      <div className='flex flex-wrap mt-5'>
        {productsArray.map((product, index) => (
          <div className='w-1/4'>
            <ProductCard key={'popular'+index} product={product} />
          </div>
        ))}
        {productsArray.map((product, index) => (
          <div className='w-1/4'>
            <ProductCard key={'popular products'+index} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
