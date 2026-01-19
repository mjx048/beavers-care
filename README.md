# 비버스케어 - 에어컨 청소 전문 업체 홈페이지

React 19 + Next.js 15.4.8을 사용한 SSR 방식의 비버스케어 홈페이지입니다.

## 🏢 프로젝트 소개

비버스케어는 병원, 관공서, 학교, 기업 등을 대상으로 한 전문 에어컨 청소 및 소독·방역 서비스 업체 웹사이트입니다.

## 🛠️ 기술 스택

- **React**: 19.1.0
- **Next.js**: 15.4.8 (App Router with SSR)
- **TypeScript**: 5.x
- **Tailwind CSS**: 3.4.17
- **Node.js**: 20.x 이상 권장

## ✨ 주요 기능

### 구현된 페이지 섹션들

1. **히어로 섹션**
   - 메인 비주얼
   - 빠른 문의 CTA (견적문의, 카카오상담, 전화연결)
   - 신뢰도 배지 (작업 건수, 만족도 등)

2. **회사소개**
   - 비버스케어 소개
   - 주요 통계 및 실적
   - 전문 인증, 보증, 리포트 시스템

3. **서비스 안내**
   - 시스템 에어컨/냉난방기 세척
   - 소독·방역 서비스
   - 정기 관리 서비스

4. **작업 프로세스**
   - 4단계 프로세스 (사전점검 → 작업 → 검수 → 리포트)
   - 단계별 상세 설명

5. **실적/후기**
   - 병원, 관공서, 학교, 기업 후기
   - 고객 만족도 통계
   - 카테고리별 후기 분류

6. **FAQ**
   - 자주 묻는 질문 5개
   - 아코디언 형태

7. **견적 문의**
   - 온라인 견적 문의 폼
   - 전화, 카카오톡, 이메일 연락처
   - 운영시간 안내

8. **Footer**
   - 회사 정보
   - 연락처 및 주소
   - SNS 링크

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 서버 실행

```bash
npm start
```

## 📁 프로젝트 구조

```
beaverscare-v2/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (Header 포함)
│   ├── page.tsx            # 메인 페이지
│   └── globals.css         # 글로벌 스타일
├── components/
│   ├── Header.tsx          # 네비게이션 (스크롤 네비게이션)
│   ├── Footer.tsx          # 푸터
│   ├── HeroSection.tsx     # 히어로 섹션
│   ├── AboutSection.tsx    # 회사소개
│   ├── ServicesSection.tsx # 서비스 안내
│   ├── ProcessSection.tsx  # 작업 프로세스
│   ├── TestimonialsSection.tsx  # 실적/후기
│   ├── FAQSection.tsx      # FAQ
│   └── ContactSection.tsx  # 견적 문의 폼
├── public/                 # 정적 파일
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.ts
```

## 🎨 디자인 특징

### 색상 팔레트
- **Primary**: Blue (에어컨 청소 서비스의 청량감 표현)
- **Secondary**: Cyan, Green
- **Accent**: Yellow (카카오톡)

### UI/UX
- 반응형 디자인 (모바일/태블릿/데스크톱)
- 부드러운 스크롤 네비게이션
- 호버 애니메이션
- 직관적인 CTA 배치

## 📱 주요 CTA 버튼

메인 페이지 상단에서 언제든지 접근 가능:
1. **📋 빠른견적문의** - 견적 문의 섹션으로 스크롤
2. **💬 카카오상담** - 카카오톡 채널 연결
3. **📞 전화연결** - 직접 전화 연결

## 🔧 커스터마이징

### 연락처 정보 변경

`components/Header.tsx`, `components/ContactSection.tsx`, `components/Footer.tsx` 파일에서 다음 정보를 수정하세요:
- 전화번호: `02-1234-5678`, `010-1234-5678`
- 이메일: `info@beaverscare.com`
- 주소: 서울특별시 강남구 테헤란로 123
- 카카오톡 채널: URL 업데이트 필요

### 회사 정보 변경

`components/Footer.tsx`에서:
- 대표자명
- 사업자등록번호
- 운영시간

## 🌐 SEO 최적화

- 메타 태그 설정 완료 (`app/layout.tsx`)
- Semantic HTML 사용
- 이미지 alt 태그 (추가 필요)
- 모바일 친화적 디자인

## 📝 추가 개선 사항

향후 추가 가능한 기능:
- [ ] 실제 이미지 에셋 추가 (작업 전후 사진 등)
- [ ] 서비스별 상세 페이지
- [ ] 블로그/자료실 섹션
- [ ] 실제 백엔드 API 연동 (문의 폼)
- [ ] 관리자 페이지
- [ ] 예약 시스템
- [ ] Google Analytics 연동
- [ ] 챗봇 연동

## 🔍 성능 최적화

- Next.js 15 App Router의 자동 코드 스플리팅
- Server-Side Rendering (SSR)
- Tailwind CSS 3 최적화
- 이미지 최적화 (next/image 사용 권장)

## 📄 라이선스

본 프로젝트는 비버스케어 전용으로 제작되었습니다.

## 👨‍💻 개발 정보

- 개발: AI Assisted Development
- 디자인: Based on Onetenth Template
- 날짜: 2026.01

---

**비버스케어** - 깨끗하고 쾌적한 실내 공기, 전문가의 차별화된 관리 솔루션 ❄️
