import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coffee to Career",
  description: "Empowering future tech professionals to be job-ready. Coffee to Career meetup.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav style={{
          display: 'flex',
          gap: '2rem',
          padding: '2rem 0 1.5rem 0',
          justifyContent: 'center',
          fontWeight: 500,
          fontSize: '1.1rem',
          letterSpacing: '-0.01em',
        }}>
          <Link href="/">Home</Link>
          <Link href="/speaker">Become a Speaker</Link>
          <Link href="/sessions">Upcoming Sessions</Link>
          <Link href="/register">Register</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
