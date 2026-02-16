'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function MembersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-full max-w-6xl h-full opacity-30">
          <Image
            src="/no_image.jpg"
            alt="Background"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2">Members</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            외모지상주의 세상, 위생적인 이미지로
          </h2>
        </motion.div>

        {/* Content Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Left Box - Fade Right */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <p className="text-lg md:text-xl font-bold text-gray-800">
                <span className="text-secondary">멤버스 마크 부착 시</span>, 소비자들 인식변화
              </p>
            </div>
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="/no_image.jpg"
                alt="멤버스 마크 부착 효과"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </motion.div>

          {/* Right Box - Fade Left */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <p className="text-lg md:text-xl font-bold text-gray-800">
                위생적인 이미지가 주는 매출 변화
              </p>
            </div>
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="/no_image.jpg"
                alt="매출 변화 그래프"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

