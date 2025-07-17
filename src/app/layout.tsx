import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

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
          alignItems: 'center',
          gap: '2rem',
          padding: '0.5rem 0',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          background: 'white',
          zIndex: '1000',
          justifyContent: 'center',
          fontWeight: 500,
          fontSize: '1.1rem',
          letterSpacing: '-0.01em',
        }}>
          <a href="#">
            <Image src="logo.svg" alt="Coffe to Career's logo, a round circle with a dog that's sipping coffee in the center" width={96} height={96} />
          </a>
          <a href="#welcome">Who we are</a>
          <a href="#sessions">Upcoming Sessions</a>
          <a href="#speaker">Become a Speaker</a>
          <a href="#community">Join the Community</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
