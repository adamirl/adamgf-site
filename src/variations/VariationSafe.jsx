// =============================================================
// VariationSafe — "Readable": styled like raw markdown.
// Body typeface, link color, and logo stay the same as the rest of
// the site, but structure is expressed with literal markdown syntax
// (#, ##, **, -, [text](url), ---) so the page can be copy/pasted
// straight into an LLM and parsed as clean markdown.
// =============================================================
import React from "react";
import { Reveal } from "../components/Reveal.jsx";

const MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

// External (http/https) links open in a new tab; mailto and in-page anchors don't.
const extProps = (href) =>
  href && /^https?:\/\//.test(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

// A markdown-syntax character (#, *, -, [, ], (, ), >, |) — real text,
// dimmed and set in mono so it reads as punctuation, not content.
function Syn({ children, style }) {
  return (
    <span
      style={{
        fontFamily: MONO,
        color: "var(--fg-muted)",
        opacity: 0.5,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

function MdHeading({ level = 2, children, style, as }) {
  const hashes = "#".repeat(level);
  const Tag = as || `h${level}`;
  return (
    <Tag style={{ ...style, display: "block" }}>
      <Syn style={{ marginRight: "0.35em", fontSize: "0.55em", verticalAlign: "middle" }}>
        {hashes}
      </Syn>
      {children}
    </Tag>
  );
}

function MdBold({ children, style }) {
  return (
    <strong style={{ fontWeight: 600, ...style }}>
      <Syn>**</Syn>
      {children}
      <Syn>**</Syn>
    </strong>
  );
}

function MdRule() {
  return (
    <div
      style={{
        fontFamily: MONO,
        color: "var(--fg-muted)",
        opacity: 0.5,
        letterSpacing: "0.15em",
        margin: "clamp(48px, 7vw, 80px) 0 clamp(24px, 3.5vw, 40px)",
      }}
      aria-hidden="true"
    >
      ---
    </div>
  );
}

function MdListItem({ children, style }) {
  return (
    <div style={{ display: "flex", gap: "0.6em", ...style }}>
      <Syn style={{ opacity: 0.5 }}>-</Syn>
      <span>{children}</span>
    </div>
  );
}

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

// Renders as literal markdown link syntax — [label](url) — with the
// label carrying the site's normal link styling and the brackets/url
// dimmed into mono so the whole thing still reads as one clickable link.
function SafeLink({ href, children, brand, arrow }) {
  return (
    <a
      href={href}
      data-brand={brand || undefined}
      {...extProps(href)}
      style={{
        color: "inherit",
        textDecoration: "none",
        wordBreak: "break-word",
      }}
    >
      <Syn>[</Syn>
      <span
        style={{
          color: "var(--accent)",
          textDecoration: "underline",
          textDecorationColor: "var(--accent)",
          textDecorationThickness: "1px",
          textUnderlineOffset: "3px",
        }}
      >
        {children}
        {arrow ? " →" : ""}
      </span>
      <Syn>{"]("}</Syn>
      <Syn style={{ fontSize: "0.7em" }}>{href}</Syn>
      <Syn>)</Syn>
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

      {c.meta.tagline && (
        <p style={safeStyles.tagline}>
          <Syn style={{ marginRight: "0.5em" }}>{">"}</Syn>
          {c.meta.tagline}
        </p>
      )}

      <Reveal as="h1" style={{ ...safeStyles.lead, whiteSpace: "pre-line" }}>
        <Syn style={{ marginRight: "0.3em", fontSize: "0.5em", verticalAlign: "middle" }}>#</Syn>
        {c.intro.lead
          .replace(/Glynn-Finnegan, /, "Glynn-Finnegan,\n")
          .replace(/Director building /, "Director\nbuilding ")}
      </Reveal>

      <Reveal delay={120}>
        <p style={safeStyles.body}>{renderBody(c.intro.body)}</p>
        <p style={safeStyles.aside}>
          <Syn style={{ marginRight: "0.5em" }}>{">"}</Syn>
          {c.intro.aside}
        </p>
        <div style={safeStyles.ctaWrap}>
          <SafeLink href={c.intro.cta.href} brand="hello" arrow>
            {c.intro.cta.label}
          </SafeLink>
        </div>
      </Reveal>

      <MdRule />

      <section>
        <Reveal>
          <MdHeading level={2} style={safeStyles.sectionTitle}>
            Timeline
          </MdHeading>
        </Reveal>
        <div>
          {c.timeline.map((row, i) => (
            <Reveal key={i} delay={i * 90}>
              <div style={safeStyles.timelineRow}>
                <div style={safeStyles.timelineYears}>
                  <MdBold>
                    {row.years}
                    {row.years.includes("—") && (
                      <span style={{ color: "var(--accent)", marginLeft: "0.35em" }}>✱</span>
                    )}
                  </MdBold>
                </div>
                <div>
                  <MdHeading level={3} style={safeStyles.timelinePlace}>
                    {row.place}
                  </MdHeading>
                  {row.location && (
                    <div style={safeStyles.timelineLocation}>{row.location}</div>
                  )}
                  {row.detail && (
                    <div style={safeStyles.timelineDetail}>
                      <Syn style={{ marginRight: "0.5em" }}>{">"}</Syn>
                      {row.detail}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <MdRule />

      <section>
        <Reveal>
          <MdHeading level={2} style={safeStyles.sectionTitle}>
            Writing
          </MdHeading>
        </Reveal>
        <Reveal>
          <p style={safeStyles.writingBlurb}>{c.writing.blurb}</p>
        </Reveal>
        <div style={safeStyles.ctaWrap}>
          <SafeLink href={c.writing.marqueeHref || "#"} brand="hello" arrow>
            Read my latest article
          </SafeLink>
        </div>
      </section>

      <MdRule />

      <section>
        <Reveal>
          <MdHeading level={2} style={safeStyles.sectionTitle}>
            Awards
          </MdHeading>
        </Reveal>
        <div style={safeStyles.awardsList}>
          {c.awards.map((a, i) => (
            <Reveal key={i} delay={i * 50}>
              <MdListItem style={safeStyles.awardItem}>{a}</MdListItem>
            </Reveal>
          ))}
        </div>
      </section>

      <MdRule />

      <Reveal>
        <p style={safeStyles.aside}>
          <Syn style={{ marginRight: "0.5em" }}>{">"}</Syn>
          {c.intro.aside}
        </p>
        <div style={safeStyles.ctaWrap}>
          <SafeLink href={c.intro.cta.href} brand="hello" arrow>
            {c.intro.cta.label}
          </SafeLink>
        </div>
      </Reveal>

      <footer style={safeStyles.footer}>
        <div>© {new Date().getFullYear()} Adam Glynn-Finnegan</div>
        <div style={safeStyles.socials}>
          {c.contact.social.map((s, i) => (
            <SafeLink key={i} href={s.href} style={safeStyles.socialLink}>
              {s.label}
            </SafeLink>
          ))}
        </div>
      </footer>
    </div>
  );
}
