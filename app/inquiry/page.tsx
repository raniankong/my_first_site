import type { Metadata } from "next";
import Link from "next/link";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "문의사항 남기기 - My First Site",
  description: "성함(닉네임), 이메일과 함께 문의사항을 남겨주세요.",
};

export default function InquiryPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 py-10 sm:py-16 md:py-20 bg-[#FDFBF7] text-[#2C3E50] overflow-x-hidden">
      <div className="max-w-lg w-full mb-3 sm:mb-4 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2C3E50]/70 hover:text-teal-700 transition-colors py-2 px-3 rounded-xl hover:bg-[#2C3E50]/5"
        >
          <span>←</span>
          <span>메인으로 돌아가기</span>
        </Link>

        <span className="text-xs text-[#2C3E50]/40 font-mono">
          /inquiry
        </span>
      </div>

      <InquiryForm />
    </main>
  );
}
