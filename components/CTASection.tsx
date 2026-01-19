import AnimatedSection from './AnimatedSection';

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-teal-900 to-teal-800 text-white">
      <div className="container mx-auto text-center">
        <AnimatedSection animation="fade-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            깨끗한 공기, 건강한 환경
          </h2>
          <p className="text-xl md:text-2xl text-teal-100 mb-8">
            전문성과 신뢰로 함께하는 비버스케어
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <div className="flex flex-col items-center">
              <p className="text-sm text-teal-200 mb-2">병원, 관공서, 학교, 기업 등 다양한 시설의 전문 관리</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="zoom-in" delay={400}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="p-6">
              <p className="text-teal-100">
                체계적인 작업 프로세스와 전문 장비로 안전하게 관리합니다.
              </p>
            </div>
            <div className="p-6">
              <p className="text-teal-100">
                고객님의 건강한 실내 환경을 최우선으로 생각합니다.
              </p>
            </div>
            <div className="p-6">
              <button className="bg-white text-teal-900 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition-all shadow-lg">
                견적 문의하기
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
