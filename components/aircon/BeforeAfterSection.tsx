'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BeforeAfterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const beforeAfterPairs = [
    {
      before: '/solution/aircon_clean/before_after/1.jpg',
      after: '/solution/aircon_clean/before_after/1-1.png',
    },
    {
      before: '/solution/aircon_clean/before_after/2.png',
      after: '/solution/aircon_clean/before_after/2-2.png',
    },
    {
      before: '/solution/aircon_clean/before_after/3.png',
      after: '/solution/aircon_clean/before_after/3-3.png',
    },
    {
      before: '/solution/aircon_clean/before_after/4.png',
      after: '/solution/aircon_clean/before_after/4-4.png',
    },
    {
      before: '/solution/aircon_clean/before_after/5.png',
      after: '/solution/aircon_clean/before_after/5-5.png',
    },
    {
      before: '/solution/aircon_clean/before_after/6.png',
      after: '/solution/aircon_clean/before_after/6-6.png',
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            세척 전후 비교
          </h2>
          <p className="text-gray-600 text-lg">
            전문 장비와 기술로 완벽하게 세척합니다
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="before-after-swiper pb-12"
          >
            {beforeAfterPairs.map((pair, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {/* Before */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="relative w-full h-[400px]">
                      <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
                        세척 전
                      </div>
                      <Image
                        src={pair.before}
                        alt={`세척 전 ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* After */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="relative w-full h-[400px]">
                      <div className="absolute top-4 left-4 z-10 bg-green-500 text-white px-4 py-2 rounded-lg font-bold">
                        세척 후
                      </div>
                      <Image
                        src={pair.after}
                        alt={`세척 후 ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style jsx global>{`
        .before-after-swiper .swiper-button-prev,
        .before-after-swiper .swiper-button-next {
          color: var(--primary-color);
          background: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .before-after-swiper .swiper-button-prev:after,
        .before-after-swiper .swiper-button-next:after {
          font-size: 20px;
        }

        .before-after-swiper .swiper-pagination-bullet {
          background: var(--primary-color);
          opacity: 0.5;
        }

        .before-after-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
