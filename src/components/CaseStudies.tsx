import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* ── SVG thumbnail placeholders ─────────────────────────────────────── */
const Thumb1 = () => (
  <svg viewBox="0 0 400 260" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="t1-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1699B5" />
        <stop offset="100%" stopColor="#0D3D52" />
      </linearGradient>
    </defs>
    <rect width="400" height="260" fill="url(#t1-bg)" />
    {/* Abstract automation nodes */}
    <circle cx="80" cy="130" r="28" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
    <circle cx="80" cy="130" r="14" fill="rgba(255,255,255,0.3)" />
    <circle cx="200" cy="80" r="28" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
    <circle cx="200" cy="80" r="14" fill="rgba(255,255,255,0.3)" />
    <circle cx="200" cy="180" r="28" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
    <circle cx="200" cy="180" r="14" fill="rgba(255,255,255,0.3)" />
    <circle cx="320" cy="130" r="28" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
    <circle cx="320" cy="130" r="14" fill="rgba(255,255,255,0.3)" />
    {/* Connecting lines */}
    <line x1="94" y1="123" x2="186" y2="86" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="5,3" />
    <line x1="94" y1="137" x2="186" y2="174" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="5,3" />
    <line x1="214" y1="84" x2="306" y2="124" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="5,3" />
    <line x1="214" y1="176" x2="306" y2="136" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="5,3" />
    {/* Animated dot indicator */}
    <circle cx="200" cy="130" r="5" fill="white" opacity="0.6" />
    {/* Label */}
    <text x="20" y="230" fontFamily="sans-serif" fontSize="13" fontWeight="700" fill="rgba(255,255,255,0.9)">
      Automation Platform
    </text>
    <text x="20" y="248" fontFamily="sans-serif" fontSize="10" fill="rgba(255,255,255,0.55)">
      Business Process Automation
    </text>
  </svg>
);

const Thumb2 = () => (
  <svg viewBox="0 0 400 260" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="t2-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1A5E78" />
        <stop offset="100%" stopColor="#0A2E3C" />
      </linearGradient>
    </defs>
    <rect width="400" height="260" fill="url(#t2-bg)" />
    {/* UI wireframe mockup */}
    <rect x="30" y="30" width="340" height="200" rx="6" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    <rect x="30" y="30" width="340" height="28" rx="6" fill="rgba(255,255,255,0.12)" />
    <circle cx="48" cy="44" r="5" fill="rgba(255,255,255,0.4)" />
    <circle cx="62" cy="44" r="5" fill="rgba(255,255,255,0.4)" />
    <circle cx="76" cy="44" r="5" fill="rgba(255,255,255,0.4)" />
    {/* Content rows */}
    <rect x="44" y="72" width="200" height="12" rx="2" fill="rgba(255,255,255,0.25)" />
    <rect x="44" y="92" width="150" height="8" rx="2" fill="rgba(255,255,255,0.12)" />
    <rect x="44" y="108" width="170" height="8" rx="2" fill="rgba(255,255,255,0.12)" />
    {/* Side panel */}
    <rect x="280" y="62" width="76" height="156" rx="4" fill="rgba(255,255,255,0.08)" />
    <rect x="288" y="72" width="60" height="24" rx="3" fill="rgba(22,153,181,0.5)" />
    <rect x="288" y="104" width="60" height="10" rx="2" fill="rgba(255,255,255,0.15)" />
    <rect x="288" y="120" width="44" height="10" rx="2" fill="rgba(255,255,255,0.1)" />
    <rect x="288" y="136" width="52" height="10" rx="2" fill="rgba(255,255,255,0.1)" />
    {/* Progress bars */}
    <rect x="44" y="128" width="200" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
    <rect x="44" y="128" width="130" height="6" rx="3" fill="rgba(22,153,181,0.7)" />
    <rect x="44" y="144" width="200" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
    <rect x="44" y="144" width="168" height="6" rx="3" fill="rgba(85,113,73,0.7)" />
    <text x="20" y="230" fontFamily="sans-serif" fontSize="13" fontWeight="700" fill="rgba(255,255,255,0.9)">
      Client Management System
    </text>
    <text x="20" y="248" fontFamily="sans-serif" fontSize="10" fill="rgba(255,255,255,0.55)">
      Custom Software Development
    </text>
  </svg>
);

const Thumb3 = () => (
  <svg viewBox="0 0 400 260" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="t3-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3D6B35" />
        <stop offset="100%" stopColor="#1E3A1A" />
      </linearGradient>
    </defs>
    <rect width="400" height="260" fill="url(#t3-bg)" />
    {/* Hexagonal integration pattern */}
    {[
      [120, 80], [200, 80], [280, 80],
      [160, 140], [240, 140],
      [200, 200],
    ].map(([cx, cy], i) => (
      <g key={i}>
        <polygon
          points={`${cx},${cy - 28} ${cx + 24},${cy - 14} ${cx + 24},${cy + 14} ${cx},${cy + 28} ${cx - 24},${cy + 14} ${cx - 24},${cy - 14}`}
          fill="rgba(255,255,255,0.1)"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
        />
        <circle cx={cx} cy={cy} r="8" fill="rgba(255,255,255,0.3)" />
      </g>
    ))}
    {/* Connection lines */}
    <line x1="120" y1="108" x2="160" y2="126" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
    <line x1="200" y1="108" x2="160" y2="126" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
    <line x1="200" y1="108" x2="240" y2="126" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
    <line x1="280" y1="108" x2="240" y2="126" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
    <line x1="160" y1="168" x2="200" y2="172" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
    <line x1="240" y1="168" x2="200" y2="172" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
    <text x="20" y="230" fontFamily="sans-serif" fontSize="13" fontWeight="700" fill="rgba(255,255,255,0.9)">
      Workflow Integration Hub
    </text>
    <text x="20" y="248" fontFamily="sans-serif" fontSize="10" fill="rgba(255,255,255,0.55)">
      System Integration
    </text>
  </svg>
);

const caseStudies = [
  {
    number: "01",
    Thumb: Thumb1,
    title: "Business Process Automation Platform",
    category: "Business Automation",
    description:
      "Automated order processing, invoicing, and reporting — reducing manual effort by 80% for a mid-sized logistics company.",
    tags: ["Automation", "Workflow", "Integration"],
  },
  {
    number: "02",
    Thumb: Thumb2,
    title: "Custom Client Management System",
    category: "Custom Software",
    description:
      "Built a tailor-made CRM that centralizes client data, tracks interactions, and generates insights — replacing 3 disconnected tools.",
    tags: ["CRM", "Dashboard", "Analytics"],
  },
  {
    number: "03",
    Thumb: Thumb3,
    title: "Smart Workflow Integration Hub",
    category: "System Integration",
    description:
      "Connected 10+ internal tools (ERP, CRM, HR, finance) into a unified data flow, eliminating data silos across departments.",
    tags: ["Integration", "API", "Data Sync"],
  },
];

const CaseStudies = () => (
  <section id="work" className="py-28 bg-white">
    <div className="container mx-auto px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <motion.p
            className="text-primary font-semibold tracking-widest uppercase text-xs mb-5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            Our Work
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Our Recent <br />
            <span className="text-primary">Case Studies</span>
          </motion.h2>
        </div>
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors border-b border-foreground hover:border-primary pb-0.5 shrink-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Start Your Project
          <ArrowUpRight className="h-4 w-4" />
        </motion.a>
      </div>

      {/* Case study cards */}
      <div className="grid md:grid-cols-3 gap-px bg-border">
        {caseStudies.map((cs, index) => (
          <motion.div
            key={cs.title}
            className="bg-white group hover:shadow-lg transition-all duration-300 flex flex-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Thumbnail */}
            <div className="aspect-[3/2] overflow-hidden">
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <cs.Thumb />
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-7 flex flex-col gap-4 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  {cs.category}
                </span>
                <span className="text-4xl font-bold text-muted-foreground/15 leading-none">
                  {cs.number}
                </span>
              </div>

              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                {cs.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {cs.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-muted text-foreground/60 text-[10px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors group/link mt-auto pt-2 border-t border-border"
              >
                View Details
                <ArrowUpRight className="h-4 w-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
