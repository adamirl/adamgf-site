import React from "react";
import { BRAND_MESH } from "../constants.js";

export function CursorFollower({ effect, radius, hoverMultiplier, theme, brandMesh, hoverReactive = true }) {
  const ref = React.useRef(null);
  const [ripples, setRipples] = React.useState([]);
  const [enabled] = React.useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  // Pointer tracker (non-ripple effects)
  React.useEffect(() => {
    if (!enabled || effect === "ripple" || effect === "off") return;
    // Start off-screen so we don't flash in the center before the mouse moves.
    // The element only ever becomes visible once `x`/`y` are set to a real
    // pointer position on the first move, so opacity never needs to be
    // touched imperatively (that used to fight with the opacity React sets
    // via the `inner` style object below and left the follower stuck fully
    // opaque instead of its intended per-theme value).
    let x = -9999, y = -9999, tx = -9999, ty = -9999;
    let scale = 1, tScale = 1;
    let raf;
    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      const target = e.target instanceof Element ? e.target : null;
      const over = hoverReactive && target ? target.closest("a, button, [data-hover]") : null;
      const isChrome =
        over &&
        (over.hasAttribute("data-cursor-ignore") ||
          over.closest("[data-cursor-ignore]"));
      tScale = over && !isChrome ? hoverMultiplier : 1;

      // Brand-reactive mesh: detect data-brand on hovered link. When not
      // hover-reactive (Readable view), brandEl stays null so the else branch
      // clears any brand color left over from the other view.
      if (brandMesh && effect === "mesh") {
        const brandEl = hoverReactive && target ? target.closest("[data-brand]") : null;
        const brand = brandEl ? brandEl.getAttribute("data-brand") : null;
        const el = ref.current;
        if (el) {
          if (brand && BRAND_MESH[brand]) {
            const [c1, c2, c3] = BRAND_MESH[brand];
            el.style.setProperty("--m1", c1);
            el.style.setProperty("--m2", c2);
            el.style.setProperty("--m3", c3);
            el.dataset.brandActive = brand;
          } else {
            el.style.removeProperty("--m1");
            el.style.removeProperty("--m2");
            el.style.removeProperty("--m3");
            delete el.dataset.brandActive;
          }
        }
      }
    };
    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      scale += (tScale - scale) * 0.18;
      // Re-read ref each frame — it may not be mounted on effect-entry
      // when `effect` changes and React remounts the element.
      const el = ref.current;
      if (el) {
        el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    loop();
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled, effect, hoverMultiplier, brandMesh, hoverReactive]);

  // Ripple mode: spawn ring on movement (throttled)
  React.useEffect(() => {
    if (!enabled || effect !== "ripple") return;
    let last = 0;
    let id = 0;
    const onMove = (e) => {
      const now = performance.now();
      if (now - last < 60) return;
      last = now;
      const r = { id: id++, x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev.slice(-8), r]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((p) => p.id !== r.id));
      }, 900);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, effect]);

  if (!enabled || effect === "off") return null;

  if (effect === "ripple") {
    return (
      <React.Fragment>
        {ripples.map((r) => (
          <span
            key={r.id}
            aria-hidden="true"
            style={{
              position: "fixed",
              left: r.x,
              top: r.y,
              width: radius,
              height: radius,
              marginLeft: -radius / 2,
              marginTop: -radius / 2,
              borderRadius: 999,
              border: `2px solid var(--accent)`,
              pointerEvents: "none",
              zIndex: 9999,
              animation: "ripple 900ms ease-out forwards",
              mixBlendMode: "difference",
            }}
          />
        ))}
      </React.Fragment>
    );
  }

  // Shared positioned wrapper for dot / mesh / glow / ring
  const commonWrap = {
    position: "fixed",
    top: 0,
    left: 0,
    width: radius,
    height: radius,
    borderRadius: 999,
    pointerEvents: "none",
    zIndex: 9999,
  };

  let inner;
  if (effect === "dot") {
    inner = {
      ...commonWrap,
      background: "var(--accent)",
      mixBlendMode: "difference",
      opacity: 0.9,
    };
  } else if (effect === "mesh") {
    inner = {
      ...commonWrap,
      background:
        "radial-gradient(circle at 30% 30%, var(--m1, var(--accent)) 0%, transparent 55%), radial-gradient(circle at 70% 60%, var(--m2, #7A9FE5) 0%, transparent 55%), radial-gradient(circle at 50% 80%, var(--m3, #F0C27B) 0%, transparent 60%)",
      filter: theme === "dark"
        ? "blur(18px) saturate(1.6) brightness(1.4)"
        : "blur(14px) saturate(1.5)",
      mixBlendMode: theme === "dark" ? "screen" : "normal",
      opacity: theme === "dark" ? 0.95 : 0.38,
      transition: "--m1 .4s ease, --m2 .4s ease, --m3 .4s ease, opacity .4s ease",
    };
  } else if (effect === "glow") {
    inner = {
      ...commonWrap,
      background:
        "radial-gradient(circle, var(--accent) 0%, rgba(255,75,31,0.35) 40%, transparent 70%)",
      filter: "blur(8px)",
      mixBlendMode: "screen",
      opacity: 0.9,
    };
  } else if (effect === "ring") {
    inner = {
      ...commonWrap,
      border: "2px solid var(--accent)",
      background: "transparent",
      mixBlendMode: "difference",
    };
  } else {
    inner = commonWrap;
  }

  return <div ref={ref} aria-hidden="true" style={inner} />;
}
