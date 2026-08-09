import React from "react";

export function MoodPicker({ accent, accentsForTheme, onAccentChange, mode, onModeChange, theme, onThemeChange }) {
  const rowStyle = {
    display: "flex",
    alignItems: "center",
    gap: 16,
    paddingBlock: 12,
  };

  const segWrap = {
    display: "inline-flex",
    border: "1px solid var(--rule)",
    borderRadius: 999,
    padding: 3,
    gap: 2,
  };

  const segBtn = (active) => ({
    fontFamily: "'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace",
    fontSize: 12,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    padding: "6px 14px",
    borderRadius: 999,
    border: "none",
    cursor: "pointer",
    background: active ? "var(--fg)" : "transparent",
    color: active ? "var(--bg)" : "var(--fg-muted)",
    transition: "background .15s, color .15s",
  });

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "clamp(20px, 3vw, 32px) clamp(16px, 4vw, 32px) 0",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {/* Light/Dark + accent swatches + Readable */}
      <div style={rowStyle}>
        <div style={segWrap}>
          <button type="button" style={segBtn(mode === "view" && theme === "light")} onClick={() => onThemeChange("light")}>Light</button>
          <button type="button" style={segBtn(mode === "view" && theme === "dark")} onClick={() => onThemeChange("dark")}>Dark</button>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginLeft: 8, opacity: mode === "view" ? 1 : 0, pointerEvents: mode === "view" ? "auto" : "none", transition: "opacity 200ms ease" }}>
          {accentsForTheme.map((value) => {
            const active = value === accent;
            return (
              <button
                key={value}
                type="button"
                aria-label={value}
                onClick={() => onAccentChange(value)}
                style={{
                  width: active ? 36 : 24,
                  height: 24,
                  borderRadius: 999,
                  border: "none",
                  background: value,
                  padding: 0,
                  cursor: "pointer",
                  transition: "width 200ms ease, transform 120ms ease",
                  outline: active ? "2px solid var(--fg)" : "none",
                  outlineOffset: 2,
                }}
                onMouseEnter={(e) => !active && (e.currentTarget.style.transform = "scale(1.15)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            );
          })}
        </div>
        <div style={{ ...segWrap, marginLeft: "auto" }}>
          <button type="button" style={segBtn(mode === "view")} onClick={() => onModeChange("view")}>View</button>
          <button type="button" style={segBtn(mode === "read")} onClick={() => onModeChange("read")}>Readable</button>
        </div>
      </div>
    </div>
  );
}
