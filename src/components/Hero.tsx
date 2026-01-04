import { ArrowRight, Zap, Workflow, Code, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const services = [
    { icon: Zap, label: "Business Automation" },
    { icon: Code, label: "Custom Software" },
    { icon: Workflow, label: "System Integration" },
    { icon: Settings, label: "Digital Optimization" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Digital transformation visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-accent/80 font-medium tracking-wide uppercase text-sm">
              We build intelligent software solutions
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Empowering Businesses Through{" "}
              <span className="text-accent">Intelligent Software</span>
            </h1>

            <p className="text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              LagonEX is a digital agency built to help businesses stand out in an 
              increasingly competitive and digital-first world. We create powerful, 
              scalable, and purpose-driven software solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 group"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Learn More
              </Button>
            </div>

            {/* Service Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {services.map((service) => (
                <div
                  key={service.label}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm"
                >
                  <service.icon size={16} />
                  <span>{service.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "100+", label: "Projects Delivered" },
                { value: "50+", label: "Happy Clients" },
                { value: "10+", label: "Years Experience" },
                { value: "24/7", label: "Support Available" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
                >
                  <p className="text-4xl font-bold text-accent mb-2">{stat.value}</p>
                  <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
