'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function PackageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 leading-relaxed text-center">
            1+1 패키지 소개
          </h2>
          <div className="relative w-full h-[70vh] md:h-[85vh] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/solution/quarantinePackage/패키지상품설명.png"
              alt="에어컨 방역 패키지 상품 설명"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
