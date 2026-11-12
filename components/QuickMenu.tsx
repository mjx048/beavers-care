'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function QuickMenu() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isTopHovered, setIsTopHovered] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const syncDesktop = () => {
      const desktop = mediaQuery.matches;
      setIsDesktop(desktop);
      setIsMobileOpen(!desktop);
    };
    syncDesktop();
    mediaQuery.addEventListener('change', syncDesktop);
    return () => mediaQuery.removeEventListener('change', syncDesktop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showMenu = isDesktop || isMobileOpen;

  const homeInquiryBody = [
    '🌿 비버스케어 가정집 예약 문의 🌿',
    '',
    '안녕하세요! 아래 내용을 남겨주시면',
    '확인하는 대로 빠르게 연락드리겠습니다. 😊',
    '',
    '• 성함 : ',
    '• 서비스 받으실 주소 : ',
    '• 연락처 : ',
    '• 에어컨 종류 및 수량 : (예: 시스템 에어컨 2대, 2in1 등)',
    '* 기타 문의사항이 있으시면 함께 남겨주세요.',
    '',
    '📞 고객센터 : 1899-7026',
  ].join('\n');

  const smsInquiryHref = `sms:01047687026?body=${encodeURIComponent(homeInquiryBody)}`;

  const menuItems = [
    {
      icon: '/quickMenu/request_quote_logo.png',
      label: '견적문의',
      href: '/#quote',
      bgColor: '#FFFFFF',
      iconClassName: 'object-contain p-0.5 md:p-1 scale-110',
    },
    {
      icon: '/quickMenu/request_home_logo.png',
      label: '가정집문의',
      href: '/#home-inquiry',
      bgColor: '#FFFFFF',
    },
    {
      icon: '/quickMenu/sms_logo.png',
      label: '문자문의',
      href: smsInquiryHref,
      mobileOnly: true,
    },
    {
      icon: '/quickMenu/call_logo.png',
      label: '전화문의',
      href: 'tel:1899-7026',
      mobileOnly: true,
    },
    {
      icon: '/quickMenu/kakao_logo.png',
      label: '카톡상담',
      href: 'https://pf.kakao.com/_PrKhX/chat',
    },
    {
      icon: '/quickMenu/naver_blog_logo.png',
      label: '블로그',
      href: 'https://blog.naver.com/beaverscare',
    },
  ].filter((item) => !item.mobileOnly || !isDesktop);

  return (
    <div className="fixed right-2 bottom-6 md:right-4 md:bottom-8 z-50 flex flex-col items-end">
      {/* 퀵메뉴 — 상단이동 버튼과 레이아웃 분리 */}
      <div className="flex flex-col items-end gap-1.5 md:gap-3">
        <AnimatePresence>
          {showMenu &&
            menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.9 }}
                transition={{ duration: 0.2, delay: isDesktop ? index * 0.05 : index * 0.04 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onTouchStart={() => setHoveredIndex(index)}
                onTouchEnd={() => {
                  window.setTimeout(() => setHoveredIndex(null), 800);
                }}
                className="relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ backgroundColor: item.bgColor }}
                  className="relative w-10 h-10 md:w-16 md:h-16 rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-white"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    fill
                    sizes="(max-width: 767px) 40px, 64px"
                    className={item.iconClassName ?? 'object-contain p-1.5 md:p-2'}
                  />
                </motion.div>

                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="absolute right-12 md:right-20 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-2.5 py-1 md:px-4 md:py-2 rounded-lg whitespace-nowrap text-xs md:text-sm font-medium shadow-lg pointer-events-none"
                  >
                    {item.label}
                    <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-800" />
                  </motion.div>
                )}
              </motion.a>
            ))}
        </AnimatePresence>

        {/* 모바일 퀵메뉴 토글 */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileOpen((prev) => !prev)}
          className="md:hidden relative w-10 h-10 rounded-full shadow-lg bg-primary text-white flex items-center justify-center"
          aria-expanded={isMobileOpen}
          aria-label={isMobileOpen ? '퀵메뉴 숨기기' : '퀵메뉴 보이기'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            {isMobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <circle cx="12" cy="5" r="1.2" fill="currentColor" stroke="none" />
                <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
                <circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none" />
              </>
            )}
          </svg>
        </motion.button>
      </div>

      {/* 상단 바로가기 — 퀵메뉴 아래 슬롯에만 출입, 메뉴 위치 고정 */}
      <div className="relative mt-1.5 md:mt-3 h-10 w-10 md:h-16 md:w-16 shrink-0">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25 }}
              onClick={scrollToTop}
              onMouseEnter={() => setIsTopHovered(true)}
              onMouseLeave={() => setIsTopHovered(false)}
              className="absolute inset-0"
              aria-label="상단으로 이동"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full h-full rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-primary flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 md:w-6 md:h-6"
                >
                  <path d="M18 15l-6-6-6 6" />
                </svg>
              </motion.div>

              {isTopHovered && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="hidden md:block absolute right-20 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium shadow-lg"
                >
                  상단으로
                  <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-800" />
                </motion.div>
              )}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
