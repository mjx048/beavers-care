'use client';

import { useState } from 'react';

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<'optionA' | 'optionB'>('optionA');

  const pricingPlans = {
    optionA: [
      {
        tier: 'Basic',
        name: '베이직 상품 A',
        features: [
          '단순복사',
          '메뉴얼 제공',
          '간단한 수정',
        ],
        popular: false,
      },
      {
        tier: 'Standard',
        name: '스탠다드 상품 A',
        features: [
          '페이지 추가 작업',
          '템플릿 구조 수정 작업',
          'SEO 작업',
          '단순복사',
          '메뉴얼 제공',
        ],
        popular: true,
      },
      {
        tier: 'Premium',
        name: '프리미엄 상품 A',
        features: [
          '100% 맞춤 제작',
          '고퀄리티 제작',
          'SEO 작업',
          '메뉴얼 제공',
          '기능 추가',
        ],
        popular: false,
      },
    ],
    optionB: [
      {
        tier: 'Basic',
        name: '베이직 상품 B',
        features: [
          '단순복사',
          '메뉴얼 제공',
          '간단한 수정',
        ],
        popular: false,
      },
      {
        tier: 'Standard',
        name: '스탠다드 상품 B',
        features: [
          '페이지 추가 작업',
          '템플릿 구조 수정 작업',
          'SEO 작업',
          '단순복사',
          '메뉴얼 제공',
        ],
        popular: true,
      },
      {
        tier: 'Premium',
        name: '프리미엄 상품 B',
        features: [
          '100% 맞춤 제작',
          '고퀄리티 제작',
          'SEO 작업',
          '메뉴얼 제공',
          '기능 추가',
        ],
        popular: false,
      },
    ],
  };

  const currentPlans = pricingPlans[activeTab];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            다양한 상품이 준비되어 있습니다.<br />
            원하시는 상품을 찾아보세요!
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setActiveTab('optionA')}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'optionA'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            옵션A
          </button>
          <button
            onClick={() => setActiveTab('optionB')}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'optionB'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            옵션B
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-gray-900' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    인기!
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-sm text-gray-600 mb-2">{plan.tier}</div>
                <h3 className="text-2xl font-bold mb-6">{plan.name}</h3>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  바로 신청하기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

