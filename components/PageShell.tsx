import Wave from "./Wave";

// 하위 페이지 공통 틀: 상단 제목 영역 + 물결 + 본문
export default function PageShell({
  icon,
  title,
  description,
  children,
}: {
  icon: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 bg-surface text-ink">
      <section className="bg-accent/15 pt-12 sm:pt-16 text-center px-6">
        <span className="text-4xl" aria-hidden="true">
          {icon}
        </span>
        <h1 className="text-title font-extrabold tracking-tight mt-3 break-keep">{title}</h1>
        <p className="text-body text-ink/75 mt-2 max-w-xl mx-auto break-keep">{description}</p>
        <div className="h-8 sm:h-10" />
      </section>
      <Wave flip className="text-accent/15 -mt-px" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-8">{children}</div>
    </main>
  );
}

// 준비 중 안내 카드
export function ComingSoon({ items }: { items: string[] }) {
  return (
    <div className="rounded-3xl bg-white border border-ink/10 shadow-lg shadow-ink/5 p-6 sm:p-8">
      <p className="inline-block px-3 py-1 rounded-full bg-accent text-ink text-caption font-bold mb-4">
        준비 중
      </p>
      <ul className="space-y-2 text-body text-ink/80">
        {items.map((item) => (
          <li key={item} className="flex gap-2 break-keep">
            <span className="text-primary">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

