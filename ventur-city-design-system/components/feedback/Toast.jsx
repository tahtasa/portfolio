import React from 'react';
const T = {
  neutral: { bg: 'var(--black-20)', fg: 'var(--green-0)' },
  success: { bg: 'var(--green-70)', fg: 'var(--black-120)' },
  warn:    { bg: 'var(--orange-70)', fg: 'var(--black-120)' },
  danger:  { bg: 'var(--red-50)', fg: 'var(--black-120)' },
};
export function Toast({ tone = 'neutral', icon, children, actionLabel = 'Dismiss', onAction, style }) {
  const t = T[tone] || T.neutral;
  return (
    <div role="status" style={{ display: 'flex', alignItems: 'center', gap: 10, minHeight: 56, boxSizing: 'border-box', padding: '0 24px 0 18px',
      borderRadius: 'var(--radius-md)', background: t.bg, color: t.fg, boxShadow: 'var(--shadow-toast)', ...style }}>
      {icon}
      <span style={{ flex: 1, font: 'var(--body-regular)', padding: '8px 0' }}>{children}</span>
      {actionLabel && <button type="button" onClick={onAction} style={{ background: 'none', border: 0, padding: 0, color: 'inherit',
        font: '700 14px/16px var(--font-sans)', cursor: 'pointer' }}>{actionLabel}</button>}
    </div>
  );
}
