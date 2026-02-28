import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "@/components/BookingModal";

/* ── SVG placeholder: Dashboard UI mockup ─────────────────────────── */
const DashboardIllustration = () => (
  <svg
    viewBox="0 0 580 440"
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="hero-grid" width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#D2DCE6" strokeWidth="0.5" />
      </pattern>
      <linearGradient id="bar-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1699B5" />
        <stop offset="100%" stopColor="#1699B5" stopOpacity="0.4" />
      </linearGradient>
      <linearGradient id="card-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1699B5" />
        <stop offset="100%" stopColor="#1A5E78" />
      </linearGradient>
    </defs>

    {/* Background */}
    <rect width="580" height="440" fill="#EBF4F8" />
    <rect width="580" height="440" fill="url(#hero-grid)" opacity="0.6" />

    {/* Window card */}
    <rect x="24" y="24" width="532" height="392" rx="10" fill="white" stroke="#D2DCE6" strokeWidth="1" />

    {/* Title bar */}
    <rect x="24" y="24" width="532" height="40" rx="10" fill="#F4F7FA" />
    <rect x="24" y="52" width="532" height="12" fill="#F4F7FA" />
    <circle cx="48" cy="44" r="6" fill="#FF5F57" />
    <circle cx="68" cy="44" r="6" fill="#FEBC2E" />
    <circle cx="88" cy="44" r="6" fill="#28C840" />
    <rect x="116" y="36" width="220" height="16" rx="8" fill="#E4EDF4" />
    <text x="130" y="48" fontFamily="monospace" fontSize="9" fill="#617B8A">lagonex.com/dashboard</text>
    <rect x="508" y="36" width="36" height="16" rx="4" fill="#1699B5" opacity="0.15" />
    <text x="516" y="48" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#1699B5">Live</text>

    {/* Sidebar */}
    <rect x="24" y="64" width="148" height="352" fill="#F8FAFB" stroke="#E4EDF4" strokeWidth="0.5" />
    <text x="38" y="92" fontFamily="sans-serif" fontSize="9" fontWeight="700" fill="#617B8A">MENU</text>

    {/* Sidebar items */}
    <rect x="34" y="100" width="128" height="30" rx="4" fill="#1699B5" opacity="0.12" />
    <text x="50" y="120" fontFamily="sans-serif" fontSize="10" fontWeight="600" fill="#1699B5">■  Dashboard</text>
    <text x="50" y="150" fontFamily="sans-serif" fontSize="10" fill="#617B8A">○  Projects</text>
    <text x="50" y="178" fontFamily="sans-serif" fontSize="10" fill="#617B8A">○  Clients</text>
    <text x="50" y="206" fontFamily="sans-serif" fontSize="10" fill="#617B8A">○  Analytics</text>
    <text x="50" y="234" fontFamily="sans-serif" fontSize="10" fill="#617B8A">○  Automation</text>
    <text x="50" y="262" fontFamily="sans-serif" fontSize="10" fill="#617B8A">○  Integrations</text>
    <text x="50" y="290" fontFamily="sans-serif" fontSize="10" fill="#617B8A">○  Settings</text>

    {/* Brand in sidebar bottom */}
    <text x="38" y="396" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#1699B5">LagonEX</text>

    {/* Main content */}
    {/* Header row */}
    <rect x="186" y="78" width="356" height="38" rx="5" fill="#F4F7FA" stroke="#E4EDF4" strokeWidth="1" />
    <text x="200" y="103" fontFamily="sans-serif" fontSize="12" fontWeight="600" fill="#0A1A26">Welcome back, Team 👋</text>
    <rect x="472" y="84" width="60" height="26" rx="4" fill="url(#card-grad)" />
    <text x="485" y="102" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="white">+ New Task</text>

    {/* Stat cards row */}
    <rect x="186" y="130" width="108" height="68" rx="5" fill="white" stroke="#E4EDF4" strokeWidth="1" />
    <text x="200" y="160" fontFamily="sans-serif" fontSize="22" fontWeight="700" fill="#0A1A26">50+</text>
    <text x="200" y="178" fontFamily="sans-serif" fontSize="8" fill="#617B8A">Projects Done</text>

    <rect x="304" y="130" width="108" height="68" rx="5" fill="url(#card-grad)" />
    <text x="318" y="160" fontFamily="sans-serif" fontSize="22" fontWeight="700" fill="white">98%</text>
    <text x="318" y="178" fontFamily="sans-serif" fontSize="8" fill="rgba(255,255,255,0.8)">Satisfaction</text>

    <rect x="422" y="130" width="120" height="68" rx="5" fill="white" stroke="#E4EDF4" strokeWidth="1" />
    <text x="436" y="160" fontFamily="sans-serif" fontSize="22" fontWeight="700" fill="#0A1A26">30+</text>
    <text x="436" y="178" fontFamily="sans-serif" fontSize="8" fill="#617B8A">Happy Clients</text>

    {/* Chart card */}
    <rect x="186" y="212" width="232" height="152" rx="5" fill="white" stroke="#E4EDF4" strokeWidth="1" />
    <text x="200" y="234" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#0A1A26">Revenue Growth</text>
    <text x="200" y="250" fontFamily="sans-serif" fontSize="8" fill="#617B8A">2024 — 2025</text>

    {/* Chart bars */}
    <rect x="204" y="328" width="16" height="28" rx="2" fill="url(#bar-grad)" opacity="0.35" />
    <rect x="228" y="310" width="16" height="46" rx="2" fill="url(#bar-grad)" opacity="0.5" />
    <rect x="252" y="292" width="16" height="64" rx="2" fill="url(#bar-grad)" opacity="0.65" />
    <rect x="276" y="275" width="16" height="81" rx="2" fill="url(#bar-grad)" opacity="0.8" />
    <rect x="300" y="290" width="16" height="66" rx="2" fill="url(#bar-grad)" opacity="0.7" />
    <rect x="324" y="262" width="16" height="94" rx="2" fill="url(#bar-grad)" />
    <rect x="348" y="274" width="16" height="82" rx="2" fill="url(#bar-grad)" opacity="0.9" />

    {/* Trend line */}
    <polyline
      points="212,328 236,310 260,292 284,275 308,290 332,262 356,274"
      fill="none" stroke="#557149" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    />
    <circle cx="212" cy="328" r="3" fill="white" stroke="#557149" strokeWidth="2" />
    <circle cx="236" cy="310" r="3" fill="white" stroke="#557149" strokeWidth="2" />
    <circle cx="260" cy="292" r="3" fill="white" stroke="#557149" strokeWidth="2" />
    <circle cx="284" cy="275" r="3" fill="white" stroke="#557149" strokeWidth="2" />
    <circle cx="308" cy="290" r="3" fill="white" stroke="#557149" strokeWidth="2" />
    <circle cx="332" cy="262" r="3" fill="#557149" stroke="#557149" strokeWidth="2" />
    <circle cx="356" cy="274" r="3" fill="white" stroke="#557149" strokeWidth="2" />

    {/* Active tasks panel */}
    <rect x="428" y="212" width="114" height="152" rx="5" fill="white" stroke="#E4EDF4" strokeWidth="1" />
    <text x="440" y="232" fontFamily="sans-serif" fontSize="9" fontWeight="700" fill="#617B8A">ACTIVE TASKS</text>

    <rect x="438" y="240" width="94" height="32" rx="4" fill="#F4F7FA" />
    <text x="448" y="255" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#0A1A26">Automation</text>
    <text x="448" y="267" fontFamily="sans-serif" fontSize="7" fill="#617B8A">In Progress</text>

    <rect x="438" y="280" width="94" height="32" rx="4" fill="#1699B5" opacity="0.1" />
    <text x="448" y="295" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#1699B5">Custom App</text>
    <text x="448" y="307" fontFamily="sans-serif" fontSize="7" fill="#1699B5" opacity="0.7">Review</text>

    <rect x="438" y="320" width="94" height="32" rx="4" fill="#F4F7FA" />
    <text x="448" y="335" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#0A1A26">Integration</text>
    <text x="448" y="347" fontFamily="sans-serif" fontSize="7" fill="#617B8A">Planning</text>

    {/* Glow accent */}
    <circle cx="332" cy="262" r="36" fill="#1699B5" opacity="0.07" />
  </svg>
);

/* ── Ticker services ───────────────────────────────────────────────── */
const TICKER_ITEMS = [
  "Business Automation",
  "Custom Software",
  "System Integration",
  "Digital Optimization",
  "SaaS Solutions",
  "AI Integration",
  "Workflow Design",
  "Process Consulting",
];

const Hero = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "30+", label: "Happy Clients" },
    { value: "3+",  label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  const clients = ["TechCorp", "InnovateCo", "DataFlow", "CloudSync", "SmartBiz"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <>
      <section className="relative min-h-screen pt-20 overflow-hidden bg-background">
        {/* Subtle dot grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(210 22% 80%) 1px, transparent 0)",
            backgroundSize: "28px 28px",
            opacity: 0.45,
          }}
        />
        {/* Decorative blobs */}
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-primary/8 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-20 w-[340px] h-[340px] rounded-full bg-secondary/6 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative">
          {/* ── Main hero grid ── */}
          <motion.div
            className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center py-16 lg:py-20 min-h-[calc(100vh-80px)]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left — content */}
            <div className="space-y-8 lg:space-y-10">
              {/* Badge */}
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2.5 border border-primary/30 bg-primary/6 px-4 py-2 text-primary text-xs font-semibold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Next Generation Software Agency
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="text-5xl md:text-6xl xl:text-7xl font-bold text-foreground leading-[1.08] tracking-tight"
                variants={itemVariants}
              >
                Empowering{" "}
                <span className="text-primary">Businesses</span>
                <br />
                Through{" "}
                <em className="not-italic font-extrabold underline decoration-primary/40 underline-offset-4">
                  Intelligent
                </em>
                <br />
                Software
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-muted-foreground text-lg leading-relaxed max-w-[480px]"
                variants={itemVariants}
              >
                From{" "}
                <span className="text-foreground font-medium">automation</span> to{" "}
                <span className="text-foreground font-medium">custom development</span> and{" "}
                <span className="text-foreground font-medium">optimization</span> — we help
                businesses grow in the digital era.
              </motion.p>

              {/* CTA buttons */}
              <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 group px-8"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:border-primary/50 hover:bg-primary/5 group px-8"
                  asChild
                >
                  <a href="#work">
                    View Our Work
                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </Button>
              </motion.div>

              {/* Trusted by */}
              <motion.div
                className="pt-6 border-t border-border"
                variants={itemVariants}
              >
                <p className="text-muted-foreground text-[10px] uppercase tracking-[0.2em] mb-4 font-medium">
                  Trusted By
                </p>
                <div className="flex flex-wrap gap-6 items-center">
                  {clients.map((c) => (
                    <span
                      key={c}
                      className="text-muted-foreground/50 font-semibold text-sm tracking-wide hover:text-primary transition-colors cursor-default"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right — illustration */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Main visual */}
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl bg-muted aspect-[4/3]">
                <DashboardIllustration />
              </div>

              {/* Floating stat card — bottom left */}
              <motion.div
                className="absolute -bottom-5 -left-5 bg-white border border-border shadow-lg px-5 py-4 z-10"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-xs text-muted-foreground mt-0.5">Projects Delivered</p>
              </motion.div>

              {/* Floating stat card — top right */}
              <motion.div
                className="absolute -top-5 -right-5 bg-primary text-white shadow-lg px-5 py-4 z-10"
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
              >
                <p className="text-3xl font-bold">98%</p>
                <p className="text-xs text-white/75 mt-0.5">Client Satisfaction</p>
              </motion.div>

              {/* Award badge */}
              <motion.div
                className="absolute bottom-8 right-6 bg-foreground text-background text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                ✦ LagonEX Agency
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Stats strip ── */}
        <div className="bg-foreground text-background py-10 border-t border-border">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  <p className="text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-background/55 mt-1.5 uppercase tracking-widest text-[10px] font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Scrolling ticker ── */}
        <div className="bg-primary py-4 overflow-hidden">
          <div className="animate-marquee">
            {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-5 px-8 text-white text-xs font-bold uppercase tracking-[0.2em] shrink-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};

export default Hero;
