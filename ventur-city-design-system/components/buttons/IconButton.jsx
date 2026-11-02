import React from 'react';
const V = {
  primary:   { bg: 'var(--green-100)', hover: 'var(--green-70)', dis: 'var(--green-50)', fg: 'var(--black-120)', disFg: 'var(--black-10)' },
  secondary: { bg: 'var(--black-30)', hover: 'var(--black-20)', dis: 'var(--black-30)', fg: 'var(--green-0)', disFg: 'var(--black-10)' },
  tertiary:  { bg: 'var(--green-5)', hover: 'var(--green-10)', dis: 'var(--green-5)', fg: 'var(--black-120)', disFg: 'var(--black-10)' },
  ghost:     { bg: 'transparent', hover: 'transparent', dis: 'transparent', fg: 'var(--black-120)', disFg: 'var(--black-10)' },
};
const S = { sm: { box: 24, r: 'var(--radius-sm)' }, md: { box: 40, r: 'var(--radius-md)' }, lg: { box: 54, r: 'var(--radius-lg)' } };
export function IconButton({ variant = 'tertiary', size = 'md', disabled = false, label, children, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const v = V[variant] || V.tertiary; const s = S[size] || S.md;
  return (
    <button type="button" aria-label={label} title={label} disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ width: s.box, height: s.box, flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: disabled ? v.dis : hover ? v.hover : v.bg, color: disabled ? v.disFg : v.fg, border: 0, borderRadius: s.r, padding: 0,
        cursor: disabled ? 'not-allowed' : 'pointer', transition: 'background 120ms ease', ...style }}>
      {children}
    </button>
  );
}
