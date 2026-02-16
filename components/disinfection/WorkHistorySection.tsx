'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function WorkHistorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const workImages = [
    '/solution/disinfection/소독방역1.png',
    '/solution/disinfection/소독방역2.png',
    '/solution/disinfection/소독방역3.png',
    '/solution/disinfection/소독방역4.png',
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 w-full"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-relaxed">
              방역전문 beavers care<br />
              모든 곳을 가장 까다로운 <span style={{ color: 'var(--secondary-color)' }}>[병원]</span> 기준으로 작업합니다.
            </h2>
            <p className="text-gray-600 text-xl mb-4">
              병원 관공서 학교 기업 등
            </p>
            <p className="text-gray-800 text-2xl font-bold">
              B2B 전문
            </p>
          </motion.div>

          {/* Right: Vertical Slider */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <div className="space-y-4">
              <Swiper
                modules={[Autoplay]}
                direction="vertical"
                spaceBetween={20}
                slidesPerView={3}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="h-[900px]"
                style={{ height: '900px' }}
              >
                {workImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg bg-gray-100">
                      <Image
                        src={image}
                        alt={`소독 방역 작업 사진 ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index < 2}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
