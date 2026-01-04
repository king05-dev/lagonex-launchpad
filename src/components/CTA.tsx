import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaImage from "@/assets/cta-image.jpg";
import BookingModal from "@/components/BookingModal";

const CTA = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="overflow-hidden">
              <img
                src={ctaImage}
                alt="Digital innovation"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-center text-sm px-2">
                Let's Build Together
              </span>
            </div>
          </motion.div>

          <div className="space-y-8 lg:pl-8">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-card-foreground leading-tight"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Let's Build Solutions That{" "}
              <span className="text-secondary">Move Your Business Forward</span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground leading-relaxed text-lg"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Whether you're starting your digital journey or upgrading existing systems, 
              LagonEX is ready to help you transform ideas into impactful software solutions.
            </motion.p>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="text-foreground font-semibold">Let's build smarter.</p>
              <p className="text-foreground font-semibold">Let's build scalable.</p>
              <p className="text-foreground font-semibold">Let's build with LagonEX.</p>
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-border hover:bg-muted"
                onClick={() => setIsBookingModalOpen(true)}
              >
                Schedule a Call
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
