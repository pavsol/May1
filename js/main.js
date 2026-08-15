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
  if (toggle) toggle.textContent = lang === 'cs' ? 'EN' : 'CS';
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

initI18n();
initNavScrollState();
initHamburger();
initAccordion();
