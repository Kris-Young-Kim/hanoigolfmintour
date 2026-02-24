'use client';

const HIGHLIGHTS = [
  {
    id: 1,
    title: '3회 골프 라운딩 포함',
    description: (
      <>
        그린피·카트비·캐디피 All-in
        <br />
        최고의 코스에서 즐기는 라운딩
      </>
    ),
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: '한국어 전용 가이드',
    description: (
      <>
        현지 전문 가이드가 동행하는
        <br />
        편안하고 안전한 골프 여행
      </>
    ),
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: '하노이 관광 포함',
    description: (
      <>
        구시가지·호안끼엠 호수 등<br />
        베트남 문화 체험 투어
      </>
    ),
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: '다양한 호텔 선택',
    description: (
      <>
        3성~5성급 호텔 및 풀빌라
        <br />
        6가지 패키지 중 맞춤 선택
      </>
    ),
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export function Highlights() {
  return (
    <section id="highlights" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          투어 특징
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          하노이 골프투어만의 특별한 장점
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HIGHLIGHTS.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="flex justify-center mb-4 text-fairway-green dark:text-golf-gold">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {highlight.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
