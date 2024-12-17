'use client'
import React, { useState, useEffect } from 'react';
import { useModal } from '../Contexts/ModalContext';

export default function ProductModal() {
  const { isModalOpen, closeModal, productData } = useModal();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'; // Disable background scrolling
    } else {
      document.body.style.overflow = ''; // Enable background scrolling
    }

    // Clean up on component unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isModalOpen || !productData) return null;

  const { name, description, images } = productData;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div
        className={`bg-white rounded-lg shadow-lg w-4/5 p-5 md:p-8 fade-up`}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h3 className="text-xl font-semibold">{name}</h3>
          <button
            onClick={closeModal}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Images */}
          <div className="flex flex-col items-center md:w-1/2">
            <img
              src={selectedImage || images[0]}
              alt={name}
              className="w-full h-[400px] rounded-lg object-cover mb-4"
            />
            <div className="flex w-full gap-2">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-1/3 h-28 rounded-lg object-cover cursor-pointer border ${
                    selectedImage === img
                      ? 'border-blue-500'
                      : 'border-gray-300'
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-2">Description:</h2>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
