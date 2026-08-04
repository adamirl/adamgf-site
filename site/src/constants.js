// =============================================================
// Site-wide constants — fonts, accent palette, cursor defaults.
// =============================================================

export const FONT_PAIRS = {
  "Editorial (Fraunces + Inter)": {
    display: "'Fraunces', 'Times New Roman', serif",
    body: "'Inter', system-ui, sans-serif",
  },
  "Classic (Cormorant + Work Sans)": {
    display: "'Cormorant Garamond', Georgia, serif",
    body: "'Work Sans', system-ui, sans-serif",
  },
  "Modern (Playfair + IBM Plex Sans)": {
    display: "'Playfair Display', Georgia, serif",
    body: "'IBM Plex Sans', system-ui, sans-serif",
  },
  "Hybrid (EB Garamond + IBM Plex Mono)": {
    display: "'EB Garamond', Georgia, serif",
    body: "'IBM Plex Mono', ui-monospace, monospace",
  },
};

export const ACCENTS = [
  { name: "Cobalt", value: "#0000D9" },
  { name: "Lime",   value: "#81E900" },
  { name: "Sun",    value: "#FFC400" },
  { name: "Orange", value: "#F34C00" },
  { name: "Pink",   value: "#CE37CC" },
  { name: "Black",  value: "#000000" },
];

export const ACCENTS_BY_THEME = {
  light: ["#0000D9", "#F34C00", "#000000"],
  dark:  ["#81E900", "#FFC400", "#CE37CC"],
};

export const TWEAK_DEFAULTS = {
  variation: "bold",
  accent: "#0000D9",
  fontPair: "Editorial (Fraunces + Inter)",
  theme: "light",
  cursorEffect: "mesh",
  cursorRadius: 80,
  cursorHoverMultiplier: 9.6,
  brandMesh: true,
  aboutStyle: "wild",
};

// Hex trios keyed by brand — main color first, then two harmonics.
export const BRAND_MESH = {
  airbnb:  ["#FF5A5F", "#FF8A5C", "#FFC0B8"],
  flux:    ["#1D63DC", "#4FA3FF", "#B8D4FF"],
  netflix: ["#E50914", "#831010", "#FF4D4D"],
  hello:   ["#ff4b1f", "#ffa07a", "#ffe1c2"],
};
