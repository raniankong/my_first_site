import Image from "next/image";
import Link from "next/link";
import Wave from "@/components/Wave";
import { navItems } from "@/components/navItems";

const likes = [
  { icon: "🦴", title: "산책과 간식", desc: "신나는 산책 시간과 맛있는 간식만 있으면 언제나 행복해요." },
  { icon: "🚗", title: "드라이브", desc: "함께 차를 타고 달리는 시간을 좋아해요." },
  { icon: "🧳", title: "여행", desc: "캐리어만 보면 먼저 나가고 싶어 할 만큼 여행을 좋아해요." },
];

export default function Home() {
  return (
    <main className="flex-1 bg-surface text-ink overflow-x-hidden">
      {/* 히어로: 글(왼쪽) + 사진 전체(오른쪽) + 아래 곡선 */}
      <section className="relative bg-accent/15">
        <div className="max-w-6xl mx-auto px-6 pt-10 sm:pt-14 pb-24 sm:pb-28 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="text-caption font-bold text-primary mb-2">🐾 라이언 콩의 일상</p>
            <h1 className="text-title font-extrabold tracking-tight break-keep">
              안녕? 난 <span className="text-primary">라이언 콩</span>이야
            </h1>
            <p className="text-body text-ink/75 mt-3 max-w-md mx-auto md:mx-0 break-keep">
              만나서 반가워! 산책, 간식, 드라이브, 여행을 좋아하는 콩이의 하루를 소개해요.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/ranian_kong/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-ink font-bold text-button shadow-md transition-colors"
              >
                📸 인스타그램 보러가기 ↗
              </a>
              <Link
                href="/diary"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white hover:bg-primary/10 border border-primary/30 text-primary font-bold text-button transition-colors"
              >
                콩이의 일상 보기 →
              </Link>
            </div>
          </div>

          {/* 사진 비율(4:5)을 그대로 유지해 잘리지 않게 */}
          <div className="order-1 md:order-2 relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] mx-auto aspect-[4/5]">
            <Image
              src="/my-dog.jpg"
              alt="라이언 콩"
              fill
              priority
              sizes="(min-width: 768px) 400px, 340px"
              className="object-contain rounded-[2rem] shadow-xl shadow-ink/15 border-4 border-white"
            />
          </div>
        </div>
        <Wave className="absolute bottom-0 left-0 text-surface" />
      </section>

      {/* 좋아하는 것: 사진 아래로 겹치는 카드 */}
      <section aria-label="라이언 콩이 좋아하는 것들" className="relative z-10 -mt-12 sm:-mt-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {likes.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white border border-ink/5 shadow-xl shadow-ink/10 p-6 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-accent/25 flex items-center justify-center text-3xl">
                <span aria-hidden="true">{item.icon}</span>
              </div>
              <p className="text-body font-bold mt-3">{item.title}</p>
              <p className="text-caption text-ink/70 mt-1 break-keep">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 메뉴 카드 */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-20">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-heading font-bold break-keep">콩이와 함께 둘러보기</h2>
          <p className="text-caption text-ink/65 mt-1 break-keep">
            반려동물과 함께하는 하루에 도움이 되는 것들을 모았어요.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-3xl bg-white border border-ink/10 shadow-md shadow-ink/5 hover:shadow-xl hover:-translate-y-0.5 transition-all overflow-hidden"
            >
              <div className="h-24 bg-primary/10 flex items-center justify-center text-4xl rounded-b-[40%]">
                <span aria-hidden="true">{item.icon}</span>
              </div>
              <div className="p-5 text-center">
                <p className="text-body font-bold group-hover:text-primary">{item.label}</p>
                <p className="text-caption text-ink/70 mt-1 break-keep">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 문의 안내 */}
      <Wave className="text-accent/15" />
      <section className="bg-accent/15 px-6 pb-16 text-center">
        <h2 className="text-heading font-bold break-keep">콩이에게 하고 싶은 말이 있나요?</h2>
        <p className="text-caption text-ink/70 mt-1 break-keep">궁금한 점이나 제안은 편하게 남겨 주세요.</p>
        <Link
          href="/inquiry"
          className="inline-flex items-center gap-1.5 mt-5 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-button shadow-md shadow-primary/20 transition-colors"
        >
          💌 문의사항 남기기 →
        </Link>
      </section>
    </main>
  );
}
