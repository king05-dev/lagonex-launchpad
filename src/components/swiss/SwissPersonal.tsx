import { motion } from "framer-motion";
import { C, MONO, DISPLAY, DOT_BG } from "./tokens";
import { SectionHead, Dot, Label, Tag } from "./primitives";
import { RESUME } from "@/data/resume";

const DOT_COLORS = [C.red, C.blue];
const SPRING = { type: "spring" as const, stiffness: 360, damping: 28 };
const VP = { once: true, margin: "-80px" as const };

export function SwissPersonal() {
  return (
    <section
      id="personal"
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
            num="06"
            label="After hours"
            title={
              <>
                Things I build for myself,{" "}
                <span style={{ color: C.yellow }}>just because.</span>
              </>
            }
            accent={C.yellow}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {RESUME.personal.map((p, i) => {
            const isExternal = p.url.includes(".");
            const href = isExternal ? `https://${p.url}` : undefined;

            const motionProps = {
              initial: { opacity: 0, x: i === 0 ? -48 : 48, y: 16 },
              whileInView: { opacity: 1, x: 0, y: 0 },
              viewport: VP,
              transition: { ...SPRING, delay: i * 0.1 },
              ...(isExternal
                ? { whileHover: { y: -4, transition: { type: "spring" as const, stiffness: 440, damping: 26 } } }
                : {}),
              style: {
                backgroundColor: C.card,
                border: `1px solid ${C.ink}`,
                padding: "26px 28px 28px",
                display: "flex" as const,
                flexDirection: "column" as const,
                gap: 10,
                position: "relative" as const,
                overflow: "hidden" as const,
                minHeight: 220,
                textDecoration: "none",
                color: "inherit",
              },
            };

            const inner = (
              <>
                {/* Subtle bg motif */}
                <div style={{ position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none" }}>
                  {i === 0 && (
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <circle cx="100" cy="0" r="80" fill={C.red} />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <polygon points="100,100 0,100 100,0" fill={C.blue} />
                    </svg>
                  )}
                </div>

                <Label>
                  <Dot color={DOT_COLORS[i]} /> Personal · 0{i + 1}
                </Label>
                <div
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: "clamp(22px, 3vw, 36px)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    color: C.ink,
                  }}
                >
                  {p.name}
                </div>
                <div style={{ fontSize: 15, color: C.ink2, lineHeight: 1.45 }}>{p.blurb}</div>
                <div
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    gap: 12,
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {p.stack.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                  <span style={{ fontFamily: MONO, fontSize: 11, color: isExternal ? C.blue : C.mute, whiteSpace: "nowrap" }}>
                    {isExternal ? "↗" : "·"} {p.url}
                  </span>
                </div>
              </>
            );

            return href ? (
              <motion.a key={p.name} href={href} target="_blank" rel="noopener noreferrer" {...motionProps}>
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
