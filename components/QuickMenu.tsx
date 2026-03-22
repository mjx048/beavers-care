'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function QuickMenu() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isTopHovered, setIsTopHovered] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    {
      icon: '/quickMenu/request-quote-logo.png',
      label: '견적문의',
      href: '/#quote',
      bgColor: '#FFFFFF',
    },
    {
      icon: '/quickMenu/kakao_logo.png',
      label: '카톡상담',
      href: 'https://pf.kakao.com/_PrKhX/chat', 
    },
    {
      icon: '/quickMenu/call_logo.png',
      label: '전화문의',
      href: 'tel:1899-7026', 
    },
    {
      icon: '/quickMenu/naver_blog_logo.png',
      label: '블로그',
      href: 'https://blog.naver.com/beaverscare', 
    },
  ];

  return (
    <div className="fixed right-3 bottom-16 md:right-4 md:bottom-20 z-50 flex flex-col gap-2 md:gap-3">
      {menuItems.map((item, index) => (
        <motion.a
          key={index}
          href={item.href}
          target={item.href.startsWith('http') ? '_blank' : undefined}
          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative group"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: item.bgColor }}
            className="relative w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-white"
          >
            <Image
              src={item.icon}
              alt={item.label}
              fill
              className="object-contain p-2"
            />
          </motion.div>

          {hoveredIndex === index && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-14 md:right-20 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium shadow-lg"
            >
              {item.label}
              <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-800" />
            </motion.div>
          )}
        </motion.a>
      ))}

      {/* 상단 바로가기 */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            onMouseEnter={() => setIsTopHovered(true)}
            onMouseLeave={() => setIsTopHovered(false)}
            className="relative"
            aria-label="상단으로 이동"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-primary flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </motion.div>

            {isTopHovered && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute right-14 md:right-20 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium shadow-lg"
              >
                상단으로
                <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-800" />
              </motion.div>
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
