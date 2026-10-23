import React from 'react';

const NODES = ['var(--node-a)', 'var(--node-b)', 'var(--node-d)', 'var(--node-c)'];

/** The attribute strip that closes an issue, strung together like the brand's constellation. */
export function TaglineStrip({ items = ['Open source', 'Modular', 'Scalable', 'Extensible'], tone = 'plain', style, ...rest }) {
  const tones = {
    clay: { background: 'var(--clay-400)', color: 'var(--paper-0)', padding: 'var(--space-3) var(--space-5)', borderRadius: 'var(--radius-pill)' },
    marigold: { background: 'var(--marigold-300)', color: 'var(--clay-500)', padding: 'var(--space-3) var(--space-5)', borderRadius: 'var(--radius-pill)' },
    plain: { background: 'transparent', color: 'var(--clay-400)', padding: 0 }
  };
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 'var(--space-2)', ...tones[tone], ...style }} {...rest}>
      {items.map((it, i) => (
        <React.Fragment key={it}>
          {i > 0 ? (
            <span aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <span style={{ width: 12, borderTop: '2px dotted currentColor', opacity: 0.5 }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: NODES[i % NODES.length] }} />
              <span style={{ width: 12, borderTop: '2px dotted currentColor', opacity: 0.5 }} />
            </span>
          ) : null}
          <span style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase' }}>{it}</span>
        </React.Fragment>
      ))}
    </div>
  );
}
