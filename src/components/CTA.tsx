import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
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
              Want to work together?{" "}
              <span className="text-secondary">Let's talk.</span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground leading-relaxed text-lg"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              I’m available for Shopify builds, custom web apps, and long-term maintenance.
            </motion.p>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4" />
                  <span>jerquinbayudo@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4" />
                  <span>(+63)961-989-6211</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>Cagayan de Oro, Philippines</span>
                </div>
              </div>
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
                asChild
              >
                <a href="mailto:jerquinbayudo@gmail.com">
                  Email Me
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
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
