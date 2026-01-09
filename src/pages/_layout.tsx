import "../styles.css";
import type { ReactNode } from "react";

import { Head } from "@/components/head";
import { ThemeProvider } from "@/components/theme-provider";

import { Footer } from "../components/footer";

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <body className="max-w-2xl m-auto">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Head />
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
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
