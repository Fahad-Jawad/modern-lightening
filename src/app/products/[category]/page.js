'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from '@/app/components/ProductCard';
import { products, categoriesData } from '@/app/constants/navLinks';
import Accordion from '@/app/components/Accordion';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/app/components/Sections/Footer';
import Loader from '@/app/components/Loader';

export default function ProductCategoryPage({ params }) {
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);
  const [activeFilterOpen, setActiveFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    async function fetchCategory() {
      setLoading(true);
      const { category } = await params; // Await the params
      let cat = category.replace('-', ' ').toLowerCase();
      setCategory(cat);

      // Fetch the product IDs associated with the category
      const productIds = categoriesData[cat] || [];
      const categoryProducts = productIds.map((id) => products[id]);
      // Update states after the delay
      setCategoryProducts(categoryProducts);
      setFilteredProducts(categoryProducts);
      setVisibleProducts(categoryProducts.slice(0, itemsPerPage));
    }

    fetchCategory();
  }, [params]);

  // Apply filters
  const applyFilters = async () => {
    setLoading(true);

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
      } else if (activeFilter === 'Alphabetic A-Z') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      } else if (activeFilter === 'Alphabetic Z-A') {
        filtered.sort((a, b) => b.name.localeCompare(a.name));
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setFilteredProducts(filtered);
    const startIdx = (page - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    setVisibleProducts(filtered.slice(startIdx, endIdx));
  };

  // Reapply filters whenever active filter, search query, or page changes
  useEffect(() => {
    applyFilters();
  }, [activeFilter, page, categoryProducts]);

  // Handle search
  const handleSearch = () => {
    setPage(1); // Reset to the first page when a new search is performed
    applyFilters();
  };

  useEffect(() => {
    const stopLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };
    if (searchQuery.trim() === '') {
      setLoading(true);

      setFilteredProducts(categoryProducts); // Show all products when search is empty
      const startIdx = (page - 1) * itemsPerPage;

      stopLoading();
      setVisibleProducts(
        categoryProducts.slice(startIdx, startIdx + itemsPerPage)
      );
    }
  }, [searchQuery]);

  // Clear filters
  const clearFilter = async () => {
    setLoading(true);

    setActiveFilter(null);
    setSearchQuery('');
    setPage(1); // Reset to the first page
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  };

  // Pagination controls
  const nextPage = () => {
    if (page * itemsPerPage < filteredProducts.length) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <div>
        {/* Header */}
        <div className='w-full promo1 py-20 md:py-28 lg:py-40 flex items-center justify-center'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center capitalize'>
            {category}
          </h1>
        </div>

        {/* Content */}
        <div className='flex gap-4 my-10 mx-2 flex-col xl:flex-row'>
          {/* Sidebar */}
          <div className='w-1/5 p-5 bg-gray-50 rounded-lg filter-bar h-auto max-h-[400px] overflow-x-hidden filter-sidebar hidden xl:block'>
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
                className='p-2 bg-primary text-sm text-black font-semibold px-4 rounded-lg rounded-tl-none rounded-bl-none'
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
                </div>
              </Accordion>
            </div>
          </div>
          {/* Category Accordion for mobile */}
          <div className='p-5 bg-gray-50 rounded-lg block xl:hidden mx-4 '>
            <Accordion title={'Categories'}>
              <div className='flex flex-col gap-2 mt-5'>
                <Accordion
                  title='Shop By Style'
                  className='p-4 rounded-lg bg-white !text-base'
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
                  className='p-4 rounded-lg bg-white !text-base'
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
                  </div>
                </Accordion>
                <Accordion
                  title='Shop By Type'
                  className='p-4 rounded-lg bg-white !text-base'
                >
                  <div className='flex flex-col gap-1 text-base'>
                    <Link href='#' className='underline-animation w-max'>
                      Modern Chandelier
                    </Link>
                  </div>
                </Accordion>
              </div>
            </Accordion>
          </div>

          {/* Products Section */}
          <div className='w-full xl:w-4/5 flex flex-col gap-1 products'>
            <div className='flex justify-between xl:hidden py-3 px-4 mobile-search '>
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
                className='p-2 bg-primary text-sm text-black font-semibold px-4 rounded-lg rounded-tl-none rounded-bl-none'
              >
                Search
              </button>
            </div>
            {/* Info Bar */}
            <div className='flex justify-between items-start px-4 gap-3 py-3 flex-col xl:flex-row'>
              <p className='text-base md:text-lg xl:text-xl text-gray-300'>
                Showing{' '}
                {visibleProducts.length > 0 ? visibleProducts.length : 0} of{' '}
                {filteredProducts.length} products
              </p>
              <div className='flex items-center gap-5  justify-end w-full lg:w-auto'>
                <button
                  className='text-base bg-gray-50 p-3 px-6 rounded-lg'
                  onClick={() => clearFilter()}
                >
                  <Image
                    src='/images/icons/ResetIcon.svg'
                    alt='reset-filter'
                    width={20}
                    height={20}
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
                      className={`transition-transform duration-300 ${
                        activeFilterOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </p>
                  {activeFilterOpen && (
                    <div
                      className='absolute top-full right-0 mt-2 w-40 bg-white shadow-lg rounded z-50'
                      onMouseLeave={() => setActiveFilterOpen(false)}
                    >
                      {[
                        'On Sale',
                        'New Arrivals',
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
            <div className='flex flex-wrap mt-5'>
              {loading ? (
                <Loader />
              ) : visibleProducts.length > 0 ? (
                <>
                  {visibleProducts.map((product, index) => (
                    <div
                      key={`product-${index}`}
                      className='w-full md:w-1/2 lg:w-1/3'
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                  {/* Pagination */}
                  {filteredProducts.length > itemsPerPage && (
                    <div className='flex justify-center items-center gap-4 mt-6 w-full'>
                      <button
                        onClick={prevPage}
                        disabled={page === 1}
                        className={`px-4 py-2 rounded-lg ${
                          page === 1
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-primary text-black'
                        }`}
                      >
                        Previous
                      </button>
                      <p className='text-gray-700 text-lg'>
                        Page {page} of{' '}
                        {Math.ceil(filteredProducts.length / itemsPerPage)}
                      </p>
                      <button
                        onClick={nextPage}
                        disabled={
                          page * itemsPerPage >= filteredProducts.length
                        }
                        className={`px-4 py-2 rounded-lg ${
                          page * itemsPerPage >= filteredProducts.length
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-primary text-black'
                        }`}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className='flex flex-col items-center justify-center w-full py-20 bg-gray-100 rounded-lg'>
                  {!loading && categoryProducts.length === 0 ? (
                    <p className='text-gray-500 text-lg font-medium'>
                      No products available for this category.
                    </p>
                  ) : !loading && filteredProducts.length === 0 ? (
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
