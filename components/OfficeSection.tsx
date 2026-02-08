import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

export default function OfficeSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              방문상담 환경
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              시흥시청 바로앞 시티프론트5<br />
              방문예약하기버튼
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="zoom-in" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/사무실전경.png"
                alt="사무실 전경 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/사무실전경.png"
                alt="사무실 전경 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/사무실전경.png"
                alt="사무실 전경 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={400}>
          <div className="text-center">
            <button className="bg-teal-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-teal-700 transition-all transform hover:scale-105 shadow-xl">
              방문 예약하기
            </button>
            <p className="text-gray-600 mt-4">
              📍 경기도 시흥시 정왕대로 7길 21, 시티프론트5
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

