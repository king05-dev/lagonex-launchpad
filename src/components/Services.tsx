import { Zap, Code2, Workflow, Settings2, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Business Process Automation",
      description:
        "Reduce manual work and eliminate inefficiencies through smart automation. We help businesses automate repetitive tasks, data flows, and operational processes to save time and reduce errors.",
      features: ["Task Automation", "Data Flow Optimization", "Error Reduction"],
    },
    {
      icon: Code2,
      title: "Custom Software Development",
      description:
        "From internal tools to customer platforms, we build reliable and scalable software that aligns with your business goals. Every solution is crafted to support growth and adaptability.",
      features: ["Internal Tools", "Customer Platforms", "Scalable Architecture"],
    },
    {
      icon: Workflow,
      title: "Workflow & System Integration",
      description:
        "We design seamless workflows that connect your tools, systems, and teams — enabling smoother operations and better decision-making across your organization.",
      features: ["System Connectivity", "Team Collaboration", "Process Streamlining"],
    },
    {
      icon: Settings2,
      title: "Digital Enhancement & Optimization",
      description:
        "We enhance existing systems to improve performance, usability, and scalability, ensuring your software evolves alongside your business.",
      features: ["Performance Tuning", "UX Improvements", "Scalability Solutions"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Solutions that create <span className="text-secondary">real impact</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We partner with businesses to design and build custom software solutions 
            tailored to their unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary flex items-center justify-center flex-shrink-0">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center text-secondary font-medium hover:text-primary transition-colors group/link"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
