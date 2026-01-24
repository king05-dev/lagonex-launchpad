import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const features = [
    {
      icon: Mail,
      title: "Email",
      description: "jerquinbayudo@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "(+63)961-989-6211",
    },
    {
      icon: MapPin,
      title: "Address",
      description: "Cagayan de Oro, Philippines",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "jerquin-bayudo-834970203",
    },
  ];

  return (
    <section id="info" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <motion.p
              className="text-secondary font-medium tracking-wide uppercase text-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Info
            </motion.p>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-card-foreground leading-tight"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Full-Stack and Shopify Developer based in{" "}
              <span className="text-secondary">Cagayan de Oro</span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Freelance web developer specializing in Shopify, React, and Laravel, building custom, high-performing websites while working independently on a flexible schedule.
            </motion.p>
            <motion.p
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              “Stay afraid but do it anyway.” — Carrie Fisher
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 bg-background border border-border hover:border-primary/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: 0.05 + index * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
            <motion.a
              href="https://www.facebook.com/profile.php?id=100019476193809"
              className="p-6 bg-background border border-border hover:border-primary/50 transition-colors duration-300 sm:col-span-2 flex items-start gap-4"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Facebook className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Facebook</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">id=100019476193809</p>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
