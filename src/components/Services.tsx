import { Zap, Code2, Workflow, Settings2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    icon: Zap,
    title: "Business Process Automation",
    description:
      "Reduce manual work and eliminate inefficiencies through smart automation. We help businesses automate repetitive tasks, data flows, and operational processes to save time and reduce errors.",
    features: ["Task Automation", "Data Flow Optimization", "Error Reduction"],
  },
  {
    number: "02",
    icon: Code2,
    title: "Custom Software Development",
    description:
      "From internal tools to customer platforms, we build reliable and scalable software that aligns with your business goals. Every solution is crafted to support growth and adaptability.",
    features: ["Internal Tools", "Customer Platforms", "Scalable Architecture"],
  },
  {
    number: "03",
    icon: Workflow,
    title: "Workflow & System Integration",
    description:
      "We design seamless workflows that connect your tools, systems, and teams — enabling smoother operations and better decision-making across your organization.",
    features: ["System Connectivity", "Team Collaboration", "Process Streamlining"],
  },
  {
    number: "04",
    icon: Settings2,
    title: "Digital Enhancement & Optimization",
    description:
      "We enhance existing systems to improve performance, usability, and scalability, ensuring your software evolves alongside your business.",
    features: ["Performance Tuning", "UX Improvements", "Scalability Solutions"],
  },
];

const Services = () => (
  <section id="services" className="py-28 bg-background">
    <div className="container mx-auto px-6">
      {/* Header */}
      <div className="max-w-3xl mb-20">
        <motion.p
          className="text-primary font-semibold tracking-widest uppercase text-xs mb-5"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          What We Do
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          What We Can Do <br />
          For Our{" "}
          <span className="text-primary">Clients</span>
        </motion.h2>
      </div>

      {/* Services grid */}
      <div className="grid md:grid-cols-2 gap-px bg-border">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-white p-10 group hover:bg-primary/3 transition-all duration-300"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-start gap-6">
              {/* Number */}
              <span className="text-5xl font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors leading-none select-none pt-1 shrink-0">
                {service.number}
              </span>

              <div className="space-y-4 flex-1">
                {/* Icon + title */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0">
                    <service.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-muted text-foreground/70 text-xs font-medium border border-border group-hover:border-primary/20 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Learn more */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary text-sm font-semibold hover:gap-3 gap-2 transition-all group/link"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
