'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function BrandStorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold mb-2">Brand Story</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            비버스케어 브랜드 스토리
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 마스코트 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="flex justify-center mb-6">
              <div className="relative w-60 h-60">
                <Image
                  src="/mascot.png"
                  alt="비버 마스코트"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              꼼꼼한 가전 전문가 '비버'
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-primary mb-2">
                  부지런한 엔지니어
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  거친 환경에서도 완벽한 보금자리를 짓는 비버처럼, 비버스케어는 고객님의 쾌적한 환경을 위해 보이지 않는 곳까지 부지런히 움직입니다.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-primary mb-2">
                  친근한 전문가
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  고글을 쓴 비버 마스코트는 가전 구조를 완벽히 이해하는 전문가의 자부심과, 이웃처럼 다가가는 친근함을 상징합니다.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-primary mb-2">
                  얼굴을 내건 정직함
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  대표의 인상을 닮은 비버 캐릭터를 통해, 정직하게 이름을 걸고 책임 있는 케어를 약속하겠다는 의지를 담았습니다.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 로고 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="flex justify-center mb-6">
              <div className="relative w-60 h-60">
                <Image
                  src="/logo_icon.png"
                  alt="비버스케어 로고"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              신뢰와 생명 케어의 약속
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-primary mb-2">
                  안심의 하트(Heart)
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  비버(B)의 형태를 감싸는 하트 라인은 아픈 아이를 돌보던 부모의 진심 어린 '생명 케어' 철학을 의미합니다.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-primary mb-2">
                  전문적인 블루(Teal)
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  신뢰와 청결을 상징하는 딥 네이비와 틸 컬러를 통해, 글로벌 가전 기업에서 쌓아온 10년의 전문성을 표현했습니다.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-primary mb-2">
                  비상하는 물결
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  하단의 부드러운 곡선은 고객의 공간에 흐르는 깨끗한 공기와 비버스케어가 선사하는 상쾌한 변화를 상징합니다.
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
              <p className="text-center text-gray-800 font-semibold italic">
                "비버처럼 꼼꼼하게,<br />
                전문가의 실력으로 당신의 숨결을 케어합니다."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
