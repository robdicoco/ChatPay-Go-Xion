"use client";

// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { AbstraxionProvider } from "@burnt-labs/abstraxion";

import "@burnt-labs/ui/dist/index.css";

const treasuryConfig = {
  treasury: "xion1vx6qacf9qm5u90pdgdll9qlf5hylwtssmfh5z66klyqnjwu0uhxqyda097",
  // treasury: "xion13uwmwzdes7urtjyv7mye8ty6uk0vsgdrh2a2k94tp0yxx9vv3e9qazapyu",
  rpcUrl: "https://rpc.xion-testnet-2.burnt.com/",
  restUrl: "https://api.xion-testnet-2.burnt.com/"
};

// const config = {
//   // Network configuration
//   rpcUrl: "https://rpc.xion-testnet-2.burnt.com/",
//   restUrl: "https://api.xion-testnet-2.burnt.com/",
//   gasPrice: "0.001uxion",

//   // Optional configurations
//   treasury: "xion14ulgpscve2cpjjwkjvqyj4k5uus9s40pjw6dly6vvky7wusvkj9qy99a8h",
//   // callbackUrl: "your-app-scheme://",
// };

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

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
        <AbstraxionProvider config={treasuryConfig}>
          {children}
        </AbstraxionProvider>
      </body>
    </html>
  );
}
