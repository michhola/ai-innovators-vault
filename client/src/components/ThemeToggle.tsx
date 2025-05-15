import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/lib/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative rounded-full h-8 w-8 flex items-center justify-center"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <Sun 
        className={`h-5 w-5 transition-all ${isDark ? 'opacity-0 scale-0 rotate-90' : 'opacity-100 scale-100 rotate-0'}`} 
        style={{ position: isDark ? 'absolute' : 'static' }}
      />
      <Moon 
        className={`h-5 w-5 transition-all ${isDark ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-90'}`}
        style={{ position: !isDark ? 'absolute' : 'static' }}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
