import type { Metadata } from "next";
import PageShell, { ComingSoon } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "여행지 추천 - 라이언 콩",
  description: "반려동물과 함께 가기 좋은 여행지를 모아요.",
};

export default function TravelPage() {
  return (
    <PageShell icon="🧳" title="반려동물 여행지 추천" description="반려동물과 함께 가기 좋은 여행지를 모아요.">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        {[1, 2].map((n) => (
          <div key={n} className="rounded-3xl bg-white border border-ink/10 shadow-lg shadow-ink/5 p-6">
            <p className="text-caption font-bold text-primary">[지역]</p>
            <p className="text-heading font-bold mt-1">[여행지 이름]</p>
            <p className="text-caption text-ink/70 mt-2">반려동물 동반 조건: [ ]</p>
            <p className="text-caption text-ink/70">콩이 후기: [ ]</p>
          </div>
        ))}
      </div>
      <ComingSoon items={["직접 다녀오거나 확인한 여행지를 채워 넣을 예정이에요."]} />
    </PageShell>
  );
}

