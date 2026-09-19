'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ThreePointSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const points = [
    {
      image: '/3point/3point_1.png',
      title: '1년 필터 안심 케어 서비스',
      description:
        '세척 후에도 필터 상태를 1년간 안심 케어합니다. 시흥·인천 병원·기업 현장에서도 사후 관리까지 책임집니다.',
    },
    {
      image: '/3point/3point_2.png',
      title: '수치(Data)로 확인',
      description:
        'ATP 위생 측정기로 오염도를 수치로 확인합니다. 감이 아닌 데이터로 세척·소독 결과를 검증합니다.',
    },
    {
      image: '/3point/3point_3.png',
      title: '전문 데이터리포트 제공',
      description:
        '세척 전후 RLU 수치와 사진이 담긴 전문 데이터리포트를 제공합니다. 위생 개선 결과를 문서로 확인할 수 있습니다.',
    },
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
          <p className="text-primary font-semibold mb-2">3 Point</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            비버스케어를 선택해야하는 3가지 이유
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            시흥·인천 공기위생 현장에서 검증된 안심 케어, 수치 기반 검증, 데이터리포트로
            병원·기업·학교에 신뢰할 수 있는 결과를 전달합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow bg-white"
            >
              <div className="relative w-full h-[260px] md:h-[400px]">
                <Image
                  src={point.image}
                  alt={point.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="px-5 pb-6 pt-2">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
