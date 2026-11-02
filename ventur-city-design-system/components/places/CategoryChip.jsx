import React from 'react';
import { CategoryIcon, CATEGORIES } from './CategoryIcon.jsx';
export function CategoryChip({ category = 'food', label, partner = false, selected = false, onClick, style }) {
  const c = CATEGORIES[category] || CATEGORIES.food;
  const bg = partner ? 'var(--blue-100)' : 'var(--black-30)';
  const fg = partner ? 'var(--black-120)' : 'var(--green-0)';
  return (
    <button type="button" onClick={onClick} aria-pressed={selected}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 48, padding: '0 20px 0 16px', borderRadius: 'var(--radius-round)',
        background: bg, color: fg, border: 0, font: '500 18px/24px var(--font-sans)', cursor: onClick ? 'pointer' : 'default', whiteSpace: 'nowrap',
        boxShadow: selected ? '0 0 0 2px var(--green-100)' : 'none', ...style }}>
      <CategoryIcon category={category} size={24} />{label || c.label}
    </button>
  );
}
