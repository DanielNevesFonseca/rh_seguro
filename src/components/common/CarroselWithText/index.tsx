// components/ImageCarousel.tsx
import React, { useState } from 'react';

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface ImageCarouselProps {
  slides: Slide[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-[600px] mx-auto overflow-hidden shadow-2xl rounded-xl w-full">
      <div className="text-center w-full" key={currentIndex}>
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].title}
          className="rounded w-full min-w-[50vw] h-[300px] md:h-[550px] object-cover max-w-full"
        />
        <div className="absolute top-[16px] left-[16px] right-[16px] text-white bg-[rgba(0,0,0,0.5)] p-[8px] rounded-lg">
          <h2 className='text-secondary-50 font-bold'>{slides[currentIndex].title}</h2>
          <p className='text-xs'>{slides[currentIndex].description}</p>
        </div>
      </div>
      <div className="text-center absolute bottom-[16px] w-full">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`inline-block w-[15px] h-[15px] mx-[5px] rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-[#717171]' : 'bg-[#bbb]'
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
