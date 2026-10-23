import React from 'react';

const tones = {
  paper: { background: 'var(--surface-card)', color: 'var(--text-body)', border: '1px solid var(--border-hairline)' },
  marigold: { background: 'var(--marigold-100)', color: 'var(--clay-500)', border: '1px solid var(--marigold-200)' },
  clay: { background: 'var(--clay-400)', color: 'var(--paper-0)', border: '1px solid var(--clay-400)' },
  sky: { background: 'var(--sky-100)', color: 'var(--sky-500)', border: '1px solid var(--sky-200)' },
  vermilion: { background: 'var(--vermilion-400)', color: 'var(--paper-0)', border: '1px solid var(--vermilion-400)' }
};

export function Card({ tone = 'paper', raised = false, padding = 'var(--space-5)', children, style, ...rest }) {
  return (
    <div style={{ borderRadius: 'var(--radius-card)', padding, boxShadow: raised ? 'var(--shadow-raised)' : 'var(--shadow-card)', ...tones[tone], ...style }} {...rest}>
      {children}
    </div>
  );
}
