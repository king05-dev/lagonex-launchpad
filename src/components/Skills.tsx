import { motion } from "framer-motion";

const Skills = () => {
  const groups = [
    {
      title: "Design",
      skills: [
        "User Experience",
        "Design System",
        "Web Design",
        "Mobile Design",
        "Wireframing",
        "Prototyping",
        "Testing",
      ],
    },
    {
      title: "Development",
      skills: [
        "React JS",
        "Next.js",
        "Laravel / PHP",
        "Shopify",
        "Liquid",
        "HTML",
        "CSS",
        "jQuery",
        "JavaScript",
      ],
    },
    {
      title: "Tools",
      skills: [
        "Figma",
        "Chakra UI",
        "Emotion",
        "Framer",
        "Tailwind",
        "Material UI",
        "Git",
        "Databases",
        "Docker",
        "WordPress (Elementor / Beaver Builder / WPBakery)",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            className="text-secondary font-medium tracking-wide uppercase text-sm mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Skills
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
          >
            A toolkit built for <span className="text-secondary">shipping</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              className="p-8 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h3 className="text-xl font-semibold text-card-foreground mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
