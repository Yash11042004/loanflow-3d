import { Suspense, lazy, useEffect, useState } from "react";

const HeroScene = lazy(() => import("../three/HeroScene"));

/**
 * Lazy, client-only 3D backdrop.
 * Skipped entirely on small screens and when reduced motion is preferred.
 * A soft gradient fallback keeps the hero intact if 3D never loads.
 */
export function HeroCanvas() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wideEnough = window.matchMedia("(min-width: 768px)").matches;
    if (reduced || !wideEnough) return;
    const id = window.setTimeout(() => setEnabled(true), 350);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-royal/25 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-cyan/20 blur-3xl" />
      {enabled && (
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      )}
    </div>
  );
}
