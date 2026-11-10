import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Pretendard (무료 오픈소스 폰트, SIL OFL)
const pretendard = localFont({
  src: "../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "45 920",
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
      className={`${pretendard.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
