'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const solutions = [
    {
      title: '통합해충방제',
      description: '해충 한 마리에 의해 전파되는\n질병의 근본적인 퇴치',
    },
    {
      title: '표면소독',
      description: '인간 대 바이러스 전쟁의 최전방 선봉주자',
    },
    {
      title: '에어컨 전문세척',
      description: '에어컨 청소를 넘어 바이러스까지 멸균',
    },
    {
      title: '실내공기질',
      description: '안심하고 숨 쉴 수 있는 환경 개척',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold mb-2">Solution</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            어떤 고민을 해결해드릴까요?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full h-48">
                <Image
                  src="/no_image.jpg"
                  alt={solution.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

