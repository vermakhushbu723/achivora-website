import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

/**
 * Light/dark switch. The site is dark by default; a visitor's choice is
 * remembered under the `theme` key that the boot script in index.html reads
 * before the first paint.
 */
export default function ThemeToggle({ onDark = false }: { onDark?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Before next-themes reports in, trust the class the inline boot script set.
  const isDark = mounted
    ? resolvedTheme === 'dark'
    : typeof document !== 'undefined' &&
      document.documentElement.classList.contains('dark');

  const shell = `relative w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 ${
    onDark
      ? 'bg-white/10 hover:bg-primary text-white'
      : 'bg-job-tag-bg hover:bg-primary text-primary hover:text-white'
  }`;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={shell}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light theme' : 'Dark theme'}
    >
      {/* Both icons stay mounted and cross-fade, so the swap has no jump. */}
      <Sun
        className={`absolute h-4 w-4 transition-all duration-300 ${
          isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all duration-300 ${
          isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
        }`}
      />
    </button>
  );
}
