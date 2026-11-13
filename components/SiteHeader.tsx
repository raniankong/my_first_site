"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navGroups } from "./navItems";

export default function SiteHeader() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "홈", active: pathname === "/" },
    ...navGroups.map((group) => ({
      href: `/#${group.id}`,
      label: group.short,
      // 하위 페이지에 있으면 그 페이지가 속한 묶음을 표시
      active: group.items.some((item) => pathname.startsWith(item.href)),
    })),
    { href: "/inquiry", label: "문의", active: pathname.startsWith("/inquiry") },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">
        <Link href="/" className="font-extrabold text-body text-ink shrink-0">
          🐶 라이언 <span className="text-primary">콩</span>
        </Link>
        <nav aria-label="주요 메뉴" className="flex-1 overflow-x-auto">
          <ul className="flex items-center gap-0.5 sm:gap-1 justify-end whitespace-nowrap">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={link.active ? "page" : undefined}
                  className={`block px-2.5 sm:px-3 py-1.5 rounded-full text-caption font-semibold transition-colors ${
                    link.active ? "bg-primary text-white" : "text-ink/70 hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
