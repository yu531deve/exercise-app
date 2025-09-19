import type { Metadata } from "next";
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
  title: "Exercise App",
  description: "High-age exercise promotion app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background-light dark:bg-background-dark`}
      >
        <div className="flex flex-col h-screen">
          {/* ページごとの中身 */}
          <div className="flex-1">{children}</div>

          {/* フッターナビ（常に下に固定、SVGアイコン付き） */}
<nav className="fixed bottom-0 left-0 w-full bg-background-light dark:bg-background-dark border-t border-black/10 dark:border-white/10 shadow-lg">
  <div className="flex justify-around py-2">
    <a href="/exercise" className="flex flex-col items-center gap-1 p-2 text-primary">
      {/* Exercise アイコン */}
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 256 256">
        <path d="M248,120h-8V88a16,16,0,0,0-16-16H208V64a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16v56H104V64A16,16,0,0,0,88,48H64A16,16,0,0,0,48,64v8H32A16,16,0,0,0,16,88v32H8a8,8,0,0,0,0,16h8v32a16,16,0,0,0,16,16H48v8a16,16,0,0,0,16,16H88a16,16,0,0,0,16-16V136h48v56a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16v-8h16a16,16,0,0,0,16-16V136h8a8,8,0,0,0,0-16Z"/>
      </svg>
      <span className="text-xs font-medium">Exercise</span>
    </a>

    <a href="/chat" className="flex flex-col items-center gap-1 p-2 text-gray-500 hover:text-primary">
      {/* Chat アイコン */}
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 256 256">
        <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Z"/>
      </svg>
      <span className="text-xs font-medium">Chat</span>
    </a>

    <a href="/progress" className="flex flex-col items-center gap-1 p-2 text-gray-500 hover:text-primary">
      {/* Progress アイコン */}
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 256 256">
        <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Z"/>
      </svg>
      <span className="text-xs font-medium">Progress</span>
    </a>
  </div>
</nav>
        </div>
      </body>
    </html>
  );
}
