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
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold mb-2">Belief</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            고객 신뢰와 만족
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left: Popup Image (3/4) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-3/4 w-full"
          >
            <div className="relative w-full h-[400px] lg:h-[500px]">
              <Image
                src="/belief/popup/costco popup.png"
                alt="고객 사례"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right: Review Slider (1/4) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/4 w-full"
          >
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              className="review-slider"
            >
              {reviewImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-[380px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
                    <Image
                      src={image}
                      alt={`리뷰 ${index + 1}`}
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

