import React from "react";
import { ThemeVars } from "./components/ThemeVars.jsx";
import { CursorFollower } from "./components/CursorFollower.jsx";
import { MoodPicker } from "./components/MoodPicker.jsx";
import { VariationSafe } from "./variations/VariationSafe.jsx";
import { VariationBold } from "./variations/VariationBold.jsx";
import { useTweaks } from "./hooks/useTweaks.js";
import { ACCENTS_BY_THEME } from "./constants.js";
import { SITE_CONTENT } from "./content.js";

// Readable stays monochrome — its accent just matches body text per theme,
// rather than picking up one of the bold view's brand colors.
const READABLE_ACCENT = { light: "#000000", dark: "#EFE8D8" };

// Matches the same 720px cutoff VariationBold uses for its "narrow" layout.
function useIsMobile(query = "(max-width: 720px)") {
  const read = () =>
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia(query).matches
      : false;
  const [isMobile, setIsMobile] = React.useState(read);
  React.useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, [query]);
  return isMobile;
}

export default function App() {
  const [state, update] = useTweaks();
  const isMobile = useIsMobile();

  // On mobile there's only the Readable version — the View (bold) layout and
  // its Light/Dark + accent controls are hidden entirely. Readable is always
  // light with a black accent, so force those regardless of saved prefs.
  const variation = isMobile ? "safe" : state.variation;
  const theme = isMobile ? "light" : state.theme;
  const accent = isMobile ? "#000000" : state.accent;

  const Variation = variation === "bold" ? VariationBold : VariationSafe;

  return (
    <React.Fragment>
      <ThemeVars theme={theme} accent={accent} fontPair={state.fontPair} />
      <CursorFollower
        effect={state.cursorEffect}
        radius={state.cursorRadius}
        hoverMultiplier={state.cursorHoverMultiplier}
        theme={theme}
        brandMesh={state.brandMesh}
        // Readable view: keep the cursor mesh, but don't let it react to
        // links (no scale-up, no brand color shift on hover).
        hoverReactive={variation !== "safe"}
      />
      {!isMobile && (
        <MoodPicker
          accent={state.accent}
          accentsForTheme={ACCENTS_BY_THEME[state.theme] || ACCENTS_BY_THEME.light}
          onAccentChange={(v) => update({ accent: v })}
          mode={state.variation === "bold" ? "view" : "read"}
          onModeChange={(m) => {
            if (m === "view") {
              const valid = ACCENTS_BY_THEME[state.theme] || ACCENTS_BY_THEME.light;
              const nextAccent = valid.includes(state.accent) ? state.accent : valid[0];
              update({ variation: "bold", aboutStyle: "wild", accent: nextAccent });
            } else {
              // Readable: monochrome accent (matches body text) on whichever
              // theme is currently active.
              update({ variation: "safe", accent: READABLE_ACCENT[state.theme] || READABLE_ACCENT.light });
            }
          }}
          theme={state.theme}
          onThemeChange={(t) => {
            if (state.variation === "safe") {
              // Stay in Readable, just flip its monochrome accent to match.
              update({ theme: t, accent: READABLE_ACCENT[t] || READABLE_ACCENT.light });
              return;
            }
            const valid = ACCENTS_BY_THEME[t] || [];
            const nextAccent = valid.includes(state.accent) ? state.accent : valid[0];
            update({ theme: t, accent: nextAccent, variation: "bold", aboutStyle: "wild" });
          }}
        />
      )}
      <Variation content={SITE_CONTENT} aboutStyle={state.aboutStyle} theme={theme} />
    </React.Fragment>
  );
}
