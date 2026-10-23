# Sunbird Newsletter Design System

A brand and component system for the **Sunbird Newsletter** — the edition-based newsletter of the Sunbird Collective — derived from the sunbird.org site and the *Sunbird ED V-ii* deck (Nov 2025), which is stewarded by **COSS, the Centre for Open Societal Systems**.

## Context

Sunbird is a set of configurable, extendable, modular **open-source building blocks** for learning and human development, designed for scale. The Sunbird Collective is an alliance of individuals and organisations tackling grand-scale challenges; 19 building blocks power solutions such as **DIKSHA** (school education; 180 Mn+ learners, 7 Mn+ teachers, 40 states) and **DIVOC** (verifiable health credentials; 2 Bn+ certificates across five countries).

Surfaces represented here: the **newsletter** (email + web view). The marketing site and the ED portal are referenced for brand vocabulary only — no code from them was accessible.

## Sources used

| Source | Access | What was taken |
| --- | --- | --- |
| `uploads/Sunbird_Newsletter_July2026.pdf` | supplied by the user | Issue structure, section order, voice and copy patterns (its visual styling was deliberately **not** copied) |
| https://sunbird.org/ | text only (CSS/images not reachable from this environment) | Section copy, tone, product facts, scale numbers |
| Screenshot of *Sunbird Spark → Sunbird ED V-ii* Google Slides deck (`docs.google.com/presentation/d/1PIKHA_uUPbGzSN7W6JJHf_SlHAqw0xsuIgKW3n0Rabs`) | image, supplied by the user | Sunbird wordmark, COSS mark, exact colour values, constellation motif, type character |
| Related repos (not read): github.com/project-sunbird, github.com/Sunbird-Ed | not connected | — |

**Not obtained:** vector logos, real font files, photography/illustration library, the site's own CSS. See Caveats.

## Content fundamentals

- **Voice:** collective, plural, mission-first. "The Sunbird Collective is an alliance…", "How can *you* use Sunbird?" — the reader is *you*, the org is *we/the collective*. Never "I".
- **Casing:** section kickers are ALL CAPS with wide tracking (`WHAT IS SUNBIRD?`, `SUNBIRD + EDUCATION`, `HOW CAN YOU USE SUNBIRD?`). Headlines are sentence case. Body is sentence case, plain.
- **The `+` construction** is a brand idiom: `Sunbird + Education`, `Sunbird + Healthcare`. Use it for domain sections.
- **Numbers carry the argument.** Scale figures appear early and abbreviated the brand's way: `180 Mn+`, `7 Mn+`, `2 billion+`, `19`, `40 states`. Never dress them up with adjectives — the number is the adjective.
- **Sentence rhythm:** one declarative claim, then the mechanism. *"DIKSHA has empowered 180 Mn+ learners… The platform was rolled out in 2017 and has been adopted by 40 states."*
- **Register:** developmental and institutional, but not bureaucratic. Words that recur: building blocks, modular, extendable, configurable, adopters, community, grand-scale, exponential change, open source.
- **Spelling:** Indian/British English — *organisation*, *digitalisation*.
- **Emoji:** never. Exclamation marks: effectively never.
- **Legal:** `Sunbird®` carries the registered mark in formal first mentions.
- **Newsletter-specific:** subject lines are a claim plus a number ("19 blocks, one collective"); preheaders restate the promise in under 12 words; CTAs are verb-first and specific ("Read the DIKSHA story", not "Learn more").

## Visual foundations

- **Colour.** A warm, sunlit palette on a **marigold `#FFDD75`** ground with **clay `#A85236`** as the ink for display type and the wordmark. **Vermilion `#CF5948`** is the COSS mark colour and the system's emphasis/alert. **Ochre `#CC8546`** and **sky `#70AEC0`** are node accents — the only cool colour in the system, used sparingly as counterweight. Neutrals are warm-leaning: ink `#434343`, paper `#FDFBFA`/`#F6F1EA`, hairline `#E6DDD1`. At most two saturated blocks per screen.
- **Type.** Geometric rounded sans for display (Poppins, substituted — see Caveats) against a humanist sans for text (Source Sans 3). Display is tight (`1.08`, `-0.02em`); body is generous (`1.55`). Uppercase eyebrows at 12px/700/`0.14em`.
- **Backgrounds.** Flat colour fields, never gradients. The marigold field is the signature; white sheets sit on a warm `#F6F1EA` desk. No photography was supplied, so imagery slots are left as neutral blanks rather than invented.
- **The constellation motif.** The deck's backgrounds are dotted paths connecting filled circular nodes in ochre, sky, clay and vermilion. This is the brand's one decorative device: use it as a section divider, as the dot beside an eyebrow, and as the marker in stat cards. Dotted stroke is 2px; nodes are 8–18px circles.
- **Cards.** 8px radius, 1px warm hairline, near-flat: `0 1px 2px rgba(107,58,32,.08)`. Raised surfaces (the email sheet) get `0 6px 18px rgba(107,58,32,.12)` and 14px radius. No coloured left-border accents.
- **Corners.** 4 / 8 / 14px, pill for buttons, 50% for nodes. Nothing else.
- **Borders and rules.** Hairlines separate list rows; a 1px 50%-opacity ink rule sits under the masthead (straight from the deck's title slide).
- **Shadows.** Warm brown-tinted, never neutral grey, never more than two levels. No inner shadows.
- **Transparency & blur.** Not part of the brand. The only transparency in use is opacity on rules (35–50%) and disabled states (45%).
- **Motion.** Restrained: 200ms `cubic-bezier(.2,.6,.25,1)` colour and border transitions. Fades, not bounces. No parallax, no scroll-jacking.
- **Hover:** darken one ramp step (clay 400 → 500); ghost links keep colour and gain underline. **Press:** `scale(.98)`, no colour change beyond hover. **Focus:** 3px `rgba(168,82,54,.28)` ring — always visible, never removed. **Disabled:** 45% opacity.
- **Layout.** Newsletter measure is 640px with a 32px gutter; 48px between sections, 32px between blocks. Body copy caps at ~58–66 characters. Nothing is fixed/sticky in email; the web view has one sticky top bar.

## Iconography

The supplied sources contain **no icon set** — no icon font, no SVG sprite, no PNG icon library. Accordingly this system ships none, and nothing has been drawn from imagination.

- Where a glyph is genuinely needed, the system uses **typographic characters**: the `→` arrow after CTAs, and `·` as a meta separator. These match the deck, which uses plain type and geometry rather than pictograms.
- The **coloured node dot** does the work an icon usually would — it marks sections, list items and stats.
- **Emoji are never used.**
- If a real icon set is required, the closest CDN match by weight and terminal shape is **Lucide** (2px round-cap strokes, which sit well with the rounded wordmark) — but this would be a **substitution, not a brand fact**, and it is not linked anywhere in this system today.
- Logos in `assets/` were extracted from the supplied deck screenshot as PNGs (raster, with alpha-keyed variants). Vector originals are needed.

## Issue structure

Taken from the July 2026 edition (`uploads/Sunbird_Newsletter_July2026.pdf`) — the running order, not its styling:

1. **Masthead** — "SUNBIRD NEWSLETTER" + `Edition · <Month Year>`, wordmark alongside.
2. **SPOTLIGHT** — one lead item: product/initiative name as the heading, a single paragraph of context that ties it back to the wider DPG story.
3. **PRODUCT UPDATE** — a framing line (version + ship date + what the next two months hold), then a grid of 3–5 short update cards, each a plain noun-phrase heading and 40–70 words. Recurring card themes: a headline capability, a depth/quality improvement, an AI or platform bet, and an "Under the hood" card for security and ops.
4. **Pull quote or microsite pointer** — optional pace change.
5. **JOIN THE COLLECTIVE** — an invitation to partner, phrased as opportunity rather than ask.
6. **Tail** — attribute strip (`OPEN SOURCE | MODULAR | SCALABLE | EXTENSIBLE`), COSS mark, `Maintained by COSS · <microsite>`, `Write to us at info@sunbird.org`, and the sign-off `— Team Sunbird`.

Section labels are letter-spaced caps. Three pages of print maps to one 640px scroll; keep the whole edition under ~600 words.

## Components

Authored for the newsletter; no source component library existed, so this is a from-scratch set sized to the medium.

**Core** (`components/core/`) — `Button`, `Badge`, `Card`, `Divider`, `Callout`
**Newsletter** (`components/newsletter/`) — `EmailShell`, `Masthead`, `SectionHeading`, `StoryItem`, `StatBlock`, `Quote`, `TaglineStrip`, `Footer`

*Intentional additions:* `Divider`'s `constellation` variant and `SectionHeading`'s node dot productise the deck's dotted-path motif so it can be reused consistently instead of hand-drawn per issue.

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Entry point — imports every token file |
| `tokens/` | `fonts`, `colors`, `typography`, `spacing`, `radii`, `elevation`, `motion` |
| `assets/` | `sunbird-wordmark.png` / `-lg` / `-alpha`, `coss-logo.png` / `-alpha` |
| `components/core/`, `components/newsletter/` | Components + `.d.ts` + `.prompt.md` + card HTML |
| `guidelines/*.card.html` | 19 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `ui_kits/newsletter/` | Click-through web view: edition, archive, subscribe |
| `templates/newsletter-issue/` | Ready-to-edit issue template (Design Component) |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent Skills wrapper |

## Caveats

1. **Fonts are substituted.** No font files were supplied; Poppins (display) and Source Sans 3 (text) are the nearest Google Fonts matches to the deck's rounded geometric and humanist faces. Please send the real families.
2. **Logos are raster crops** from a screenshot, not vectors. Please supply SVGs.
3. **sunbird.org's CSS, imagery and icons were not reachable** from this environment — only its text. Colour values come from the deck screenshot, which is authoritative for brand colour but may differ from the live site.
4. **No photography or illustration** was available; image slots are deliberately blank.
