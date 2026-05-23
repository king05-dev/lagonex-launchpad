import { motion } from "framer-motion";
import { C, MONO, DISPLAY, DOT_BG } from "./tokens";
import { SectionHead, Dot, Label, Tag } from "./primitives";
import { RESUME } from "@/data/resume";

const SKILL_ACCENTS = [C.red, C.blue, C.ink];
const SPRING = { type: "spring" as const, stiffness: 380, damping: 30 };
const SNAP = { type: "spring" as const, stiffness: 440, damping: 28 };
const VP = { once: true, margin: "-80px" as const };

export function SwissSkills() {
  const skillEntries = Object.entries(RESUME.skills) as [string, readonly string[]][];

  return (
    <section
      id="skills"
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
          num="07"
          label="Skills + education"
          title={
            <>
              A toolkit built for{" "}
              <span style={{ color: C.red }}>shipping</span>.
            </>
          }
          accent={C.red}
        />
      </motion.div>

      {/* Skill categories — stagger up */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" style={{ marginBottom: 14 }}>
        {skillEntries.map(([cat, items], i) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ ...SPRING, delay: i * 0.1 }}
            style={{
              backgroundColor: C.card,
              border: `1px solid ${C.ink}`,
              padding: "22px 24px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 14,
              }}
            >
              <Label>
                <Dot color={SKILL_ACCENTS[i]} /> {cat}
              </Label>
              <span style={{ fontFamily: MONO, fontSize: 11, color: C.mute }}>
                {items.length} skills
              </span>
            </div>
            {/* Tags pop in with tiny stagger */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {items.map((s, j) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.78 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={VP}
                  transition={{ ...SNAP, delay: i * 0.1 + j * 0.03 }}
                >
                  <Tag>{s}</Tag>
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education — left card from left, right card from right */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {RESUME.education.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ ...SPRING, delay: 0.15 + i * 0.1 }}
            style={{
              backgroundColor: i === 0 ? C.yellow : C.card,
              border: `1px solid ${C.ink}`,
              padding: "22px 24px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Label color={i === 0 ? C.ink : C.mute}>
              <Dot color={i === 0 ? C.ink : C.blue} /> Education · {e.year}
            </Label>
            <div
              style={{
                marginTop: 12,
                fontFamily: DISPLAY,
                fontSize: "clamp(18px, 2vw, 22px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: C.ink,
              }}
            >
              {e.degree}
            </div>
            <div style={{ marginTop: 6, fontSize: 13, color: C.ink2 }}>
              {e.school}
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
