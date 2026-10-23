import React from 'react';

export function Callout({ label, tone = 'marigold', children, style, ...rest }) {
  const tones = {
    marigold: { background: 'var(--marigold-100)', border: '1px solid var(--marigold-200)', color: 'var(--clay-500)' },
    sky: { background: 'var(--sky-100)', border: '1px solid var(--sky-200)', color: 'var(--sky-500)' },
    vermilion: { background: 'var(--vermilion-100)', border: '1px solid var(--vermilion-300)', color: 'var(--vermilion-500)' }
  };
  return (
    <aside style={{ borderRadius: 'var(--radius-card)', padding: 'var(--space-5)', ...tones[tone], ...style }} {...rest}>
      {label ? <div style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>{label}</div> : null}
      <div style={{ font: 'var(--type-body)', color: 'inherit' }}>{children}</div>
    </aside>
  );
}
