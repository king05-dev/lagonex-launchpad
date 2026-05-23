import { useEffect, useState } from "react";
import { C, MONO } from "./tokens";
import { Dot } from "./primitives";
import { SwissBookingModal } from "./SwissBookingModal";

const NAV_LINKS = [
  { label: "info", href: "#info" },
  { label: "work", href: "#work" },
  { label: "personal", href: "#personal" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

function SwissLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" style={{ flexShrink: 0 }}>
      <rect width="28" height="28" fill={C.ink} />
      <rect x="4" y="4" width="10" height="10" fill={C.red} />
      <rect x="14" y="14" width="10" height="10" fill={C.yellow} />
      <circle cx="19" cy="9" r="5" fill={C.blue} />
    </svg>
  );
}

export function SwissNavbar() {
  const [active, setActive] = useState("info");
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_LINKS.map(({ label, href }) => ({
      id: href.slice(1),
      label,
    }));
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Desktop sticky top nav */}
      <header
        className="hidden md:block sticky top-0 z-50"
        style={{
          backgroundColor: C.paper,
          borderBottom: `1px solid ${C.ink}`,
          fontFamily: MONO,
          fontSize: 12,
          letterSpacing: "0.05em",
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{ padding: "14px 32px", maxWidth: 1400, margin: "0 auto" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <SwissLogo />
            <span style={{ fontWeight: 700, color: C.ink }}>jerquin.bayudo</span>
            <span style={{ color: C.mute }}>/ portfolio /v2.0</span>
          </div>
          <nav style={{ display: "flex", gap: 22 }}>
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  color: active === label ? C.ink : C.ink2,
                  textDecoration: "none",
                  fontWeight: active === label ? 700 : 400,
                }}
              >
                {label}
              </a>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: C.ink2 }}>
            <Dot color={C.green} />
            <span>available · q2·2026</span>
            <button
              onClick={() => setBookingOpen(true)}
              style={{
                marginLeft: 12,
                padding: "6px 14px",
                border: `1px solid ${C.ink}`,
                borderRadius: 4,
                color: C.ink,
                background: "none",
                cursor: "pointer",
                fontFamily: MONO,
                fontSize: 12,
                letterSpacing: "0.05em",
              }}
            >
              ⌘ K — book a call
            </button>
          </div>
        </div>
      </header>

      {/* Mobile top bar */}
      <header
        className="flex md:hidden sticky top-0 z-50 items-center justify-between"
        style={{
          backgroundColor: C.paper,
          borderBottom: `1px solid ${C.ink}`,
          padding: "10px 16px",
          fontFamily: MONO,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <SwissLogo />
          <span style={{ fontWeight: 700, fontSize: 12, color: C.ink }}>jerquin.bayudo</span>
          <span style={{ fontSize: 11, color: C.mute }}>/ portfolio /v2.0</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Dot color={C.green} size={6} />
          <span style={{ fontSize: 10, color: C.ink2, letterSpacing: "0.05em" }}>available</span>
        </div>
      </header>

      <SwissBookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      {/* Mobile fixed bottom tab bar */}
      <nav
        className="fixed md:hidden bottom-0 left-0 right-0 z-50 flex"
        style={{
          backgroundColor: C.paper,
          borderTop: `1px solid ${C.ink}`,
        }}
      >
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = active === label;
          return (
            <a
              key={label}
              href={href}
              onClick={() => setActive(label)}
              style={{
                flex: 1,
                padding: "10px 4px 14px",
                textAlign: "center" as const,
                fontFamily: MONO,
                fontSize: 10,
                letterSpacing: "0.06em",
                color: isActive ? C.ink : C.mute,
                textDecoration: "none",
                display: "flex",
                flexDirection: "column" as const,
                alignItems: "center",
                gap: 4,
              }}
            >
              {isActive && <Dot color={C.red} size={4} />}
              {!isActive && <span style={{ width: 4, height: 4, display: "inline-block" }} />}
              {label}
            </a>
          );
        })}
      </nav>
    </>
  );
}
