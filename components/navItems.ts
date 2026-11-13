// 사이트 메뉴 (상단 메뉴·푸터·홈 카드에서 함께 사용)
// 페이지가 완성되면 ready: true 로 바꾸면 "곧 열려요" 배지가 사라집니다.
export const siteTagline = "콩이의 일상, 그리고 반려인을 위한 작은 도움";

export interface NavItem {
  href: string;
  label: string;
  icon: string;
  desc: string;
  ready: boolean;
}

export interface NavGroup {
  id: string;
  icon: string;
  title: string;
  short: string;
  desc: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    id: "story",
    icon: "🐾",
    title: "콩이 이야기",
    short: "콩이 이야기",
    desc: "콩이의 하루와 이 사이트가 만들어진 이야기",
    items: [
      { href: "/diary", label: "콩이의 일상", icon: "🐾", desc: "콩이의 하루하루를 사진과 글로 기록해요.", ready: false },
      { href: "/ai-coding", label: "AI 코딩 이야기", icon: "💻", desc: "이 사이트를 AI와 함께 만든 과정을 소개해요.", ready: false },
    ],
  },
  {
    id: "outing",
    icon: "🚗",
    title: "콩이랑 놀러가기",
    short: "놀러가기",
    desc: "반려동물과 함께 갈 수 있는 곳",
    items: [
      { href: "/travel", label: "여행지 추천", icon: "🧳", desc: "반려동물과 함께 가기 좋은 여행지를 모아요.", ready: false },
      { href: "/places", label: "동반 장소 지도", icon: "📍", desc: "반려동물과 갈 수 있는 카페·식당을 지도로 봐요.", ready: false },
    ],
  },
  {
    id: "share",
    icon: "🎁",
    title: "함께 나누기",
    short: "나누기",
    desc: "추억을 남기고 필요한 곳에 나누기",
    items: [
      { href: "/video", label: "AI 영상 · 만들기", icon: "🎬", desc: "AI로 만든 콩이 영상을 보고 추억 영상을 만들어요.", ready: true },
      { href: "/donate", label: "물품 기부", icon: "🎁", desc: "쓰지 않는 반려동물 물품과 이불을 나눠요.", ready: false },
    ],
  },
];

export const navItems: NavItem[] = navGroups.flatMap((group) => group.items);
