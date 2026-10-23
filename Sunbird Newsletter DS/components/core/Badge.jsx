import React from 'react';

const tones = {
  clay: { background: 'var(--clay-400)', color: 'var(--paper-0)' },
  marigold: { background: 'var(--marigold-300)', color: 'var(--clay-500)' },
  sky: { background: 'var(--sky-300)', color: 'var(--paper-0)' },
  vermilion: { background: 'var(--vermilion-400)', color: 'var(--paper-0)' },
  outline: { background: 'transparent', color: 'var(--clay-400)', boxShadow: 'inset 0 0 0 1px var(--clay-400)' }
};

export function Badge({ tone = 'marigold', children, style, ...rest }) {
  return (
    <span style={{ display: 'inline-block', padding: '4px 10px', borderRadius: 'var(--radius-pill)',
      font: 'var(--type-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase',
      ...tones[tone], ...style }} {...rest}>{children}</span>
  );
}
