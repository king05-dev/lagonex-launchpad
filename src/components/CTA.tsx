import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaImage from "@/assets/cta-image.jpg";

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
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
          </div>

          <div className="space-y-8 lg:pl-8">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground leading-tight">
              Let's Build Solutions That{" "}
              <span className="text-secondary">Move Your Business Forward</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Whether you're starting your digital journey or upgrading existing systems, 
              LagonEX is ready to help you transform ideas into impactful software solutions.
            </p>
            <div className="space-y-4">
              <p className="text-foreground font-semibold">Let's build smarter.</p>
              <p className="text-foreground font-semibold">Let's build scalable.</p>
              <p className="text-foreground font-semibold">Let's build with LagonEX.</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
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
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
