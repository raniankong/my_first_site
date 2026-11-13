import Link from "next/link";
import Wave from "./Wave";
import { navGroups, siteTagline } from "./navItems";

export default function SiteFooter() {
  return (
    <footer className="mt-auto">
      <Wave className="text-primary-dark" />
      <div className="bg-primary-dark text-white">
        <div className="max-w-6xl mx-auto px-6 pt-6 pb-10 grid gap-8 sm:grid-cols-3">
          <div className="space-y-2">
            <p className="text-heading font-extrabold">🐶 라이언 콩</p>
            <p className="text-caption text-white/70 break-keep">{siteTagline}</p>
          </div>

          <div>
            <p className="text-caption font-bold text-accent mb-3">둘러보기</p>
            <div className="grid grid-cols-3 gap-3 text-caption">
              {navGroups.map((group) => (
                <div key={group.id}>
                  <p className="font-semibold text-white mb-1.5 break-keep">{group.short}</p>
                  <ul className="space-y-1.5 text-white/75">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="hover:text-accent break-keep">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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

