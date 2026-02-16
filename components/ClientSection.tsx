'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ClientSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const clientLogos = [
    { src: '/client/logo/ybm영어학원.png', alt: 'YBM 영어학원' },
    { src: '/client/logo/강한마디재활의학과.png', alt: '강한마디 재활의학과' },
    { src: '/client/logo/대우.png', alt: '대우' },
    { src: '/client/logo/더원한방병원.png', alt: '더원 한방병원' },
    { src: '/client/logo/땅스부대찌게.png', alt: '땅스부대찌개' },
    { src: '/client/logo/맑은위내과.png', alt: '맑은위 내과' },
    { src: '/client/logo/썬벨팬션.png', alt: '썬벨 펜션' },
    { src: '/client/logo/웰손병원.png', alt: '웰손 병원' },
    { src: '/client/logo/코스트코.png', alt: '코스트코' },
    { src: '/client/logo/크린토피아.png', alt: '크린토피아' },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold mb-2">Client</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            단, 3년만에 ____건의 프로젝트 성공경험
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {clientLogos.map((logo, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center justify-center"
              >
                <div className="relative w-full h-24 transition-all duration-300 pointer-events-none select-none">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    draggable={false}
                    className="object-contain"
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

