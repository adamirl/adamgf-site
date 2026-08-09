import React from "react";
import { ThemeVars } from "./components/ThemeVars.jsx";
import { CursorFollower } from "./components/CursorFollower.jsx";
import { MoodPicker } from "./components/MoodPicker.jsx";
import { VariationSafe } from "./variations/VariationSafe.jsx";
import { VariationBold } from "./variations/VariationBold.jsx";
import { useTweaks } from "./hooks/useTweaks.js";
import { ACCENTS_BY_THEME } from "./constants.js";
import { SITE_CONTENT } from "./content.js";

export default function App() {
  const [state, update] = useTweaks();

  const Variation = state.variation === "bold" ? VariationBold : VariationSafe;

  return (
    <React.Fragment>
      <ThemeVars
        theme={state.theme}
        accent={state.accent}
        fontPair={state.fontPair}
      />
      <CursorFollower
        effect={state.cursorEffect}
        radius={state.cursorRadius}
        hoverMultiplier={state.cursorHoverMultiplier}
        theme={state.theme}
        brandMesh={state.brandMesh}
      />
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
      <Variation content={SITE_CONTENT} aboutStyle={state.aboutStyle} />
    </React.Fragment>
  );
}
