import type { Metadata } from "next";
import PageShell, { ComingSoon } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "물품 기부 - 라이언 콩",
  description: "쓰지 않는 반려동물 물품과 이불을 나눠요.",
};

export default function DonatePage() {
  return (
    <PageShell icon="🎁" title="사용하지 않는 물건 기부" description="쓰지 않는 반려동물 물품과 이불을 필요한 곳에 나눠요.">
      <section className="rounded-3xl bg-white border border-ink/10 shadow-lg shadow-ink/5 p-6 sm:p-8 space-y-4">
        <h2 className="text-heading font-bold">받는 물품</h2>
        <ul className="space-y-2 text-body">
          <li>✅ 반려동물 물품</li>
          <li>✅ 이불</li>
          <li className="text-primary font-bold">⛔ 솜이불은 받지 않아요</li>
          <li className="text-ink/70">그 밖의 물품: [ ]</li>
        </ul>
      </section>

      <section className="rounded-3xl bg-white border border-ink/10 shadow-lg shadow-ink/5 p-6 sm:p-8">
        <h2 className="text-heading font-bold">광명시 자원봉사센터</h2>
      </section>

      <ComingSoon items={["기부 신청 양식을 추가할 예정이에요."]} />
    </PageShell>
  );
}

