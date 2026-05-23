import { motion } from "framer-motion";
import { C, MONO, DISPLAY, DOT_BG } from "./tokens";
import { SectionHead, Tag } from "./primitives";
import { RESUME } from "@/data/resume";

const ACCENTS = [C.red, C.blue, C.yellow, C.ink, C.red];
const SM_SPANS = ["sm:col-span-1", "sm:col-span-1", "sm:col-span-1", "sm:col-span-1", "sm:col-span-2"];
const LG_SPANS = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

const SPRING = { type: "spring" as const, stiffness: 360, damping: 28 };
const VP = { once: true, margin: "-80px" as const };

function GeometricMotif({ idx }: { idx: number }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ position: "absolute", inset: 0 }}
    >
      {idx % 4 === 0 && (
        <>
          <circle cx="100" cy="0" r="60" fill="rgba(255,255,255,0.18)" />
          <circle cx="80" cy="80" r="30" fill="rgba(0,0,0,0.18)" />
        </>
      )}
      {idx % 4 === 1 && (
        <>
          <rect x="60" y="-20" width="80" height="80" fill="rgba(255,255,255,0.18)" transform="rotate(15 100 20)" />
          <rect x="-20" y="60" width="60" height="60" fill="rgba(0,0,0,0.18)" />
        </>
      )}
      {idx % 4 === 2 && (
        <>
          <polygon points="100,0 100,100 0,100" fill="rgba(255,255,255,0.2)" />
          <polygon points="0,0 50,0 0,50" fill="rgba(0,0,0,0.18)" />
        </>
      )}
      {idx % 4 === 3 && (
        <>
          <circle cx="20" cy="20" r="40" fill="rgba(255,255,255,0.18)" />
          <rect x="40" y="40" width="80" height="80" fill="rgba(0,0,0,0.18)" />
        </>
      )}
    </svg>
  );
}

export function SwissProjects() {
  return (
    <section
      id="work"
      style={{
        ...DOT_BG,
        backgroundColor: C.paper,
      }}
    >
      <div className="max-w-[1400px] mx-auto" style={{ padding: "clamp(40px, 5vw, 70px) clamp(16px, 3vw, 32px) clamp(40px, 5vw, 60px)" }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={SPRING}
      >
        <SectionHead
          num="04"
          label="Selected work"
          title="Recent work — eCommerce + the platforms behind it."
          accent={C.blue}
        />
      </motion.div>

      {/* Responsive grid — 1 col mobile, 2 col sm, 6 col lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {RESUME.projects.map((p, i) => {
          const accent = ACCENTS[i];
          const isExternal = !p.url.includes("internal");
          const externalHref = isExternal ? `https://${p.url}` : undefined;

          const cardStyle = {
            backgroundColor: C.card,
            border: `1px solid ${C.ink}`,
            position: "relative" as const,
            overflow: "hidden" as const,
            display: "flex" as const,
            flexDirection: "column" as const,
            textDecoration: "none",
            color: "inherit",
          };

          const motionProps = {
            initial: { opacity: 0, y: 44 },
            whileInView: { opacity: 1, y: 0 },
            viewport: VP,
            transition: { ...SPRING, delay: i * 0.09 },
            ...(isExternal
              ? { whileHover: { y: -4, transition: { type: "spring", stiffness: 440, damping: 26 } } }
              : {}),
            className: `col-span-1 ${SM_SPANS[i]} ${LG_SPANS[i]}`,
            style: cardStyle,
          };

          const inner = (
            <>
              {/* Swatch — scaleX paint-stroke reveal */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 100,
                  overflow: "hidden",
                  flexShrink: 0,
                  borderBottom: `1px solid ${C.ink}`,
                }}
              >
                <div style={{ position: "absolute", inset: 0, backgroundColor: accent }} />
                <GeometricMotif idx={i} />
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 14,
                    fontFamily: MONO,
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#fff",
                    opacity: 0.85,
                  }}
                >
                  {p.type} · 0{i + 1}
                </div>
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "16px 20px 18px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: "clamp(17px, 2vw, 21px)",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.05,
                    color: C.ink,
                  }}
                >
                  {p.name}
                </div>
                <div style={{ marginTop: 8, fontSize: 13, color: C.ink2, lineHeight: 1.45 }}>
                  {p.blurb}
                </div>
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: 12,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    gap: 12,
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {p.stack.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 10,
                      color: isExternal ? C.blue : C.mute,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {isExternal ? "↗" : "·"} {p.url}
                  </span>
                </div>
              </div>
            </>
          );

          return externalHref ? (
            <motion.a
              key={p.name}
              href={externalHref}
              target="_blank"
              rel="noopener noreferrer"
              {...motionProps}
            >
              {inner}
            </motion.a>
          ) : (
            <motion.div key={p.name} {...motionProps}>
              {inner}
            </motion.div>
          );
        })}
      </div>
      </div>
    </section>
  );
}
