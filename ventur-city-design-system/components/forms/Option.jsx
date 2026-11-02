import React from 'react';
export function Option({ icon, children, disabled = false, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" disabled={disabled} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 0, padding: 0, textAlign: 'left',
        font: 'var(--body-regular)', color: disabled ? 'var(--black-10)' : hover ? 'var(--black-100)' : 'var(--black-120)',
        cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>
      {icon}<span>{children}</span>
    </button>
  );
}
