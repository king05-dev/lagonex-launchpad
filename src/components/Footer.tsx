import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-foreground py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">LagonEX</h3>
            <p className="text-muted-foreground leading-relaxed">
              Empowering businesses through intelligent software solutions.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors rounded-lg"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors rounded-lg"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors rounded-lg"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Business Automation</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Custom Development</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">System Integration</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Digital Optimization</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#why" className="hover:text-foreground transition-colors">Why LagonEX</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail size={16} />
                <span>hello@lagonex.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1" />
                <span>123 Innovation Street<br />Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} LagonEX. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
