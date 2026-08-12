import React from "react";
import { ThemeVars } from "./components/ThemeVars.jsx";
import { CursorFollower } from "./components/CursorFollower.jsx";
import { MoodPicker } from "./components/MoodPicker.jsx";
import { VariationSafe } from "./variations/VariationSafe.jsx";
import { VariationBold } from "./variations/VariationBold.jsx";
import { useTweaks } from "./hooks/useTweaks.js";
import { ACCENTS_BY_THEME } from "./constants.js";
import { SITE_CONTENT } from "./content.js";

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
              // Readable: black accent on light theme
              update({ variation: "safe", theme: "light", accent: "#000000" });
            }
          }}
          theme={state.theme}
          onThemeChange={(t) => {
            const valid = ACCENTS_BY_THEME[t] || [];
            // Coming from Readable (variation === "safe") always resets to the first
            // accent for the new theme so Light returns to Cobalt and Dark to Lime.
            const wasReadable = state.variation === "safe";
            const nextAccent = wasReadable
              ? valid[0]
              : (valid.includes(state.accent) ? state.accent : valid[0]);
            update({ theme: t, accent: nextAccent, variation: "bold", aboutStyle: "wild" });
          }}
        />
      )}
      <Variation content={SITE_CONTENT} aboutStyle={state.aboutStyle} theme={theme} />
    </React.Fragment>
  );
}
