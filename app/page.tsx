import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 py-8 sm:py-16 md:py-24 bg-surface text-ink overflow-x-hidden relative">
      <div className="max-w-lg w-full rounded-3xl bg-white border border-ink/10 p-6 sm:p-10 md:p-12 shadow-xl shadow-ink/5 space-y-6 sm:space-y-8">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-caption font-bold bg-accent/25 text-ink border border-accent mb-4 shrink-0">
            🐾 라이언 콩의 일상
          </span>

          <h1 className="text-title font-extrabold tracking-tight text-ink mb-2 sm:mb-3 break-keep">
            안녕? 난 <span className="text-primary">라이언 콩</span>이야
          </h1>
          <p className="text-body font-medium text-ink/80 mb-5 break-keep">
            만나서 반가워!
          </p>

          <div className="my-1 relative shrink-0">
            <Image
              src="/my-dog.jpg"
              alt="라이언 콩의 반려견"
              width={160}
              height={160}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover object-top shadow-lg border-4 border-white ring-2 ring-primary/25 aspect-square shrink-0 transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

          <p className="text-body font-bold text-primary tracking-wide mt-4">
            @ranian_kong
          </p>
        </div>

        {/* 라이언 콩 매력 포인트 */}
        <section aria-label="라이언 콩의 매력 포인트" className="space-y-3">
          <h2 className="text-heading font-bold text-ink text-center break-keep">
            라이언 콩이 좋아하는 것들
          </h2>
          <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
            <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-accent/10 border border-accent/40">
              <span className="text-2xl shrink-0" aria-hidden="true">
                🦴
              </span>
              <div className="text-left">
                <p className="text-body font-bold text-ink break-keep">
                  산책과 간식을 좋아해요
                </p>
                <p className="text-caption text-ink/75 mt-0.5 break-keep">
                  신나는 산책 시간과 맛있는 간식만 있으면 언제나 행복해요.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-accent/10 border border-accent/40">
              <span className="text-2xl shrink-0" aria-hidden="true">
                🚗
              </span>
              <div className="text-left">
                <p className="text-body font-bold text-ink break-keep">
                  차 타는 걸 좋아해요
                </p>
                <p className="text-caption text-ink/75 mt-0.5 break-keep">
                  함께 차를 타고 달리는 드라이브 시간을 즐겨요.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-accent/10 border border-accent/40">
              <span className="text-2xl shrink-0" aria-hidden="true">
                🧳
              </span>
              <div className="text-left">
                <p className="text-body font-bold text-ink break-keep">
                  여행을 정말 좋아해요
                </p>
                <p className="text-caption text-ink/75 mt-0.5 break-keep">
                  캐리어만 보면 먼저 나가고 싶어 할 만큼 나들이와 여행을 좋아해요.
                </p>
              </div>
            </div>
          </div>
        </section>

        <p className="text-center font-semibold text-ink/75 text-caption break-keep">
          오늘 처음 인터넷에 사이트를 올렸어요!
        </p>

        {/* 행동 버튼 (인스타그램 & 문의사항) */}
        <div className="space-y-2.5 pt-1">
          <a
            href="https://www.instagram.com/ranian_kong/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-accent hover:bg-accent-hover active:scale-[0.99] text-ink font-bold text-button shadow-md shadow-accent/30 transition-all duration-200 group cursor-pointer"
          >
            <span className="text-base group-hover:scale-110 transition-transform">
              📸
            </span>
            <span>인스타그램 보러가기 (@ranian_kong)</span>
            <span className="group-hover:translate-x-0.5 transition-transform">
              ↗
            </span>
          </a>

          <Link
            href="/inquiry"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-primary hover:bg-primary-hover active:scale-[0.99] text-white font-bold text-button shadow-md shadow-primary/20 transition-all duration-200 group cursor-pointer"
          >
            <span className="text-base group-hover:scale-110 transition-transform">
              💌
            </span>
            <span>문의사항 남기기</span>
            <span className="group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
