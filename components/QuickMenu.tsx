'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function QuickMenu() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuItems = [
    {
      icon: '/quickMenu/menu_email.png',
      label: '견적문의',
      href: '#contact', // 문의 섹션 주소로 변경 필요
      bgColor: '#FFFFFF',
    },
    {
      icon: '/quickMenu/menu_kakaotalk.png',
      label: '카톡상담',
      href: 'https://pf.kakao.com/_PrKhX', // 실제 카카오톡 채널 주소로 변경 필요
      bgColor: '#ffe600',
    },
    {
      icon: '/quickMenu/menu_call.png',
      label: '전화',
      href: 'tel:1899-7026', // 실제 전화번호로 변경 필요
      bgColor: '#39b54a',
    },
    {
      icon: '/quickMenu/menu_naverblog.png',
      label: '블로그',
      href: 'https://blog.naver.com/beaverscare', // 실제 블로그 주소로 변경 필요
      bgColor: '#30b14a',
    },
  ];

  return (
    <div className="fixed right-4 bottom-20 z-50 flex flex-col gap-3">
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
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: item.bgColor }}
            className="relative w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-white"
          >
            <Image
              src={item.icon}
              alt={item.label}
              fill
              className="object-contain p-2"
            />
          </motion.div>

          {/* Label Tooltip */}
          {hoveredIndex === index && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium shadow-lg"
            >
              {item.label}
              <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-800" />
            </motion.div>
          )}
        </motion.a>
      ))}
    </div>
  );
}
