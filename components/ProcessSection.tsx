import AnimatedSection from './AnimatedSection';

export default function ProcessSection() {
  const processes = [
    {
      step: "01",
      title: "사전 점검",
      description: "현장 방문하여 에어컨 상태, 설치 환경, 오염도 등을 정밀 진단합니다",
      details: [
        "현장 상태 확인",
        "작업 범위 협의",
        "견적 확정",
      ],
      icon: "🔍",
    },
    {
      step: "02",
      title: "전문 작업",
      description: "전문 장비와 친환경 세제를 사용하여 안전하고 꼼꼼하게 작업합니다",
      details: [
        "완전 분해 세척",
        "고압 세척 진행",
        "살균 및 소독",
      ],
      icon: "🛠️",
    },
    {
      step: "03",
      title: "작업 검수",
      description: "고객님과 함께 작업 결과를 확인하고 이상 유무를 점검합니다",
      details: [
        "작업 결과 확인",
        "정상 작동 테스트",
        "고객 확인",
      ],
      icon: "✅",
    },
    {
      step: "04",
      title: "리포트 제공",
      description: "작업 전후 사진과 상세한 작업 내역이 담긴 리포트를 제공합니다",
      details: [
        "전후 사진 제공",
        "작업 내역서",
        "A/S 안내",
      ],
      icon: "📋",
    },
  ];

  return (
    <section id="process" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            체계적인 작업 프로세스
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            전문성과 신뢰를 바탕으로 한<br />
            비버스케어만의 4단계 작업 시스템
          </p>
          </div>
        </AnimatedSection>

        {/* Desktop View */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="hidden md:block max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-4 mb-8">
            {processes.map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                {index < processes.length - 1 && (
                  <div className="absolute top-8 left-[60%] w-[80%] h-0.5 bg-teal-200"></div>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 text-center">{process.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">
                  {process.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 text-center leading-relaxed">
                  {process.description}
                </p>
                <ul className="space-y-2">
                  {process.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          </div>
        </AnimatedSection>

        {/* Mobile View */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="md:hidden max-w-md mx-auto space-y-6">
          {processes.map((process, index) => (
              <div key={index} className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold">
                    {process.step}
                  </div>
                  {index < processes.length - 1 && (
                    <div className="w-0.5 h-24 bg-teal-200 mx-auto mt-2"></div>
                  )}
                </div>
                
                <div className="flex-1 bg-gray-50 rounded-xl p-6">
                  <div className="text-3xl mb-2">{process.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {process.description}
                  </p>
                  <ul className="space-y-1">
                    {process.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            투명하고 체계적인 작업 프로세스로 고객님의 만족을 약속드립니다
          </p>
          <button className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors shadow-lg">
            작업 문의하기
          </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

