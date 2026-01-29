import { useState, useEffect, useMemo, type SVGProps } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileServiceWheel from "@/components/MobileServiceWheel";


const IconX = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.901 2H22l-6.772 7.744L23.23 22h-6.3l-4.93-6.53L6.156 22H3.057l7.243-8.29L1 2h6.46l4.46 5.904L18.901 2Zm-1.105 18.12h1.72L7.134 3.776H5.29L17.796 20.12Z" />
  </svg>
);

const IconLinkedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123ZM7.119 20.452H3.555V9h3.564v11.452Z" />
  </svg>
);

const IconFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M22 12a10 10 0 1 0-11.562 9.874v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46H15.19c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.887H13.56v6.987A10.002 10.002 0 0 0 22 12Z" />
  </svg>
);

const IconInstagram = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm8.5 2h-8.5A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-2.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
  </svg>
);

const Hero = () => {
  const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

  const services = useMemo(
    () => [
      "Shopify",
      "React",
      "Laravel/PHP",
      "Next.js",
      "WordPress",
      "Supabase",
    ],
    []
  );

  const slides = useMemo(
    () =>
      services.map((service, index) => {
        const accentA = index % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))";
        const accentB = index % 2 === 0 ? "hsl(var(--accent))" : "hsl(var(--primary))";
        return {
          service,
          accentA,
          accentB,
        };
      }),
    [services]
  );

  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [slides.length, isPaused]);

  const handleServiceClick = (index: number) => {
    setFeaturedIndex(index);
  };

  const getCTALink = () => {
    return "#projects";
  };

  const featured = slides[featuredIndex];

  const clients = ["Shopify", "React", "Laravel", "WordPress", "Next.js"];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easing,
      },
    },
  };

  const intelligentVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      backgroundPosition: "0% 50%",
    },
    visible: {
      opacity: 1,
      scale: 1,
      backgroundPosition: "100% 50%",
      transition: {
        duration: 1.2,
        ease: easing,
        backgroundPosition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "linear",
        },
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: easing,
      },
    },
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-background">
      <motion.div 
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-8">
          {/* Left Content */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <p className="text-muted-foreground text-sm tracking-wide flex items-center gap-2">
              <span className="text-accent">✦</span>
              Full-Stack and Shopify Developer
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Jerquin{" "}
              <motion.span 
                className="relative inline-block"
                variants={intelligentVariants}
              >
                <span 
                  className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent font-extrabold not-italic animate-shimmer"
                  style={{
                    backgroundSize: "200% 100%",
                    display: "inline-block",
                  }}
                >
                  Bayudo
                </span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.span>
            </h1>
            <motion.p
              className="text-muted-foreground italic mt-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              “Stay afraid but do it anyway.”
            </motion.p>
          </motion.div>

          {/* Right Description */}
          <motion.div 
            className="lg:pt-12"
            variants={itemVariants}
          >
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              I build custom, high-performing websites and web apps using Shopify, React, and Laravel. I’ve led teams, shipped production systems, and worked across eCommerce and custom software development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold rounded-xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-border hover:border-accent hover:bg-accent/10 font-semibold rounded-xl px-8 py-6 transition-all duration-300"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1OJc-ghmS3aDPDDXJE8iplgXxjFvFmpXP/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Hero Image with Overlay */}
        <motion.div
          className="hidden md:block"
          variants={imageVariants}
          onHoverStart={() => setIsPaused(true)}
          onHoverEnd={() => setIsPaused(false)}
        >
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            <div className="lg:col-span-2 p-8 bg-card border border-border rounded-2xl shadow-xl relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(600px circle at 20% 20%, ${featured.accentA}, transparent 55%), radial-gradient(700px circle at 80% 70%, ${featured.accentB}, transparent 55%)`,
                }}
              />

              <div className="relative flex items-start justify-between gap-6">
                <div className="space-y-3">
                  <p className="text-secondary font-medium tracking-wide uppercase text-sm">
                    Tools I Use
                  </p>
                  <h3 className="text-3xl font-bold text-foreground leading-tight">
                    {featured.service}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xl">
                    {featured.service === "Shopify" &&
                      "Custom themes, Liquid development, and store optimizations."}
                    {featured.service === "React" &&
                      "Component-driven UIs with modern tooling and best practices."}
                    {featured.service === "Laravel/PHP" &&
                      "REST APIs, business logic, and full-stack web applications."}
                    {featured.service === "Next.js" &&
                      "Production-ready apps with routing, SSR/SSG, and performance."}
                    {featured.service === "WordPress" &&
                      "Custom plugins, speed/SEO improvements, and site maintenance."}
                    {featured.service === "Supabase" &&
                      "Auth, Postgres, and realtime features for modern apps."}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-3">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 group"
                    asChild
                  >
                    <a href={getCTALink()}>
                      <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      View Projects
                    </a>
                  </Button>

                  <div className="flex gap-2">
                    {[
                      {
                        label: "LinkedIn",
                        Icon: IconLinkedIn,
                        href: "https://www.linkedin.com/in/jerquin-bayudo-834970203",
                      },
                      {
                        label: "Facebook",
                        Icon: IconFacebook,
                        href: "https://www.facebook.com/profile.php?id=100019476193809",
                      },
                    ].map(({ label, Icon, href }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="w-11 h-11 rounded-full bg-muted/40 border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {services.map((service, index) => (
                  <button
                    key={service}
                    onClick={() => handleServiceClick(index)}
                    className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors border ${
                      index === featuredIndex
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-foreground border-border hover:bg-muted"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-8 bg-background border border-border rounded-2xl shadow-xl">
              <p className="text-secondary font-medium tracking-wide uppercase text-sm">
                More Tools
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3">
                {["Figma", "Tailwind", "Docker", "Git"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between p-4 bg-card border border-border rounded-xl"
                  >
                    <span className="font-semibold text-foreground">{item}</span>
                    <span className="text-xs text-muted-foreground">daily</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Service Wheel - Only visible on mobile */}
        <MobileServiceWheel />

        {/* Client Logos Bar */}
        <motion.div 
          className="mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {clients.map((client, index) => (
              <motion.span
                key={client}
                className="text-muted-foreground/60 font-semibold text-lg tracking-wide hover:text-accent transition-colors duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.6 + index * 0.08,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ scale: 1.1, color: "hsl(var(--accent))" }}
              >
                {client}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
