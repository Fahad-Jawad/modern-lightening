import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import SectionDivider from '../SectionDivider';
// Define your product categories and their products
const categories = [
    {
      name: 'Indoor Lights',
      products: [
        {
          name: 'Modern Ceiling Light',
          description: 'A sleek and modern ceiling light for living rooms.',
          images: ['/images/Scandinavian1.png', '/images/Scandinavian2.png', '/images/bed1.jpg'],
          tag: 'Sale',
          addDate: '12/16/2024',
        },
        {
          name: 'Classic Table Lamp',
          description: 'A stylish table lamp that adds elegance to any room.',
          images: ['/images/Scandinavian3.png', '/images/testimonials1.png', '/images/bed1.jpg'],
          tag: 'New',
          addDate: '12/10/2024',
        },
        {
          name: 'Pendant Light',
          description: 'A modern pendant light perfect for dining areas.',
          images: ['/images/bed1.jpg', '/images/Chandeliers2.png', '/images/testimonials1.png'],
          tag: 'Featured',
          addDate: '12/05/2024',
        },
        {
          name: 'LED Floor Lamp',
          description: 'A versatile floor lamp offering bright, adjustable lighting.',
          images: ['/images/contactbg.png', '/images/Scandinavian1.png', '/images/bed1.jpg'],
          tag: 'Best Seller',
          addDate: '12/01/2024',
        },
      ],
      desc: 'Illuminate your living spaces with stylish and versatile lighting solutions. Perfect for creating cozy, functional, and elegant interiors.',
    },
    {
      name: 'Outdoor Lights',
      products: [
        {
          name: 'Outdoor Wall Light',
          description: 'A stylish wall light designed for outdoor spaces.',
          images: ['/images/Chandeliers2.png', '/images/bed1.jpg', '/images/testimonials1.png'],
          tag: 'New',
          addDate: '12/10/2024',
        },
        {
          name: 'Garden Spotlights',
          description: 'Highlight your garden with these durable spotlights.',
          images: ['/images/contactbg.png', '/images/Scandinavian3.png', '/images/bed1.jpg'],
          tag: 'Sale',
          addDate: '12/08/2024',
        },
        {
          name: 'Patio String Lights',
          description: 'Decorative string lights perfect for patios and balconies.',
          images: ['/images/testimonials1.png', '/images/bed1.jpg', '/images/Scandinavian1.png'],
          tag: 'Best Seller',
          addDate: '12/05/2024',
        },
        {
          name: 'Solar Garden Lights',
          description: 'Eco-friendly solar-powered lights for your garden paths.',
          images: ['/images/Scandinavian2.png', '/images/contactbg.png', '/images/bed1.jpg'],
          tag: 'Eco-Friendly',
          addDate: '12/01/2024',
        },
      ],
      desc: 'Enhance your outdoor spaces with durable and weather-resistant lighting. Ideal for gardens, patios, pathways, and enhancing security.',
    },
    {
      name: 'Commercial Lights',
      products: [
        {
          name: 'LED Panel Light',
          description: 'A sleek and efficient LED panel light for office spaces.',
          images: ['/images/Scandinavian1.png', '/images/testimonials1.png', '/images/bed1.jpg'],
          tag: 'New',
          addDate: '12/10/2024',
        },
        {
          name: 'Recessed Ceiling Lights',
          description: 'Recessed lights designed to provide even illumination for commercial spaces.',
          images: ['/images/Chandeliers2.png', '/images/contactbg.png', '/images/bed1.jpg'],
          tag: 'Featured',
          addDate: '12/07/2024',
        },
        {
          name: 'Track Lighting System',
          description: 'Perfect for showroom and office lighting with adjustable tracks.',
          images: ['/images/testimonials1.png', '/images/Scandinavian3.png', '/images/bed1.jpg'],
          tag: 'Sale',
          addDate: '12/01/2024',
        },
        {
          name: 'Industrial Pendant Light',
          description: 'Stylish pendant light for industrial-themed office or retail spaces.',
          images: ['/images/contactbg.png', '/images/bed1.jpg', '/images/Scandinavian1.png'],
          tag: 'Best Seller',
          addDate: '11/28/2024',
        },
      ],
      desc: 'Boost productivity with efficient and professional lighting options. Tailored to make office spaces, retail areas, and workspaces shine.',
    },
    {
      name: 'Residential Lights',
      products: [
        {
          name: 'Modern Chandeliers',
          description: 'Elegantly designed chandelier for residential spaces.',
          images: ['/images/bed1.jpg', '/images/Scandinavian1.png', '/images/testimonials1.png'],
          tag: 'Sale',
          addDate: '12/15/2024',
        },
        {
          name: 'Wall Sconces',
          description: 'Elegant sconces that bring a touch of style to your walls.',
          images: ['/images/Chandeliers2.png', '/images/bed1.jpg', '/images/Scandinavian2.png'],
          tag: 'New',
          addDate: '12/12/2024',
        },
        {
          name: 'Smart LED Bulbs',
          description: 'Control your home lighting with these smart LED bulbs.',
          images: ['/images/testimonials1.png', '/images/bed1.jpg', '/images/Scandinavian3.png'],
          tag: 'Featured',
          addDate: '12/08/2024',
        },
        {
          name: 'Table Lamps Set',
          description: 'Set of two stylish table lamps for living rooms or bedrooms.',
          images: ['/images/contactbg.png', '/images/bed1.jpg', '/images/Scandinavian1.png'],
          tag: 'Best Seller',
          addDate: '12/01/2024',
        },
      ],
      desc: 'Discover lighting that balances modern style and everyday functionality. Designed to enhance every corner of your home with ease.',
    },
  ];
  

export default function InDemand() {
  const [activeCategory, setActiveCategory] = useState('Indoor Lights');
  const [intervalId, setIntervalId] = useState(null); // Store the interval ID

  const handleCategoryChange = (categoryName) => {
    setActiveCategory(categoryName);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prevCategory) => {
        const currentIndex = categories.findIndex(
          (category) => category.name === prevCategory
        );
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex].name;
      });
    }, 5000);
    setIntervalId(interval); // Store the interval ID

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className='px-4 md:px-8 lg:px-12 2xl:px-20 py-10'>
      <div className='flex flex-col gap-0 text-center' data-aos='zoom-out-up'>
        <h2 className='text-base text-primary'>Illuminate Every Space</h2>
                <SectionDivider />
        
        <h3 className='text-3xl lg:text-4xl font-bold'>
          Lighting Solutions for Every Need
        </h3>
      </div>

      <div className='mt-12 w-full flex gap-4 flex-col lg:flex-row'>
        {/* Left section for category details */}
        <div className='flex flex-col w-full lg:w-1/2 gap-4'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold w-full lg:w-2/3' data-aos='fade-right' data-aos-delay="50">
            Find the Perfect Light for Every Setting
          </h2>
          <p className='text-base' data-aos='fade-down' data-aos-delay="100">
            Whether you're creating a cozy indoor retreat, lighting up your
            backyard, or outfitting a bustling office, we offer lighting
            solutions designed to fit your unique style and purpose. Explore our
            diverse categories and discover the perfect balance of functionality
            and design.
          </p>

          {/* Loop through categories */}
          {categories.map((category) => (
            <div
              key={category.name}
              className={`flex flex-col gap-2 p-4 rounded-lg small-category group transition-all duration-300 cursor-pointer ${
                activeCategory === category.name
                  ? 'bg-primaryLight active-small-category'
                  : 'bg-gray-100'
              }`}
              onClick={() => handleCategoryChange(category.name)}
              
            >
              <div className='flex gap-4 items-center'>
                <div
                  className={`p-2 small-category-text-div rounded-lg transition-all duration-400 ${
                    activeCategory === category.name
                      ? 'bg-primary'
                      : 'bg-gray-200'
                  }`}
                >
                  <p
                    className={`text-4xl font-bold text-black outline-text transition-all duration-300 small-category-text ${
                      activeCategory === category.name ? 'text-white' : ''
                    }`}
                  >
                    {category.name === 'Indoor Lights'
                      ? '01'
                      : category.name === 'Outdoor Lights'
                      ? '02'
                      : category.name === 'Commercial Lights'
                      ? '03'
                      : '04'}
                  </p>
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-lg font-bold uppercase'>{category.name}</h2>
                  <p className='text-sm'>{category.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right section for products */}
        <div className='flex flex-col items-center w-full lg:w-1/2 lg:pl-12 py-8 h-full'>
          <div className=''>
            {/* Display products for the active category */}
            {categories
              .filter((category) => category.name === activeCategory)
              .map((category) => (
                <div key={category.name}>
                  <div className='flex justify-between'>
                    {category.products.slice(0, 2).map((product, index) => (
                      <div key={index} className='w-1/2'>
                        <ProductCard
                          product={product}
                          className={`!min-h-[150px] ${
                            index === 1 ? 'mt-5' : ''
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                  <div className='flex justify-between mt-5'>
                    {category.products.slice(2, 4).map((product, index) => (
                      <div key={index} className='w-1/2'>
                        <ProductCard
                          product={product}
                          className={`!min-h-[150px] ${
                            index === 1 ? 'mt-5' : ''
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
