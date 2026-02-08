import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

export default function DisinfectionSection() {
  const features = [
    "실내 공간 전체 소독",
    "바이러스·세균 제거",
    "친환경 약품 사용",
    "방역 완료 증명서 발급",
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-teal-50 to-gray-50">
      <div className="container mx-auto max-w-7xl">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              소독방역서비스
            </h2>
            <p className="text-lg text-gray-600">
              전문 장비와 친환경 약품을 사용한 실내 공간 살균 및<br />
              방역으로 안전한 환경을 만듭니다
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Certificate and Features */}
          <AnimatedSection animation="fade-right" delay={200}>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
                  방역인증서 (사진)
                </h3>
                <div className="relative h-[350px] rounded-lg overflow-hidden border-4 border-gray-200">
                  <Image
                    src="/images/데이터.png"
                    alt="방역 인증서"
                    fill
                    className="object-contain bg-gray-50"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Images */}
          <AnimatedSection animation="fade-left" delay={400}>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/방역2.png"
                    alt="방역 작업 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/방역3.png"
                    alt="방역 작업 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/방역4.png"
                  alt="방역 작업 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Features List */}
        <AnimatedSection animation="zoom-in" delay={600}>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-teal-600 text-white p-6 rounded-xl text-center"
                >
                  <div className="text-3xl mb-2">✓</div>
                  <div className="font-bold text-lg">{feature}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

