import React from 'react';
const ARROW = 'M0.00312477 3.125C0.00312477 2.54465 0.164733 1.97577 0.469841 1.48209C0.774949 0.988417 1.2115 0.589457 1.73058 0.329917C2.24966 0.0703765 2.83076 -0.0394901 3.40877 0.0126286C3.98677 0.0647473 4.53885 0.276792 5.00313 0.625001L29.9969 19.3813C32.3969 21.1813 31.1219 25.0063 28.1219 25.0063H15.7875C15.3087 25.006 14.8362 25.1157 14.4065 25.327C13.9768 25.5383 13.6015 25.8456 13.3094 26.225L5.60313 36.2719C3.7875 38.6406 0 37.3563 0 34.3688L0.00312477 3.125Z';
const COLORS = { orange: '#EDBB4A', red: 'var(--red-50)', blue: 'var(--blue-70)', green: 'var(--green-100)' };
const NOTE_BG = { orange: 'var(--orange-50)', red: 'var(--red-50)', blue: 'var(--blue-50)', green: 'var(--green-70)' };
const EASE = '220ms ease';
const W = 350;

function Slot({ src, style }) {
  return src
    ? <img src={src} alt="" style={{ display: 'block', objectFit: 'cover', ...style }} />
    : <div style={{ background: 'var(--green-15)', ...style }} />;
}

/** Guestbook sequence: cursor types a note → note expands (optional photos) → cursor leaves → profile photo pops in as the leave-mark. */
export function GuestbookNote({ name = 'dana_s', color = 'green', message = '', avatarSrc, photos = [], typeSpeed = 38, postDelay = 1200, replayKey, onDone, style }) {
  const arrow = COLORS[color] || color, bg = NOTE_BG[color] || arrow;
  const [phase, setPhase] = React.useState('idle'); // idle → typing → note → posted
  const [typed, setTyped] = React.useState('');
  const [box, setBox] = React.useState(null); // {w,h} explicit size while morphing
  const shell = React.useRef(null), noteInner = React.useRef(null);
  const hasPhotos = photos && photos.length > 0;

  React.useEffect(() => {
    if (!message) { setPhase('idle'); return; }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timers = []; const later = (fn, ms) => timers.push(setTimeout(fn, ms));
    setBox(null); setTyped(''); setPhase('typing');
    const expand = () => {
      const el = shell.current; const from = el ? { w: el.offsetWidth, h: el.offsetHeight } : { w: W, h: 30 };
      setBox(from); setPhase('note');
      requestAnimationFrame(() => requestAnimationFrame(() => {
        const h = noteInner.current ? noteInner.current.offsetHeight : 141;
        setBox({ w: W, h });
        later(() => { setBox(null); }, 260);
      }));
      later(() => { setPhase('posted'); later(() => onDone && onDone(), 400); }, 220 + postDelay);
    };
    if (reduce) { setTyped(message); later(expand, 300); }
    else {
      let i = 0;
      const t = setInterval(() => { i++; setTyped(message.slice(0, i)); if (i >= message.length) { clearInterval(t); later(expand, 420); } }, typeSpeed);
      timers.push(t);
    }
    return () => timers.forEach(x => { clearTimeout(x); clearInterval(x); });
  }, [message, replayKey]);

  if (phase === 'idle') return null;
  const note = phase === 'note' || phase === 'posted';
  const posted = phase === 'posted';
  const typing = phase === 'typing' && typed.length < message.length;

  return (
    <div style={{ position: 'relative', width: W + 10, paddingTop: 30, ...style }}>
      <svg width="32" height="38" viewBox="-1 -1 33 39" aria-hidden="true"
        style={{ position: 'absolute', left: 0, top: 0, zIndex: 2, overflow: 'visible', transition: `transform ${EASE}, opacity ${EASE}`,
          transform: posted ? 'translate(-14px,-18px)' : 'none', opacity: posted ? 0 : 1 }}>
        <path d={ARROW} fill={arrow} stroke="var(--black-50)" strokeWidth="2" paintOrder="stroke" strokeLinejoin="round" />
      </svg>
      <div ref={shell} role="status" aria-live="polite"
        style={{ marginLeft: 10, position: 'relative', overflow: 'hidden', boxSizing: 'border-box', background: bg, color: 'var(--black-120)',
          border: '1.5px solid var(--black-50)', borderRadius: note ? 20 : 15,
          width: box ? box.w : note ? W : 'fit-content', maxWidth: W, height: box ? box.h : note ? 'auto' : 30,
          transition: `width ${EASE}, height ${EASE}, border-radius ${EASE}` }}>
        {!note
          ? <div style={{ height: 27, padding: '0 14px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', font: 'var(--sm-medium)', whiteSpace: 'nowrap', overflow: 'hidden',
              maskImage: 'linear-gradient(90deg, transparent 0, #000 14px)', WebkitMaskImage: 'linear-gradient(90deg, transparent 0, #000 14px)' }}>
              <span style={{ flex: 'none' }}>{typed}</span>{typing && <span style={{ display: 'inline-block', width: 1.5, height: 14, background: 'currentColor', marginLeft: 1, flex: 'none' }} />}
            </div>
          : <div ref={noteInner} style={{ width: W - 3, minHeight: hasPhotos ? 138 : 0, boxSizing: 'border-box', position: 'relative', padding: '7px 16px 16px 7px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, height: 23 }}>
                <span style={{ width: 23, height: 23, flex: 'none', borderRadius: '50%', boxSizing: 'border-box', border: '1px solid var(--black-50)', overflow: 'hidden', background: 'var(--green-15)',
                  transform: posted ? 'scale(1)' : 'scale(0)', transition: 'transform 260ms cubic-bezier(.34,1.56,.64,1)' }}>
                  {avatarSrc && <img src={avatarSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />}
                </span>
                <span style={{ font: '700 12px/16px var(--font-sans)' }}>{name}</span>
              </div>
              <p style={{ margin: '10px 0 0 9px', maxWidth: hasPhotos ? 168 : 'none', font: '400 12px/16px var(--font-sans)', textWrap: 'pretty' }}>{message}</p>
              {hasPhotos && photos.slice(0, 2).map((p, i, arr) => {
                const back = arr.length > 1 && i === 0;
                return <Slot key={i} src={p} style={{ position: 'absolute', width: 132, height: 90, borderRadius: 12, boxSizing: 'border-box', border: '3px solid var(--green-5)',
                  right: back ? 16 : 6, top: back ? 48 : 40, zIndex: i + 1,
                  boxShadow: '0 1px 2px rgba(0,0,0,.3), 0 2px 6px 2px rgba(0,0,0,.15)',
                  transform: `rotate(${back ? -9 : -3}deg)`, animation: `vcNotePhoto 220ms ease ${120 + i * 120}ms both` }} />;
              })}
            </div>}
      </div>
      <style>{'@keyframes vcNotePhoto{from{opacity:0;margin-top:10px}to{opacity:1;margin-top:0}}'}</style>
    </div>
  );
}
