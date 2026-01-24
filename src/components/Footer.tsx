import { Mail, Phone, MapPin, Linkedin, Facebook, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-foreground py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Jerquin Bayudo</h3>
            <p className="text-muted-foreground leading-relaxed">
              Full-Stack and Shopify Developer.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/jerquin-bayudo-834970203" 
                className="w-10 h-10 bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors rounded-lg"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100019476193809" 
                className="w-10 h-10 bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors rounded-lg"
              >
                <Facebook size={18} />
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
            <h4 className="font-semibold text-lg">Sections</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#info" className="hover:text-foreground transition-colors">Info</a></li>
              <li><a href="#experience" className="hover:text-foreground transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-foreground transition-colors">Projects</a></li>
              <li><a href="#personal-projects" className="hover:text-foreground transition-colors">Personal Projects</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="https://examrefresher.com" className="hover:text-foreground transition-colors">ExamRefresher.com</a></li>
              <li><a href="https://ayts.jerquinbayudo.workers.dev/" className="hover:text-foreground transition-colors">AYTS Marketplace</a></li>
              <li><a href="https://sailonyx.com" className="hover:text-foreground transition-colors">SailOnyx.com</a></li>
              <li><a href="https://whiffedaromas.com" className="hover:text-foreground transition-colors">WhiffedAromas.com</a></li>
              <li><a href="https://cleanhealthlab.com" className="hover:text-foreground transition-colors">CleanHealthLab.com</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail size={16} />
                <span>jerquinbayudo@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} />
                <span>(+63)961-989-6211</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1" />
                <span>Cagayan de Oro, Philippines</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Jerquin Bayudo. All rights reserved.
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
