import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "@/components/BookingModal";

/* ── SVG placeholder: digital transformation visual ─────────────────── */
const CTAIllustration = () => (
  <svg
    viewBox="0 0 500 600"
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="cta-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1699B5" />
        <stop offset="100%" stopColor="#0D3D52" />
      </linearGradient>
      <linearGradient id="cta-card" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1A5E78" />
        <stop offset="100%" stopColor="#0D3D52" />
      </linearGradient>
      <pattern id="cta-dots" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.12)" />
      </pattern>
    </defs>

    {/* Background */}
    <rect width="500" height="600" fill="url(#cta-bg)" />
    <rect width="500" height="600" fill="url(#cta-dots)" />

    {/* Decorative large circle */}
    <circle cx="380" cy="120" r="180" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
    <circle cx="380" cy="120" r="130" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
    <circle cx="380" cy="120" r="80" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

    {/* Central icon area */}
    <circle cx="380" cy="120" r="36" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
    <text x="368" y="128" fontFamily="sans-serif" fontSize="22" fill="white">⚡</text>

    {/* Main content card */}
    <rect x="24" y="240" width="452" height="200" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

    <text x="44" y="278" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.6)" letterSpacing="2">
      CONTACT US
    </text>
    <text x="44" y="314" fontFamily="sans-serif" fontSize="22" fontWeight="700" fill="white">
      Let's Build Something
    </text>
    <text x="44" y="338" fontFamily="sans-serif" fontSize="22" fontWeight="700" fill="white">
      Amazing Together
    </text>
    <text x="44" y="370" fontFamily="sans-serif" fontSize="11" fill="rgba(255,255,255,0.6)">
      hello@lagonex.com
    </text>
    <text x="44" y="390" fontFamily="sans-serif" fontSize="11" fill="rgba(255,255,255,0.6)">
      +1 (555) 123-4567
    </text>

    {/* CTA button visual */}
    <rect x="44" y="408" width="130" height="24" rx="4" fill="rgba(255,255,255,0.9)" />
    <text x="62" y="424" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#0A1A26">
      Get Started →
    </text>

    {/* Floating stat card */}
    <rect x="24" y="460" width="200" height="80" rx="6" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    <text x="44" y="496" fontFamily="sans-serif" fontSize="28" fontWeight="700" fill="white">50+</text>
    <text x="44" y="516" fontFamily="sans-serif" fontSize="10" fill="rgba(255,255,255,0.6)">Projects Delivered</text>
    <text x="44" y="530" fontFamily="sans-serif" fontSize="9" fill="rgba(255,255,255,0.4)">Across 10+ industries</text>

    <rect x="240" y="460" width="236" height="80" rx="6" fill="white" opacity="0.12" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    <text x="260" y="496" fontFamily="sans-serif" fontSize="28" fontWeight="700" fill="white">98%</text>
    <text x="260" y="516" fontFamily="sans-serif" fontSize="10" fill="rgba(255,255,255,0.6)">Client Satisfaction</text>
    <text x="260" y="530" fontFamily="sans-serif" fontSize="9" fill="rgba(255,255,255,0.4)">Average rating: 4.9 / 5</text>

    {/* Bottom decoration */}
    <circle cx="100" cy="560" r="24" fill="rgba(255,255,255,0.06)" />
    <circle cx="400" cy="575" r="18" fill="rgba(255,255,255,0.06)" />
  </svg>
);

const CTA = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const contactItems = [
    { icon: Mail, label: "Email", value: "hello@lagonex.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Location", value: "Remote-first · Worldwide" },
  ];

  return (
    <>
      <section id="contact" className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            {/* Left — Illustration */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="overflow-hidden border border-border shadow-xl">
                <CTAIllustration />
              </div>

              {/* Accent corner */}
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-primary flex items-center justify-center z-10">
                <span className="text-white font-bold text-xs text-center leading-tight px-2">
                  Let's Build Together
                </span>
              </div>
            </motion.div>

            {/* Right — content */}
            <div className="space-y-8 lg:pl-6">
              <motion.p
                className="text-primary font-semibold tracking-widest uppercase text-xs"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                Let's Work Together
              </motion.p>

              <motion.h2
                className="text-4xl md:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.05 }}
              >
                Let's Build Solutions <br />
                That{" "}
                <span className="text-primary">Move Your</span>
                <br />
                Business Forward
              </motion.h2>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Whether you're starting your digital journey or upgrading existing systems,
                LagonEX is ready to help you transform ideas into impactful software solutions.
              </motion.p>

              {/* Taglines */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                {["Let's build smarter.", "Let's build scalable.", "Let's build with LagonEX."].map(
                  (line) => (
                    <p key={line} className="text-foreground font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      {line}
                    </p>
                  )
                )}
              </motion.div>

              {/* Contact info */}
              <motion.div
                className="space-y-3 pt-2"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.18 }}
              >
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-muted-foreground text-sm">
                    <div className="w-8 h-8 bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    {item.value}
                  </div>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 pt-2"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.22 }}
              >
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 group px-8"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  Schedule a Call
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:border-primary/50 hover:bg-primary/5 px-8"
                  asChild
                >
                  <a href="mailto:hello@lagonex.com">Send an Email</a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};

export default CTA;
