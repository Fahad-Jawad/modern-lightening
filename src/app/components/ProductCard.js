'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useModal } from '@/app/Contexts/ModalContext';

export default function ProductCard({ product }) {
  const { openModal } = useModal();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a slight delay to stagger animations if needed
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-full rounded-lg flex flex-col gap-4 px-4 min-h-[400px] cursor-pointer aspect-square product-card ${
        isVisible ? 'fade-up' : 'opacity-0'
      }`}
      onClick={() => openModal(product)}
    >
      <div className='relative w-full h-4/5'>
        <Image
          src={product?.images[0]}
          alt={product?.name}
          width={400}
          height={400}
          className='w-full h-full rounded-lg'
        />
        {product?.tag && (
          <span className='bg-yellow-500 rounded-lg p-1 px-6 absolute top-5 left-4'>
            {product.tag}
          </span>
        )}
      </div>

      <div className='w-full h-1/5 bg-white'>
        <h2 className='hover:text-yellow-500 duration-100 text-xl font-semibold'>
          {product?.name}
        </h2>
      </div>
    </div>
  );
}
