import type { Metadata } from "next";
import PageShell, { ComingSoon } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "AI 코딩 이야기 - 라이언 콩",
  description: "이 사이트를 AI와 함께 만든 과정을 소개해요.",
};

export default function AiCodingPage() {
  return (
    <PageShell icon="💻" title="AI 코딩 이야기" description="콩이 사이트를 AI와 함께 만든 과정을 소개해요.">
      <ComingSoon
        items={["사용한 도구: [ ]", "만든 과정: [ ]", "처음 해보는 분을 위한 팁: [ ]"]}
      />
    </PageShell>
  );
}

