'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const solutions = [
    {
      title: '에어컨 전문세척',
      description: '에어컨 청소를 넘어 바이러스까지 멸균',
      image1: '/solution/에어컨_전문세척_1.png',
      image2: '/solution/에어컨_전문세척_2.png',
    },
    {
      title: '소독 방역',
      description: '인간 대 바이러스 전쟁의 최전방 선봉주자',
      image1: '/solution/소독_방역_1.png',
      image2: '/solution/소독_방역_2.png',
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="relative w-full h-[500px]">
                <Image
                  src={hoveredIndex === index ? solution.image2 : solution.image1}
                  alt={solution.title}
                  fill
                  className="object-cover transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-white/80 text-lg whitespace-pre-line">
                    {solution.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

