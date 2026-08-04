// =============================================================
// VariationBold — confident editorial grid, oversized type,
// asymmetric layout. Same content, more visual personality.
// =============================================================
import React from "react";
import { Reveal } from "../components/Reveal.jsx";

const boldStyles = {
  page: {
    minHeight: "100vh",
    padding: "clamp(20px, 3vw, 36px) clamp(20px, 4vw, 48px) 48px",
    color: "var(--fg)",
  },
  grid12: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    columnGap: "clamp(12px, 1.8vw, 24px)",
    rowGap: 0,
  },
  sigLabel: {
    gridColumn: "1 / 2",
    fontFamily: "'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace",
    fontSize: 13,
    letterSpacing: "0.06em",
    color: "var(--fg-muted)",
    paddingTop: 12,
    backgroundImage: "linear-gradient(var(--accent), var(--accent))",
    backgroundSize: "16px 2px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 0",
    alignSelf: "start",
  },
  sigHero: {
    gridColumn: "2 / -1",
    margin: "0 0 clamp(32px, 5vw, 64px)",
    overflow: "visible",
    lineHeight: 0,
  },
  sigImg: {
    width: "min(100%, 420px)",
    height: "auto",
    mixBlendMode: "multiply",
    filter: "var(--sig-filter)",
  },
  tagline: {
    gridColumn: "1 / 7",
    fontFamily: "var(--font-display)",
    fontStyle: "italic",
    fontSize: "clamp(18px, 1.8vw, 22px)",
    color: "var(--fg-muted)",
    borderTop: "1px solid var(--rule)",
    paddingTop: 16,
  },
  introSection: {
    gridColumn: "1 / -1",
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    columnGap: "clamp(12px, 1.8vw, 24px)",
    rowGap: 0,
    borderTop: "1px solid var(--rule)",
    borderBottom: "1px solid var(--rule)",
    margin: "clamp(24px, 4vw, 48px) 0 clamp(40px, 6vw, 80px)",
  },
  introBlock: {
    gridColumn: "1 / -1",
    display: "grid",
    gridTemplateColumns: "subgrid",
    padding: "clamp(28px, 4vw, 48px) 0",
  },
  introBlockDivider: {
    borderTop: "1px solid var(--rule)",
  },
  introLabel: {
    gridColumn: "1 / 2",
    fontFamily: "'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace",
    fontSize: 13,
    letterSpacing: "0.06em",
    color: "var(--fg-muted)",
    whiteSpace: "nowrap",
    paddingTop: 12,
    backgroundImage: "linear-gradient(var(--accent), var(--accent))",
    backgroundSize: "16px 2px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 0",
    alignSelf: "start",
  },
  introLead: {
    gridColumn: "2 / -1",
    margin: 0,
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: "clamp(36px, 4.6vw, 68px)",
    lineHeight: 1.05,
    letterSpacing: "-0.02em",
    whiteSpace: "pre-line",
  },
  introBody: {
    gridColumn: "2 / 10",
    margin: 0,
    fontFamily: "var(--font-body)",
    fontSize: "clamp(17px, 1.4vw, 20px)",
    lineHeight: 1.6,
    color: "var(--fg)",
    textWrap: "pretty",
  },
  leadAccent: {
    fontStyle: "italic",
    color: "var(--accent)",
  },
  introCtaRow: {
    gridColumn: "1 / -1",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: 24,
    margin: "0 0 clamp(40px, 6vw, 80px)",
  },
  aside: {
    fontFamily: "var(--font-body)",
    fontStyle: "italic",
    fontSize: 14,
    color: "var(--fg-muted)",
  },
  cta: {
    display: "inline-flex",
    alignItems: "baseline",
    gap: 12,
    fontFamily: "var(--font-display)",
    fontSize: "clamp(24px, 2.6vw, 32px)",
    color: "var(--fg)",
    textDecoration: "none",
    padding: "18px 0",
  },
  ctaDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    background: "var(--accent)",
    display: "inline-block",
    transform: "translateY(-4px)",
  },
  sectionLabel: {
    gridColumn: "1 / 2",
    fontFamily: "'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace",
    fontSize: 13,
    letterSpacing: "0.06em",
    color: "var(--fg-muted)",
    paddingTop: 12,
    backgroundImage: "linear-gradient(var(--accent), var(--accent))",
    backgroundSize: "16px 2px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 0",
    alignSelf: "start",
  },
  sectionTitle: {
    gridColumn: "2 / -1",
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: "clamp(44px, 7vw, 112px)",
    lineHeight: 1,
    letterSpacing: "-0.02em",
    margin: "0 0 clamp(32px, 5vw, 64px)",
    paddingTop: 16,
    borderTop: "1px solid var(--rule)",
  },
  timelineList: {
    gridColumn: "2 / -1",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    columnGap: "clamp(16px, 2vw, 32px)",
    rowGap: 24,
    padding: "clamp(24px, 4vw, 40px) 0",
    borderTop: "1px solid var(--rule)",
    borderBottom: "1px solid var(--rule)",
    alignItems: "baseline",
  },
  timelineCol: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    alignItems: "flex-start",
    transition: "color .25s ease, opacity .25s ease",
  },
  timelinePlace: {
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: "clamp(24px, 2.4vw, 36px)",
    lineHeight: 1.05,
    letterSpacing: "-0.015em",
  },
  timelineYears: {
    fontFamily: "var(--font-body)",
    fontSize: 12,
    color: "var(--fg-muted)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  },
  featuredList: {
    gridColumn: "2 / -1",
    position: "relative",
  },
  featuredRow: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    columnGap: 24,
    alignItems: "baseline",
    padding: "clamp(20px, 3vw, 36px) 0",
    borderTop: "1px solid var(--rule)",
    cursor: "default",
    position: "relative",
    transition: "color .25s ease, opacity .25s ease",
  },
  featuredTitle: {
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: "clamp(22px, 3vw, 44px)",
    lineHeight: 1.05,
    letterSpacing: "-0.015em",
  },
  featuredCompany: {
    fontFamily: "var(--font-body)",
    fontSize: "clamp(13px, 1.1vw, 15px)",
    color: "var(--fg-muted)",
    letterSpacing: "0.02em",
    textAlign: "right",
    fontStyle: "italic",
  },
  featuredPreview: {
    position: "fixed",
    top: 0,
    left: 0,
    width: 320,
    height: 220,
    background: "#000",
    pointerEvents: "none",
    zIndex: 40,
    opacity: 0,
    transform: "translate(-9999px, -9999px) translate(-50%, -50%) scale(.92)",
    transition: "opacity .25s ease, transform .35s cubic-bezier(.2,.7,.2,1)",
    boxShadow: "0 30px 60px -20px rgba(0,0,0,0.45)",
  },
  writingBody: {
    gridColumn: "2 / 10",
    fontFamily: "var(--font-body)",
    fontSize: "clamp(17px, 1.4vw, 20px)",
    lineHeight: 1.6,
    color: "var(--fg)",
    marginBottom: 48,
  },
  awardsGrid: {
    gridColumn: "2 / -1",
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "grid",
    gap: 14,
  },
  awardCell: {
    fontFamily: "var(--font-body)",
    fontWeight: 400,
    fontSize: "clamp(16px, 1.35vw, 19px)",
    lineHeight: 1.55,
    color: "var(--fg)",
    paddingBottom: 14,
    borderBottom: "1px solid var(--rule)",
  },
  footer: {
    gridColumn: "1 / -1",
    marginTop: "clamp(80px, 12vw, 140px)",
    paddingTop: 32,
    borderTop: "1px solid var(--rule)",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 24,
    fontFamily: "var(--font-body)",
    fontSize: 12,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--fg-muted)",
  },
  socials: { display: "flex", gap: 20, flexWrap: "wrap" },
  sectionSpacer: {
    gridColumn: "1 / -1",
    height: "clamp(80px, 12vw, 160px)",
  },
};

function BoldLink({ href, children, brand }) {
  return (
    <a
      href={href}
      data-brand={brand || undefined}
      style={{
        color: "var(--accent)",
        textDecoration: "underline",
        textDecorationThickness: "1px",
        textUnderlineOffset: "3px",
        fontFamily: "var(--font-display)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.textDecorationThickness = "2px")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.textDecorationThickness = "1px")
      }
    >
      {children}
    </a>
  );
}

function renderBoldBody(parts) {
  return parts.map((p, i) =>
    typeof p === "string" ? (
      <React.Fragment key={i}>{p}</React.Fragment>
    ) : (
      <BoldLink key={i} href={p.url} brand={p.brand}>
        {p.label}
      </BoldLink>
    )
  );
}

function AboutWild({ content, leadHead, leadMid1, leadMid2, leadTail }) {
  // Broken-grid editorial layout: Swiss/post-Swiss with deliberate breaks.
  // Two visible structural rules (v-rule + h-rule) divide the frame into
  // four regions. The 00.2 label is rotated and crosses the synopsis band's
  // top rule — that overlap is the "break."
  const ink = "var(--fg)";
  const paper = "transparent";
  const accent = "var(--accent)";

  // Responsive: below ~720px the broken grid gets cramped — switch to a
  // stacked variant that preserves the same vocabulary (rules, mono labels,
  // bracketed band) but in a vertical reading order.
  const [narrow, setNarrow] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 720px)");
    const update = () => setNarrow(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const monoLabel = {
    fontFamily: "'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace",
    fontSize: 13,
    fontWeight: 400,
    letterSpacing: "0.06em",
    lineHeight: 1,
    color: "var(--fg-muted)",
    whiteSpace: "nowrap",
  };

  if (narrow) {
    return (
      <section
        style={{
          gridColumn: "1 / -1",
          margin: "clamp(30px, 5vw, 60px) auto clamp(40px, 6vw, 80px)",
          width: "100%",
          maxWidth: 1200,
          background: paper,
          color: ink,
          position: "relative",
          padding: 24,
        }}
      >
        {/* Registration ticks */}
        <span style={{ position: "absolute", top: 8, left: 8, width: 12, height: 12, borderLeft: `1.5px solid var(--accent)`, borderTop: `1.5px solid var(--accent)` }} />
        <span style={{ position: "absolute", top: 8, right: 8, width: 12, height: 12, borderRight: `1.5px solid var(--accent)`, borderTop: `1.5px solid var(--accent)` }} />
        <span style={{ position: "absolute", bottom: 8, left: 8, width: 12, height: 12, borderLeft: `1.5px solid var(--accent)`, borderBottom: `1.5px solid var(--accent)` }} />
        <span style={{ position: "absolute", bottom: 8, right: 8, width: 12, height: 12, borderRight: `1.5px solid var(--accent)`, borderBottom: `1.5px solid var(--accent)` }} />

        {/* Region A label */}
        <div style={{ marginBottom: 16 }}>
          <span style={monoLabel}>00.1</span>
        </div>

        {/* Blurb headline */}
        <h1
          style={{
            margin: "0 0 28px",
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(27px, 6.8vw, 41px)",
            lineHeight: 1.05,
            letterSpacing: "-0.015em",
            color: ink,
            textWrap: "balance",
            whiteSpace: "pre-line",
          }}
        >
          {leadHead}
          <span style={{ fontStyle: "italic", color: accent }}>{leadMid1}</span>
          {leadMid2}
          <span style={{ fontStyle: "italic", color: accent }}>{leadTail}</span>
        </h1>

        {/* Synopsis band — single column on narrow */}
        <div
          style={{
            paddingTop: 12,
            paddingBottom: 12,
            borderTop: `1.5px dotted var(--accent-soft)`,
          }}
        >
          <div
            style={{
              ...monoLabel,
              marginBottom: 14,
            }}
          >
            00.2
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14.5,
              lineHeight: 1.55,
              color: ink,
            }}
          >
            {content.intro.body.map((p, i) =>
              typeof p === "string" ? (
                <React.Fragment key={i}>{p}</React.Fragment>
              ) : (
                <a
                  key={i}
                  href={p.url}
                  data-brand={p.brand || undefined}
                  style={{
                    color: accent,
                    textDecoration: "underline",
                    textDecorationThickness: "1px",
                    textUnderlineOffset: "2px",
                  }}
                >
                  {p.label}
                </a>
              )
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      style={{
        gridColumn: "1 / -1",
        margin: "clamp(30px, 5vw, 60px) auto clamp(40px, 6vw, 80px)",
        width: "100%",
        maxWidth: 1200,
        background: paper,
        color: ink,
        position: "relative",
        // 4:3 frame via aspect-ratio; min-height so it never collapses on narrow screens.
        aspectRatio: "4 / 3",
        minHeight: 540,
      }}
    >
      {/* Registration ticks — L-shapes in each outer corner */}
      <span style={{ position: "absolute", top: 8, left: 8, width: 12, height: 12, borderLeft: `1.5px solid var(--accent)`, borderTop: `1.5px solid var(--accent)` }} />
      <span style={{ position: "absolute", top: 8, right: 8, width: 12, height: 12, borderRight: `1.5px solid var(--accent)`, borderTop: `1.5px solid var(--accent)` }} />
      <span style={{ position: "absolute", bottom: 8, left: 8, width: 12, height: 12, borderLeft: `1.5px solid var(--accent)`, borderBottom: `1.5px solid var(--accent)` }} />
      <span style={{ position: "absolute", bottom: 8, right: 8, width: 12, height: 12, borderRight: `1.5px solid var(--accent)`, borderBottom: `1.5px solid var(--accent)` }} />

      {/* Live area — 32px padding on all sides */}
      <div
        style={{
          position: "absolute",
          inset: 32,
          // 12-col grid with 16px gutters used for column-2-vs-column-3 boundary calc
          // gutterTotal = 11 * 16 = 176px ; colWidth = (W - 176) / 12
          // v-rule offset from left = 2 * colWidth + 2 * 16 = 2*colWidth + 32
        }}
      >
        {/* Vertical rule — between col 2 and col 3 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "calc((100% - 176px) / 12 * 2 + 32px)",
            width: 0,
            borderLeft: `1.5px dotted var(--accent-soft)`,
          }}
        />
        {/* Horizontal rule — at 38% from top */}
        <div
          style={{
            position: "absolute",
            top: "38%",
            left: 0,
            right: 0,
            height: 0,
            borderTop: `1.5px solid ${ink}`,
          }}
        />

        {/* Region A — 00.1 label */}
        <div
          style={{
            position: "absolute",
            top: 6,
            left: 0,
          }}
        >
          <div style={monoLabel}>00.1</div>
        </div>

        {/* Region B — Blurb headline */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "calc((100% - 176px) / 12 * 2 + 32px + 16px)", // v-rule + one gutter
            right: 0,
            // Bottom stops 12px above the h-rule (38%)
            height: "calc(38% - 12px)",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(34px, 4.25vw, 61px)",
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
              color: ink,
              textWrap: "balance",
              whiteSpace: "pre-line",
            }}
          >
            {leadHead}
            <span style={{ fontStyle: "italic", color: accent }}>{leadMid1}</span>
            {leadMid2}
            <span style={{ fontStyle: "italic", color: accent }}>{leadTail}</span>
          </h1>
        </div>

        {/* Region C — Synopsis band (full width, bracketed by 1.5px rules) */}
        <div
          style={{
            position: "absolute",
            // Start 24px below the h-rule
            top: "calc(38% + 24px)",
            // End 56px from the bottom of live area
            bottom: 56,
            left: 0,
            // Right edge stops ~2.5 cols short to leave a strip for region D
            right: "calc((100% - 176px) / 12 * 2.5 + 32px)",
            display: "flex",
            flexDirection: "column",
            paddingTop: 12,
            paddingBottom: 12,
            borderTop: `1.5px dotted var(--accent-soft)`,
            minHeight: 0,
          }}
        >
          {/* Mono label, left-aligned (asymmetric balance to right-side D label) */}
          <div
            style={{
              ...monoLabel,
              marginBottom: 14,
            }}
          >
            00.2
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13.5,
              lineHeight: 1.55,
              color: ink,
              columnCount: 2,
              columnGap: 28,
              columnRule: "1px dotted var(--accent-soft)",
              flex: 1,
              overflow: "hidden",
            }}
          >
            {content.intro.body.map((p, i) =>
              typeof p === "string" ? (
                <React.Fragment key={i}>{p}</React.Fragment>
              ) : (
                <a
                  key={i}
                  href={p.url}
                  data-brand={p.brand || undefined}
                  style={{
                    color: accent,
                    textDecoration: "underline",
                    textDecorationThickness: "1px",
                    textUnderlineOffset: "2px",
                  }}
                >
                  {p.label}
                </a>
              )
            )}
          </div>
        </div>

        {/* Region D — rotated 00.2 label crossing the synopsis top rule */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "calc(38% + 24px - 60px)",
            transform: "rotate(-90deg)",
            transformOrigin: "100% 0",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ ...monoLabel, color: "var(--accent-soft)" }}>00.0 – 00.2 ABOUT</span>
        </div>
      </div>
    </section>
  );
}

function TimelineRow({ row }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      style={boldStyles.timelineCol}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          ...boldStyles.timelinePlace,
          color: hover ? "var(--accent)" : "var(--fg)",
        }}
      >
        {row.place}
      </div>
      <div style={boldStyles.timelineYears}>
        {row.years.includes("—") ? (
          <React.Fragment>
            {row.years}
            <span style={{ color: "var(--accent)", marginLeft: "0.35em" }}>✱</span>
          </React.Fragment>
        ) : row.years}
      </div>
    </div>
  );
}

function FeaturedList({ items }) {
  const [hovered, setHovered] = React.useState(null); // index or null
  const previewRef = React.useRef(null);

  // Cursor-following preview (lerped). Mirrors CursorFollower's pattern.
  React.useEffect(() => {
    let x = -9999, y = -9999, tx = -9999, ty = -9999;
    let raf;
    let active = false;
    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!active) {
        x = tx;
        y = ty;
        active = true;
      }
    };
    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      const el = previewRef.current;
      if (el) {
        // Offset so preview sits below-right of cursor.
        el.style.transform = `translate(${x + 28}px, ${y + 28}px) scale(1)`;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    loop();
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Update opacity when hover state changes.
  React.useEffect(() => {
    const el = previewRef.current;
    if (!el) return;
    el.style.opacity = hovered !== null ? "1" : "0";
  }, [hovered]);

  return (
    <div style={boldStyles.featuredList}>
      {items.map((item, i) => {
        const isHovered = hovered === i;
        const isOther = hovered !== null && hovered !== i;
        return (
          <div
            key={i}
            style={{
              ...boldStyles.featuredRow,
              opacity: isOther ? 0.35 : 1,
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              style={{
                ...boldStyles.featuredTitle,
                color: isHovered ? "var(--accent)" : "var(--fg)",
                transition: "color .25s ease",
              }}
            >
              {item.title}
            </div>
            <div style={boldStyles.featuredCompany}>{item.company}</div>
          </div>
        );
      })}
      <div ref={previewRef} aria-hidden="true" style={boldStyles.featuredPreview} />
    </div>
  );
}

export function VariationBold({ content, aboutStyle = "wild" }) {
  const c = content;
  // Split lead for accent-italic last word.
  // Line breaks (per spec): after "Glynn-Finnegan," and before "building".
  // Italicized in accent color: "memorable" and the trailing "brands."
  const leadText = c.intro.lead
    .replace(/Glynn-Finnegan, /, "Glynn-Finnegan,\n")
    .replace(/Director building /, "Director\nbuilding ");
  const leadMatch = leadText.match(/^([\s\S]*)(memorable)([\s\S]*)(brands\.)$/);
  const leadHead = leadMatch ? leadMatch[1] : leadText;
  const leadMid1 = leadMatch ? leadMatch[2] : "";
  const leadMid2 = leadMatch ? leadMatch[3] : "";
  const leadTail = leadMatch ? leadMatch[4] : "";

  return (
    <div style={boldStyles.page}>
      <div style={boldStyles.grid12}>
        <div style={{ ...boldStyles.sigLabel, whiteSpace: "nowrap" }}>00 – LOGO</div>
        <div style={boldStyles.sigHero}>
          <img
            src={c.meta.signatureGif}
            alt="adamGF"
            style={boldStyles.sigImg}
          />
        </div>

        {c.meta.tagline && <div style={boldStyles.tagline}>{c.meta.tagline}</div>}

        {aboutStyle === "wild" ? (
          <AboutWild content={c} leadHead={leadHead} leadMid1={leadMid1} leadMid2={leadMid2} leadTail={leadTail} />
        ) : (
          <section style={boldStyles.introSection}>
            <div style={boldStyles.introBlock}>
              <div style={boldStyles.introLabel}>00.1</div>
              <Reveal as="h1" style={boldStyles.introLead}>
                {leadHead}
                <span style={boldStyles.leadAccent}>{leadMid1}</span>
                {leadMid2}
                <span style={boldStyles.leadAccent}>{leadTail}</span>
              </Reveal>
            </div>
            <div style={{ ...boldStyles.introBlock, ...boldStyles.introBlockDivider }}>
              <div style={boldStyles.introLabel}>00.2</div>
              <Reveal as="p" style={boldStyles.introBody}>
                {renderBoldBody(c.intro.body)}
              </Reveal>
            </div>
          </section>
        )}

        <Reveal style={boldStyles.introCtaRow} delay={120}>
          <div style={boldStyles.aside}>{c.intro.aside}</div>
          <a href={c.intro.cta.href} data-brand="hello" style={boldStyles.cta}>
            <span style={boldStyles.ctaDot} />
            {c.intro.cta.label}
          </a>
        </Reveal>

        <div style={boldStyles.sectionSpacer} />

        {/* Timeline */}
        <div style={boldStyles.sectionLabel}>01</div>
        <Reveal as="h2" style={boldStyles.sectionTitle}>
          Timeline
        </Reveal>
        <div style={boldStyles.timelineList}>
          {c.timeline.map((row, i) => (
            <Reveal key={i} delay={i * 80}>
              <TimelineRow row={row} />
            </Reveal>
          ))}
        </div>

        <div style={boldStyles.sectionSpacer} />

        {/* Featured */}
        <div style={boldStyles.sectionLabel}>02</div>
        <Reveal as="h2" style={boldStyles.sectionTitle}>
          Featured
        </Reveal>
        <FeaturedList items={c.featured || []} />

        <div style={boldStyles.sectionSpacer} />

        {/* Writing */}
        <div style={boldStyles.sectionLabel}>03</div>
        <Reveal as="h2" style={boldStyles.sectionTitle}>
          Writing
        </Reveal>
        <Reveal style={boldStyles.writingBody}>
          <p>{c.writing.blurb}</p>
          <p style={{ marginTop: 24 }}>
            <a href={c.writing.marqueeHref || "#"} style={{ color: "var(--accent)", textDecoration: "none" }}>
              Read my latest article →
            </a>
          </p>
        </Reveal>

        <div style={boldStyles.sectionSpacer} />

        {/* Awards */}
        <div style={boldStyles.sectionLabel}>04</div>
        <Reveal as="h2" style={boldStyles.sectionTitle}>
          Awards
        </Reveal>
        <ul style={boldStyles.awardsGrid}>
          {c.awards.map((a, i) => (
            <Reveal key={i} as="li" delay={i * 40} style={boldStyles.awardCell}>
              {a}
            </Reveal>
          ))}
        </ul>

        <footer style={boldStyles.footer}>
          <div>© {new Date().getFullYear()} · Adam Glynn-Finnegan</div>
          <div style={boldStyles.socials}>
            {c.contact.social.map((s, i) => (
              <a
                key={i}
                href={s.href}
                style={{
                  color: "var(--fg-muted)",
                  textDecoration: "none",
                  transition: "color .2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--fg-muted)")
                }
              >
                {s.label}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
