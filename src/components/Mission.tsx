import { Target, Eye } from "lucide-react";

const Mission = () => {
  return (
    <section id="why" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-10 bg-primary-foreground/5 border border-primary-foreground/10">
            <div className="w-16 h-16 bg-accent flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed text-lg">
              To empower businesses through innovative software solutions that simplify 
              operations, enhance workflows, and create a competitive edge in a digital world.
            </p>
          </div>

          <div className="p-10 bg-primary-foreground/5 border border-primary-foreground/10">
            <div className="w-16 h-16 bg-accent flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Our Vision
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed text-lg">
              To become a trusted technology partner for businesses seeking sustainable 
              growth through smart digital transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
