import { motion } from "framer-motion";
import { C, MONO, DISPLAY, DOT_BG } from "./tokens";
import { Label, SectionHead, Tag } from "./primitives";

const STEPS = [
  {
    num: "01",
    phase: "Brief",
    short: "understand it",
    color: C.red,
    time: "1–3 days",
    desc: "Understand scope, constraints, and what success actually looks like. No wireframes until the problem is clear.",
    tags: ["Discovery", "Scoping", "Requirements"],
  },
  {
    num: "02",
    phase: "Design",
    short: "map it out",
    color: C.blue,
    time: "2–5 days",
    desc: "System before screens. Components, grid, and tokens first — then layouts. Figma-led, hand-off ready.",
    tags: ["Figma", "Design system", "Prototyping"],
  },
  {
    num: "03",
    phase: "Build",
    short: "make it real",
    color: C.yellow,
    time: "varies",
    desc: "Incremental and reviewable. Features ship when they're done — not held back for a big-bang release.",
    tags: ["React", "Shopify", "Laravel"],
  },
  {
    num: "04",
    phase: "Review",
    short: "break it first",
    color: C.ink,
    time: "2–3 days",
    desc: "Cross-browser, mobile, performance, content QA — with the client in the loop the whole time.",
    tags: ["QA", "Testing", "Client review"],
  },
  {
    num: "05",
    phase: "Deploy",
    short: "ship it live",
    color: C.green,
    time: "1 day",
    desc: "CI/CD, DNS, monitoring configured. Post-launch support is included, not invoiced separately.",
    tags: ["Cloudflare", "Vercel", "Monitoring"],
  },
];

const SPRING = { type: "spring" as const, stiffness: 380, damping: 30 };
const VP = { once: true, margin: "-80px" as const };

export function SwissProcess() {
  return (
    <section
      id="process"
      style={{ ...DOT_BG, backgroundColor: C.paper }}
    >
      <div
        className="max-w-[1400px] mx-auto"
        style={{ padding: "clamp(40px, 5vw, 70px) clamp(16px, 3vw, 32px) clamp(40px, 5vw, 60px)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={SPRING}
        >
          <SectionHead
            num="05"
            label="How it gets built"
            title={
              <>
                Concept to deployment —{" "}
                <span style={{ color: C.red }}>systematically.</span>
              </>
            }
            accent={C.red}
          />
        </motion.div>

        {/* Phase strip — visible sm+ */}
        <motion.div
          className="hidden sm:grid"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={VP}
          transition={{ ...SPRING, delay: 0.14 }}
          style={{
            gridTemplateColumns: "repeat(5, 1fr)",
            border: `1px solid ${C.ink}`,
            overflow: "hidden",
            originX: 0,
          }}
        >
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              style={{
                backgroundColor: step.color,
                padding: "9px 16px",
                borderLeft: i > 0 ? `1px solid ${C.ink}` : "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  color:
                    step.color === C.yellow || step.color === C.green
                      ? C.ink
                      : C.paper,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {step.num} · {step.phase.toUpperCase()}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Step cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[1px]"
          style={{
            marginTop: 4,
            border: `1px solid ${C.ink}`,
            overflow: "hidden",
          }}
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className={`col-span-1${i === 4 ? " sm:col-span-2 lg:col-span-1" : ""}`}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ ...SPRING, delay: 0.18 + i * 0.09 }}
              style={{
                backgroundColor: C.card,
                borderRight: i < 4 ? `1px solid ${C.ink}` : "none",
                borderBottom: `1px solid ${C.ink}`,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Colored top accent — paint-stroke reveal */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={VP}
                transition={{ ...SPRING, delay: 0.24 + i * 0.09 }}
                style={{
                  height: 5,
                  backgroundColor: step.color,
                  originX: 0,
                  flexShrink: 0,
                }}
              />

              <div
                style={{
                  padding: "18px 20px 22px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Number + time */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: "clamp(40px, 4vw, 52px)",
                      fontWeight: 700,
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      color: step.color,
                    }}
                  >
                    {step.num}
                  </span>
                  <span style={{ marginTop: 4, display: "block" }}>
                    <Label color={C.mute}>{step.time}</Label>
                  </span>
                </div>

                {/* Phase name */}
                <div
                  style={{
                    marginTop: 8,
                    fontFamily: DISPLAY,
                    fontSize: "clamp(18px, 1.8vw, 22px)",
                    fontWeight: 800,
                    letterSpacing: "-0.025em",
                    lineHeight: 1,
                    color: C.ink,
                  }}
                >
                  {step.phase}
                </div>

                {/* Tagline */}
                <div
                  style={{
                    marginTop: 3,
                    fontFamily: MONO,
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    color: step.color === C.ink ? "#6a6a6a" : step.color,
                    textTransform: "uppercase",
                  }}
                >
                  {step.short}
                </div>

                {/* Description */}
                <div
                  style={{
                    marginTop: 14,
                    fontSize: 13,
                    lineHeight: 1.5,
                    color: C.ink2,
                    flex: 1,
                  }}
                >
                  {step.desc}
                </div>

                {/* Tags */}
                <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {step.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VP}
          transition={{ duration: 0.4, delay: 0.65 }}
          style={{
            marginTop: 18,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
            fontFamily: MONO,
            fontSize: 11,
            color: C.mute,
            letterSpacing: "0.06em",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: C.green,
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            Most builds: 2–4 weeks end-to-end
          </span>
          <span>timeline adjusts to scope · not to padding</span>
        </motion.div>
      </div>
    </section>
  );
}
