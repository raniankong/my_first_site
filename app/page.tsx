import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 py-8 sm:py-16 md:py-24 bg-[#FDFBF7] text-[#2C3E50] overflow-x-hidden relative">
      <div className="max-w-lg w-full rounded-3xl bg-white/90 backdrop-blur-md border border-[#2C3E50]/10 p-6 sm:p-10 md:p-12 shadow-xl shadow-[#2C3E50]/5 space-y-6 sm:space-y-8">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-700 border border-teal-200/80 mb-4 shrink-0">
            🐾 라이언 콩의 일상
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#2C3E50] mb-2 sm:mb-3 break-keep leading-tight">
            안녕? 난 <span className="text-teal-600">라이언 콩</span>이야
          </h1>
          <p className="text-base sm:text-lg font-medium text-[#2C3E50]/80 mb-5 break-keep">
            만나서 반가워!
          </p>

          <div className="my-1 relative shrink-0">
            <Image
              src="/my-dog.jpg"
              alt="라이언 콩의 반려견"
              width={160}
              height={160}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover object-top shadow-lg border-4 border-white ring-2 ring-teal-600/20 aspect-square shrink-0 transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

          <p className="text-sm sm:text-base font-bold text-amber-600 tracking-wide mt-4">
            @ranian_kong
          </p>
        </div>

        {/* 라이언 콩 매력 포인트 */}
        <section aria-label="라이언 콩의 매력 포인트" className="space-y-3">
          <h2 className="text-xs sm:text-sm font-bold text-[#2C3E50]/60 text-center tracking-wider">
            라이언 콩이 좋아하는 것들
          </h2>
          <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
            <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#FDFBF7] border border-[#2C3E50]/10">
              <span className="text-2xl shrink-0" aria-hidden="true">
                🦴
              </span>
              <div className="text-left">
                <p className="text-sm sm:text-base font-bold text-[#2C3E50] break-keep">
                  산책과 간식을 좋아해요
                </p>
                <p className="text-xs sm:text-sm text-[#2C3E50]/75 mt-0.5 break-keep">
                  신나는 산책 시간과 맛있는 간식만 있으면 언제나 행복해요.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#FDFBF7] border border-[#2C3E50]/10">
              <span className="text-2xl shrink-0" aria-hidden="true">
                🚗
              </span>
              <div className="text-left">
                <p className="text-sm sm:text-base font-bold text-[#2C3E50] break-keep">
                  차 타는 걸 좋아해요
                </p>
                <p className="text-xs sm:text-sm text-[#2C3E50]/75 mt-0.5 break-keep">
                  함께 차를 타고 달리는 드라이브 시간을 즐겨요.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#FDFBF7] border border-[#2C3E50]/10">
              <span className="text-2xl shrink-0" aria-hidden="true">
                🧳
              </span>
              <div className="text-left">
                <p className="text-sm sm:text-base font-bold text-[#2C3E50] break-keep">
                  여행을 정말 좋아해요
                </p>
                <p className="text-xs sm:text-sm text-[#2C3E50]/75 mt-0.5 break-keep">
                  캐리어만 보면 먼저 나가고 싶어 할 만큼 나들이와 여행을 좋아해요.
                </p>
              </div>
            </div>
          </div>
        </section>

        <p className="text-center font-semibold text-[#2C3E50]/75 text-xs sm:text-sm break-keep">
          오늘 처음 인터넷에 사이트를 올렸어요!
        </p>

        {/* 행동 버튼 (인스타그램 & 문의사항) */}
        <div className="space-y-2.5 pt-1">
          <a
            href="https://www.instagram.com/ranian_kong/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-amber-500 hover:bg-amber-600 active:scale-[0.99] text-white font-bold text-xs sm:text-sm shadow-md shadow-amber-500/20 transition-all duration-200 group cursor-pointer"
          >
            <span className="text-base group-hover:scale-110 transition-transform">
              📸
            </span>
            <span>인스타그램 보러가기 (@ranian_kong)</span>
            <span className="text-amber-100 group-hover:translate-x-0.5 transition-transform">
              ↗
            </span>
          </a>

          <Link
            href="/inquiry"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-teal-600 hover:bg-teal-700 active:scale-[0.99] text-white font-bold text-xs sm:text-sm shadow-md shadow-teal-600/20 transition-all duration-200 group cursor-pointer"
          >
            <span className="text-base group-hover:scale-110 transition-transform">
              💌
            </span>
            <span>문의사항 남기기</span>
            <span className="text-teal-200 group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
