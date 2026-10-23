import React from 'react';

export function SectionHeading({ eyebrow, title, dot = 'var(--node-a)', style, ...rest }) {
  return (
    <div style={{ ...style }} {...rest}>
      {eyebrow ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
          <span style={{ width: 8, height: 8, borderRadius: 'var(--radius-node)', background: dot }} />
          <span style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--clay-400)' }}>{eyebrow}</span>
        </div>
      ) : null}
      <h2 style={{ font: 'var(--type-h2)', letterSpacing: 'var(--ls-heading)', color: 'var(--text-heading)', margin: 0 }}>{title}</h2>
    </div>
  );
}
