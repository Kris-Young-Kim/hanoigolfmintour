// 5일 일정 데이터
export const ITINERARY = [
  {
    day: 1,
    date: 'TBD',
    dateDisplay: '1일차',
    title: '인천 출발 → 하노이 도착',
    titleEn: 'Incheon Departure → Hanoi Arrival',
    location: 'Hanoi',
    locationKo: '하노이',
    activities: [
      '인천 국제공항 집결 및 탑승 수속',
      '하노이 노이바이 국제공항 도착',
      '가이드 미팅 후 호텔 이동',
      '호텔 체크인 및 휴식',
      '석식 후 하노이 야경 산책 (선택)',
    ],
    mealInfo: '기내식',
    image: 'https://loremflickr.com/800/600/hanoi,airport/all?lock=311',
    type: 'travel',
  },
  {
    day: 2,
    date: 'TBD',
    dateDisplay: '2일차',
    title: '1라운드 골프 & 하노이 구시가지',
    titleEn: '1st Golf Round & Hanoi Old Quarter',
    location: 'Hanoi',
    locationKo: '하노이',
    activities: [
      '조식 후 골프장 이동',
      '1라운드 골프 (코스: 패키지별 상이)',
      '샤워 및 휴식 후 시내 이동',
      '하노이 구시가지 (36거리) 관광',
      '호안끼엠 호수 및 응옥선 사원 방문',
      '석식 후 호텔 귀환',
    ],
    mealInfo: '조식 포함',
    image: 'https://loremflickr.com/800/600/hanoi,oldquarter/all?lock=312',
    golfInfo: {
      courseName: '패키지별 상이',
      courseType: '18홀 정규',
      round: 1,
    },
    type: 'golf',
  },
  {
    day: 3,
    date: 'TBD',
    dateDisplay: '3일차',
    title: '2라운드 골프 & 문묘·성조세성당',
    titleEn: '2nd Golf Round & Temple of Literature',
    location: 'Hanoi',
    locationKo: '하노이',
    activities: [
      '조식 후 골프장 이동',
      '2라운드 골프 (코스: 패키지별 상이)',
      '샤워 및 점심 후 관광 출발',
      '문묘 (공자 사당, 하노이 최초 대학) 방문',
      '성조세성당 (하노이 대성당) 야경 감상',
      '석식 후 호텔 귀환',
    ],
    mealInfo: '조식 포함',
    image: 'https://loremflickr.com/800/600/hanoi,temple/all?lock=303',
    golfInfo: {
      courseName: '패키지별 상이',
      courseType: '18홀 정규',
      round: 2,
    },
    type: 'golf',
  },
  {
    day: 4,
    date: 'TBD',
    dateDisplay: '4일차',
    title: '3라운드 골프 & 쇼핑',
    titleEn: '3rd Golf Round & Shopping',
    location: 'Hanoi',
    locationKo: '하노이',
    activities: [
      '조식 후 골프장 이동',
      '3라운드 골프 (코스: 패키지별 상이)',
      '샤워 및 휴식',
      '롯데마트 또는 빈컴센터 쇼핑 (선택)',
      '전통 마사지 체험 (선택)',
      '석식 후 호텔 귀환',
    ],
    mealInfo: '조식 포함',
    image: 'https://loremflickr.com/800/600/vincom,hanoi/all?lock=314',
    golfInfo: {
      courseName: '패키지별 상이',
      courseType: '18홀 정규',
      round: 3,
    },
    type: 'golf',
  },
  {
    day: 5,
    date: 'TBD',
    dateDisplay: '5일차',
    title: '하노이 출발 → 인천 도착',
    titleEn: 'Hanoi Departure → Incheon Arrival',
    location: 'Incheon',
    locationKo: '인천',
    activities: [
      '조식 후 호텔 체크아웃',
      '하노이 노이바이 국제공항 이동',
      '탑승 수속 후 귀국 편 탑승',
      '인천 국제공항 도착 및 해산',
    ],
    mealInfo: '조식 + 기내식',
    image: 'https://loremflickr.com/800/600/airport,travel/all?lock=305',
    type: 'travel',
  },
];

// 타입 정의
export interface ItineraryDay {
  day: number;
  date: string;
  dateDisplay: string;
  title: string;
  titleEn: string;
  location: string;
  locationKo: string;
  activities: string[];
  mealInfo: string;
  image: string;
  golfInfo?: {
    courseName: string;
    courseType: string;
    round: number;
  };
  type: 'travel' | 'golf' | 'sightseeing';
}

export interface GolfPackage {
  id: number;
  name: string;
  hotel: string;
  hotelGrade: string;
  location: string;
  courses: string[];
  courseCount: number;
  price: number;
  priceLabel?: string;
  currency: string;
  weekendSurcharge: number;
  singleRoomSurcharge: number;
  note: string;
  image: string;
  highlight: string;
}
