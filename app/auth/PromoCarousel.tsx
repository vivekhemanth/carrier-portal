'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'

interface PromoCarouselProps {
  images: { src: string; alt?: string }[];
}

const PromoCarousel: React.FC<PromoCarouselProps> = ({ images }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const itemHeight = 240; // image height

  useEffect(() => {
    const scrollCarousel = () => {
      const carousel = carouselRef.current;
      if (carousel) {
        const scrollHeight = carousel.scrollHeight;
        const scrollTop = carousel.scrollTop;
        const clientHeight = carousel.clientHeight;

        if (isScrollingDown) {
          if (scrollTop + clientHeight >= scrollHeight) {
            setIsScrollingDown(false);
          } else {
            carousel.scrollBy({
              top: itemHeight,
              behavior: 'smooth',
            });
          }
        } else {
          if (scrollTop <= 0) {
            setIsScrollingDown(true);
          } else {
            carousel.scrollBy({
              top: -itemHeight,
              behavior: 'smooth',
            });
          }
        }
      }
    };

    const interval = setInterval(scrollCarousel, 2500);

    return () => clearInterval(interval);
  }, [isScrollingDown]);

  return (
    <div ref={carouselRef} className="carousel carousel-vertical rounded-box h-[34rem] overflow-y-scroll scroll-smooth">
      {images.map((image, index) => (
        <div key={index} className="carousel-item h-full">
          <Image
            src={image.src}
            alt={image.alt || `Promo ${index + 1}`}
            width={1128}
            height={2436}
            className="rounded-lg h-[34rem] w-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default PromoCarousel;
