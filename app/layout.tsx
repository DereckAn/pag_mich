import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const font = Outfit({ subsets: ["latin"], weight: "400" });

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
      <body className={`${font.className} text-secondary bg-vainilla`}>
        {children}
      </body>
    </html>
  );
}
