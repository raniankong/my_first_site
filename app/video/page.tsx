import type { Metadata } from "next";
import PageShell, { ComingSoon } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "영상 만들기 - 라이언 콩",
  description: "반려동물 사진으로 슬라이드쇼 영상을 만들어요.",
};

export default function VideoPage() {
  return (
    <PageShell
      icon="🎬"
      title="사진으로 영상 만들기"
      description="반려동물 사진 여러 장을 골라 슬라이드쇼 영상으로 만들어요."
    >
      <ComingSoon
        items={[
          "사진 여러 장을 올리면 슬라이드쇼 영상(.webm)으로 만들어 내려받을 수 있어요.",
          "사진은 내 브라우저 안에서만 처리되고 서버로 올라가지 않아요.",
        ]}
      />
    </PageShell>
  );
}

