import React from "react";
import { FONT_PAIRS } from "../constants.js";

export function ThemeVars({ theme, accent, fontPair }) {
  const pair = FONT_PAIRS[fontPair] || FONT_PAIRS["Editorial (Fraunces + Inter)"];
  const light = {
    "--bg": "#F7F7F7",
    "--bg-alt": "#EBEBEB",
    "--fg": "#1B1A17",
    "--fg-muted": "#6B665C",
    "--rule": "rgba(27,26,23,0.18)",
    "--sig-filter": "none",
    // multiply shows the dark signature and drops its white/transparent halo on
    // the light background.
    "--sig-blend": "multiply",
  };
  const dark = {
    "--bg": "#14120F",
    "--bg-alt": "#1E1B16",
    "--fg": "#EFE8D8",
    "--fg-muted": "#908878",
    "--rule": "rgba(239,232,216,0.18)",
    // No filter — dark mode now uses the pre-inverted signatureGifDark asset.
    "--sig-filter": "none",
    // screen is multiply's mirror: shows the white signature and drops its
    // dark/transparent halo on the dark background. (multiply would crush the
    // white logo to black here.)
    "--sig-blend": "screen",
  };
  const pal = theme === "dark" ? dark : light;
  const vars = {
    ...pal,
    "--accent": accent,
    "--font-display": pair.display,
    "--font-body": pair.body,
  };
  React.useEffect(() => {
    const root = document.documentElement;
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
    root.style.background = pal["--bg"];
    root.style.color = pal["--fg"];
    document.body.style.background = pal["--bg"];
    document.body.style.color = pal["--fg"];
  });
  return null;
}
