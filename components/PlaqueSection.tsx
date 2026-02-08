import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

export default function PlaqueSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="container mx-auto max-w-7xl">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              작업인증현판 제공
            </h2>
            <p className="text-lg text-teal-600 font-semibold">
              *별도비용부가
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((index) => (
            <AnimatedSection key={index} animation="zoom-in" delay={index * 100}>
              <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/데이터.png"
                    alt={`작업인증 현판 ${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-teal-600 text-white px-4 py-2 rounded-lg inline-block">
                    <span className="font-bold">BEAVERS CARE</span>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm">
                    냉·난방기위생관리 소독방역
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={500}>
          <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              고품격 아크릴 현판으로 신뢰도 UP!
            </h3>
            <p className="text-gray-600 leading-relaxed">
              작업 완료 후 설치되는 인증 현판은 고객님의 시설이<br />
              전문적으로 관리되고 있음을 보여주는 신뢰의 표시입니다.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

