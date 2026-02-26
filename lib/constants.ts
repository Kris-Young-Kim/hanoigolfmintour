// 투어 기본 정보
export const TOUR_INFO = {
  title: '하노이 골프투어 2026',
  shortTitle: '하노이 골프투어',
  duration: '3박5일',
  startDate: 'TBD',
  endDate: 'TBD',
  dateDisplay: '날짜 추후 공지',
  priceFrom: 735000,
  priceTo: 930000,
  currency: 'KRW',
  description: '베트남 하노이에서 즐기는 프리미엄 골프 여행',
  subtitle: '한국어 전용 가이드와 함께하는 골프 성지 순례',
  guide: '전문 골프 가이드',
};

// 골프 패키지 정보 (PDF 6종)
export const GOLF_PACKAGES = [
  {
    id: 1,
    name: '빈옌 프리미엄',
    hotel: 'Modena Hotel',
    hotelGrade: '5성급',
    location: '빈옌',
    courses: ['땀다오', '탄란', '헤론레이크', '다이라이'],
    courseCount: 3,
    price: 735000,
    currency: 'KRW',
    weekendSurcharge: 75000,
    singleRoomSurcharge: 37500,
    note: '최고 가성비!',
    image: 'https://loremflickr.com/800/600/golf,resort?lock=11',
    highlight: '5성급 호텔',
  },
  {
    id: 2,
    name: '레이나 스탠다드',
    hotel: 'Reyna Hotel',
    hotelGrade: '3-4성급',
    location: '하노이',
    courses: ['스톤밸리', '탄란', '힐탑밸리', '헤론레이크'],
    courseCount: 3,
    price: 780000,
    currency: 'KRW',
    weekendSurcharge: 67500,
    singleRoomSurcharge: 37500,
    note: '인기 상품!',
    image: 'https://loremflickr.com/800/600/golf,course?lock=22',
    highlight: '다양한 코스 선택',
  },
  {
    id: 3,
    name: '박닌 크라운',
    hotel: 'Crown Hotel',
    hotelGrade: '4성급',
    location: '박닌',
    courses: ['엠버힐', '스톤하이랜드', '콘힐'],
    courseCount: 3,
    price: 795000,
    currency: 'KRW',
    weekendSurcharge: 67500,
    singleRoomSurcharge: 25500,
    note: '4성급 호텔!',
    image: 'https://loremflickr.com/800/600/golf,fairway?lock=33',
    highlight: '박닌 3색 코스',
  },
  {
    id: 4,
    name: '레이나 피닉스',
    hotel: 'Reyna Hotel',
    hotelGrade: '3-4성급',
    location: '하노이',
    courses: ['피닉스', '탄란', '롱비엔'],
    courseCount: 3,
    price: 870000,
    currency: 'KRW',
    weekendSurcharge: 67500,
    singleRoomSurcharge: 37500,
    note: '피닉스 포함!',
    image: 'https://loremflickr.com/800/600/golf,green?lock=44',
    highlight: '피닉스 명문 코스',
  },
  {
    id: 5,
    name: '레이나 BRG',
    hotel: 'Reyna Hotel',
    hotelGrade: '3-4성급',
    location: '하노이',
    courses: ['레전드힐', '킹스아일랜드', '레전드밸리'],
    courseCount: 3,
    price: 930000,
    currency: 'KRW',
    weekendSurcharge: 60000,
    singleRoomSurcharge: 37500,
    note: 'BRG 프리미엄!',
    image: 'https://loremflickr.com/800/600/golf,luxury?lock=55',
    highlight: 'BRG 3색 명문',
  },
  {
    id: 6,
    name: '빈옌 풀빌라',
    hotel: '풀빌라',
    hotelGrade: '럭셔리',
    location: '빈옌',
    courses: ['땀다오', '탄란', '헤론레이크', '다이라이'],
    courseCount: 3,
    price: 0,
    priceLabel: '별도문의',
    currency: 'KRW',
    weekendSurcharge: 75000,
    singleRoomSurcharge: 0,
    note: '럭셔리 풀빌라!',
    image: 'https://loremflickr.com/800/600/villa,pool?lock=66',
    highlight: '4/6/8인 풀빌라',
  },
];

// FAQ 데이터
export const FAQ_DATA = [
  {
    id: 1,
    question: '요금이 원화로 표시되어 있나요?',
    answer: '네, 안내 요금은 $1=₩1,500 기준으로 환산한 원화 금액입니다. 실제 결제는 현지 납부(USD) 방식으로 진행되며, 출발 전 담당자가 정확한 납부 방법을 안내해 드립니다.',
  },
  {
    id: 2,
    question: '베트남 현지에서 합류 가능한가요?',
    answer: '항공권을 개별 구매하신 경우 현지 합류가 가능합니다. 미팅샌딩비(1인 ₩75,000, 팀당 합산 ₩300,000 기준)는 별도 정산됩니다.',
  },
  {
    id: 3,
    question: '싱글룸 사용이 가능한가요?',
    answer: '싱글룸 이용 시 추가 요금이 발생합니다. 패키지별로 1박당 ₩25,500~37,500의 싱글룸 차지가 부과됩니다. 사전에 요청해 주시기 바랍니다.',
  },
  {
    id: 4,
    question: '2인 또는 3인도 참가 가능한가요?',
    answer: '기본 요금은 4인 행사 기준입니다. 3인 시 1인당 ₩105,000 추가(홀수 인원의 경우 18홀마다 싱글카트 추가), 2인 시 1인당 ₩150,000 추가됩니다.',
  },
  {
    id: 5,
    question: '입금 일정은 어떻게 되나요?',
    answer: '항공권 예약 마감 일정에 맞춰 계약금을 선입금하고, 투어 확정 후 출발 15일 전에 잔금을 결제합니다. 자세한 일정은 담당자에게 문의해 주세요.',
  },
];

// 포함사항
export const INCLUDED_ITEMS = [
  '골프 3회 (그린피+카트비+캐디피 포함)',
  '호텔 3박 (2인 1실 기준)',
  '매일 조식 제공',
  '전용 차량 + 한국어 전용 가이드',
];

// 불포함사항
export const EXCLUDED_ITEMS = [
  '항공권',
  '미팅샌딩비 (1인 ₩75,000, 팀당 합산 ₩300,000 기준)',
  '중식 및 석식',
  '매너팁',
  '운전기사 팁 (하루 ₩15,000)',
  '각종 개인 경비',
];

// 추가요금 정보
export const SURCHARGE_INFO = [
  { label: '주말 1회 포함 시', amount: '+₩60,000~75,000' },
  { label: '싱글룸 차지 (1박/1인)', amount: '+₩25,500~37,500' },
  { label: '3인 행사 시 (1인)', amount: '+₩105,000' },
  { label: '2인 행사 시 (1인)', amount: '+₩150,000' },
];

// 항공 정보 (플레이스홀더)
export const FLIGHT_INFO = {
  outbound: {
    airline: '항공사 추후 공지',
    flight: 'TBD',
    date: 'TBD',
    departure: '인천 출발',
    arrival: '하노이 노이바이 공항 도착',
    duration: '약 5시간',
  },
  return: {
    airline: '항공사 추후 공지',
    flight: 'TBD',
    date: 'TBD',
    departure: '하노이 노이바이 공항 출발',
    arrival: '인천 공항 도착',
    duration: '약 5시간',
  },
};

// 호텔 정보
export const HOTEL_INFO = {
  name: '패키지별 상이 (Modena Hotel 5성급 / Reyna Hotel / Crown Hotel 4성급 / 풀빌라)',
  quality: '3~5성급 및 풀빌라',
  meals: '매일 조식 제공',
  roomType: '2인 1실 기준',
};
