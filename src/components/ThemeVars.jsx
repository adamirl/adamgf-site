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
  };
  const dark = {
    "--bg": "#14120F",
    "--bg-alt": "#1E1B16",
    "--fg": "#EFE8D8",
    "--fg-muted": "#908878",
    "--rule": "rgba(239,232,216,0.18)",
    "--sig-filter": "invert(0.94)",
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
