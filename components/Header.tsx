'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-3 h-14 md:h-28">
          {/* Logo + Nav */}
          <div className="flex items-center min-w-0">
            <Link href="/" className="flex items-center mr-4 md:mr-10 shrink-0">
              <Image
                src="/logo_icon_company.png"
                alt="Beavers Care"
                width={220}
                height={56}
                className="h-10 md:h-16 w-auto"
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-5 lg:space-x-8">
              <Link href="/introduce" className="text-base lg:text-lg font-medium text-gray-700 hover:text-primary transition whitespace-nowrap">
                소개
              </Link>
              <div className="relative group">
                <button className="text-base lg:text-lg font-medium text-gray-700 hover:text-primary transition whitespace-nowrap">
                  솔루션소개
                </button>
                <div className="absolute top-full left-0 mt-2 w-52 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link href="/solution/airconCleaning" className="block px-4 py-3 text-base hover:bg-gray-100">
                    에어컨 전문세척
                  </Link>
                  <Link href="/solution/disinfection" className="block px-4 py-3 text-base hover:bg-gray-100">
                    소독 방역
                  </Link>
                  <Link href="/solution/quarantinePackage" className="block px-4 py-3 text-base hover:bg-gray-100">
                    에어컨 방역패키지
                  </Link>
                </div>
              </div>
              <Link href="https://blog.naver.com/beaverscare/224155958593" className="text-base lg:text-lg font-medium text-gray-700 hover:text-primary transition whitespace-nowrap" target="_blank" rel="noopener noreferrer">
                포트폴리오
              </Link>
              <Link href="/certificate" className="text-base lg:text-lg font-medium text-gray-700 hover:text-primary transition whitespace-nowrap">
                증명서발급
              </Link>
            </nav>
          </div>

          {/* CTA banners (PC) + mobile menu */}
          <div className="flex items-center shrink-0 ml-auto gap-0.5 sm:gap-1">
            <div className="hidden md:flex items-center gap-0">
              <a
                href="/#quote"
                className="block hover:opacity-90 transition"
                aria-label="간편견적문의"
              >
                <Image
                  src="/request_easy_inquiry_remove_bg_logo.png"
                  alt="간편견적문의"
                  width={320}
                  height={160}
                  className="h-24 xl:h-[7.5rem] w-auto"
                  priority
                />
              </a>
              <a
                href="/#home-inquiry"
                className="block hover:opacity-90 transition -ml-1"
                aria-label="가정집문의"
              >
                <Image
                  src="/request_inquiry_home_remove_bg_logo.png"
                  alt="가정집문의"
                  width={320}
                  height={160}
                  className="h-24 xl:h-[7.5rem] w-auto"
                />
              </a>
            </div>

            <button
              className="md:hidden text-gray-700 p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="메뉴"
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
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link href="/introduce" className="block py-2 text-gray-700 hover:text-primary">
              소개
            </Link>
            <div className="py-2">
              <p className="font-semibold text-gray-700">솔루션소개</p>
              <Link href="/solution/airconCleaning" className="block pl-4 py-1 text-gray-600">
                에어컨 전문세척
              </Link>
              <Link href="/solution/disinfection" className="block pl-4 py-1 text-gray-600">
                소독 방역
              </Link>
              <Link href="/solution/quarantinePackage" className="block pl-4 py-1 text-gray-600">
                에어컨 방역패키지
              </Link>
            </div>
            <Link href="https://blog.naver.com/beaverscare/224155958593" className="block py-2 text-gray-700 hover:text-primary" target="_blank" rel="noopener noreferrer">
              포트폴리오
            </Link>
            <Link href="/certificate" className="block py-2 text-gray-700 hover:text-primary">
              증명서발급
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
