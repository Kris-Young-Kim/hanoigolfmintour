'use client'

import { useState } from 'react'
import { TOUR_INFO } from '@/lib/constants'
import { GolfButton } from './GolfButton'
import { HoleInOne } from './HoleInOne'

// 골프투어 히어로 이미지 후보 (순차 폴백)
const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1611374243147-44a702c2d44c?auto=format&fit=crop&w=1920&q=80',
  'https://loremflickr.com/1920/1080/golfer?lock=777',
]

export function Hero() {
  const [imageIndex, setImageIndex] = useState(0)

  const handleImageError = () => setImageIndex((prev) => prev + 1)
  const showFallback = imageIndex >= HERO_IMAGES.length

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden golf-pattern">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        {!showFallback ? (
          <img
            key={imageIndex}
            src={HERO_IMAGES[imageIndex]}
            alt="하노이 골프투어"
            className="absolute inset-0 w-full h-full object-cover"
            onError={handleImageError}
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-golf-green via-fairway-green to-gray-900">
            <div className="absolute inset-0 opacity-20 golf-pattern" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white/40">
                <HoleInOne width={200} height={145} className="mx-auto mb-4 opacity-60" />
                <p className="text-xl font-semibold">하노이 골프투어 2026</p>
                <p className="text-sm mt-2">전문 가이드와 함께하는 특별한 경험</p>
              </div>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
      </div>

      {/* 장식 요소 */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-golf-gold/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-vietnam-red/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-fairway-green/20 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-20 container mx-auto px-4 py-20 text-center animate-fade-in-up">
        <div className="mb-6">
          <HoleInOne width={200} height={145} className="mx-auto" />
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-2xl leading-tight">
          <span className="block bg-gradient-to-r from-golf-gold via-white to-golf-gold bg-clip-text text-transparent animate-fade-in-up">
            하노이 골프투어 2026
          </span>
          <span className="block text-white animate-fade-in-up text-2xl md:text-3xl lg:text-4xl mt-2 font-bold" style={{ animationDelay: '0.2s' }}>
            Vietnam · Hanoi Golf Tour
          </span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 drop-shadow-lg font-bold animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {TOUR_INFO.description}
        </p>
        <p className="text-lg md:text-xl text-golf-gold mb-8 drop-shadow-md font-semibold animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {TOUR_INFO.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <GolfButton
            onClick={() => window.open('https://form.naver.com/response/F86hdXHkmqFym7xNkOGMZw', '_blank')}
            size="lg"
            variant="primary"
          >
            <span>⛳</span>
            투어 신청하기
          </GolfButton>
          <GolfButton
            onClick={() => scrollToSection('itinerary')}
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white/20"
          >
            <span>📅</span>
            일정 보기
          </GolfButton>
        </div>
        <div className="mt-12 text-white/90 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="inline-block bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-golf-gold/30">
            <p className="text-lg md:text-xl mb-2 font-semibold text-gray-100">
              <span className="text-golf-gold">📅</span> 투어 기간: {TOUR_INFO.dateDisplay} ({TOUR_INFO.duration})
            </p>
            <p className="text-2xl md:text-3xl font-black text-golf-gold">
              ₩{TOUR_INFO.priceFrom.toLocaleString()}~ (4인 기준)
            </p>
          </div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <HoleInOne width={56} height={40} />
          <svg className="w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
