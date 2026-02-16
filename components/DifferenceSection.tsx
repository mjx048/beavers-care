'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function DifferenceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const differences = [
    {
      title: '사업을 이해한 맞춤형 계획',
      description: '업종, 환경에 따라 달라지는 세심한 솔루션',
    },
    {
      title: '전문가를 직접 양성',
      description: '적은 소비자 부담에 높은 품질을 유지하는 비결',
    },
    {
      title: '필요에 맞는 행정업무 지원',
      description: '소득증명서, 솔루션 레포트 등 행정업무 대행',
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
          <p className="text-primary font-semibold mb-2">위생파트너팀 차별점</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            이 믿고 맡기는 이유
          </h2>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {differences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-secondary/20 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {differences.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-br from-secondary/20 to-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

