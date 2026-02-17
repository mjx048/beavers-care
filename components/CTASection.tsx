'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            간편 견적
          </h2>
          <p className="text-xl mb-8">
            간편 견적 문의를 남겨주시면<br />
            빠른 시일 내에 연락드리겠습니다.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition text-lg">
            무료진단 문의하기
          </button>
        </motion.div>
      </div>
    </section>
  );
}

