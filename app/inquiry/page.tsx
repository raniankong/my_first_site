import type { Metadata } from "next";
import Link from "next/link";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "문의사항 남기기 - My First Site",
  description: "성함(닉네임), 이메일과 함께 문의사항을 남겨주세요.",
};

export default function InquiryPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 py-10 sm:py-16 md:py-20 bg-surface text-ink overflow-x-hidden">
      <div className="max-w-lg w-full mb-3 sm:mb-4 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-caption font-bold text-ink/70 hover:text-primary transition-colors py-2 px-3 rounded-xl hover:bg-ink/5"
        >
          <span>←</span>
          <span>메인으로 돌아가기</span>
        </Link>

        <span className="text-caption text-ink/40 font-mono">
          /inquiry
        </span>
      </div>

      <InquiryForm />
    </main>
  );
}
