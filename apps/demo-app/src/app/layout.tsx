"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { AbstraxionProvider } from "@burnt-labs/abstraxion";
import "@burnt-labs/abstraxion/dist/index.css";

const inter = Inter({ subsets: ["latin"] });

// Example XION seat contract
// const seatContractAddress =
  // "xion1z70cvc08qv5764zeg3dykcyymj5z6nu4sqr7x8vl4zjef2gyp69s9mmdka";

// const legacyConfig = {
//   contracts: [
//     // Usually, you would have a list of different contracts here
//     seatContractAddress,
//     {
//       address: seatContractAddress,
//       amounts: [{ denom: "uxion", amount: "1000000" }],
//     },
//   ],
//   stake: true,
//   bank: [
//     {
//       denom: "uxion",
//       amount: "1000000",
//     },
//   ],
//   // Optional params to activate mainnet config
//   rpcUrl: "https://rpc.xion-testnet-2.burnt.com:443",
//   restUrl: "https://api.xion-testnet-2.burnt.com",
// };

const treasuryConfig = {
  treasury: "xion14ulgpscve2cpjjwkjvqyj4k5uus9s40pjw6dly6vvky7wusvkj9qy99a8h", // Example XION treasury instance for instantiating smart contracts
  gasPrice: "0.001uxion", // If you feel the need to change the gasPrice when connecting to signer, set this value. Please stick to the string format seen in example
  // Optional params to activate mainnet config
  rpcUrl: "https://rpc.xion-testnet-2.burnt.com:443",
  restUrl: "https://api.xion-testnet-2.burnt.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AbstraxionProvider config={treasuryConfig}>
          {children}
        </AbstraxionProvider>
      </body>
    </html>
  );
}
