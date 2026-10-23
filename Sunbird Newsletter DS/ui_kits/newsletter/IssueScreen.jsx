const { EmailShell, Masthead, SectionHeading, Footer, Divider, Button } = window.SunbirdNewsletterDesignSystem_cf1a7e;

const updates = [
  { t: 'Personalized Learning Journeys & Competency Frameworks', d: 'Spark will be able to assess a learner against a defined set of skills, pinpoint exactly which competencies they’re missing, and build a learning journey to close those gaps. The design work is in progress, and build will commence shortly. Once a competency framework is mapped to Sunbird’s taxonomy, Spark will automatically recommend the right content to help learners reach each competency — no manual curation needed.', dot: 'var(--node-a)', size: 18 },
  { t: 'Richer, More Flexible Assessments', d: 'QuML assessments now support all question types — Fill in the Blanks, Match the Following, Sequence Ordering, and Reordering — both online and offline — plus a new True/False question type. Authors can also save questions in any of four supported languages (English, Arabic, French, Spanish) by default. The Collection, Generic/Upload and QuML editors have been rebuilt in React, with expanded Arabic, French and Portuguese support and full right-to-left layout.', dot: 'var(--node-b)', size: 12 },
  { t: 'AI at the Core', d: 'Spark has enabled MCP integration, providing a standard way to connect with AI tools and agents. We are building out the AI pipeline as core infrastructure — the backbone for running AI jobs at scale — with the initial set of AI jobs enabling automated caption and transcript generation as well as configurable metadata generation and tagging.', dot: 'var(--node-c)', size: 16 },
  { t: 'Under the Hood', d: 'v1.0.2 also strengthened the platform’s foundations: a new on-demand tool lets operators refresh search indexes without redeploying the system, and 43 security vulnerabilities tied to component upgrades were resolved across the platform — keeping Spark reliable and secure for every deployment.', dot: 'var(--node-d)', size: 12 }
];

function IssueScreen() {
  return (
    <EmailShell flat preheader="Sunbird Newsletter — Edition · July 2026">
      <Masthead title="Sunbird Newsletter" issue="Edition" date="July 2026" logoSrc="../../assets/sunbird-wordmark-alpha.png" />
      <div style={{ padding: 'var(--space-6) var(--email-gutter)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>

        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <SectionHeading eyebrow="Spotlight" title="Sunbird Spark" dot="var(--node-a)" />
          <p style={{ font: 'var(--fw-regular) var(--fs-body-lg)/var(--lh-body) var(--font-text)', color: 'var(--text-body)', margin: 0, textWrap: 'pretty' }}>
            Sunbird Ed (the DPG for learning, skilling and capacity building) has evolved to its newest version — Sunbird Spark. Spark offers best-in-class DPG capabilities for the learning and skilling domains, in an efficient shape and form for all classes of adopters, while retaining the extensibility, scalability and reliability of Sunbird Ed — the core DPG that powered DIKSHA in India.
          </p>
        </section>

        <Divider variant="constellation" nodes={3} />

        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <SectionHeading eyebrow="Product update" title="What Will You Spark?" dot="var(--node-b)" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <p style={{ font: 'var(--type-body)', color: 'var(--text-body)', margin: 0 }}>A quick look at what’s new in Sunbird Spark, and what’s coming next:</p>
            <p style={{ font: 'var(--type-body)', color: 'var(--text-body)', margin: 0, textWrap: 'pretty' }}>Sunbird Spark just shipped v1.0.2 (8 July 2026), and the roadmap for the next two months adds further depth on personalization and AI.</p>
          </div>
          <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {updates.map((u, i) => (
              <li key={u.t} style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'stretch' }}>
                <div style={{ flex: '0 0 22px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span style={{ width: u.size, height: u.size, borderRadius: '50%', background: u.dot, marginTop: 6, flex: '0 0 auto' }} />
                  {i < updates.length - 1 ? <span style={{ flex: 1, borderLeft: '2px dotted var(--ochre-300)', marginTop: 6 }} /> : null}
                </div>
                <div style={{ paddingBottom: i < updates.length - 1 ? 'var(--space-6)' : 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
                    <span style={{ width: 14, borderTop: '2px dotted var(--ochre-300)' }} />
                    <h3 style={{ font: 'var(--type-h3)', color: 'var(--text-heading)', margin: 0 }}>{u.t}</h3>
                  </div>
                  <p style={{ font: 'var(--fw-regular) var(--fs-small)/1.5 var(--font-text)', color: 'var(--text-body)', margin: 0, textWrap: 'pretty' }}>{u.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <Divider variant="constellation" nodes={3} />

        <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
          <p style={{ font: 'var(--type-body)', color: 'var(--text-body)', margin: 0 }}>
            Take a look at the Sunbird Spark microsite to know more.
          </p>
          <Button href="https://sunbird.gitbook.io/sunbird-spark" iconAfter="→">Sunbird Spark microsite</Button>
          <SectionHeading eyebrow="Join the collective" title="Partnership opportunities abound" dot="var(--node-d)" style={{ marginTop: 'var(--space-3)' }} />
          <p style={{ font: 'var(--type-body)', color: 'var(--text-body)', margin: 0, textWrap: 'pretty' }}>
            As Spark continues its evolution — responding to market needs and integrating newer capabilities — we look to the community for inspiration and involvement. Partnership opportunities abound, and the team is looking forward to exciting collaborations!
          </p>
        </section>
      </div>
      <Footer links={[]} cossLogoSrc="../../assets/coss-logo-alpha.png" />
    </EmailShell>
  );
}
Object.assign(window, { IssueScreen });
