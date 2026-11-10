import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR, Geist_Mono } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://my-first-site-rust-two.vercel.app"),
  title: "안녕? 난 라이언 콩이야",
  description: "[@ranian_kong]",
  openGraph: {
    title: "안녕? 난 라이언 콩이야",
    description: "[@ranian_kong]",
    images: ["/my-dog.jpg"],
  },
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
      lang="ko"
      className={`${notoSansKr.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
