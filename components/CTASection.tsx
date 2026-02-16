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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            고객의 성공을 돕는것
          </h2>
          <p className="text-xl mb-8">
            단순하면서도 심오한 가치를 품고 있습니다.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition text-lg">
            무료진단 문의하기
          </button>
        </motion.div>
      </div>
    </section>
  );
}

