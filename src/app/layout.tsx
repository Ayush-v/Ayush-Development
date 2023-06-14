import { ThemeProviders } from "@/components/theme-provider";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Developer Ayush",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-inter`}>
        <ThemeProviders attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
