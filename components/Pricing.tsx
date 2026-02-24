'use client';

import { TOUR_INFO, INCLUDED_ITEMS, EXCLUDED_ITEMS, SURCHARGE_INFO } from '@/lib/constants';
import { GolfButton } from './GolfButton';

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 opacity-5 golf-pattern" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="text-5xl animate-bounce-golf inline-block mb-4">💰</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            가격 정보
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 text-lg">
            투어 비용 및 결제 안내 (4인 행사 기준)
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {/* 메인 가격 카드 */}
          <div className="bg-gradient-to-br from-golf-gold via-fairway-green to-golf-green rounded-2xl p-8 mb-8 text-white text-center shadow-2xl border-4 border-golf-gold/50 animate-fade-in-up animate-pulse-glow relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 golf-pattern" />
            <div className="relative z-10">
              <div className="mb-4">
                <span className="text-4xl animate-bounce-golf inline-block">⛳</span>
              </div>
              <p className="text-xl md:text-2xl mb-2 font-bold">패키지 요금 범위</p>
              <p className="text-5xl md:text-6xl font-black mb-4 drop-shadow-lg">
                ${TOUR_INFO.priceFrom} ~ ${TOUR_INFO.priceTo}
              </p>
              <p className="text-lg text-white/90 font-semibold">{TOUR_INFO.duration} | 4인 행사 기준 | 1인 요금</p>
            </div>
          </div>

          {/* 포함/불포함 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                포함 사항
              </h3>
              <ul className="space-y-2">
                {INCLUDED_ITEMS.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <svg className="w-6 h-6 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                불포함 사항
              </h3>
              <ul className="space-y-2">
                {EXCLUDED_ITEMS.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 추가요금 안내 */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 mb-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <span>⚠️</span> 추가요금 안내
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {SURCHARGE_INFO.map((item, index) => (
                <div key={index} className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{item.label}</p>
                  <p className="text-lg font-bold text-vietnam-red">{item.amount}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <GolfButton
              onClick={() => window.open('https://form.naver.com/response/F86hdXHkmqFym7xNkOGMZw', '_blank')}
              size="lg"
              variant="primary"
            >
              <span>⛳</span>
              투어 신청하기
            </GolfButton>
          </div>
        </div>
      </div>
    </section>
  );
}
