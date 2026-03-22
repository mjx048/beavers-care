# Beavers Care

Beavers Care 프로젝트

## 기술 스택

- **Next.js 16.1.6** - React 프레임워크
- **React 19** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 스타일링
- **Framer Motion** - 애니메이션
- **Swiper** - 슬라이드 컴포넌트

## 주요 기능

- ✅ 반응형 디자인 (모바일/태블릿/데스크톱)
- ✅ 고정 헤더 네비게이션 (드롭다운 메뉴 포함)
- ✅ 스크롤 애니메이션 효과
- ✅ 슬라이드 컴포넌트 (Swiper)
- ✅ 간편 견적 폼 → Gmail API 발송
- ✅ 소독 증명서 발급 신청 폼 → Gmail API 발송
- ✅ 우측 고정 퀵메뉴 (견적·카톡·전화·블로그·상단이동)

## 구현된 페이지 및 섹션

### 메인 페이지 (`/`)
1. **Header** - 고정 네비게이션 바 (드롭다운, 모바일 햄버거 메뉴)
2. **HeroSection** - 메인 배너 슬라이드
3. **HistorySection** - 회사 연혁 및 전문가 소개
4. **ClientSection** - 고객사 로고
5. **SolutionSection** - 솔루션 소개 카드
6. **BeliefSection** - 고객 신뢰·리뷰 슬라이드
7. **ThreePointSection** - 비버스케어 선택 이유 3가지
8. **CTASection** - 간편 견적 신청 폼 (Gmail 발송)
9. **Footer** - 회사 정보

### 소개 페이지 (`/introduce`)
- **HistorySection** - 연혁
- **CEOMessageSection** - 대표 인삿말
- **BrandStorySection** - 브랜드 스토리
- **CertificatesSection** - 인증서 슬라이드

### 솔루션 페이지
- `/solution/airconCleaning` — 에어컨 전문세척
  - WorkHistorySection · BeforeAfterSection · ProcessSection · ThreePointSection
- `/solution/disinfection` — 소독 방역
  - WorkHistorySection · ProcessSection · ThreePointSection
- `/solution/quarantinePackage` — 에어컨 방역패키지
  - PackageSection

### 증명서 발급 페이지 (`/certificate`)
- **CertificateRequestSection** - 소독 증명서 발급 신청 폼 (Gmail 발송)

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인

### 빌드

```bash
npm run build
npm start
```

## 프로젝트 구조

```
beavers-care/
├── app/
│   ├── api/
│   │   ├── certificate-request/
│   │   │   └── route.ts          # 증명서 발급 신청 메일 발송
│   │   └── quote-request/
│   │       └── route.ts          # 간편 견적 신청 메일 발송
│   ├── certificate/
│   │   └── page.tsx              # 증명서 발급 페이지
│   ├── introduce/
│   │   └── page.tsx              # 회사 소개 페이지
│   ├── solution/
│   │   ├── airconCleaning/
│   │   │   └── page.tsx          # 에어컨 전문세척 페이지
│   │   ├── disinfection/
│   │   │   └── page.tsx          # 소독 방역 페이지
│   │   └── quarantinePackage/
│   │       └── page.tsx          # 에어컨 방역패키지 페이지
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                  # 메인 페이지
├── components/
│   ├── airconCleaning/
│   │   ├── BeforeAfterSection.tsx
│   │   ├── ProcessSection.tsx
│   │   └── WorkHistorySection.tsx
│   ├── certificate/
│   │   └── CertificateRequestSection.tsx
│   ├── disinfection/
│   │   ├── ProcessSection.tsx
│   │   └── WorkHistorySection.tsx
│   ├── quarantinePackage/
│   │   └── PackageSection.tsx
│   ├── BeliefSection.tsx
│   ├── BrandStorySection.tsx
│   ├── CEOMessageSection.tsx
│   ├── CertificatesSection.tsx
│   ├── ClientSection.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── HistorySection.tsx
│   ├── QuickMenu.tsx
│   ├── SolutionSection.tsx
│   └── ThreePointSection.tsx
├── public/
│   ├── 3point/
│   ├── belief/
│   ├── certificate/
│   ├── client/
│   ├── document/
│   ├── introduce/
│   ├── mainBanner/
│   ├── quickMenu/
│   └── solution/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```


