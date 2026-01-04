import { TrendingUp, Users, Target, Handshake } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Business-First Approach",
      description: "We focus on solving business problems, not just writing code.",
    },
    {
      icon: TrendingUp,
      title: "Scalable & Future-Ready",
      description: "Our solutions are built to grow with your business.",
    },
    {
      icon: Users,
      title: "Efficiency-Driven",
      description: "Every project aims to save time, reduce cost, and increase productivity.",
    },
    {
      icon: Handshake,
      title: "Collaborative Partnership",
      description: "We work closely with you, from concept to execution and beyond.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-secondary font-medium tracking-wide uppercase text-sm">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground leading-tight">
              We're a digital agency passionate about{" "}
              <span className="text-secondary">turning ideas into impact</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              As the demand for digitalization continues to rise, businesses need more 
              than just software — they need solutions that solve real problems. LagonEX 
              exists to be that helping hand, guiding companies through automation, 
              workflow optimization, and technology-driven innovation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We partner with businesses to design and build custom software solutions 
              tailored to their unique needs. Whether you're streamlining internal 
              operations or enhancing customer-facing experiences, we deliver solutions 
              that create real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-background border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
