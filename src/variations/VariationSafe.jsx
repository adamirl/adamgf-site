// =============================================================
// VariationSafe — editorial, classic, warm
// Close to the original site: single column, generous margins,
// serif display + clean sans body, warm cream background.
// =============================================================
import React from "react";
import { Reveal } from "../components/Reveal.jsx";

const safeStyles = {
  page: {
    minHeight: "100vh",
    padding: "clamp(24px, 5vw, 80px) clamp(20px, 6vw, 96px) 96px",
    maxWidth: 1100,
    margin: "0 auto",
    color: "var(--fg)",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 24,
    marginBottom: "clamp(32px, 6vw, 72px)",
  },
  sig: {
    height: "clamp(56px, 9vw, 96px)",
    width: "auto",
    mixBlendMode: "var(--sig-blend)",
    filter: "var(--sig-filter)",
  },
  address: {
    fontFamily: "var(--font-body)",
    fontSize: 12,
    letterSpacing: "0.04em",
    lineHeight: 1.8,
    color: "var(--fg-muted)",
    textAlign: "right",
    textTransform: "uppercase",
  },
  tagline: {
    fontFamily: "var(--font-display)",
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: "clamp(18px, 2vw, 22px)",
    color: "var(--fg-muted)",
    marginTop: 24,
    marginBottom: "clamp(48px, 10vw, 120px)",
  },
  lead: {
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: "clamp(19px, 3.6vw, 48px)",
    lineHeight: 1.12,
    letterSpacing: "-0.015em",
    marginBottom: "clamp(32px, 5vw, 56px)",
  },
  body: {
    fontFamily: "var(--font-body)",
    fontSize: "clamp(16px, 1.35vw, 19px)",
    lineHeight: 1.7,
    maxWidth: 780,
    color: "var(--fg)",
    textWrap: "pretty",
  },
  aside: {
    fontFamily: "var(--font-body)",
    fontStyle: "italic",
    fontSize: "clamp(14px, 1.2vw, 16px)",
    color: "var(--fg-muted)",
    marginTop: 28,
  },
  ctaWrap: { marginTop: 40 },
  cta: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(22px, 2.4vw, 30px)",
    color: "var(--accent)",
    textDecoration: "none",
    borderBottom: "1px solid var(--accent)",
    paddingBottom: 2,
  },
  rule: {
    fontFamily: "var(--font-display)",
    fontSize: 48,
    textAlign: "left",
    color: "var(--fg-muted)",
    margin: "clamp(48px, 7vw, 80px) 0 clamp(24px, 3.5vw, 40px)",
    letterSpacing: "0.3em",
  },
  sectionTitle: {
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: "clamp(40px, 6vw, 72px)",
    letterSpacing: "-0.02em",
    marginBottom: "clamp(20px, 3vw, 32px)",
  },
  timelineRow: {
    display: "grid",
    gridTemplateColumns: "minmax(80px, 0.5fr) 2fr",
    gap: 24,
    padding: "24px 0",
    borderTop: "1px solid var(--rule)",
    alignItems: "baseline",
  },
  timelineYears: {
    fontFamily: "var(--font-body)",
    fontSize: "clamp(14px, 1.3vw, 16px)",
    color: "var(--fg-muted)",
    letterSpacing: "0.02em",
  },
  timelinePlace: {
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: "clamp(28px, 3.2vw, 40px)",
    letterSpacing: "-0.01em",
  },
  timelineLocation: {
    fontFamily: "var(--font-body)",
    fontStyle: "italic",
    fontSize: "clamp(13px, 1.1vw, 15px)",
    color: "var(--fg-muted)",
    marginTop: 6,
  },
  timelineDetail: {
    fontFamily: "var(--font-body)",
    fontSize: "clamp(14px, 1.2vw, 16px)",
    color: "var(--fg)",
    lineHeight: 1.5,
    marginTop: 10,
    maxWidth: 640,
  },
  writingBlurb: {
    fontFamily: "var(--font-body)",
    fontSize: "clamp(16px, 1.35vw, 19px)",
    lineHeight: 1.7,
    maxWidth: 720,
    color: "var(--fg)",
    marginBottom: 48,
  },
  awardsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "grid",
    gap: 14,
  },
  awardItem: {
    fontFamily: "var(--font-body)",
    fontWeight: 400,
    fontSize: "clamp(16px, 1.35vw, 19px)",
    lineHeight: 1.55,
    color: "var(--fg)",
    paddingBottom: 14,
    borderBottom: "1px solid var(--rule)",
  },
  footer: {
    marginTop: "clamp(64px, 9vw, 112px)",
    paddingTop: 32,
    borderTop: "1px solid var(--rule)",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 24,
    fontFamily: "var(--font-body)",
    fontSize: 13,
    color: "var(--fg-muted)",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },
  socials: { display: "flex", gap: 20, flexWrap: "wrap" },
  socialLink: {
    color: "var(--fg-muted)",
    textDecoration: "none",
    borderBottom: "1px solid transparent",
    transition: "color .2s, border-color .2s",
  },
};

function SafeLink({ href, children, brand }) {
  return (
    <a
      href={href}
      data-brand={brand || undefined}
      style={{
        color: "var(--accent)",
        textDecoration: "underline",
        textDecorationColor: "var(--accent)",
        textDecorationThickness: "1px",
        textUnderlineOffset: "3px",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.textDecorationThickness = "2px")}
      onMouseLeave={(e) => (e.currentTarget.style.textDecorationThickness = "1px")}
    >
      {children}
    </a>
  );
}

export function renderBody(parts) {
  return parts.map((p, i) =>
    typeof p === "string" ? (
      <React.Fragment key={i}>{p}</React.Fragment>
    ) : (
      <SafeLink key={i} href={p.url} brand={p.brand}>
        {p.label}
      </SafeLink>
    )
  );
}

export function VariationSafe({ content, theme = "light" }) {
  const c = content;
  const signatureSrc =
    theme === "dark" && c.meta.signatureGifDark
      ? c.meta.signatureGifDark
      : c.meta.signatureGif;
  return (
    <div style={safeStyles.page}>
      <header style={safeStyles.topBar}>
        <a href="#top" aria-label="AdamGF home" style={{ lineHeight: 0 }}>
          <img src={signatureSrc} alt="adamGF" style={safeStyles.sig} />
        </a>
        <address style={safeStyles.address}>
          {c.meta.address.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </address>
      </header>

      {c.meta.tagline && <p style={safeStyles.tagline}>{c.meta.tagline}</p>}

      <Reveal as="h1" style={{ ...safeStyles.lead, whiteSpace: "pre-line" }}>
        {c.intro.lead
          .replace(/Glynn-Finnegan, /, "Glynn-Finnegan,\n")
          .replace(/Director building /, "Director\nbuilding ")}
      </Reveal>

      <Reveal delay={120}>
        <p style={safeStyles.body}>{renderBody(c.intro.body)}</p>
        <p style={safeStyles.aside}>{c.intro.aside}</p>
        <div style={safeStyles.ctaWrap}>
          <a href={c.intro.cta.href} data-brand="hello" style={safeStyles.cta}>
            {c.intro.cta.label} →
          </a>
        </div>
      </Reveal>

      <div style={safeStyles.rule}>—</div>

      <section>
        <Reveal as="h2" style={safeStyles.sectionTitle}>
          Timeline
        </Reveal>
        <div>
          {c.timeline.map((row, i) => (
            <Reveal key={i} delay={i * 90}>
              <div style={safeStyles.timelineRow}>
                <div style={safeStyles.timelineYears}>
                  {row.years.includes("—") ? (
                    <React.Fragment>
                      {row.years}
                      <span style={{ color: "var(--accent)", marginLeft: "0.35em" }}>✱</span>
                    </React.Fragment>
                  ) : row.years}
                </div>
                <div>
                  <div style={safeStyles.timelinePlace}>{row.place}</div>
                  {row.location && (
                    <div style={safeStyles.timelineLocation}>{row.location}</div>
                  )}
                  {row.detail && (
                    <div style={safeStyles.timelineDetail}>{row.detail}</div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div style={safeStyles.rule}>—</div>

      <section>
        <Reveal as="h2" style={safeStyles.sectionTitle}>
          Writing
        </Reveal>
        <Reveal>
          <p style={safeStyles.writingBlurb}>{c.writing.blurb}</p>
        </Reveal>
        <div style={safeStyles.ctaWrap}>
          <a href={c.writing.marqueeHref || "#"} style={safeStyles.cta}>
            Read my latest article →
          </a>
        </div>
      </section>

      <div style={safeStyles.rule}>—</div>

      <section>
        <Reveal as="h2" style={safeStyles.sectionTitle}>
          Awards
        </Reveal>
        <ul style={safeStyles.awardsList}>
          {c.awards.map((a, i) => (
            <Reveal key={i} as="li" delay={i * 50} style={safeStyles.awardItem}>
              {a}
            </Reveal>
          ))}
        </ul>
      </section>

      <div style={safeStyles.rule}>—</div>

      <Reveal>
        <p style={safeStyles.aside}>{c.intro.aside}</p>
        <div style={safeStyles.ctaWrap}>
          <a href={c.intro.cta.href} data-brand="hello" style={safeStyles.cta}>
            {c.intro.cta.label} →
          </a>
        </div>
      </Reveal>

      <footer style={safeStyles.footer}>
        <div>© {new Date().getFullYear()} Adam Glynn-Finnegan</div>
        <div style={safeStyles.socials}>
          {c.contact.social.map((s, i) => (
            <a
              key={i}
              href={s.href}
              style={safeStyles.socialLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.borderBottomColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--fg-muted)";
                e.currentTarget.style.borderBottomColor = "transparent";
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
