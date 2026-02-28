import { Target, Eye, Award, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Target,
    label: "Our Mission",
    heading: "Empower Through Innovation",
    body: "To empower businesses through innovative software solutions that simplify operations, enhance workflows, and create a competitive edge in a digital world.",
    accent: true,
  },
  {
    icon: Eye,
    label: "Our Vision",
    heading: "Trusted Technology Partner",
    body: "To become a trusted technology partner for businesses seeking sustainable growth through smart digital transformation.",
    accent: false,
  },
  {
    icon: Award,
    label: "Our Values",
    heading: "Quality Over Everything",
    body: "We hold ourselves to the highest standards of quality, transparency, and reliability. Every solution we ship is one we're proud to put our name on.",
    accent: false,
  },
  {
    icon: Handshake,
    label: "Our Commitment",
    heading: "Long-Term Partnership",
    body: "We build relationships, not just software. We stay invested in your success long after launch, adapting and evolving your solutions as your business grows.",
    accent: false,
  },
];

const Mission = () => (
  <section id="why" className="py-28 bg-white">
    <div className="container mx-auto px-6">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <motion.p
          className="text-primary font-semibold tracking-widest uppercase text-xs mb-5"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          Why LagonEX
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Driven By{" "}
          <span className="text-primary">Quality</span>
          <br />
          &amp; Dedicated to Solutions
        </motion.h2>
      </div>

      {/* Cards grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-border">
        {cards.map((card, index) => (
          <motion.div
            key={card.label}
            className={`p-9 flex flex-col gap-5 ${
              card.accent ? "bg-primary text-white" : "bg-background hover:bg-muted/50"
            } transition-colors duration-300`}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center ${
                card.accent ? "bg-white/20" : "bg-primary/10"
              }`}
            >
              <card.icon
                className={`h-6 w-6 ${card.accent ? "text-white" : "text-primary"}`}
              />
            </div>

            <p
              className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                card.accent ? "text-white/70" : "text-primary"
              }`}
            >
              {card.label}
            </p>

            <h3
              className={`text-xl font-bold leading-snug ${
                card.accent ? "text-white" : "text-foreground"
              }`}
            >
              {card.heading}
            </h3>

            <p
              className={`text-sm leading-relaxed flex-1 ${
                card.accent ? "text-white/75" : "text-muted-foreground"
              }`}
            >
              {card.body}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Mission;
