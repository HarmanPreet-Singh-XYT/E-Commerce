import React, { useState } from 'react';
import { banners } from '@/app/data';

const Banner = () => {
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
                  src={each.imgLink}
                  alt={`Slide ${index + 1}`}
                />
                <div className='absolute z-[15] md:hidden left-14 bottom-0 top-0 mt-auto mb-auto bg-white w-[320px] h-[220px] sm:w-[520px] sm:h-[220px] opacity-50 rounded-xl'></div>
                <div className='absolute z-20 w-[300px] h-[200px] md:h-auto sm:w-[500px] flex flex-col gap-0 md:gap-4 md:left-32 left-16 bottom-0 top-0 mt-auto mb-auto justify-center'>
                  <p className='text-salmon lg:text-3xl text-2xl font-medium'>{each.topTitle}</p>
                  <p className='sm:text-5xl text-2xl font-bold'>{each.middleTitle}</p>
                  <p className='sm:text-2xl text-xl font-medium text-silver'>
                    {each.bottomTitle}{' '}
                    <span className='lg:text-4xl font-bold'>{each.startPrice.toFixed(2)}</span>
                  </p>
                  <button className='sm:p-2 p-1 bg-salmon text-white px-5 sm:w-[130px] w-[120px] text-sm sm:text-base rounded-md font-semibold'>
                    {each.buttonTitle}
                  </button>
                </div>
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

export default Banner;
