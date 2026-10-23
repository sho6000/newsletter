# Sunbird Brand Guidelines

## Brand Purpose & Description

Sunbird® is an open-source set of configurable, extendable, and modular building blocks designed for learning and human development.

Open-sourced under the MIT license to build digital infrastructure and solutions for scale across geographies.

## Logo Guidelines

- The logo form and construction are sacrosanct and must never be altered, reworked, or recreated.
- **Exclusion zone**: maintained around the logo using the height of the letter "s" from the logotype.
- **Greyscale**: the primary greyscale version uses two tones of grey and is reserved only for non-colour printing.
- **Don'ts**: do not change logo colors, use single-color versions (unless specified), alter orientation/angle, scale individual elements, or place the logo on backgrounds/photographs that hamper visibility.

## Typography

- **Primary typeface**: Rubik (and its various weights) is the only approved font for all communication.
- Available as an open-source font on [Google Fonts](https://fonts.google.com/specimen/Rubik).

## Visual Language

- **Visual metaphor**: built around the concept of "connecting dots."
- Dots must never be used as meaningless patterns or polka dots — they are only used when connecting ideas, patterns, and opportunities.
- **Illustrations**: use a dot-and-line style featuring brand colors to show the infinite ways building blocks can combine.
- **Iconography**: acts as spot illustrations representing specific building blocks, featuring an incomplete connection between two dots and a larger transparent dot moving along a solid line.

## Colour Palette

### Primary Colours

| Name | RGB | HEX | CMYK |
|---|---|---|---|
| Ginger | 204, 133, 69 | `#cc8545` | C 18, M 52, Y 83, K 21 |
| Brick | 168, 82, 54 | `#a85236` | C 25, M 76, Y 85, K 15 |
| Sunflower | 225, 219, 115 | `#ffdb73` | C 1, M 12, Y 65, K 3 |
| Ivory | 255, 254, 244 | `#fffef4` | C 0, M 0, Y 4, K 4 |
| Wave | 112, 173, 191 | `#70adbf` | C 57, M 18, Y 20, K 5 |
| Ink | 55, 102, 115 | `#376673` | C 81, M 49, Y 44, K 17 |

### Secondary Colours

| Name | RGB | HEX | CMYK |
|---|---|---|---|
| Leaf | 161, 166, 3 | `#a1a603` | C 42, M 23, Y 100, K 27 |
| Forest | 130, 166, 104 | `#82a668` | C 54, M 19, Y 74, K 28 |
| Moss | 84, 15, 59 | `#540f3b` | C 55, M 98, Y 46, K 48 |
| Jamun | 153, 112, 138 | `#99708a` | C 42, M 61, Y 30, K 31 |
| Lavender | 116, 133, 143 | `#74858f` | C 25, M 0, Y 0, K 55 |

---

### Flags on the colour data

A few values as given don't check out, so I've made my best-guess corrections above — please verify these against the actual brand guide before using:

1. **CMYK K values over 100** in the original (Brick K152, Ink K176, Moss K489, Jamun K310, Lavender K5511) aren't valid — K is a 0–100 percentage. I've truncated/estimated these (e.g. 152→15, 176→17, 489→48, 310→31, 5511→55) assuming a stray extra digit, but these are guesses, not verified conversions.
2. **Sunflower**: the given RGB (225, 219, 115) doesn't match the given HEX (`#ffdb73`) — those are two different colors. I used the HEX as the source of truth and left RGB as given; worth confirming which is correct.
3. **Moss** and **Jamun** appear to have their HEX/name swapped or mismatched: the given HEX for Moss (`#66a682`, a green) matches what you'd expect for "Forest," while the given RGB for Moss (84, 15, 59, a dark plum) matches what you'd expect for "Jamun" (a berry/plum fruit). I used the given RGB (84,15,59) to derive Moss's HEX (`#540f3b`) above and used Jamun's given RGB to derive its own HEX, rather than the originally-listed HEX values — but this is a guess based on the name/color association, not confirmed.
4. **Lavender**: the given RGB (116, 133, 143, a blue-grey) doesn't match the given HEX (`#99708a`, a mauve/lavender) — mauve matches the name better, but I derived the HEX above from the given RGB for consistency. Worth double-checking which value set is authoritative.

Recommend re-pulling these straight from the original brand guide/Figma file rather than trusting this transcription.

## Colours Used in the October 2026 Newsletter

`sunbird-rc-2026-10-rebranded.html` uses the following colours, each mapped back to its source in the palette above:

| Hex | Palette source | Role in the newsletter |
|---|---|---|
| `#540f3b` | Moss | Body text; also the on-brand link colour |
| `#fffef4` | Ivory | Header/footer text, button text, social icon circle backgrounds |
| `#ffffff` | — (pure white, not a palette colour) | Inner content card background |
| `#f6f1ea` | — (original cream, not a palette colour) | Outer page background, kept intentionally distinct from the white content card |
| `#a85236` | Brick | Section eyebrow labels (Spotlight, What's New, etc.), primary CTA button ("Visit the Sunbird RC microsite"), link hover colour |
| `#74858f` | Lavender | Section dividers, tagline separator dots |
| `#430c2f` | Moss, darkened ~20% (not a literal palette entry) | Header and footer background |
| `#ffdb73` | Sunflower | Small accent dot in the header |
| `#cc8545` | Ginger | "Read the v2.1.0 release notes" button |
| `#376673` | Ink | "Try the RC demos" button |

Two colours above are intentionally **not** from the palette: `#ffffff` (pure white) and `#f6f1ea` (the original muted cream) are both kept as-is for the page/card background pairing, per an explicit decision to preserve that two-tone effect rather than force both onto the same brand colour.

`#430c2f` is a derived shade (not a literal palette entry) — a ~20% darkened version of Moss, used specifically so the header/footer background reads darker than the Moss-coloured body text.
