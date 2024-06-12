import React, { useState } from 'react';

const CategoryBanner = ({banners}:{banners:string[]}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  return (
    <div className='relative flex flex-col items-center mt-4'>
      <div className='relative max-w-[1300px] overflow-hidden'>
        <div
          className='flex transition-transform duration-500'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((each, index) => (
            <div key={index} className='flex-shrink-0 w-full'>
              <div className='relative'>
                <img
                  className='max-h-[450px] z-10 rounded-xl object-cover w-full'
                  src={each}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded focus:outline-none'
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded focus:outline-none'
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default CategoryBanner;
