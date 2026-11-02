import React from 'react';
import { CategoryPin } from './CategoryPin.jsx';
const POSE = { front: 'translate(8%, 4%) rotate(4deg)', back: 'translate(-10%, -2%) rotate(-7deg)', out: 'translate(-48%, 6%) rotate(-16deg) scale(.96)' };
function Card({ src, w, pose, z, idx }) {
  const b = Math.round(w * 0.045);
  return (
    <div style={{ position: 'absolute', left: 0, top: 0, width: w, height: w * 4 / 3, boxSizing: 'border-box', padding: b, background: 'var(--green-10)',
      borderRadius: w * 0.07, boxShadow: '0 6px 16px rgba(14,18,25,.28)', transform: POSE[pose], zIndex: z,
      transition: 'transform 520ms cubic-bezier(.45,.05,.25,1)' }}>
      {src ? <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: w * 0.07 - b }} />
        : <div style={{ width: '100%', height: '100%', borderRadius: w * 0.07 - b, background: idx % 2 ? 'var(--green-20)' : 'var(--green-15)' }} />}
    </div>
  );
}
export function PhotoStackMarker({ photos = [], count, category = 'food', partner = false, width = 150, interval = 2800, animate = true, style }) {
  const n = photos.length; const total = count ?? n;
  const stacked = Math.max(n, total) > 1;
  // two physical cards (A,B) swap roles; the card going behind gets the next photo.
  const [st, setSt] = React.useState({ front: 0, imgs: [0, 1 % Math.max(n, 1)], phase: 'rest', next: 2 });
  React.useEffect(() => {
    if (!animate || !stacked || n < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let t1, t2;
    const id = setInterval(() => {
      setSt(s => ({ ...s, phase: 'out' }));
      t1 = setTimeout(() => setSt(s => ({ ...s, phase: 'tuck', front: 1 - s.front })), 260);
      t2 = setTimeout(() => setSt(s => {
        const imgs = s.imgs.slice(); imgs[1 - s.front] = s.next % n;
        return { ...s, phase: 'rest', imgs, next: s.next + 1 };
      }), 820);
    }, interval);
    return () => { clearInterval(id); clearTimeout(t1); clearTimeout(t2); };
  }, [animate, stacked, n, interval]);
  const h = width * 4 / 3;
  const poseOf = slot => {
    const isFront = st.front === slot;
    if (st.phase === 'out' && isFront) return 'out';
    if (st.phase === 'tuck' && !isFront) return 'out';
    return isFront ? 'front' : 'back';
  };
  const zOf = slot => (st.front === slot ? 2 : 1);
  const badge = Math.round(width * 0.4), pin = Math.round(width * 0.62);
  return (
    <div style={{ position: 'relative', width: width * 1.25, height: h * 1.12, flex: 'none', ...style }}>
      <div style={{ position: 'absolute', left: width * 0.12, top: h * 0.06, width, height: h }}>
        {stacked && <Card src={photos[st.imgs[1]] ?? photos[0]} w={width} pose={poseOf(1)} z={zOf(1)} idx={1} />}
        <Card src={photos[st.imgs[0]]} w={width} pose={stacked ? poseOf(0) : 'front'} z={stacked ? zOf(0) : 2} idx={0} />
      </div>
      {total > 1 && <div style={{ position: 'absolute', right: 0, top: 0, zIndex: 3, width: badge, height: badge, borderRadius: '50%', background: 'var(--green-10)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', font: `400 ${Math.round(badge * 0.46)}px/1 var(--font-sans)`, color: 'var(--black-120)',
        boxShadow: '0 2px 6px rgba(14,18,25,.2)' }}>{total > 99 ? '99+' : total}</div>}
      <CategoryPin category={category} partner={partner} size={pin} style={{ position: 'absolute', left: 0, bottom: 0, zIndex: 3 }} />
    </div>
  );
}
