import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Mission = () => {
  const projects = [
    {
      title: "WhiffedAromas (Shopify)",
      description:
        "Premium fragrances and aromatic essentials ecommerce store.",
      stack: "Liquid, Javascript, CSS, Shopify Apps",
      href: "https://whiffedaromas.com",
    },
    {
      title: "CleanHealthLab (Shopify)",
      description:
        "Science-backed wellness supplements ecommerce store.",
      stack: "Liquid, Javascript, CSS, Shopify",
      href: "https://cleanhealthlab.com",
    },
    {
      title: "Marine Hub - Onyx",
      description:
        "Boat service management platform for scheduling, maintenance tracking, and job assignments.",
      stack: "Vite, HonoJS, Supabase, Cloudflare, Postgres",
      href: "https://marinehub-v.throbbing-fog-9a31.workers.dev/",
    },
    {
      title: "SailOnyx Website",
      description:
        "Redesigned and optimized WordPress site for speed, SEO, and user experience.",
      stack: "WordPress, Custom Plugin",
      href: "https://sailonyx.com",
    },
    {
      title: "Greenlife Patient Prescription",
      description:
        "Platform for managing prescriptions, medical records, and doctor consultations.",
      stack: "Next.js, Laravel, AWS",
      href: "https://patient.greenlifeclinics.com.au/",
    },
    {
      title: "HRIS Management System",
      description:
        "HRIS with payroll/attendance reporting, tracking, and notifications.",
      stack: "Laravel, Redis, MySQL, Socket.io",
      href: "https://hris.fligno.com",
    },
  ];

  const personalProjects = [
    {
      title: "ExamRefresher.com",
      description:
        "Free eLearning web app helping students prepare for professional exams.",
      stack: "React, Laravel, TailwindCSS",
      href: "https://examrefresher.com",
      meta: "Personal Project",
    },
    {
      title: "AYTS Marketplace",
      description:
        "Marketplace app built with Next.js and Supabase.",
      stack: "Next.js, Supabase, Postgres",
      href: "https://ayts.jerquinbayudo.workers.dev/",
      meta: "Personal Project — Jan 2026 - Present",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            className="text-secondary font-medium tracking-wide uppercase text-sm mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Projects
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Recent work across <span className="text-secondary">eCommerce</span> and <span className="text-secondary">web apps</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            A selection of recent work.
          </motion.p>
        </div>

        <div className="flex items-center justify-between gap-4 mb-6">
          <h3 className="text-xl font-semibold text-foreground">Recent Projects</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              className="group p-8 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mt-2">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    <p className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                      Tech Stack
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.stack.split(",").map((t) => {
                        const tag = t.trim();
                        return (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
            </motion.a>
          ))}
        </div>

        <div id="personal-projects" className="mt-16">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h3 className="text-xl font-semibold text-foreground">Personal Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.href}
                className="group p-8 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-secondary font-medium tracking-wide uppercase text-xs">
                      {project.meta}
                    </p>
                    <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors mt-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mt-2">
                      {project.description}
                    </p>
                    <div className="mt-4">
                      <p className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                        Tech Stack
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.stack.split(",").map((t) => {
                          const tag = t.trim();
                          return (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
