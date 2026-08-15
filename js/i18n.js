// Translation dictionary for the whole site, keyed by the data-i18n-key
// value used in index.html. Kept as one flat file so all copy for both
// languages lives in a single place instead of being scattered across HTML
// attributes. main.js reads window.Wedding.translations to apply a language.
window.Wedding = window.Wedding || {};

Wedding.translations = {
  skipLink: { cs: 'Přeskočit na obsah', en: 'Skip to content' },

  navMenu: { cs: 'Menu', en: 'Menu' },
  navRsvp: { cs: 'Vyplnit formulář', en: 'Fill out the form' },
  navStory: { cs: 'Náš příběh', en: 'Our story' },
  navSchedule: { cs: 'Program', en: 'Schedule' },
  navFaq: { cs: 'Praktické informace', en: 'Practical information' },
  navLocation: { cs: 'Místo', en: 'Location' },

  heroTitle: { cs: 'Lucie & Pavel', en: 'Lucie & Pavel' },
  heroSubtitle: { cs: '1. května 2027 ✦ 13 hodin', en: 'May 1, 2027 ✦ 1 PM' },

  rsvpBody: {
    cs: 'Budeme rádi, když nám svou účast potvrdíte do 1. března 2027.',
    en: "We'd be delighted if you could confirm your attendance by March 1, 2027."
  },
  rsvpCta: { cs: 'Přijedete?', en: 'Will you come?' },

  storyTitle: { cs: 'Náš příběh', en: 'Our story' },
  storyP1: {
    cs: 'Naše cesta začala úplně obyčejně a skončila úplně výjimečně. Potkali jsme se [doplnit kde] a od té doby víme, že chceme jít životem společně. Tahle stránka vznikla, abychom se o tenhle den mohli podělit s vámi — s lidmi, na kterých nám nejvíc záleží.',
    en: 'Our story started somewhere ordinary and became something extraordinary. We met [add where] and have known ever since that we wanted to walk through life together. This page exists so we can share this day with you — the people who matter to us most.'
  },

  scheduleTitle: { cs: 'Program', en: 'Schedule' },
  scheduleCeremony: { cs: 'Obřad', en: 'Ceremony' },
  scheduleLunch: { cs: 'Oběd', en: 'Lunch' },
  scheduleFirstDance: { cs: 'První tanec', en: 'First dance' },

  faqTitle: { cs: 'Praktické informace', en: 'Practical information' },

  faqQ1: { cs: 'Můžu si vzít doprovod?', en: 'Can I bring a plus one?' },
  faqA1: {
    cs: 'Ano, dejte nám prosím vědět v RSVP formuláři, ať s doprovodem počítáme.',
    en: 'Yes — just let us know in the RSVP form so we can plan for your plus one.'
  },
  faqQ2: { cs: 'Můžu vzít děti?', en: 'Can I bring children?' },
  faqA2: {
    cs: 'Děti jsou vítány, prosíme jen o upřesnění počtu ve formuláři.',
    en: 'Children are welcome — please just specify the number in the form.'
  },
  faqQ3: { cs: 'Bude zajištěno ubytování?', en: 'Will accommodation be provided?' },
  faqA3: {
    cs: 'Ano, v okolí je několik možností ubytování, doporučení pošleme včas.',
    en: 'Yes, there are several accommodation options nearby — we will send recommendations in advance.'
  },
  faqQ4: { cs: 'Bude zajištěn odvoz večer?', en: 'Will there be a ride back in the evening?' },
  faqA4: {
    cs: 'Ano, plánujeme odvoz zpět do okolních obcí, detaily upřesníme blíže datu.',
    en: 'Yes, we are planning transport back to nearby towns, details closer to the date.'
  },
  faqQ5: { cs: 'Jaký je dresscode?', en: 'What is the dress code?' },
  faqA5: {
    cs: 'Doporučujeme společenský oděv v zemitých tónech.',
    en: 'Semi-formal attire in earthy tones is recommended.'
  },
  faqQ6: {
    cs: 'Jak se dostanu na místo? (pro mezinárodní hosty)',
    en: 'How do I get there? (for international guests)'
  },
  faqA6: {
    cs: 'Nejbližší letiště je Brno nebo Praha, odtud doporučujeme pronájem auta nebo vlak do Žďáru nad Sázavou.',
    en: 'The nearest airports are Brno or Prague; from there we recommend a rental car or a train to Žďár nad Sázavou.'
  },
  faqQ7: { cs: 'Je robotický vysavač vhodný dar?', en: 'Is a robot vacuum a good gift?' },
  faqA7: {
    cs: 'Upřímně ano, ale hlavně nás potěší vaše přítomnost.',
    en: 'Honestly, yes — but truly, your presence is the best gift.'
  },

  locationTitle: { cs: 'Místo konání', en: 'Location' },
  locationAddress: {
    cs: 'Rodinný penzion Jimramovské Pavlovice, Jimramovské Pavlovice 17',
    en: 'Rodinný penzion Jimramovské Pavlovice, Jimramovské Pavlovice 17'
  },

  footerText: { cs: 'Lucie & Pavel · 1. 5. 2027', en: 'Lucie & Pavel · May 1, 2027' }
};
