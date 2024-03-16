import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppDataSource } from "@/models/data-source";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize()
  }
  await user.save()
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
