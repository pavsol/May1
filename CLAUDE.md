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

- `index.html` — all markup and content for the single-page site. Sections are anchored (`#hero`, `#story`, `#schedule`, `#faq`, `#location`, `#form`) and linked from the nav.
- `css/style.css` — one stylesheet, mobile-first, media queries placed next to the rule they modify (not grouped at the end). Design tokens (colors/fonts/spacing) are CSS custom properties in `:root` at the top — change those rather than hardcoding values elsewhere.
- `js/i18n.js` — flat `Wedding.translations` dictionary (`{ cs, en }` per key), keyed by the `data-i18n-key` values used throughout `index.html`. All bilingual copy lives here, not scattered in HTML.
- `js/main.js` — all page behavior: language toggle/persistence (`initI18n`), nav solid-background-on-scroll via `IntersectionObserver` (`initNavScrollState`), hamburger menu (`initHamburger`), FAQ accordion (`initAccordion`), RSVP form submit handling (`initFormSubmit`).
- `assets/fonts/` — self-hosted Lato (Regular + Bold, woff2), pulled directly from latofonts.com rather than Google Fonts because the Google Fonts subset lacks some Czech diacritics. Cormorant Garamond (headings) is loaded from Google Fonts in `index.html`. License: `assets/fonts/LATO-OFL.txt`.

### Adding a new bilingual piece of text

1. Add the key to `Wedding.translations` in `js/i18n.js` with both `cs` and `en` values.
2. Reference it in `index.html` via `data-i18n-key="yourKey"` on the element (its initial text content should be the Czech version, since `cs` is the default language before JS runs).

### The RSVP form (`#form` section)

The `<form id="rsvp-form">` in `index.html` posts directly to a Google Form's response endpoint (`.../formResponse`) — each `<input>`/`<select>`/`<textarea>` is named `entry.<id>`, matching that specific Google Form's actual question IDs. It is not an iframe embed, so it's styled like the rest of the site; instead it submits into a hidden `<iframe name="hidden_iframe">` so the page never navigates away. `initFormSubmit()` in `js/main.js` listens for that iframe's `load` event (ignoring the initial blank-page load) and swaps the form for `#form-thanks`. This is an optimistic confirmation only — the page can't read Google's cross-origin response to verify the submission was actually accepted.

**This integration is not live-synced to the Google Form.** It was generated once from a snapshot of the form's questions. If the actual Google Form's questions are ever added, removed, reordered, or retyped, the hardcoded `entry.<id>` fields in `index.html` must be manually updated to match, or submissions will silently fail to map correctly.

`#form-thanks` is deliberately a sibling of `<form>`, not nested inside it — hiding the form on submit must not also hide the thank-you message.

## Known placeholders

Search for `REPLACE-ME` (OG meta tags in `index.html`) and bracketed placeholder text in `faqAParking`/`faqATrips` (`js/i18n.js`) — these are intentionally left unfinished pending real content (deployed URL, parking info, trip tips).
