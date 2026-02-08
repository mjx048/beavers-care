import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

export default function InsuranceSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="container mx-auto">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              책임배상 보험 5억 가입완료
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              고객님의 소중한 자산을 지키기 위한 완벽한 보장
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
          {/* 보험 증서 */}
          <AnimatedSection animation="fade-right" delay={200}>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="relative h-[400px] mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/데이터.png"
                  alt="책임배상보험 증서"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <div className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full text-xl font-bold">
                  최대5억원 한도 보상
                </div>
                <p className="text-gray-600 mt-4">
                  meritz 메리츠화재
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* 투명한 리포트 */}
          <AnimatedSection animation="fade-left" delay={400}>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">
                  투명한 리포트
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  작업전후 사진촬영
                </p>
                <p className="text-gray-600 leading-relaxed">
                  상세한 작업리포트로 업무분담<br />
                  <span className="font-bold text-teal-600">작업보고서</span>
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="relative h-[300px] mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/데이터.png"
                    alt="작업 리포트 예시"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-teal-600 text-white p-6 rounded-2xl text-center">
                  <div className="text-3xl mb-2">✓</div>
                  <div className="font-bold">청결도판정</div>
                  <div className="text-sm mt-1">PASS(합격)</div>
                </div>
                <div className="bg-teal-600 text-white p-6 rounded-2xl text-center">
                  <div className="text-3xl mb-2">📱</div>
                  <div className="font-bold">상세한</div>
                  <div className="text-sm mt-1">작업리포트 무분담</div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-700 font-medium">
                  작업 후 AS까지 완벽보장
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

