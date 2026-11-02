import React from 'react';
import { PASSPORT_CLOSED, PASSPORT_OPEN } from './passportArt.js';
const W = 601, H = 400, SPINE = 300;
const EASE = 'cubic-bezier(.65,0,.35,1)';

/** Ventur.City passport — cover flips open on the spine to reveal the stamp spread. */
export function Passport({ open, defaultOpen = false, onToggle, width = 601, duration = 900, autoplay = false, autoplayDelay = 600, interactive = true, centerClosed = true, closedSrc = PASSPORT_CLOSED, openSrc = PASSPORT_OPEN, style }) {
  const [inner, setInner] = React.useState(defaultOpen);
  const isOpen = open ?? inner;
  const set = v => { if (open === undefined) setInner(v); onToggle && onToggle(v); };
  React.useEffect(() => {
    if (!autoplay) return;
    const t = setTimeout(() => set(true), autoplayDelay);
    return () => clearTimeout(t);
  }, [autoplay]);
  const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const d = reduce ? 0 : duration;
  const k = width / W;
  const shift = centerClosed && !isOpen ? -SPINE / 2 : 0;
  const face = { position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', overflow: 'hidden' };
  return (
    <div role={interactive ? 'button' : undefined} tabIndex={interactive ? 0 : undefined} aria-pressed={interactive ? isOpen : undefined}
      aria-label={isOpen ? 'Close passport' : 'Open passport'}
      onClick={interactive ? () => set(!isOpen) : undefined}
      onKeyDown={interactive ? e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); set(!isOpen); } } : undefined}
      style={{ width, height: H * k, position: 'relative', cursor: interactive ? 'pointer' : 'default', outline: 'none', flex: 'none', ...style }}>
      <div style={{ position: 'absolute', left: 0, top: 0, width: W, height: H, transform: `scale(${k}) translateX(${shift}px)`, transformOrigin: '0 0',
        transition: `transform ${d}ms ${EASE}`, perspective: 2200 }}>
        {/* right page (always under the cover) */}
        <div style={{ position: 'absolute', left: SPINE, top: 0, width: W - SPINE, height: H, overflow: 'hidden' }}>
          <img src={openSrc} alt="" draggable="false" style={{ position: 'absolute', left: -SPINE, top: 0, width: W, height: H, display: 'block' }} />
        </div>
        {/* cover leaf: front = closed cover, back = left page of the spread */}
        <div style={{ position: 'absolute', left: SPINE, top: 0, width: W - SPINE, height: H, transformStyle: 'preserve-3d', transformOrigin: '0 50%',
          transform: `rotateY(${isOpen ? -180 : 0}deg)`, transition: `transform ${d}ms ${EASE}` }}>
          <div style={{ ...face, filter: 'drop-shadow(0 10px 18px rgba(14,18,25,.25))', overflow: 'visible' }}>
            <img src={closedSrc} alt="Passport" draggable="false" style={{ width: '100%', height: '100%', display: 'block' }} />
          </div>
          <div style={{ ...face, transform: 'rotateY(180deg)' }}>
            <img src={openSrc} alt="" draggable="false" style={{ position: 'absolute', left: 0, top: 0, width: W, height: H, display: 'block', transform: 'translateX(0)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
