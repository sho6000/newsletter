# Sunbird RC Newsletter — Context for Future Editions

This directory produces the monthly Sunbird RC email newsletter, sent via Zoho Campaigns. This file explains how the pieces fit together so a new edition can be built without re-deriving the conventions from scratch.

## File inventory

| File | Purpose |
|---|---|
| `oct-content.md` | **Source of truth for copy.** Plain-English content, structured to mirror the HTML section-by-section, with every link already included inline as a markdown link. Treat each month's content doc as the spec — the HTML should never contain copy or links that aren't in here. |
| `sunbird-rc-2026-10.html` | The actual Zoho-ready email, built from `oct-content.md`. Table-based HTML email markup (not modern CSS — tables + inline styles, for email client compatibility). |
| `sunbird-rc-2026-10-rebranded.html` | A colour-corrected **copy** of the above, with every off-palette hex swapped for the nearest official Sunbird brand colour. Never edit the main HTML's colours directly — always work in a `-rebranded.html` copy and diff against the original so the two can be compared. |
| `sb-ns-guidelines.md` | The official brand guide: purpose/description, logo rules, typography (Rubik only), visual language (the "connecting dots" metaphor), the full colour palette, and a running table of exactly which hex each newsletter element currently uses and why. **Update this file every time a newsletter colour changes** — it's the audit trail, not just a reference. |
| `assets/` | All images referenced by the HTML. See **Images** below. |
| `oct-v1.html` | An earlier draft — kept for reference, not part of the active pipeline. |
| `Sunbird Newsletter DS/` | Design-system source files (not machine-generated, treat as read-only reference). |

## Monthly workflow

1. **Write the content doc first** (`<month>-content.md`), structured exactly like `oct-content.md`:
   - One `#` heading per HTML section, in the same order as the HTML (HEADER → HERO IMAGE → SPOTLIGHT → WHAT'S NEW → WHERE RC FITS → CONTRIBUTE TO SUNBIRD → FOOTER).
   - Every hyperlink/button written inline as `[link text](url)` — the HTML's buttons and inline links should be a direct transcription of this file, never invented.
   - If a section's real content isn't available yet (e.g. a product update that hasn't shipped), leave a placeholder and flag it — don't fabricate copy to fill the gap.
2. **Build/update the HTML** from the previous month's file: copy it, then update copy and links to match the new content doc exactly. Keep the existing table structure, inline styles, and responsive (`@media max-width:599px`) rules untouched unless the content doc calls for a structural change.
3. **Generate images** (see below), matching native resolution to display size exactly.
4. **Apply brand colours**: either write new colours directly from `sb-ns-guidelines.md`'s palette, or do the substitution pass described there (copy → `-rebranded.html` → remap hex-by-hex → update the "Colours Used" table in `sb-ns-guidelines.md`).
5. **Prep for Zoho upload**:
   - Image `src` attributes should be **bare filenames only** (e.g. `src="hero.png"`, not `src="assets/hero.png"`) — Zoho hosts images on its own CDN (`stratus.campaign-image.in`) and you manually swap each `src` for the uploaded URL it gives you. The footer's social icons and logo already show this end state — use them as the pattern.
   - If you re-upload an image under the same filename it previously had, Zoho may serve a cached older version — rename the file (e.g. add `-v2`) if a re-upload doesn't seem to take.
6. **Sanity check before sending**:
   - Every button `href` matches the content doc.
   - Every image's native aspect ratio matches its HTML display `width`/`height` (see the stretching bug below).
   - Footer/header text has good contrast against its background.
   - `grep -oE '#[0-9a-fA-F]{3,6}' *.html | sort -u` — every hex should be accounted for in `sb-ns-guidelines.md`'s "Colours Used" table.

## Images

**No AI image-generation tool is available in this environment.** All hero/icon art this cycle was built procedurally with Python + PIL — gradients, perspective-warped grid lines, and a connected-dots "network" motif, all in Sunbird brand colours. Reuse/adapt this approach rather than trying to source stock art, unless the user explicitly wants to commission real generated/designed art instead.

**Display sizes used this edition** (match these unless the layout changes):
| Image | Display size | Recommended source resolution |
|---|---|---|
| Hero banner (top) | 600×260 | 1200×520 (2×, for retina) |
| Product-update row icons (×3) | 245×245 (square — **the `td` width is 245, not 245×180**) | 490×490 minimum; 800×800 used this cycle |

**The stretching bug to avoid**: the three row icons were originally 400×400 square source files displayed at a non-square 245×180 box, which visibly stretched them. Always check `PIL.Image.open(path).size` against the HTML's display `width`/`height` before finalizing — if the ratio doesn't match, either resize the display box to match the image's true ratio, or regenerate the image at the display box's ratio. Square icons should display in a square box.

**The hero image recipe** (see `assets/hero-network-grid-sunbird.png` for the final result of this cycle):
1. Vertical gradient background, warm cream → soft peach (Sunbird palette tones, e.g. Ivory `#fffef4` → a peach around `#eed6c0`).
2. A fisheye/barrel-distorted grid ("bowed box lines") — lines generated from a flat grid, then warped outward from a vanishing point using `r' = r * (1 + k·r²)`, in a low-contrast warm tan so it reads as texture, not a foreground element.
3. A network of ~50 scattered points connected to their 2–3 nearest neighbours (skip edges longer than ~260px so it doesn't turn into a dense mesh), node dots and connecting lines in the brand's rust/orange tones (Brick, Jamun-ish oranges), with a handful of larger "hub" nodes for visual weight.
4. A fade to pure white over roughly the bottom 38% of the image (`fade_start≈0.62` to `fade_end≈1.0`, linear alpha composite against white), so the image blends into the white content card below it rather than ending with a hard edge. **This fade must reach full white exactly at the image's bottom pixel** — if you crop an already-faded image, you must redo the fade against the new bottom edge, not just crop the old gradient.

**Row icon recipe**: same background treatment as the hero but scaled down and pushed to the edges/corners only (so it doesn't compete with the icon subject), with the actual icon subject centered and recoloured into Sunbird's rust/orange palette while preserving each icon's original concept:
- *Standards* → a central hub node radiating to several shape nodes (already a "network" concept — just recolour it).
- *Wallet* → two overlapping rounded-rectangle wallet cards.
- *Selective disclosure* → a card with some fields shown as solid colour bars (visible) and others as a segmented/masked pattern (hidden), optionally with a small verified-checkmark badge.

## Colour system

`sb-ns-guidelines.md` is the single source of truth for brand colours. Key points to carry forward:

- The official palette has **no near-black and no neutral grey**. When something needs to read as "dark text" or "dark background," the darkest available colour is **Moss** (`#540f3b`) — a deep plum, not black. When something needs a muted/neutral tone (dividers, small print, separators), **Lavender** (`#74858f`) is the closest the palette has to a neutral.
- **Derived shades are allowed but must be declared, not silently invented.** If a colour needs to be darker/lighter than a literal palette entry (as happened with the header/footer background, which ended up as Moss darkened ~20% to `#430c2f`), write it as "Moss, darkened N%" in `sb-ns-guidelines.md`'s colour table — never just drop in an unexplained hex.
- **The outer page background and the inner content-card background are deliberately different** (`#f6f1ea` muted cream outside, `#ffffff` pure white inside) and are intentionally *not* forced onto the same brand colour — this two-tone effect was an explicit decision, not an oversight. Preserve it unless asked otherwise.
- **CTA buttons should each get a distinct brand colour** so they don't visually collide: this edition used Brick (primary CTA), Ginger (secondary CTA), Ink (tertiary CTA), and Sunflower (the "Collaborate" button). Follow the same spread-across-the-palette approach for new buttons rather than reusing one colour everywhere.
- **Footer text should be uniformly white/Ivory** (not Lavender) for readability against the dark footer background — only decorative elements (the divider line, the tagline's separator dots) use Lavender.
- The brand-guide source data itself has some internal inconsistencies (invalid CMYK K values over 100, a couple of RGB/HEX pairs that don't match each other, Moss/Jamun looking possibly swapped). These are flagged in detail in `sb-ns-guidelines.md` — don't silently "fix" the guidelines file further without re-confirming against the actual brand source; just be aware the numbers may not be fully trustworthy.

## General principles for this project

- **Never fabricate content.** If a section's copy, a link target, or an image isn't available, flag it explicitly (in the content doc, in a code comment, or by asking) rather than inventing something plausible-sounding.
- **Verify before asserting.** When claiming something about the live site, a repo, or an image's actual properties, check it directly (fetch the page, run `PIL.Image.open().size`, `grep` the file) rather than assuming.
- **Copy before destructive edits.** Colour rebranding, restructuring, or any edit the user might want to compare against the original should happen in a copy, not in-place on the production file.
