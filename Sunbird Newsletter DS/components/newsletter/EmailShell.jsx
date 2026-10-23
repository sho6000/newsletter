import React from 'react';

/** Centres an issue on the warm desk background at the 640px email measure. */
export function EmailShell({ preheader, flat = false, children, style, ...rest }) {
  return (
    <div style={{ background: 'var(--surface-card-muted)', padding: 'var(--space-7) var(--space-4)', minHeight: '100%', ...style }} {...rest}>
      {preheader ? <div style={{ font: 'var(--fw-regular) var(--fs-small)/1.4 var(--font-text)', color: 'var(--text-muted)', textAlign: 'center', maxWidth: 'var(--email-width)', margin: '0 auto var(--space-4)' }}>{preheader}</div> : null}
      <div style={{ maxWidth: 'var(--email-width)', margin: '0 auto', background: 'var(--surface-card)', borderRadius: flat ? 0 : 'var(--radius-lg)', overflow: 'hidden', boxShadow: flat ? 'none' : 'var(--shadow-raised)', border: flat ? '1px solid var(--border-hairline)' : 'none' }}>
        {children}
      </div>
    </div>
  );
}
