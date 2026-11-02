import React from 'react';
import { CategoryIcon } from './CategoryIcon.jsx';
export function CategoryPin({ category = 'food', partner = false, size = 56, style }) {
  const ring = Math.max(2, Math.round(size * 0.06));
  return (
    <span role="img" aria-label={(partner ? 'Partner ' : '') + category}
      style={{ width: size, height: size, borderRadius: '50%', boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: partner ? 'var(--blue-100)' : 'var(--black-30)', border: `${ring}px solid var(--green-10)`, color: 'var(--green-0)',
        boxShadow: '0 2px 6px rgba(14,18,25,.25)', flex: 'none', ...style }}>
      <CategoryIcon category={category} size={Math.round(size * 0.5)} />
    </span>
  );
}
