'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ClientSection() {
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
          <p className="text-primary font-semibold mb-2">Client</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            지난 10년간 6,356건의 프로젝트 성공
          </h2>
        </motion.div>
      </div>
    </section>
  );
}

