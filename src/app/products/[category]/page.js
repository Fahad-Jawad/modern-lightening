'use client';

import React, { useState, useEffect, use } from 'react';
import ProductCard from '@/app/components/ProductCard';
import { products, categoriesData } from '@/app/constants/navLinks';
import Accordion from '@/app/components/Accordion';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductCategoryPage({ params }) {
  const [category, setCategory] = useState('');
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);
  const [activeFilterOpen, setActiveFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  // Unwrap `params` promise
  useEffect(() => {
    async function fetchCategory() {
      const { category } = await params; // Await the params
      let cat=category.replace('-', ' ').toLowerCase()
      setCategory(cat);

      // Fetch the product IDs associated with the category
      const productIds = categoriesData[cat] || [];
      const categoryProducts = productIds.map((id) => products[id]);
      setCategoryProducts(categoryProducts);
      setFilteredProducts(categoryProducts);
      setVisibleProducts(categoryProducts.slice(0, itemsPerPage));
    }
    fetchCategory();
  }, [params]);

  // Apply filters
  const applyFilters = () => {
    let filtered = [...categoryProducts];

    // Filter by search query
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply active filters
    if (activeFilter) {
      if (activeFilter === 'On Sale') {
        filtered = filtered.filter((p) => p.tag === 'Sale');
      } else if (activeFilter === 'New Arrivals') {
        filtered = filtered.filter((p) => p.tag === 'New Arrivals');
      } else if (activeFilter === 'New to Old') {
        filtered.sort((a, b) => new Date(b.addDate) - new Date(a.addDate));
      } else if (activeFilter === 'Old to New') {
        filtered.sort((a, b) => new Date(a.addDate) - new Date(b.addDate));
      } else if (activeFilter === 'Alphabetic A-Z') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      } else if (activeFilter === 'Alphabetic Z-A') {
        filtered.sort((a, b) => b.name.localeCompare(a.name));
      }
    }

    setFilteredProducts(filtered);
    setVisibleProducts(filtered.slice(0, page * itemsPerPage));
  };

  // Reapply filters whenever active filter, search query, or page changes
  useEffect(() => {
    applyFilters();
  }, [activeFilter, page, categoryProducts]);

  // Handle search
  const handleSearch = () => {
    applyFilters();
  };

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts(categoryProducts); // Show all products when search is empty
      setVisibleProducts(categoryProducts.slice(0, page * itemsPerPage)); // Reset visible products
    }
  }, [searchQuery]);

  // Load more products
  const loadMoreProducts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const clearFilter = () => {
    setActiveFilter(null);
    setSearchQuery('');
  };

  return (
    <div>
      {/* Header */}
      <div className='w-full promo1 py-40 flex items-center justify-center'>
        <h1 className='text-6xl font-bold text-white text-center capitalize'>
          {category}
        </h1>
      </div>

      {/* Content */}
      <div className='flex gap-4 my-10 mx-2'>
        {/* Sidebar */}
        <div className='w-1/5 p-5 bg-gray-100 rounded-lg filter-bar h-auto max-h-[700px] overflow-hidden'>
          <div className='flex justify-between'>
            <input
              type='text'
              id='search'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='bg-white border border-gray-200 text-gray-900 text-base rounded-lg rounded-tr-none rounded-br-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3'
              placeholder='Search...'
              required
            />
            <button
              onClick={handleSearch}
              className='p-2 bg-black text-sm text-white font-semibold px-4 rounded-lg rounded-tl-none rounded-bl-none'
            >
              Search
            </button>
          </div>

          <div className='flex flex-col gap-2 mt-5'>
            <Accordion
              title='Shop By Style'
              className='p-4 rounded-lg bg-white !text-lg'
            >
              <div className='flex flex-col gap-1 text-base'>
                <Link href='#' className='underline-animation w-max'>
                  Scandinavian
                </Link>
                <Link href='#' className='underline-animation w-max'>
                  Minimalistic
                </Link>
              </div>
            </Accordion>
            <Accordion
              title='Shop By Room'
              className='p-4 rounded-lg bg-white !text-lg'
            >
              <div className='flex flex-col gap-1 text-base'>
                <Link href='#' className='underline-animation w-max'>
                  Living Room
                </Link>
                <Link href='#' className='underline-animation w-max'>
                  Dining Room
                </Link>
                <Link href='#' className='underline-animation w-max'>
                  Bedroom
                </Link>
                <Link href='#' className='underline-animation w-max'>
                  Bathroom
                </Link>
                <Link href='#' className='underline-animation w-max'>
                  Staircase
                </Link>
                <Link href='#' className='underline-animation w-max'>
                  Foyer
                </Link>
                <Link href='#' className='underline-animation w-max'>
                  Office
                </Link>
                <Link href='#' className='underline-animation w-max'>
                  Patio
                </Link>
              </div>
            </Accordion>
            <Accordion
              title='Shop By Type'
              className='p-4 rounded-lg bg-white !text-lg'
            >
              <div className='flex flex-col gap-1 text-base'>
                <Link href='#' className='underline-animation w-max'>
                  Modern Chandelier
                </Link>
                <Link href='#' className='underline-animation w-max'>
                  Crystal Chandelier
                </Link>
                <Link href='#' className='underline-animation w-max'>
                  Wall Light
                </Link>
                <Link href='#' className='underline-animation w-max'>
                  Ceiling Light
                </Link>
                <Link href='#' className='underline-animation w-max'>
                  Pendant Light
                </Link>
                <Link href='#' className='underline-animation w-max'>
                  Outdoor Light
                </Link>
                <Link href='#' className='underline-animation w-max'>
                  Hardware & Accessories
                </Link>
              </div>
            </Accordion>
            {/* Additional Accordions */}
          </div>
        </div>

        {/* Products Section */}
        <div className='w-4/5 flex flex-col gap-1 products'>
          {/* Info Bar */}
          <div className='flex justify-between items-start px-4'>
            <p className='text-xl text-gray-300'>
              Showing {filteredProducts.length > 0 ? visibleProducts.length : 0}{' '}
              of {filteredProducts.length} products
            </p>

            <div className='flex items-center gap-5'>
              <button
                className='text-base bg-gray-50 p-3 px-6 rounded-lg'
                onClick={() => clearFilter()}
              >
                <Image
                  src='/images/icons/ResetIcon.svg'
                  alt='reset-filter'
                  width={25}
                  height={25}
                />
              </button>

              <div
                className='relative text-base bg-gray-50 p-3 px-6 flex items-center rounded-lg cursor-pointer'
                onClick={() => setActiveFilterOpen(!activeFilterOpen)}
              >
                <p className='flex gap-3 items-center'>
                  {activeFilter ? activeFilter : 'Filters'}
                  <Image
                    src='/images/icons/ArrowDown.svg'
                    alt='menu-arrow'
                    width={13}
                    height={13}
                  />
                </p>
                {activeFilterOpen && (
                  <div className='absolute top-full right-0 mt-2 w-40 bg-white shadow-lg rounded'>
                    {[
                      'On Sale',
                      'New Arrivals',
                      'New to Old',
                      'Old to New',
                      'Alphabetic A-Z',
                      'Alphabetic Z-A',
                    ].map((filter, index) => (
                      <p
                        key={index}
                        className='block px-4 py-2 hover:bg-gray-100 border-b border-gray-300'
                        onClick={() => {
                          setActiveFilter(filter);
                          setActiveFilterOpen(false);
                        }}
                      >
                        {filter}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Products */}
          <div className='flex flex-wrap'>
            {visibleProducts.length > 0 ? (
              visibleProducts.map((product, index) => (
                <div key={`product-${index}`} className='w-1/3'>
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <div className='flex flex-col items-center justify-center w-full py-20 bg-gray-100 rounded-lg'>
                {categoryProducts.length === 0 ? (
                  <p className='text-gray-500 text-lg font-medium'>
                    No products available for this category.
                  </p>
                ) : filteredProducts.length === 0 ? (
                  <>
                    <p className='text-gray-500 text-lg font-medium'>
                      No products match your selected criteria.
                    </p>
                    <button
                      className='mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg'
                      onClick={() => clearFilter()}
                    >
                      Clear Filters
                    </button>
                  </>
                ) : null}
              </div>
            )}
          </div>

          {/* Load More Button */}
          {visibleProducts.length < filteredProducts.length && (
            <button
              onClick={loadMoreProducts}
              className='mt-5 px-4 py-2 bg-blue-500 text-white rounded-lg self-center'
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
