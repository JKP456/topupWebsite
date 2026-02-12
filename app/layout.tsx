import type { Metadata } from 'next';
import './globals.css';
import { Noto_Sans_Thai,Istok_Web } from "next/font/google";

export const metadata: Metadata = {
  title: 'TermGame',
  description: 'A gaming platform with user authentication',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-thai",
});


const istokWeb = Istok_Web({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-en",
});
