import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Business Automation",
    "Custom Development",
    "System Integration",
    "Digital Optimization",
    "SaaS Solutions",
    "AI Integration",
  ];

  const company = [
    { label: "About Us", href: "#about" },
    { label: "Our Work", href: "#work" },
    { label: "Our Process", href: "#process" },
    { label: "Why LagonEX", href: "#why" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="container mx-auto px-6">
        {/* Top grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-5 lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 bg-primary flex items-center justify-center text-white text-xs font-bold">
                LX
              </span>
              <span className="text-xl font-bold text-background tracking-tight">LagonEX</span>
            </div>
            <p className="text-background/55 leading-relaxed text-sm">
              Empowering businesses through intelligent software solutions that simplify
              operations and drive growth.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Github, href: "#" },
                { Icon: Instagram, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <Icon size={15} className="text-background/70 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h4 className="font-bold text-sm uppercase tracking-widest text-background/50">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-background/55 hover:text-primary text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-5">
            <h4 className="font-bold text-sm uppercase tracking-widest text-background/50">
              Company
            </h4>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="text-background/55 hover:text-primary text-sm transition-colors"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="font-bold text-sm uppercase tracking-widest text-background/50">
              Contact
            </h4>
            <ul className="space-y-4">
              {[
                { Icon: Mail, value: "hello@lagonex.com" },
                { Icon: Phone, value: "+1 (555) 123-4567" },
                { Icon: MapPin, value: "Remote-first · Worldwide" },
              ].map(({ Icon, value }) => (
                <li key={value} className="flex items-start gap-3 text-background/55 text-sm">
                  <Icon size={15} className="mt-0.5 text-primary shrink-0" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-4 text-xs font-bold uppercase tracking-widest text-primary hover:text-background transition-colors border-b border-primary/40 pb-0.5"
            >
              Start a Project →
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/35 text-xs">
            © {currentYear} LagonEX. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-background/35">
            <a href="#" className="hover:text-background/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background/60 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-background/60 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
