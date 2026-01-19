'use client';

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '에어컨 청소는 얼마나 자주 해야 하나요?',
      answer:
        '일반적으로 가정용은 연 1~2회, 병원·관공서·학교 등 다중이용시설은 분기별 청소를 권장합니다. 사용 빈도와 환경에 따라 달라질 수 있으며, 정기 관리 계약을 통해 최적의 주기로 관리받으실 수 있습니다.',
    },
    {
      question: '작업 시간은 얼마나 걸리나요?',
      answer:
        '일반 가정용 벽걸이 에어컨은 대당 1~1.5시간, 시스템 에어컨은 2~3시간 정도 소요됩니다. 에어컨 대수와 오염도에 따라 시간이 달라질 수 있으며, 사전 점검 시 정확한 작업 시간을 안내해 드립니다.',
    },
    {
      question: '작업 후 A/S는 어떻게 되나요?',
      answer:
        '작업 후 30일 이내 문제 발생 시 무상 A/S를 제공합니다. 작업 완료 후 상세한 리포트와 함께 A/S 안내서를 제공하며, 정기 관리 고객님께는 우선 출동 서비스를 제공합니다.',
    },
    {
      question: '친환경 세제를 사용하나요?',
      answer:
        '네, 인체에 무해한 친환경 세제만을 사용합니다. 특히 병원, 학교 등 민감한 시설의 경우 KC 인증을 받은 안전한 세제를 사용하며, 작업 후 잔류물이 남지 않도록 철저히 헹굼 작업을 진행합니다.',
    },
    {
      question: '견적은 어떻게 받을 수 있나요?',
      answer:
        '전화(02-1234-5678), 카카오톡, 온라인 문의 폼을 통해 무료 견적을 받으실 수 있습니다. 정확한 견적을 위해 현장 방문 점검을 진행하며, 점검 후 투명한 견적서를 제공해 드립니다.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            자주 묻는 질문
          </h2>
          <p className="text-lg text-gray-600">
            궁금하신 사항을 빠르게 확인하세요
          </p>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-gray-600 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

