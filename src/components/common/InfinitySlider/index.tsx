"use client";

import { useEffect, useState } from "react";

interface InfinitySliderProps {
  images: string[];
}

const InfinitySlider: React.FC<InfinitySliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [widthScreen, setWidthScreen] = useState(0);
  const [visibleImages, setVisibleImages] = useState(5);

  useEffect(() => {
    const updateWidth = () => {
      const screenXSize = window.innerWidth;
      setWidthScreen(screenXSize);
      setVisibleImages(
        screenXSize <= 640 ? 2 : screenXSize >= 641 && screenXSize <= 768 ? 3 : 5
      );
    };

    updateWidth(); // Initialize on mount
    window.addEventListener("resize", updateWidth); // Update on resize

    return () => window.removeEventListener("resize", updateWidth); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => {
        if (prevIndex === images.length) {
          return 0; // Reseta para o início
        }
        return prevIndex + 1;
      });
    }, 1000); // Muda o conjunto de imagens a cada 1.5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (currentIndex === images.length) {
      // Remove a transição para resetar o índice sem animação
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000); // Tempo suficiente para a transição ocorrer
    }
  }, [currentIndex, images.length]);

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className={`flex ${
          isTransitioning ? "transition-transform ease-linear duration-500" : ""
        }`}
        style={{
          transform: `translateX(-${currentIndex * (100 / visibleImages)}%)`,
        }}
      >
        {images.concat(images.slice(0, visibleImages)).map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex"
            style={{ width: `${100 / visibleImages}%` }}
          >
            <img
              src={image}
              alt={`Company ${index}`}
              className="w-[200px] h-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfinitySlider;
