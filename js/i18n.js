// Translation dictionary for the whole site, keyed by the data-i18n-key
// value used in index.html. Kept as one flat file so all copy for both
// languages lives in a single place instead of being scattered across HTML
// attributes. main.js reads window.Wedding.translations to apply a language.
window.Wedding = window.Wedding || {};

Wedding.translations = {
  skipLink: { cs: 'Přeskočit na obsah', en: 'Skip to content' },

  navMenu: { cs: 'Menu', en: 'Menu' },
  navWelcome: { cs: 'Uvítání', en: 'Welcome' },
  navSchedule: { cs: 'Program', en: 'Schedule' },
  navFaq: { cs: 'Praktické informace', en: 'Practical information' },
  navLocation: { cs: 'Místo', en: 'Location' },

  heroTitle: { cs: 'Lucie & Pavel', en: 'Lucie & Pavel' },
  heroSubtitle: { cs: '1. května 2027 ✦ 13 hodin', en: 'May 1, 2027 ✦ 1 PM' },

  rsvpBody: {
    cs: 'Budeme rádi, když nám svou účast potvrdíte do 1. února 2027.',
    en: "We'd be delighted if you could confirm your attendance by February 1, 2027."
  },
  rsvpCta: { cs: 'Přijedete?', en: 'Will you come?' },

  storyHeading: { cs: 'Milí hosté,', en: 'Dear guests,' },
  storyGreeting: {
    cs: 'jsme víc než rádi, že s námi oslavíte náš den (a také První máj). Předem moc děkujeme a moc se na Vás těšíme!',
    en: "we're beyond happy that you'll celebrate our day with us (and May Day too!). Thank you in advance — we truly can't wait to see you!"
  },
  storySignature: { cs: 'Lucka & Pavel', en: 'Lucka & Pavel' },

  scheduleTitle: { cs: 'Program', en: 'Schedule' },
  scheduleArrivalTime: { cs: 'od 11:00', en: 'From 11:00' },
  scheduleArrival: { cs: 'Příjezd hostů', en: 'Guest arrival' },
  scheduleCeremony: { cs: 'Obřad', en: 'Ceremony' },
  scheduleToastLunch: { cs: 'Přípitek & Oběd', en: 'Toast & lunch' },
  scheduleCakeDance: {
    cs: 'Krájení svatebního frgálu & První tanec',
    en: 'Cutting the wedding frgál & first dance'
  },
  scheduleDinnerTime: { cs: 'Od 18:00', en: 'From 18:00' },
  scheduleDinner: { cs: 'Večerní raut', en: 'Evening buffet' },
  scheduleBouquet: {
    cs: 'Házení kytice (Nejen pro svobodné!)',
    en: 'Bouquet toss (not just for singles!)'
  },
  scheduleAfterpartyTime: { cs: 'Poté:', en: 'Then:' },
  scheduleAfterpartySuffix: { cs: 'do rána', en: 'until dawn' },

  faqTitle: { cs: 'Praktické informace', en: 'Practical information' },

  faqQChildren: { cs: 'Můžu vzít děti?', en: 'Can I bring children?' },
  faqAChildren: {
    cs: 'Děti jsou vítány. Necháme na vás, jestli s námi budete slavit jako celá rodina nebo protančíte noc ve dvou.',
    en: "Children are welcome. It's up to you whether you celebrate with us as a whole family or dance the night away just the two of you."
  },

  faqQAccommodation: { cs: 'Bude zajištěno ubytování?', en: 'Will accommodation be provided?' },
  faqAAccommodation: {
    cs: 'Počítáme se zajištěním ubytování přímo v Jimramovských Pavlovicích pro hosty přijíždějící z daleka (mimo Žďársko). Prosíme, uveďte ve svatebním formuláři, kdo by rád ubytování využil, a detaily doladíme individuálně.',
    en: "We're planning to arrange accommodation right in Jimramovské Pavlovice for guests travelling from farther away (outside the Žďár area). Please indicate in the wedding form who'd like to use it, and we'll work out the details individually."
  },

  faqQParking: { cs: 'Parkování', en: 'Parking' },
  faqAParking: { cs: '[doplnit informace o parkování]', en: '[add parking information]' },

  faqQRideHome: { cs: 'Bude zajištěn odvoz domů?', en: 'Will a ride home be provided?' },
  faqARideHome: {
    cs: 'Ano, k dispozici bude několik řidičů.',
    en: 'Yes, several drivers will be available.'
  },

  faqQDresscode: { cs: 'Jaký je dresscode?', en: 'What is the dress code?' },
  faqADresscodeLadies: {
    cs: 'Dámy nechť dorazí v podpatcích o minimální výši 12 cm. Budeme rádi, když jedna bota bude zlatá a druhá stříbrná. Večerní róba v barvách Bengálského zálivu o páté ranní, teplotě vody 12.3 ˚C s nádechem olejové skvrny silně preferována.',
    en: "Ladies, please arrive in heels at least 12 cm high. We'd love it if one shoe were gold and the other silver. An evening gown in the colors of the Bay of Bengal at five in the morning, water temperature 12.3°C, with a hint of an oil slick is strongly preferred."
  },
  faqADresscodeGents: {
    cs: 'Pánové ať neopomenou fuchsiový cylindr. Ještě větší radost nám ovšem uděláte eukalyptově zelenou vrtulkou na hlavě. Kdo by tápal ohledně stylu obleku, nechť se inspiruje šatníkem mistra Daniela Nekonečného.',
    en: "Gentlemen, don't forget a fuchsia top hat. You'll make us even happier with a eucalyptus-green propeller beanie. If you're unsure about suit style, take inspiration from master Daniel Nekonečný's wardrobe."
  },
  faqADresscodeSerious: {
    cs: 'A teď vážně. <strong>Nelpíme na konkrétních barvách ani stylu.</strong> Oděv vybírejte podle toho, co máte rádi, a aktuální předpovědi počasí. <strong>Ve stodole budeme mít teplomety.</strong>',
    en: "Now seriously. <strong>We don't insist on any specific colors or style.</strong> Choose your outfit based on what you like and the weather forecast. <strong>We'll have heaters in the barn.</strong>"
  },
  // English-only aside — no Czech equivalent, so cs is deliberately empty
  // (see the :empty rule in style.css, which collapses the <p> when unset).
  faqADresscodeEnNote: {
    cs: '',
    en: 'A suit or trousers + shirt is common at Czech weddings, but not strictly required.'
  },
  faqADresscodeClosing: {
    cs: '<em>Pokud byste si ani po přečtení nebyli jisti, které pokyny jsou pravdivé, raději se nám ozvěte, ať zbytečně neinvestujete do vrtulek.</em>',
    en: "<em>If after reading this you're still not sure which instructions are genuine, better reach out to us — no need to invest in propeller beanies for nothing.</em>"
  },

  faqQTravel: {
    cs: 'Jak se dostanu na místo? (pro mezinárodní hosty)',
    en: 'How do I get there? (for international guests)'
  },
  faqATravel: {
    cs: 'Z hlavního nádraží Praha se dostanete přímým spojem do Žďáru nad Sázavou, kde vás někdo vyzvedne autem. Vlakové spojení najdete <a href="https://www.cd.cz/en/default.htm" target="_blank" rel="noopener noreferrer">tady</a>.',
    en: 'From Prague\'s main train station, you can take a direct connection to Žďár nad Sázavou, where someone will pick you up by car. You can find the train connections <a href="https://www.cd.cz/en/default.htm" target="_blank" rel="noopener noreferrer">here</a>.'
  },

  faqQTrips: { cs: 'Tipy na výlety po okolí', en: 'Tips for trips around the area' },
  faqATripsIntro: {
    cs: 'Jimramovské Pavlovice leží v krásné krajině, proto Vám rádi dáme pár tipů, s čím výlet na svatbu spojit, pokud byste chtěli.',
    en: "Jimramovské Pavlovice sits in beautiful countryside, so we're happy to share a few ideas for turning the wedding into a bit of a trip, if you'd like."
  },
  faqATripsTrail: {
    cs: 'Přímo ve vesničce najdete začátek moc hezké <a href="https://mapy.com/s/hamapefabu" target="_blank" rel="noopener noreferrer">Modráskovy naučné stezky</a>, která měří 1,2 km a provede vás jarním údolím. Najdete tam i luční bar.',
    en: 'Right in the village you\'ll find the start of the lovely <a href="https://mapy.com/s/hamapefabu" target="_blank" rel="noopener noreferrer">Modráskova naučná stezka</a> (nature trail), 1.2 km long, leading you through a spring valley. There\'s a meadow bar there too.'
  },
  faqATripsLookout: {
    cs: 'Pokud byste na cestě tam nebo zpět měli více času, určitě doporučujeme nechat auto <a href="https://mapy.com/s/bokanunosa" target="_blank" rel="noopener noreferrer">zde</a> a projít se po žluté turistické značce na vyhlídku <a href="https://mapy.com/s/hatejuboba" target="_blank" rel="noopener noreferrer">Kamenice</a>. Najdete tam nádherný výhled (nevěstin vůbec nejoblíbenější) a <a href="https://mapy.com/s/cavedurabo" target="_blank" rel="noopener noreferrer">Pomník Broučků</a>, který odkazuje na slavnou pohádkovou knížku (Jan Karafiát pocházel z nedalekého Jimramova). A ano, také luční bar.',
    en: 'If you have more time on the way there or back, we\'d definitely recommend leaving the car <a href="https://mapy.com/s/bokanunosa" target="_blank" rel="noopener noreferrer">here</a> and following the yellow trail markers up to the <a href="https://mapy.com/s/hatejuboba" target="_blank" rel="noopener noreferrer">Kamenice</a> lookout. You\'ll find a gorgeous view there (the bride\'s absolute favorite) and the <a href="https://mapy.com/s/cavedurabo" target="_blank" rel="noopener noreferrer">Pomník Broučků</a> (Firefly Monument), referencing the famous fairy-tale book (its author, Jan Karafiát, was from nearby Jimramov). And yes — another meadow bar too.'
  },

  locationTitle: { cs: 'Místo konání', en: 'Location' },
  locationDetails: {
    cs: 'Obřad i hostina se budou konat v Rodinném penzionu Jimramovské Pavlovice.<br>Vezmeme se při obřadu na louce, poté se přesuneme na hostinu do stodoly (kde by se při zásadní nepřízni počasí konal i obřad).',
    en: "The ceremony and reception will both take place at Rodinný penzion Jimramovské Pavlovice.<br>We'll marry in the meadow, then move to the barn for the reception (which would also host the ceremony in case of serious bad weather)."
  },
  locationAddress: {
    cs: '<a href="https://www.rodinny-penzion.cz/" target="_blank" rel="noopener noreferrer">Rodinný penzion Jimramovské Pavlovice</a>, Jimramovské Pavlovice 17',
    en: '<a href="https://www.rodinny-penzion.cz/" target="_blank" rel="noopener noreferrer">Rodinný penzion Jimramovské Pavlovice</a>, Jimramovské Pavlovice 17'
  },

  navForm: { cs: 'Vyplnit formulář', en: 'Fill out the form' },
  formTitle: { cs: 'Svatební formulář', en: 'Wedding form' },
  formIntro: {
    cs: 'Budeme rádi, když nám svou účast potvrdíte do 1. února 2027 a doplníte několik praktických detailů.',
    en: "We'd be delighted if you could confirm your attendance by February 1, 2027, and fill in a few practical details."
  },
  formChoosePlaceholder: { cs: 'Vyberte…', en: 'Choose…' },
  formAdultsLabel: { cs: 'Kolik dospělých přijede?', en: 'How many adults are attending?' },
  formChildrenLabel: {
    cs: 'Kolik přijede dětí, které potřebují vlastní židli?',
    en: 'How many children need their own chair?'
  },
  formNamesLabel: { cs: 'Prosíme, napište nám svá jména.', en: 'Please write your names.' },
  formAccommodationLabel: {
    cs: 'Potřebujete ubytování ze soboty na neděli?',
    en: 'Do you need accommodation from Saturday to Sunday?'
  },
  formYes: { cs: 'Ano', en: 'Yes' },
  formNo: { cs: 'Ne', en: 'No' },
  formOther: { cs: 'Jiné:', en: 'Other:' },
  formAccommodationNoteTitle: {
    cs: 'Pro zahraniční hosty automaticky zajišťujeme ubytování na místě také z pátku na sobotu.',
    en: 'For foreign guests, we automatically include accommodation on site also from Friday to Saturday.'
  },
  formAccommodationNoteDesc: {
    cs: 'Dejte nám prosím vědět, pokud tuto možnost nevyužijete nebo máte nějaké zvláštní požadavky.',
    en: "Please let us know if you don't need this or have any special needs."
  },
  formDietLabel: { cs: 'Máte nějaká omezení jídelníčku?', en: 'Do you have any dietary restrictions?' },
  formDietVegetarian: { cs: 'Vegetarián/ka', en: 'Vegetarian' },
  formDietVegan: { cs: 'Vegan/ka', en: 'Vegan' },
  formDietGlutenFree: { cs: 'Bez lepku', en: 'Gluten-free' },
  formDietLactoseFree: { cs: 'Bez laktózy', en: 'Lactose-free' },
  formMessageLabel: { cs: 'Chcete nám říct ještě něco?', en: "Anything else you'd like to tell us?" },
  formSubmit: { cs: 'Odeslat', en: 'Submit' },
  formThanks: {
    cs: 'Děkujeme a těšíme se!',
    en: 'Thank you! Your response has been submitted.'
  },

  footerText: { cs: 'Lucie & Pavel · 1. 5. 2027', en: 'Lucie & Pavel · May 1, 2027' }
};
