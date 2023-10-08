import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import ModelProvider from "@/components/model-provider";
import ToasterProvider from "@/components/toaster-provider";
import CrispProvider from "@/components/crisp-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genius",
  description: "AI Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ModelProvider />
          <ToasterProvider />
          <CrispProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
