import AnimatedSection from './AnimatedSection';

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              비버스케어만의 차별화된 서비스
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              전문 인력과 최신 장비로 완벽한 에어컨 청소 및 실내 공기질 관리를 제공합니다. 
              체계적인 프로세스와 철저한 사후관리로 고객님의 만족을 책임집니다.
            </p>
            <button className="mt-8 bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-700 transition-all transform hover:scale-105 shadow-lg">
              서비스 보러가기
            </button>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mt-20">
          <AnimatedSection animation="fade-up" delay={0}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">전문 인력</h3>
                <p className="text-gray-600">
                  철저한 교육을 받은 전문 기술자들이 체계적인 프로세스로 작업합니다.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">친환경 약품</h3>
                <p className="text-gray-600">
                  인체에 무해한 친환경 약품과 최신 장비를 사용하여 안전하게 관리합니다.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">신속한 대응</h3>
                <p className="text-gray-600">
                  긴급 상황 발생 시 빠른 출동과 대응으로 문제를 즉시 해결합니다.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">사후 관리</h3>
                <p className="text-gray-600">
                  작업 완료 후에도 정기적인 점검과 관리로 최상의 상태를 유지합니다.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
