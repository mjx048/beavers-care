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

  return (
    <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left Content */}
          <div className="text-left space-y-6 lg:col-span-2">
            <div 
              className={`inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
            >
              ✨ 병원·관공서가 선택한 전문 업체
            </div>
            
            <h1 
              className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 transition-all duration-1000 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              프리미엄<br />
              냉난방기 위생관리,<br />
              <span className="text-teal-600 relative">
                비버스케어
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-teal-300 opacity-30 -z-10"></span>
              </span>
            </h1>
            
            <p 
              className={`text-lg md:text-xl text-gray-600 transition-all duration-1000 delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              시스템 에어컨 청소부터 소독·방역까지<br />
              안전하고 깨끗하게 관리해드립니다
            </p>

            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <button 
                onClick={scrollToContact}
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg"
              >
                바로 시작하기
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all border-2 border-gray-300"
              >
                더 알아보기
              </button>
            </div>

            {/* Quick Contact - 임시 비활성화 (나중에 사용 예정) */}
            <div 
              className={`flex items-center gap-4 pt-4 transition-all duration-1000 delay-800 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div 
                className="flex items-center gap-2 text-gray-700 pointer-events-none"
              >
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  💬
                </div>
                <span className="font-semibold">카카오 상담</span>
              </div>
              <div 
                className="flex items-center gap-2 text-gray-700 pointer-events-none"
              >
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  📞
                </div>
                <span className="font-semibold">02-1234-5678</span>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div 
            className={`relative h-[400px] md:h-[500px] lg:h-[600px] lg:col-span-3 transition-all duration-1000 delay-400 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl lg:-mr-12">
              <Image
                src="/hero_image.jpg"
                alt="비버스케어 전문 팀"
                fill
                className="object-cover object-center"
                priority
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Floating Badge */}
              {/* <div className="absolute bottom-8 right-8 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src="/logo_icon.png"
                    alt="비버스케어 로고"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <div>
                    <div className="font-bold text-gray-900">BEAVERS</div>
                    <div className="text-sm text-teal-600">CARE</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  안전하고 깨끗하게 관리합니다!
                </p>
                <div className="flex gap-2 mt-3">
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                    Daily
                  </button>
                  <button className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors">
                    Weekly
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Trust Badges - Mobile */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 lg:hidden transition-all duration-1000 delay-1000 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-teal-600">500+</div>
            <div className="text-sm text-gray-600">누적 작업</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-teal-600">98%</div>
            <div className="text-sm text-gray-600">만족도</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-teal-600">100+</div>
            <div className="text-sm text-gray-600">병원·관공서</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-teal-600">A/S</div>
            <div className="text-sm text-gray-600">완벽 보증</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div> */}
      </div>
    </section>
  );
}

