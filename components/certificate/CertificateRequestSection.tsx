'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function CertificateRequestSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const [form, setForm] = useState({
    certificateType: '소독증명서',
    name: '',
    phone1: '010',
    phone2: '',
    phone3: '',
    emailId: '',
    emailDomain: '',
    customDomain: '',
    title: '',
    content: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitResult(null);

    if (!agreedToPrivacy) {
      setSubmitResult({ type: 'error', message: '개인정보 취급방침에 동의해주세요.' });
      return;
    }

    const phone = `${form.phone1}-${form.phone2}-${form.phone3}`;
    const emailDomain = form.emailDomain === '' ? form.customDomain : form.emailDomain;

    if (!form.name || !form.phone2 || !form.phone3 || !form.emailId || !emailDomain || !form.title || !form.content) {
      setSubmitResult({ type: 'error', message: '모든 항목을 입력해주세요.' });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/certificate-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          certificateType: form.certificateType,
          name: form.name,
          phone,
          emailId: form.emailId,
          emailDomain,
          title: form.title,
          content: form.content,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitResult({ type: 'success', message: '신청이 완료되었습니다. 영업일 기준 1~2일 내로 연락드리겠습니다.' });
        setForm({
          certificateType: '소독증명서',
          name: '',
          phone1: '010',
          phone2: '',
          phone3: '',
          emailId: '',
          emailDomain: '',
          customDomain: '',
          title: '',
          content: '',
        });
        setAgreedToPrivacy(false);
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
    <section ref={ref} className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            beavers care 증명서 발급
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            전화상담 : 1899-7026
          </p>
          <p className="text-gray-600 text-lg">
            문의메일 : beaverscare0204@gmail.com
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            간편하고 쉬운 발급방법
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="font-bold text-gray-800 mb-2">증명서 요청</h4>
              <div className="h-10"></div>
            </div>

            {/* Arrow 1 */}
            <div className="text-primary text-4xl font-bold mb-20">
              &gt;
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="font-bold text-gray-800 mb-2">증명서 발부</h4>
              <p className="text-gray-600 text-sm">*영업일 기준<br />1~2일 소요됩니다.</p>
            </div>

            {/* Arrow 2 */}
            <div className="text-primary text-4xl font-bold mb-20">
              &gt;
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="font-bold text-gray-800 mb-2">증명서 발송</h4>
              <div className="h-10"></div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">증명서 발급신청</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* 증명서 종류 */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">증명서</label>
                  <select
                    name="certificateType"
                    value={form.certificateType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">선택하세요</option>
                    <option value="소독증명서">소독 증명서</option>
                  </select>
                </div>

                {/* 이름 */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">이름</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="이름을 입력하세요"
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
                      className="w-1/3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="010"
                    />
                    <input
                      type="text"
                      name="phone2"
                      value={form.phone2}
                      onChange={handleChange}
                      maxLength={4}
                      className="w-1/3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="0000"
                    />
                    <input
                      type="text"
                      name="phone3"
                      value={form.phone3}
                      onChange={handleChange}
                      maxLength={4}
                      className="w-1/3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="0000"
                    />
                  </div>
                </div>

                {/* 이메일 */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">이메일</label>
                  {/* 첫 번째 줄: 이메일 아이디 @ 도메인 선택 */}
                  <div className="flex gap-2 items-center">
                    <input
                      type="text"
                      name="emailId"
                      value={form.emailId}
                      onChange={handleChange}
                      className="flex-1 min-w-0 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="이메일"
                    />
                    <span className="shrink-0">@</span>
                    <select
                      name="emailDomain"
                      value={form.emailDomain}
                      onChange={handleChange}
                      className="flex-1 min-w-0 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">직접입력</option>
                      <option value="naver.com">naver.com</option>
                      <option value="daum.net">daum.net</option>
                      <option value="gmail.com">gmail.com</option>
                      <option value="hanmail.net">hanmail.net</option>
                    </select>
                  </div>
                  {/* 직접입력 선택 시 두 번째 줄에 도메인 입력창 표시 */}
                  {form.emailDomain === '' && (
                    <input
                      type="text"
                      name="customDomain"
                      value={form.customDomain}
                      onChange={handleChange}
                      className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="도메인을 직접 입력하세요 (예: naver.com)"
                    />
                  )}
                </div>

                {/* 제목 */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">제목</label>
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="제목을 입력하세요"
                  />
                </div>

                {/* 내용 */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">내용</label>
                  <textarea
                    name="content"
                    value={form.content}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="내용을 입력하세요"
                  />
                </div>

                {/* 개인정보 동의 */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy-agree"
                    checked={agreedToPrivacy}
                    onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                    className="mt-1 mr-3 w-5 h-5"
                  />
                  <label htmlFor="privacy-agree" className="text-gray-700">
                    개인정보 취급방침에 동의합니다.
                  </label>
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

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 rounded-md hover:bg-primary/90 transition font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '전송 중...' : '요청하기'}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right: Certificate Sample */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">소독 증명서 샘플</h3>
              <div className="relative w-full h-[800px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/certificate/소독증명발급서_예시.png"
                  alt="소독증명발급서"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
