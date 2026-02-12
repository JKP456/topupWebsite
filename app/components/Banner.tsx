'use client';

import { useEffect, useState } from 'react';
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

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-56 rounded-xl overflow-hidden">
      <Image
        src={banners[index].image}
        alt={banners[index].title}
        fill
        className="object-cover"
        priority
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center">
        <div className="px-8 text-white">
          <h2 className="text-3xl font-bold">{banners[index].title}</h2>
          <p className="text-lg mt-2">{banners[index].subtitle}</p>
          <button className="mt-4 bg-orange-500 px-6 py-2 rounded-lg font-semibold">
            เติมเกมเลย
          </button>
        </div>
      </div>

      {/* dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full ${
              i === index ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
