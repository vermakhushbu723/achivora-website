import { photo, type PhotoKey } from '@/constants/media';

/**
 * Photographic layer for a page hero.
 *
 * It sits between the section's gradient and its content: the picture
 * carries the subject, a scrim keeps the headline readable, and a slow
 * pan stops the still from looking like a flat backdrop. Drop it as the
 * first child of any `relative … overflow-hidden` hero section.
 */
export default function HeroBackdrop({
  image,
  intensity = 'medium',
  pan = true,
}: {
  image: PhotoKey;
  intensity?: 'soft' | 'medium' | 'strong';
  pan?: boolean;
}) {
  const scrim = {
    soft: 'from-black/70 via-black/55 to-black/70',
    medium: 'from-black/85 via-black/70 to-black/80',
    strong: 'from-black/92 via-black/85 to-black/90',
  }[intensity];

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <img
        src={photo(image, 1920)}
        alt=""
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-cover ${pan ? 'hero-pan' : ''}`}
      />

      {/* Readability scrim + a brand wash so the photo joins the palette */}
      <div className={`absolute inset-0 bg-gradient-to-br ${scrim}`} />
      <div className="absolute inset-0 bg-primary/15 mix-blend-overlay" />
    </div>
  );
}
