import React from "react";
import { TWEAK_DEFAULTS } from "../constants.js";

const KEY = "adamgf-tweaks-v3";

export function useTweaks() {
  const [state, setState] = React.useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || "null");
      const merged = { ...TWEAK_DEFAULTS, ...(saved || {}) };
      // Safety: never boot with cursor off — that's confusing if you forget.
      if (merged.cursorEffect === "off") merged.cursorEffect = "mesh";
      // Every fresh landing starts in "view" (bold), never Readable — even for
      // returning visitors who last left it on Readable. Other saved prefs
      // (theme, font, cursor) are kept; only the view/read mode is reset.
      merged.variation = "bold";
      merged.aboutStyle = "wild";
      return merged;
    } catch {
      return { ...TWEAK_DEFAULTS };
    }
  });
  React.useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      // localStorage unavailable (e.g. private browsing) — state still works in-memory.
    }
  }, [state]);
  const update = (patch) => setState((s) => ({ ...s, ...patch }));
  return [state, update];
}
