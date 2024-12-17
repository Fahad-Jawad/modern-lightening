'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
export default function NavDetailType1({ navLink, setHoveredLink }) {
  const [subcategories, setSubCategories] = useState({});
  const [children, setChildren] = useState({});
  const [imgs, setImgs] = useState([]);

  const onLinkClick = () => {
    setHoveredLink(null);
  };

  // Populate the initial state when the component loads
  useEffect(() => {
    if (navLink && navLink.categories) {
      const firstCategoryKey = Object.keys(navLink.categories)[0];
      const firstCategory = navLink.categories[firstCategoryKey];

      if (firstCategory) {
        setSubCategories(firstCategory.subcategories || {});
        setImgs(firstCategory.imgs || []);
      }
    }
  }, [navLink]);

  const handleCategoryChange = (category) => {
    setSubCategories(category.subcategories || {});
    setImgs(category.imgs || []);
    setChildren({});
  };

  const handleSubCategoryChange = (subCategory) => {
    setChildren(subCategory.children || {});
    setImgs(subCategory.imgs || []);
  };

  const handleChildChange = (child) => {
    setImgs(child.imgs || []);
  };

  return (
    <div className='flex h-auto px-10 gap-3'>
      <div className='w-1/5 flex flex-col gap-2 border-r py-5'>
        {Object.keys(navLink.categories).map((category) => {
          return (
            <p
              key={category}
              onMouseEnter={() =>
                handleCategoryChange(navLink.categories[category])
              }
              className='w-max text-lg font-semibold flex items-center gap-2 group cursor-pointer'
              onClick={() => onLinkClick()}
            >
              {category}
              {/* Arrow icon */}
              <div className='flex items-center opacity-0 translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2'>
                <Image
                  src='/images/icons/ArrowRight.svg'
                  alt='right arrow'
                  width={16}
                  height={16}
                />
              </div>
            </p>
          );
        })}
      </div>

      <div className='w-1/5 flex flex-col gap-2 py-5'>
        {Object.keys(subcategories)?.length > 0 &&
          Object.keys(subcategories).map((subCategoryKey) => {
            const subCategory = subcategories[subCategoryKey];
            return (
              <div
                key={subCategoryKey}
                className='group relative flex items-center gap-2'
              >
                <Link
                  href={subCategory.link}
                  onMouseEnter={() => handleSubCategoryChange(subCategory)}
                  className={`w-max relative text-base font-medium ${
                    subCategory.children ? ' group' : 'underline-animation'
                  }`}
                  onClick={() => onLinkClick()}
                >
                  {subCategoryKey}
                </Link>
                {/* Show Image on Hover if Children Exist */}
                {subCategory.children && (
                  <div className='opacity-0 translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2'>
                    <Image
                      src='/images/icons/ArrowRight.svg'
                      alt='right arrow'
                      width={16}
                      height={16}
                    />
                  </div>
                )}
              </div>
            );
          })}
      </div>

      <div className='w-1/5 flex flex-col gap-2 py-5'>
        {Object.keys(children)?.length > 0
          ? Object.keys(children).map((childKey) => {
              const child = children[childKey];
              return (
                <Link
                  key={childKey}
                  href={child.link}
                  onMouseEnter={() => handleChildChange(child)}
                  onClick={() => onLinkClick()}
                  className='w-max underline-animation'
                >
                  {childKey}
                </Link>
              );
            })
          : imgs[0] && (
              <Image
                src={imgs[0]}
                alt='Category image'
                className='w-full h-full'
                width={200}
                height={200}
              />
            )}
      </div>

      <div className='w-1/5 py-5'>
        {imgs[1] && (
          <Image
            src={imgs[1]}
            alt='Additional image'
            className='w-full h-full'
            width={200}
            height={200}
          />
        )}
      </div>

      <div className='w-1/5 py-5'>
        {imgs[2] || imgs[0] ? (
          <Image
            src={imgs[2] || imgs[0]}
            alt='Additional image'
            className='w-full h-full'
            width={200}
            height={200}
          />
        ) : null}
      </div>
    </div>
  );
}
