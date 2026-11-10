// 섹션 사이를 부드럽게 나누는 물결 구분선
// 색은 className의 text-* 로 정합니다. (예: text-surface)
export default function Wave({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block w-full h-10 sm:h-16 ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path
        fill="currentColor"
        d="M0,48 C240,88 480,8 720,32 C960,56 1200,72 1440,40 L1440,80 L0,80 Z"
      />
    </svg>
  );
}

