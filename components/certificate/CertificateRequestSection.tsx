'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function CertificateRequestSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

  return (
    <section ref={ref} className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            beavers care 증명서 발급
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            전화상담 : 1899-7026
          </p>
          <p className="text-gray-600 text-lg">
            문의메일 : beaverscare0204@gmail.com
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            간편하고 쉬운 발급방법
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="font-bold text-gray-800 mb-2">증명서 요청</h4>
              <div className="h-10"></div>
            </div>

            {/* Arrow 1 */}
            <div className="text-primary text-4xl font-bold mb-20">
              &gt;
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="font-bold text-gray-800 mb-2">증명서 발부</h4>
              <p className="text-gray-600 text-sm">*영업일 기준<br />1~2일 소요됩니다.</p>
            </div>

            {/* Arrow 2 */}
            <div className="text-primary text-4xl font-bold mb-20">
              &gt;
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="font-bold text-gray-800 mb-2">증명서 발급조회</h4>
              <div className="h-10"></div>
            </div>

            {/* Arrow 3 */}
            <div className="text-primary text-4xl font-bold mb-20">
              &gt;
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h4 className="font-bold text-gray-800 mb-2">다운로드</h4>
              <div className="h-10"></div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">증명서 발급조회</h3>
              <form className="space-y-6">
                {/* 증명서 종류 */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">증명서</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">선택하세요</option>
                    <option value="계약정보확인">계약 정보 확인</option>
                    <option value="결제정보">결제 정보</option>
                    <option value="솔루션리포트">솔루션 리포트</option>
                    <option value="소독증명서">소독증명서</option>
                    <option value="기타">기타</option>
                  </select>
                </div>

                {/* 이름 */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">이름</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="이름을 입력하세요"
                  />
                </div>

                {/* 연락처 */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">연락처</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="w-1/3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="010"
                    />
                    <input
                      type="text"
                      className="w-1/3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="0000"
                    />
                    <input
                      type="text"
                      className="w-1/3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="0000"
                    />
                  </div>
                </div>

                {/* 이메일 */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">이메일</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="이메일"
                    />
                    <span className="flex items-center">@</span>
                    <select className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">직접입력</option>
                      <option value="naver.com">naver.com</option>
                      <option value="daum.net">daum.net</option>
                      <option value="gmail.com">gmail.com</option>
                      <option value="hanmail.net">hanmail.net</option>
                    </select>
                  </div>
                </div>

                {/* 제목 */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">제목</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="제목을 입력하세요"
                  />
                </div>

                {/* 내용 */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">내용</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="내용을 입력하세요"
                  />
                </div>

                {/* 개인정보 동의 */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy-agree"
                    checked={agreedToPrivacy}
                    onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                    className="mt-1 mr-3 w-5 h-5"
                  />
                  <label htmlFor="privacy-agree" className="text-gray-700">
                    개인정보 취급방침에 동의합니다.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-md hover:bg-primary/90 transition font-semibold text-lg"
                >
                  요청하기
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right: Certificate Sample */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">소독 증명서 샘플</h3>
              <div className="relative w-full h-[800px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/certificate/소독증명서샘플.png"
                  alt="소독 증명서 샘플"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
