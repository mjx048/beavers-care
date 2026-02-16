'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function CEOMessageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/introduce/대표인삿말배경.png"
          alt="배경"
          fill
          className="object-cover"
          priority
        />
        {/* 배경 오버레이 */}
        <div className="absolute inset-0 bg-white/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-2">CEO Message</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              대표 인삿말
            </h2>
          </div>

          <div className="p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center leading-relaxed">
              아이의 숨결을 지키는 마음으로,<br />
              가전 위생의 기준을 세웁니다.
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              안녕하십니까. 비버스케어 공동대표 <span className="font-bold">송대복, 김송이</span> 입니다.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              저희 부부는 10년이 넘는 시간 동안 국내 유수의 글로벌 가전 기업들에서 신제품 기술 세미나와 유통망 전문 교육을 담당해 왔습니다. 가전제품의 설계 원리부터 내부 구조까지 누구보다 깊이 이해하고 있는 전문가로서, 저희는 단순한 서비스가 아닌 '가전의 본질'에 집중하는 위생 케어를 추구합니다.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              하지만 저희가 '비버스케어'라는 이름으로 직접 현장에 뛰어들게 된 진짜 이유는 화려한 경력이 아닌, 어느 차가운 병실에서의 절실함 때문이었습니다.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              희귀 난치병을 안고 태어난 저희 아이와 함께 대학병원에서 수많은 밤을 지새워야 했습니다. 병실의 탁한 공기 속에서 밤새 기침하는 아이들을 보며 가슴이 미어졌고, 무심코 올려다본 에어컨 속의 심각한 오염 상태를 목격했을 때의 충격은 지금도 잊혀지지 않습니다. 환자와 아이들에게 가장 깨끗해야 할 공간의 공기가 오히려 건강을 위협하고 있다는 사실을 목도하며, 저희 부부는 우리가 가진 가전 지식을 가장 가치 있게 쓸 방법을 찾았습니다.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              비버스케어는 단순한 세척 업체를 넘어선 '생명 케어'를 지향합니다. 저희는 단순히 눈에 보이는 먼지를 닦아내는 것에 그치지 않습니다. 글로벌 제조사가 권장하는 표준 작업 공정에 대한 완벽한 이해를 바탕으로, 내 가족이 머무는 공간이라는 책임감을 더해 가장 안전하고 정직한 케어를 약속드립니다. 저희가 직접 발로 뛰며 지역 주민들께 인정받을 수 있었던 이유도, 독보적인 기술력에 더해진 이 '진심'을 고객님들께서 먼저 알아봐 주셨기 때문이라 믿습니다.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              이제 비버스케어는 가정집을 넘어 병원, 조리원, 교육기관 등 공공의 안전이 최우선인 곳으로 그 사명을 확장하려 합니다. 부모의 마음으로, 그리고 가전 전문가의 자부심으로 우리 아이들이 마음껏 숨 쉴 수 있는 쾌적한 세상을 만들어 가겠습니다.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              부지런하고 꼼꼼하게 보금자리를 짓는 비버처럼, 여러분의 건강한 일상을 위해 늘 곁에서 정성을 다하겠습니다.
            </p>

            <p className="text-gray-700 mb-2 leading-relaxed">
              감사합니다.
            </p>

            <p className="text-gray-800 font-bold text-right">
              비버스케어 공동대표 송대복 · 김송이 올림
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
