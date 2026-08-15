# Lucie & Pavel — wedding website

Static site, no build step. Open `index.html` directly or serve the folder
(e.g. `python3 -m http.server`) and deploy as-is to GitHub Pages or Netlify.

## Before going live, replace these placeholders

1. **OG meta tags** in `index.html` — replace `https://REPLACE-ME.example/` in `og:url` and `og:image` with the real deployed URL. Search for `REPLACE-ME` to find it.
2. **Hero background** — currently a solid `var(--color-dark)` in `css/style.css` (`.hero` rule). Swap in a `background-image` once you have a photo; the solid color is already set up as a fallback, so leave it in place.
3. **Placeholder copy** — the "Our story" paragraph (`js/i18n.js`, keys `storyP1`) and a couple of FAQ answers (`faqA4`, `faqA6`) contain bracketed or generic placeholder details — edit freely to match your actual story/logistics.
4. **Schedule items** — `index.html`'s `#schedule .timeline` currently lists ceremony/lunch/first dance. Add more `<li class="timeline-item">` entries following the existing pattern (dot + time + label), and add matching translation keys in `js/i18n.js` if you want them bilingual.

## The RSVP form (`#form` section)

The form in `index.html` posts directly to your Google Form's response endpoint
(`.../formResponse`) with each field named `entry.<id>`, matching the live
form's actual question IDs — not an iframe, so it's styled like the rest of
the site. It submits into a hidden `<iframe>` so the page never navigates
away; `js/main.js`'s `initFormSubmit()` shows a "thank you" message once that
iframe reports a response was sent (an optimistic confirmation — the page
can't read Google's cross-origin response to verify it was accepted).

**If you ever edit the questions in the actual Google Form** (add/remove/
reorder/retype a question), the hardcoded fields in `index.html` will fall
out of sync and need to be updated to match — this integration isn't live-synced
to the form, it was generated once from a snapshot of it.

## Structure

- `index.html` — all markup and content.
- `css/style.css` — one stylesheet; colors/fonts/spacing are CSS custom properties at the top (`:root`), easy to restyle.
- `js/i18n.js` — the Czech/English translation dictionary.
- `js/main.js` — nav scroll-state, hamburger menu, accordion, language toggle behavior.
- `assets/fonts/` — self-hosted Lato (Regular + Bold, woff2), downloaded directly from latofonts.com because the Google Fonts subset is missing some Czech diacritics. License: `assets/fonts/LATO-OFL.txt`.
