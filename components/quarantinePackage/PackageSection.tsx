'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function PackageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Image and Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 w-full"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 leading-relaxed">
              1+1 패키지 소개
            </h2>
            <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/solution/quarantinePackage/패키지상품설명.png"
                alt="에어컨 방역 패키지 상품 설명"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right: Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <div className="space-y-8">
              {/* 1. 비용 */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="inline-block w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mr-3">1</span>
                  비용
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  합리적인 가격으로 에어컨 세척과 소독 방역을 동시에 제공하는 패키지 상품입니다.
                  개별 서비스 대비 최대 __% 할인 혜택을 받으실 수 있습니다.
                </p>
              </div>

              {/* 2. 효율 */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="inline-block w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mr-3">2</span>
                  효율
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  한 번의 방문으로 에어컨 세척과 소독 방역을 모두 완료하여 
                  시간과 비용을 절약할 수 있습니다.
                </p>
              </div>

              {/* 3. 관리 */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="inline-block w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mr-3">3</span>
                  관리
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  정기적인 관리 서비스를 통해 쾌적하고 위생적인 실내 환경을 
                  ___일 유지할 수 있습니다. 체계적인 사후관리 시스템을 제공합니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
