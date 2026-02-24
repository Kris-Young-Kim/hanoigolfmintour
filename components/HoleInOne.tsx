'use client'

interface HoleInOneProps {
  className?: string
  width?: number
  height?: number
}

export function HoleInOne({ className, width = 180, height = 130 }: HoleInOneProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 130"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* 그린 잔디 면 */}
      <ellipse cx="142" cy="118" rx="36" ry="10" fill="rgba(46,125,50,0.3)" />

      {/* 홀컵 그림자 */}
      <ellipse cx="142" cy="121" rx="12" ry="4" fill="rgba(0,0,0,0.4)" />

      {/* 홀컵 */}
      <ellipse cx="142" cy="118" rx="10" ry="3.5" fill="#0d0d0d" />

      {/* 깃대 */}
      <line x1="142" y1="80" x2="142" y2="118" stroke="#BDBDBD" strokeWidth="1.5" strokeLinecap="round" />

      {/* 깃발 (펄럭임) */}
      <polygon points="142,80 160,87 142,94" fill="#DA251D">
        <animate
          attributeName="points"
          values="142,80 160,87 142,94; 142,80 156,86 142,92; 142,80 161,88 142,95; 142,80 156,86 142,92; 142,80 160,87 142,94"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </polygon>

      {/* 궤도 점선 (골드) */}
      <path
        d="M 16,110 Q 80,5 138,112"
        fill="none"
        stroke="rgba(249,168,37,0.35)"
        strokeWidth="1.5"
        strokeDasharray="4 5"
        strokeLinecap="round"
      />

      {/* 골프공 — 포물선 비행 후 홀 진입 */}
      <g>
        <animateMotion
          path="M 16,110 Q 80,5 138,112"
          dur="2.4s"
          repeatCount="indefinite"
          rotate="none"
          calcMode="spline"
          keyTimes="0;1"
          keySplines="0.25 0 0.75 1"
        />
        {/* 홀 진입 시 페이드아웃, 루프 시작 전 순간 복원 */}
        <animate
          attributeName="opacity"
          values="1;1;1;0.6;0;0;1"
          keyTimes="0;0.6;0.83;0.91;0.96;0.99;1"
          dur="2.4s"
          repeatCount="indefinite"
        />
        {/* 공 본체 */}
        <circle r="7.5" fill="white" stroke="rgba(200,200,200,0.7)" strokeWidth="0.5" />
        {/* 딤플 */}
        <circle r="1.4" cx="-2.5" cy="-2" fill="rgba(160,160,160,0.45)" />
        <circle r="1.2" cx="2.5" cy="1.5" fill="rgba(160,160,160,0.45)" />
        <circle r="1" cx="-0.5" cy="3" fill="rgba(160,160,160,0.45)" />
        <circle r="1" cx="3" cy="-2" fill="rgba(160,160,160,0.45)" />
        {/* 하이라이트 */}
        <circle r="2.2" cx="-2.5" cy="-3.5" fill="rgba(255,255,255,0.75)" />
      </g>

      {/* 홀 진입 후 파문 */}
      <ellipse cx="142" cy="118" rx="0" ry="0" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5">
        <animate
          attributeName="rx"
          values="0;14;20"
          dur="2.4s"
          begin="2.05s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.4;1"
          keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
        />
        <animate
          attributeName="ry"
          values="0;5;7"
          dur="2.4s"
          begin="2.05s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.4;1"
          keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
        />
        <animate
          attributeName="opacity"
          values="0.75;0.35;0"
          dur="2.4s"
          begin="2.05s"
          repeatCount="indefinite"
        />
      </ellipse>
    </svg>
  )
}
