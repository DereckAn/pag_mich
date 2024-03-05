import type { Metadata } from "next";
import { Agbalumo } from "next/font/google";
import "./globals.css";

const font = Agbalumo({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Protein House",
  description: "Protein House",
};
interface RootLayoutProps {
  readonly children: React.ReactNode; // Mark children as read-only
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${font.className} text-secondary bg-slate-500`}>{children}</body>
    </html>
  );
}
