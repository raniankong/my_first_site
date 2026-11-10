// 사이트 메뉴 목록 (상단 메뉴·푸터·홈 카드에서 함께 사용)
export const navItems = [
  { href: "/diary", label: "콩이의 일상", icon: "🐾", desc: "콩이의 하루하루를 사진과 글로 기록해요." },
  { href: "/video", label: "영상 만들기", icon: "🎬", desc: "반려동물 사진으로 슬라이드쇼 영상을 만들어요." },
  { href: "/travel", label: "여행지 추천", icon: "🧳", desc: "반려동물과 함께 가기 좋은 여행지를 모아요." },
  { href: "/places", label: "동반 장소 지도", icon: "📍", desc: "반려동물과 갈 수 있는 카페·식당을 지도로 봐요." },
  { href: "/donate", label: "물품 기부", icon: "🎁", desc: "쓰지 않는 반려동물 물품과 이불을 나눠요." },
  { href: "/ai-coding", label: "AI 코딩 이야기", icon: "💻", desc: "이 사이트를 AI와 함께 만든 과정을 소개해요." },
] as const;

