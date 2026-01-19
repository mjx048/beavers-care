import AnimatedSection from './AnimatedSection';

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "병원 내 모든 에어컨을 정기적으로 관리 받고 있습니다. 작업 후 실내 공기질이 눈에 띄게 좋아졌고, 환자분들의 만족도도 높아졌습니다. 작업 리포트도 상세하게 제공해주셔서 신뢰가 갑니다.",
      author: "김**",
      position: "△△병원 원장",
      category: "병원",
    },
    {
      text: "관공서 특성상 많은 사람들이 이용하는 공간이라 위생이 매우 중요합니다. 비버스케어는 체계적인 작업으로 항상 깨끗하게 관리해주시고, 방역 증명서도 빠르게 발급해주셔서 만족스럽습니다.",
      author: "박**",
      position: "○○구청 시설관리팀장",
      category: "관공서",
    },
    {
      text: "학교 전체 에어컨 세척을 맡겼는데, 작업 속도도 빠르고 결과도 훌륭했습니다. 학생들의 건강을 생각해서 친환경 세제를 사용한다는 점이 특히 좋았습니다. 정기 계약으로 계속 이용할 예정입니다.",
      author: "이**",
      position: "□□초등학교 행정실장",
      category: "학교",
    },
    {
      text: "사무실 에어컨에서 냄새가 나서 급하게 연락드렸는데, 바로 출동해주셔서 문제를 해결해주셨습니다. 직원들이 모두 쾌적해졌다고 좋아합니다. 가격 대비 서비스 품질이 우수합니다.",
      author: "정**",
      position: "◇◇기업 총무팀",
      category: "기업",
    },
  ];

  const stats = [
    { number: "500+", label: "누적 작업" },
    { number: "100+", label: "병원·관공서" },
    { number: "98%", label: "만족도" },
    { number: "50+", label: "정기 계약" },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-teal-50 to-white">
      <div className="container mx-auto">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            고객 실적 & 후기
          </h2>
          <p className="text-lg text-gray-600">
            병원, 관공서, 학교, 기업 등 다양한 고객사가<br />
            비버스케어를 선택하고 만족하고 있습니다
          </p>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection animation="zoom-in" delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {testimonial.category}
                </span>
                <div className="flex text-yellow-400">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center border-t pt-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full mr-4 flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Client Logos Section */}
        <AnimatedSection animation="fade-up" delay={600}>
          <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            <span className="font-semibold text-gray-900">100+</span> 병원·관공서·학교·기업이 신뢰하는 파트너
          </p>
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50">
              <div className="text-4xl">🏥</div>
              <div className="text-4xl">🏛️</div>
              <div className="text-4xl">🏫</div>
              <div className="text-4xl">🏢</div>
            </div>
          </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

