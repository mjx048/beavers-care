import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Beavers Care</h3>
            <p className="text-sm mb-2">경기도 시흥시 시청로 25 시티프론트561, 429호</p>
            <p className="text-sm mb-2">대표 : 송대복 김송이</p>
            <p className="text-sm mb-2">사업자등록번호 : -</p>
            <p className="text-sm mb-2">통신판매등록번호 : -</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">문의</h4>
            <p className="text-sm mb-2">TEL : -</p>
            <p className="text-sm mb-2">FAX : -</p>
            <p className="text-sm mb-2">E-mail : -</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="#" className="text-sm hover:text-white transition">
                이용약관
              </Link>
              <Link href="#" className="text-sm hover:text-white transition">
                개인정보처리방침
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              -
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

