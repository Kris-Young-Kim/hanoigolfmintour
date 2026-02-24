# CLAUDE.md — 하노이 골프투어 (hanoigolf-mintour)

## 패키지 매니저
- pnpm 사용. node_modules 없을 시 `pnpm install` 먼저 실행
- Windows에서 EBUSY 오류 시 `pnpm install` 재실행으로 해결

## 빌드/검증 순서
- `pnpm type-check` → `pnpm build` → `pnpm dev`
- 빌드 시 `<img>` 태그 관련 next/image 경고는 무시 (의도적 사용, onError 폴백 패턴)

## 데이터 계층 (콘텐츠 변경 시 여기부터)
- `lib/constants.ts` — TOUR_INFO, GOLF_PACKAGES(6종), FAQ_DATA, INCLUDED/EXCLUDED_ITEMS, SURCHARGE_INFO
- `lib/data.ts` — ITINERARY(5일 일정), ItineraryDay/GolfPackage 타입 정의

## 디자인 토큰 (tailwind.config.ts)
- 골프 색상: `golf-green`, `fairway-green`, `golf-gold`, `sand-beige`, `vietnam-red`, `sky-blue`, `dark-green`
- 애니메이션: `animate-bounce-golf`, `animate-golf-swing`, `animate-pulse-glow`, `animate-fade-in-up`
- CSS 유틸: `golf-pattern` — `app/globals.css`에 정의된 배경 패턴 클래스

## 섹션 ID (스크롤 내비게이션)
- `hero` → `packages` → `itinerary` → `pricing` → `faq`

## 주요 컴포넌트
- `GolfButton` — 버튼 공통 컴포넌트 (variant: primary/secondary/outline/ghost)
- `GolfPackages` — PDF 6종 패키지 카드 그리드 (`section id="packages"`)
- 이미지: 모든 `<img>`에 `onError` 폴백 패턴 적용 (next/image 미사용)
- 이미지 URL: Unsplash Source API (`https://source.unsplash.com/WxH/?keyword`)

## 오케스트레이션 패턴 (대규모 변경 시)
- Phase A 병렬: DataAgent(constants/data) + StyleAgent(tailwind/css)
- Phase B 순차: RenameAgent (파일명·import 경로)
- Phase C 병렬: 각 컴포넌트 에이전트 (Hero/Nav/Content/Pricing)
- Phase D 순차: ConfigAgent (package.json/layout/sitemap)
