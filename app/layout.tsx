import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lead Page",
  description: "Next.js lead capture page"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he">
      <body>{children}</body>
    </html>
  );
}
