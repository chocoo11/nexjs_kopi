import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import True1 from '../assets/true1.jpeg';
import True2 from '../assets/true2.jpeg';
import True3 from '../assets/true3.jpeg';

const carousel = () => {
  const [activeItem, setActiveItem] = useState(0);
  const touchStartX = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 3000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const handlePrev = () => {
    setActiveItem((prevItem) => (prevItem === 0 ? 3 : prevItem - 1));
  };

  const handleNext = () => {
    setActiveItem((prevItem) => (prevItem === 3 ? 0 : prevItem + 1));
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    clearInterval(intervalRef.current);
  };

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const touchDiff = touchEndX - touchStartX.current;

    if (touchDiff > 50) {
      handlePrev();
    } else if (touchDiff < -50) {
      handleNext();
    }

    intervalRef.current = setInterval(handleNext, 3000);
  };

  return (
    <div
      id="gallery"
      className="relative w-full"
      data-carousel="slide"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Item 1 */}
        <div
          className={`absolute w-full h-full transition-opacity ${
            activeItem === 0 ? 'opacity-100' : 'opacity-0'
          }`}
          data-carousel-item
        >
          <Image
            src={True1}
            className="object-cover w-full h-full"
            alt=""
          />
        </div>
        {/* Item 2 */}
        <div
          className={`absolute w-full h-full transition-opacity ${
            activeItem === 1 ? 'opacity-100' : 'opacity-0'
          }`}
          data-carousel-item
        >
          <Image
            src={True2}
            className="object-cover w-full h-full"
            alt=""
          />
        </div>
        {/* Item 3 */}
        <div
          className={`absolute w-full h-full transition-opacity ${
            activeItem === 2 ? 'opacity-100' : 'opacity-0'
          }`}
          data-carousel-item
        >
          <Image
            src={True3}
            className="object-cover w-full h-full"
            alt=""
          />
        </div>
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrev}
      >
        {/* Previous button SVG */}
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNext}
      >
        {/* Next button SVG */}
      </button>
    </div>
  );
};

export default carousel;
