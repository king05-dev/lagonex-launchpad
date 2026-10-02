import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { EASE } from "@/components/common/motion";

interface Lane {
  label: string;
  count: number;
}

/**
 * A linear workflow drawn as connected steps, optionally grouped into lanes.
 * Wraps on desktop, stacks vertically on mobile.
 */
export function Workflow({
  steps,
  lanes,
  accent,
  dark = false,
}: {
  steps: readonly string[];
  lanes?: readonly Lane[];
  accent: string;
  dark?: boolean;
}) {
  const reduce = useReducedMotion();
  const groups: { label?: string; steps: { name: string; n: number }[] }[] = [];
  if (lanes?.length) {
    let i = 0;
    for (const lane of lanes) {
      groups.push({ label: lane.label, steps: steps.slice(i, i + lane.count).map((name, k) => ({ name, n: i + k + 1 })) });
      i += lane.count;
    }
  } else {
    groups.push({ steps: steps.map((name, k) => ({ name, n: k + 1 })) });
  }

  const node = dark ? "border-white/15 bg-white/10 text-white" : "border-gray-200 bg-white text-gray-900";
  const muted = dark ? "text-white/50" : "text-gray-400";

  return (
    <ol className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-2" aria-label="Workflow">
      {groups.map((g, gi) => (
        <li key={g.label ?? gi} className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-2" style={{ flexGrow: g.steps.length }}>
          <div className={`flex-1 rounded-2xl p-3 ${g.label ? (dark ? "bg-white/5 ring-1 ring-white/10" : "bg-gray-50 ring-1 ring-gray-100") : ""}`}>
            {g.label && (
              <p className="mb-2 px-1 text-[11px] font-extrabold uppercase tracking-[0.06em]" style={{ color: accent }}>
                {g.label}
              </p>
            )}
            <ol className="flex flex-col gap-2 lg:flex-row lg:flex-wrap lg:items-center">
              {g.steps.map((s, si) => (
                <li key={s.name} className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">
                  <motion.div
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, ease: EASE, delay: s.n * 0.06 }}
                    className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 ${node}`}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-black text-white" style={{ backgroundColor: accent }}>
                      {s.n}
                    </span>
                    <span className="whitespace-nowrap text-[13px] font-bold">{s.name}</span>
                  </motion.div>
                  {si < g.steps.length - 1 && <Connector muted={muted} />}
                </li>
              ))}
            </ol>
          </div>
          {gi < groups.length - 1 && <Connector muted={muted} />}
        </li>
      ))}
    </ol>
  );
}

function Connector({ muted }: { muted: string }) {
  return (
    <span className={`flex items-center justify-center ${muted}`} aria-hidden>
      <ArrowDown size={16} className="lg:hidden" />
      <ArrowRight size={16} className="hidden lg:block" />
    </span>
  );
}
