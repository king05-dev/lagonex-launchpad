import { useState } from "react";
import { motion } from "framer-motion";
import { C, MONO, DISPLAY } from "./tokens";
import { Dot, Label } from "./primitives";
import { SwissBookingModal } from "./SwissBookingModal";

const CONTACT_ITEMS = [
  {
    label: "email",
    dot: C.red,
    value: "jerquinbayudo@gmail.com",
    href: "mailto:jerquinbayudo@gmail.com",
  },
  {
    label: "phone",
    dot: C.blue,
    value: "(+63) 961-989-6211",
    href: "tel:+639619896211",
  },
  {
    label: "linkedin",
    dot: C.yellow,
    value: "/in/jerquin-bayudo",
    href: "https://www.linkedin.com/in/jerquin-bayudo-834970203",
  },
  {
    label: "location",
    dot: C.green,
    value: "Cagayan de Oro, PH",
    href: undefined,
  },
];

/* "Send me the weird one." split into animated chunks */
const HEADLINE_WORDS = ["Send", "me", "the"];

const SPRING = { type: "spring" as const, stiffness: 380, damping: 30 };
const VP = { once: true, margin: "-80px" as const };

export function SwissContact() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section
      id="contact"
      style={{
        backgroundColor: C.ink,
        color: C.paper,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          pointerEvents: "none",
        }}
      >
        <svg width="100%" height="100%">
          <defs>
            <pattern id="cdot" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#fff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cdot)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto" style={{ position: "relative", padding: "clamp(50px, 7vw, 90px) clamp(16px, 3vw, 32px) calc(clamp(40px, 5vw, 50px) + 56px)" }}>
        {/* Status label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ ...SPRING, delay: 0.05 }}
        >
          <Label color="#9c9c9c">
            <Dot color={C.green} /> Status · open & responding
          </Label>
        </motion.div>

        {/* Headline — word by word */}
        <div
          style={{
            marginTop: 16,
            fontFamily: DISPLAY,
            fontSize: "clamp(40px, 9vw, 120px)",
            fontWeight: 800,
            letterSpacing: "-0.05em",
            lineHeight: 0.88,
            maxWidth: 1100,
            display: "flex",
            flexWrap: "wrap",
            gap: "0.2em",
            alignItems: "baseline",
          }}
        >
          {HEADLINE_WORDS.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ ...SPRING, delay: 0.1 + i * 0.07 }}
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ ...SPRING, delay: 0.31 }}
            style={{ color: C.yellow, display: "inline-block" }}
          >
            weird one.
          </motion.span>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ ...SPRING, delay: 0.38 }}
          style={{
            marginTop: 24,
            fontSize: "clamp(15px, 1.5vw, 18px)",
            lineHeight: 1.5,
            maxWidth: 640,
            color: "#d6d6d6",
          }}
        >
          Shopify builds, custom web apps, rescue jobs, long-term maintenance — I'm useful on most of it, and honest when I'm not.
        </motion.div>

        {/* Contact cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          style={{ marginTop: 40 }}
        >
          {CONTACT_ITEMS.map(({ label, dot, value, href }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ ...SPRING, delay: 0.44 + i * 0.08 }}
              style={{
                border: "1px solid #3a3a3a",
                padding: "18px 20px",
                backgroundColor: "#171717",
              }}
            >
              <Label color="#7d7d7d">
                <Dot color={dot} /> {label}
              </Label>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    marginTop: 10,
                    fontSize: 14,
                    fontFamily: MONO,
                    color: C.paper,
                    wordBreak: "break-all",
                    textDecoration: "none",
                  }}
                >
                  {value}
                </a>
              ) : (
                <div style={{ marginTop: 10, fontSize: 14, fontFamily: MONO, color: C.paper }}>
                  {value}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4" style={{ marginTop: 32 }}>
          <motion.a
            href="mailto:jerquinbayudo@gmail.com"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ ...SPRING, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            style={{
              backgroundColor: C.yellow,
              color: C.ink,
              padding: "clamp(14px, 2vw, 18px) clamp(20px, 3vw, 26px)",
              fontFamily: DISPLAY,
              fontWeight: 800,
              fontSize: "clamp(16px, 1.5vw, 18px)",
              borderRadius: 4,
              letterSpacing: "-0.01em",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
            }}
          >
            Email me <span>↗</span>
          </motion.a>
          <motion.button
            onClick={() => setBookingOpen(true)}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ ...SPRING, delay: 0.68 }}
            whileHover={{ scale: 1.02 }}
            style={{
              border: `1.5px solid ${C.paper}`,
              color: C.paper,
              padding: "clamp(14px, 2vw, 18px) clamp(20px, 3vw, 26px)",
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: "clamp(16px, 1.5vw, 18px)",
              borderRadius: 4,
              letterSpacing: "-0.01em",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "none",
              cursor: "pointer",
            }}
          >
            Schedule a call <span>→</span>
          </motion.button>
        </div>

        {/* Footer line */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VP}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{
            marginTop: 60,
            paddingTop: 22,
            borderTop: "1px solid #2a2a2a",
            fontFamily: MONO,
            fontSize: 11,
            color: "#7d7d7d",
            letterSpacing: "0.06em",
          }}
        >
          <span>© 2026 Jerquin Bayudo · all rights reserved</span>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <a
              href="https://www.linkedin.com/in/jerquin-bayudo-834970203"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#7d7d7d", textDecoration: "none" }}
            >
              linkedin ↗
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100019476193809"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#7d7d7d", textDecoration: "none" }}
            >
              facebook ↗
            </a>
            <a
              href="https://drive.google.com/file/d/1OJc-ghmS3aDPDDXJE8iplgXxjFvFmpXP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#7d7d7d", textDecoration: "none" }}
            >
              résumé ↗
            </a>
          </div>
          <span>v2.0</span>
        </motion.div>
      </div>

      <SwissBookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
}
