# Ventur.City Design System

Ventur.City (domain ventur.life) — brand and mobile UI foundations for the Ventur.City product. The visual language is a lime-on-slate urban/mobility identity: a punchy uppercase display face (Paytone One), a clean grotesque for UI (Instrument Sans), a single electric lime brand color, cool slate neutrals and warm off-white surfaces.

## Sources
All material came from uploaded Figma exports (no Figma link, codebase or product screens were provided):
- Foundations: `uploads/Semantic Color.jpg` (palette), `uploads/Tokens System.png` (semantic tokens), `uploads/Typography System.jpg`, `uploads/Spacing System.jpg`, `uploads/Radius System.jpg`
- Components (mobile): `uploads/button-mobile.png`, `uploads/form.png`, `uploads/option.png`, `uploads/toast.png`, `uploads/toggle.png`
- Logos: `uploads/*logo*.png` (primary horizontal/vertical, secondary, logomark × colored/black/white)

Component exports appear to be @2x; measurements were halved. Values that had to be estimated from pixels are noted under Caveats.

## Index
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`
- `assets/logos/` — 12 logo PNGs
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (below)
- `Design System Reference.html` — standalone reference page (tabs: Readme · Color · Fonttype · Component Library); scripts in `reference/`. Readme tab embeds a snapshot of this file — regenerate after edits.
- `thumbnail.html`, `SKILL.md`
- **UI kits** — none. No product screens were supplied, so no screens were recreated (deliberately left out rather than invented).

## Components
- `components/buttons/` — **Button** (primary / secondary / tertiary / ghost / ghost-light / ghost-brand; sm 24px, lg 40px; `social` "Continue with Platform" layout), **IconButton** (24 / 40 / 54px)
- `components/forms/` — **TextField** (light & dark, focus, placeholder, disabled), **Option** (icon + label row), **Toggle**
- `components/feedback/` — **Toast** (neutral / success / warn / danger)
- `components/core/` — **Icon** (Lucide wrapper)
- `components/map/` — **CityMap** — stylized OpenStreetMap base map (light/dark) for interactive modules
- `components/places/` — **PhotoStackMarker** (user photos, count badge, shuffle), **PlaceMarker** (square place photo), **CategoryPin** (cyan partner / slate regular), **CategoryChip**, **CategoryIcon** — website markers
- `components/characters/` — **CursorCharacter** — arrow + name pill; optional typed comment bubble that hides after 3s
- `components/characters/` — **GuestbookNote** — cursor types a note → note card (+ photos) → posted, avatar leave-mark
- `components/passport/` — **Passport** — closed → open 3D cover flip (art in `assets/passport/`)
- `components/web/` — **WebHeadline** — WEBSITE ONLY (see below)

### Intentional additions
- **Icon** — the Figma components use diamond placeholders in icon slots; a Lucide wrapper lets consumers fill them consistently.

## CONTENT FUNDAMENTALS
Very little product copy was supplied, so this is inferred from the brand assets:
- Brand name is written **Ventur.City** (logo lockup sets it as VENTUR / .CITY in caps). The ".city" is part of the name — keep the dot.
- Display headlines are always **UPPERCASE** Paytone One — short, punchy, 1–4 words ("TOKENS", "COLOR", "RIDE THE CITY").
- UI copy is sentence case, plain and short: "Continue with Platform", "Dismiss", field labels like "Title".
- Actions are verbs in Title-ish sentence case on buttons ("Continue with Apple"); toast actions are a single bold word ("Dismiss").
- Address the user as **you**; the brand speaks lightly as **we** if needed. Friendly, direct, energetic — never corporate.
- No emoji seen anywhere. Don't use them.
- Guideline docs use short one-sentence descriptions ("These are the values you will be able to use throughout the project").

## VISUAL FOUNDATIONS
- **Color**: one hero brand color, lime `green.100 #C4E860`. Neutrals split into a warm off-white "green" ramp (`green.5–20` for light surfaces/disabled fills) and a cool slate "black" ramp (`black.0–150`, note 0 is the *lightest*). Status: red, orange, blue ramps (50–120). Brand-on-dark (lime on `black.120`) is the signature pairing; black text sits on lime, never white.
- **Semantic tokens**: `surface-*`, `elevation-light-0..4`, `elevation-dark-0..5`, `text-*`, `stroke-*` — map exactly to the Figma token sheet.
- **Type**: Paytone One for display (always uppercase, 24–72px, tight leading, +1–2% tracking on the biggest sizes). Instrument Sans for everything else: h1 32/40, h2 24/30, h3 20/24, body 16/20, sm 12/16, in bold/medium/regular/italic.
- **Spacing**: xs 4, s 8, m 16, xl 24, 2xl 32, 3xl 64 (no "l" step in the source).
- **Radii**: sm 8 (inputs, small buttons), md 16 (buttons, toasts, icon buttons), lg 20, xl 24 (panels/cards), round 999 (toggle track). Generous, soft rounding everywhere; no sharp corners.
- **Cards/panels**: white on a near-white page, 24px radius, extremely soft large shadow, no border. Swatch tiles inside use 1px `black.0` hairline borders, 8px radius.
- **Shadows**: minimal. Only toasts carry a visible drop shadow (≈0 4 8 at ~18%). Buttons and inputs are flat.
- **Borders**: inputs are borderless at rest; focus shows a 2px lime stroke. Hairlines are 1px light grey.
- **Hover**: the same hue one step lighter (green.100→70, black.30→20, green.15→10). **Disabled**: paler fill + `black.10` label/icon. No opacity tricks.
- **Press**: not specified in source — use the hover color; don't scale.
- **Toggle knob** is a rounded square (squircle), not a circle — a distinctive detail; icon placeholders are rounded diamonds.
- **Backgrounds**: flat fills only. No gradients, textures, illustrations or photography were supplied.
- **Transparency/blur**: not used.
- **Motion**: not specified. Keep it quick and subtle (120–160ms ease color/position transitions).
- **Website headline (web only)**: marketing/website hero & section titles use uppercase Paytone One + 1–2 subtitle lines set in square-cornered highlight bars hugging the text (line 1 black.120 bar / white text, line 2 lime bar / black text; 600 18/24, 4/16 padding; wrapped lines of one subtitle 2px apart, separate subtitles 8px apart). Use `WebHeadline`. **Never** apply bars to body/paragraph copy, and never in the mobile app.
- **Maps**: use `CityMap`. Real OSM geometry (Overpass API), restyled: light = white land, dark = black.120 land; green space in brand green, water in blue; roads as quiet tonal lines; no labels, pins, POIs or traffic. Tokens `--map-light-*` / `--map-dark-*` in `tokens/map.css`. Keep the OSM attribution.
- **Place markers (website)**: partner merchant = cyan `blue.100` pin; regular = slate `black.30`. User photos are 3:4 cards in off-white (green.10) frames, max 2 stacked, endlessly shuffling; badge shows total shared photos. The place's own photo is a white-framed square.
- **Cursor characters**: orange / red / blue / green arrows with 2px black.50 outline and matching name pill. Comments type out inside the pill, hold 3s, then collapse — never permanent.
- **Layout**: mobile-first; full-width 40px CTAs, 44px inputs, 8px label-to-field gap.

## ICONOGRAPHY
- **Brand icon set** (`assets/icons/*.svg`, also inlined in the `Icon` component): 18 filled glyphs on a 24×24 grid, single-colour (`currentColor`; source colour is lime green.100). Categories: food, nightclub, shopping, beauty, wellness, entertainment, outdoors, services. Product: badge (two-tone, inner detail `--icon-contrast`), locate-me, no-edit, play, rax, socials, stamps, theatre, vicon, vicon-1.
- Style: solid fills, rounded terminals, no outlines. Keep it that way — don't mix with outline icons where a brand glyph exists.
- Default colour treatments: lime on black.120 / slate; white on slate pins and chips; black.120 on lime.
- **Fallback**: Lucide (CDN `lucide@0.454.0`) only for generic UI glyphs the set lacks (arrows, plus/minus, close, check). Flagged substitution.
- No emoji, no unicode glyph icons.
- The **logomark** works as an app icon / avatar; use the PNGs in `assets/logos/`. Never redraw it.

## Logos
`assets/logos/`: `primary-horizontal-{colored,black,white}.png`, `primary-vertical-*.png`, `secondary-*.png` (wordmark, lime swash R), `logomark-*.png`. Colored versions on light backgrounds; white versions on `black.120`; black on lime.

## Caveats
- CityMap fetches live data from the public Overpass API (rate-limited; slow on big radii). Open sea isn't filled.
- Fonts load from Google Fonts (no font binaries supplied).
- Orange 70 is labelled `#3DBB4A` in the source (a typo — it renders as amber); used `#EBBB4A`.
- Component dimensions measured from @2x PNGs; label 12px and toast action 14px bold are estimates.
- Shadow values estimated.
