"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { MoonIcon } from "@/components/ui/moon";
import { SunIcon } from "@/components/ui/sun";

export function ModeToggle() {
  const { setTheme, theme, systemTheme } = useTheme();

  const isDark = theme === "system" ? systemTheme === "dark" : theme === "dark";

  return (
    <Button
      variant="secondary"
      size="icon-lg"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <SunIcon className="dark:-rotate-90 rotate-0 scale-100 transition-all dark:scale-0 flex cursor-pointer select-none items-center justify-center rounded-md p-2  duration-200 hover:bg-accent" />
      <MoonIcon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 flex cursor-pointer select-none items-center justify-center rounded-md p-2 duration-200 hover:bg-accent" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
