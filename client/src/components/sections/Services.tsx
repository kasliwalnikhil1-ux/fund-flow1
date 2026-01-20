import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Search, 
  Zap, 
  Share2, 
  Calendar,
} from "lucide-react";

const processSteps = [
  {
    id: "01",
    title: "Investor Data & List Building",
    icon: Search,
    description: "We use proprietary signals to find investors actively deploying capital in your specific sector and stage.",
    color: "text-primary",
  },
  {
    id: "02",
    title: "Personalized DMs",
    icon: Zap,
    description: "Our neural engine analyzes every investor profile to craft high-conversion outreach that feels human.",
    color: "text-primary",
  },
  {
    id: "03",
    title: "Multi-Channel Outreach",
    icon: Share2,
    description: "We execute coordinated campaigns across Cold Email, LinkedIn, and X for maximum visibility.",
    color: "text-primary",
  },
  {
    id: "04",
    title: "Meetings Booked",
    icon: Calendar,
    description: "You simply show up to warm conversations. We handle the scheduling and follow-ups end-to-end.",
    color: "text-primary",
  }
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % processSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="py-24 bg-[#020202] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight"
          >
            How it <span className="text-primary">Works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Our surgical process is designed to get you in front of the right check-writers with zero friction.
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-[48px] left-0 w-full h-[2px] bg-white/5 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 relative z-10">
            {processSteps.map((step, index) => {
              const isActive = activeIndex === index;
              return (
                <div 
                  key={step.id} 
                  className="relative flex flex-col items-center text-center lg:items-start lg:text-left group cursor-pointer" 
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {/* Step Circle & Icon */}
                  <div className="relative mb-10">
                    {/* Active Icon Indicator */}
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          layoutId="active-indicator"
                          initial={{ opacity: 0, y: -10, scale: 0.8 }}
                          animate={{ opacity: 1, y: -20, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.8 }}
                          className="absolute -top-10 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.5)] z-20"
                        >
                          <step.icon className="h-5 w-5 text-white" />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Main Number Circle */}
                    <motion.div
                      animate={{
                        borderColor: isActive ? "rgba(139, 92, 246, 1)" : "rgba(255, 255, 255, 0.1)",
                        boxShadow: isActive ? "0 0 40px rgba(139, 92, 246, 0.2)" : "none",
                        scale: isActive ? 1.05 : 1,
                        y: isActive ? -10 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-24 h-24 rounded-full border-2 flex items-center justify-center bg-[#020202] relative z-10 overflow-hidden"
                    >
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.15 }}
                          className="absolute inset-0 bg-primary"
                        />
                      )}
                      <span className={`text-3xl font-bold tracking-tighter transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/20'}`}>
                        {step.id}
                      </span>
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0.4,
                      y: isActive ? 0 : 4,
                    }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <h3 className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${isActive ? 'text-primary' : 'text-white'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-base leading-relaxed max-w-[260px] transition-colors duration-300 ${isActive ? 'text-white/70' : 'text-white/50'}`}>
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
