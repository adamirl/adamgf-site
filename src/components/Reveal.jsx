import React from "react";

export function Reveal({ children, delay = 0, as: Tag = "div", style }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // If already in viewport on mount, reveal immediately.
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh * 0.95 && rect.bottom > 0) {
      setVisible(true);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
            return;
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    // Safety fallback: if nothing triggers within 600ms, show.
    const t = setTimeout(() => setVisible(true), 600);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);
  return (
    <Tag
      ref={ref}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity .9s ease ${delay}ms, transform .9s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
