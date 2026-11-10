import type { Metadata } from "next";
import PageShell, { ComingSoon } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "콩이의 일상 - 라이언 콩",
  description: "라이언 콩의 하루하루를 사진과 글로 기록해요.",
};

export default function DiaryPage() {
  return (
    <PageShell icon="🐾" title="콩이의 일상" description="콩이의 하루하루를 사진과 글로 기록해요.">
      <article className="rounded-3xl bg-white border border-ink/10 shadow-lg shadow-ink/5 p-6 sm:p-8">
        <p className="text-caption text-ink/60">[날짜]</p>
        <h2 className="text-heading font-bold mt-1 break-keep">오늘 처음 인터넷에 사이트를 올렸어요!</h2>
        <p className="text-body text-ink/80 mt-2 break-keep">[내용]</p>
      </article>
      <ComingSoon items={["일상 기록을 사진과 함께 추가할 예정이에요.", "[추가할 내용]"]} />
    </PageShell>
  );
}

