import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "דף ליד",
  description: "דף איסוף לידים בעברית עם תמיכה מלאה ב־RTL"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
