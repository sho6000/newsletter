import React from 'react';

/** Issue masthead: marigold band, sunbird wordmark, issue meta, headline. */
export function Masthead({ title, issue, date, kicker, logoSrc = '../../assets/sunbird-wordmark-alpha.png', style, ...rest }) {
  return (
    <header style={{ background: 'var(--bg-page)', padding: 'var(--space-7) var(--email-gutter) var(--space-6)', ...style }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
        <img src={logoSrc} alt="Sunbird" style={{ height: 34, width: 'auto', display: 'block' }} />
        <div style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--clay-500)', textAlign: 'right' }}>
          {issue}{issue && date ? ' · ' : ''}{date}
        </div>
      </div>
      <hr style={{ border: 0, borderTop: '1px solid var(--clay-400)', opacity: 0.35, margin: 'var(--space-5) 0' }} />
      {kicker ? <div style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--clay-500)', marginBottom: 'var(--space-3)' }}>{kicker}</div> : null}
      <h1 style={{ font: 'var(--fw-bold) var(--fs-display-2)/var(--lh-tight) var(--font-display)', letterSpacing: 'var(--ls-display)', color: 'var(--text-display)', margin: 0 }}>{title}</h1>
    </header>
  );
}
