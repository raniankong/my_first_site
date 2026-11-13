import type { Metadata } from "next";
import PageShell, { ComingSoon } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "AI 영상 · 만들기 - 라이언 콩",
  description: "AI로 만든 콩이 영상을 감상하고 반려동물 사진으로 추억 영상을 만들어요.",
};

interface AiVideoItem {
  id: string;
  src: string;
  title: string;
  tool: string;
  description: string;
}

const aiVideos: AiVideoItem[] = [
  {
    id: "kongi-xmas-reels",
    src: "/video/kongi_xmas_reels.mp4",
    title: "미리 크리스마스",
    tool: "힉스필드",
    description: "트리앞에서 콩이 몸이 움직여~",
  },
];

export default function VideoPage() {
  return (
    <PageShell
      icon="🎬"
      title="AI로 만든 콩이 영상"
      description="콩이 사진과 AI로 만든 영상들을 모아두었어요."
    >
      {/* AI 영상 목록 */}
      <section aria-label="AI 영상 목록" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-heading font-bold break-keep">
            ✨ AI 영상 목록 ({aiVideos.length}편)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {aiVideos.map((video) => (
            <article
              key={video.id}
              className="rounded-3xl bg-white border border-ink/10 shadow-lg shadow-ink/5 overflow-hidden flex flex-col"
            >
              <div className="bg-ink/95 flex items-center justify-center">
                <video
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full max-h-[520px] aspect-[9/16] object-contain"
                >
                  브라우저가 영상 재생을 지원하지 않습니다.
                </video>
              </div>

              <div className="p-5 sm:p-6 space-y-2.5 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-ink text-caption font-bold">
                      ✨ AI 제작 영상
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-caption font-bold">
                      사용한 AI 도구: {video.tool}
                    </span>
                  </div>

                  <h3 className="text-heading font-bold text-ink break-keep pt-1">
                    {video.title}
                  </h3>

                  <p className="text-body text-ink/80 break-keep">
                    {video.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 슬라이드쇼 제작 도구 안내 */}
      <ComingSoon
        items={[
          "직접 반려동물 사진 여러 장을 올려 슬라이드쇼 영상(.webm)으로 만드는 기능도 준비 중이에요.",
          "사진은 내 브라우저 안에서만 처리되고 서버로 올라가지 않아요.",
        ]}
      />
    </PageShell>
  );
}
