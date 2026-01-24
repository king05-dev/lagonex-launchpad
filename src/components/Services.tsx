import { Briefcase, Building2, Headset, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Freelance Web Developer",
      description: "Upwork, OnlineJobs — Oct 2025 - present (Cagayan de Oro)",
      features: ["Shopify", "React", "Laravel", "Custom websites"],
    },
    {
      icon: Building2,
      title: "Tech Lead / Software Engineer",
      description: "Fligno Software Inc. — Oct 2021 - Oct 2025 (Cagayan de Oro)",
      features: ["React", "Laravel", "MySQL", "MongoDB", "Shopify/WordPress"],
    },
    {
      icon: Headset,
      title: "Technical Support",
      description: "T-Mobile — Nov 2019 - June 2021 (Cagayan de Oro)",
      features: ["Technical support", "Customer satisfaction", "Connectivity troubleshooting"],
    },
    {
      icon: PhoneCall,
      title: "Billing/Sales Representative",
      description: "AT&T — June 2017 - August 2019 (Davao, PH)",
      features: ["Billing support", "Sales support", "Order processing"],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            className="text-secondary font-medium tracking-wide uppercase text-sm mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Experience
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Roles that shipped <span className="text-secondary">real products</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            A mix of freelance, tech leadership, software engineering, and customer-facing roles.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group p-8 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
