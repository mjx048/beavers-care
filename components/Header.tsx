'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image 
              src="/logo_icon.png" 
              alt="비버스케어 로고" 
              width={40} 
              height={40}
              className="object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold text-gray-900">BEAVERS</span>
              <span className="text-xl font-bold text-teal-600">CARE</span>
            </div>
          </Link>

          {/* Desktop Navigation - Moved to Right */}
          <div className="hidden md:flex items-center gap-8 ml-auto mr-4">
            {/* 회사소개 with Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-teal-600 font-medium transition-colors py-2">
                회사소개
              </button>
              <div className="absolute left-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  <Link 
                    href="/greeting" 
                    className="block px-4 py-2.5 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    <span className="text-sm"></span> 인사말
                  </Link>
                  <Link 
                    href="/history" 
                    className="block px-4 py-2.5 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    <span className="text-sm"></span> 연혁
                  </Link>
                  <Link 
                    href="/location" 
                    className="block px-4 py-2.5 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    <span className="text-sm"></span> 오시는 길
                  </Link>
                </div>
              </div>
            </div>

            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              서비스
            </button>

            <button 
              onClick={() => scrollToSection('process')}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              작업프로세스
            </button>

            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              실적/후기
            </button>

            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              견적문의
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:02-1234-5678" className="text-teal-600 hover:text-teal-700 pointer-events-none font-medium">
              📞 02-1234-5678
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors shadow-md"
            >
              빠른견적문의
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-900 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="space-y-3">
              {/* 회사소개 - Mobile */}
              <div>
                <p className="font-medium text-gray-900 mb-2">회사소개</p>
                <div className="pl-4 space-y-2">
                  <Link 
                    href="/greeting" 
                    className="block text-gray-700 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    인사말
                  </Link>
                  <Link 
                    href="/history" 
                    className="block text-gray-700 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    연혁
                  </Link>
                  <Link 
                    href="/location" 
                    className="block text-gray-700 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    오시는 길
                  </Link>
                </div>
              </div>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left font-medium text-gray-900 py-2"
              >
                서비스
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="block w-full text-left font-medium text-gray-900 py-2"
              >
                작업프로세스
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left font-medium text-gray-900 py-2"
              >
                실적/후기
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left font-medium text-gray-900 py-2"
              >
                견적문의
              </button>
              <a href="tel:02-1234-5678" className="block w-full bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition-colors text-center">
                📞 전화하기
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-colors"
              >
                빠른견적문의
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

