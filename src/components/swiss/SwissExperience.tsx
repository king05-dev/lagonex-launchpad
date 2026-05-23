import { motion } from "framer-motion";
import { C, MONO, DISPLAY } from "./tokens";
import { Dot } from "./primitives";
import { RESUME } from "@/data/resume";

const ACCENTS = [C.red, C.yellow, C.blue, "#9c9c9c"] as const;
const SPRING = { type: "spring" as const, stiffness: 380, damping: 30 };
const VP = { once: true, margin: "-80px" as const };

export function SwissExperience() {
  return (
    <section
      id="info"
      style={{
        backgroundColor: C.ink,
        color: C.paper,
      }}
    >
      <div className="max-w-[1400px] mx-auto" style={{ padding: "clamp(40px, 5vw, 70px) clamp(16px, 3vw, 32px) clamp(40px, 5vw, 60px)" }}>
      {/* Section head */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={SPRING}
        style={{ marginBottom: 28 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 11,
              color: "#9c9c9c",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            §03 · Work history
          </span>
          <span style={{ flex: 1, height: 1, backgroundColor: "#3a3a3a" }} />
          <Dot color={C.yellow} size={10} />
        </div>
        <div
          style={{
            marginTop: 16,
            fontFamily: DISPLAY,
            fontSize: "clamp(28px, 4vw, 56px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
          }}
        >
          Roles that{" "}
          <span style={{ color: C.yellow }}>shipped</span> real products.
        </div>
      </motion.div>

      {/* Desktop table */}
      <motion.div
        className="hidden md:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VP}
        transition={{ duration: 0.25, delay: 0.1 }}
        style={{ border: "1px solid #2a2a2a", backgroundColor: "#171717" }}
      >
        {/* Column headers */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VP}
          transition={{ ...SPRING, delay: 0.15 }}
          style={{
            display: "grid",
            gridTemplateColumns: "80px 180px 1.6fr 1fr",
            padding: "12px 22px",
            borderBottom: "1px solid #2a2a2a",
            fontFamily: MONO,
            fontSize: 10.5,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#7d7d7d",
          }}
        >
          <span>#</span>
          <span>Period · Place</span>
          <span>Role / Org</span>
          <span>Stack</span>
        </motion.div>

        {/* Job rows — slide in from left, ledger-style */}
        {RESUME.experience.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -56 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ ...SPRING, delay: 0.2 + i * 0.12 }}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 180px 1.6fr 1fr",
              padding: "26px 22px",
              borderBottom: i < RESUME.experience.length - 1 ? "1px solid #2a2a2a" : "none",
              alignItems: "flex-start",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <Dot color={ACCENTS[i]} size={10} />
              <span style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em" }}>
                0{i + 1}
              </span>
            </div>
            <div style={{ fontFamily: MONO, fontSize: 12, lineHeight: 1.5 }}>
              <div style={{ color: "#fff" }}>{job.period}</div>
              <div style={{ color: "#7d7d7d", marginTop: 4 }}>{job.place}</div>
            </div>
            <div>
              <div style={{ fontFamily: DISPLAY, fontSize: 22, fontWeight: 700, letterSpacing: "-0.015em", color: "#fff", lineHeight: 1.1 }}>
                {job.title}
              </div>
              <div style={{ marginTop: 4, color: ACCENTS[i], fontFamily: MONO, fontSize: 12 }}>
                @ {job.org}
              </div>
              <ul style={{ marginTop: 12, paddingLeft: 18, fontSize: 13, color: "#dcdcdc", lineHeight: 1.55, listStyleType: "disc" }}>
                {job.bullets.map((b, j) => (
                  <li key={j} style={{ marginBottom: 3 }}>{b}</li>
                ))}
              </ul>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {job.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    padding: "2px 8px",
                    border: "1px solid #4a4a4a",
                    borderRadius: 3,
                    color: "#e2e2e2",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile cards */}
      <div className="flex md:hidden flex-col gap-4">
        {RESUME.experience.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ ...SPRING, delay: i * 0.1 }}
            style={{
              border: "1px solid #2a2a2a",
              backgroundColor: "#171717",
              padding: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <Dot color={ACCENTS[i]} size={10} />
              <span style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 20, color: "#fff" }}>
                0{i + 1}
              </span>
            </div>
            <div style={{ fontFamily: DISPLAY, fontSize: 20, fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: 4 }}>
              {job.title}
            </div>
            <div style={{ fontFamily: MONO, fontSize: 11, color: ACCENTS[i], marginBottom: 4 }}>
              @ {job.org}
            </div>
            <div style={{ fontFamily: MONO, fontSize: 11, color: "#7d7d7d", marginBottom: 14 }}>
              {job.period} · {job.place}
            </div>
            <ul style={{ paddingLeft: 18, fontSize: 13, color: "#dcdcdc", lineHeight: 1.55, marginBottom: 14, listStyleType: "disc" }}>
              {job.bullets.map((b, j) => (
                <li key={j} style={{ marginBottom: 4 }}>{b}</li>
              ))}
            </ul>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {job.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    padding: "2px 8px",
                    border: "1px solid #4a4a4a",
                    borderRadius: 3,
                    color: "#e2e2e2",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
