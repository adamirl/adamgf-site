// =============================================================
// CONTENT — edit this file to update the site.
// Everything the page shows is defined here.
// =============================================================

export const SITE_CONTENT = {
  meta: {
    title: "Adam Glynn-Finnegan — Designer",
    tagline: "",
    address: [],
    // BASE_URL is Vite's configured `base` (e.g. "/adamgf-site/" on a GitHub
    // Pages project page, or "/" once on the custom domain) — a plain string
    // literal here would silently 404 whenever the site isn't served from
    // the domain root, which is exactly what happened after the move to
    // github.io/adamgf-site/.
    signatureGif: `${import.meta.env.BASE_URL}assets/adamgf-signature.gif`,
    // Pre-inverted (white) signature used only on the dark theme, so we no
    // longer need the CSS invert() hack (see --sig-filter in ThemeVars).
    signatureGifDark: `${import.meta.env.BASE_URL}assets/adamgf_signature_dark.gif`,
  },

  intro: {
    // Intro paragraph — links are rendered as <a> when {url,label} objects appear.
    lead: "I’m Adam Glynn-Finnegan, a Product Designer and Creative Director building memorable brands.",
    body: [
      "I am an accomplished design leader, currently heading up ",
      { label: "Netflix", url: "https://www.netflix.com", brand: "netflix" },
      " Localization — building the world’s best entertainment studio. Prior to that I was Head of Design at ",
      { label: "Flux", url: "https://www.beamery.com", brand: "flux" },
      ", creating a product that helps people grow their careers. Previously I was a Design leader at ",
      { label: "Airbnb", url: "https://www.airbnb.com", brand: "airbnb" },
      " where I created products that made travel easier — and more inspiring — to plan and book. I have also established the design practice at several early-stage startups with three acquisitions. Though I am currently living on the West Coast of the US, I still wake up at 5am throughout the year to watch Ireland rugby matches.",
    ],
    aside: "I would be happy to share case studies on request.",
    cta: { label: "Say hello!", href: "mailto:info@adamgf.com?subject=Hi!" },
  },

  // `location` and `detail` only render on the Readable page (see
  // VariationSafe.jsx). Fill these in — location is where you lived during
  // that role, detail is a line on notable projects/teams.
  timeline: [
    {
      years: "2021 —",
      place: "Netflix",
      location: "Los Angeles, CA",
      detail:
        "I lead the Localization design team, helping make Netflix feel immersive no matter what language you speak. My team designs the post-production and creator tools used for TV and film productions across the globe, translating our content into 50+ languages. Previously I was the Staff Designer for the Content suite, designing tools to launch the Games business in 2021 and the Ads business in 2023, and leading major shifts in personalization and content discovery. I built the foundational AI and LLM UX systems for content tagging, ad targeting, and subtitle and dubbing creation.",
    },
    {
      years: "2021 —",
      place: "Investing",
      location: "",
      // readableOnly: renders on the Readable page (VariationSafe) but is
      // filtered out of the Bold "View" timeline.
      readableOnly: true,
      detail:
        "I invest in early-stage companies, bringing the experience of having built the design practice at several startups with three acquisitions to the founders I back. I'm especially drawn to companies building design tools (Figma, Webflow) and to industries where great user experience is pivotal to disruption (Healthcare tech and AI).",
    },
    {
      years: "2020 → 2021",
      place: "Flux",
      location: "San Francisco, CA & Portland, OR",
      detail:
        "Head of Design at an early-stage startup, where I led the design of a completely new, AI-first approach to career development and hiring. Acquired by Beamery in 2022.",
    },
    {
      years: "2015 → 2020",
      place: "Airbnb",
      location: "San Francisco, CA",
      detail:
        "I joined the team that introduced Airbnb's first design system. I led design on the homepage experience for two years, driving large increases in the core metric of nights booked through investments in Search and Discovery and steady improvements to the booking flow. My work on the Android app won Airbnb the Google Design Award in 2016. I later owned the identity and verification surfaces, including profiles and reviews, as we reorganized Trust and Safety into a vision-led group focused on Trust.",
    },
    {
      years: "2011 → 2015",
      place: "Evernote",
      location: "London, UK & Mountain View, CA",
      detail:
        "I was the company's first employee in Europe and led design for all web and marketing, helping the startup grow from 5 million to 150 million users in three years. I developed the global Evernote brand, launched websites in 22 languages, and built the first design system. I then moved from branding into product leadership, designing the Android and iOS apps and winning a Google Design Award.",
    },
  ],

  featured: [
    { title: "Originator Studio",          company: "Netflix"  },
    { title: "Graffiti",                   company: "Netflix"  },
    { title: "Games launch",               company: "Netflix"  },
    { title: "Trust Map",                  company: "Airbnb"   },
    { title: "Design System",              company: "Airbnb"   },
    { title: "Airbnb app",                 company: "Airbnb"   },
    { title: "Evernote app",               company: "Evernote" },
    { title: "Remember Everything",        company: "the Evernote brand" },
  ],

  writing: {
    blurb:
      "I have written on design for Wired, Fast Company & Creative Review as well as features in design books like the ‘A Book Apart’ collection.",
    marquee: "Latest Article  〰️  Read it here  〰️",
    marqueeHref: "https://www.uxdesigninstitute.com/blog/netflix-product-design-interview/",
  },

  awards: [
    "Silicon Valley Global Awards – Top 50 Leaders in Tech",
    "Webby Award – Airbnb",
    "Google Material Design Award – Airbnb",
    "Google Design Showcase – Evernote",
    "Apple Design Award – Evernote",
    "Red Dot Design Award – Evernote",
    "Webby Award, Best Mobile App – Evernote",
    "Webby Award, Best Website – Wagamama",
  ],

  contact: {
    email: "info@adamgf.com",
    social: [
      { label: "Email",    href: "mailto:info@adamgf.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/adamgf/" },
      { label: "VSCO",     href: "https://vsco.co/adamgf/gallery" },
    ],
  },
};
