import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

export default function AirconExpertSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              에어컨세척과 소독방역 전문
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
          {/* 에어컨 분해 범위 */}
          <AnimatedSection animation="fade-right" delay={200}>
            <div className="bg-gradient-to-br from-gray-50 to-teal-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
                에어컨분해범위
              </h3>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/분해범위.png"
                  alt="에어컨 분해 범위"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-6 space-y-2 text-center">
                <p className="text-gray-700">프론트판넬과 필터</p>
                <p className="text-gray-700">커버터 분리</p>
                <p className="text-gray-700">PCB보앙작업</p>
                <p className="text-gray-700">드레인판</p>
                <p className="text-gray-700">송풍팬</p>
                <p className="text-gray-700">냉각판(열교환기)</p>
              </div>
            </div>
          </AnimatedSection>

          {/* 실외기세척 가능 */}
          <AnimatedSection animation="fade-left" delay={400}>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
                실외기세척 가능
              </h3>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/방역1.png"
                  alt="실외기 세척 작업"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

