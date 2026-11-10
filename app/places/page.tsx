import type { Metadata } from "next";
import PageShell, { ComingSoon } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "동반 장소 지도 - 라이언 콩",
  description: "반려동물과 갈 수 있는 카페·식당을 지도로 봐요.",
};

export default function PlacesPage() {
  return (
    <PageShell
      icon="📍"
      title="반려동물 동반 카페·식당"
      description="반려동물과 함께 갈 수 있는 카페와 식당을 지도로 봐요."
    >
      <div className="rounded-3xl bg-primary/10 border border-primary/20 h-64 sm:h-80 flex items-center justify-center text-body text-ink/60">
        지도가 들어갈 자리 (OpenStreetMap)
      </div>
      <ComingSoon
        items={[
          "장소 이름, 주소, 동반 조건을 지도에 표시할 예정이에요.",
          "영업 정보와 동반 조건은 바뀔 수 있으니 방문 전에 꼭 확인해 주세요.",
        ]}
      />
    </PageShell>
  );
}

