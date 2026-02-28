import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Handshake } from "lucide-react";

/* ── SVG placeholder: team / office abstract ──────────────────────── */
const TeamIllustration = () => (
  <svg
    viewBox="0 0 500 560"
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="team-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#D5EBF3" />
        <stop offset="100%" stopColor="#BDD7E8" />
      </linearGradient>
      <linearGradient id="team-grad1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1699B5" />
        <stop offset="100%" stopColor="#1A5E78" />
      </linearGradient>
      <linearGradient id="team-grad2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1A5E78" />
        <stop offset="100%" stopColor="#0D3D52" />
      </linearGradient>
      <linearGradient id="team-grad3" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#557149" />
        <stop offset="100%" stopColor="#3D5436" />
      </linearGradient>
    </defs>

    {/* Background */}
    <rect width="500" height="380" fill="url(#team-bg)" />

    {/* Desk surface */}
    <rect x="0" y="305" width="500" height="75" fill="#B0C8D8" />
    <rect x="0" y="305" width="500" height="4" fill="#9CB5C5" />

    {/* Monitor on desk — left */}
    <rect x="40" y="230" width="100" height="72" rx="4" fill="white" opacity="0.85" />
    <rect x="80" y="302" width="20" height="8" fill="#CBD5E0" />
    {/* Screen content */}
    <rect x="48" y="238" width="84" height="8" rx="2" fill="#1699B5" opacity="0.6" />
    <rect x="48" y="252" width="60" height="6" rx="2" fill="#E4EDF4" />
    <rect x="48" y="264" width="72" height="6" rx="2" fill="#E4EDF4" />
    <rect x="48" y="276" width="50" height="6" rx="2" fill="#E4EDF4" />

    {/* Laptop — right */}
    <rect x="350" y="250" width="110" height="66" rx="4" fill="white" opacity="0.8" />
    <rect x="340" y="312" width="130" height="6" rx="2" fill="#CBD5E0" />
    <rect x="358" y="258" width="94" height="50" rx="2" fill="#F4F7FA" />
    <rect x="364" y="264" width="50" height="6" rx="2" fill="#1699B5" opacity="0.5" />
    <rect x="364" y="276" width="70" height="5" rx="2" fill="#E4EDF4" />
    <rect x="364" y="287" width="56" height="5" rx="2" fill="#E4EDF4" />
    <rect x="364" y="298" width="64" height="5" rx="2" fill="#E4EDF4" />

    {/* Person 1 — left */}
    <ellipse cx="155" cy="160" rx="38" ry="40" fill="url(#team-grad1)" opacity="0.75" />
    <rect x="105" y="195" width="100" height="115" rx="14" fill="url(#team-grad1)" opacity="0.65" />

    {/* Person 2 — center (taller) */}
    <ellipse cx="255" cy="140" rx="44" ry="46" fill="url(#team-grad2)" opacity="0.82" />
    <rect x="200" y="180" width="110" height="130" rx="14" fill="url(#team-grad2)" opacity="0.72" />

    {/* Person 3 — right */}
    <ellipse cx="355" cy="158" rx="36" ry="38" fill="url(#team-grad3)" opacity="0.75" />
    <rect x="306" y="191" width="98" height="118" rx="14" fill="url(#team-grad3)" opacity="0.65" />

    {/* Desk reflection strip */}
    <rect x="0" y="300" width="500" height="6" fill="rgba(255,255,255,0.15)" />

    {/* Background decorative circles */}
    <circle cx="60" cy="60" r="90" fill="#1699B5" opacity="0.05" />
    <circle cx="440" cy="80" r="70" fill="#557149" opacity="0.05" />

    {/* Bottom info card */}
    <rect x="0" y="380" width="500" height="180" fill="white" />
    <rect x="24" y="398" width="150" height="26" rx="4" fill="#1699B5" opacity="0.1" />
    <text x="38" y="416" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#1699B5">
      ✦ LagonEX Agency
    </text>

    <text x="24" y="450" fontFamily="sans-serif" fontSize="19" fontWeight="700" fill="#0A1A26">
      Driven By Quality
    </text>
    <text x="24" y="472" fontFamily="sans-serif" fontSize="19" fontWeight="700" fill="#0A1A26">
      &amp; Dedicated to Solutions
    </text>

    {/* Stars */}
    <text x="24" y="504" fontFamily="sans-serif" fontSize="15" fill="#F59E0B">★★★★★</text>
    <text x="112" y="504" fontFamily="sans-serif" fontSize="10" fill="#617B8A">4.9 / 5 Client Rating</text>

    {/* Mini stat pills */}
    <rect x="24" y="516" width="80" height="24" rx="4" fill="#F4F7FA" />
    <text x="36" y="533" fontFamily="sans-serif" fontSize="10" fontWeight="600" fill="#0A1A26">30+ Clients</text>
    <rect x="114" y="516" width="92" height="24" rx="4" fill="#F4F7FA" />
    <text x="126" y="533" fontFamily="sans-serif" fontSize="10" fontWeight="600" fill="#0A1A26">50+ Projects</text>
    <rect x="216" y="516" width="96" height="24" rx="4" fill="#1699B5" opacity="0.12" />
    <text x="228" y="533" fontFamily="sans-serif" fontSize="10" fontWeight="600" fill="#1699B5">3+ Yrs Exp.</text>
  </svg>
);

const features = [
  {
    icon: Target,
    title: "Business-First Approach",
    description: "We focus on solving business problems, not just writing code.",
  },
  {
    icon: TrendingUp,
    title: "Scalable & Future-Ready",
    description: "Our solutions are built to grow with your business.",
  },
  {
    icon: Users,
    title: "Efficiency-Driven",
    description: "Every project saves time, reduces cost, and increases productivity.",
  },
  {
    icon: Handshake,
    title: "Collaborative Partnership",
    description: "We work closely with you from concept to execution and beyond.",
  },
];

const About = () => (
  <section id="about" className="py-28 bg-white overflow-hidden">
    <div className="container mx-auto px-6">
      {/* Section label */}
      <motion.p
        className="text-primary font-semibold tracking-widest uppercase text-xs mb-6"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.p>

      <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
        {/* Left — text + features */}
        <div className="space-y-10">
          <motion.h2
            className="text-4xl md:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            We Create{" "}
            <span className="text-primary">Impactful</span>
            <br />
            Digital Experiences
          </motion.h2>

          <motion.p
            className="text-muted-foreground leading-relaxed text-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            As the demand for digitalization continues to rise, businesses need more than just
            software — they need solutions that solve real problems. LagonEX exists to be that
            helping hand, guiding companies through automation, workflow optimization, and
            technology-driven innovation.
          </motion.p>

          <motion.p
            className="text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            We partner with businesses to design and build custom software solutions tailored to
            their unique needs. Whether you're streamlining internal operations or enhancing
            customer-facing experiences, we deliver solutions that create real impact.
          </motion.p>

          {/* Feature grid */}
          <div className="grid sm:grid-cols-2 gap-5 pt-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="p-5 border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.05 + i * 0.07 }}
              >
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — illustration */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative overflow-hidden border border-border shadow-lg">
            <TeamIllustration />
          </div>

          {/* Accent corner block */}
          {/* <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-primary flex items-center justify-center z-10">
            <span className="text-white font-bold text-xs text-center leading-tight px-2">
              Let's Build Together
            </span>
          </div> */}
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
