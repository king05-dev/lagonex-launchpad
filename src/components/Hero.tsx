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
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <p className="text-muted-foreground text-sm tracking-wide flex items-center gap-2">
              <span className="text-accent">✦</span>
              We build intelligent software solutions
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Empowering Businesses Through{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent font-extrabold not-italic">
                  Intelligent
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-primary"></span>
              </span>
              <br />
              Software Solutions
            </h1>
          </div>

          {/* Right Description */}
          <div className="lg:pt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-muted-foreground leading-relaxed text-lg">
              From <span className="text-foreground font-medium">automation</span> to{" "}
              <span className="text-foreground font-medium">custom development</span> and{" "}
              <span className="text-foreground font-medium">optimization</span> — we help businesses grow in the{" "}
              <span className="text-foreground font-medium italic">digital era</span>.
            </p>
          </div>
        </div>

        {/* Hero Image with Overlay */}
        <div className="relative rounded-2xl overflow-hidden animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <img
            src={heroImage}
            alt="Digital transformation visualization"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />

          {/* Left Service Tags */}
          <div className="absolute left-6 top-6 space-y-3 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-primary-foreground/70 text-xs uppercase tracking-widest">
              Powered by
            </p>
            <p className="text-primary-foreground font-bold text-lg md:text-xl tracking-wide">
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-background/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-background/20 hover:scale-105 rounded-full px-8 py-6 group transition-all duration-300"
            >
              <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              View Projects
            </Button>
          </div>

          {/* Right Social Links */}
          <div className="absolute right-6 bottom-6 flex items-center gap-3 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <span className="text-primary-foreground/70 text-sm">Follow Us</span>
            <div className="flex gap-2">
              {["X", "in", "fb", "ig"].map((social, index) => (
                <div
                  key={social}
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground text-xs font-medium hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  {social}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Logos Bar */}
        <div className="mt-12 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {clients.map((client, index) => (
              <span
                key={client}
                className="text-muted-foreground/60 font-semibold text-lg tracking-wide hover:text-accent transition-colors duration-300 cursor-pointer"
                style={{ animationDelay: `${0.9 + index * 0.1}s` }}
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
