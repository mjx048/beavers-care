'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function HistorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <p className="text-primary font-semibold mb-2">History</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              내 아이가 머물던 병동의 공기에서<br />시작된 사명감
            </h2>
            <p className="text-gray-600 text-lg">
              10년 가전 베테랑의 전략적 공기위생 파트너.
            </p>
            <p className="text-primary font-semibold mt-8 mb-2">Pro</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              대기업 S사, L사, D사, J사<br />
            </h2>
            <p className="text-gray-600 mt-4">
              도합 20년 경력의 가전전문가 임직원 출신.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full h-[400px]"
          >
            <Image
              src="/introduce/대표사인.png"
              alt="대표 사인"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

