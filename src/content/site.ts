/**
 * Unico punto di configurazione testi / URL per un nuovo sito.
 * Dopo aver scompattato lo starter: modifica questo file, poi public/robots.txt e public/sitemap.xml (URL reali).
 */
export const site = {
  /**
   * URL canonico senza slash finale (sitemap, Open Graph, link rel=canonical).
   * Se usi anche www, imposta un redirect 301 tra apex e www nel DNS o CDN (un solo host canonico).
   */
  origin: "https://kyne.it",

  name: "Kyne",
  /** Titolo scheda browser / default SEO */
  defaultTitle: "Kyne — Inbox unificata per assistenza multicanale",
  /** Meta description home */
  defaultDescription:
    "Piattaforme enterprise come Freshdesk offrono centinaia di funzioni che spesso non servono: costi alti e interfacce lente. Kyne è un SaaS verticale: un'unica inbox, conversazioni, team e classificazione AI — e basta.",

  nav: [
    { label: "Home", to: "/" },
    { label: "Privacy", to: "/privacy-policy" },
  ] as const,

  footer: {
    note: "© {year} Kyne. Tutti i diritti riservati.",
    productAttribution: {
      beforeLink: "ZenBake è un prodotto ",
      companyLabel: "Modelwork.ai",
      companyUrl: "https://modelwork.ai",
    } as const,
    legalLine: "P.IVA 03005800424 · REA AN – 304153",
    links: [{ label: "Privacy Policy", to: "/privacy-policy" }] as const,
  },

  home: {
    eyebrow: "Assistenza su più canali",
    headline: "La lingua comune delle tue conversazioni.",
    subhead:
      "WhatsApp Business API, Facebook Messenger, Instagram e form web: tutte le conversazioni in una coda chiara. Assegni agli operatori, classifichi con l'AI e lavori più veloce — senza pagare per centinaia di moduli che non userai mai.",

    primaryCta: { label: "Scrivici", href: "#contatti" },
    secondaryCta: { label: "Cosa include Kyne", href: "#punti-chiave" },

    blocks: [
      {
        id: "punti-chiave",
        title: "Solo ciò che serve al team",
        items: [
          {
            title: "Inbox unificata",
            body: "Un solo posto per rispondere: meno passaggi tra strumenti, meno errori e tempi di risposta più coerenti su tutti i canali collegati.",
          },
          {
            title: "Conversazioni e assegnazioni",
            body: "Stato chiaro, passaggio di consegne tra operatori e responsabilità sul singolo thread — pensato per chi fa assistenza ogni giorno, non per il catalogo funzioni.",
          },
          {
            title: "Classificazione AI",
            body: "L'intelligenza artificiale aiuta a etichettare e prioritizzare, così il team vede prima ciò che conta. Kyne non promette di sostituire le persone: le affianca.",
          },
        ],
      },
      {
        id: "contatti",
        title: "Contatti",
        body: "Kyne è in fase di prodotto: se gestite assistenza multicanale e volete raccontarci come lavorate oggi, scriveteci. Ci aiuta a costruire nel modo giusto.",
        email: "hello@kyne.it",
      },
    ],
  },

  privacy: {
    title: "Privacy policy",
    pageTitle: "Privacy policy | Kyne",
    description:
      "Informativa provvisoria: sostituire con testo revisionato da legale prima della raccolta dati reali e dell'apertura del servizio.",
    sections: [
      {
        heading: "Titolare del trattamento",
        paragraphs: [
          "Indicare qui ragione sociale, sede legale, partita IVA / Codice fiscale e un indirizzo email dedicato ai trattamenti privacy (es. privacy@kyne.it). Fino ad aggiornamento, questa pagina ha valore esemplificativo.",
        ],
      },
      {
        heading: "Dati trattati",
        paragraphs: [
          "Il sito potrà trattare dati tecnici di navigazione, eventuali dati forniti tramite moduli o email, e in futuro dati legati al servizio Kyne (account, log, contenuti delle conversazioni gestite in piattaforma). Per ciascuna categoria andranno indicate finalità, base giuridica e tempi di conservazione in conformità al GDPR.",
        ],
      },
      {
        heading: "Diritti dell'interessato",
        paragraphs: [
          "Gli interessati potranno esercitare i diritti di accesso, rettifica, cancellazione, limitazione del trattamento, portabilità e opposizione ove applicabili, nonché proporre reclamo all'Autorità Garante per la protezione dei dati personali (www.garanteprivacy.it).",
        ],
      },
    ],
  },
} as const;

export function siteYear(): string {
  return String(new Date().getFullYear());
}
