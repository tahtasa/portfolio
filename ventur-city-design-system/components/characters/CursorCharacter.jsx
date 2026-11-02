import React from 'react';
const ARROW = 'M0.00312477 3.125C0.00312477 2.54465 0.164733 1.97577 0.469841 1.48209C0.774949 0.988417 1.2115 0.589457 1.73058 0.329917C2.24966 0.0703765 2.83076 -0.0394901 3.40877 0.0126286C3.98677 0.0647473 4.53885 0.276792 5.00313 0.625001L29.9969 19.3813C32.3969 21.1813 31.1219 25.0063 28.1219 25.0063H15.7875C15.3087 25.006 14.8362 25.1157 14.4065 25.327C13.9768 25.5383 13.6015 25.8456 13.3094 26.225L5.60313 36.2719C3.7875 38.6406 0 37.3563 0 34.3688L0.00312477 3.125Z';
const COLORS = { orange: '#EDBB4A', red: 'var(--red-50)', blue: 'var(--blue-70)', green: 'var(--green-100)' };

/** Multiplayer-style cursor character with a name pill that can expand into a typed comment bubble. */
export function CursorCharacter({ name = 'Name', color = 'orange', message, typeSpeed = 38, holdMs = 3000, onDone, style }) {
  const fill = COLORS[color] || color;
  const [typed, setTyped] = React.useState('');
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (!message) { setOpen(false); setTyped(''); return; }
    let i = 0, hide, t;
    setTyped(''); setOpen(true);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finish = () => { hide = setTimeout(() => { setOpen(false); setTimeout(() => { setTyped(''); onDone && onDone(); }, 220); }, holdMs); };
    if (reduce) { setTyped(message); finish(); }
    else t = setInterval(() => { i++; setTyped(message.slice(0, i)); if (i >= message.length) { clearInterval(t); finish(); } }, typeSpeed);
    return () => { clearInterval(t); clearTimeout(hide); };
  }, [message]);
  const typing = open && typed.length < (message || '').length;
  return (
    <div style={{ position: 'relative', display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', pointerEvents: 'none', ...style }}>
      <svg width="32" height="38" viewBox="-1 -1 33 39" aria-hidden="true" style={{ display: 'block', overflow: 'visible' }}>
        <path d={ARROW} fill={fill} stroke="var(--black-50)" strokeWidth="2" paintOrder="stroke" strokeLinejoin="round" />
      </svg>
      <div role="status" aria-live="polite" style={{ marginLeft: 16, marginTop: -1, background: fill, color: 'var(--black-120)', border: '1px solid var(--black-50)',
        borderRadius: 15, padding: open ? '6px 16px' : '0 16px', minHeight: 30, boxSizing: 'border-box', maxWidth: open ? 260 : 200,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'max-width 220ms ease, padding 220ms ease' }}>
        {open
          ? <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ font: 'var(--sm-bold)', opacity: 1 }}>{name}</span>
              <span style={{ font: 'var(--body-medium)', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{typed}{typing && <span style={{ display: 'inline-block', width: 2, height: '1em', background: 'currentColor', marginLeft: 1, verticalAlign: '-2px' }} />}</span>
            </div>
          : <span style={{ font: '500 24px/30px var(--font-sans)', whiteSpace: 'nowrap', marginTop: -2 }}>{name}</span>}
      </div>
    </div>
  );
}
