export default function HistoryPage() {
  const history = [
    { year: '2024', events: ['누적 작업 500건 돌파', '서울시 우수 협력업체 선정'] },
    { year: '2023', events: ['정기 관리 계약 100건 달성', 'ISO 인증 획득'] },
    { year: '2022', events: ['병원 전문 관리팀 신설', '관공서 100곳 이상 작업 완료'] },
    { year: '2021', events: ['본사 확장 이전', '전문 인력 20명 확보'] },
    { year: '2020', events: ['친환경 세제 도입', '고객 만족도 95% 달성'] },
    { year: '2019', events: ['방역 서비스 사업부 신설', '대형 병원 정기 계약 체결'] },
    { year: '2018', events: ['직원 전문 교육 프로그램 시작', '장비 현대화 완료'] },
    { year: '2017', events: ['관공서 사업 확대', '실내 공기질 관리 서비스 시작'] },
    { year: '2016', events: ['첫 번째 병원 계약 체결', '전문 인력 10명 확보'] },
    { year: '2015', events: ['비버스케어 법인 설립', '에어컨 청소 사업 시작'] },
  ];

  return (
    <main className="pt-24 pb-20 px-4 min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 text-center">
            연혁
          </h1>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-teal-200"></div>
            
            <div className="space-y-12">
              {history.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year Badge */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                    {item.year.slice(2)}
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-28 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                  }`}>
                    <div className="bg-teal-50 rounded-xl p-6 shadow-sm">
                      <h3 className="text-2xl font-bold text-teal-600 mb-4">
                        {item.year}
                      </h3>
                      <ul className="space-y-2">
                        {item.events.map((event, eventIndex) => (
                          <li key={eventIndex} className="text-gray-700">
                            • {event}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

