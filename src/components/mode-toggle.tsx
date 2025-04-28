import * as React from 'react';

import { Button } from '@/components/ui/button';
import { MoonIcon } from '@/components/ui/moon';
import { SunIcon } from '@/components/ui/sun';

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<
    'theme-light' | 'dark' | 'system'
  >('theme-light');

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setThemeState(isDarkMode ? 'dark' : 'theme-light');
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
  }, [theme]);

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => setThemeState(theme === 'dark' ? 'theme-light' : 'dark')}
    >
      <SunIcon
        className="dark:-rotate-90 rotate-0 scale-100 transition-all dark:scale-0"
        size={20}
      />
      <MoonIcon
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        size={20}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
