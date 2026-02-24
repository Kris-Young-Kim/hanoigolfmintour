# 하노이 골프투어 2026 | 민투어

베트남 하노이 골프투어 랜딩페이지 프로젝트

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm
- **Deployment**: Vercel

## 시작하기

```bash
pnpm install
pnpm dev
```

## 빌드 및 검증

```bash
pnpm type-check
pnpm build
pnpm start
```

## 주요 섹션

- **Hero**: 투어 소개 및 가격 안내
- **Packages**: 6종 골프 패키지 비교 카드
- **Itinerary**: 3박5일 일정표
- **Pricing**: 요금 및 추가요금 안내
- **FAQ**: 자주 묻는 질문

## 데이터 수정

- `lib/constants.ts` — 패키지·요금·FAQ 데이터
- `lib/data.ts` — 5일 일정 데이터
