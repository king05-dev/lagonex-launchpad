import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const services = [
    "Business Automation",
    "Custom Software",
    "System Integration",
    "Digital Optimization",
    "SaaS Solutions",
    "AI Integration",
  ];

  const clients = [
    "TechCorp",
    "InnovateCo",
    "DataFlow",
    "CloudSync",
    "SmartBiz",
  ];

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-8">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-sm tracking-wide flex items-center gap-2">
              <span className="text-accent">✦</span>
              We build intelligent software solutions
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Empowering Businesses Through{" "}
              <span className="text-accent italic">Intelligent</span>
              <br />
              Software Solutions
            </h1>
          </div>

          {/* Right Description */}
          <div className="lg:pt-12">
            <p className="text-muted-foreground leading-relaxed">
              From <span className="text-foreground font-medium">automation</span> to{" "}
              <span className="text-foreground font-medium">custom development</span> and{" "}
              <span className="text-foreground font-medium">optimization</span> — we help businesses grow in the{" "}
              <span className="text-foreground font-medium italic">digital era</span>.
            </p>
          </div>
        </div>

        {/* Hero Image with Overlay */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={heroImage}
            alt="Digital transformation visualization"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />

          {/* Left Service Tags */}
          <div className="absolute left-6 top-6 space-y-3">
            <p className="text-primary-foreground/70 text-xs uppercase tracking-wide">
              Powered by
            </p>
            <p className="text-primary-foreground font-medium text-sm">
              LagonEX Solutions
            </p>
            <div className="space-y-2 pt-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-2 text-primary-foreground/90 text-sm"
                >
                  <span className="text-accent">✦</span>
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Center CTA Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Button 
              size="lg" 
              className="bg-background/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-background/20 rounded-full px-6 group"
            >
              <ArrowRight className="mr-2 h-4 w-4" />
              View Projects
            </Button>
          </div>

          {/* Right Social Links */}
          <div className="absolute right-6 bottom-6 flex items-center gap-3">
            <span className="text-primary-foreground/70 text-sm">Follow Us</span>
            <div className="flex gap-2">
              {["X", "in", "fb", "ig"].map((social) => (
                <div
                  key={social}
                  className="w-8 h-8 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground text-xs hover:bg-primary-foreground/20 transition-colors cursor-pointer"
                >
                  {social}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Logos Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {clients.map((client) => (
              <span
                key={client}
                className="text-muted-foreground/60 font-medium text-lg tracking-wide hover:text-muted-foreground transition-colors"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
