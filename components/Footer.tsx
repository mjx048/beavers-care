import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/logo_icon.png" 
                alt="비버스케어 로고" 
                width={32} 
                height={32}
                className="object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-white">BEAVERS</span>
                <span className="text-base font-bold text-teal-400">CARE</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              전문 에어컨 청소 및<br />
              실내 공기질 관리 전문 업체
            </p>
            <div className="space-y-1 text-sm">
              <p>대표: 홍길동</p>
              <p>사업자등록번호: 123-45-67890</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">연락처</h4>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:02-1234-5678" className="hover:text-white transition-colors">
                  02-1234-5678
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>📱</span>
                <a href="tel:010-1234-5678" className="hover:text-white transition-colors">
                  010-1234-5678
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@beaverscare.com" className="hover:text-white transition-colors">
                  info@beaverscare.com
                </a>
              </p>
            </div>
          </div>

          {/* Address & Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">주소 & 운영시간</h4>
            <p className="text-sm mb-4">
              서울특별시 강남구 테헤란로 123<br />
              비버스케어 빌딩 5층
            </p>
            <div className="text-sm space-y-1">
              <p>평일: 09:00 - 18:00</p>
              <p>토요일: 09:00 - 15:00</p>
              <p>일요일/공휴일: 휴무</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">바로가기</h4>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block hover:text-white transition-colors">
                회사소개
              </a>
              <a href="#services" className="block hover:text-white transition-colors">
                서비스 안내
              </a>
              <a href="#process" className="block hover:text-white transition-colors">
                작업프로세스
              </a>
              <a href="#contact" className="block hover:text-white transition-colors">
                견적문의
              </a>
              <Link href="/privacy" className="block hover:text-white transition-colors">
                개인정보처리방침
              </Link>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              © 2024 비버스케어. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <span className="text-xl">f</span>
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <span className="text-xl">📷</span>
              </a>
              <a 
                href="https://blog.naver.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <span className="text-xl">N</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

