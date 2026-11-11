'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const clientNames = [
  'YBM어학원 장곡점',
  '맑은위내과의원',
  '강한마디재활의학과',
  '웰손병원',
  '썬벨펜션',
  '발도스커피',
  '(주)립멘',
  '홀덤펍',
  '카페 모어멜로우',
  '애버덴호텔',
  '바른약국',
  '하온치과',
  '마포중암중학교',
  '더하다한방병원',
  '의왕교통대학교',
  '국어의정원',
  '바른부부치과의원',
  '드림항유외과의원',
  '아이미소안과',
  '연세서울비뇨기과의원',
  '고메스퀘어 배곧점',
  '흥케이병원',
  '호반우정어린이집',
  '시립배곧어울림어린이집',
  '시흥햇님나라어린이집',
  '그림동화어린이집',
  '시흥육아종합지원센터',
  '장현한방병원',
  '경희도담한방병원',
  '그외다수',
];

export default function ClientSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 min-w-0"
        >
          <p className="text-primary font-semibold mb-2">Client</p>
          <h2 className="text-[clamp(1.35rem,5.5vw,2.25rem)] font-bold text-gray-800 mb-4 leading-snug text-balance break-keep">
            비버스케어와 함께한 1,000건 이상 프로젝트 성공경험
          </h2>
          <p className="text-gray-600 text-[15px] md:text-lg max-w-3xl mx-auto break-keep">
            시흥·인천·경기 병원, 학원, 기업, 상업시설 등 다양한 현장에서
            에어컨 세척과 소독 방역 프로젝트를 수행했습니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full max-w-6xl mx-auto aspect-[2172/724] pointer-events-none select-none">
            <Image
              src="/client/client_logo.png"
              alt="비버스케어 클라이언트"
              fill
              draggable={false}
              className="object-contain"
            />
          </div>
          <ul className="mt-4 max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-0.5 gap-y-2 text-xs sm:text-[13px] md:text-sm leading-relaxed text-gray-500 break-keep">
            {clientNames.map((name, index) => (
              <li key={name} className="flex items-center max-w-full">
                {index > 0 && (
                  <span className="mx-1.5 sm:mx-2 text-gray-400 select-none" aria-hidden>
                    ·
                  </span>
                )}
                <span className={name === '그외다수' ? 'text-gray-400' : undefined}>
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

