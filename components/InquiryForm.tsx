"use client";

import { useState, useEffect, useId } from "react";

interface InquiryItem {
  id: string;
  name: string;
  email: string;
  content: string;
  createdAt: string;
}

export default function InquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState<InquiryItem | null>(null);
  const [history, setHistory] = useState<InquiryItem[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const nameInputId = useId();
  const emailInputId = useId();
  const contentInputId = useId();

  // Load history from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("site_inquiries");
      if (saved) {
        setHistory(JSON.parse(saved));
      }
    } catch {
      // ignore JSON parse or storage errors
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !content.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newInquiry: InquiryItem = {
        id: Date.now().toString(),
        name: name.trim(),
        email: email.trim(),
        content: content.trim(),
        createdAt: new Date().toLocaleString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      const updated = [newInquiry, ...history];
      setHistory(updated);
      setLastSubmitted(newInquiry);
      try {
        localStorage.setItem("site_inquiries", JSON.stringify(updated));
      } catch {
        // ignore storage errors
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      setName("");
      setEmail("");
      setContent("");
    }, 450);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setLastSubmitted(null);
  };

  return (
    <section
      aria-labelledby="inquiry-heading"
      className="max-w-lg w-full rounded-3xl bg-white/90 backdrop-blur-md border border-[#2C3E50]/10 p-6 sm:p-10 md:p-12 shadow-xl shadow-[#2C3E50]/5 space-y-6 sm:space-y-7 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200 mb-3 shrink-0">
          <span className="text-sm">💌</span>
          문의 및 소통
        </div>

        <h2
          id="inquiry-heading"
          className="text-xl sm:text-2xl font-black tracking-tight text-[#2C3E50] mb-2 break-keep"
        >
          문의사항 남기기
        </h2>

        <p className="text-xs sm:text-sm text-[#2C3E50]/75 max-w-sm leading-relaxed break-keep">
          궁금한 점이나 함께 나누고 싶은 이야기가 있다면 편하게 남겨주세요!
        </p>
      </div>

      {isSuccess && lastSubmitted ? (
        /* Success Screen */
        <div className="rounded-2xl bg-emerald-50/80 border border-emerald-200 p-5 sm:p-6 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl shadow-md shadow-emerald-500/20">
            ✓
          </div>

          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-emerald-900">
              문의가 성공적으로 전달되었습니다!
            </h3>
            <p className="text-xs sm:text-sm text-emerald-700/90 break-keep">
              소중한 문의 감사합니다. 확인 후 남겨주신 이메일로 답변드리겠습니다.
            </p>
          </div>

          {/* Submitted Summary */}
          <div className="bg-white/80 rounded-xl p-3.5 text-left text-xs sm:text-sm space-y-2 border border-emerald-100 text-[#2C3E50]">
            <div>
              <span className="font-semibold text-[#2C3E50]/60 mr-2">성함/닉네임:</span>
              <span className="font-medium text-[#2C3E50]">{lastSubmitted.name}</span>
            </div>
            <div>
              <span className="font-semibold text-[#2C3E50]/60 mr-2">이메일:</span>
              <span className="font-medium text-[#2C3E50]">{lastSubmitted.email}</span>
            </div>
            <div>
              <span className="font-semibold text-[#2C3E50]/60 block mb-1">문의 내용:</span>
              <p className="p-2.5 rounded-lg bg-[#FDFBF7] border border-[#2C3E50]/10 text-xs sm:text-sm whitespace-pre-wrap break-words text-[#2C3E50]/90">
                {lastSubmitted.content}
              </p>
            </div>
            <div className="text-[11px] text-[#2C3E50]/50 pt-1 text-right">
              접수일시: {lastSubmitted.createdAt}
            </div>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="w-full py-3 px-5 rounded-xl bg-teal-600 hover:bg-teal-700 active:scale-[0.99] text-white text-xs sm:text-sm font-bold shadow-md shadow-teal-600/20 transition-all duration-200 cursor-pointer"
          >
            새로운 문의 작성하기
          </button>
        </div>
      ) : (
        /* Form Screen */
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* Name or Nickname Field */}
          <div className="space-y-1.5 text-left">
            <label
              htmlFor={nameInputId}
              className="flex items-center text-xs sm:text-sm font-bold text-[#2C3E50]"
            >
              성함 또는 닉네임
              <span className="text-[#C84726] ml-1 font-black" title="필수 입력 항목">*</span>
            </label>
            <input
              id={nameInputId}
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="예: 라이언 또는 홍길동"
              className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#FDFBF7] border border-[#2C3E50]/15 text-[#2C3E50] text-xs sm:text-sm placeholder:text-[#2C3E50]/40 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-600 transition-all duration-200"
            />
          </div>

          {/* Email Address Field */}
          <div className="space-y-1.5 text-left">
            <label
              htmlFor={emailInputId}
              className="flex items-center text-xs sm:text-sm font-bold text-[#2C3E50]"
            >
              이메일 주소
              <span className="text-[#C84726] ml-1 font-black" title="필수 입력 항목">*</span>
            </label>
            <input
              id={emailInputId}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="답변 받으실 이메일 (예: hello@example.com)"
              className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#FDFBF7] border border-[#2C3E50]/15 text-[#2C3E50] text-xs sm:text-sm placeholder:text-[#2C3E50]/40 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-600 transition-all duration-200"
            />
          </div>

          {/* Inquiry Content Field */}
          <div className="space-y-1.5 text-left">
            <label
              htmlFor={contentInputId}
              className="flex items-center text-xs sm:text-sm font-bold text-[#2C3E50]"
            >
              문의 내용
              <span className="text-[#C84726] ml-1 font-black" title="필수 입력 항목">*</span>
            </label>
            <textarea
              id={contentInputId}
              required
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="어떤 문의인지 내용을 자세히 적어주세요 :)"
              className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#FDFBF7] border border-[#2C3E50]/15 text-[#2C3E50] text-xs sm:text-sm placeholder:text-[#2C3E50]/40 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-600 transition-all duration-200 resize-none leading-relaxed"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 sm:py-3.5 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 active:scale-[0.99] disabled:opacity-60 text-white font-bold text-xs sm:text-sm shadow-md shadow-teal-600/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>전송 중...</span>
              </>
            ) : (
              <>
                <span>문의 남기기</span>
                <span aria-hidden="true">→</span>
              </>
            )}
          </button>
        </form>
      )}

      {/* Inquiry History Dropdown / Preview */}
      {history.length > 0 && (
        <div className="pt-2 border-t border-[#2C3E50]/10 text-xs">
          <button
            type="button"
            onClick={() => setShowHistory(!showHistory)}
            className="w-full flex items-center justify-between py-1.5 text-[#2C3E50]/70 hover:text-[#2C3E50] transition-colors cursor-pointer"
          >
            <span className="font-semibold">
              내가 남긴 문의 내역 ({history.length}건)
            </span>
            <span className="text-[10px]">
              {showHistory ? "접기 ▲" : "펼치기 ▼"}
            </span>
          </button>

          {showHistory && (
            <div className="mt-2 space-y-2 max-h-48 overflow-y-auto pr-1">
              {history.map((item) => (
                <div
                  key={item.id}
                  className="p-2.5 rounded-lg bg-[#FDFBF7] border border-[#2C3E50]/10 text-left space-y-1"
                >
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#2C3E50]">
                    <span>{item.name} ({item.email})</span>
                    <span className="text-[#2C3E50]/50 font-normal">{item.createdAt}</span>
                  </div>
                  <p className="text-xs text-[#2C3E50]/80 line-clamp-2 break-words">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
