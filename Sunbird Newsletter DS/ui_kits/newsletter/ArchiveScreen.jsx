const { Card, Badge, Divider, Button } = window.SunbirdNewsletterDesignSystem_cf1a7e;

const issues = [
  { n: 'July 2026', d: 'Edition · July 2026', t: 'What will you spark?', s: 'Sunbird Spark v1.0.2, personalization, and AI at the core.', tone: 'marigold' },
  { n: 'April 2026', d: 'Edition · April 2026', t: 'Two billion certificates later', s: 'DIVOC across five countries, and the offline problem it solved.', tone: 'paper' },
  { n: 'January 2026', d: 'Edition · January 2026', t: 'Forty states, one platform', s: 'How DIKSHA got adopted board by board.', tone: 'paper' },
  { n: 'October 2025', d: 'Edition · October 2025', t: 'Why a collective', s: 'Shared values, shared concerns, exponential change.', tone: 'paper' }
];

function ArchiveScreen({ onOpen }) {
  return (
    <div style={{ background: 'var(--surface-card-muted)', padding: 'var(--space-7) var(--space-4)' }}>
      <div style={{ maxWidth: 'var(--email-width)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
        <div>
          <div style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--clay-400)', marginBottom: 'var(--space-2)' }}>Sunbird Newsletter</div>
          <h1 style={{ font: 'var(--type-h1)', color: 'var(--text-display)', margin: 0 }}>Every edition, in order</h1>
        </div>
        <Divider variant="constellation" nodes={3} />
        {issues.map((i) => (
          <Card key={i.n} tone={i.tone} style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start', cursor: 'pointer' }} onClick={onOpen}>
            <div style={{ flex: '0 0 116px' }}><Badge tone={i.tone === 'marigold' ? 'clay' : 'marigold'}>{i.n}</Badge></div>
            <div style={{ flex: 1 }}>
              <div style={{ font: 'var(--type-h3)', color: 'var(--text-heading)' }}>{i.t}</div>
              <div style={{ font: 'var(--type-body)', color: 'inherit', opacity: 0.9 }}>{i.s}</div>
              <div style={{ font: 'var(--fw-regular) var(--fs-small)/1.4 var(--font-text)', color: 'var(--text-muted)', marginTop: 'var(--space-2)' }}>{i.d}</div>
            </div>
          </Card>
        ))}
        <Button variant="secondary" onClick={onOpen} style={{ alignSelf: 'flex-start' }}>Open latest edition</Button>
      </div>
    </div>
  );
}
Object.assign(window, { ArchiveScreen });
