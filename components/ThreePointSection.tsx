'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ThreePointSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const points = [
    {
      image: '/3point/3point_1.png',
      title: 'Point 1',
    },
    {
      image: '/3point/3point_2.png',
      title: 'Point 2',
    },
    {
      image: '/3point/3point_3.png',
      title: 'Point 3',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold mb-2">3 Point</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            비버스케어를 선택해야하는 3가지 이유
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full h-[400px]">
                <Image
                  src={point.image}
                  alt={point.title}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
