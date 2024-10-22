import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import AuthProvider from "@/context/auth-provider";
import { Toaster } from "react-hot-toast";

import Container from "@/components/container";
import Sidebar from "@/components/sidebar/sidebar";
import FollowBar from "@/components/follow-bar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Twitter",
  description: "Created By Elsayed Rapaa Developer ❤",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <div className="h-full mx-auto xl:px-30 max-w-6xl">
            <div className="grid grid-cols-4 h-full">
              <Toaster />
              <Sidebar />
              <Container>{children}</Container>
              <FollowBar />
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
