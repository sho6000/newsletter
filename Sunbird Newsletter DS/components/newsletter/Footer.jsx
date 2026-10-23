import React from 'react';
import { TaglineStrip } from './TaglineStrip.jsx';

export function Footer({
  links = [],
  tagline = true,
  maintainer = 'Maintained by COSS · sunbird.gitbook.io/sunbird-spark',
  contactLabel = 'Write to us at info@sunbird.org',
  contactHref = 'mailto:info@sunbird.org',
  signOff = '— Team Sunbird',
  address = 'The Sunbird Collective',
  cossLogoSrc = '../../assets/coss-logo-alpha.png',
  unsubscribeHref = '#',
  style, ...rest
}) {
  return (
    <footer style={{ background: 'var(--surface-card-muted)', padding: 'var(--space-7) var(--email-gutter)', textAlign: 'center', ...style }} {...rest}>
      {tagline ? <TaglineStrip style={{ marginBottom: 'var(--space-5)' }} /> : null}
      {cossLogoSrc ? <img src={cossLogoSrc} alt="Centre for Open Societal Systems" style={{ height: 92, width: 'auto', margin: '0 auto var(--space-4)', display: 'block' }} /> : null}
      {maintainer ? <p style={{ font: 'var(--fw-regular) var(--fs-small)/1.5 var(--font-text)', color: 'var(--text-body)', margin: '0 0 var(--space-4)' }}>{maintainer}</p> : null}
      {contactLabel ? <p style={{ font: 'var(--fw-semibold) var(--fs-body)/1.4 var(--font-display)', margin: '0 0 var(--space-2)' }}><a href={contactHref} style={{ color: 'var(--text-link)', textDecoration: 'none' }}>{contactLabel}</a></p> : null}
      {signOff ? <p style={{ font: 'var(--fw-regular) var(--fs-body)/1.4 var(--font-text)', color: 'var(--text-body)', margin: '0 0 var(--space-5)' }}>{signOff}</p> : null}
      {links.length ? (
        <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
          {links.map((l, i) => (
            <a key={i} href={l.href} style={{ font: 'var(--fw-semibold) var(--fs-small)/1 var(--font-display)', color: 'var(--text-link)', textDecoration: 'none' }}>{l.label}</a>
          ))}
        </nav>
      ) : null}
      <p style={{ font: 'var(--fw-regular) var(--fs-small)/1.5 var(--font-text)', color: 'var(--text-muted)', margin: 0 }}>
        {address}<br />
        <a href={unsubscribeHref} style={{ color: 'var(--text-muted)' }}>Unsubscribe</a> · <a href="https://sunbird.org" style={{ color: 'var(--text-muted)' }}>sunbird.org</a>
      </p>
    </footer>
  );
}
