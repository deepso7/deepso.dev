import "../styles.css";
import type { ReactNode } from "react";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { ThemeProvider } from "@/components/theme-provider";

import { Footer } from "../components/footer";
import { Head } from "../components/head";

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <body className="m-auto max-w-2xl">
      <Analytics />
      <SpeedInsights />
      <Head />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <main className="min-h-screen p-6 pt-3 md:pt-6">
          {children}
          <Footer />
        </main>
      </ThemeProvider>
    </body>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
