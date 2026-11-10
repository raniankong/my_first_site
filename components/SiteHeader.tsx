"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./navItems";

export default function SiteHeader() {
  const pathname = usePathname();
  const links = [{ href: "/", label: "홈" }, ...navItems, { href: "/inquiry", label: "문의" }];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-4">
        <Link href="/" className="font-extrabold text-body text-ink shrink-0">
          🐶 라이언 <span className="text-primary">콩</span>
        </Link>
        <nav aria-label="주요 메뉴" className="flex-1 overflow-x-auto">
          <ul className="flex items-center gap-1 sm:justify-end whitespace-nowrap">
            {links.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block px-3 py-1.5 rounded-full text-caption font-semibold transition-colors ${
                      active ? "bg-primary text-white" : "text-ink/70 hover:text-primary hover:bg-primary/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

