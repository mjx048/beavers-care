'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function HomeInquirySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [form, setForm] = useState({
    name: '',
    phone1: '010',
    phone2: '',
    phone3: '',
    address: '',
    airconInfo: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitResult(null);

    const phone = `${form.phone1}-${form.phone2}-${form.phone3}`;

    if (!form.name || !form.phone2 || !form.phone3 || !form.address || !form.airconInfo.trim()) {
      setSubmitResult({ type: 'error', message: '성함, 연락처, 주소, 에어컨 종류 및 수량을 입력해주세요.' });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/home-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone,
          address: form.address,
          airconInfo: form.airconInfo.trim(),
          notes: form.notes.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitResult({ type: 'success', message: '가정집 예약 문의가 완료되었습니다! 빠른 시일 내에 연락드리겠습니다.' });
        setForm({ name: '', phone1: '010', phone2: '', phone3: '', address: '', airconInfo: '', notes: '' });
      } else {
        setSubmitResult({ type: 'error', message: data.error || '오류가 발생했습니다.' });
      }
    } catch {
      setSubmitResult({ type: 'error', message: '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="home-inquiry" ref={ref} className="scroll-mt-20 md:scroll-mt-36 py-12 md:py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto min-w-0"
        >
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-[clamp(1.5rem,5.5vw,2.25rem)] font-bold mb-4 break-keep text-gray-900">가정집 문의</h2>
            <p className="text-[15px] md:text-xl text-gray-700 break-keep">
              가정집 문의 내용을 남겨주시면<br />
              확인하는 대로 빠르게 연락드리겠습니다.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-10 shadow-xl border border-gray-100">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">성함</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 text-gray-800"
                  placeholder="성함을 입력해주세요."
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">주소</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 text-gray-800"
                  placeholder="주소지를 입력해주세요."
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">연락처</label>
                <div className="flex gap-1.5 sm:gap-2">
                  <input
                    type="text"
                    name="phone1"
                    value={form.phone1}
                    onChange={handleChange}
                    maxLength={3}
                    inputMode="numeric"
                    className="w-1/3 min-w-0 px-2 sm:px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 text-gray-800 text-sm sm:text-base"
                    placeholder="010"
                  />
                  <input
                    type="text"
                    name="phone2"
                    value={form.phone2}
                    onChange={handleChange}
                    maxLength={4}
                    inputMode="numeric"
                    className="w-1/3 min-w-0 px-2 sm:px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 text-gray-800 text-sm sm:text-base"
                    placeholder="0000"
                  />
                  <input
                    type="text"
                    name="phone3"
                    value={form.phone3}
                    onChange={handleChange}
                    maxLength={4}
                    inputMode="numeric"
                    className="w-1/3 min-w-0 px-2 sm:px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 text-gray-800 text-sm sm:text-base"
                    placeholder="0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">에어컨 종류 및 수량</label>
                <input
                  type="text"
                  name="airconInfo"
                  value={form.airconInfo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 text-gray-800"
                  placeholder="예: 시스템 에어컨 2대, 2in1 등"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">기타 문의사항</label>
                <p className="text-sm text-gray-500 mb-2">희망 일정, 요청 사항 등 자유롭게 적어주세요. (선택)</p>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={5}
                  maxLength={2000}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 text-gray-800 resize-y min-h-[120px] placeholder:text-gray-400"
                  placeholder="기타 문의사항이 있으시면 함께 남겨주세요."
                />
                <p className="text-xs text-gray-400 mt-1 text-right">{form.notes.length} / 2000</p>
              </div>

              {submitResult && (
                <div
                  className={`p-4 rounded-md text-sm font-medium ${
                    submitResult.type === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {submitResult.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 rounded-md hover:bg-primary/90 transition font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '전송 중...' : '문의 보내기'}
              </button>

            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
