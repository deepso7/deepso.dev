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
      <SunIcon className="flex scale-100 rotate-0 cursor-pointer items-center justify-center rounded-md p-2 transition-all duration-200 select-none hover:bg-accent dark:scale-0 dark:-rotate-90" />
      <MoonIcon className="absolute flex scale-0 rotate-90 cursor-pointer items-center justify-center rounded-md p-2 transition-all duration-200 select-none hover:bg-accent dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
