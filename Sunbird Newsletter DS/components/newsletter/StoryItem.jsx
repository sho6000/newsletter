import React from 'react';
import { Button } from '../core/Button.jsx';

export function StoryItem({ eyebrow, title, excerpt, href, cta = 'Read more', imageSrc, imageAlt = '', layout = 'stacked', style, ...rest }) {
  const media = imageSrc ? (
    <img src={imageSrc} alt={imageAlt} style={{ display: 'block', width: layout === 'side' ? 180 : '100%', height: layout === 'side' ? 130 : 200, objectFit: 'cover', borderRadius: 'var(--radius-card)', background: 'var(--surface-card-muted)' }} />
  ) : null;
  return (
    <article style={{ display: 'flex', flexDirection: layout === 'side' ? 'row' : 'column', gap: 'var(--space-4)', ...style }} {...rest}>
      {media}
      <div style={{ flex: 1 }}>
        {eyebrow ? <div style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--ochre-500)', marginBottom: 'var(--space-2)' }}>{eyebrow}</div> : null}
        <h3 style={{ font: 'var(--type-h3)', color: 'var(--text-heading)', margin: '0 0 var(--space-2)' }}>{title}</h3>
        <p style={{ font: 'var(--type-body)', color: 'var(--text-body)', margin: 0, textWrap: 'pretty' }}>{excerpt}</p>
        {href ? <Button variant="ghost" href={href} iconAfter="→" style={{ marginTop: 'var(--space-3)' }}>{cta}</Button> : null}
      </div>
    </article>
  );
}
