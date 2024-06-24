import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Green Shop",
  description: "Green Shop is market of flowers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/site-ico.svg" />
      </head>
      <body className={inter.className}>
        <Header/>
        <main className="mt-[80px]">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
