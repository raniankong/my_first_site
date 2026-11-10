import Link from "next/link";
import Wave from "./Wave";
import { navItems } from "./navItems";

export default function SiteFooter() {
  return (
    <footer className="mt-auto">
      <Wave className="text-primary-dark" />
      <div className="bg-primary-dark text-white">
        <div className="max-w-6xl mx-auto px-6 pt-6 pb-10 grid gap-8 sm:grid-cols-3">
          <div className="space-y-2">
            <p className="text-heading font-extrabold">🐶 라이언 콩</p>
            <p className="text-caption text-white/70 break-keep">
              산책, 간식, 드라이브, 여행을 좋아하는 콩이의 공간
            </p>
          </div>

          <div>
            <p className="text-caption font-bold text-accent mb-3">둘러보기</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-caption text-white/80">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-caption font-bold text-accent mb-3">연락</p>
            <ul className="space-y-1.5 text-caption text-white/80">
              <li>
                <a
                  href="https://www.instagram.com/ranian_kong/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  인스타그램 @ranian_kong ↗
                </a>
              </li>
              <li>
                <Link href="/inquiry" className="hover:text-accent">
                  문의사항 남기기 →
                </Link>
              </li>
              <li>이메일: [ ]</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-caption text-white/50 pb-6">© 2026 라이언 콩</p>
      </div>
    </footer>
  );
}

