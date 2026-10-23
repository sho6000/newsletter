import React from 'react';

export function StatBlock({ stats = [], columns = 3, style, ...rest }) {
  const palette = ['var(--node-a)', 'var(--node-b)', 'var(--node-c)', 'var(--node-d)'];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))`, gap: 'var(--space-4)', ...style }} {...rest}>
      {stats.map((s, i) => (
        <div key={i} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-card)', padding: 'var(--space-4)' }}>
          <div style={{ width: 10, height: 10, borderRadius: 'var(--radius-node)', background: palette[i % palette.length], marginBottom: 'var(--space-3)' }} />
          <div style={{ font: 'var(--fw-bold) var(--fs-h1)/1.05 var(--font-display)', color: 'var(--text-display)' }}>{s.value}</div>
          <div style={{ font: 'var(--fw-regular) var(--fs-small)/1.4 var(--font-text)', color: 'var(--text-body)', marginTop: 'var(--space-2)' }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
