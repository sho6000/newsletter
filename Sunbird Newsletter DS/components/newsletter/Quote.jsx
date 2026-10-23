import React from 'react';

export function Quote({ children, attribution, role, style, ...rest }) {
  return (
    <figure style={{ margin: 0, background: 'var(--surface-inverse)', color: 'var(--text-on-inverse)', borderRadius: 'var(--radius-card)', padding: 'var(--space-6)', ...style }} {...rest}>
      <blockquote style={{ margin: 0, font: 'var(--fw-medium) var(--fs-h2)/1.35 var(--font-display)', letterSpacing: 'var(--ls-heading)', textWrap: 'pretty' }}>{children}</blockquote>
      {attribution ? (
        <figcaption style={{ marginTop: 'var(--space-4)', font: 'var(--fw-regular) var(--fs-small)/1.4 var(--font-text)', opacity: 0.85 }}>
          {attribution}{role ? <span style={{ display: 'block', opacity: 0.75 }}>{role}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
