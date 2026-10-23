import React from 'react';

/** Constellation rule: the dotted path + node motif taken from the Sunbird deck backgrounds. */
export function Divider({ variant = 'rule', nodes = 3, style, ...rest }) {
  if (variant === 'rule') {
    return <hr style={{ border: 0, borderTop: 'var(--rule-thickness) solid var(--border-rule)', margin: 0, opacity: 0.5, ...style }} {...rest} />;
  }
  if (variant === 'hairline') {
    return <hr style={{ border: 0, borderTop: '1px solid var(--border-hairline)', margin: 0, ...style }} {...rest} />;
  }
  const palette = ['var(--node-a)', 'var(--node-b)', 'var(--node-c)', 'var(--node-d)'];
  return (
    <div role="separator" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', ...style }} {...rest}>
      <span style={{ flex: 1, borderTop: '2px dotted var(--ochre-300)' }} />
      {Array.from({ length: nodes }).map((_, i) => (
        <span key={i} style={{ width: 8 + (i % 2) * 4, height: 8 + (i % 2) * 4, borderRadius: 'var(--radius-node)', background: palette[i % palette.length] }} />
      ))}
      <span style={{ flex: 1, borderTop: '2px dotted var(--ochre-300)' }} />
    </div>
  );
}
