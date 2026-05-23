import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { C, MONO, DISPLAY, DOT_BG } from "./tokens";
import { Dot, Label } from "./primitives";
import { useCounter } from "./useCounter";

// ─── timing constants ────────────────────────────────────────────────────────
const T = {
  gridFade: 0,
  lineSweep: 0.1,
  markBorder: 0.58,
  markRed: 0.65,
  markYellow: 0.82,
  markBlue: 0.99,
  blockBorder: 1.2,
  label: 1.3,
  nameStart: 1.4,
  nameCharDelay: 0.065,
  namePeriod: 2.32,
  captionStart: 1.65,
  captionCharDelay: 0.038,
  bio: 2.15,
  ctas: 2.4,
  nowCard: 2.62,
  locCard: 2.76,
  princCard: 2.9,
  metrics: 3.82,
  metricsStagger: 0.14,
  tagline: 4.85,
  taglineStagger: 0.22,
};

const NAME = "Jerquin Bayudo";
const CAPTION = "Full-stack & Shopify developer";

const METRICS = [
  { n: 8, suffix: "+", l: "Years building for the web", color: C.red },
  { n: 50, suffix: "+", l: "Shipped projects across stacks", color: C.blue },
  { n: 12, suffix: "", l: "Daily tools, fluently", color: C.ink },
  { n: 4, suffix: "", l: "Years leading a tech team", color: C.yellow },
  { n: 1, suffix: "", l: "Phone that answers, same day", color: C.ink },
];

const PRINCIPLES = [
  { word: "resourceful", color: C.red },
  { word: "committed", color: C.blue },
  { word: "high quality", color: C.ink },
  { word: "persevering", color: C.yellow },
  { word: "useful on anything", color: C.green },
];

// ─── sub-components ──────────────────────────────────────────────────────────

function LiveTicker() {
  const [t, setT] = useState(() => new Date().toISOString().slice(11, 19));
  useEffect(() => {
    const id = setInterval(() => setT(new Date().toISOString().slice(11, 19)), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div
      style={{
        position: "absolute",
        bottom: 12,
        right: 20,
        fontFamily: MONO,
        fontSize: 9,
        color: C.mute,
        letterSpacing: "0.12em",
        zIndex: 10,
        pointerEvents: "none",
      }}
    >
      v2.0 · {t} · live
    </div>
  );
}

function ConstructionLine() {
  return (
    <motion.div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: "30%",
        height: 1,
        backgroundColor: C.ink,
        transformOrigin: "left center",
        zIndex: 2,
        pointerEvents: "none",
      }}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{
        scaleX: [0, 1, 1, 0],
        opacity: [0, 0.6, 0.6, 0],
      }}
      transition={{
        delay: T.lineSweep,
        duration: 0.9,
        times: [0, 0.45, 0.8, 1],
        ease: "easeInOut",
      }}
    />
  );
}

function AnimatedCornerMark() {
  const spring = (delay: number, s = 380, d = 18) => ({
    delay,
    type: "spring" as const,
    stiffness: s,
    damping: d,
  });

  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      style={{ overflow: "visible" }}
    >
      <motion.rect
        width="80"
        height="80"
        fill="none"
        stroke={C.ink}
        strokeWidth="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: T.markBorder, duration: 0.12 }}
      />
      <motion.g
        initial={{ x: 55, y: -55 }}
        animate={{ x: 0, y: 0 }}
        transition={spring(T.markRed)}
      >
        <rect x="0" y="0" width="40" height="40" fill={C.red} />
      </motion.g>
      <motion.g
        initial={{ x: 55, y: 55 }}
        animate={{ x: 0, y: 0 }}
        transition={spring(T.markYellow)}
      >
        <rect x="40" y="40" width="40" height="40" fill={C.yellow} />
      </motion.g>
      <motion.g
        initial={{ y: -65 }}
        animate={{ y: 0 }}
        transition={spring(T.markBlue, 480, 16)}
      >
        <circle cx="60" cy="20" r="20" fill={C.blue} />
      </motion.g>
    </svg>
  );
}

function TypesetName() {
  return (
    <div
      style={{
        marginTop: 26,
        fontFamily: DISPLAY,
        fontSize: "clamp(44px, 8vw, 100px)",
        fontWeight: 800,
        lineHeight: 0.9,
        letterSpacing: "-0.045em",
        color: C.ink,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "baseline",
      }}
    >
      {NAME.split("").map((char, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", whiteSpace: "pre" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: T.nameStart + i * T.nameCharDelay,
            duration: 0.055,
            ease: [0.2, 0, 0.5, 1],
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        style={{ display: "inline-block", color: C.red, transformOrigin: "bottom center" }}
        initial={{ opacity: 0, y: -40, scaleY: 0 }}
        animate={{ opacity: 1, y: 0, scaleY: 1 }}
        transition={{
          delay: T.namePeriod,
          type: "spring",
          stiffness: 750,
          damping: 14,
        }}
      >
        .
      </motion.span>
    </div>
  );
}

function TypesetCaption() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginTop: 8,
      }}
    >
      <motion.span
        style={{ display: "inline-block" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: T.captionStart, duration: 0.1 }}
      >
        <Dot color={C.red} size={7} />
      </motion.span>
      <div
        style={{
          fontFamily: MONO,
          fontSize: "clamp(10px, 1.2vw, 13px)",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: C.ink2,
          display: "flex",
        }}
      >
        {CAPTION.split("").map((char, i) => (
          <motion.span
            key={i}
            style={{ display: "inline-block", whiteSpace: "pre" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: T.captionStart + i * T.captionCharDelay,
              duration: 0.04,
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function FloodCard({
  delay,
  fillColor,
  textColor = C.paper,
  initial: initMotion,
  children,
  style,
}: {
  delay: number;
  fillColor: string;
  textColor?: string;
  initial: { x?: number; y?: number };
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      style={{
        border: `1px solid ${C.ink}`,
        position: "relative",
        overflow: "hidden",
        color: textColor,
        ...style,
      }}
      initial={{ ...initMotion, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{
        delay,
        type: "spring",
        stiffness: 280,
        damping: 24,
        opacity: { duration: 0.12, ease: "linear", delay },
      }}
    >
      {/* Flood fill */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: fillColor,
          transformOrigin: "top",
          zIndex: 0,
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          delay: delay + 0.14,
          duration: 0.18,
          ease: [0.4, 0, 0.2, 1],
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </motion.div>
  );
}

function AnimatedMetric({
  n,
  suffix,
  label,
  color,
  idx,
}: {
  n: number;
  suffix: string;
  label: string;
  color: string;
  idx: number;
}) {
  const delay = T.metrics + idx * T.metricsStagger;
  const count = useCounter(n, delay);

  return (
    <motion.div
      style={{
        border: `1px solid ${C.ink}`,
        backgroundColor: C.card,
        padding: "16px 18px",
        position: "relative",
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <motion.div
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(32px, 4vw, 44px)",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          color,
        }}
        initial={{ scale: 0.85 }}
        animate={{ scale: 1 }}
        transition={{
          delay: delay + 0.55,
          type: "spring",
          stiffness: 500,
          damping: 18,
        }}
      >
        {count}{suffix}
      </motion.div>
      <motion.div
        style={{ marginTop: 8, fontSize: 12, color: C.ink2, lineHeight: 1.35 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.3, duration: 0.25 }}
      >
        {label}
      </motion.div>
      <div
        style={{
          position: "absolute",
          top: 14,
          right: 16,
          fontFamily: MONO,
          fontSize: 10,
          color: C.mute,
          letterSpacing: "0.12em",
        }}
      >
        0{idx + 1}
      </div>
    </motion.div>
  );
}

function PrinciplesTagline() {
  return (
    <motion.div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "8px 20px",
        marginTop: 14,
        padding: "12px 0 4px",
        borderTop: `1px solid ${C.rule}`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: T.tagline, duration: 0.1 }}
    >
      {PRINCIPLES.map((p, i) => (
        <motion.span
          key={p.word}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: MONO,
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: C.ink2,
          }}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: T.tagline + i * T.taglineStagger,
            duration: 0.18,
            ease: [0.2, 0.8, 0.2, 1],
          }}
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: T.tagline + i * T.taglineStagger + 0.06,
              type: "spring",
              stiffness: 600,
              damping: 20,
            }}
          >
            <Dot color={p.color} size={6} />
          </motion.span>
          {p.word}
        </motion.span>
      ))}

      {/* Green available pulse */}
      <motion.span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontFamily: MONO,
          fontSize: 11,
          letterSpacing: "0.1em",
          color: C.green,
          marginLeft: "auto",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: T.tagline + PRINCIPLES.length * T.taglineStagger + 0.1 }}
      >
        <motion.span
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ delay: 5.8, duration: 0.4, repeat: Infinity, repeatDelay: 2 }}
        >
          <Dot color={C.green} size={7} />
        </motion.span>
        available
      </motion.span>
    </motion.div>
  );
}

// ─── main hero ───────────────────────────────────────────────────────────────

export function SwissHero() {
  return (
    <section
      id="info"
      style={{
        position: "relative",
        ...DOT_BG,
        backgroundColor: C.paper,
        overflow: "hidden",
      }}
    >
      {/* Dot grid fades in */}
      <motion.div
        style={{ position: "absolute", inset: 0, ...DOT_BG, zIndex: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: T.gridFade + 0.6, ease: "easeIn" }}
      />

      <ConstructionLine />
      <LiveTicker />

      {/* Content sits above animated overlays */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1400, margin: "0 auto", padding: "clamp(20px, 3vw, 44px) clamp(16px, 3vw, 32px) clamp(20px, 3vw, 36px)" }}>

        {/* Main bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* ── Identity block ─────────────────────────────── */}
          <motion.div
            className="lg:col-span-8"
            style={{
              border: `1px solid ${C.ink}`,
              backgroundColor: C.card,
              padding: "clamp(20px, 3vw, 34px) clamp(20px, 3vw, 36px) 30px",
              position: "relative",
              overflow: "hidden",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: T.blockBorder, duration: 0.08 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: T.label, duration: 0.2 }}
            >
              <Label color={C.ink2}>
                <Dot color={C.red} /> Full-stack & Shopify developer · v.2026
                <span style={{ marginLeft: "auto", fontFamily: MONO, fontSize: 11, color: C.mute }}>
                  0001 / hero
                </span>
              </Label>
            </motion.div>

            <TypesetName />
            <TypesetCaption />

            <motion.div
              style={{
                marginTop: 22,
                fontSize: "clamp(14px, 1.6vw, 18px)",
                lineHeight: 1.5,
                maxWidth: 620,
                color: C.ink2,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: T.bio, duration: 0.4 }}
            >
              I build custom, high-performing sites and web apps with{" "}
              <b style={{ backgroundColor: C.yellow, padding: "0 4px" }}>
                Shopify, React, Laravel, and WordPress
              </b>
              . Resourceful on the small jobs, committed to the long ones, persistent on the
              bugs that fight back.
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3"
              style={{ marginTop: 28 }}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: T.ctas, duration: 0.3 }}
            >
              <a
                href="#work"
                style={{
                  backgroundColor: C.ink,
                  color: C.paper,
                  padding: "12px 18px",
                  fontFamily: MONO,
                  fontSize: 13,
                  letterSpacing: "0.05em",
                  borderRadius: 4,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  textDecoration: "none",
                }}
              >
                View projects <span>→</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1OJc-ghmS3aDPDDXJE8iplgXxjFvFmpXP/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: `1px solid ${C.ink}`,
                  padding: "12px 18px",
                  fontFamily: MONO,
                  fontSize: 13,
                  letterSpacing: "0.05em",
                  borderRadius: 4,
                  color: C.ink,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  textDecoration: "none",
                }}
              >
                Download resume <span>↓</span>
              </a>
              <a
                href="mailto:jerquinbayudo@gmail.com"
                style={{
                  padding: "12px 18px",
                  fontFamily: MONO,
                  fontSize: 13,
                  letterSpacing: "0.05em",
                  color: C.ink2,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  textDecoration: "none",
                }}
              >
                jerquinbayudo@gmail.com
              </a>
            </motion.div>

            {/* Corner motif — assembles shape-by-shape */}
            <div
              className="hidden lg:flex"
              style={{
                position: "absolute",
                right: 30,
                bottom: 24,
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 6,
              }}
            >
              <AnimatedCornerMark />
              <motion.div
                style={{ fontFamily: MONO, fontSize: 9, color: C.mute, letterSpacing: "0.16em" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: T.markBlue + 0.3, duration: 0.2 }}
              >
                JB · 2026
              </motion.div>
            </div>

            {/* Mobile corner mark */}
            <motion.div
              className="flex lg:hidden"
              style={{ position: "absolute", right: 16, top: 16 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: T.blockBorder + 0.1 }}
            >
              <svg width="44" height="44" viewBox="0 0 80 80">
                <rect width="80" height="80" fill="none" stroke={C.ink} strokeWidth="1" />
                <rect x="0" y="0" width="40" height="40" fill={C.red} />
                <rect x="40" y="40" width="40" height="40" fill={C.yellow} />
                <circle cx="60" cy="20" r="20" fill={C.blue} />
              </svg>
            </motion.div>
          </motion.div>

          {/* ── Status cards ───────────────────────────────── */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">

            {/* NOW — slides from right */}
            <FloodCard
              delay={T.nowCard}
              fillColor={C.red}
              initial={{ x: 80 }}
              style={{ padding: "18px 20px", minHeight: 120 }}
            >
              <Label color="rgba(255,255,255,0.8)">
                <Dot color={C.paper} size={6} /> Now
              </Label>
              <div style={{ marginTop: 12, fontSize: "clamp(14px, 1.8vw, 22px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.015em" }}>
                Open to Shopify, web app, and rescue work — short or long.
              </div>
              <div style={{ position: "absolute", right: -20, bottom: -20, width: 100, height: 100, borderRadius: 999, backgroundColor: "rgba(255,255,255,0.15)" }} />
            </FloodCard>

            {/* Location — slides from below */}
            <FloodCard
              delay={T.locCard}
              fillColor={C.card}
              textColor={C.ink}
              initial={{ y: 50 }}
              style={{ padding: "16px 20px" }}
            >
              <Label>
                <Dot color={C.blue} /> Location · TZ
              </Label>
              <div style={{ marginTop: 8, fontSize: "clamp(14px, 1.8vw, 18px)", fontWeight: 700, color: C.ink }}>
                Cagayan de Oro, PH
              </div>
              <div style={{ marginTop: 4, fontFamily: MONO, fontSize: 12, color: C.mute }}>
                UTC+8 · async-first
              </div>
            </FloodCard>

            {/* Principle — slides from above */}
            <FloodCard
              delay={T.princCard}
              fillColor={C.yellow}
              textColor={C.ink}
              initial={{ y: -50 }}
              style={{ padding: "16px 20px" }}
            >
              <Label color={C.ink}>
                <Dot color={C.ink} /> Principle
              </Label>
              <div style={{ marginTop: 8, fontSize: "clamp(14px, 1.6vw, 18px)", fontWeight: 700, lineHeight: 1.18, color: C.ink, fontStyle: "italic", letterSpacing: "-0.005em" }}>
                "Stay afraid, but do it anyway."
              </div>
              <div style={{ marginTop: 6, fontFamily: MONO, fontSize: 11, color: C.ink2 }}>
                — Carrie Fisher
              </div>
            </FloodCard>

          </div>
        </div>

        {/* ── Metrics strip ──────────────────────────────── */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          style={{ marginTop: 16 }}
        >
          {METRICS.map((m, i) => (
            <AnimatedMetric key={i} idx={i} n={m.n} suffix={m.suffix} label={m.l} color={m.color} />
          ))}
        </div>

        {/* ── Principles tagline ─────────────────────────── */}
        <PrinciplesTagline />

      </div>
    </section>
  );
}
