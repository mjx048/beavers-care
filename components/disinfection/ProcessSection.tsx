'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
            소독 방역 프로세스
          </h2>
          <p className="text-gray-600 text-lg mb-0">
            체계적이고 전문적인 5단계 소독 방역 과정
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto mt-8"
        >
          <div className="flex flex-col gap-6">
            <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl bg-[#d6eaf5]">
              <Image
                src="/solution/disinfection/소독방역_프로세스_1.jpg"
                alt="소독 방역 프로세스 1"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl bg-[#d6eaf5]">
              <Image
                src="/solution/disinfection/소독방역_프로세스_2.jpg"
                alt="소독 방역 프로세스 2"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
