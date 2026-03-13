import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import UserSyncProvider from "@/components/UserSyncProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CampusIQ - Smart Circular Intelligence",
  description:
    "Never miss an important campus announcement again. AI-powered circular search, smart reminders, and organized department rooms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} font-sans antialiased`}>
          <UserSyncProvider>{children}</UserSyncProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

