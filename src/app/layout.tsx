import "../styles/globals.css";
import { Inter as FontSans } from "@next/font/google";

import { cn } from "@/lib/utils";
import { Analytics } from "@/components/Analytics";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-zinc-800 font-sans text-indigo-50 antialiased",
        fontSans.variable
      )}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="w-full h-2 bg-gradient-to-r from-indigo-500 via-orange-500 to-pink-500" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
