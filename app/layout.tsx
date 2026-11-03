import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My First Site - Next.js",
  description: "Next.js, TypeScript, Tailwind CSS로 만든 첫 번째 사이트",
  verification: {
    google: "GJ2E9p1WzJ2vS43FfH0AhgYN6JeRnL_7vgvujU5G4d4",
    other: {
      "naver-site-verification": "70457bb301753845c97378a691f4185e0104ddd5",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
