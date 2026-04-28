import { NextRequest, NextResponse } from "next/server";

// 허용할 검색엔진 / SNS 봇 목록
const ALLOWED_BOTS =
  /Googlebot|Yeti|bingbot|Twitterbot|facebookexternalhit|Slackbot|Kakaotalk|AhrefsBot|Semrushbot/i;

/**
 * 배포 플랫폼별 국가 코드 헤더를 순서대로 확인
 * - Vercel : x-vercel-ip-country
 * - Netlify: x-country
 * - Cloudflare: cf-ipcountry
 */
function getCountryCode(request: NextRequest): string | null {
  return (
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("x-country") ??
    request.headers.get("cf-ipcountry") ??
    null
  );
}

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") ?? "";

  // 1. 허용된 봇은 무조건 통과
  if (ALLOWED_BOTS.test(userAgent)) {
    return NextResponse.next();
  }

  const country = getCountryCode(request);

  // 2. geo 정보가 없는 경우(로컬 개발 환경 등) 통과
  if (!country) {
    return NextResponse.next();
  }

  // 3. 한국(KR) 이외 접속 차단
  if (country !== "KR") {
    return new NextResponse("서비스 지역이 아닙니다.", {
      status: 403,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * 아래 경로는 미들웨어에서 제외:
     * - _next/static  : 정적 번들
     * - _next/image   : 이미지 최적화
     * - favicon.ico   : 파비콘
     * - public 폴더 이미지 파일
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
