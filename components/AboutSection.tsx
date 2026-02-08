import AnimatedSection from './AnimatedSection';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="w-full">
        {/* Intro */}
        <div className="container mx-auto px-4 mb-16">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
              가장 취약한 곳이 기준이 됩니다,<br />
              <span className="text-teal-600">의료시설 주준의 정밀 세척&소독방역 솔루션</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              아들과의 긴 입원 생활 중 목격한 오염된 공기가 환아와 간병인들에게 
              미치는 영향을 보며 결심했습니다. 
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              비버스케어는 그 어떤 공간이라도 가장 엄격한 의료 현장의 기준으로 관리합니다
            </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats */}
        <div className="container mx-auto px-4 mb-16">
          <AnimatedSection animation="zoom-in" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-teal-50 p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">4년+</div>
              <div className="text-gray-700 font-medium">업계 경력</div>
            </div>
            <div className="bg-teal-50 p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">1000+</div>
              <div className="text-gray-700 font-medium">누적 작업 건수</div>
            </div>
            <div className="bg-teal-50 p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">100+</div>
              <div className="text-gray-700 font-medium">병원·관공서</div>
            </div>
            <div className="bg-teal-50 p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">98%</div>
              <div className="text-gray-700 font-medium">고객 만족도</div>
            </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Video Section - Full Width with Scroll Expand Animation */}
        <div className="mb-16">
          <AnimatedSection animation="scale-expand" delay={0}>
            <div className="relative w-full overflow-hidden shadow-2xl bg-gradient-to-br from-teal-50 to-cyan-50 p-1">
              <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  src="https://www.youtube.com/embed/0KsozVJ2c0E?controls=0&rel=0&playsinline=1&cc_load_policy=0&autoplay=1&mute=1&loop=1&playlist=0KsozVJ2c0E&enablejsapi=1"
                  title="비버스케어 소개 영상"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats */}
        <div className="container mx-auto px-4">

          {/* Features */}
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl border border-teal-100">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">전문 인증</h3>
              <p className="text-gray-600">
                실내공기질 관리 전문 인증 보유<br />
                체계적인 교육을 받은 전문 인력
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl border border-teal-100">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">완벽한 보증</h3>
              <p className="text-gray-600">
                작업 후 A/S 완벽 보증<br />
                책임보험 가입으로 안심 시공
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl border border-teal-100">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">투명한 리포트</h3>
              <p className="text-gray-600">
                작업 전후 사진 촬영<br />
                상세한 작업 리포트 제공
              </p>
            </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

