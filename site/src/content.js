// =============================================================
// CONTENT — edit this file to update the site.
// Everything the page shows is defined here.
// =============================================================

export const SITE_CONTENT = {
  meta: {
    title: "Adam Glynn-Finnegan — Designer",
    tagline: "",
    address: [],
    signatureGif: "/assets/adamgf-signature.gif",
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
    cta: { label: "Say hello", href: "mailto:info@adamgf.com?subject=Hi!" },
  },

  timeline: [
    { years: "2021 —",        place: "Netflix"  },
    { years: "2020 → 2021",   place: "Flux"     },
    { years: "2015 → 2020",   place: "Airbnb"   },
    { years: "2011 → 2015",   place: "Evernote" },
  ],

  featured: [
    { title: "Originator Studio",          company: "Netflix"  },
    { title: "Graffiti",                   company: "Netflix"  },
    { title: "Games launch",               company: "Netflix"  },
    { title: "Trust Map",                  company: "Airbnb"   },
    { title: "Design System",              company: "Airbnb"   },
    { title: "Android app",                company: "Airbnb"   },
    { title: "Android app",                company: "Evernote" },
    { title: "Remember Everything",        company: "the Evernote brand" },
  ],

  writing: {
    blurb:
      "I have written on design for Wired, Fast Company & Creative Review as well as features in design books like the ‘A Book Apart’ collection.",
    marquee: "Latest Article  〰️  Read it here  〰️",
    marqueeHref: "#",
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
      { label: "LinkedIn", href: "#" },
    ],
  },
};
