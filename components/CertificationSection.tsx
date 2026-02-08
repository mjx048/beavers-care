import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

export default function CertificationSection() {
  const certifications = [
    {
      image: "/images/자격증1.png",
      title: "자격증",
    },
    {
      image: "/images/자격증1.png",
      title: "교육이수증",
    },
    {
      image: "/images/자격증1.png",
      title: "소독업 신고증",
    },
    {
      image: "/images/자격증1.png",
      title: "여성기업 확인서",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              전문 인증, 체계적인 교육과 허가를 받은 전문 업체
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              국가 공인 자격증과 각종 인증을 보유한 전문가들이<br />
              체계적인 시스템으로 안전하게 작업합니다
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="zoom-in" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="relative h-[300px] mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900">
                  {cert.title}
                </h3>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

