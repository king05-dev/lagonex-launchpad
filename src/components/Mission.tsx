import { Target, Eye } from "lucide-react";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section id="why" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="p-10 bg-card border border-border rounded-lg"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6 rounded-lg">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To empower businesses through innovative software solutions that simplify 
              operations, enhance workflows, and create a competitive edge in a digital world.
            </p>
          </motion.div>

          <motion.div
            className="p-10 bg-card border border-border rounded-lg"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6 rounded-lg">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To become a trusted technology partner for businesses seeking sustainable 
              growth through smart digital transformation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
