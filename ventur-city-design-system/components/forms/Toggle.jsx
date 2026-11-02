import React from 'react';
export function Toggle({ checked, defaultChecked = false, onChange, disabled = false, label, style }) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked ?? inner;
  const flip = () => { if (disabled) return; const n = !on; if (checked === undefined) setInner(n); onChange && onChange(n); };
  const track = disabled ? 'var(--black-0)' : on ? 'var(--green-100)' : 'var(--black-30)';
  return (
    <button type="button" role="switch" aria-checked={on} aria-label={label} disabled={disabled} onClick={flip}
      style={{ width: 50, height: 28, borderRadius: 'var(--radius-round)', background: track, border: 0, padding: 0, position: 'relative',
        cursor: disabled ? 'not-allowed' : 'pointer', transition: 'background 160ms ease', flex: 'none', ...style }}>
      <span style={{ position: 'absolute', top: 3, left: on ? 25 : 3, width: 22, height: 22, borderRadius: 8, background: 'var(--green-0)',
        transition: 'left 160ms cubic-bezier(.3,.7,.4,1)' }} />
    </button>
  );
}
