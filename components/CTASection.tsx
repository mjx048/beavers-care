'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const solutions = [
  '에어컨 전문세척',
  '소독 방역',
  '에어컨 방역패키지',
];

const airconditionerModels = [
  '1way 시스템에어컨',
  '4way 시스템에어컨',
  '360 시스템에어컨',
  '창문형에어컨',
  '2in1 에어컨',
  '스탠드에어컨',
  '벽걸이에어컨',
  '상업용 냉난방기',
];

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [form, setForm] = useState({
    name: '',
    phone1: '010',
    phone2: '',
    phone3: '',
    address: '',
    solutions: [] as string[],
    models: [] as string[],
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSolutionToggle = (solution: string) => {
    setForm(prev => ({
      ...prev,
      solutions: prev.solutions.includes(solution)
        ? prev.solutions.filter(s => s !== solution)
        : [...prev.solutions, solution],
    }));
  };

  const handleModelToggle = (model: string) => {
    setForm(prev => ({
      ...prev,
      models: prev.models.includes(model)
        ? prev.models.filter(m => m !== model)
        : [...prev.models, model],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitResult(null);

    const phone = `${form.phone1}-${form.phone2}-${form.phone3}`;

    if (!form.name || !form.phone2 || !form.phone3 || !form.address || form.solutions.length === 0 || form.models.length === 0) {
      setSubmitResult({ type: 'error', message: '모든 항목을 입력하고 솔루션과 에어컨 모델을 하나 이상 선택해주세요.' });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/quote-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone,
          address: form.address,
          solutions: form.solutions,
          models: form.models,
          notes: form.notes.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitResult({ type: 'success', message: '견적 신청이 완료되었습니다! 빠른 시일 내에 연락드리겠습니다.' });
        setForm({ name: '', phone1: '010', phone2: '', phone3: '', address: '', solutions: [], models: [], notes: '' });
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
    <section id="quote" ref={ref} className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* 헤더 */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">간편 견적</h2>
            <p className="text-lg md:text-xl text-white/90">
              간편 견적 문의를 남겨주시면<br />
              빠른 시일 내에 연락드리겠습니다.
            </p>
          </div>

          {/* 폼 카드 */}
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl">
            <form className="space-y-5" onSubmit={handleSubmit}>

              {/* 성명 */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">성명</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-800"
                  placeholder="성명을 입력해주세요."
                />
              </div>

              {/* 연락처 */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">연락처</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="phone1"
                    value={form.phone1}
                    onChange={handleChange}
                    maxLength={3}
                    className="w-1/3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-800"
                    placeholder="010"
                  />
                  <input
                    type="text"
                    name="phone2"
                    value={form.phone2}
                    onChange={handleChange}
                    maxLength={4}
                    className="w-1/3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-800"
                    placeholder="0000"
                  />
                  <input
                    type="text"
                    name="phone3"
                    value={form.phone3}
                    onChange={handleChange}
                    maxLength={4}
                    className="w-1/3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-800"
                    placeholder="0000"
                  />
                </div>
              </div>

              {/* 주소 */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">주소</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-800"
                  placeholder="견적 받으실 주소지를 입력해주세요."
                />
              </div>

              {/* 필요 솔루션 */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">필요 솔루션</label>
                <p className="text-sm text-gray-500 mb-3">복수 선택 가능합니다</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  {solutions.map((solution) => {
                    const isSelected = form.solutions.includes(solution);
                    return (
                      <button
                        key={solution}
                        type="button"
                        onClick={() => handleSolutionToggle(solution)}
                        className={`flex-1 flex items-center gap-2 px-3 py-3 rounded-lg border-2 text-left transition-all ${
                          isSelected
                            ? 'border-primary bg-primary/10 text-primary font-semibold'
                            : 'border-gray-200 text-gray-600 hover:border-primary/50'
                        }`}
                      >
                        <span className={`w-4 h-4 rounded flex-shrink-0 border-2 flex items-center justify-center ${
                          isSelected ? 'border-primary bg-primary' : 'border-gray-300'
                        }`}>
                          {isSelected && (
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </span>
                        <span className="text-sm">{solution}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 에어컨 모델 */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">에어컨 모델</label>
                <p className="text-sm text-gray-500 mb-3">복수 선택 가능합니다</p>
                <div className="grid grid-cols-2 gap-2">
                  {airconditionerModels.map((model) => {
                    const isSelected = form.models.includes(model);
                    return (
                      <button
                        key={model}
                        type="button"
                        onClick={() => handleModelToggle(model)}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border-2 text-left transition-all ${
                          isSelected
                            ? 'border-primary bg-primary/10 text-primary font-semibold'
                            : 'border-gray-200 text-gray-600 hover:border-primary/50'
                        }`}
                      >
                        <span className={`w-4 h-4 rounded flex-shrink-0 border-2 flex items-center justify-center ${
                          isSelected ? 'border-primary bg-primary' : 'border-gray-300'
                        }`}>
                          {isSelected && (
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </span>
                        <span className="text-sm">{model}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 추가 문의사항 */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1">추가 문의사항</label>
                <p className="text-sm text-gray-500 mb-2">희망 일정, 대수, 요청 사항 등 자유롭게 적어주세요. (선택)</p>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={5}
                  maxLength={2000}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-800 resize-y min-h-[120px] placeholder:text-gray-400"
                  placeholder="예) 미팅은 주말 오전이 좋아요. 벽걸이 2대 세척 희망합니다."
                />
                <p className="text-xs text-gray-400 mt-1 text-right">{form.notes.length} / 2000</p>
              </div>

              {/* 사진 안내 */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-amber-800 text-sm leading-relaxed">
                  📷 에어컨 주변부 작업환경을 확인할 수 있는 사진은<br />
                  <span className="font-semibold">[카톡 오픈채팅]</span> 혹은{' '}
                  <span className="font-semibold">010-4768-7026</span> 문자로 보내주세요!
                </p>
              </div>

              {/* 결과 메시지 */}
              {submitResult && (
                <div className={`p-4 rounded-md text-sm font-medium ${
                  submitResult.type === 'success'
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {submitResult.message}
                </div>
              )}

              {/* 제출 버튼 */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 rounded-md hover:bg-primary/90 transition font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '전송 중...' : '견적 신청하기'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
