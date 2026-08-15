// Site behavior: nav scroll-state, hamburger menu, accordion, language toggle.
// Loaded as a module, so it already runs after the DOM is parsed — no
// DOMContentLoaded wrapper needed.

const LANG_STORAGE_KEY = 'wedding-lang';

/** Writes every [data-i18n-key] element's text for the given language,
 *  updates <html lang>, persists the choice, and flips the toggle label. */
function applyTranslations(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n-key]').forEach((el) => {
    const entry = Wedding.translations[el.dataset.i18nKey];
    if (entry && entry[lang]) el.textContent = entry[lang];
  });

  localStorage.setItem(LANG_STORAGE_KEY, lang);

  const toggle = document.getElementById('lang-toggle');
  if (toggle) toggle.textContent = lang === 'cs' ? 'English' : 'Česky';
}

function initI18n() {
  const savedLang = localStorage.getItem(LANG_STORAGE_KEY) || 'cs';
  applyTranslations(savedLang);

  document.getElementById('lang-toggle').addEventListener('click', () => {
    const next = document.documentElement.lang === 'cs' ? 'en' : 'cs';
    applyTranslations(next);
  });
}

/** Solid nav background once the hero has scrolled out of view. Uses
 *  IntersectionObserver instead of a scroll listener: it's async off the
 *  main thread and fires only on the actual visibility change, no manual
 *  throttling needed. */
function initNavScrollState() {
  const hero = document.getElementById('hero');
  const nav = document.getElementById('site-nav');

  const observer = new IntersectionObserver(
    ([entry]) => nav.classList.toggle('nav-solid', !entry.isIntersecting),
    { rootMargin: '-1px 0px 0px 0px' }
  );
  observer.observe(hero);
}

function initHamburger() {
  const toggle = document.getElementById('hamburger-toggle');
  const menu = document.getElementById('nav-menu');

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  };

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('is-open', !expanded);
  });

  // Close the mobile menu after picking a link, and on Escape.
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

/** Borderless accordion: toggling .is-open animates the panel's
 *  grid-template-rows from 0fr to 1fr in CSS (see style.css), so no height
 *  measurement is needed here — just flip the class and aria-expanded. */
function initAccordion() {
  document.querySelectorAll('.accordion-trigger').forEach((button) => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      document.getElementById(button.getAttribute('aria-controls')).classList.toggle('is-open', !expanded);
    });
  });
}

/** The RSVP form posts to Google's response endpoint into a hidden iframe
 *  (see index.html) so the page never navigates away. The iframe's own
 *  first "load" fires once for its initial blank page before any
 *  submission happens, so a real submit has to happen first before that
 *  load event is treated as "the response was sent" and the thank-you
 *  message is shown. We can't read the iframe's cross-origin content, so
 *  this is an optimistic confirmation, not a guarantee. */
function initFormSubmit() {
  const form = document.getElementById('rsvp-form');
  const iframe = document.getElementById('hidden_iframe');
  const thanks = document.getElementById('form-thanks');
  if (!form || !iframe || !thanks) return;

  let submitted = false;
  form.addEventListener('submit', () => {
    submitted = true;
  });
  iframe.addEventListener('load', () => {
    if (!submitted) return;
    form.hidden = true;
    thanks.hidden = false;
  });
}

/** Fades + rises each section into view as it's scrolled to. The .reveal
 *  class (and its opacity:0 starting state, see style.css) is added here
 *  rather than living in CSS from the start, so content stays visible if
 *  this script fails to run. observe() fires its callback immediately with
 *  the element's current intersection state, so anything already in the
 *  viewport on page load is revealed right away instead of staying hidden. */
function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const targets = document.querySelectorAll('#rsvp, #story, .schedule-box, #faq, #location, #form');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((target) => {
    target.classList.add('reveal');
    observer.observe(target);
  });
}

initI18n();
initNavScrollState();
initHamburger();
initAccordion();
initFormSubmit();
initScrollReveal();
