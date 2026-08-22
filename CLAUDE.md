# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static, no-build wedding website for Lucie & Pavel (May 1, 2027, Jimramovské Pavlovice, Czech Republic). Plain HTML/CSS/JS, bilingual (Czech/English), deployed as-is to a static host (GitHub Pages/Netlify).

## Commands

There is no build step, package manager, or test suite. To preview locally:

```
python3 -m http.server
```

then open `http://localhost:8000`. Opening `index.html` directly via `file://` also works — this is why the scripts are loaded as plain `<script defer>` rather than `type="module"` (ES modules are blocked by CORS under `file://`).

## Architecture

- `index.html` — all markup and content for the single-page site. Sections are anchored (`#hero`, `#story`, `#schedule`, `#faq`, `#location`, `#form`) and linked from the nav. Note `#story` holds the couple's welcome note now, not a "how we met" narrative — the id/class names (`story`, `grid-story`) predate that content and weren't renamed since renaming would mean touching CSS/JS selectors and the `#story` anchor for no functional gain.
- `css/style.css` — one stylesheet, mobile-first, media queries placed next to the rule they modify (not grouped at the end). Design tokens (colors/fonts/spacing) are CSS custom properties in `:root` at the top — change those rather than hardcoding values elsewhere.
- `js/i18n.js` — flat `Wedding.translations` dictionary (`{ cs, en }` per key), keyed by the `data-i18n-key` values used throughout `index.html`. All bilingual copy lives here, not scattered in HTML.
- `js/main.js` — all page behavior: language toggle/persistence (`initI18n`), nav solid-background-on-scroll via `IntersectionObserver` (`initNavScrollState`), hamburger menu (`initHamburger`), FAQ accordion (`initAccordion`), RSVP form submit handling (`initFormSubmit`), scroll-triggered fade/rise-in for sections (`initScrollReveal`).
- `assets/fonts/` — self-hosted Lato (Regular + Bold, woff2), pulled directly from latofonts.com rather than Google Fonts because the Google Fonts subset lacks some Czech diacritics. Cormorant Garamond (headings) is loaded from Google Fonts in `index.html`. License: `assets/fonts/LATO-OFL.txt`.
- `assets/motif.svg` — a hand-drawn sprig, inlined directly as `<svg>` markup in `index.html` (as the hero's `.hero-motif` watermark) rather than referenced via `<img>`/`background-image`, so its `fill="currentColor"` path can be recolored/dimmed with plain CSS. If it's reused elsewhere, inline it the same way rather than pointing at the file — see the "CSS masking cross-browser gotcha" note below for why.
- `assets/daniel_nekonecny.webp`, `assets/welcome_photo.jpg` — content photos, floated inside their sections (see "Floated photo + wrapped text" below).

### Adding a new bilingual piece of text

1. Add the key to `Wedding.translations` in `js/i18n.js` with both `cs` and `en` values.
2. Reference it in `index.html` via `data-i18n-key="yourKey"` on the element (its initial content should be the Czech version, since `cs` is the default language before JS runs).

`applyTranslations()` in `js/main.js` sets `innerHTML`, not `textContent`, so translation strings may embed inline tags (`<strong>`, `<em>`, `<a href="...">`, `<br>`) — safe here since `Wedding.translations` is static developer-authored copy, never user input. When a value does contain markup, the element's initial HTML in `index.html` must mirror that markup exactly (real `<strong>`/`<a>` tags, not escaped text), since that's what's rendered before JS runs and what `cs` gets reset back to. A translation can also be an intentionally empty string for copy that only exists in one language (e.g. `faqADresscodeEnNote`); pair that with the `.accordion-panel-inner p:empty { display: none; }` rule in `style.css` so the empty `<p>` doesn't leave a gap.

### CSS masking cross-browser gotcha

Don't use `mask-image`/`-webkit-mask-image` to recolor an SVG that's solid-black-on-transparent (like `motif.svg`). The CSS Masking spec's default mode for an image-based mask is *luminance*, and black has ~0 luminance — so the shape masks itself out to nothing in any spec-compliant browser, even though it may render fine in a Chromium build still falling back to legacy alpha-based `-webkit-mask-image` behavior. Inline the SVG and recolor via `fill="currentColor"` + CSS `color` instead (see `.hero-motif` in `style.css`/`index.html`).

### Floated photo + wrapped text

`.story-photo` and `.faq-dresscode-image` share a pattern: photo floated top-left, paragraph text wrapping around it and flowing full-width once it clears the bottom. Both need their containing block to establish a block formatting context (`display: flow-root` on `.story`, `overflow: hidden` on `.accordion-panel-inner`) or the float overflows into whatever comes next instead of being contained. `.faq-dresscode-image` drops the float entirely below 768px (full-width, stacked above the text instead) since there's too little column width on mobile for a photo and wrapped text to coexist; `.story-photo` stays floated at all sizes.

### Mobile/desktop reordering via `.content-grid`

Sections are visually reordered between breakpoints purely through `grid-template-areas` in `.content-grid` (`style.css`) — every section keeps a fixed `grid-area` binding (`.grid-rsvp` → area `rsvp`, etc.), and only the area layout changes at the `768px` breakpoint. **DOM order is kept equal to the mobile (single-column) visual order**, since CSS Grid repositioning doesn't reorder tab/reading order — only the DOM does. So to change the mobile section order, reorder the `<section>` elements in `index.html` *and* update the mobile `grid-template-areas` list in `style.css` to match; don't just edit one or the other.

### FAQ accordion answers: single vs. multi-paragraph

Most `#faq` answers are one `<p class="accordion-panel-inner" data-i18n-key="...">` — the class and the translated content live on the same element. An answer needing multiple paragraphs (e.g. the dresscode or trip-tips FAQs) instead wraps them in `<div class="accordion-panel-inner">` containing several plain `<p data-i18n-key="...">` children, one key per paragraph. `style.css`'s `.accordion-panel-inner p { margin: 0 0 1.25rem; }` rule exists for this second case — follow it (not `<br>`-joined single paragraphs) whenever an answer needs real blank-line separation.

### The RSVP form (`#form` section)

The `<form id="rsvp-form">` in `index.html` posts directly to a Google Form's response endpoint (`.../formResponse`) — each `<input>`/`<select>`/`<textarea>` is named `entry.<id>`, matching that specific Google Form's actual question IDs. It is not an iframe embed, so it's styled like the rest of the site; instead it submits into a hidden `<iframe name="hidden_iframe">` so the page never navigates away. `initFormSubmit()` in `js/main.js` listens for that iframe's `load` event (ignoring the initial blank-page load) and swaps the form for `#form-thanks`. This is an optimistic confirmation only — the page can't read Google's cross-origin response to verify the submission was actually accepted.

**This integration is not live-synced to the Google Form.** It was generated once from a snapshot of the form's questions. If the actual Google Form's questions are ever added, removed, reordered, or retyped, the hardcoded `entry.<id>` fields in `index.html` must be manually updated to match, or submissions will silently fail to map correctly.

`#form-thanks` is deliberately a sibling of `<form>`, not nested inside it — hiding the form on submit must not also hide the thank-you message.

## Known placeholders

Search for `REPLACE-ME` (OG meta tags in `index.html`) and bracketed placeholder text in `faqAParking` (`js/i18n.js`) — these are intentionally left unfinished pending real content (deployed URL, parking info).
