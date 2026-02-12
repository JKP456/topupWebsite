'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const banners = [
  {
    id: 1,
    title: 'FLASH SALE 50%',
    subtitle: 'เติมเกมราคาพิเศษวันนี้เท่านั้น',
    image: '/banners/banner1.jpg',
  },
  {
    id: 2,
    title: 'TOPUP ROV',
    subtitle: 'รวดเร็ว ปลอดภัย ได้เครดิตทันที',
    image: '/banners/banner2.jpg',
  },
  {
    id: 3,
    title: 'PROMOTION',
    subtitle: 'สมัครใหม่ รับโบนัสทันที',
    image: '/banners/banner3.jpg',
  },
];

const SLIDE_DURATION = 5000;

export default function Banner() {
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const isThai = (text: string) => /[ก-๙]/.test(text);

  // Auto Slide
  useEffect(() => {
    if (isHovering) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [index, isHovering]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();

    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full h-52 md:h-64 lg:h-[320px] overflow-hidden rounded-3xl shadow-2xl group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slide Container */}
      <div
        className="flex h-full transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
        style={{
          transform: `translateX(-${index * 100}%)`,
          width: `${banners.length * 100}%`,
        }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="relative w-full h-full flex-shrink-0 overflow-hidden"
          >
            {/* Background Image */}
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              priority
              className="object-cover scale-110 group-hover:scale-105 transition-transform duration-[4000ms] ease-out"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent flex items-center">
              <div className="px-6 md:px-12 text-white max-w-xl">
                <h2
                  className={`text-2xl md:text-4xl font-bold leading-tight ${
                    isThai(banner.title) ? 'thai' : 'en'
                  }`}
                >
                  {banner.title}
                </h2>

                <p
                  className={`mt-3 text-sm md:text-lg opacity-90 ${
                    isThai(banner.subtitle) ? 'thai' : 'en'
                  }`}
                >
                  {banner.subtitle}
                </p>

                <button className="mt-5 bg-[#FF8C00] hover:bg-orange-600 transition-all duration-300 px-6 py-2 rounded-xl font-semibold shadow-xl hover:scale-105">
                  เติมเกมเลย
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute z-30 left-4 top-1/2 -translate-y-1/2 
        bg-black/40 hover:bg-black/70 p-3 rounded-full 
        opacity-0 group-hover:opacity-100 transition"
      >
        <Image
          src="/Icon/chevron.png"
          alt="Previous"
          width={22}
          height={22}
          className="rotate-180 "
        />
      </button>

      <button
        onClick={nextSlide}
        className="absolute z-30 right-4 top-1/2 -translate-y-1/2 
        bg-black/40 hover:bg-black/70 p-3 rounded-full 
        opacity-0 group-hover:opacity-100 transition"
      >
        <Image
          src="/Icon/chevron.png"
          alt="Next"
          width={22}
          height={22}
          className=""
        />
      </button>

      {/* Dots */}
      <div className="absolute z-30 bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all duration-300 rounded-full ${
              i === index
                ? 'w-6 h-3 bg-white'
                : 'w-3 h-3 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
