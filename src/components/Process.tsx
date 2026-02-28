import { motion } from "framer-motion";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover & Strategy",
    description:
      "We start by understanding your business — its goals, challenges, and workflows. Through discovery sessions and analysis we define the right strategy before writing a single line of code.",
    highlights: ["Business Analysis", "Goal Mapping", "Technical Audit"],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Plan & Design",
    description:
      "We craft a clear solution blueprint — architecture, data flow, UI wireframes, and a project roadmap. You know exactly what we'll build, and why, before development starts.",
    highlights: ["Solution Architecture", "Wireframing", "Roadmap"],
  },
  {
    number: "03",
    icon: Code2,
    title: "Build & Develop",
    description:
      "Our engineers build your solution in agile sprints with continuous feedback loops. Clean, maintainable code with regular demos so you're always in the loop.",
    highlights: ["Agile Sprints", "Code Reviews", "QA Testing"],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We deploy your solution, train your team, and stay on board for ongoing support. We don't disappear after go-live — we're your long-term technology partner.",
    highlights: ["Deployment", "Team Training", "Ongoing Support"],
  },
];

const Process = () => (
  <section id="process" className="py-28 bg-background overflow-hidden">
    <div className="container mx-auto px-6">
      {/* Header */}
      <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
        <div>
          <motion.p
            className="text-primary font-semibold tracking-widest uppercase text-xs mb-5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            How We Work
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Our Work <br />
            <span className="text-primary">Process</span>
          </motion.h2>
        </div>
        <motion.p
          className="text-muted-foreground leading-relaxed text-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          We follow a proven, structured process that keeps projects on track, on budget, and
          aligned with your business goals at every stage.
        </motion.p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-border">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className="bg-white p-8 group hover:bg-primary hover:text-white transition-all duration-400"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Number */}
            <span className="block text-6xl font-bold text-muted-foreground/15 group-hover:text-white/20 transition-colors leading-none mb-6 select-none">
              {step.number}
            </span>

            {/* Icon */}
            <div className="w-12 h-12 bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mb-5 transition-colors">
              <step.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-foreground group-hover:text-white transition-colors mb-3">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground group-hover:text-white/75 text-sm leading-relaxed transition-colors mb-5">
              {step.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-1.5">
              {step.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-2 text-xs font-medium text-foreground/60 group-hover:text-white/70 transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-primary group-hover:bg-white/60 transition-colors shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
