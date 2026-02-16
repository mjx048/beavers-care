# Beavers Care 홈페이지

Next.js 최신 버전으로 구현한 Beavers Care 홈페이지입니다.

## 기술 스택

- **Next.js 16.1.6** - React 프레임워크
- **React 19** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 스타일링
- **Framer Motion** - 애니메이션
- **Swiper** - 슬라이드 컴포넌트

## 주요 기능

✅ 반응형 디자인 (모바일/태블릿/데스크톱)
✅ 고정 헤더 네비게이션 (드롭다운 메뉴 포함)
✅ 스크롤 애니메이션 효과
✅ 포트폴리오 필터링 기능
✅ 슬라이드 컴포넌트 (모바일)
✅ 부드러운 페이지 전환 효과

## 구현된 섹션

1. **Header** - 고정 네비게이션 바 (드롭다운 메뉴)
2. **Hero Section** - 메인 비주얼 섹션
3. **Corporation Section** - 회사 소개
4. **Members Section** - 멤버십 정보
5. **Client Section** - 고객 실적
6. **Solution Section** - 솔루션 소개 (4가지)
7. **Difference Section** - 차별점 (슬라이드)
8. **Portfolio Section** - 포트폴리오 (필터링 기능)
9. **CTA Section** - 행동 유도 섹션
10. **Contact Section** - 문의 섹션
11. **Footer** - 하단 정보

## 시작하기

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
npm start
```

## 프로젝트 구조

```
beaverscare/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── CorporationSection.tsx
│   ├── MembersSection.tsx
│   ├── ClientSection.tsx
│   ├── SolutionSection.tsx
│   ├── DifferenceSection.tsx
│   ├── PortfolioSection.tsx
│   ├── CTASection.tsx
│   └── ContactSection.tsx
├── public/
│   └── no_image.jpg
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```


