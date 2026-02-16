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
              180개의 관공서가 신뢰하는 위생 파트너사
            </h2>
            <p className="text-gray-600 text-lg">
              학교, 학원, 유아교육기관, 병원, 기숙사, 음식점, 사무실 등<br />
              B2B 고객 맞춤형 솔루션에 특화되어 있습니다.
            </p>
            <p className="text-gray-600 mt-4">
              경험 & 고객 데이터를 통해 프로젝트의 성공을 이끕니다.
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

