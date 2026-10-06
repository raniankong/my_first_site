import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 py-8 sm:py-16 md:py-24 bg-[#FDFBF7] text-[#2C3E50] overflow-x-hidden">
      <div className="max-w-lg w-full rounded-3xl bg-white/90 backdrop-blur-md border border-[#2C3E50]/10 p-6 sm:p-10 md:p-12 shadow-xl shadow-[#2C3E50]/5 space-y-6 sm:space-y-8">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-4 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            정상 작동 중
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#2C3E50] mb-5 sm:mb-6 break-keep leading-tight">
            안녕? 난 라이언 콩이야
          </h1>

          <div className="my-2 relative shrink-0">
            <Image
              src="/my-dog.jpg"
              alt="라이언 콩의 반려견"
              width={144}
              height={144}
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover object-top shadow-lg border-4 border-white ring-2 ring-[#2C3E50]/10 aspect-square shrink-0 transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

          <p className="text-base sm:text-lg font-bold text-[#F59E0B] tracking-wide mt-4 sm:mt-5 mb-2 break-keep">
            [@ranian_kong]
          </p>

          <p className="text-sm sm:text-base text-[#2C3E50]/80 max-w-sm leading-relaxed break-keep">
            가장 단순하고 깔끔한 Next.js 프로젝트가 준비되었습니다.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center text-xs font-medium">
          <div className="p-2 sm:p-3.5 rounded-xl bg-[#FDFBF7] border border-[#2C3E50]/10 text-[#2C3E50] flex flex-col justify-center items-center">
            <span className="text-blue-600 font-semibold block mb-0.5 text-xs sm:text-sm">TS</span>
            <span className="text-[11px] sm:text-xs">TypeScript</span>
          </div>
          <div className="p-2 sm:p-3.5 rounded-xl bg-[#FDFBF7] border border-[#2C3E50]/10 text-[#2C3E50] flex flex-col justify-center items-center">
            <span className="text-purple-600 font-semibold block mb-0.5 text-xs sm:text-sm">App</span>
            <span className="text-[11px] sm:text-xs">App Router</span>
          </div>
          <div className="p-2 sm:p-3.5 rounded-xl bg-[#FDFBF7] border border-[#2C3E50]/10 text-[#2C3E50] flex flex-col justify-center items-center">
            <span className="text-cyan-700 font-semibold block mb-0.5 text-xs sm:text-sm">CSS</span>
            <span className="text-[11px] sm:text-xs">Tailwind CSS</span>
          </div>
        </div>

        <div className="rounded-2xl bg-[#2C3E50] text-zinc-100 p-4 sm:p-5 text-xs font-mono border border-[#2C3E50]/20 space-y-2 sm:space-y-2.5 shadow-inner overflow-hidden">
          <p className="text-zinc-300"># PowerShell 개발 서버 실행</p>
          <p className="text-emerald-400 font-bold break-all">$ npm run dev</p>
          <p className="text-zinc-300 pt-1"># 브라우저 접속</p>
          <p className="text-[#F59E0B] font-medium break-all">http://localhost:3000</p>
        </div>

        <div className="text-xs text-[#2C3E50]/70 text-center pt-1 sm:pt-2 break-keep">
          수정하려면 <code className="bg-[#2C3E50]/10 px-1.5 py-0.5 rounded text-[#2C3E50] font-mono break-all inline-block">app/page.tsx</code> 파일을 열어보세요.
        </div>
      </div>
    </main>
  );
}
