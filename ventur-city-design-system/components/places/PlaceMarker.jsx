import React from 'react';
export function PlaceMarker({ src, alt = '', size = 140, style }) {
  const border = Math.round(size * 0.055);
  return (
    <div style={{ width: size, height: size, boxSizing: 'border-box', padding: border, background: 'var(--green-0)', borderRadius: size * 0.2,
      boxShadow: '0 4px 12px rgba(14,18,25,.18)', flex: 'none', ...style }}>
      {src ? <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: size * 0.2 - border }} />
        : <div style={{ width: '100%', height: '100%', borderRadius: size * 0.2 - border, background: 'var(--green-15)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: 'var(--sm-medium)', color: 'var(--black-10)' }}>Place photo</div>}
    </div>
  );
}
