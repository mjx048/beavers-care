'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const certificates = [
  { src: '/document/비버스케어_사업자등록증_본점.jpg', alt: '사업자등록증 (본점)' },
  { src: '/document/비버스케어_사업자등록증_송도점.jpg', alt: '사업자등록증 (송도점)' },
  { src: '/document/소독업신고증.jpg', alt: '소독업 신고증' },
  { src: '/document/냉난방기세척관리사_자격증.jpg', alt: '냉난방기세척관리사 자격증' },
  { src: '/document/여성기업확인서_비버스케어_본점.png', alt: '여성기업확인서 (본점)' },
//   { src: '/document/여성기업확인서_비버스케어_송도점.jpg', alt: '여성기업확인서 (송도점)' },
  { src: '/document/책임배상보험_가입증명서.jpg', alt: '책임배상보험 가입증명서' },
];

export default function CertificatesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 제목 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold mb-2">Certificates</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            검증된 기업, 안심할 수 있는 파트너
          </h2>
          <p className="text-gray-500 text-lg">
            비버스케어의 신뢰를 증명하는 공식 인증서들입니다
          </p>
        </motion.div>

        {/* 슬라이더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* 커스텀 네비게이션 버튼 */}
          <button
            className="cert-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10
              w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center
              text-gray-600 hover:bg-primary hover:text-white transition-colors"
            aria-label="이전"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            className="cert-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10
              w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center
              text-gray-600 hover:bg-primary hover:text-white transition-colors"
            aria-label="다음"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.cert-prev',
              nextEl: '.cert-next',
            }}
            loop={true}
            className="certificates-slider px-2"
          >
            {certificates.map((cert, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                  <div className="relative w-full h-[480px]">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-600 text-center py-3 px-4">{cert.alt}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

