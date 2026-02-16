'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = [
    'ALL',
    '교육/학교/학원',
    '관공서/재단/단체',
    '병원/의료/건강',
    '기업/회사/제조',
    '여행/호텔/숙박',
    '요식/프랜차이즈/창업',
    '기타',
  ];

  const portfolioData = [
    {
      category: '교육/학교/학원',
      items: ['한동대학교', '여의도고등학교', '쌍문초등학교'],
    },
    {
      category: '관공서/재단/단체',
      items: ['마포구 행정복지센터 전지점', '서울교통공사', '은평여성인력개발센타'],
    },
    {
      category: '병원/의료/건강',
      items: ['마인드웰병원', '서울양병원', '우리마음병원'],
    },
    {
      category: '기업/회사/제조',
      items: ['카카오 사옥', 'YG 엔터테인먼트', '어반스테이 4성 호텔'],
    },
    {
      category: '여행/호텔/숙박',
      items: ['어반스테이 4성 호텔', '카카오 사옥', '한동대학교'],
    },
    {
      category: '요식/프랜차이즈/창업',
      items: ['파리바게트 52개 지점', '툇마루밥상', '장독대 노원점'],
    },
    {
      category: '기타',
      items: ['인창칸타빌 더헤리티지 APT 입주자대표회의', 'SK뷰파크 입주자대표회의'],
    },
  ];

  const getFilteredPortfolio = () => {
    if (activeFilter === 'ALL') {
      return portfolioData.flatMap(cat => 
        cat.items.map(item => ({ category: cat.category, name: item }))
      );
    }
    const filtered = portfolioData.find(cat => cat.category === activeFilter);
    return filtered ? filtered.items.map(item => ({ category: activeFilter, name: item })) : [];
  };

  const filteredItems = getFilteredPortfolio();

  return (
    <section ref={ref} id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold mb-2">Portfolio</p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.category}-${item.name}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full h-48">
                <Image
                  src="/no_image.jpg"
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-primary mb-2">{item.category}</p>
                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}

