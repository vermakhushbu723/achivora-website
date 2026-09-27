/**
 * Achivora identity.
 *
 * The artwork is the supplied PNG lockup in `public/`. Two files ship: the
 * original, whose "Achi" is set in near-black, and a derived variant whose
 * dark ink is white so the lockup holds up on the dark header, hero and
 * footer. The glyph-only crop covers compact slots where the wordmark would
 * be unreadable anyway.
 */

import { useTheme } from 'next-themes';

const LOCKUP = '/logo.png';
const LOCKUP_DARK = '/logo-dark.png';
const MARK = '/logo-mark.png';

/** Square glyph on its own — favicon-sized slots, avatars, tight bars. */
export function LogoMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <img
      src={MARK}
      alt="Achivora"
      width={330}
      height={291}
      className={`${className} object-contain`}
      loading="eager"
      decoding="async"
    />
  );
}

/**
 * Full lockup. Sizing is driven by height alone so the aspect ratio is never
 * squashed. The light-ink artwork is used whenever the ground is dark —
 * either because the call site says so (`onDark`, e.g. over the hero video)
 * or because the site is in its dark theme.
 */
export default function Logo({
  onDark = false,
  className = '',
  /** Kept for call sites that size the old SVG mark; applied to the lockup. */
  markClassName = 'h-9',
}: {
  onDark?: boolean;
  className?: string;
  markClassName?: string;
  /** No longer used — the wordmark is part of the artwork. */
  textClassName?: string;
}) {
  const { resolvedTheme } = useTheme();
  // next-themes only knows the theme after mount, but the inline script in
  // index.html has already put the class on <html> — read that first so the
  // first painted frame is the right artwork.
  const domDark =
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark');
  const dark = onDark || (resolvedTheme ? resolvedTheme === 'dark' : domDark);

  // Call sites pass square classes like `h-10 w-10` for the old glyph; the
  // lockup is ~2.9:1, so any width class is dropped in favour of `w-auto`.
  const height = markClassName
    .split(' ')
    .filter((c) => !c.startsWith('w-'))
    .join(' ');

  return (
    <img
      src={dark ? LOCKUP_DARK : LOCKUP}
      alt="Achivora"
      width={856}
      height={291}
      className={`${height} w-auto object-contain ${className}`}
      loading="eager"
      decoding="async"
    />
  );
}
