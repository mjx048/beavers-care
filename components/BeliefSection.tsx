'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function BeliefSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const reviewImages = [
    '/belief/review/review_20260216_144236427_01.jpg',
    '/belief/review/review_20260216_144236427_02.jpg',
    '/belief/review/review_20260216_144236427_03.jpg',
    '/belief/review/review_20260216_144236427_04.jpg',
    '/belief/review/review_20260216_144236427_05.jpg',
    '/belief/review/review_20260216_144236427_06.jpg',
    '/belief/review/review_20260216_144236427_07.jpg',
    '/belief/review/review_20260216_144236427_08.jpg',
    '/belief/review/review_20260216_144236427_09.jpg',
    '/belief/review/review_20260216_144236427_10.jpg',
    '/belief/review/review_20260216_144236427_11.jpg',
    '/belief/review/review_20260216_144236427_12.jpg',
    '/belief/review/review_20260216_144236427_13.jpg',
  ];

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="mx-auto px-6 max-w-screen-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2">Belief</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            고객 신뢰와 만족
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            시흥·인천·경기 병원·기업·학교 현장에서 쌓아온 실제 고객 후기와 사례입니다.
            에어컨 세척·소독 방역 후 쾌적한 공기와 위생에 대한 만족을 텍스트와 리뷰로 확인할 수 있습니다.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Popup Image (1/2) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative w-full h-[38vh]">
              <Image
                src="/belief/popup/costco popup.png"
                alt="비버스케어 고객 사례 — 대형 유통·기업 현장 공기위생 케어"
                fill
                className="object-cover drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right: Review Slider (1/2) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <Swiper
              modules={[Autoplay]}
              spaceBetween={12}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              className="review-slider"
            >
              {reviewImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-[38vh] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
                    <Image
                      src={image}
                      alt={`비버스케어 고객 리뷰 ${index + 1} — 에어컨 세척·방역 후기`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

