'use client';

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    location: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 구현시 API 호출 또는 이메일 전송
    alert('견적 문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            견적 문의
          </h2>
          <p className="text-lg text-gray-600">
            상담 및 견적은 무료입니다<br />
            편하신 방법으로 문의해주세요
          </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <AnimatedSection animation="fade-right" delay={200}>
            <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">빠른 상담</h3>
              
              {/* Phone */}
              <a 
                href="tel:1899-7026"
                className="flex items-center gap-4 p-4 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors mb-4"
              >
                <div className="w-14 h-14 bg-teal-600 rounded-full flex items-center justify-center text-2xl">
                  📞
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">전화 문의</div>
                  <div className="text-xl font-bold text-teal-600">1899-7026</div>
                  <div className="text-xs text-gray-500">평일 09:00 - 18:00</div>
                </div>
              </a>

              {/* KakaoTalk */}
              <a 
                href="https://pf.kakao.com/_PrKhX/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors mb-4"
              >
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
                  💬
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">카카오톡 상담</div>
                  <div className="text-xl font-bold text-yellow-700">비버스케어</div>
                  <div className="text-xs text-gray-500">24시간 문의 가능</div>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:info@beaverscare.com"
                className="flex items-center gap-4 p-4 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors"
              >
                <div className="w-14 h-14 bg-teal-600 rounded-full flex items-center justify-center text-2xl">
                  ✉️
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">이메일 문의</div>
                  <div className="text-lg font-bold text-teal-700">beaverscare01@gmail.com</div>
                  <div className="text-xs text-gray-500">영업일 기준 24시간 내 답변</div>
                </div>
              </a>
            </div>

            {/* Business Hours */}
            <div className="bg-teal-600 text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">운영시간</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>평일</span>
                  <span className="font-semibold">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>토요일</span>
                  <span className="font-semibold">09:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>일요일/공휴일</span>
                  <span className="font-semibold">변동</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-teal-100">
                * 운영시간 외 상담 가능 (별도 문의)
              </p>
            </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fade-left" delay={400}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">온라인 견적 문의</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  이름 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="홍길동"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="010-1234-5678"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  서비스 종류 <span className="text-red-500">*</span>
                </label>
                <select
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">선택해주세요</option>
                  <option value="에어컨청소">시스템 에어컨/냉난방기 세척</option>
                  <option value="소독방역">소독·방역 서비스</option>
                  <option value="정기관리">정기 관리 서비스</option>
                  <option value="기타">기타 문의</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  지역
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="서울시 강남구"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  문의 내용
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder={"견적 요청 시 다음 4가지만 보내주시면 빠르게 안내드리겠습니다.\n 1) 시설 유형\n 2) 대략적인 대수\n 3) 희망일정\n 4) 특이사항(누수, 냄새, 곰팡이, 고장 등)"}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-teal-700 transition-colors shadow-lg"
              >
                견적 문의하기
              </button>

              <p className="text-xs text-gray-500 text-center">
                문의하신 내용은 영업일 기준 24시간 내에 답변드립니다
              </p>
            </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

