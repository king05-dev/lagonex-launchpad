import { useState, useEffect, useMemo, type SVGProps } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileServiceWheel from "@/components/MobileServiceWheel";
import heroImage from "@/assets/hero-image.jpg";
import ctaImage from "@/assets/cta-image.jpg";

// Service hero images array - can be expanded with more images
const serviceImages = [
  "/hero-images/business_automation_hero_1.webp", // Business Automation
  '/hero-images/custom_software.webp', // Custom Software (fallback to default)
  '/hero-images/system-integration.jpg', // System Integration
  '/hero-images/digital_optimization.webp',// Digital Optimization (fallback to default)
  ctaImage, // SaaS Solutions
  heroImage, // AI Integration (fallback to default)
];

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
        const isCtaImage = index % 2 === 1;
        const overlayFrom = isCtaImage
          ? "rgba(34,114,145,0.70)"
          : "rgba(34,173,208,0.70)";
        const overlayVia = isCtaImage
          ? "rgba(34,114,145,0.30)"
          : "rgba(34,173,208,0.30)";
        const pattern = `radial-gradient(700px circle at ${15 + index * 10}% ${20 + index * 7}%, rgba(121,146,107,0.28), transparent 60%), radial-gradient(600px circle at ${85 - index * 7}% ${75 - index * 6}%, rgba(34,173,208,0.25), transparent 55%), linear-gradient(120deg, ${overlayFrom} 0%, ${overlayVia} 45%, rgba(0,0,0,0) 100%)`;
        return {
          service,
          image: serviceImages[index] || (isCtaImage ? ctaImage : heroImage),
          overlayFrom,
          overlayVia,
          pattern,
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
                  href="https://drive.google.com/file/d/1Pd0jkWWhBZIVWdrd4fvexBuH8UVFcDc9/view?usp=drive_link"
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
          className="relative rounded-2xl overflow-hidden border border-border shadow-2xl hidden md:block"
          variants={imageVariants}
          onHoverStart={() => setIsPaused(true)}
          onHoverEnd={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={`${featuredIndex}-${featured.image}`}
              src={featured.image}
              alt="Digital transformation visualization"
              className="w-full h-[420px] md:h-[480px] object-cover"
              initial={{ opacity: 0.25, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.15, scale: 0.995 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </AnimatePresence>
          
          {/* Dark Overlay */}
          <motion.div
            className="absolute inset-0"
            animate={{ backgroundImage: featured.pattern }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />

          <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute -bottom-28 -right-28 h-[520px] w-[520px] rounded-full bg-accent/20 blur-3xl" />

          {/* Left Service Tags */}
          <motion.div 
            className="absolute left-6 top-6 w-[280px] md:w-[320px] rounded-2xl bg-black/30 backdrop-blur-md border border-white/20 p-5 shadow-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center justify-between">
              <p className="text-white/80 text-xs uppercase tracking-widest">
                Stack
              </p>
              <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/90">
                Jerquin
              </span>
            </div>
            <p className="text-white font-bold text-xl md:text-2xl tracking-wide">
              Tools I Use
            </p>
            <p className="text-white/80 text-xs mt-1">
              Featured: <span className="text-white font-semibold">{featured.service}</span>
            </p>
            <div className="mt-3 grid grid-cols-1 gap-2">
              <motion.div
                className="grid grid-cols-1 gap-2"
                onHoverStart={() => setIsPaused(true)}
                onHoverEnd={() => setIsPaused(false)}
              >
                {services.map((service, index) => (
                  <motion.button
                    key={service}
                    onClick={() => handleServiceClick(index)}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2 text-white text-sm md:text-base font-semibold transition-colors cursor-pointer text-left ${
                      index === featuredIndex
                        ? "bg-white/20 ring-1 ring-white/40"
                        : "bg-white/10 hover:bg-white/15"
                    }`}
                    whileHover={{ scale: 1.02, x: 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-accent">✦</span>
                    <span>{service}</span>
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Center CTA Button */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onHoverStart={() => setIsPaused(true)}
            onHoverEnd={() => setIsPaused(false)}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute -inset-2 rounded-full bg-primary/25 blur-xl"
                animate={{ opacity: [0.35, 0.7, 0.35] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <Button 
                size="lg" 
                className="relative bg-black/20 backdrop-blur-sm border border-white/30 text-white hover:bg-black/30 rounded-full px-8 py-6 group transition-all duration-300"
                asChild
              >
                <a href={getCTALink()}>
                  <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  View {featured.service} Projects
                </a>
              </Button>
            </motion.div>
           </motion.div>

          {/* Right Social Links */}
          <motion.div 
            className="absolute right-6 bottom-6 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20 px-4 py-3 shadow-xl flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className="text-white/90 text-xs uppercase tracking-widest">Follow</span>
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
                { label: "X", Icon: IconX, href: "#" },
                { label: "Instagram", Icon: IconInstagram, href: "#" },
              ].map(({ label, Icon, href }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-11 h-11 rounded-full bg-black/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-black/30 hover:scale-110 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.2 + index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
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
