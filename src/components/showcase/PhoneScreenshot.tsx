import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Phone chrome around a real screenshot.
 *
 * Shipped product screens beat a generated mockup, but a missing file must
 * not leave a blank frame on the page — so anything other than a decoded
 * image renders `fallback` (the generated mockup) instead, and screenshots
 * can be added one at a time.
 *
 * `onError` alone is not enough: the dev server answers an unknown path
 * with index.html rather than a 404, so the request succeeds and the image
 * simply never decodes. A load handler that checks the decoded size, plus a
 * short deadline, covers that and a stalled request alike.
 */
export default function PhoneScreenshot({
  src,
  alt,
  fallback,
  onFallback,
  className = '',
}: {
  src: string;
  alt: string;
  fallback: ReactNode;
  /** Called once when the screenshot cannot be loaded. */
  onFallback?: () => void;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const giveUp = () => {
    setFailed(true);
    onFallback?.();
  };

  useEffect(() => {
    if (failed) return;
    const deadline = window.setTimeout(() => {
      const img = imgRef.current;
      // Decoded width is the only reliable "this is really an image" signal.
      if (!img || !img.complete || img.naturalWidth === 0) giveUp();
    }, 2500);
    return () => window.clearTimeout(deadline);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, failed]);

  if (failed) return <>{fallback}</>;

  return (
    <div
      className={`relative w-[232px] shrink-0 rounded-[2.2rem] bg-[#1b1d21] p-[9px] shadow-card-hover ${className}`}
    >
      {/* Side buttons */}
      <span className="absolute -left-[2px] top-24 w-[3px] h-8 rounded-l bg-[#1b1d21]" />
      <span className="absolute -right-[2px] top-20 w-[3px] h-12 rounded-r bg-[#1b1d21]" />

      <div className="relative h-[470px] rounded-[1.7rem] bg-white overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#1b1d21] rounded-b-xl z-20" />

        <img
          ref={imgRef}
          src={src}
          alt={alt}
          decoding="async"
          onError={giveUp}
          onLoad={(e) => {
            if (e.currentTarget.naturalWidth === 0) giveUp();
          }}
          /* Anchored to the top: a tall screenshot should crop at the fold
             rather than centre on the middle of the list. */
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}
