import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import AuthProvider from "@/context/auth-provider";
import { Toaster } from "react-hot-toast";

import Container from "@/components/container";
import Sidebar from "@/components/sidebar/sidebar";
import FollowBar from "@/components/follow-bar";

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
      <body className={`${geistMono.variable} antialiased`}>
        <AuthProvider>
          <Toaster />
          <div className="h-full mx-auto xl:px-30 max-w-6xl">
            <div className="grid grid-cols-4 h-full">
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
