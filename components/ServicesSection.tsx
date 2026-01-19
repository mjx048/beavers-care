import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

export default function ServicesSection() {
  const services = [
    {
      image: "/service_1.jpg",
      title: "시스템 에어컨/냉난방기 세척",
      description: "천장형, 벽걸이형, 스탠드형 등 모든 타입의 에어컨을 전문적으로 분해하여 깨끗하게 세척합니다",
      features: [
        "실외기 및 실내기 완전 분해",
        "열교환기 고압 세척",
        "드레인 청소 및 살균",
        "필터 교체 및 점검",
      ],
    },
    {
      image: "/service_2.jpg",
      title: "소독·방역 서비스",
      description: "전문 장비와 친환경 약품을 사용한 실내 공간 살균 및 방역으로 안전한 환경을 만듭니다",
      features: [
        "실내 공간 전체 소독",
        "바이러스·세균 제거",
        "친환경 약품 사용",
        "방역 완료 증명서 발급",
      ],
    },
    {
      image: "/service_3.jpg",
      title: "정기 관리 서비스",
      description: "정기적인 점검과 관리로 쾌적한 실내 환경을 지속적으로 유지하는 프리미엄 서비스입니다",
      features: [
        "월별/분기별 정기 점검",
        "필터 교체 및 청소",
        "공기질 측정",
        "우선 출동 서비스",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              전문 서비스 안내
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              비버스케어는 다양한 시설의 특성에 맞춘<br />
              맞춤형 청소 및 관리 서비스를 제공합니다
            </p>
          </div>
        </AnimatedSection>

        {/* Services with Image */}
        <div className="space-y-24 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {index % 2 === 1 ? (
                // 두 번째 서비스: 텍스트 좌측, 이미지 우측
                <>
                  {/* Content */}
                  <AnimatedSection 
                    animation="fade-right" 
                    delay={200}
                  >
                    <div className="space-y-6">
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                      
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <svg
                              className="w-6 h-6 text-teal-600 mr-3 mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-700 text-lg">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-colors font-semibold shadow-lg text-lg">
                        자세히 보기
                      </button>
                    </div>
                  </AnimatedSection>

                  {/* Image */}
                  <AnimatedSection 
                    animation="fade-left" 
                    delay={400}
                  >
                    <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </AnimatedSection>
                </>
              ) : (
                // 첫 번째, 세 번째 서비스: 이미지 좌측, 텍스트 우측
                <>
                  {/* Image */}
                  <AnimatedSection 
                    animation="fade-right" 
                    delay={200}
                  >
                    <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </AnimatedSection>

                  {/* Content */}
                  <AnimatedSection 
                    animation="fade-left" 
                    delay={400}
                  >
                    <div className="space-y-6">
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                      
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <svg
                              className="w-6 h-6 text-teal-600 mr-3 mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-700 text-lg">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-colors font-semibold shadow-lg text-lg">
                        자세히 보기
                      </button>
                    </div>
                  </AnimatedSection>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <AnimatedSection animation="zoom-in" delay={600}>
          <div className="mt-24 bg-teal-600 text-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              맞춤형 서비스가 필요하신가요?
            </h3>
            <p className="text-lg mb-6 text-teal-100">
              병원, 학교, 관공서, 기업 등 시설 특성에 맞는<br />
              맞춤형 청소 및 관리 계획을 제안해 드립니다
            </p>
            <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition-colors shadow-lg">
              견적 문의하기
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
