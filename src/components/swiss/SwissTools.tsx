import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { C, MONO, DISPLAY, DOT_BG } from "./tokens";
import { Dot, Label, SectionHead, Tag } from "./primitives";

const DAILY = ["Figma", "Tailwind", "Git", "VSCode", "Claude Code", "Cursor", "Postman", "TablePlus"];
const ACCENT_CYCLE = [C.red, C.blue, C.yellow, C.ink];

const SPRING = { type: "spring" as const, stiffness: 380, damping: 30 };
const VP = { once: true, margin: "-80px" as const };

interface ToolCardProps {
  num: string;
  name: string;
  desc: string;
  accent: string;
  className?: string;
  delay?: number;
  children?: ReactNode;
}

function ToolCard({ num, name, desc, accent, className = "", delay = 0, children }: ToolCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VP}
      transition={{ ...SPRING, delay }}
      style={{
        backgroundColor: C.card,
        border: `1px solid ${C.ink}`,
        padding: "22px 24px 22px 32px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={VP}
        transition={{ ...SPRING, delay: delay + 0.2 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 8,
          height: "100%",
          backgroundColor: accent,
          originY: 0,
        }}
      />
      <Label>{num}</Label>
      <div
        style={{
          marginTop: 6,
          fontFamily: DISPLAY,
          fontSize: "clamp(22px, 2.5vw, 28px)",
          fontWeight: 800,
          letterSpacing: "-0.025em",
          lineHeight: 1,
        }}
      >
        {name}
      </div>
      <div style={{ marginTop: 6, fontSize: 13, color: C.ink2, lineHeight: 1.4 }}>{desc}</div>
      {children}
    </motion.div>
  );
}

export function SwissTools() {
  return (
    <section
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
          num="02"
          label="The toolkit"
          title={
            <>
              Tools are tools. The job is the{" "}
              <span style={{ color: C.red }}>job.</span>
            </>
          }
          accent={C.red}
        />
      </motion.div>

      {/* Desktop bento grid */}
      <div
        className="hidden lg:grid"
        style={{
          gridTemplateColumns: "repeat(6, 1fr)",
          gridAutoRows: "min-content",
          gap: 14,
        }}
      >
        {/* Shopify — 2 col × 2 row */}
        <motion.div
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VP}
          transition={{ ...SPRING, delay: 0.06 }}
          style={{
            gridColumn: "span 2",
            gridRow: "span 2",
            backgroundColor: C.card,
            border: `1px solid ${C.ink}`,
            padding: "22px 24px 22px 32px",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={VP}
            transition={{ ...SPRING, delay: 0.24 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 8,
              height: "100%",
              backgroundColor: C.red,
              originY: 0,
            }}
          />
          <Label>● primary stack · 01</Label>
          <div
            style={{
              marginTop: 10,
              fontFamily: DISPLAY,
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
            }}
          >
            Shopify
          </div>
          <div style={{ marginTop: 8, fontSize: 14, lineHeight: 1.45, color: C.ink2, flex: 1 }}>
            Theme dev, app integration, headless via Hydrogen — themes that don't fight the merchant.
          </div>
          <div style={{ marginTop: 16, display: "flex", gap: 6, flexWrap: "wrap" }}>
            {["Liquid", "Hydrogen", "Apps", "Customizer"].map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </motion.div>

        {/* Row 1 right: React + Next.js, Cloudflare */}
        <ToolCard num="02" name="React + Next.js" desc="Component-driven UIs, modern tooling." accent={C.blue} className="lg:col-span-2" delay={0.14} />
        <ToolCard
          num="03"
          name="Cloudflare"
          desc="Workers, Pages, R2, D1 — edge-first deployments that scale without the DevOps overhead."
          accent={C.yellow}
          className="lg:col-span-2"
          delay={0.20}
        >
          <div style={{ marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap" }}>
            {["Workers", "Pages", "R2/D1", "Edge"].map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
        </ToolCard>

        {/* Row 2 right: Laravel, WordPress */}
        <ToolCard num="04" name="Laravel / PHP" desc="APIs, dashboards, the boring-fast stuff." accent={C.red} className="lg:col-span-2" delay={0.18} />
        <ToolCard num="05" name="WordPress" desc="Elementor · Beaver · WPBakery · custom plugins." accent={C.ink} className="lg:col-span-2" delay={0.26} />

        {/* Row 3: AI Workflow + Supabase */}
        <ToolCard
          num="06"
          name="AI Workflow"
          desc="Agentic AI pipelines, Claude & GPT integrations, cron-triggered workers — the part of the stack most devs haven't shipped yet."
          accent={C.blue}
          className="lg:col-span-3"
          delay={0.30}
        >
          <div style={{ marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap" }}>
            {["Claude", "Cursor", "Agentic AI", "Workers Cron"].map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
        </ToolCard>
        <ToolCard num="07" name="Supabase" desc="Postgres + auth + realtime. Database, storage, edge functions — the full backend in one." accent={C.green} className="lg:col-span-3" delay={0.36} />

        {/* Daily drivers — full row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ ...SPRING, delay: 0.40 }}
          style={{
            gridColumn: "span 6",
            border: `1px solid ${C.ink}`,
            overflow: "hidden",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "180px repeat(8, 1fr)" }}>
            <div
              style={{
                backgroundColor: C.ink,
                color: C.paper,
                padding: "14px 18px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Label color="#cfcfcf">Every day</Label>
              <div
                style={{
                  marginTop: 4,
                  fontFamily: DISPLAY,
                  fontWeight: 800,
                  fontSize: 20,
                  letterSpacing: "-0.02em",
                }}
              >
                Daily drivers
              </div>
            </div>
            {DAILY.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ ...SPRING, delay: 0.44 + i * 0.04 }}
                style={{
                  borderLeft: `1px solid ${C.ink}`,
                  padding: "14px 12px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Dot color={ACCENT_CYCLE[i % 4]} size={6} />
                <div style={{ marginTop: 6, fontFamily: MONO, fontWeight: 700, fontSize: 13, color: C.ink }}>
                  {t}
                </div>
                <div style={{ fontSize: 10, color: C.mute, marginTop: 2 }}>daily</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile stacked layout */}
      <div className="flex lg:hidden flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VP}
          transition={{ ...SPRING, delay: 0.06 }}
          style={{
            backgroundColor: C.card,
            border: `1px solid ${C.ink}`,
            padding: "22px 24px 22px 32px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, width: 8, height: "100%", backgroundColor: C.red }} />
          <Label>● primary stack · 01</Label>
          <div style={{ marginTop: 8, fontFamily: DISPLAY, fontSize: "clamp(36px, 8vw, 48px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.95 }}>
            Shopify
          </div>
          <div style={{ marginTop: 8, fontSize: 14, lineHeight: 1.45, color: C.ink2 }}>
            Theme dev, app integration, headless via Hydrogen — themes that don't fight the merchant.
          </div>
          <div style={{ marginTop: 14, display: "flex", gap: 6, flexWrap: "wrap" }}>
            {["Liquid", "Hydrogen", "Apps", "Customizer"].map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { num: "02", name: "React + Next.js", desc: "Component-driven UIs.", accent: C.blue },
            { num: "03", name: "Cloudflare", desc: "Workers, Pages, R2 — edge-first.", accent: C.yellow },
            { num: "04", name: "Laravel / PHP", desc: "APIs, dashboards.", accent: C.red },
            { num: "05", name: "WordPress", desc: "Elementor · Beaver · WPBakery.", accent: C.ink },
            { num: "06", name: "AI Workflow", desc: "Agentic AI, cron workers.", accent: C.blue },
            { num: "07", name: "Supabase", desc: "Postgres + auth + realtime.", accent: C.green },
          ].map(({ num, name, desc, accent }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ ...SPRING, delay: 0.08 + i * 0.06 }}
              style={{
                backgroundColor: C.card,
                border: `1px solid ${C.ink}`,
                padding: "16px 16px 16px 24px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, width: 6, height: "100%", backgroundColor: accent }} />
              <Label>{num}</Label>
              <div style={{ marginTop: 6, fontFamily: DISPLAY, fontSize: 18, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05 }}>{name}</div>
              <div style={{ marginTop: 4, fontSize: 12, color: C.ink2 }}>{desc}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ ...SPRING, delay: 0.22 }}
          style={{ border: `1px solid ${C.ink}`, overflow: "hidden" }}
        >
          <div style={{ backgroundColor: C.ink, color: C.paper, padding: "12px 16px" }}>
            <Label color="#cfcfcf">Every day</Label>
            <div style={{ marginTop: 4, fontFamily: DISPLAY, fontWeight: 800, fontSize: 18 }}>Daily drivers</div>
          </div>
          <div className="grid grid-cols-4">
            {DAILY.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, scale: 0.82 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VP}
                transition={{ ...SPRING, delay: 0.26 + i * 0.035 }}
                style={{
                  borderTop: `1px solid ${C.ink}`,
                  borderLeft: i % 4 !== 0 ? `1px solid ${C.ink}` : undefined,
                  padding: "10px 10px",
                }}
              >
                <Dot color={ACCENT_CYCLE[i % 4]} size={5} />
                <div style={{ marginTop: 4, fontFamily: MONO, fontWeight: 700, fontSize: 11, color: C.ink }}>{t}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
