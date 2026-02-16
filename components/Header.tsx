'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo_icon_company.png" 
              alt="Beavers Care" 
              width={180} 
              height={48}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/introduce" className="text-gray-700 hover:text-primary transition">
              소개
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary transition">
                솔루션소개
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/solution/aircon" className="block px-4 py-3 hover:bg-gray-100">
                  에어컨전문세척
                </Link>
                <Link href="/solution/disinfection" className="block px-4 py-3 hover:bg-gray-100">
                  소독 방역
                </Link>
                <Link href="/solution/quarantinePackage" className="block px-4 py-3 hover:bg-gray-100">
                  에어컨 방역패키지
                </Link>
              </div>
            </div>
            <Link href="https://blog.naver.com/beaverscare" className="text-gray-700 hover:text-primary transition" target="_blank" rel="noopener noreferrer">
              포트폴리오
            </Link>
            <Link href="/certificate" className="text-gray-700 hover:text-primary transition">
              증명서발급
            </Link>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition">
            무료진단 문의하기
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link href="/introduce" className="block py-2 text-gray-700 hover:text-primary">
              소개
            </Link>
            <div className="py-2">
              <p className="font-semibold text-gray-700">솔루션소개</p>
              <Link href="/solution/aircon" className="block pl-4 py-1 text-gray-600">
                에어컨전문세척
              </Link>
              <Link href="/solution/disinfection" className="block pl-4 py-1 text-gray-600">
                소독 방역
              </Link>
              <Link href="/solution/quarantinePackage" className="block pl-4 py-1 text-gray-600">
                에어컨 방역패키지
              </Link>
            </div>
            <Link href="https://blog.naver.com/beaverscare" className="block py-2 text-gray-700 hover:text-primary" target="_blank" rel="noopener noreferrer">
              포트폴리오
            </Link>
            <Link href="/certificate" className="block py-2 text-gray-700 hover:text-primary">
              증명서발급
            </Link>
            <button className="w-full mt-4 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition">
              무료진단 문의하기
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

