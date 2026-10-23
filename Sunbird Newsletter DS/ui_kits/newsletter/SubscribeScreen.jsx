const { Card, Button, Divider, Badge } = window.SunbirdNewsletterDesignSystem_cf1a7e;
const { useState } = React;

function SubscribeScreen() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  return (
    <div style={{ background: 'var(--bg-page)', padding: 'var(--space-9) var(--space-4)', minHeight: 520 }}>
      <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', alignItems: 'center' }}>
        <img src="../../assets/sunbird-wordmark-alpha.png" alt="Sunbird" style={{ height: 48 }} />
        <h1 style={{ font: 'var(--fw-bold) var(--fs-display-2)/var(--lh-tight) var(--font-display)', letterSpacing: 'var(--ls-display)', color: 'var(--text-display)', margin: 0, textWrap: 'pretty' }}>
          Sunbird Newsletter, straight to your inbox.
        </h1>
        <p style={{ font: 'var(--fw-regular) var(--fs-body-lg)/var(--lh-body) var(--font-text)', color: 'var(--clay-500)', margin: 0, maxWidth: '46ch' }}>
          Editions from Team Sunbird: what shipped, what is coming next, and how to get involved.
        </p>
        {done ? (
          <Card tone="paper" style={{ width: '100%' }}>
            <Badge tone="sky">Confirmed</Badge>
            <div style={{ font: 'var(--type-h3)', color: 'var(--text-heading)', marginTop: 'var(--space-3)' }}>You are on the list</div>
            <div style={{ font: 'var(--type-body)' }}>The next edition goes to {email}. You can reply to any edition.</div>
          </Card>
        ) : (
          <form style={{ display: 'flex', gap: 'var(--space-2)', width: '100%' }} onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@organisation.org" aria-label="Email address"
              style={{ flex: 1, padding: '14px 18px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--clay-400)', background: 'var(--paper-0)', font: 'var(--type-body)', color: 'var(--text-body)', outline: 'none' }} />
            <Button type="submit" size="lg">Subscribe</Button>
          </form>
        )}
        <Divider variant="constellation" nodes={4} style={{ width: '100%' }} />
        <div style={{ font: 'var(--fw-regular) var(--fs-small)/1.5 var(--font-text)', color: 'var(--clay-500)' }}>
          Read past editions in the archive. Unsubscribe in one click, always.
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { SubscribeScreen });
