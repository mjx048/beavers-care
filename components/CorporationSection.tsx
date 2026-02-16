'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CorporationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold mb-2">Corporation</p>
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
      </div>
    </section>
  );
}

