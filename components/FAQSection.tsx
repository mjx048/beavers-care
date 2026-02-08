'use client';

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Q0. 가정집 에어컨청소와 B2B전문업체는 무엇이 다릅니까?',
      answer:
        '가정집과 달리 대량시스템에어컨 세척작업은 현장에 대한 이해와 발생할 수 있는 리스크에 대한 대응이 중요합니다. 다량 시스템에어컨청소는 작업인원이 투입되는만큼 현장운영 경험이 풍부한 업체를 선택하셔야 주후 발생할 수 있는 위험을 줄이실 수 있습니다. 또한, 혹시 발생할 수 있는 이슈를 대비해서 AS자리가 확실한지, [책임배상보험]을 가입된 업체인지를 살펴보셔야 합니다.',
    },
    {
      question: 'Q1. 견적은 무엇으로 결정되니요?',
      answer:
        '에어컨의 종류(1way, 4way, 스탠드, 벽걸이)와 작업수량, 작업시간대(주간/야간), 접근성(층고/장비반입) 등이 반영됩니다. 비버스케어는 시스템에어컨 세척작업시 오염도와는 상관없이 작업합니다. 방문하여 작업환경과 작업물 상태를 확인하는 사전미팅 1시에 가격은 확정되며 현장에서의 추가요금 지불은 절대로 없습니다.',
    },
    {
      question: 'Q2. 추간(업무/전료 등)에도 가능한가요?',
      answer:
        '가능합니다. 다만 동선, 소음, 비산방지 기준에 따라 구역을 나누어 진행됩니다. 주간에 진행할 때는 더욱 B2B 경험이 풍부한 업체를 선정하셔야 업무방해없이 깔끔하고 완벽한 작업이 가능합니다.',
    },
    {
      question: 'Q3. 야간,휴무 작업도 되니요?',
      answer:
        '네. 병원과 공공기관은 운영 이후로 야간작업과 휴무일 작업이 빈번합니다.',
    },
    {
      question: 'Q4. 작업 시간은 얼마나 걸리나요?',
      answer:
        '작업수량과 작업환경 오염도에 따라 다르지만 대부분의 병원과 기관들은 하루 일정으로 진행하며 상황에 따라 이틀~삼일로 나누어 진행하는 경우들도 있습니다. (25대이하는 4인1팀 투입시 반나절정도 소요됩니다.)',
    },
    {
      question: 'Q5. 대량 시스템에어컨 청소 작업 중 냄새나 오염이 퍼지지 않나요?',
      answer:
        '비버스케어는 보양작업과 비산방지를 표준 공정으로 운영합니다. 2차오염방지를 철저하게 준수하는 작업과정보무로 기관 중 가장 깐깐한 병원 시스템에어컨세척 1고객사 비율이 높은 이유입니다.',
    },
    {
      question: 'Q6. 세척 후에도 냄새가 나는 경우가 있나요?',
      answer:
        '타사에서 작업 후 위와같은 이유로 많은 문의를 받습니다. 냄새의 원인은 비단 "에어컨 곰팡이"뿐만이 아니라 드레인/ 고여있는 물 / 수변부 오염 / 세적 후 충돌하지 않은 잔존물로 이슈가 발생할 수 있습니다. 병원과 기관의 경험이 풍부한 비버스케어 B2B전문팀에게 믿거주시면 빠르게 안내드리겠습니다.',
    },
    {
      question: 'Q7. 카드결제 / 세금계산서 / 견적서 / 내역서 발행 가능한가요?',
      answer:
        '가능합니다. 기관 내부 절차에 맞춰 문서 제공 가능합니다.',
    },
    {
      question: 'Q8. 추사와 출입 업소는 무엇이 필요한가요?',
      answer:
        '장비 반입과 동선확보를 위해서 1~2대의 추차와 출입증, 보안구정 관련한 사전 안내가 있으면 빠른 진행가능합니다.',
    },
    {
      question: 'Q9. 정기관리는 어느 주기가 좋나요?',
      answer:
        '시설의 유형과 가동시간, 민감도등에 따라 다를 수 있지만 1년단위 상담과 반기단위 상담이 많습니다. 여름철에만 가동하는 냉방기가 아닌 사계절 내내 가동하는 냉난방기가 설치되어 있다면 반기단위를 추천합니다.',
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

