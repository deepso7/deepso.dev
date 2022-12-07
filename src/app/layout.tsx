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
        "bg-zinc-800 font-sans text-white antialiased",
        fontSans.variable
      )}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
