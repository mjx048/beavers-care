export default function GreetingPage() {
  return (
    <main className="pt-24 pb-20 px-4 min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            대표 인사말
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              안녕하십니까, 비버스케어 대표 홍길동입니다.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              저희 비버스케어를 방문해 주신 여러분께 진심으로 감사드립니다.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              비버스케어는 깨끗하고 쾌적한 실내 환경을 만들기 위해 2015년 설립된 이후, 
              병원, 관공서, 학교, 기업 등 다양한 시설의 에어컨 청소 및 실내 공기질 관리를 
              전문으로 해왔습니다.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              우리는 단순히 에어컨을 청소하는 것이 아니라, 고객님의 건강한 생활을 위한 
              파트너가 되고자 합니다. 전문 교육을 받은 인력과 최신 장비를 통해 최상의 
              서비스를 제공하며, 작업 후에도 체계적인 A/S로 고객님의 만족을 책임집니다.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              앞으로도 비버스케어는 고객님의 신뢰를 바탕으로 끊임없이 발전하며, 
              더욱 전문적이고 체계적인 서비스로 보답하겠습니다.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              감사합니다.
            </p>
            
            <div className="border-t pt-8 mt-8">
              <p className="text-right text-lg font-semibold text-gray-900">
                비버스케어 대표이사 <span className="text-teal-600">홍길동</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

