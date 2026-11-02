import React from 'react';
export function TextField({ label, value, defaultValue, placeholder, onChange, theme = 'light', disabled = false, type = 'text', style }) {
  const [focus, setFocus] = React.useState(false);
  const dark = theme === 'dark';
  const bg = disabled ? (dark ? 'var(--black-50)' : 'var(--green-15)') : dark ? 'var(--black-30)' : 'var(--green-0)';
  const fg = disabled ? 'var(--black-10)' : dark ? 'var(--green-0)' : 'var(--black-120)';
  const ph = dark ? 'var(--black-20)' : 'var(--black-0)';
  const id = React.useId();
  return (
    <label htmlFor={id} style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      {label && <span style={{ font: 'var(--sm-regular)', color: dark ? 'var(--green-0)' : 'var(--black-120)', paddingLeft: 8 }}>{label}</span>}
      <input id={id} type={type} value={value} defaultValue={defaultValue} placeholder={placeholder} disabled={disabled}
        onChange={onChange} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ height: 44, boxSizing: 'border-box', padding: '0 16px', borderRadius: 'var(--radius-sm)', font: 'var(--body-regular)',
          background: bg, color: fg, outline: 'none', border: `2px solid ${focus && !disabled ? 'var(--green-100)' : 'transparent'}`,
          caretColor: dark ? 'var(--green-0)' : 'var(--black-120)', '--ph': ph }} />
      <style>{`#${CSS.escape(id)}::placeholder{color:${ph}}`}</style>
    </label>
  );
}
