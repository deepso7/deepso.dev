import "../styles.css";
import type { ReactNode } from "react";

import { Head } from "@/components/head";
import { ThemeProvider } from "@/components/theme-provider";

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div>
        <Head />
        <main className="vertical center pt-12 md:w-1/3 mx-auto px-4 md:px-2">
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
