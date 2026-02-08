export default function LocationPage() {
  return (
    <main className="pt-24 pb-20 px-4 min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              오시는 길
            </h1>
            <p className="text-teal-100 text-lg">
              비버스케어 본사를 찾아오시는 방법을 안내해 드립니다
            </p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Map Placeholder */}
              <div>
                <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📍</div>
                    <p className="text-gray-500">지도 영역</p>
                    <p className="text-sm text-gray-400 mt-2">
                      (카카오맵 또는 구글맵 연동)
                    </p>
                  </div>
                </div>
              </div>

              {/* Address Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-teal-600">📍</span> 주소
                  </h2>
                  <div className="bg-teal-50 rounded-xl p-6">
                    <p className="text-lg font-semibold text-gray-900 mb-2">
                      비버스케어 본사
                    </p>
                    <p className="text-gray-700">
                      서울특별시 강남구 테헤란로 123<br />
                      비버스케어 빌딩 5층
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-teal-600">🚇</span> 대중교통
                  </h2>
                  <div className="space-y-3">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="font-semibold text-blue-900 mb-1">지하철</p>
                      <p className="text-gray-700 text-sm">
                        2호선 강남역 3번 출구에서 도보 5분
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="font-semibold text-green-900 mb-1">버스</p>
                      <p className="text-gray-700 text-sm">
                        간선: 146, 241, 362, 740<br />
                        지선: 3412, 4412
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-teal-600">🚗</span> 주차 안내
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      건물 지하 1~2층 주차장 이용 가능<br />
                      방문 고객 2시간 무료 (주차권 발급)
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-teal-600">📞</span> 연락처
                  </h2>
                  <div className="space-y-2">
                    <a 
                      href="tel:1899-7026"
                      className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold"
                    >
                      전화: 1899-7026
                    </a>
                    <a 
                      href="beaverscare01@gmail.com"
                      className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold"
                    >
                      이메일: beaverscare01@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

