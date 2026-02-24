import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: '하노이 골프투어 2026 | 민투어',
  description: '베트남 하노이에서 즐기는 프리미엄 골프 여행 - 한국어 전용 가이드와 함께하는 3박5일 골프 성지 순례',
  keywords: ['하노이', '골프투어', '베트남골프', '하노이골프', '골프여행', '민투어', '골프패키지'],
  openGraph: {
    title: '하노이 골프투어 2026 | 민투어',
    description: '베트남 하노이에서 즐기는 프리미엄 골프 여행 - $490~부터 시작하는 3박5일 골프 패키지',
    type: 'website',
    locale: 'ko_KR',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hanoigolf-mintour.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: '하노이 골프투어 2026 | 민투어',
    description: '베트남 하노이에서 즐기는 프리미엄 골프 여행 - $490~부터 시작하는 3박5일 골프 패키지',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

