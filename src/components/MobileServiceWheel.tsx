import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  Code2, 
  Puzzle, 
  Zap, 
  Cloud, 
  BrainCircuit 
} from "lucide-react";

// Service data with icons and descriptions
const services = [
  {
    name: "Shopify",
    icon: Bot,
    description: "Custom themes, Liquid development, and store optimizations",
    gradientColors: { start: "#3b82f6", end: "#06b6d4" } // blue to cyan
  },
  {
    name: "React", 
    icon: Code2,
    description: "Component-driven UIs with modern tooling and best practices",
    gradientColors: { start: "#a855f7", end: "#ec4899" } // purple to pink
  },
  {
    name: "Laravel/PHP",
    icon: Puzzle,
    description: "REST APIs, business logic, and full-stack web applications",
    gradientColors: { start: "#22c55e", end: "#10b981" } // green to emerald
  },
  {
    name: "Next.js",
    icon: Zap,
    description: "Production-ready apps with routing, SSR/SSG, and performance",
    gradientColors: { start: "#f97316", end: "#ef4444" } // orange to red
  },
  {
    name: "WordPress",
    icon: Cloud,
    description: "Custom plugins, speed/SEO improvements, and site maintenance",
    gradientColors: { start: "#6366f1", end: "#3b82f6" } // indigo to blue
  },
  {
    name: "Supabase",
    icon: BrainCircuit,
    description: "Auth, Postgres, and realtime features for modern apps",
    gradientColors: { start: "#8b5cf6", end: "#a855f7" } // violet to purple
  }
];

const MobileServiceWheel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [rotation, setRotation] = useState(0);

  // Auto-rotate and pause on active segments
  useEffect(() => {
    if (isPaused) return;
    
    const rotationInterval = setInterval(() => {
      setRotation(prev => prev + 60); // Rotate 60 degrees per step (6 segments = 360°)
    }, 50); // Smooth rotation

    const pauseInterval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % services.length);
      setIsPaused(true);
      
      // Pause for 3 seconds on each segment
      setTimeout(() => {
        setIsPaused(false);
      }, 3000);
    }, 6000); // Complete cycle every 6 seconds

    return () => {
      clearInterval(rotationInterval);
      clearInterval(pauseInterval);
    };
  }, [isPaused]);

  const currentService = services[activeIndex];

  return (
    <div className="lg:hidden relative w-full max-w-sm mx-auto mt-8 mb-12">
      {/* Half Wheel Container */}
      {/* Service Title and Description Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-background to-muted/20 rounded-2xl p-6 shadow-xl border border-border/50 backdrop-blur-sm"
        >
          {/* Service Title with Icon */}
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${currentService.gradientColors.start}, ${currentService.gradientColors.end})`
              }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <currentService.icon className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-foreground">
              {currentService.name}
            </h3>
          </div>
          
          {/* Service Description */}
          <p className="text-muted-foreground leading-relaxed">
            {currentService.description}
          </p>
          
          {/* CTA Button */}
          <motion.button
            className="mt-4 w-full py-3 px-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const el = document.querySelector("#projects");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects
          </motion.button>
        </motion.div>
      </AnimatePresence>

      {/* Manual Navigation Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 3000);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? "w-8 bg-gradient-to-r from-primary to-accent" 
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileServiceWheel;
