import React from 'react';

const base = {
  display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
  font: 'var(--fw-semibold) var(--fs-small)/1 var(--font-display)',
  letterSpacing: '0.01em', borderRadius: 'var(--radius-button)',
  border: '1px solid transparent', cursor: 'pointer', textDecoration: 'none',
  transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)'
};
const sizes = {
  sm: { padding: '8px 16px', fontSize: 'var(--fs-eyebrow)' },
  md: { padding: '12px 24px' },
  lg: { padding: '16px 32px', fontSize: 'var(--fs-body)' }
};
const variants = {
  primary: { background: 'var(--clay-400)', color: 'var(--paper-0)', borderColor: 'var(--clay-400)' },
  secondary: { background: 'transparent', color: 'var(--clay-400)', borderColor: 'var(--clay-400)' },
  ghost: { background: 'transparent', color: 'var(--text-link)', borderColor: 'transparent', padding: '8px 0', borderRadius: 'var(--radius-sm)' },
  alert: { background: 'var(--vermilion-400)', color: 'var(--paper-0)', borderColor: 'var(--vermilion-400)' }
};

export function Button({ variant = 'primary', size = 'md', href, disabled, iconAfter, children, style, ...rest }) {
  const Tag = href ? 'a' : 'button';
  const s = { ...base, ...sizes[size], ...variants[variant], ...(disabled ? { opacity: 0.45, cursor: 'not-allowed' } : null), ...style };
  return (
    <Tag href={href} disabled={!href && disabled ? true : undefined} style={s} {...rest}>
      {children}
      {iconAfter ? <span aria-hidden="true" style={{ fontSize: '1.1em', lineHeight: 0 }}>{iconAfter}</span> : null}
    </Tag>
  );
}
