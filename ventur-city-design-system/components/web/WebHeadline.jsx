import React from 'react';
const BAR = {
  dark:  { bg: 'var(--black-120)', fg: 'var(--green-0)' },
  brand: { bg: 'var(--green-100)', fg: 'var(--black-120)' },
};
const SUB_FONT = '600 18px/24px var(--font-sans)';
const EASE = 'cubic-bezier(.65,0,.35,1)';

/** WEBSITE ONLY. Uppercase display title + highlight-bar subtitle lines. Never use for body copy or in the mobile app. */
export function WebHeadline({ title, lines = [], titleColor = 'light', size = 'lg', as = 'h2', animate = false, wipeSpeed = 900, startDelay = 0, replayKey, style }) {
  const T = as;
  const titleFont = size === 'xl' ? 'var(--display-xl)' : size === 'md' ? 'var(--display-md)' : 'var(--display-lg)';
  const subs = lines.map((l, i) => typeof l === 'string' ? { text: l, tone: i === 0 ? 'dark' : 'brand' } : l);
  const root = React.useRef(null), measureRef = React.useRef(null);
  const [layout, setLayout] = React.useState(null); // [[{text,w}]] per subtitle
  const [play, setPlay] = React.useState(!animate);
  const key = subs.map(s => s.text + s.tone).join('|');

  React.useLayoutEffect(() => {
    if (layout || !measureRef.current) return;
    const out = [...measureRef.current.querySelectorAll('[data-sub]')].map(sub => {
      const rows = [];
      sub.querySelectorAll('[data-w]').forEach(w => {
        const r = w.getBoundingClientRect(); const last = rows[rows.length - 1];
        if (!last || Math.abs(r.top - last.top) > 4) rows.push({ top: r.top, left: r.left, right: r.right, words: [w.textContent] });
        else { last.right = r.right; last.words.push(w.textContent); }
      });
      return rows.map(r => ({ text: r.words.join('').trim(), w: r.right - r.left + 32 }));
    });
    setLayout(out);
  });
  React.useEffect(() => { setLayout(null); }, [key]);
  React.useEffect(() => {
    const el = root.current; if (!el) return;
    let w = el.clientWidth;
    const ro = new ResizeObserver(() => { if (el.clientWidth !== w) { w = el.clientWidth; setLayout(null); } });
    ro.observe(el); return () => ro.disconnect();
  }, []);
  React.useEffect(() => {
    if (!animate) { setPlay(true); return; }
    setPlay(false);
    const el = root.current; let raf;
    const io = new IntersectionObserver(es => {
      if (es[0].isIntersecting) { io.disconnect(); raf = requestAnimationFrame(() => requestAnimationFrame(() => setPlay(true))); }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [animate, replayKey]);

  const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let t = startDelay;
  return (
    <div ref={root} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, ...style }}>
      <T style={{ margin: '0 0 8px', font: titleFont, letterSpacing: '0.01em', textTransform: 'uppercase', textWrap: 'balance',
        color: titleColor === 'dark' ? 'var(--black-120)' : 'var(--green-0)' }}>{title}</T>
      {!layout
        ? <div ref={measureRef} style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: 8, visibility: animate ? 'hidden' : 'visible' }}>
            {subs.map((s, i) => { const b = BAR[s.tone] || BAR.dark; const words = s.text.split(/(\s+)/).filter(Boolean);
              return <div key={i} data-sub="" style={{ font: SUB_FONT, maxWidth: 'calc(100% - 32px)' }}>
                <span style={{ background: b.bg, color: b.fg }}>
                  {words.map((w, j) => <span key={j} data-w="">{w}</span>)}</span></div>; })}
          </div>
        : layout.map((rows, i) => { const b = BAR[subs[i]?.tone] || BAR.dark;
            return <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
              {rows.map((r, j) => {
                const dur = Math.max(260, (r.w / wipeSpeed) * 1000), delay = t; t += dur;
                const shown = play || reduce;
                return <span key={j} style={{ display: 'inline-block', background: b.bg, color: b.fg, font: SUB_FONT, padding: '4px 16px', whiteSpace: 'nowrap',
                  clipPath: shown ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
                  transition: animate && !reduce ? `clip-path ${dur}ms ${EASE} ${delay}ms` : 'none' }}>{r.text}</span>;
              })}
            </div>; })}
    </div>
  );
}
