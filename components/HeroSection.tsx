'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const heroSlides = [
    {
      text: '원하지 않는\n침입자를\n차단하고 싶을 때',
      bgImage: '/no_image.jpg',
    },
    {
      text: '든든한\n위생파트너가\n필요할 때',
      bgImage: '/no_image.jpg',
    },
    {
      text: '성공한\n옆집이\n부러울 때',
      bgImage: '/no_image.jpg',
    },
  ];

  return (
    <section className="relative w-full h-screen mt-20">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        speed={800}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet hero-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active hero-bullet-active',
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${slide.bgImage}')`,
                  filter: 'brightness(0.7)',
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30" />

              {/* Text Content */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 md:px-8">
                  <AnimatePresence mode="wait">
                    {activeIndex === index && (
                      <motion.div
                        key={`text-${index}`}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                      >
                        <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold whitespace-pre-line leading-tight">
                          {slide.text}
                        </h2>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .hero-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          margin: 0 6px;
          transition: all 0.3s ease;
        }
        .hero-bullet-active {
          width: 40px;
          border-radius: 6px;
          background: white;
        }
        .swiper-pagination {
          bottom: 40px !important;
        }
      `}</style>
    </section>
  );
}

