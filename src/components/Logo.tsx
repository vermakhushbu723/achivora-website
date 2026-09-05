/**
 * Achivora identity mark.
 *
 * The glyph is an "A" whose right stroke breaks out of the letterform and
 * continues upward as an arrow — "achieve / rise". The crossbar is cut short
 * on the right so the arrow reads as motion rather than a closed triangle.
 * A sky-blue spark sits at the apex as the secondary-colour accent.
 *
 * Drawn as SVG so it stays crisp at any size, follows the brand gradient,
 * and can invert for dark backgrounds without shipping a second file.
 */

let gradientSeq = 0;

export function LogoMark({
  className = 'h-9 w-9',
  variant = 'brand',
}: {
  className?: string;
  /** `brand` = silk-green gradient tile · `white` = flat white on a dark ground */
  variant?: 'brand' | 'white';
}) {
  // Unique gradient ids so multiple marks on one page never collide.
  const id = `achivora-logo-${(gradientSeq += 1)}`;
  const white = variant === 'white';

  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Achivora"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`${id}-tile`} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2f9e6f" />
          <stop offset="1" stopColor="#1c7a55" />
        </linearGradient>
      </defs>

      {/* Rounded tile */}
      <rect
        width="48"
        height="48"
        rx="13"
        fill={white ? '#ffffff' : `url(#${id}-tile)`}
      />

      {/* Left stroke of the A */}
      <path
        d="M13 35.5 22.4 13.6a1.8 1.8 0 0 1 3.3 0l2.4 5.6"
        stroke={white ? '#2f9e6f' : '#ffffff'}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right stroke, continuing past the apex as an arrow */}
      <path
        d="M24 35.5 31.4 18.4 38 24.8"
        stroke={white ? '#2f9e6f' : '#ffffff'}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Crossbar, deliberately short on the right */}
      <path
        d="M18.4 28.4h8.2"
        stroke={white ? '#2f9e6f' : '#ffffff'}
        strokeWidth="3.4"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Sky-blue spark at the arrow tip */}
      <circle cx="38" cy="24.8" r="3.1" fill={white ? '#29abe2' : '#29abe2'} />
    </svg>
  );
}

/** Mark plus wordmark, used in the header and footer. */
export default function Logo({
  onDark = false,
  className = '',
  markClassName = 'h-9 w-9',
  textClassName = 'text-xl',
}: {
  onDark?: boolean;
  className?: string;
  markClassName?: string;
  textClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={`${markClassName} shrink-0`} variant="brand" />
      <span
        className={`font-extrabold tracking-tight leading-none ${textClassName} ${
          onDark ? 'text-white' : 'text-text-main'
        }`}
      >
        Achi<span className="text-primary">vora</span>
      </span>
    </span>
  );
}
