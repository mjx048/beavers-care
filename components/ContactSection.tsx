'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            간편 견적
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <p className="text-center text-gray-600">
              간편 견적 문의를 남겨주시면<br />
              빠른 시일 내에 연락드리겠습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

