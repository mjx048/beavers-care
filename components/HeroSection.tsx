'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-start overflow-hidden mt-20 md:mt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/main.png"
          alt="비버스케어 메인 배경"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-32 md:pt-40">
        <div className="flex justify-between items-start">
          {/* 왼쪽 상단 - 로고 이미지와 파트너사 */}
          <div 
            className={`flex flex-col items-start gap-4 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <div className="flex items-center gap-3 p-3 rounded-lg">
              <div className="rounded px-3 py-1.5 flex items-center justify-center">
                <div className="relative w-32 h-12">
                  <Image
                    src="/samsung_logo.png"
                    alt="삼성"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="rounded-full w-16 h-16 flex items-center justify-center p-1">
                <div className="relative w-full h-full">
                  <Image
                    src="/lg_logo.png"
                    alt="LG"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="rounded px-3 py-1.5 flex items-center justify-center">
                <div className="relative w-24 h-12">
                  <Image
                    src="/전자랜드_logo.png"
                    alt="전자랜드"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <h3 
              className={`text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-white transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              비버스케어 임직원의 10년 발자취
            </h3>
          </div>

          {/* 우상단 메인 텍스트 */}
          <div className="max-w-5xl text-right">
            <div 
              className={`text-teal-400 text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              숨쉬는 공기, 케어의 기준
            </div>
            
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-2 whitespace-nowrap transition-all duration-1000 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              가전을 아는 전문가가 케어합니다.
            </h1>
            
            <h2 
              className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              병원·관공서 위생관리 파트너,<br />
              <span className="text-teal-400">비버스케어</span>
            </h2>
          </div>
        </div>

        {/* 오른쪽 하단 고정 버튼들 */}
        <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
          {/* 전화 버튼 */}
          <div 
            className={`bg-gray-700/90 backdrop-blur-sm text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 transition-all duration-1000 delay-400 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-15 h-15 flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="비버스케어"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-xs text-gray-300">바로견적</div>
                <div className="font-bold text-xl">1899-7026</div>
              </div>
            </div>
            <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
            </div>
          </div>

          {/* 카카오톡 상담 버튼 */}
          <a
            href="https://pf.kakao.com/_PrKhX/chat"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-black text-yellow-400 px-5 py-2.5 rounded-full font-bold shadow-2xl hover:bg-gray-900 transition-all flex items-center justify-start gap-8 duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="relative w-8 h-8 flex-shrink-0">
                  <Image
                    src="/kakao_logo.png"
                    alt="비버스케어 카카오톡 상담문의"
                    fill
                    className="object-contain"
                  />
            </div> 
            <div className="flex gap-1">
              <span className="text-sm">카카오톡</span>
              <span className="text-sm">상담문의</span>
            </div>
          </a>

          {/* Blog & TOP 버튼 */}
          <div className="flex gap-3">
            {/* Blog 버튼 */}
            <a
              href="https://blog.naver.com/green_luck22"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-green-500 text-white p-4 rounded-full font-bold shadow-2xl hover:bg-green-600 transition-all flex items-center justify-center duration-1000 delay-600 w-20 h-20 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="relative w-14 h-14">
                  <Image
                    src="/blog_logo.png"
                    alt="비버스케어 블로그"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </a>

            {/* TOP 버튼 */}
            <button
              onClick={scrollToTop}
              className={`bg-teal-600 text-white p-4 rounded-full font-bold shadow-2xl hover:bg-teal-700 transition-all flex items-center justify-center duration-1000 delay-700 w-20 h-20 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
              aria-label="맨 위로"
            >
              <div className="flex flex-col items-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="text-xs mt-1 font-bold">TOP</span>
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

