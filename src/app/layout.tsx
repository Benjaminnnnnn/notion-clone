import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import { twMerge } from "tailwind-merge";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // console.log(db);
  return (
    <html lang="en">
      <body className={twMerge("bg-background", dmSans.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster></Toaster>
        </ThemeProvider>
      </body>
    </html>
  );
}
