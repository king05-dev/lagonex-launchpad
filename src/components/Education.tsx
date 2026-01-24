import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      icon: GraduationCap,
      title: "University of Science and Technology in Southern Philippines",
      subtitle: "Bachelor of Science in Environmental Engineering",
      meta: "2014",
    },
    {
      icon: Award,
      title: "Regional Training Center X (Tagoloan)",
      subtitle: "Computer Hardware/ Software System Tesda NC 2 certificate",
      meta: "2015",
    },
  ];

  return (
    <section id="education" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            className="text-secondary font-medium tracking-wide uppercase text-sm mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Education
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-card-foreground mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Learning that supports <span className="text-secondary">real-world</span> delivery
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              className="p-8 bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{item.meta}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
