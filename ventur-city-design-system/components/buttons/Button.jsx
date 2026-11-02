import React from 'react';
const VARIANTS = {
  primary:   { bg: 'var(--green-100)', hover: 'var(--green-70)', dis: 'var(--green-50)', fg: 'var(--black-120)', disFg: 'var(--black-10)' },
  secondary: { bg: 'var(--black-30)', hover: 'var(--black-20)', dis: 'var(--black-50)', fg: 'var(--green-0)', disFg: 'var(--black-10)' },
  tertiary:  { bg: 'var(--green-15)', hover: 'var(--green-10)', dis: 'var(--green-15)', fg: 'var(--black-120)', disFg: 'var(--black-10)' },
  ghost:     { bg: 'transparent', hover: 'transparent', dis: 'transparent', fg: 'var(--black-120)', hoverFg: 'var(--black-100)', disFg: 'var(--black-10)' },
  'ghost-light': { bg: 'transparent', hover: 'transparent', dis: 'transparent', fg: 'var(--green-0)', hoverFg: 'var(--green-5)', disFg: 'var(--black-10)' },
  'ghost-brand': { bg: 'transparent', hover: 'transparent', dis: 'transparent', fg: 'var(--green-100)', hoverFg: 'var(--green-70)', disFg: 'var(--green-50)' },
};
const SIZES = {
  sm: { h: 24, px: 8, gap: 4, font: 'var(--sm-bold)', r: 'var(--radius-sm)' },
  lg: { h: 40, px: 16, gap: 8, font: 'var(--body-bold)', r: 'var(--radius-md)' },
};
export function Button({ variant = 'primary', size = 'lg', iconLeft, iconRight, fullWidth = false, social = false, disabled = false, children, onClick, type = 'button', style }) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.lg;
  const bg = disabled ? v.dis : hover ? v.hover : v.bg;
  const fg = disabled ? v.disFg : hover && v.hoverFg ? v.hoverFg : v.fg;
  const isGhost = variant.startsWith('ghost');
  return (
    <button type={type} disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: fullWidth || social ? 'flex' : 'inline-flex', width: fullWidth || social ? '100%' : undefined,
        alignItems: 'center', justifyContent: 'center', gap: s.gap, height: s.h,
        padding: social ? '0 24px' : isGhost ? 0 : `0 ${s.px}px`, position: 'relative',
        background: bg, color: fg, font: s.font, border: 0, borderRadius: s.r,
        cursor: disabled ? 'not-allowed' : 'pointer', transition: 'background 120ms ease, color 120ms ease',
        whiteSpace: 'nowrap', boxSizing: 'border-box', ...style,
      }}>
      {social && iconLeft ? <span style={{ position: 'absolute', left: 24, display: 'inline-flex' }}>{iconLeft}</span> : iconLeft}
      <span>{children}</span>
      {iconRight}
    </button>
  );
}
