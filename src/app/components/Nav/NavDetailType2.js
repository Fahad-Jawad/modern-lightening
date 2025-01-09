"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function NavDetailType2({ navLink }) {
    const [subcategories, setSubCategories] = useState({});
    const [imgs, setImgs] = useState([]);

    // Populate the initial state when the component loads
    useEffect(() => {
        if (navLink && navLink.categories) {
            const firstCategoryKey = Object.keys(navLink.categories)[0];
            const firstCategory = navLink.categories[firstCategoryKey];

            if (firstCategory) {
                setSubCategories(navLink.subcategories || {});
                setImgs(firstCategory.imgs || []);
            }
        }
    }, [navLink]);

    const handleCategoryChange = (category) => {
        setImgs(category.imgs || []);
    };

    const handleSubCategoryChange = (subCategory) => {
        setImgs(subCategory.imgs || []);
    };

    return (
        <div className='flex h-auto px-10 gap-3'>
            <div className='w-1/4 flex flex-col gap-2 border-r py-5'>
            <h2 className='text-lg font-bold'>{navLink.categoryText}</h2>
                {Object.keys(navLink.categories).map((category) => {
                    return (
                        <Link
                            key={category}
                            href={navLink.categories[category].link}
                            onMouseEnter={() => handleCategoryChange(navLink.categories[category])}
                            className='w-max underline-animation'
                        >
                            {category}
                        </Link>
                    );
                })}
            </div>

            <div className='w-1/4 flex flex-col gap-2 px-4 py-5'>
            <h2 className='text-lg font-bold'>{navLink.subCategoryText}</h2>

                {Object.keys(subcategories)?.length > 0 && Object.keys(subcategories).map((subCategoryKey) => {
                    const subCategory = subcategories[subCategoryKey];
                    return (
                        <Link
                            key={subCategoryKey}
                            href={subCategory.link}
                            onMouseEnter={() => handleSubCategoryChange(subCategory)}
                            className='w-max underline-animation'
                        >
                            {subCategoryKey}
                        </Link>
                    );
                })}
            </div>

            <div className='w-1/4 py-5'>
                {imgs[1] && <Image src={imgs[1]} alt="Additional image" width={200} height={200} />}
            </div>

            <div className='w-1/4 py-5'>
                {imgs[2] || imgs[0] ? (
                    <Image src={imgs[2] || imgs[0]} alt="Additional image" width={200} height={200} />
                ) : null}
            </div>
        </div>
    );
}
